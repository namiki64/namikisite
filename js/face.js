$(document).ready(function(){
  $('.eyes').slick({
    autoplay: true,
    rtl: false,
    slidesToShow: 3,
    autoplaySpeed: 2500,
    speed: 1000,
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
  $('.mouthes').slick({
    autoplay: true,
    rtl: true,
    slidesToShow: 3,
    autoplaySpeed: 2500,
    speed: 1000,
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
});