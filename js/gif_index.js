const gifMan = document.querySelector(".gif-Man img");
const man_00 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/00.gif", length: 625};
const man_01 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/01.gif", length: 1375};
const man_02 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/02.gif", length: 875};
const man_03 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/03.gif", length: 1750};
const man_04 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/04.gif", length: 458.333};
const man_05 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/05.gif", length: 250};
const man_06 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/06.gif", length: 416.666};
const man_07 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/07.gif", length: 250};
const man_08 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/08.gif", length: 500};
const man_09 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/09.gif", length: 625};
const fly_10 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/10.gif", length: 1333.333};
const fly_11 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/11.gif", length: 1166.666};
const fly_12 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/12.gif", length: 1125};
const fly_13 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/13.gif", length: 1333.333};
const fly_14 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/14.gif", length: 1166.666};
const fly_15 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/15.gif", length: 1125};
const man_16 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/16.gif", length: 1666.666};
const man_17 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/17.gif", length: 1166.666};
const man_18 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/18.gif", length: 166.666};
const man_19 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/19.gif", length: 833.333};
const man_20 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/20.gif", length: 1875};
const man_21 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/21.gif", length: 333.333};

var idleLoop;
var idleCycle;
var idleState;
var loading;
var flyIndex = 0;
var buttonOn = false;
var firstPress = false;
var range = [3,4,5];
var fly = [fly_10,fly_11,fly_12,fly_13,fly_14,fly_15];



function playScene() {
    switch(gifMan.src) {
        
        case man_00.name:
            if(firstPress == false) {
                loadScene(man_19);
            }
            if(firstPress == true) {
                loadScene(man_01);
            }
            break;

        case man_01.name:
            idleCycle = range[Math.floor(Math.random() * 3)];
            idleState = Math.floor(Math.random() * 5);
                
            if(idleState == 1) {
                loadScene(man_02);
                idleLoop = 1;
            } else if (idleState == 2) {
                loadScene(man_05);
                idleLoop = 1;
            } else if (idleState == 3 || idleState == 4) {
                loadScene(man_19);
            } else {
                loadScene(man_00);
            }
            break;

        case man_02.name:
            loadScene(man_03);
            break;

        case man_03.name:
            if(idleLoop != idleCycle) {
                loadScene(man_03);
                idleLoop++;
            } else {
                loadScene(man_04);
            }
            break;

        case man_04.name:
            idleCycle = range[Math.floor(Math.random() * 3)];
            idleState = Math.floor(Math.random() * 4);
            
            if(idleState == 1) {
                loadScene(man_05);
                idleLoop = 1;
            } else if (idleState == 2 || idleState == 3) {
                loadScene(man_19);
            } else {
                loadScene(man_00);
            }
            break;

        case man_05.name:
            loadScene(man_06);
            break;

        case man_06.name:
            if(idleLoop != idleCycle) {
                loadScene(man_06);
                idleLoop++;
            } else {
                loadScene(man_07);
            }
            break;

        case man_07.name:
            idleCycle = range[Math.floor(Math.random() * 3)];
            idleState = Math.floor(Math.random() * 2);

            if(idleState == 1) {
            	loadScene(man_02);
            	idleLoop = 1;
            } else {
            	loadScene(man_00);
            }
            break;

        case man_08.name:
            loadScene(man_09);
            break;

        case man_09.name:
            if(flyIndex < 3) {
                loadScene(fly[flyIndex]);
            } 
            else {
                loadScene(man_16);
            }
            break;

        case fly_10.name:
            flyIndex++;
            if(flyIndex < 3) {
                loadScene(fly[flyIndex]);
            } 
            else {
                loadScene(man_16);
            }
            break;

        case fly_11.name:
            flyIndex++;
            if(flyIndex < 3) {
                loadScene(fly[flyIndex]);
            } 
            else {
                loadScene(man_16);
            }
            break;

        case fly_12.name:
            flyIndex++;
            if(flyIndex < 3) {
                loadScene(fly[flyIndex]);
            } 
            else {
                loadScene(man_16);
            }
            break;

        case fly_13.name:
            flyIndex++;
            if(flyIndex < 3) {
                loadScene(fly[flyIndex]);
            } 
            else {
                loadScene(man_16);
            }
            break;

        case fly_14.name:
            flyIndex++;
            if(flyIndex < 3) {
                loadScene(fly[flyIndex]);
            } 
            else {
                loadScene(man_16);
            }
            break;

        case fly_15.name:
            flyIndex++;
            if(flyIndex < 3) {
                loadScene(fly[flyIndex]);
            } 
            else {
                loadScene(man_16);
            }
            break;

        case man_16.name:
            flyIndex = 0;
            buttonOn = false;
            loadScene(man_17);
            break;

        case man_17.name:
            loadScene(man_18);
            break;

        case man_18.name:
            loadScene(man_01);
            break;

        case man_19.name:
            if(firstPress == false) {
                firstPress = true;
            }
            loadScene(man_20);
            break;

        case man_20.name:
            loadScene(man_21);
            break;

        case man_21.name:
            loadScene(man_00);
            break;

        default:
            console.log("error");
    }
}

function loadScene(scene) {
    gifMan.src = scene.name;
    loading = setTimeout(playScene, scene.length);
}

setTimeout(playScene, man_00.length);

function poke() {
    clearTimeout(loading);
    if (buttonOn == false) {
        buttonOn = true;
        shuffle(fly);
        loadScene(man_08);   
    } else {
        null;
    }
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



