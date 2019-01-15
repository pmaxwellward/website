
//collapsible animation
var coll = document.getElementsByClassName("collapsible");
var i;
const currentSlidez = document.querySelector('.currentSlide');
const demo = document.querySelectorAll('.demo');

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

//open the thing
function openModal() {
  document.getElementById('myModal').style.display = "block";
}
//close the thing
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

//next/forward controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("currentSlide");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  //for (i = 0; i < slides.length; i++) {
  //  slides[i].style.display = 'none';
  //}
  //for (i = 0; i < demo.length; i++) {
  //  demo[i].className = demo[i].className.replace(" active", "");
  //}
  //slides[slideIndex-1].style.display = "block";
  //demo[slideIndex-1].className += " active";
  //captionText.innerHTML = demo[slideIndex-1].alt;
  currentSlidez.firstElementChild.src = demo[n-1].src;
  console.log(currentSlidez.firstElementChild.src);
}