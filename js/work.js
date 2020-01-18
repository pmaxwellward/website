
//collapsible animation
const coll = document.getElementsByClassName("collapsible");
const content = document.getElementsByClassName("content");
var slides = document.getElementById("currentSlide");
var thumbs = document.getElementsByClassName("thumbnails");
var prev = document.querySelector("a.prev");
var next = document.querySelector("a.next");
var maxW = window.matchMedia("(max-width:499px)");
var N = slides.children.length;
var illoSlides = [];
var captionList = [
/*0*/"Eclipse | ANTIGRAVITY Magazine | 2017",
/*1*/"Orleans Parish DA | ANTIGRAVITY Magazine | 2017",
/*2*/"Voter Guide NOLA | ANTIGRAVITY Magazine | 2017",
/*3*/"Voter Guide NOLA | ANTIGRAVITY Magazine | 2017",
/*4*/"Voter Guide NOLA | ANTIGRAVITY Magazine | 2017",
/*5*/"GDS Quarterly Cover | Summer 2019",
/*6*/"The Cost of Bad Communication | GDS Quarterly | 2019",
/*7*/"Communication Obstacles | GDS Quarterly | 2019",
/*8*/"Two Steppin' | Sculpture | Show Flyer",
/*9*/"This Guy's a Grinning | Painting | Show Flyer",
/*10*/"Parade Flyer | Ink | Parade Flyer",
/*11*/"Busker Trash | Ink | Show Flyer",
/*12*/"Pedal Steel | Ink | Show Flyer",
/*13*/"Portrait | Sen. Bill Caissdy",
/*14*/"Portrait | Sen. Pat Toomey",
/*15*/"Old Man | Ink | Personal",
/*16*/"Triangle Pose | Ink | Personal",
/*17*/"Do the Zydeco | Ink | Personal",
/*18*/"String Bean String Band | Ink | Personal",
/*19*/"Old Folks at the Square Dance | Ink | Personal",
/*20*/"Fais Do Do | Ink | Personal",
/*21*/"Have & Have Not 1/6 | Comic",
/*22*/"Have & Have Not 2/6 | Comic",
/*23*/"Have & Have Not 3/6 | Comic",
/*24*/"Have & Have Not 4/6 | Comic",
/*25*/"Have & Have Not 5/6 | Comic",
/*26*/"Have & Have Not 6/6 | Comic",
/*27*/"The Ballad of Bart | Comic"];

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
  if(window.matchMedia("(max-width:499px)").matches) {
    coll[i].style.padding = "15px";
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  } else {
      coll[i].addEventListener("mouseenter", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
      content.addEventListener("mouseenter", function(){
        this.previousElementSibling.classList.toggle("active");
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
    coll[i].addEventListener("mouseleave", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
      content.addEventListener("mouseleave", function(){
        this.previousElementSibling.classList.toggle("active");
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  }
}

for (i = 0; i < captionList.length; i++) {
  if(maxW.matches) {
    illoSlides.push(`./images/illo_`+i+`_m.png`);
    slides.children[i].src = illoSlides[i];
  } else {
     illoSlides.push(`./images/illo_`+i+`.png`);
     slides.children[i].src = illoSlides[i];
  }

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
  document.getElementById('myModal').style.display = "flex";
  if(maxW.matches) {
    prev.style.visibility = "hidden";
    next.style.visibility = "hidden";
  }
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
function openFull() {
  window.open("./images/illo_"+slideIndex+".jpg");
}

