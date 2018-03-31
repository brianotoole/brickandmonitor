//TimelineMax & ScrollMagic
//import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';   
//import TweenMax from 'gsap';
// TweenMax
//tl.method(element, duration, vars), delay

import $ from 'jquery';

let tl = new TimelineMax({});
let navItems = $('.header');
let heroContent = $('.hero__title');
tl
	// nav items
	navItems.each(function() {
    tl.add(
      TweenMax.from($(this), 0.3, {
        autoAlpha: 0,
        x: -30,
        ease: Power1.easeOut
      })
    );
  })

  // hero items
	heroContent.each(function() {
    tl.add(
      TweenMax.from($(this), 1, {
        autoAlpha: 0,
        y: 15,
        ease: Power1.easeOut
      })
    );
  })
  