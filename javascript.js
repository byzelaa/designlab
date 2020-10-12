// Filter Click Work Page
function filterClick() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function designer() {
    var element = document.getElementById("workOrder");
    element.classList.remove("designfield");
    var element = document.getElementById("workOrder");
    element.classList.toggle("designer");
  }

  function designfield() {
    var element = document.getElementById("workOrder");
    element.classList.remove("designer");
    var element = document.getElementById("workOrder");
    element.classList.toggle("designfield");
  }


  var slideIndex = 1;
  showSlides(slideIndex);
  
  
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  }