import SwiperCore, { Pagination, EffectFade, Navigation, Autoplay } from 'swiper/core';

SwiperCore.use([Pagination, EffectFade, Navigation, Autoplay]);

import {ready} from '../utilities';

function initialize() {
  document.querySelectorAll('.swiper-container').forEach((el) => {
    const loopless = el.dataset.loopless;
    new SwiperCore(el, {
      // Optional parameters
      loop: !loopless,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    });
  });

  document.querySelectorAll('.fade-container').forEach((el) => {
    const autoplay = el.dataset.autoplay;
    const duration = el.dataset.duration || 6;
    const slideCount = el.dataset.slideCount;
    new SwiperCore(el, {
      loop: true,
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 0,
      effect: slideCount > 1 ? "fade" : null,
      autoplay: {
        delay: (autoplay === "true" && slideCount > 1) ? parseInt(duration * 1000) : 999999,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      fadeEffect: {
        crossFade: true
      },
      speed: 500,
    });
  })
}

ready(initialize);