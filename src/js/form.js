// validate on formsubmit
var formSubmit = $('#js-form-submit');
formSubmit.click(function() {
	validateForm();
	return false;
});

// form validation
function validateForm() {
	var email, atpos, dotpos, username;

	name = $('#name').val();
	email = $('#email').val();
	atpos = email.indexOf('@');
	dotpos = email.lastIndexOf('.');

	if (name == null || name == '') {
	$('#js-form-message').addClass('text-error text-large').text('* Please enter your name.');
	$('#name').focus();
	return false;
	}
	if(email == null || email == '') {
	$('#js-form-message').addClass('text-error text-large').text('* Please enter your email.');
	$('#email').focus();
	return false;
	}
	if(atpos < 1 || dotpos < atpos+2 || dotpos+2 >= email.length) {
	$('#js-form-message').addClass('text-error text-large').text('* Please enter a valid email address.');
	$('#email').focus();
	return false;
	}
	else {
	  var datastring = $("#js-form").serialize();
	  $.ajax({
	    //send the form using formspree
	    url: "//formspree.io/brian@brickandmonitor.com", 
	    method: "POST",
	    data: datastring,
	    dataType: "json"
	  });
	  $('#js-form-message').addClass('text-success text-large').text('Thanks for your interest! Your message has been sent successfully. We\'ll be in touch as soon as possible.');
	  return false;
	}
}