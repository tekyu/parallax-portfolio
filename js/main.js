$(document).ready(function(){

//load
	$('.load').find('span').delay(300).fadeOut(300).end().delay(600).fadeOut(300);


//smoothscrolling
	$('nav a[href*="#"]').click(function(){
		$('html,body').animate({
			scrollTop:$($(this).attr('href')).offset().top-100
			},500,'linear');
		return false;
	});


});