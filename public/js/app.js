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
}

let moveMask = function(deltax, deltay){
  let element = $('#mask');
  let topVal = element.offset().top + deltax;
  let leftVal = element.offset().left + deltay;

  element.offset({top: topVal, left: leftVal});
}


let isVisible = function(name){
  if ($('#' + name).css('display') == 'none'){
    return false;
  } else {
    return true;
  }
};

