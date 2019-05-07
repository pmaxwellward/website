
//collapsible animation
var coll = document.getElementsByClassName("collapsible");
var slides = document.getElementById("currentSlide");
var thumbs = document.getElementsByClassName("thumbnails");
var N = slides.children.length;
var illoSlides = [];
var captionList = [
/*0*/"Eclipse | ANTIGRAVITY Magazine | 2017",
/*1*/"Orleans Parish DA | ANTIGRAVITY Magazine | 2017",
/*2*/"Voter Guide NOLA | ANTIGRAVITY Magazine | 2017",
/*3*/"Voter Guide NOLA | ANTIGRAVITY Magazine | 2017",
/*4*/"Voter Guide NOLA | ANTIGRAVITY Magazine | 2017",
/*5*/"Two Steppin' | Sculpture | Show Flyer",
/*6*/"This Guy's a Grinning | Painting | Show Flyer",
/*7*/"Parade Flyer | Ink | Parade Flyer",
/*8*/"Busker Trash | Ink | Show Flyer",
/*9*/"Pedal Steel | Ink | Show Flyer",
/*10*/"Portrait | Sen. Bill Caissdy",
/*11*/"Portrait | Sen. Pat Toomey",
/*12*/"Old Man | Ink | Personal",
/*13*/"Triangle Pose | Ink | Personal",
/*14*/"Do the Zydeco | Ink | Personal",
/*15*/"String Bean String Band | Ink | Personal",
/*16*/"Old Folks at the Square Dance | Ink | Personal",
/*17*/"Fais Do Do | Ink | Personal",
/*18*/"Have & Have Not 1/6 | Comic",
/*19*/"Have & Have Not 2/6 | Comic",
/*20*/"Have & Have Not 3/6 | Comic",
/*21*/"Have & Have Not 4/6 | Comic",
/*22*/"Have & Have Not 5/6 | Comic",
/*23*/"Have & Have Not 6/6 | Comic",
/*24*/"The Ballad of Bart | Comic"];

slides.style.setProperty('--n',N);

let x0 = null;
let slideIndex = 0;

function lock(e) { x0 = unify(e).clientX };
function move(e) {
  if(x0 || x0 === 0) {
    let dx = unify(e).clientX - x0, s = Math.sign(dx);
  
    if((slideIndex > 0 || s < 0) && (slideIndex < N - 1 || s > 0))
      slides.style.setProperty('--i', slideIndex -= s);
      showSlides(slideIndex);
    x0 = null
  }
};

function unify(e) { return e.changedTouches ? e.changedTouches[0] : e };
function drag(e) {
  e.preventDefault() 

  if(x0 || x0 === 0)  
    slides.style.setProperty('--tx', `${Math.round(unify(e).clientX - x0)}px`)  
};

slides.addEventListener('mousemove', drag, false);
slides.addEventListener('touchmove', drag, false);
slides.addEventListener('mousedown', lock, false);
slides.addEventListener('touchstart', lock, false);
slides.addEventListener('mouseup', move, false);
slides.addEventListener('touchend', move, false);
slides.addEventListener('touchmove', e => {e.preventDefault()}, false)

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

for (i = 0; i < 25; i++) {
  illoSlides.push(`./images/illo_`+i+`.png`);
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
  slides.style.setProperty('--i', slideIndex);
  captionText.innerHTML = captionList[slideIndex];
  illoThumbs[slideIndex].setAttribute("class","active");
  document.getElementById("thumbnail-slider").scrollTo((pic[slideIndex].offsetLeft-234),0);
}


