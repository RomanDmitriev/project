$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/Slides/left-arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/Slides/right-arrow.svg"></button>'
    });
  });