'use strict';


$("img[usemap]").rwdImageMaps();

let canvasClasses = [];

const setupbox = new Canvas('./public/img/setupbeam.png', 'setupboxcanvas');
const openbox = new Canvas('./public/img/23.png', 'micrographboxcanvas'); 
const mainmicro = new Canvas('./public/img/32.png', 'mainmicroscopecanvas');

setupbox.setColor(142, 142, 142, 1);

// let openbox = new Canvas('./public/img/23.png', 'micrographboxcanvas');
//when the html is all loaded it will call all the relevant javascript functions
$(document).ready(function(event) {
  pageSetup();
  clickFunctions();
  startTime();
});


//TODO remove this target
let moveImage = function(deltax, deltay, target){
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.moveImage(deltax, deltay);
    } else {
      setupbox.moveImage(deltax, deltay);
    }
  } else {
    mainmicro.moveImage(deltax, deltay);
  }

};

//this is called when the intensity button on the control panel is pressed.
let changeIntensity = function(delta){
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.changeIntensity(delta);
    } else {
      setupbox.changeIntensity(delta);
    }
  } else {
    mainmicro.changeIntensity(delta);
  }
};

let isVisible = function(name){
  if ($('#' + name).css('display') == 'none'){
    return false;
  } else {
    return true;
  }
};

let updateBox = function(lesson, part, box){
  let urlString = './public/docs/temlist/l' + lesson + 'p' + part + '.htm';
  $(box).attr('data', urlString);
};

let handleMessage = function(message){
  let box = message.data[0];
  let lesson = message.data[1];
  let part = message.data[2];
  updateBox(lesson, part, box);
};


let shiftFocus = function(delta){
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.focus(delta);
    } else {
      setupbox.focus(delta);
    }
  } else {
    mainmicro.focus(delta);
  }
};

window.addEventListener('message', handleMessage, false);