
//collapsible animation
var coll = document.getElementsByClassName("collapsible");
var slides = document.getElementById("currentSlide");
var thumbs = document.getElementsByClassName("thumbnails");
var illoSlides = [];
var captionList = [
/*0*/"Operation Moon Shadow | ANTIGRAVITY Magazine | 2017",
/*1*/"Orleans Parish DA Leon Cannizzaro | ANTIGRAVITY Magazine | 2017",
/*2*/"No-Nonsense Voter Education Guide NOLA Elections | ANTIGRAVITY Magazine | 2017",
/*3*/"No-Nonsense Voter Education Guide NOLA Elections | ANTIGRAVITY Magazine | 2017",
/*4*/"No-Nonsense Voter Education Guide NOLA Elections | ANTIGRAVITY Magazine | 2017",
/*5*/"Two Steppin' | Sculpture | Show Flyer",
/*6*/"This Guy's a Grinning | Painting | Show Flyer",
/*7*/"Children & Children at Heart | Ink | Parade Flyer",
/*8*/"Busker Trash | Ink | Show Flyer",
/*9*/"Mountain of a Musician | Ink | Show Flyer",
/*10*/"Portrait | Sen. Bill Caissdy",
/*11*/"Portrait | Sen. Pat Toomey",
/*12*/"Old Man | Ink | Personal",
/*13*/"Triangle Pose | Ink | Personal",
/*14*/"Do the Zydeco | Ink | Personal",
/*15*/"String Bean String Band | Ink | Personal",
/*16*/"Old Folks at the Square Dance | Ink | Personal",
/*17*/"Fais Do Do | Ink | Personal"];

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

for (i = 0; i < 18; i++) {
  illoSlides.push(`./images/illo_`+i+`.jpg`);
}

for (i = 0; i < illoSlides.length; i++) {
  var picture = document.createElement('img');
  picture.src = `./images/illo_`+i+`_t.png`;
  picture.className = "thumb-status";
  thumbs[i].appendChild(picture);
}

var illoThumbs;
const pic = document.querySelectorAll('.thumbnails img');
//setTimeout(function() {
  illoThumbs = Array.from(pic);
//}, 100);
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

//next/forward controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
//thumbnail image controls

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  for(x=0;x<illoThumbs.length;x++) {
    illoThumbs[x].setAttribute("class","thumb-status");
  }
  var captionText = document.getElementById("caption");
  if (n >= illoSlides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = illoSlides.length-1}
  slides.firstElementChild.src = illoSlides[slideIndex];
  captionText.innerHTML = captionList[slideIndex];
  illoThumbs[slideIndex].setAttribute("class","active");
  document.getElementById("thumbnail-slider").scrollTo((pic[slideIndex].offsetLeft-234),0);
}