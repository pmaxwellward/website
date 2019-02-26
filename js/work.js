
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
/*4*/"No-Nonsense Voter Education Guide NOLA Elections  | ANTIGRAVITY Magazine | 2017",
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
/*17*/"Fais Do Do | Ink | Personal",
/*18*/"Have & Have Not 1/6 | Comic",
/*19*/"Have & Have Not 2/6 | Comic",
/*20*/"Have & Have Not 3/6 | Comic",
/*21*/"Have & Have Not 4/6 | Comic",
/*22*/"Have & Have Not 5/6 | Comic",
/*23*/"Have & Have Not 6/6 | Comic",
/*24*/"The Ballad of Bart | Comic"];


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
  slides.firstElementChild.lastElementChild.src = illoSlides[slideIndex];
  slides.firstElementChild.lastElementChild.id = "illoSlide"+slideIndex.toString();
  captionText.innerHTML = captionList[slideIndex];
  illoThumbs[slideIndex].setAttribute("class","active");
  document.getElementById("thumbnail-slider").scrollTo((pic[slideIndex].offsetLeft-234),0);
  magnify(slides.firstElementChild.firstElementChild.id,3);
  //slides.firstElementChild.firstChildElement.backgroundImage = illoSlides[slideIndex];
}

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  img1 = slides.firstElementChild.lastElementChild;

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img1.parentElement.insertBefore(glass, img1);

  /* Set background properties for the magnifier glass: */
  slides.firstElementChild.firstElementChild.style.backgroundImage = "url('" + img1.src + "')";
  slides.firstElementChild.firstElementChild.style.backgroundRepeat = "no-repeat";
  slides.firstElementChild.firstElementChild.style.backgroundSize = (img1.width * zoom) + "px " + (img1.height * zoom) + "px";
  bw = 3;
  w = slides.firstElementChild.firstElementChild.offsetWidth / 2;
  h = slides.firstElementChild.firstElementChild.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  slides.firstElementChild.firstElementChild.addEventListener("mousemove", moveMagnifier);
  img1.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img1.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img1.width - (w / zoom)) {x = img1.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img1.height - (h / zoom)) {y = img1.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    slides.firstElementChild.firstElementChild.style.left = (x - w) + "px";
    slides.firstElementChild.firstElementChild.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    slides.firstElementChild.firstElementChild.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img1.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}