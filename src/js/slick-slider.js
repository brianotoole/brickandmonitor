
import 'slick-carousel';


$(document).ready(function(){
  
  $(".projects-slider").slick({
    autoplay:false,
    autoplaySpeed:10000,
    speed:300,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:false,
    pauseOnDotsHover:false,
    cssEase:'linear',
    fade:true, // Disable This And Watch
    draggable:false,
    prevArrow:'<button class="prev-arrow"></button>',
    nextArrow:'<button class="next-arrow"></button>', 
  });
  
})