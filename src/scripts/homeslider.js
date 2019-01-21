import $ from 'jquery';
import Slick from 'slick-carousel';

const homeSlider = {
  init() {
    if ($('.home-slider').length > 0) {
      this.timePerSlide();
    }
    if ($('.random-images-container').length > 0) {
      this.initializeCapabilitiesSlider();
    }
    this.initializeProjectsSlider();
  },
  timePerSlide() {
    var slider = $('.home-slider');

    slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      autoplay: true,
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

    var durationList = $('.slider__item').map(function(index, item) {
      return item.getAttribute('data-time');
    });
    console.log(durationList);
    var slideIndex = 0;
    var changeSlide = function(timing) {
      setTimeout(function() {
        if (timing !== 0) {
          slider.slick('slickNext');
        }
        if (slideIndex >= durationList.length) slideIndex = 0;
        changeSlide(durationList[slideIndex++]);
      }, timing);
    };
    changeSlide(0);
    $('.home-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
      if (currentSlide == 0) {
        $('.home-slider').slick('slickPause');
        myVideo.play();
      }
      if (currentSlide == 2) {
        $('.home-slider').slick('slickPause');
        myVideo2.play();
      }
    });
    document.getElementById('myVideo').addEventListener('ended', myHandler, false);
    document.getElementById('myVideo2').addEventListener('ended', myHandler, false);
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
