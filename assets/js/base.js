$("#b0").click(function() {
	$('html, body').animate({
		scrollTop: $("#profile").offset().top
	}, 850);
});

$("#b00").click(function() {
	$('html, body').animate({
		scrollTop: $("body").offset().top
	}, 850);
});

$("#b1").click(function() {
	$('html, body').animate({
		scrollTop: $("#education").offset().top
	}, 850);
});

$("#b2").click(function() {
	$('html, body').animate({
		scrollTop: $("#technicalSkills").offset().top
	}, 850);
});

$("#b2a").click(function() {
	$('html, body').animate({
		scrollTop: $("#technicalExperience").offset().top
	}, 850);
});

$("#b2b").click(function() {
	$('html, body').animate({
		scrollTop: $("#projects").offset().top
	}, 850);
});


$("#b3").click(function() {
	$('html, body').animate({
		scrollTop: $("#portfolio").offset().top
	}, 850);
});

$("#b4").click(function() {
	$('html, body').animate({
		scrollTop: $("#contact").offset().top
	}, 850);
});

$("#b4a").click(function() {
	window.open("http://www.github.com/drrnyip");
});

$("#b4b").click(function() {
	window.location.href = "mailto:drrnyip@gmail.com";
});

$("#b4c").click(function() {
	window.open("https://www.facebook.com/drrnyip");
});

$("#b4d").click(function() {
	window.open("assets/Resume - Yip.pdf");
});

$("#b4e").click(function() {
	window.open("https://www.linkedin.com/in/drrnyip");
});

$('.nav a').click(function(){
	$('#navvy').collapse('hide');
});

$(document).ready(function(){

});



$("input#value").click(function() {
	$('#b1').toggleClass("customHover");
	alert ('true');
});


function te1(){
	window.open("https://github.com/drrnyip/MontyRun");
}

function te2(){
	window.open("https://github.com/drrnyip/Hotel-Database");
}

function te3(){
	window.open("https://github.com/drrnyip/ChatApp");
}

function pr1(){
	window.open("https://translatorprototype1.firebaseapp.com");
}

function pr2(){
	window.open("https://play.google.com/store/apps/details?id=com.whixpyl.montyrun&hl=en");
}

function pr3(){
	window.open("http://thrivio-ocw.meteorapp.com");
}

function pr4(){
	window.open("http://www.launchisland.com/");
}

$(window).scroll(function(){
	if($(this).scrollTop() > 350){
		$('.navbar-fixed-top').addClass('opaque');
	}
	else {
		$('.navbar-fixed-top').removeClass('opaque');
	}
})
