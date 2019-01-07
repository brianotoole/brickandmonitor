/*********************************************************
  Nav
*********************************************************/

// Mobile nav
var trigger = $('.js-hamburger');
trigger.on('click', function() {
  $('body').toggleClass('hamburger-menu-open');
	$(this).toggleClass('animate');
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
