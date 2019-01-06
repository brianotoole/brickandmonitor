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

  console.log(logo_height);

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