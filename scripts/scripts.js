async function fetchSkillsData() {
    try {
        const response = await fetch('../json/skills.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Could not fetch skills data:", error);
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