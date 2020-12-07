window.onload = function() {document.body.scrollTop = document.documentElement.scrollTop = 0;};
window.onbeforeunload = function () {
  window.scrollTo(0, 0);

}


  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });







  var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};

            var elementsToShow = document.querySelectorAll('.show-on-scroll');



            function loop() {

              elementsToShow.forEach(function (element) {
                if (isElementInViewport(element)) {
                  element.classList.add('is-visible');
                } else {
                  element.classList.remove('is-visible');
                }
              });
            
              scroll(loop);
            }

loop();
// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

            var vid = document.getElementById("myVideo"); 

function playVid() { 
  vid.play(); 
} 

function pauseVid() { 
  vid.pause(); 
} 

function pagination() {

  var offset = $(document).scrollTop();
  var windowHeight = $(window).height();
  var $body = $('body');

  switch (true) {
    case (offset > (windowHeight * 3.75)):
      $body.removeClass().addClass('page-5');
      break;
    case (offset > (windowHeight * 2.75)):
      $body.removeClass().addClass('page-4');
      break;
    case (offset > (windowHeight * 1.75)):
      $body.removeClass().addClass('page-3');
      break;
    case (offset > (windowHeight * .75)):
      $body.removeClass().addClass('page-2');
      break;
    default:
      $body.removeClass().addClass('page-1');
   }
}

pagination();

$(document).on('scroll', pagination);

$(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});





var front=document.getElementById("front");
var about=document.getElementById("description");
var slide1=document.getElementById("sld1");
var slide2=document.getElementById("sld2");
var slide3=document.getElementById("sld3");
var slide4=document.getElementById("sld4");
function hideDiv(clicked_id){
var content=document.getElementById(clicked_id);


  
 var x= document.getElementById("pg-3a");
 var y=document.getElementById("lightbox");
 
if (y.style.display === "none") {
  y.style.display = "block";
} else {
  y.style.display = "none";
}



}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
}