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

const setupbox = new Canvas('./public/img/23.png', 'setupboxcanvas');
const openbox = new Canvas('./public/img/23.png', 'micrographboxcanvas'); 
const mainmicro = new Canvas('./public/img/32.png', 'mainmicroscopecanvas');

setupbox.hueRotateActive = true;

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

//TODO: find some good way to abstract all these functions that solely exist to handle the current location of t he program
//at the very least swap to switch statements


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

let zoom = function(delta){
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.zoom(delta);
    } else {
      setupbox.zoom(delta);
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
  updateCanvas();
}

let activateGunShift = function(){
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.activateGunShift();
    } else {
      setupbox.activateGunShift();
    }
  } else {
    mainmicro.activateGunShift();
  }
}

let activatePivotPoint = function(){
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.activatePivotPoint();
    } else {
      setupbox.activatePivotPoint();
    }
  } else {
    mainmicro.activatePivotPoint();
  }

}

let activateRotationCenter = function(){
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

let deactivateDirectAlignments  = function(){
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.deactivateDirectAlignments();
    } else {
      setupbox.deactivateDirectAlignments();
    }
  } else {
    mainmicro.deactivateDirectAlignments();
  }
}

let focusUp = function(){
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.focusUp();
    } else {
      setupbox.focusUptest();
    }
  } else {
    mainmicro.focusUp();
  }
}

let focusDown = function(){
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.focusDown();
    } else {
      setupbox.focusDown();
    }
  } else {
    mainmicro.focusDown();
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

window.addEventListener('message', handleMessage, false);