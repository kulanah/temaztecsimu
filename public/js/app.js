'use strict';


$("img[usemap]").rwdImageMaps();

/*
  idea:  seperate the onclick files into different groupings of classes, allowing each one to be set on its' own when the apropriate step is selected.

  issues:  violates dry when the same button is used in multiple sections 
  
  code to turn off onclicks not related to current flags.  Potentially create new function so that I can also exclude the important helper onclicks (navigation etc)
  $('area').not($('.wx')).prop('onclick', null).off('click');

  
*/

let screenshotCount = 0;
let activeFrames = [];
let randomProperties = true;
let randomValues = [];
for(i = 0; i < 14; i++){
  randomValues.push(Math.random());
}
// setupboxcanvasimage tracks the beam pixel and the nine surrounding pixels
// Used to accurately evaluate specimen height when the beam leaves the microscope setup window or becomes very small
let imagectx = $('#setupboxcanvasimage')[0].getContext('2d');

drawColumn();

let micrographImage = './public/img/23.png';
let micrographMag = 43000;
let micrographWidth = 501.961;
let micrographMaterial = silicon;
let overFocusSrc = '';
let overFocusValue = 0;
let underFocusSrc = '';
let underFocusValue = 0;
let underFocusImage = new Image;
let overFocusImage = new Image;
if(location.search.includes('image=')){
  micrographImage = 'https://s3-us-west-2.amazonaws.com/cemn-upload-image/' + location.search.split('image=')[1].split('&')[0];
  micrographMag = location.search.split('mag=')[1].split('&')[0];
  micrographWidth = location.search.split('width=')[1].split('&')[0];
  let m = location.search.split('material=')[1].split('&')[0].split(',');
  micrographMaterial = new Material(m[1], m[3], m[4], m[5], m[6], m[7], m[8], m[9]);
}
if(location.search.includes('focus=')){
  let f = location.search.split('focus=')[1].split('&')[0].split(',');
  overFocusSrc = 'https://s3-us-west-2.amazonaws.com/cemn-upload-image/' + f[0];
  overFocusValue = f[1];
  underFocusSrc = 'https://s3-us-west-2.amazonaws.com/cemn-upload-image/' + f[2];
  underFocusValue = f[3];
  overFocusImage.crossOrigin = 'anonymous';
  overFocusImage.src = overFocusSrc + '?';
  underFocusImage.crossOrigin = 'anonymous';
  underFocusImage.src = underFocusSrc + '?';
}

//Setup for the alignment box, currently only sets the tune tab one.
const tunealignmentbox = new AlignmentBox(data, '.alignmenttextdata', '#alignmenthelptune');
tunealignmentbox.drawInital();
tunealignmentbox.addNextButton($('#tunealignright'));
tunealignmentbox.addPrevButton($('#tunealignleft'));
tunealignmentbox.addDoneButton($('#tunealigndone'));

//setup for the canvas classes
const setupbox = new Canvas(micrographImage, 'setupboxcanvas', micrographMag, micrographWidth);
const openbox = new Canvas(micrographImage, 'micrographboxcanvas', micrographMag, micrographWidth);
const mainmicro = new Canvas('./public/img/32.png', 'mainmicroscopecanvas', 63000, 2932);

setupbox.hueRotateActive = true;

//when the html is all loaded it will call all the relevant javascript functions
$(document).ready(function(event) {
  pageSetup();
  clickFunctions();
  startTime();
  prepareContent();
});

function drawInfoPanelValues(){
  if(stigmationMode == 'None'){
    stigmatorActive = false;
  }
  if(stigmatorActive){
    $('#mfxvalue').text(stigmationMode + ' Stig X');
    $('#mfyvalue').text(stigmationMode + ' Stig Y');
  } else {
    if(alignmentMode == 'None'){
      $('#mfxvalue').text('');
      $('#mfyvalue').text('');
    } else {
      $('#mfxvalue').text(alignmentMode + ' X');
      $('#mfyvalue').text(alignmentMode + ' Y');
    }
  }
  if(availableAlignments.length > 1){
    $('#r2value').text('Align MF Toggle');
  } else {
    $('#r2value').text('');
  }
};

function setActiveAlignment(){
  if(activeAlignment >= availableAlignments.length){
    // Prevent out-of-bounds indexing for availableAlignments
    activeAlignment = 0;
  }
  switch(availableAlignments[activeAlignment]){
    case 'Condensor Stig':
      activateCondensor();
      break;
    default:
      stigmatorActive = false;
      alignmentMode = availableAlignments[activeAlignment];
      break;
  }
}

let moveImage = function(deltax, deltay){
  if (openScreen == 0){
    openbox.moveImage(deltax, deltay);
    if (setupbox.moveImage(deltax, deltay)){
      projectionLens2.xCenter += deltax / 20;
      drawColumn();
    }
  } else {
    mainmicro.moveImage(deltax, deltay);
  }

};

//TODO: find some good way to abstract all these functions that solely exist to handle the current location of t he program
//at the very least swap to switch statements


//this is called when the intensity button on the control panel is pressed.
let changeIntensity = function(delta){
  if (openScreen == 0){
    let change = setupbox.changeIntensity(delta);

    condenserLens2.f -= -change / 30;

    openbox.maskR = setupbox.maskR * 4;
    openbox.haloX = setupbox.haloX * 4;
    openbox.haloY = setupbox.haloY * 4;
    drawColumn();
  } else {
    mainmicro.changeIntensity(delta);
  }
  updateCanvas();
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
    openbox.focus(delta);
    setupbox.focus(delta);
    objectiveUpperPolepiece.f = 30 + setupbox.defocus / 100;
    drawColumn();
  } else {
    mainmicro.focus(delta);
  }
};

let shiftFocusStep = function(delta){
  if (openScreen == 0){
    openbox.shiftFocusStep(delta);
    setupbox.shiftFocusStep(delta);
  } else {
    mainmicro.shiftFocusStep(delta);
  }
};

let zoom = function(delta){
  if (openScreen == 0){
    openbox.zoom(delta);
    setupbox.zoom(delta);
    projectionLens1.f = 100 - 50 * setupbox.mag / setupbox.zooms.length;
    drawColumn();
  } else {
    mainmicro.zoom(delta);
  }
};

let multiXDrag = function(deltaX){
  if (openScreen == 0){
    openbox.multiXDrag(deltaX);
    setupbox.multiXDrag(deltaX);
  } else {
    mainmicro.multiXDrag(deltaX);
  }
};

let multiYDrag = function(deltaX){
  if (openScreen == 0){
    openbox.multiYDrag(deltaX);
    setupbox.multiYDrag(deltaX);
  } else {
    mainmicro.multiYDrag(deltaX);
  }
};

let updateCanvas = function(){
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.drawCanvas();
    } else {
      setupbox.drawCanvas();
    }
  } else {
    mainmicro.drawCanvas();
  }
};

let updateBeamSlider = function(newValue){
  if (typeof(newValue) == 'number') {
    beamslider.val(newValue);
  } else {
    newValue = beamslider.val();
  }
  $('#beamvalue').text(newValue);
  $('#spotsizevalue').text(newValue);
  updateCanvas();
}

let activateGunTilt = function(){
  stigmatorActive = false;
  alignmentMode = 'Gun Tilt';
  drawInfoPanelValues();
  blockSpecimen = true;
  updateCanvas();
  $('#tunehelpcontent').prop('src', 'https://onedrive.live.com/embed?resid=4438293664F5F344%21183&authkey=AArU9KRe0jvE7vs&em=2');
  if(document.getElementById('daautohelp').checked){
    $('#tunehelppopup').show();
  }}

let activateGunShift = function(){
  stigmatorActive = false;
  alignmentMode = 'Gun Shift';
  drawInfoPanelValues();
  blockSpecimen = true;
  updateCanvas();
  $('#tunehelpcontent').prop('src', 'https://onedrive.live.com/embed?resid=4438293664F5F344%21183&authkey=AArU9KRe0jvE7vs&em=2');
  if(document.getElementById('daautohelp').checked){
    $('#tunehelppopup').show();
  }}

let activatePivotPointX = function(){
  stigmatorActive = false;
  if (openScreen == 0){
    openbox.activatePivotPointX();
    setupbox.activatePivotPointX();
  } else {
    mainmicro.activatePivotPointX();
  }
  $('#tunehelpcontent').prop('src', 'https://onedrive.live.com/embed?&resid=4438293664F5F344%21181&authkey=AI-AY12lmIQtu74&em=2');
  if(document.getElementById('daautohelp').checked){
    $('#tunehelppopup').show();
  }}

let activatePivotPointY = function(){
  stigmatorActive = false;
  if (openScreen == 0){
    openbox.activatePivotPointY();
    setupbox.activatePivotPointY();
  } else {
    mainmicro.activatePivotPointY();
  }
  $('#tunehelpcontent').prop('src', 'https://onedrive.live.com/embed?&resid=4438293664F5F344%21181&authkey=AI-AY12lmIQtu74&em=2');
  if(document.getElementById('daautohelp').checked){
    $('#tunehelppopup').show();
  }}

let activateBeamShift = function(){
  stigmatorActive = false;
  alignmentMode = 'Beam Shift';
  drawInfoPanelValues();
  blockSpecimen = true;
  updateCanvas();
  $('#tunehelpcontent').prop('src', 'https://onedrive.live.com/embed?&resid=4438293664F5F344%21181&authkey=AI-AY12lmIQtu74&em=2');
  if(document.getElementById('daautohelp').checked){
    $('#tunehelppopup').show();
  }
}

let activateRotationCenter = function(){
  stigmatorActive = false;
  if (openScreen == 0){
    openbox.activateRotationCenter();
    setupbox.activateRotationCenter();
  } else {
    mainmicro.activateRotationCenter();
  }
  $('#tunehelpcontent').prop('src', 'https://onedrive.live.com/embed?resid=4438293664F5F344%21184&authkey=AMTRGuRlihBMuxs&em=2');
  if(document.getElementById('daautohelp').checked){
    $('#tunehelppopup').show();
  }
}

let activateComaFreeAlignmentX = function(){
  stigmatorActive = false;
  if (openScreen == 0){
    openbox.activateComaFreeAlignmentX();
    setupbox.activateComaFreeAlignmentX();
  } else {
    mainmicro.activateComaFreeAlignmentX();
  }
  $('#tunehelpcontent').prop('src', 'https://onedrive.live.com/embed?resid=4438293664F5F344%21182&authkey=AISgm7X7W5yZAhw&em=2');
  if(document.getElementById('daautohelp').checked){
    $('#tunehelppopup').show();
  }
}

let activateComaFreeAlignmentY = function(){
  stigmatorActive = false;
  if (openScreen == 0){
    openbox.activateComaFreeAlignmentY();
    setupbox.activateComaFreeAlignmentY();
  } else {
    mainmicro.activateComaFreeAlignmentY();
  }
  $('#tunehelpcontent').prop('src', 'https://onedrive.live.com/embed?resid=4438293664F5F344%21182&authkey=AISgm7X7W5yZAhw&em=2');
  if(document.getElementById('daautohelp').checked){
    $('#tunehelppopup').show();
  }
}

let activateCondensor = function(){
  $('#leftcolumnstigmator').attr('src', './public/img/stigmatorcondensor.png');
  $('#floatingstigmator').attr('src', './public/img/stigmatorcondensor.png');
  stigmatorActive = true;
  stigmationMode = 'Condensor';
  drawInfoPanelValues();
}

let activateObjective = function(){
  $('#leftcolumnstigmator').attr('src', './public/img/stigmatorobjective.png');
  $('#floatingstigmator').attr('src', './public/img/stigmatorobjective.png');  
  stigmatorActive = true;
  stigmationMode = 'Objective';
  drawInfoPanelValues();
}

let activateDiffractionStigmator = function(){
  $('#leftcolumnstigmator').attr('src', './public/img/stigmatordiffraction.png');
  $('#floatingstigmator').attr('src', './public/img/stigmatordiffraction.png');
  stigmatorActive = true;
  stigmationMode = 'Diffraction';
  drawInfoPanelValues();
  if(!diffractionMode){
    $('#buttondiffraction').trigger('click');
  }
}

let deactivateStigmator = function(){
  stigmatorActive = false;
  stigmationMode = 'None';
  $('#leftcolumnstigmator').attr('src', './public/img/stigmator.png');
  $('#floatingstigmator').attr('src', './public/img/stigmator.png');  
  resumeDA();
  drawInfoPanelValues();
}

let deactivateDirectAlignments  = function(){
  if (openScreen == 0){
    openbox.deactivateDirectAlignments();
    setupbox.deactivateDirectAlignments();
  } else {
    mainmicro.deactivateDirectAlignments();
  }
}

let focusUp = function(){
  if (openScreen == 0){
    openbox.focusUpButton();
    setupbox.focusUpButton();
  } else {
    mainmicro.focusUpButton();
  }
}

let focusDown = function(){
  if (openScreen == 0){
    openbox.focusDownButton();
    setupbox.focusDownButton();
  } else {
    mainmicro.focusDownButton();
  }
}

let zeroFocus = function(){
  if (openScreen == 0){
    openbox.zeroFocus();
    setupbox.zeroFocus();
  } else {
    mainmicro.zeroFocus();
  }
}

let resetPosition = function(){ 
  if (openScreen == 0){
    openbox.resetPosition();
    setupbox.resetPosition();
  } else {
    mainmicro.resetPosition();
  }
}

//function that handles the updates for the wobble
let toggleWobble = function(){
  wobbleMode = !wobbleMode;
  if(wobbleMode){
    stigmatorActive = false;
    alignmentMode = 'None';
  } else {
    stigmatorActive = true;
  }
  if (openScreen == 0){
    openbox.toggleWobble();
    setupbox.toggleWobble();
  } else {
    mainmicro.toggleWobble();
  }
}

let deactivateDA = function(){
  if (wobbleMode){
    toggleWobble();
  }
  deactivateDirectAlignments();
}

let sampleTilt = function(x, y){
  if (openScreen == 0){
    openbox.sampleTilt(x, y);
    setupbox.sampleTilt(x, y);
  } else {
    mainmicro.sampleTilt(x, y);
  }
}

let resumeDA = function(){
  switch(alignmentMode){
    case 'Pivot Point X':
      activatePivotPointX();
      break;
    case 'Pivot Point Y':
      activatePivotPointY();
      break;
    case 'Rotation Center':
      activateRotationCenter();
      break;
    case 'Coma-free Alignment X':
      activateComaFreeAlignmentX();
      break;
    case 'Coma-free Alignment Y':
      activateComaFreeAlignmentY();
      break;
  }
}

function factoryAlign(){
  setupbox.factoryAlign();
  openbox.factoryAlign();
  mainmicro.factoryAlign();
  updateCanvas();
}

function supervisorAlign(){
  setupbox.supervisorAlign();
  openbox.supervisorAlign();
  mainmicro.supervisorAlign();
  updateCanvas();
}

function screenshotImage(){
  let div = document.createElement('div');
  div.style = 'position:absolute; top:' + (11 + screenshotCount * 2 % 15) + 'vh; left:' + (56 + screenshotCount % 9) + 'vw; z-index:' + zcounter;
  zcounter++;

  let area = document.createElement('area');
  area.shape = 'rect';
  area.coords = '497,6,512,20'
  area.onclick = function(){
    let i = activeFrames.indexOf(div);
    activeFrames.splice(i, 1);
    document.body.removeChild(div);
  }

  let map = document.createElement('map');
  map.name = 'frame' + screenshotCount;
  screenshotCount++;
  map.appendChild(area);

  let border = document.createElement('img');
  border.src = './public/img/openbox.png';
  border.useMap = '#' + map.name;
  border.className = 'micrographboxcanvas';

  var canvas = document.getElementById('micrographboxcanvas');
  var dataURL = canvas.toDataURL();
  let screenshot = document.createElement('img');
  screenshot.src = dataURL;
  screenshot.className = 'micrographboxcanvas';
  
  div.appendChild(screenshot);
  div.appendChild(border);
  div.appendChild(map);

  document.body.appendChild(div);
  activeFrames.push(div);

  $(div).draggable({
    addClasses: true,
    cancel: 'map, iframe',
    iframeFix: true,
    cursor: 'move'
  });
  $(div).mousedown(function(){
    $(div).css('z-index', zcounter); // moves element to the front on mousedown
    zcounter++;
  });
}

function saveImage(){
  // Function based on saveTextAsFile() function from https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
  if(isVisible('basesetup')){
    activeFrames.push(document.getElementById('basesetup'));
  }
  if(isVisible('openbox')){
    activeFrames.push(document.getElementById('openbox'));
  }
  if(activeFrames.length < 1){
    console.log('No image to save');
    return;
  }
  var frame = activeFrames[0];
  for(i = 1; i < activeFrames.length; i++){
    if(parseInt($(activeFrames[i]).css('z-index')) > parseInt($(frame).css('z-index'))){
      frame = activeFrames[i];
    }
  }
  if(isVisible('openbox')){
    activeFrames.pop();
  }
  if(isVisible('basesetup')){
    activeFrames.pop();
  }
  let dataURL = ''
  if(frame.firstElementChild.nodeName === 'CANVAS'){
    dataURL = frame.firstElementChild.toDataURL();
  } else {
    dataURL = frame.firstElementChild.src;
  }
  var date = new Date();
  var fileNameToSaveAs = "TEMimage" + (date.getMonth() + 1) + "-" + date.getDate();

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  downloadLink.href = dataURL;
  downloadLink.onclick = destroyClickedElement;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);

  downloadLink.click();
}

window.addEventListener('message', handleMessage, false);