/*********************************************************
  Nav
*********************************************************/

// Headroom.js
// https://wicky.nillia.ms/headroom.js
import Headroom from 'headroom.js/dist/headroom.js';
window.Headroom = Headroom;
import 'headroom.js/dist/jQuery.headroom.js';


  var header_height = $('.header').outerHeight();
  var logo_height = $('.hero__logo').outerHeight();
  var offset_top = (logo_height - header_height);

  //console.log(logo_height);

  // Headroom.js scroll 
  var header = new Headroom(document.querySelector(".header"), {
    tolerance: 0,
    offset : offset_top, //vertical offset in px before element is first unpinned
    classes: {
      initial: "header--fixed",
      pinned: "slideDown",
      unpinned: "slideUp",
      top: "top",
      notTop: "not-top"
    }
  });
  header.init();


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(document).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header__nav, .header__logo').addClass('header--shrink-width');  
        $('.header').addClass('header--is-small'); 
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
          $('.header__nav, .header__logo').removeClass('header--shrink-width'); 
          $('.header').removeClass('header--is-small'); 
        }
    }
    
    lastScrollTop = st;
}




// Mobile nav
var trigger = $('.js-hamburger');
trigger.on('click', function() {
  $('body').toggleClass('hamburger-menu-open');
	$(this).toggleClass('animate');
});