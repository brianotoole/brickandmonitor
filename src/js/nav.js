// Mobile nav
var trigger = $('#js-nav-toggle');
trigger.on('click', function() {
  $('#js-nav-mobile').toggleClass('nav-open');
  $('body').toggleClass('nav-open');
	$('#js-nav-toggle').toggleClass('active');
});

// scroll on click of anchor link (a href="#")
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 900);
        return false;
      }
    }
  });
});

// add different bg class name
// ex - '.bg-alt1' to each post item
$('.post-item').each(function(i) {
	var num = (i % 4) + 1; //start index at 1
	$(this).addClass('bg-alt' + num);
	$(this).attr('data-item', i);
});