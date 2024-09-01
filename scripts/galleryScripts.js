window.onload = function() {
    fetch('../json/gallery.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const fileList = document.getElementById('gallery');
            
            if (!fileList) {
                console.error('Elemento con ID "gallery" no encontrado.');
                return;
            }
            
            data.forEach(image => {
                if (typeof image.src === 'string') {
                    const container = document.createElement('div')
                    container.classList.add("imgContainer")
                    const img = document.createElement('img');
                    img.src = image.src;
                    img.alt = image.src.split('/').pop();  // Usa el nombre del archivo como alt
                    container.appendChild(img);
                    fileList.appendChild(container);
                } else {
                    console.error('src no es una cadena:', image);
                }
            });
        })
        .catch(error => console.error('Error:', error));
}

const gallery = document.getElementById('gallery');
const fullscreenOverlay = document.getElementById('fullscreenOverlay');
const fullscreenImage = document.getElementById('fullscreenImage');
const closeButton = document.getElementById('closeButton');

function openFullscreen(src, alt) {
    fullscreenImage.src = src;
    fullscreenImage.alt = alt;
    fullscreenOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Trigger animations
    setTimeout(() => {
        fullscreenOverlay.classList.add('active');
        fullscreenImage.classList.add('active');
        closeButton.classList.add('active');
    }, 50);
}

function closeFullscreen() {
    fullscreenOverlay.classList.remove('active');
    fullscreenImage.classList.remove('active');
    closeButton.classList.remove('active');

    setTimeout(() => {
        fullscreenOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300); // Wait for the animation to finish
}

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        openFullscreen(e.target.src, e.target.alt);
    }
});

closeButton.addEventListener('click', closeFullscreen);

fullscreenOverlay.addEventListener('click', (e) => {
    if (e.target === fullscreenOverlay) {
        closeFullscreen();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeFullscreen();
    }
});