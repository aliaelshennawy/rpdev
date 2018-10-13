import $ from 'jquery';
import Slick from 'slick-carousel';

const homeSlider = {
  init() {
    this.initializeSlider();
  },
  initializeSlider() {
    $('.home-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            fade: false,
            focusOnSelect: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            fade: false,
            focusOnSelect: true
          }
        }
      ]
    });
  }
};

export default homeSlider;
