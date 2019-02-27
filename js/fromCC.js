//main 
firstPress = false;
stage.enableMouseOver(24);
man = this.man;
text = this.text;
intro = ["intro_1", "intro_2", "intro_3", "intro_4", "intro_5"]; 
fly = ["fly_1", "fly_2", "fly_3", "fly_4", "fly_5", "fly_6"];
blurb = ["blurb_1", "blurb_2", "blurb_3", "blurb_4", "blurb_5", 
		"blurb_6", "blurb_7", "blurb_8", "blurb_9", "blurb_10", 
		"blurb_11", "blurb_12", "blurb_13", "blurb_14", "blurb_15", 
		"blurb_16", "blurb_17", "blurb_18"];
anger = ["anger_1", "anger_2", "anger_3", "anger_4", "anger_5", 
		"anger_6", "anger_7", "anger_8", "anger_9", "anger_10", 
		"anger_11", "anger_12", "anger_13", "anger_14", "anger_15", 
		"anger_16", "anger_17"];		
index = 0;
blurbIndex = 0;
angerIndex = 0;

shuffle(intro);
shuffle(blurb);
shuffle(anger);

if(!man.hasEventListener("click")) {
	this.man.addEventListener("click", fl_MouseClickHandler.bind(this));
}
this.man.addEventListener("mouseover", fl_MouseOverHandler_2);
this.man.addEventListener("mouseout", fl_MouseOutHandler_2);

function fl_MouseClickHandler(e) {
	if(e.currentTarget == man) {				
			man.gotoAndPlay("fly");
	}	
}

function fl_MouseOverHandler_2() {
	document.getElementById("myP").style.cursor = "pointer";
}

function fl_MouseOutHandler_2() {
	document.getElementById("myP").style.cursor = "default";
}

function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}

//frame 11 00 => 01
shortIdle = Math.floor(Math.random() * 2);


if(firstPress == false) {
	this.gotoAndPlay("lipSyncIdle_in");
}

if(firstPress == true && shortIdle == 1) {
	this.gotoAndPlay("idle_in");
}
//frame58 01 => 02
var range = [3,4,5];
idleCycle = range[Math.floor(Math.random() * 3)];
idleState = Math.floor(Math.random() * 5);

if(idleState == 1) {
	this.gotoAndPlay("idle_headIn");
	idleLoop = 1;
} else if (idleState == 2) {
	this.gotoAndPlay("headScratch_in");
	idleLoop = 1;
} else if (idleState == 3 || idleState == 4) {
	this.gotoAndPlay("lipSyncIdle_in");
} else {
	this.gotoAndPlay("idle");
}
//frame 121 03 => 04
if(idleLoop != idleCycle) {
	this.gotoAndPlay("idle_head");
	idleLoop++;
} else {
	this.gotoAndPlay("idle_headOut");
}
//frame 132 04 => 05
var range = [3,4,5];
idleCycle = range[Math.floor(Math.random() * 3)];
idleState = Math.floor(Math.random() * 4);

if(idleState == 1) {
	this.gotoAndPlay("headScratch_in");
	idleLoop = 1;
} else if (idleState == 2 || idleState == 3) {
	this.gotoAndPlay("lipSyncIdle_in");
} else {
	this.gotoAndPlay("idle");
	shortIdle = Math.floor(Math.random() * 2);
}
//frame 148 06 => 07
if(idleLoop != idleCycle) {
	this.gotoAndPlay("headScratch");
	idleLoop++;
} else {
	this.gotoAndPlay("headScratch_out");
}
//frame 154 07 => 08
var range = [3,4,5];
idleCycle = range[Math.floor(Math.random() * 3)];
idleState = Math.floor(Math.random() * 2);

if(idleState == 1) {
	this.gotoAndPlay("idle_headIn");
	idleLoop = 1;
} else {
	this.gotoAndPlay("idle");
	shortIdle = Math.floor(Math.random() * 2);
}
//frame 155 08
text.gotoAndStop("textStop");
buttonOn = true;
//frame 182 09 => 10
shuffle(fly);
if(index < 3) {
	this.gotoAndPlay(fly[index]);
} 
else {
	this.gotoAndPlay("fly_out");
}
	
function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}
//frame 214 10 => 11
if(index < 3) {
	index++;
	this.gotoAndPlay(fly[index]);
} else {
	this.gotoAndPlay("fly_out");
}
//frame 242 11 => 12
if(index < 3) {
	index++;
	this.gotoAndPlay(fly[index]);
} else {
	this.gotoAndPlay("fly_out");
}
//frame 269 12 => 13
if(index < 3) {
	index++;
	this.gotoAndPlay(fly[index]);
} else {
	this.gotoAndPlay("fly_out");
}
//frame 301 13 => 14
if(index < 3) {
	index++;
	this.gotoAndPlay(fly[index]);
} else {
	this.gotoAndPlay("fly_out");
}
//frame 329 14 => 15
if(index < 3) {
	index++;
	this.gotoAndPlay(fly[index]);
} else {
	this.gotoAndPlay("fly_out");
}
//frame 356 15 => 16
if(index < 3) {
	index++;
	this.gotoAndPlay(fly[index]);
} else {
	this.gotoAndPlay("fly_out");
}
//frame 396 16 => 17
index = 0;
buttonOn = true;

if(angerIndex >= anger.length-1) {
	shuffle(anger);
	angerIndex = 0;
}

text.gotoAndPlay(anger[angerIndex]);
angerIndex++;

function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}
//frame 424 17 => 18
this.gotoAndPlay("lipSync_in");
//frame 432 18 => 19
this.gotoAndPlay("idle_in");
//frame 452 19 => 20
if(firstPress == false) {
	text.gotoAndPlay(intro[0]);
	firstPress = true;
} else {
	if(blurbIndex >= blurb.length-1) {
		shuffle(blurb);
		blurbIndex = 0;
	}
	text.gotoAndPlay(blurb[blurbIndex]);
	blurbIndex++;
}

function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}
//frame 497 20 => 21
this.gotoAndPlay("lipSyncIdle");
//frame 505 21 end
this.gotoAndPlay("idle");