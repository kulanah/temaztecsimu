'use strict';

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
  };
  
  let mousedowntemplateintensity = function(event){
    let deltaIntensity = event.clientY - startIntensity;
    deltaIntensity = deltaIntensity / -100 + 1;
    startIntensity = event.clientY;

    changeIntensity(deltaIntensity);
  };

  $('#buttonfocus').mousedown(function(event){
    setStartXY();

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mousemove', mousefocustemplate);
  });

  $('#buttonl3').on('click', function(event){
    if (currentTab == 1){
      let value = beamslider.val();
      --value;
      beamslider.val(value);
      $('#beamvalue').text(beamslider.val());
    };
  });

  $('#buttonr3').on('click', function(event){
    if (currentTab == 1){
      let value = beamslider.val();
      ++value;
      beamslider.val(value);
      $('#beamvalue').text(beamslider.val());
    };
  });

  $('#buttonrollerr').mousedown(function(event){
    if (openScreen == 0){
      if (activeWindow )
      openbox.setTarget(event.target.id);
    } else {
      mainmicro.setTarget(event.target.id);
    }
    setStartXY();

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mousemove', mousemovetemplate);
  });

  $('#buttonrollerl').mousedown(function(event){
    if (openScreen == 0){
      openbox.setTarget(event.target.id);
    } else {
      mainmicro.setTarget(event.target.id);
    }
    setStartXY();
    
    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mousemove', mousemovetemplate);
  });

  $('#buttonintensity').mousedown(function(event){
    startIntensity = event.clientY;

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mousemove', mousedowntemplateintensity);
  });

  $('#buttonmagnification').on('click', function(event){
    if (openScreen == 1){
      mainmicro.zoom();
    } else {
      openbox.zoom();
    }
  });

};

