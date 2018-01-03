'use strict';


$("img[usemap]").rwdImageMaps();

/*
  idea:  seperate the onclick files into different groupings of classes, allowing each one to be set on its' own when the apropriate step is selected.

  issues:  violates dry when the same button is used in multiple sections 
  
  code to turn off onclicks not related to current flags.  Potentially create new function so that I can also exclude the important helper onclicks (navigation etc)
  $('area').not($('.wx')).prop('onclick', null).off('click');

  
*/


let canvasClasses = [];



drawColumn();

const setupbox = new Canvas('./public/img/23.png', 'setupboxcanvas', 250000);
const openbox = new Canvas('./public/img/23.png', 'micrographboxcanvas', 250000); 
const mainmicro = new Canvas('./public/img/32.png', 'mainmicroscopecanvas', 63000);

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
    $('#mfxvalue').text(stigmationMode + ' Stig');
    $('#mfyvalue').text(stigmationMode + ' Stig');
  } else {
    $('#mfxvalue').text(alignmentMode);
    $('#mfyvalue').text(alignmentMode);
  }
};

//TODO remove this target
let moveImage = function(deltax, deltay, target){
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.moveImage(deltax, deltay);
    } else {
      if (setupbox.moveImage(deltax, deltay)){
        temLens[22].xCenter += deltax / 10;
        drawColumn();
      }
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
    if (activeWindow == 0){
      openbox.changeIntensity(delta);
    } else {
      let change = setupbox.changeIntensity(delta);
      temLens[6].f -= change / 30;
      temLens[20].f += change / 20;

      drawColumn();
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
      temLens[12].f += delta / 10;
      drawColumn();
    }
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
    if (activeWindow == 0){
      openbox.zoom(delta);
    } else {
      setupbox.zoom(delta);
      temLens[21].f = 100 - 50 * setupbox.mag / setupbox.zooms.length;
      drawColumn();
    }
  } else {
    mainmicro.zoom(delta);
  }
};

let multiXDrag = function(deltaX){
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.multiXDrag(deltaX);
    } else {
      setupbox.multiXDrag(deltaX);
    }
  } else {
    mainmicro.multiXDrag(deltaX);
  }
};

let multiYDrag = function(deltaX){
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.multiYDrag(deltaX);
    } else {
      setupbox.multiYDrag(deltaX);
    }
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

let handleBeamSlider = function(newVal){
  console.log(newVal);
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.handleBeamSlider(newVal);
    } else {
      setupbox.handleBeamSlider(newVal);
    }
  } else {
    mainmicro.handleBeamSlider(newVal);
  }

}

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
}

let activateGunShift = function(){
  stigmatorActive = false;
  alignmentMode = 'Gun Shift';
  drawInfoPanelValues();
}

let activatePivotPointX = function(){
  stigmatorActive = false;
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.activatePivotPointX();
    } else {
      setupbox.activatePivotPointX();
    }
  } else {
    mainmicro.activatePivotPointX();
  }
}

let activatePivotPointY = function(){
  stigmatorActive = false;
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.activatePivotPointY();
    } else {
      setupbox.activatePivotPointY();
    }
  } else {
    mainmicro.activatePivotPointY();
  }
}

let activateBeamShift = function(){
  stigmatorActive = false;
  alignmentMode = 'Beam Shift';
  drawInfoPanelValues();
}

let activateRotationCenter = function(){
  stigmatorActive = false;
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.activateRotationCenter();
    } else {
      setupbox.activateRotationCenter();
    }
  } else {
    mainmicro.activateRotationCenter();
  }
}

let activateComaFreeAlignmentX = function(){
  stigmatorActive = false;
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.activateComaFreeAlignmentX();
    } else {
      setupbox.activateComaFreeAlignmentX();
    }
  } else {
    mainmicro.activateComaFreeAlignmentX();
  }
}

let activateComaFreeAlignmentY = function(){
  stigmatorActive = false;
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.activateComaFreeAlignmentY();
    } else {
      setupbox.activateComaFreeAlignmentY();
    }
  } else {
    mainmicro.activateComaFreeAlignmentY();
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
    if (activeWindow == 0){
      openbox.focusUpButton();
    } else {
      setupbox.focusUpButton();
    }
  } else {
    mainmicro.focusUpButton();
  }
}

let focusDown = function(){
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.focusDownButton();
    } else {
      setupbox.focusDownButton();
    }
  } else {
    mainmicro.focusDownButton();
  }
}

let zeroFocus = function(){
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.zeroFocus();
    } else {
      setupbox.zeroFocus();
    }
  } else {
    mainmicro.zeroFocus();
  }
}

let resetPosition = function(){ 
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.resetPosition();
    } else {
      setupbox.resetPosition();
    }
  } else {
    mainmicro.resetPosition();
  }
}

//function that handles the updates for the wobble
let toggleWobble = function(){
  wobbleMode = !wobbleMode;
  if(wobbleMode){
    stigmatorActive = false;
    alignmentMode = '          ';
  } else {
    stigmatorActive = true;
  }
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.toggleWobble();
    } else {
      setupbox.toggleWobble();
    }
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
    case 'pivotpointx':
      activatePivotPointX();
      break;
    case 'pivotpointy':
      activatePivotPointY();
      break;
    case 'Rotation Center':
      activateRotationCenter();
      break;
    case 'comafreealignmentx':
      activateComaFreeAlignmentX();
      break;
    case 'comafreealignmenty':
      activateComaFreeAlignmentY();
      break;
  }
}

window.addEventListener('message', handleMessage, false);