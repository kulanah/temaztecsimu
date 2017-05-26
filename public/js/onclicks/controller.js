'use strict';

let zoomLevels = [0.25, 0.50, 1.0, 2.0, 4.0];
let currentZoom = 2;


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
  });

  $('#buttonmagnification').on('click', function(event){
    let mask = $('#mask');
    let image = $('#testimage');
    zoom(mask);
    zoom(image);

    if (currentZoom == 4){
      currentZoom = 0;
    } else {
      ++currentZoom;
    }

  });

  let zoom = function(selector){
    let height = selector.height();
    let width = selector.width();
    let topVal = selector.offset().top;
    let leftVal = selector.offset().left;

    if(currentZoom == 4){
      selector.width(selector.width() / 8);
      selector.height(selector.height() / 8);

      topVal /= 8;
      leftVal /= 8;

      selector.offset({
        top: topVal,
        left: leftVal
      });
    } else {
      selector.width(selector.width() * 2);
      selector.height(selector.height() * 2);

      topVal -= topval * .5;
      leftVal -= leftcal * .5;

      selector.offset({
        top: topVal,
        left: leftVal
      })
    }
  };
};