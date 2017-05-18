'use strict';

let colopen = true;

//array of elements that we close when you click outside of the item
//we loop thorough this later on to set this behavior on all of them
let closewhenoffclick = ['maindropdown', 'openfiledialogue', 'filemenu'];


let beamslider = $('#beamrange').slider({
  values: [1, 11], 
  value: 7,
});

$('#beamrange').on("change", function(event, ui){
  $('#beamvalue').text(beamslider.val());
});

$('#openfiledialogue').draggable({
  addClasses: false 
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


$('img').on('dragstart', function(event){ 
    event.preventDefault(); 
});

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
});
