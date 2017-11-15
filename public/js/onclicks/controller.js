'use strict';

let multiStepSize = 1;
let intensityStepSize = 1;

let microscopeControllers = function(){

  let handleDrag = function(event){
    let deltaX = event.clientX - startX;
    let deltaY = event.clientY - startY;
    
    return [deltaX, deltaY];
  };

  let mousemovetemplate = function(event){
    let deltas = handleDrag(event);
    setStartXY();
    moveImage(2 * deltas[0], 2 * deltas[1], event.target);
  };

  let mousemultixtemplate = function(event){
    let deltas = handleDrag(event);
    setStartXY();
    multiXDrag(deltas[1] * multiStepSize);
  }

  let mousemultiytemplate = function(event){
    let deltas = handleDrag(event);
    setStartXY();

    multiYDrag(deltas[1] * multiStepSize);
  }

  let mousefocustemplate = function(event){
    let deltas = handleDrag(event);
    setStartXY();

    shiftFocus(deltas[1]);  
  }

  let setStartXY = function(){
    startX = event.clientX;
    startY = event.clientY;
  }

  let mouseuptemplate = function(event){
    $('body')[0].removeEventListener('mousemove', mousemovetemplate);
    $('body')[0].removeEventListener('mousemove', mousedowntemplateintensity);
    $('body')[0].removeEventListener('mousemove', mousefocustemplate);
    $('body')[0].removeEventListener('mousemove', mousemultixtemplate);
    $('body')[0].removeEventListener('mousemove', mousemultiytemplate);
  };

  let mouseuptemplatezoom = function(event){
    let delta = startY - event.clientY;
    zoom(delta)
    $('body')[0].removeEventListener('mouseup', mouseuptemplatezoom);
  };
  
  let mousedowntemplateintensity = function(event){
    let deltaIntensity = event.clientY - startIntensity;
    deltaIntensity = deltaIntensity * intensityStepSize / -100 + 1;
    startIntensity = event.clientY;

    changeIntensity(deltaIntensity);
  };

  $('#buttonfocus').mousedown(function(event){
    setStartXY();

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mousemove', mousefocustemplate);
  });


  $('#buttonl2').on('click', function(event){
    toggleWobble();

  });

  $('#buttonl3').on('click', function(event){


    if (beamslider[0].value < 11){
      let value = beamslider.val();
      ++value;
      temLens[20].f -= .1;
      updateBeamSlider(value);    
      drawColumn();
    }
  });

  $('#buttonr3').on('click', function(event){
    if (beamslider[0].value > 1){
      let value = beamslider.val();
      --value;
      temLens[20].f += .1;
      updateBeamSlider(value);
      drawColumn();
    }
  });

  $('#buttonrollerr').mousedown(function(event){
    if (openScreen == 0){
      if (activeWindow == 0){
        openbox.setTarget(event.target.id);
      }
      else {
        setupbox.setTarget(event.target.id);
      }
    } else {
      mainmicro.setTarget(event.target.id);
    }
    setStartXY();

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mouseleave', mouseuptemplate);    
    $('body')[0].addEventListener('mousemove', mousemovetemplate);
  });

  $('#buttonrollerl').mousedown(function(event){
    if (openScreen == 0){
      if (activeWindow == 0){
        openbox.setTarget(event.target.id);
      } else {
        setupbox.setTarget(event.target.id);
      }
    } else {
      mainmicro.setTarget(event.target.id);
    }
    setStartXY();
    
    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mouseleave', mouseuptemplate);    
    $('body')[0].addEventListener('mousemove', mousemovetemplate);
  });

  $('#buttonintensity').mousedown(function(event){
    startIntensity = event.clientY;

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mouseleave', mouseuptemplate);    
    $('body')[0].addEventListener('mousemove', mousedowntemplateintensity);
  });

  $('#buttonmagnification').on('mousedown', function(event){
    setStartXY();

    $('body')[0].addEventListener('mouseup', mouseuptemplatezoom);
  });

  $('#buttondiffraction').on('click', function(event){
    // Switch between image and diffraction views
    diffractionMode = !diffractionMode;    
    if (openScreen == 0){
      if (activeWindow == 1){
        setupbox.drawCanvas();
      }
    }        
  });

  $('#multix').on('mousedown', function(event){
    setStartXY();

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mouseleave', mouseuptemplate);
    $('body')[0].addEventListener('mousemove', mousemultixtemplate);
  });

  $('#multiy').on('mousedown', function(event){
    setStartXY();

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mouseleave', mouseuptemplate);    
    $('body')[0].addEventListener('mousemove', mousemultiytemplate);
  });

  $('#multistepdown').on('click', function(event){
    multiStepSize *= 0.5;
  });

  $('#multistepup').on('click', function(event){
    multiStepSize *= 2;
  });

  $('#intensitystepdown').on('click', function(event){
    intensityStepSize *= 0.5;
  });

  $('#intensitystepup').on('click', function(event){
    intensityStepSize *= 2;
  });

  $('#buttonl1').on('click', function(event){
  });

  $('#buttonupr').on('click', function(event){
    focusUp();

    ++temLens[13].y;
    drawColumn();
  });

  $('#buttondownr').on('click', function(event){
    focusDown();

    --temLens[13].y;
    drawColumn();
  });

  $('#buttontop1r').on('click', function(event){
    zeroFocus();
    temLens[13].y = 570;
    temLens[12].f = 70;
    drawColumn();
  })
};