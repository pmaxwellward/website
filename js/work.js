
//collapsible animation
var coll = document.getElementsByClassName("collapsible");
var slides = document.getElementById("currentSlide");
var thumbs = document.getElementsByClassName("thumbnails");
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
  picture.classList.add("column");
  thumbs[i].appendChild(picture);
}

var illoThumbs;
const pic = document.querySelectorAll('.thumbnails img');
setTimeout(function() {
  illoThumbs = Array.from(pic);
}, 100);
var i;
pic.forEach(e => e.addEventListener('click', function() {
  i = illoThumbs.indexOf(e);
  currentSlide(i);
}))

//open the thing
function openModal() {
  document.getElementById('myModal').style.display = "block";
}
//close the thing
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 0;
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
  //var captionText = document.getElementById("caption");
  if (n >= illoSlides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = illoSlides.length-1}
  slides.firstElementChild.src = illoSlides[slideIndex];
}