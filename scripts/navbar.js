//-------------------------- HIDE ON SCROLL --------------------------//
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
