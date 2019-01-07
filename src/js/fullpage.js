
import fullpage from 'fullpage.js';

// if homepage
if ($(".home").length > 0) {

  var fullPageInstance = new fullpage('.fullpage', {
    navigation: true,
    verticalCentered: true,
    responsiveSlides: false,

    afterLoad: function(index, nextIndex, direction){        
      //console.log(nextIndex);
        if ($('body.fp-viewing-1').length > 0) {
          $('.header__nav, .header__logo').removeClass('header--shrink-width');
          $('.header').removeClass('header--is-small'); 
        } else{
          $('.header__nav, .header__logo').addClass('header--shrink-width');   
          $('.header').addClass('header--is-small');   
        }
    }

  });

}
