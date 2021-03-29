// import Swiper bundle with all modules installed
import Swiper from 'swiper';

// init Swiper
var sliderGallery = document.querySelectorAll('.slider_gallery');

for(var i = 0; i < sliderGallery.length; i++){
  let slider = sliderGallery[i];
  let container = slider.querySelector('.swiper-container');
  let nextEl = slider.querySelector('.swiper-button-next');
  let prevEl = slider.querySelector('.swiper-button-prev');
  let scrollbar = slider.querySelector('.swiper-scrollbar');

  const swiper = new Swiper(container, {
    speed: 200,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
      nextEl: nextEl,
      prevEl: prevEl,
    },
    scrollbar: {
      el: scrollbar,
    },
  });
}


// product thumbs gallery
var sliderProduct = document.querySelectorAll('.slider_product');

for(var i = 0; i < sliderProduct.length; i++){
  let slider = sliderProduct[i];
  var sliderProductTop = slider.querySelector('.slider__top');
  var sliderProductThumbs = slider.querySelector('.slider__thumbs');

  var galleryThumbs = new Swiper(sliderProductThumbs, {
    speed: 200,
    slidesPerView: 9,
    spaceBetween: 16,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      991: {
        slidesPerView: 8,
        spaceBetween: 8,
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 10,
      },
    }
  });
  var galleryTop = new Swiper(sliderProductTop, {
    speed: 200,
    spaceBetween: 5,
    // effect: 'fade',
    thumbs: {
      swiper: galleryThumbs,
    },
  });
}


