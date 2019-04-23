/*********************************************************
  Nav
*********************************************************/

// Mobile nav
var trigger = $('.js-hamburger');
trigger.on('click', function() {
  $('body').toggleClass('hamburger-menu-open nav-open');
  $('.header__nav, .header__logo').removeClass('header--shrink-width');
  $(this).toggleClass('animate');
  //if ($(".nav-open").length > 0) {
  //$('.hamburger').addClass('hide');
  //}   
});

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
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.header__logo img').addClass('header--shrink-width');  
        $('.header').addClass('header--is-small'); 
        //$('.hamburger').removeClass('hide animate');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height() && st < navbarHeight) {
          $('.header__logo img').removeClass('header--shrink-width'); 
          $('.header').removeClass('header--is-small'); 
          //$('.hamburger').removeClass('hide animate');
        }
    }
    
    lastScrollTop = st;
}


// Accordion click
$(function() {
  $('.accordion__toggle').click(function() {
    $(this).toggleClass('open');
    $(this).closest('.accordion').find('.accordion__inner').slideToggle();
  });
});