'use strict';

let gunLense = 1;
let extractVal = 3500;
let extractFinal = 4500;
let kvVal = 200;
let fegVal = 63;

let controlShow = false;
let graphShow = false;
let maindrop = false;
let micro = true;

//array of elements that we close when you click outside of the item
//we loop thorough this later on to set this behavior on all of them
let closewhenoffclick = ['maindropdown', 'openfiledialogue', 'filemenu'];

let draggableList = ['openfiledialogue', 'microscopeGraph']

//current tab can be the followng values:
//status, search, tune, stem, FEGregister, eftem, dark field
let currenttab = 0;

let beamslider = $('#beamrange').slider({
  values: [1, 11], 
  value: 7,
});

$('#beamrange').on("change", function(event, ui){
  $('#beamvalue').text(beamslider.val());
});

//makes everything in drabbalelist a draggable object
for (let i = 0; i < draggableList.length; ++i){
  let $container = $('#' + draggableList[i]);

  $container.draggable({
    addclass: false
  });
};

$('#openfiledialogue').draggable({
  addClasses: false 
});

let startTime = function() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let ampm = 'AM';
  if (h > 12){
    h -= 12;
    ampm = 'PM';
  };
  m = checkTime(m);
  document.getElementById('clock').innerHTML =
  h + ":" + m + " " + ampm;
  let t = setTimeout(startTime, 500);
}

let checkTime = function(i) {
  if (i < 10){
    i = "0" + i
  };  // add zero in front of numbers < 10
  return i;
}

let hideBatch = function(){
  $('#controlsLeft').hide();
  $('#controlsRight').hide();
  $('#microscopeGraph').hide();
  $('#maindropdown').hide();
  $('#vacuumoverview').hide();
  $('#filemenu').hide();
  $('#openfiledialogue').hide();
  $('#leftcolsearch').hide();
  $('#tabsright').hide();
  $('#leftcoltune').hide();
};

let kvSlide = function(){
  if (kvVal == 0){
    kvIncrease();
  } else if (kvVal == 200){
    kvDecrease();
  }
};

let kvIncrease = function(){
  if (kvVal < 200){
    kvVal += 1;
    $('#kvval').text(kvVal + ' kV');
    setTimeout(kvIncrease, 300);
  } else {
    $('#leftcolumntension').attr('src', './public/img/hightension.png');
  }
};

let kvDecrease = function(){
  if (kvVal > 0){
    kvVal -= 1;
    $('#kvval').text(kvVal + ' kV');
    setTimeout(kvDecrease, 300);
  } else {
    $('#leftcolumntension').attr('src', './public/img/hightensiondone.png');
  }
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

$("img[usemap]").rwdImageMaps();

let moveImage = function(deltax, deltay){
  let element = $('#testimage');
  let topVal = element.offset().top + deltax;
  let leftVal = element.offset().left + deltay;

  $('#testimage').offset({top: topVal, left: leftVal});

  console.log('new offset is x: ' + element.offset().top + ' y: ' + element.offset().left);
}


$(document).ready(function(e) {
  clickFunctions();
  startTime();
  hideBatch();
});