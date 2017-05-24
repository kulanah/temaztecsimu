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
};

let moveImage = function(deltax, deltay){
  let element = $('#testimage');
  let topVal = element.offset().top + deltax;
  let leftVal = element.offset().left + deltay;

  element.offset({top: topVal, left: leftVal});
};

let moveMask = function(deltax, deltay){
  let element = $('#mask');
  let topVal = element.offset().top + deltax;
  let leftVal = element.offset().left + deltay;

  element.offset({top: topVal, left: leftVal});
};

let changeIntensity = function(delta){
  let element = $('#mask');

  let startW = element.width();
  let startH = element.height();

  element.width(startW * delta);
  element.height(startH * delta);

  let topVal = element.offset().top * delta;
  let leftVal = element.offset().left * delta;

  console.log(startW);

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

