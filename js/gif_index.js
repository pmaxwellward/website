const gifMan = document.querySelector(".gif-Man img");
const man_00 = {name: "GIFs/00.gif", length: 1041.666};
const man_01 = {name: "GIFs/01.gif", length: 1375};
const man_s1 = {name: "GIFs/01.gif", length: 458.333};
const man_02 = {name: "GIFs/02.gif", length: 875};
const man_03 = {name: "GIFs/03.gif", length: 1750};
const man_04 = {name: "GIFs/04.gif", length: 458.333};
const man_05 = {name: "GIFs/05.gif", length: 250};
const man_06 = {name: "GIFs/06.gif", length: 416.666};
const man_07 = {name: "GIFs/07.gif", length: 250};
const man_08 = {name: "GIFs/08.gif", length: 500};
const man_09 = {name: "GIFs/09.gif", length: 625};
const fly_10 = {name: "GIFs/10.gif", length: 1333.333};
const fly_11 = {name: "GIFs/11.gif", length: 1166.666};
const fly_12 = {name: "GIFs/12.gif", length: 1125};
const fly_13 = {name: "GIFs/13.gif", length: 1333.333};
const fly_14 = {name: "GIFs/14.gif", length: 1166.666};
const fly_15 = {name: "GIFs/15.gif", length: 1125};
const man_16 = {name: "GIFs/16.gif", length: 1666.666};
const man_17 = {name: "GIFs/17.gif", length: 1166.666};
const man_18 = {name: "GIFs/18.gif", length: 166.666};
const man_19 = {name: "GIFs/19.gif", length: 833.333};
const man_20 = {name: "GIFs/20.gif", length: 1875};
const man_21 = {name: "GIFs/21.gif", length: 333.333};

const intro = [man_01,man_02,man_03,man_04,man_05,man_06];

var i = 0;
var firstPress = false;
var speechTestLength = 5000;
//load man_x.name
//setTimeout(loadScene, man_x, man_x+1)
//load man_x+1.name, x++
//setTime(loadScene, man_x, man_x+1)

function playScene() {
    var internalCallback = function() {
        return function() {
            if(i > intro.length) {
                setTimeout(internalCallback, intro[i].lengthlength);
                loadScene();
            }
        }
    }
    setTimeout(internalCallback, intro[i].length);
}

playScene();
//function setDeceleratingTimeout(loadScene, factor, times) {
//    var internalCallback = function(t, counter) {
//        return function() {
//            if (t-- > 0) {
//                window.setTimeout(internalCallback, ++counter * factor);
//                loadScene();
//            }
//        }
//    }(times, 0);
//
//    window.setTimeout(internalCallback, factor);
//}
//setDeceleratingTimeout(function() {
//    console.log('hi');
//}, 10, 10);

function loadScene() {
    gifMan.src = intro[i+1].name;
    i++;
}

//setTimeout(loadScene, man_00.length, man_s1.name);
//setTimeout(loadScene, man_s1.length, man_20.name);
//setTimeout(loadScene, speechTestLength, man_21.name);
//setTimeout(loadScene, man_21.length, man_00.name);


