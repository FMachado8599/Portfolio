const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    preventClicks: true,
    speed: 300,
    freeMode: false,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
      700:{
        slidesPerView: 2
      },
      1000:{
        slidesPerView: 3
      },
      1200:{
        slidesPerView: 4
      }
    }
  });

  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   direction: 'horizontal',
  //   loop: true,
  
  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  
  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });