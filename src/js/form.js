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
	message = $('#message').val();

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
	if (message == null || message == '') {
	$('#js-form-message').addClass('text-error text-large').text('* Please enter your message.');
	$('#message').focus();
	return false;
	}
	else {
	  var datastring = $("#js-form").serialize();
	  $.ajax({
	    //send the form using formspree
	    url: "https://formspree.io/botoole518@gmail.com", 
	    method: "POST",
	    data: datastring,
	    dataType: "json"
	  });
	  $('#js-form-message').addClass('text-success text-large').text('Thanks for reaching out! Your message has been sent successfully. I\'ll be in touch as soon as possible.');
	  return false;
	}
}