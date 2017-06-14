'use strict';


$("img[usemap]").rwdImageMaps();

//when the html is all loaded it will call all the relevant javascript functions
$(document).ready(function(e) {
  pageSetup();
  clickFunctions();
  startTime();
  hideBatch();
});

let hideBatch = function(){
  $('#microControls').hide();
  $('#microscopeGraph').hide();
  $('#maindropdown').hide();
  $('#vacuumoverview').hide();
  $('#filemenu').hide();
  $('#openfiledialogue').hide();
  $('#leftcolsearch').hide();
  $('#tabsright').hide();
  $('#leftcoltune').hide();
  $('#leftcolstem').hide();
  $('#leftcolfegregister').hide();
  $('#leftcoleftem').hide();
  $('#leftcoldarkfield').hide();
  $('#filtercontroldiv').hide();
  $('#openbox').hide(); 
  $('#temmask').hide();
  $('#temimage').hide();
};

//from rcontroller roller
let moveImage = function(deltax, deltay){
  let element = $('#temimage');
  let topVal = element.offset().top + deltax;
  let leftVal = element.offset().left + deltay;

  element.offset({top: topVal, left: leftVal});
};

//from lcontroller roller
let moveMask = function(deltax, deltay){
  let element = $('#temmask');
  let topVal = element.offset().top + deltax;
  let leftVal = element.offset().left + deltay;

  element.offset({top: topVal, left: leftVal});
};


//this is called when the intensity button on the control panel is pressed.
//TODO: Add context awareness to allow it to control different elements
let changeIntensity = function(delta){
  let element = $('#temmask');

  let startW = element.width();
  let startH = element.height();

  let xMove = (1 - delta) * startW /2;
  let yMove = (1 - delta) * startH /2;

  element.width(startW * delta);
  element.height(startH * delta);

  let topVal = element.offset().top + yMove;
  let leftVal = element.offset().left + xMove;

  element.offset({
    top: topVal,
    left: leftVal
  });
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
}

window.addEventListener('message', handleMessage, false);