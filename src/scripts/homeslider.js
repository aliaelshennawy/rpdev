import $ from 'jquery';
import Slick from 'slick-carousel';

const homeSlider = {
  init() {
    this.initializeHomeSlider();
    this.initializeCapabilitiesSlider();
    this.initializeProjectsSlider();
  },
  initializeHomeSlider() {
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
  },
  initializeCapabilitiesSlider() {
    $('.random-images-container').slick({
      dots: true,
      arrows: false,
      fade: true
    });
  },
  initializeProjectsSlider() {
    $('.projects-slider').slick({
      dots: true,
      arrows: false,
      fade: true,
      adaptiveHeight: true
    });
  }
};

export default homeSlider;
