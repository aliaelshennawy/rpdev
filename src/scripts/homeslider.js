import $ from 'jquery';
import Slick from 'slick-carousel';

const homeSlider = {
  init() {
    if ($('.home-slider').length > 0) {
      this.initializeHomeSlider();
    }
    if ($('.random-images-container').length > 0) {
      this.initializeCapabilitiesSlider();
    }
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
            speed: 3000,
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
    $('.home-slider').on('afterChange', function(event, slick, currentSlide) {
      if (currentSlide == 3) {
        $('.home-slider').slick('slickPause');
        myVideo.play();
      }
    });
    document.getElementById('myVideo').addEventListener('ended', myHandler, false);
    function myHandler(e) {
      $('.home-slider').slick('slickPlay');
    }
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
