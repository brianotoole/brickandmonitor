// Uses GSAP (TweenMax) + ScrollMagic
import ScrollMagic from "scrollmagic/scrollmagic/uncompressed/ScrollMagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import TweenMax from "gsap/src/uncompressed/TweenMax";
import TimelineMax from "gsap/src/uncompressed/TimelineMax";

// init GSAP TimelineMax & ScrollMagic controllers
var tl = new TimelineMax();
var tl1 = new TimelineMax();
var tl2 = new TimelineMax();
var controller = new ScrollMagic.Controller();
var heroItems = $(".hero > *");
var introItems = $(".section-intro > *");

tl.set(".hero .hero__bg", {visibility:"hidden"});
$(function() {
  //tl.set("body", { className: "+=loading" });
  //tl.set(".pre-loader-logo-wrap", { className: "+=active" });
  //tl.set(".pre-loader", { className: "+=is-loading" });
  //tl.set(".pre-loader-logo .svg", { className: "+=active" })
    //tl.to(".is-loading", 0.8, { ease: Power0.easeNone })
    //.fromTo('.is-loading', 0.25, {width: "100%"}, {backgroundColor: "white",width: "0%", ease: Power0.easeNone})
    //tl.set("body", { className: "-=loading" })
    //.set(".pre-loader-logo-wrap", { className: "-=active" })
    //.set(".pre-loader", { className: "-=is-loading" })
   //.set(".pre-loader-logo .svg", { className: "-=active" });

  tl.from($(".hero .hero__bg"), 0.5, {
    autoAlpha: 0,
    scale: 1.1,
    ease: Power1.easeOut
  }),
  TweenMax.from($(".hero .hero__content"), 0.5, {
    autoAlpha: 0,
    y: 20,
    ease: Power0.easeOut
  });

});

function slideInHeroItems() {
  heroItems.each(function() {
    tl.add(
      TweenMax.from($(this), 0.4, {
        autoAlpha: 0,
        y: -5,
        ease: Power0.easeOut
      })
    );
  });
}

function slideUpIntroItems() {
  introItems.each(function() {
    tl.add(
      TweenMax.from($(this), 0.4, {
        autoAlpha: 0,
        y: -5,
        ease: Power0.easeOut
      })
    );
  });
}

function staggerInPosts() {
  var newsScene = new ScrollMagic.Scene({
    //scene options
    triggerElement: "#js-trigger-posts",
    triggerHook: 0.8,
    reverse: false
  })
    .setTween(tl1)
    //.addIndicators() //debug only
    .addTo(controller);
  return tl1.staggerFrom(
    ".post__item",
    0.5,
    { y: 5, autoAlpha: 0, ease: Power1.easeOut },
    0.15
  );
}

function slideUpFooter() {
  var newsScene = new ScrollMagic.Scene({
    //scene options
    triggerElement: "#js-trigger-contact",
    triggerHook: 0.8,
    reverse: false
  })
    .setTween(tl2)
    //.addIndicators() //debug only
    .addTo(controller);
  return tl2.from(
    ".btn-contact",
    0.4,
    { y: 0, autoAlpha: 0, ease: Power0.easeOut },
    0.25
  );
}

$(function() {
  // If news page
  if ($(".page-news").length > 0) {
    staggerInPosts();
  }
});
