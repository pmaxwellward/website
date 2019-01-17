
//collapsible animation
var coll = document.getElementsByClassName("collapsible");
const currentSlidez = document.querySelector('#currentSlide');
//const demo = document.querySelectorAll('.demo');
var illoSlides = [];

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

for (i = 0; i < 23; i++) {
  illoSlides.push(`./images/illo_`+i+`.jpg`);
}

for (i = 0; i < illoSlides.length; i++) {
  var picture = document.createElement('img');
  picture.src = `./images/illo_`+i+`_t.png`;
  picture.className = "demo";
  picture.onclick = function () {currentSlide(i)};
  document.getElementById("thumbnails").appendChild(picture);
}

//open the thing
function openModal() {
  document.getElementById('myModal').style.display = "block";
}
//close the thing
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 0;;
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
  var slides = document.getElementById("currentSlide");
  //var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  slides.firstElementChild.src = illoSlides[n];
  //currentSlidez.firstElementChild.src = demo[n].src;
  console.log("end");
}