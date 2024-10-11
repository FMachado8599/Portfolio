const projects = [
    {
      title: "Buna Café",
      webCapture: "./media/1x/Screenshot 2024-05-22 203712.png",
      avatar: "./media/1x/logos/BUNA ICON.svg",
      tools: [
        "./media/SVG/html-blanco.svg",
        "./media/SVG/css-blanco.svg",
        "./media/SVG/sass-blanco.svg",
        "./media/SVG/bootstrap-blanco.svg"
      ],
      description: "Static web with HTML, CSS, SASS, and Bootstrap. Overcame responsive design challenges and learned style optimization.",
      siteLink: "https://bunacafeuy.com",
      githubLink: "https://github.com/FMachado8599/Buna-Cafe-3.0"
    },
    {
      title: "Doux",
      webCapture: "./media/1x/Screenshot 2024-08-11 224306.png",
      avatarSvg: `<svg fill="#2d3c25" class="avatarSvg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px">
        <path d="M 13.212891 3.7265625 C 11.830746 3.6832898 10.388609 3.9844382 9.3144531 5.0585938 A 1.50015 1.50015 0 0 0 9.3144531 5.0605469 C 8.2874326 6.0889025 7.6643753 7.4559628 7.5683594 8.9082031 A 1.50015 1.50015 0 0 0 7.5664062 8.9980469 L 7.5 19.972656 C 4.7922063 21.937912 4.4533225 25.927932 6.828125 28.302734 L 8.609375 30.083984 C 7.8023049 32.067769 8.1395885 34.442323 9.7539062 36.056641 L 11.439453 37.744141 C 13.053866 39.358553 15.428496 39.693521 17.412109 38.886719 L 19.472656 40.947266 C 21.737306 43.21055 25.512366 43.047379 27.572266 40.595703 A 1.50015 1.50015 0 0 0 27.671875 40.462891 L 27.982422 40 A 1.50015 1.50015 0 0 0 28.005859 40 L 39.498047 39.929688 A 1.50015 1.50015 0 0 0 39.587891 39.925781 C 41.039219 39.829821 42.406625 39.210562 43.435547 38.181641 C 44.511678 37.10551 44.81889 35.662215 44.78125 34.271484 C 44.74361 32.880754 44.343694 31.379674 43.019531 30.453125 C 41.355545 29.287648 38.05342 27.4751 36.8125 26.785156 L 37.013672 26.482422 A 1.50015 1.50015 0 0 0 37.029297 26.460938 C 37.914991 25.082804 37.718395 23.249645 36.560547 22.091797 L 34.197266 19.730469 C 34.569102 18.522344 34.505333 17.210411 33.566406 16.271484 L 31.224609 13.929688 A 1.50015 1.50015 0 0 0 31.224609 13.927734 C 30.285318 12.989764 28.972122 12.92633 27.763672 13.298828 L 25.427734 10.962891 C 24.250462 9.7838767 22.378926 9.604501 20.998047 10.533203 A 1.50015 1.50015 0 0 0 20.978516 10.546875 L 20.666016 10.763672 C 19.961856 9.7047132 18.061598 6.8300096 17.013672 5.4355469 C 16.063652 4.1715293 14.595035 3.7698352 13.212891 3.7265625 z M 13.117188 6.7265625 C 13.875042 6.7502895 14.500255 7.0833457 14.615234 7.2363281 C 15.491656 8.4025718 17.501543 11.424524 18.207031 12.480469 L 10.511719 17.849609 L 10.566406 9.0976562 C 10.616346 8.3752334 10.922693 7.6932064 11.435547 7.1796875 C 11.614391 7.0008431 12.359331 6.7028352 13.117188 6.7265625 z M 23.001953 12.935547 C 23.111937 12.945734 23.217323 12.99454 23.304688 13.082031 A 1.50015 1.50015 0 0 0 23.306641 13.083984 L 25.132812 14.910156 L 10.435547 27.667969 L 8.9492188 26.181641 C 7.8308631 25.063285 7.9847063 23.279081 9.2773438 22.369141 L 22.693359 13.007812 L 22.673828 13.023438 C 22.777389 12.953788 22.891969 12.92536 23.001953 12.935547 z M 28.769531 15.898438 C 28.888494 15.90318 29.006225 15.953625 29.103516 16.050781 L 31.445312 18.392578 C 31.639751 18.587015 31.650707 18.860566 31.472656 19.070312 L 17.226562 35.482422 A 1.50015 1.50015 0 0 0 17.222656 35.486328 C 16.259782 36.603339 14.605201 36.665748 13.5625 35.623047 L 11.875 33.935547 C 10.832084 32.892631 10.892081 31.238299 12.009766 30.275391 A 1.50015 1.50015 0 0 0 12.013672 30.271484 L 28.425781 16.023438 C 28.530376 15.934651 28.650569 15.893695 28.769531 15.898438 z M 32.585938 22.361328 L 34.4375 24.212891 C 34.609652 24.385043 34.638164 24.632024 34.505859 24.837891 L 25.259766 38.673828 C 24.299694 39.800008 22.64254 39.872377 21.59375 38.824219 L 19.828125 37.060547 L 32.585938 22.361328 z M 35.144531 29.28125 C 36.292603 29.928512 40.028563 32.020453 41.298828 32.910156 C 41.426666 32.999606 41.76064 33.591996 41.78125 34.353516 C 41.80186 35.115035 41.491322 35.883678 41.314453 36.060547 C 40.801501 36.573499 40.1198 36.879689 39.396484 36.929688 L 29.994141 36.988281 L 35.144531 29.28125 z"/>
      </svg>`,
      tools: [
        "./media/SVG/html-blanco.svg",
        "./media/SVG/css-blanco.svg",
        "./media/SVG/sass-blanco.svg",
        "./media/SVG/bootstrap-blanco.svg",
        "./media/SVG/react-blanco.svg"
      ],
      description: "My first implementation of React. Routing and context managing where my favorite parts, while connecting the proyect to Firebase was interesting.",
      siteLink: "https://douxboulangerie.netlify.app",
      githubLink: "https://github.com/FMachado8599/E-Commerce-React"
    }
  ];
  
  let cardContainer;
  let cardWidth = 332; // Ancho de la card + margen
  
  function createCards() {
    cardContainer = document.getElementById('card-container');
    if (!cardContainer) {
      console.error('Card container not found');
      return;
    }
  
    projects.forEach((project, index) => {
      const cardElement = document.createElement('div');
      cardElement.className = `card ${index === 0 ? 'active' : ''}`;
      cardElement.innerHTML = `
        <div class="webCaptureContainer">
          <img class="webCapture" src="${project.webCapture}" alt="${project.title}"/>
        </div>
        ${project.avatar ? `<img src="${project.avatar}" alt="${project.title} logo" class="avatar"/>` : project.avatarSvg}
        <div class="cardText">
          <div class="proyectTitle">
            <h3 class="proyectName">${project.title}</h3>
            <div class="proyectTools">
              ${project.tools.map(tool => `<img src="${tool}" alt="tech icon" />`).join('')}
            </div>
          </div>
          <p>${project.description}</p>
        </div>
        <div class="proyectLinks">
          <a target="_blank" class="siteLinkButton" href="${project.siteLink}">Visit site</a>
          <a target="_blank" href="${project.githubLink}">
            <img src="./media/SVG/github-blanco.svg" class="skill githubLink"/>
          </a>
        </div>
      `;
      cardContainer.appendChild(cardElement);
    });
    
    // Actualizar el ancho de la card después de crearlas
    const firstCard = document.querySelector('.card');
    if (firstCard) {
      cardWidth = firstCard.offsetWidth + parseInt(window.getComputedStyle(firstCard).marginRight);
    }
  }
  
//   function updateActiveCard() {
//     if (!cardContainer) return;
  
//     const scrollPosition = window.scrollY;
//     const windowHeight = window.innerHeight;
//     const cardHeight = windowHeight * 0.8;
//     const activeCardIndex = Math.min(Math.floor(scrollPosition / cardHeight), projects.length - 1);
  
//     const cardElements = document.querySelectorAll('.card');
//     cardElements.forEach((card, index) => {
//       if (index === activeCardIndex) {
//         card.classList.add('active');
//       } else {
//         card.classList.remove('active');
//       }
//     });
  
//     const translateX = -activeCardIndex * cardWidth;
//     cardContainer.style.transform = `translate(calc(-50% + ${translateX}px), -50%)`;
//   }
  
  function handleResize() {
    const firstCard = document.querySelector('.card');
    if (firstCard) {
      cardWidth = firstCard.offsetWidth + parseInt(window.getComputedStyle(firstCard).marginRight);
    }
    updateActiveCard();
  }
  
  function init() {
    createCards();
    updateActiveCard();
    window.addEventListener('scroll', updateActiveCard);
    window.addEventListener('resize', handleResize);
  }
  
  // Asegurarse de que el DOM esté completamente cargado antes de ejecutar el script
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }