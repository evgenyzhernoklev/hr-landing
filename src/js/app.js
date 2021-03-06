/*
 * Third party
 */

//= ../../node_modules/jquery/dist/jquery.min.js
//= vendor/slick.js



/*
 * Custom
 */

$(document).ready(function () {
  $('.slider-images').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-info',
    responsive: [
      {
        breakpoint: 920,
        settings: {
          arrows: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.slider-info').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    focusOnSelect: true,
    asNavFor: '.slider-images',
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          fade: true,
          dots: true,
          vertical: false
        }
      }
    ]
  });
});
