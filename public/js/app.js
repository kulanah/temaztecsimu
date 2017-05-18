'use strict';

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



$(document).mouseup(function(e) {
  for (let i = 0; i < closewhenoffclick.length; ++i){
    var $container = $('#' + closewhenoffclick[i]);

    // if the target of the click isn't the container nor a descendant of the container
    if (!$container.is(e.target) && $container.has(e.target).length === 0) {
      $container.hide();
    }
  }
});


let moveImage = function(deltax, deltay){
  let element = $('#testimage');
  let topVal = element.offset().top + deltax;
  let leftVal = element.offset().left + deltay;

  $('#testimage').offset({top: topVal, left: leftVal});

  console.log('new offset is x: ' + element.offset().top + ' y: ' + element.offset().left);
}

let isVisible = function(name){

  if ($('#' + name).css('display') == 'none'){
    return false;
  } else {
    return true;
  }
}


//when the html is all loaded it will call all the relevant javascript functions
$(document).ready(function(e) {
  startTime();
  $("img[usemap]").rwdImageMaps();
  clickFunctions();
  hideBatch();
  pageSetup();
});
