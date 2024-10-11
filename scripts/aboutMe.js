//-------------------------- COLORES SKILLS --------------------------//

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

//-------------------------- ANIMACIONES CONTAINERS --------------------------//

const targetVisibility = 0.5; //--Ajustar porcentaje visible del elemento donde termina la animacion

//---------- LEFT ----------//
const boxLeft = document.getElementById('img-about-me');


function handleScrollLeft() {

    const boxRect = boxLeft.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const adjustedScrollProgress = Math.min(Math.max((windowHeight - boxRect.top) / (windowHeight * targetVisibility), 0), 1);
  
    boxLeft.style.opacity = adjustedScrollProgress;
    boxLeft.style.transform = `translate(${(adjustedScrollProgress - 1) * 200}px, ${(1 - adjustedScrollProgress) * 200}px)`;
  }

const observerLeft = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      window.addEventListener('scroll', handleScrollLeft);
    } else {
      window.removeEventListener('scroll', handleScrollLeft);
    }
  });
}, {
  threshold: 0
});

observerLeft.observe(boxLeft);



//---------- RIGHT ----------//
const boxRight = document.getElementById('info-group');

function handleScrollRight() {
    const boxRect = boxRight.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    const adjustedScrollProgress = Math.min(Math.max((windowHeight - boxRect.top) / (windowHeight * targetVisibility), 0), 1);

    boxRight.style.opacity = adjustedScrollProgress;
    boxRight.style.transform = `translate(${(1 - adjustedScrollProgress) * 200}px,${(1 - adjustedScrollProgress) * 200}px)`;
  }

const observerRight = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      window.addEventListener('scroll', handleScrollRight);
    } else {
      window.removeEventListener('scroll', handleScrollRight);
    }
  });
}, {
  threshold: 0
});

observerRight.observe(boxRight);