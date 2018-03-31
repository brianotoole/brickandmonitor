/**
  * MOBILE MENU
  */

import $ from 'jquery';

class MobileMenu {

  constructor() {
    this.body = $('body');
    this.siteHeader = $('.header');
    this.menuIcon = $('.header__menu-icon');
    this.menuContent = $('.header__menu-content');
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.body.toggleClass('menu-is-open')
    this.menuContent.toggleClass('header__menu-content--is-open');
    this.siteHeader.toggleClass('header--is-open');
    this.menuIcon.toggleClass('header__menu-icon--close');
  }

  
}

export default MobileMenu;