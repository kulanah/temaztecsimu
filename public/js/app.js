'use strict';


$("img[usemap]").rwdImageMaps();

let canvasClasses = [];

const openbox = new Canvas('./public/img/23.png', 'micrographboxcanvas'); 
const mainmicro = new Canvas('./public/img/32.png', 'mainmicroscopecanvas');

// let openbox = new Canvas('./public/img/23.png', 'micrographboxcanvas');
//when the html is all loaded it will call all the relevant javascript functions
$(document).ready(function(event) {
  pageSetup();
  clickFunctions();
  startTime();
});

let moveImage = function(deltax, deltay, target){
  if (openWindow == 0){
    openbox.moveImage(deltax, deltay);
  } else {
    mainmicro.moveImage(deltax, deltay);
  }

};

//this is called when the intensity button on the control panel is pressed.
let changeIntensity = function(delta){
  if (openWindow == 0){
    openbox.changeIntensity(delta);
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

/*let switchWindow = function(windowNum){
  if (openWindow == windowNum){
    console.log('siwtch target is current window');
  } else {
    //possibly give an open window object with array of background images and maps?  
    // or just make a really ugly switch statement
  }
  $('#mainimage').attr('src', './public/img/tia.png');
  $('#temmask').show();
  $('#temimage').show();
  $('#openbox').hide();
  $('#mainimage').css('background-color', 'transparent');


  openWindow = windowNum;
};*/

let handleMessage = function(message){
  let box = message.data[0];
  let lesson = message.data[1];
  let part = message.data[2];
  updateBox(lesson, part, box);
};


let shiftFocus = function(delta, target){
  if (openWindow == 0){
    openbox.focus(delta);
  } else {
    mainmicro.focus(delta);
  }
};

window.addEventListener('message', handleMessage, false);