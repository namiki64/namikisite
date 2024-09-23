$(document).ready(function(){
  $('.eyes').slick({
    autoplay: true,
    arrows: false,
    rtl: false,
    slidesToShow: 3,
    autoplaySpeed: 1500,
    speed: 1000,
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.mouthes').slick({
    autoplay: true,
    arrows: false,
    rtl: true,
    slidesToShow: 3,
    autoplaySpeed: 3000,
    speed: 1000,
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});