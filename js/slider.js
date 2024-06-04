﻿document.addEventListener('DOMContentLoaded', function() {
  const showSlider = new Swiper('.showcase-carousel', {
    loop: true,
    slidesPerView: 3,
    speed: 1500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    pagination: {
      el: '.showcase-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.showcase-navigation__next',
      prevEl: '.showcase-navigation__prev'
    },
  })
});
