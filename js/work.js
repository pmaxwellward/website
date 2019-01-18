
//collapsible animation
var coll = document.getElementsByClassName("collapsible");
const currentSlidez = document.querySelector('#currentSlide');
var illoSlides = [];
var slides = document.getElementById("currentSlide");

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

/*for (i = 0; i < illoSlides.length; i++) {
  var thumbDivs = document.createElement('div');
  thumbDivs.className = "thumb-column";
  document.getElementById("thumbnails").appendChild(thumbDivs);
}*/

for (i = 0; i < illoSlides.length; i++) {
  var picture = document.createElement('img');
  picture.src = `./images/illo_`+i+`_t.png`;
  picture.className = "demo";
  picture.classList.add("column");
  document.getElementById("thumbnails").appendChild(picture);
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
  //var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length-1}
  slides.firstElementChild.src = illoSlides[n];
}