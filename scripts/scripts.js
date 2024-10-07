async function fetchSkillsData() {
    try {
        const response = await fetch('./json/skills.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Could not fetch skills data PEPITOOOOOOOOO:", error);
        return null;
    }
}

async function fetchSvgColor(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const svgText = await response.text();
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
        const paths = svgDoc.querySelectorAll('path, circle, rect');
        for (let element of paths) {
            const fill = element.getAttribute('fill');
            if (fill && fill !== 'none') {
                return fill;
            }
        }
        return null;
    } catch (error) {
        console.error("Could not fetch SVG color:", error);
        return null;
    }
}

async function createSkillIcon(skill) {
    const div = document.createElement('div');
    div.className = 'skill-icon';
    
    const img = document.createElement('img');
    img.src = skill.src;
    img.alt = skill.name;
    
    const blurImg = document.createElement('img');
    blurImg.src = skill.hoverSrc;
    blurImg.className = 'img-blur';
    blurImg.alt = '';  // Decorative image, no alt text needed
    
    div.appendChild(blurImg);
    div.appendChild(img);

    const color = await fetchSvgColor(skill.hoverSrc);
    
    if (color) {
        div.style.setProperty('--skill-color', color);
    }

    div.addEventListener('mouseenter', () => {
        img.src = skill.hoverSrc;
    });

    div.addEventListener('mouseleave', () => {
        img.src = skill.src;
    });

    return div;
}

async function populateSkills() {
    const skillsData = await fetchSkillsData();
    if (!skillsData) return;

    const developingGrid = document.querySelector('#developing .skills-grid');
    const designingGrid = document.querySelector('#designing .skills-grid');

    for (let skill of skillsData.developing) {
        developingGrid.appendChild(await createSkillIcon(skill));
    }

    for (let skill of skillsData.designing) {
        designingGrid.appendChild(await createSkillIcon(skill));
    }
}

document.addEventListener('DOMContentLoaded', populateSkills);

document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('contactScrollButton');
    const section2 = document.getElementById('contact');

    scrollButton.addEventListener('click', function() {
        section2.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('aboutMeScrollButton');
    const section2 = document.getElementById('aboutMe');

    scrollButton.addEventListener('click', function() {
        section2.scrollIntoView({ behavior: 'smooth' });
    });
});

// Get the textIntro container element
var textoIntro = document.querySelector('.textoIntro');

// Store the original background color
var originalBG = window.getComputedStyle(textoIntro).backgroundColor;

// Add mousemove event listener
textoIntro.addEventListener('mousemove', function(e) {
    // Get the bounding rectangle of the div
    var rect = textoIntro.getBoundingClientRect();

    // Calculate mouse position relative to the container using rect
    var x = e.clientX - rect.left; // Mouse X relative to the div
    var y = e.clientY - rect.top;  // Mouse Y relative to the div

    // Create the radial gradient
    var gradient = `radial-gradient(circle at ${x}px ${y}px, rgba(from #0c506e60 r g b / 40%), rgba(from #0370a150 r g b / 10%) 200px)`;//rgba(from $blue-90060 r g b / 40%) 0%, rgba(from $blue-70050 r g b / 10%) 100%

    // Apply the gradient as the background
    textoIntro.style.background = gradient;

    // Remove any transition while the mouse is inside the div
    textoIntro.style.transition = 'none';
});

// Add mouseleave event listener to reset background smoothly
textoIntro.addEventListener('mouseleave', function() {
    // Apply a smooth transition when leaving
    // textoIntro.style.transition = 'background 0.5s ease-in-out';

    // Reset the background to the original color
    textoIntro.style.background = originalBG;
});

//-------------------------- HIDE ON SCROLL NAVBAR --------------------------//
let lastScrollTop = 0;
const navbar = document.getElementById('barraNav');

window.addEventListener('scroll', function() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    // Show navbar if at the top of the page
    if (currentScroll === 0) {
        navbar.style.top = '0';
    }
    // Scroll down: hide the navbar
    else if (currentScroll > lastScrollTop) {
        navbar.style.top = '-80px'; // Hide it (adjust this value depending on navbar height)
    }
    // Scroll up: show the navbar
    else {
        navbar.style.top = '0';
    }

    lastScrollTop = currentScroll;
});