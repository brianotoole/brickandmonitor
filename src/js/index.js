/**
  * MAIN APP SCRIPTS ENTRY POINT
  */

// extract text from webpack to bundled output file
require("../scss/style.scss");
require("./RotatingWords.js");

import MobileMenu from './MobileMenu';
var mobileMenu = new MobileMenu();
