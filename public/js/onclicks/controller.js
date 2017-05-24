'use strict';

let intensityValues = [400,]

let microscopeControllers = function(){

  let mousemovetemplateRight = function(event){
    let deltaX = event.clientX - startXRight;
    let deltaY = event.clientY - startYRight;

    startXRight = event.clientX;
    startYRight = event.clientY;

    moveImage(2 * deltaY, 2 * deltaX);
  };

  let mousemovetemplateLeft = function(event){
    let deltaX = event.clientX - startXLeft;
    let deltaY = event.clientY - startYLeft;

    startXLeft = event.clientX;
    startYLeft = event.clientY;

    moveMask(2 * deltaY, 2 * deltaX);
  };

  let mouseuptemplate = function(event){

    $('body')[0].removeEventListener('mousemove', mousemovetemplateLeft);
    $('body')[0].removeEventListener('mousemove', mousemovetemplateRight);
    $('body')[0].removeEventListener('mousemove', mousedowntemplateintensity);

  };
  
  let mousedowntemplateintensity = function(event){
    let deltaIntensity = event.clientY - startIntensity;
    deltaIntensity = deltaIntensity / -100 + 1;
    startIntensity = event.clientY;

    changeIntensity(deltaIntensity);
  };

  $('#buttonl3').on('click', function(event){
    if (currenttab == 1){
      let value = beamslider.val();
      --value;
      beamslider.val(value);
      $('#beamvalue').text(beamslider.val());
    };
  });

  $('#buttonr3').on('click', function(event){
    if (currenttab == 1){
      let value = beamslider.val();
      ++value;
      beamslider.val(value);
      $('#beamvalue').text(beamslider.val());
    };
  });

  $('#buttonrollerr').mousedown(function(event){
    startXRight = event.clientX;
    startYRight = event.clientY;

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mousemove', mousemovetemplateRight);
  });

  $('#buttonrollerl').mousedown(function(event){
    startXLeft = event.clientX;
    startYLeft = event.clientY;

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mousemove', mousemovetemplateLeft);

  });

  $('#buttonintensity').mousedown(function(event){
    startIntensity = event.clientY;

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mousemove', mousedowntemplateintensity);


  })

};