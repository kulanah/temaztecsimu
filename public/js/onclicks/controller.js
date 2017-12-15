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
    $('#grabbingdiv').show();
    $('body *').addClass('grabbing');
  }

  let mouseuptemplate = function(event){
    $('body')[0].removeEventListener('mousemove', mousemovetemplate);
    $('body')[0].removeEventListener('mousemove', mousedowntemplateintensity);
    $('body')[0].removeEventListener('mousemove', mousefocustemplate);
    $('body')[0].removeEventListener('mousemove', mousemultixtemplate);
    $('body')[0].removeEventListener('mousemove', mousemultiytemplate);
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
  
  let mousedowntemplateintensity = function(event){
    let deltaIntensity = event.clientY - startIntensity;
    deltaIntensity = deltaIntensity * intensityStepSize / -100 + 1;
    startIntensity = event.clientY;

    changeIntensity(deltaIntensity);
  };

  $('#buttonfocus').mousedown(function(event){
    setStartXY();

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mouseleave', mouseuptemplate);    
    $('body')[0].addEventListener('mousemove', mousefocustemplate);
  });


  $('#buttonl2').on('click', function(event){
    toggleWobble();
    deactivateDirectAlignments();
  });

  $('#buttonl3').on('click', function(event){
    if (beamslider[0].value > 1){
      let value = beamslider.val();
      --value;
      temLens[20].f -= .1;
      updateBeamSlider(value);    
      drawColumn();
    }
  });

  $('#buttonr3').on('click', function(event){
    if (beamslider[0].value < 11){
      let value = beamslider.val();
      ++value;
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
    // Pixel color detection code based on answer from https://stackoverflow.com/questions/6735470/get-pixel-color-from-canvas-on-mouseover
    function rgbToHex(r, g, b) {
      if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
      return ((r << 16) | (g << 8) | b).toString(16);
    }
    // getImageData will only function on a server - it will fail if run locally.
    // To do local testing, create a web server with Python.
    // See https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server for directions.
    if(window.location.protocol != 'file:'){
      var p = setupbox.context.getImageData(setupbox.maskX, setupbox.maskY, 1, 1).data;
      var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
      console.log(hex);
      if(hex != '#000000'){ //if on specimen
        onSpecimen = true;
      } else {
        onSpecimen = false;
      }
    }
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
    if (temLensSpecimen.y < 584){
      focusUp();
      ++temLens[13].y;
      drawColumn();
    }
  });

  $('#buttondownr').on('click', function(event){
    if (temLensSpecimen.y > 529){
      focusDown();
      --temLens[13].y;
      drawColumn();
    }
  });

  $('#buttontop1r').on('click', function(event){
    zeroFocus();
    let diff = 570 - temLensSpecimen.y;
    if (diff < 0){
      for (i = 0; i > diff; --i){ 
        console.log('iterated');
        focusUp();
      }
    } else {
      for (i = 0; i < diff; ++i){ 
        focusDown();
        console.log('iterated');
      }
      
    }

    // temLens[13].y = 570;
    temLens[12].f = 70;
    drawColumn();
  })
};