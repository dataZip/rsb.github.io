/* Certificate Section */

var totalSlides = 5;
var slideIndex = 1;
buildSlideshow();
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > totalSlides) {slideIndex = 1}
  if (n < 1) {slideIndex = totalSlides}
  for (i = 0; i < totalSlides; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  document.getElementById("currNo").innerHTML = '<p> '+slideIndex+' / '+totalSlides+' </p>';
}

function buildSlideshow(){
	document.getElementById("currNo").innerHTML = '<h5 align="center"> 1 / '+totalSlides+' </h5>';
	document.getElementById("certi").innerHTML = '';
	document.getElementById("certiDot").innerHTML = '';
	var imgtag='';
	var dottag='';
	for (i = 1; i <= totalSlides; i++) {
		imgtag +='<div class="mySlides"><img src="img/certi/'+i+'.jpg" class="cert"></div>\n';
		dottag +='<span class="dot" onclick="currentSlide('+i+')"></span>\n';
	}
	document.getElementById("certi").innerHTML = imgtag;
	document.getElementById("certiDot").innerHTML = dottag;
}