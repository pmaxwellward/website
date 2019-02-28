const gifMan = document.querySelector(".gif-Man img");
const man_00 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/00.gif", length: 1041.666};
const man_01 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/01.gif", length: 1375};
const man_s1 = {name: "file:///C:/Users/Graphics/Documents/website/GIFs/01.gif", length: 458.333};
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

const intro = [man_01,man_02,man_03,man_04,man_05,man_06];

function playScene() {
    switch(gifMan.src) {
        case man_00.name:
            loadScene(man_01);
            break;
        case man_01.name:
            loadScene(man_02);
            break;
        case man_02.name:
            loadScene(man_03);
            break;
        case man_03.name:
            loadScene(man_04);
            break;
        case man_04.name:
            loadScene(man_05);
            break;
        case man_05.name:
            loadScene(man_06);
            break;
        case man_06.name:
            loadScene(man_07);
            break;
        case man_07.name:
            loadScene(man_00);
            break;
        default:
            console.log("error");
    }
}

function loadScene(scene) {
    gifMan.src = scene.name;
    setTimeout(playScene, scene.length);
}

setTimeout(playScene, man_00.length);



