const carouselModule = (() => {
  return {
    configure: () => {
      const mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        speed: 1000,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
        breakpoints: {
          1023: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoplay: {
              delay: 3000,
            },
          }
        }
      });
    },
  }
})();