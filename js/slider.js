document.addEventListener('DOMContentLoaded', function() {

  const showSlider = new Swiper('.showcase-carousel', {

    loop: true,

    slidesPerView: 1,

    speed: 1500,

    centeredSlides: true,

    pagination: {

      el: '.showcase-pagination',

      type: 'fraction',

    },

    navigation: {

      nextEl: '.showcase-navigation__next',

      prevEl: '.showcase-navigation__prev'

    },

    breakpoints: {

      640: {

        slidesPerView: 3

      },

    },

  });

});
