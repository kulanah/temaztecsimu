'use strict';

let multiStepSize = 1;
let intensityStepSize = 1;
let beamStepSize = 1;
let stageStepSize = 1;
let availableAlignments = [];
let activeAlignment = 0;
let c2Level = 4;
let c2Sizes = [10, 70, 100, 150];
let c2x = 0;
let c2y = 0;
let objectiveLevel = 1;
let objectiveSizes = [100, 60, 40, 20, 0, 0, 0];
let contrastVal = 100;

let microscopeControllers = function(){

  let handleDrag = function(event){
    let deltaX = event.clientX - startX;
    let deltaY = event.clientY - startY;
    
    return [deltaX, deltaY];
  };

  let mousemovetemplate = function(event){
    let deltas = handleDrag(event);
    setStartXY();
    moveImage(2 * deltas[0], 2 * deltas[1]);
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

  let mousec2xtemplate = function(event){
    let deltas = handleDrag(event);
    setStartXY();
    c2x += deltas[1] / 1000;
    updateCanvas();
  }

  let mousec2ytemplate = function(event){
    let deltas = handleDrag(event);
    setStartXY();
    c2y += deltas[1] / 1000;
    updateCanvas();
  }

  let mousefocustemplate = function(event){
    let deltas = handleDrag(event);
    setStartXY();

    shiftFocus(deltas[1]);  
  }

  let setStartXY = function(){
    startX = event.clientX;
    startY = event.clientY;
    $('#grabbingdiv').show();
    $('body *').addClass('grabbing');
  }

  let mouseuptemplate = function(event){
    $('body')[0].removeEventListener('mousemove', mousemovetemplate);
    $('body')[0].removeEventListener('mousemove', mousedowntemplateintensity);
    $('body')[0].removeEventListener('mousemove', mousefocustemplate);
    $('body')[0].removeEventListener('mousemove', mousemultixtemplate);
    $('body')[0].removeEventListener('mousemove', mousemultiytemplate);
    $('body')[0].removeEventListener('mousemove', mousec2xtemplate);
    $('body')[0].removeEventListener('mousemove', mousec2ytemplate);
    $('#grabbingdiv').hide();
    $('body *').removeClass('grabbing');
  };

  let mouseuptemplatezoom = function(event){
    let delta = startY - event.clientY;
    zoom(delta)
    $('body')[0].removeEventListener('mouseup', mouseuptemplatezoom);
    $('body')[0].removeEventListener('mouseleave', mouseuptemplatezoom);    
    $('#grabbingdiv').hide();
    $('body *').removeClass('grabbing');
  };

  let mouseuptemplatefocusstep = function(event){
    let delta = startY - event.clientY;
    shiftFocusStep(delta)
    $('body')[0].removeEventListener('mouseup', mouseuptemplatefocusstep);
    $('body')[0].removeEventListener('mouseleave', mouseuptemplatefocusstep);    
    $('#grabbingdiv').hide();
    $('body *').removeClass('grabbing');
  };
  
  let mousedowntemplateintensity = function(event){
    let deltaIntensity = event.clientY - startIntensity;
    deltaIntensity = deltaIntensity * intensityStepSize;
    startIntensity = event.clientY;

    changeIntensity(deltaIntensity);
  };

  $('#buttonfocus').mousedown(function(event){
    setStartXY();
    console.log('Adjusting focus')

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mouseleave', mouseuptemplate);    
    $('body')[0].addEventListener('mousemove', mousefocustemplate);
  });

  $('#buttonfocusstep').mousedown(function(event){
    setStartXY();
    console.log('Adjusting focus step')

    $('body')[0].addEventListener('mouseup', mouseuptemplatefocusstep);
    $('body')[0].addEventListener('mouseleave', mouseuptemplatefocusstep);    
  });  

  $('#buttonr1').hover(function(){
    if(diffractionMode || setupbox.maskR < 100){
      $('#r1warning').fadeToggle();
    }
  })

  $('#buttonr1').on('click', function(event){
    if(screenLift){
      screenLift = false;
    } else if(diffractionMode || setupbox.maskR < 100){
      $('#errordiv').show();
    } else {
      screenLift = true;
    }
    updateCanvas();
  });

  $('#buttonl2').on('click', function(event){
    toggleWobble();
    deactivateDirectAlignments();
  });

  $('#buttonr2').on('click', function(event){
    if(availableAlignments.length > 1){
      activeAlignment = (activeAlignment + 1) % availableAlignments.length;
      setActiveAlignment();
      drawInfoPanelValues();
    }
  });

  $('#buttonl3').on('click', function(event){
    if (beamslider[0].value > 1){
      let value = beamslider.val();
      --value;
      temLens[20].f -= .1;
      updateBeamSlider(value);    
      drawColumn();
    } else {
      setupbox.limitFlash('#spotsizevalue');
    }
  });

  $('#buttonr3').on('click', function(event){
    if (beamslider[0].value < 11){
      let value = beamslider.val();
      ++value;
      temLens[20].f += .1;
      updateBeamSlider(value);
      drawColumn();
    } else {
      setupbox.limitFlash('#spotsizevalue');
    }
  });

  $('#buttonrollerr').mousedown(function(event){
    if (openScreen == 0){
      openbox.setTarget(event.target.id);
      setupbox.setTarget(event.target.id);
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
      openbox.setTarget(event.target.id);
      setupbox.setTarget(event.target.id);
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
    $('#grabbingdiv').show();
    $('body *').addClass('grabbing');    

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mouseleave', mouseuptemplate);    
    $('body')[0].addEventListener('mousemove', mousedowntemplateintensity);
  });

  $('#buttonmagnification').on('mousedown', function(event){
    setStartXY();

    $('body')[0].addEventListener('mouseup', mouseuptemplatezoom);
    $('body')[0].addEventListener('mouseleave', mouseuptemplatezoom);    
  });

  $('#buttondiffraction').on('click', function(event){
    // Switch between image and diffraction views
    diffractionMode = !diffractionMode;
    if(diffractionMode){
      alignmentMode = 'Diffraction';
    } else {
      alignmentMode = 'None';
    }
    drawInfoPanelValues();

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
    if(multiStepSize > 1/8){
      multiStepSize *= 0.5;
    }
  });

  $('#multistepup').on('click', function(event){
    if(multiStepSize < 8){
      multiStepSize *= 2;
    }
  });

  $('#intensitystepdown').on('click', function(event){
    if(intensityStepSize > 1/8){
      intensityStepSize *= 0.5;
    }
  });

  $('#intensitystepup').on('click', function(event){
    if(intensityStepSize < 8){
      intensityStepSize *= 2;
    }
  });

  $('#beamstepdown').on('click', function(event){
    if(beamStepSize > 1/8){
      beamStepSize *= 0.5;
    }
  });

  $('#beamstepup').on('click', function(event){
    if(beamStepSize < 8){
      beamStepSize *= 2;
    }
  });

  $('#buttonpolyleftr').on('click', function(event){
    if(stageStepSize > 1/8){
      stageStepSize *= 0.5;
    }
  });

  $('#buttonpolyrightr').on('click', function(event){
    if(stageStepSize < 8){
      stageStepSize *= 2;
    }
  });

  $('#buttonl1').on('click', function(event){
  });

  $('#buttonupr').on('click', function(event){
    if (temLensSpecimen.y < 585 - stageStepSize){
      focusUp();
      temLens[13].y += stageStepSize;
      drawColumn();
    } else {
      setupbox.limitFlash('#zvalue');
    }
  });

  $('#buttondownr').on('click', function(event){
    if (temLensSpecimen.y > 528 + stageStepSize){
      focusDown();
      temLens[13].y -= stageStepSize;
      drawColumn();
    } else {
      setupbox.limitFlash('#zvalue');
    }
  });

  $('#buttontop1r').on('click', function(event){
    zeroFocus();
    temLens[12].f = 70;
    drawColumn();
  })

  $('#alphatiltleft').on('click', function(event){
    sampleTilt(0, -1);
  });

  $('#alphatiltright').on('click', function(event){
    sampleTilt(0, 1);
  });

  $('#betatiltleft').on('click', function(event){
    sampleTilt(1, 0);
  });

  $('#betatiltright').on('click', function(event){
    sampleTilt(-1, 0);
  });

  $('#buttonstigmator').on('click', function(event){
    if(isVisible('floatingstigmatordiv')){
      closeFloatingItems();
    } else {
      closeFloatingItems();
      if(!isVisible('leftcoltune')){
        $('#floatingstigmatordiv').show();
      }
    }
  });

  $('#c21').on('click', function(){
    c2Level = 1;
    updateCanvas();
  });

  $('#c22').on('click', function(){
    c2Level = 2;
    updateCanvas();
  });

  $('#c23').on('click', function(){
    c2Level = 3;
    updateCanvas();
  });

  $('#c24').on('click', function(){
    c2Level = 4;
    updateCanvas();
  });

  for (let i = 1; i < 8; i++){
    $('#objective' + i).on('click', function(){
      objectiveLevel = i;
      contrastVal = 10000 / Math.max(objectiveSizes[objectiveLevel - 1], 1);
      updateCanvas();
    });
  }

  $('#c2xdial').on('mousedown', function(event){
    setStartXY();

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mouseleave', mouseuptemplate);
    $('body')[0].addEventListener('mousemove', mousec2xtemplate);
  });

  $('#c2ydial').on('mousedown', function(event){
    setStartXY();

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mouseleave', mouseuptemplate);    
    $('body')[0].addEventListener('mousemove', mousec2ytemplate);
  });
};