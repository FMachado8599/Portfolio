
document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('contactScrollButton');
    const section2 = document.getElementById('contact');

    scrollButton.addEventListener('click', function() {
        section2.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('proyectsScrollButton');
    const section2 = document.getElementById('proyects');

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




