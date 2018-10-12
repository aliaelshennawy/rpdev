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
      autoplaySpeed: 5000
    });
  }
};

export default homeSlider;
