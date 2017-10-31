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

const setupbox = new Canvas('./public/img/23.png', 'setupboxcanvas', 1);
const openbox = new Canvas('./public/img/23.png', 'micrographboxcanvas', 1); 
const mainmicro = new Canvas('./public/img/32.png', 'mainmicroscopecanvas', 128/500);

setupbox.hueRotateActive = true;

//when the html is all loaded it will call all the relevant javascript functions
$(document).ready(function(event) {
  pageSetup();
  clickFunctions();
  startTime();
  prepareContent();
});


//TODO remove this target
let moveImage = function(deltax, deltay, target){
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.moveImage(deltax, deltay);
    } else {
      if (setupbox.moveImage(deltax, deltay)){
        temLens[20].xCenter += deltax / 10;
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
      temLens[6].f += change / 30;
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
      temLens[11].f += delta / 10;
      drawColumn();
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
  updateCanvas();
}

let activateGunTilt = function(){
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.activateGunTilt();
    } else {
      setupbox.activateGunTilt();
    }
  } else {
    mainmicro.activateGunTilt();
  }
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

let activatePivotPointX = function(){
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
  if (openScreen == 0){
    if (activeWindow == 0){
      openbox.activateBeamShift();
    } else {
      setupbox.activateBeamShift();
    }
  } else {
    mainmicro.activateBeamShift();
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

let activateComaFreeAlignmentX = function(){
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

window.addEventListener('message', handleMessage, false);