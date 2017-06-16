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
    if (currentWindow == 1){
      let mask = $('#temmask');
      let image = $('#temimage');
    } else {
      let mask = $('#openboxmask');
      let image = $('#openboximage');
    }
    zoom(mask);
    zoom(image);

    if (currentZoom == 4){
      currentZoom = 0;
    } else {
      ++currentZoom;
    }

  });

  let zoom = function(selector){

    //TODO: force background image to keep centered in viewport

    let height = selector.height();
    let width = selector.width();
    let topVal = selector.offset().top;
    let leftVal = selector.offset().left;

    let centerX = width / 2 + leftVal;
    let centerY = height / 2 + topVal;

    // console.log(currentZoom);
    console.log('Starting vals:\nHeight: ' + height +'\nWidth: ' + width + '\ntopVal: ' + topVal + '\nleftVal: ' + leftVal);
    console.log('center is horizontally ' + centerX + ' and vertically ' + centerY);
    if(currentZoom == 4){
      selector.width(selector.width() / 16);
      selector.height(selector.height() / 16);

      topVal += height / 2 - selector.height() / 2;
      leftVal += width / 2 - selector.width() / 2;

      selector.offset({
        top: topVal,
        left: leftVal
      });
    } else {
      let newHeight = selector.height() * 2;
      selector.width(selector.width() * 2);
      selector.height(newHeight);

      topVal -= height * .5;
      leftVal -= width * .5;

      selector.offset({
        top: topVal,
        left: leftVal
      });
    }

    height = selector.height();
    width = selector.width();
    console.log('Ending vals:\nHeight: ' + selector.height() + '\nWidth: ' + selector.width() + '\ntopVal: ' + topVal + '\nleftVal:' + leftVal);
    centerX = width / 2 + leftVal;
    centerY = height / 2 + topVal;
    console.log('center is horizontally ' + centerX + ' and vertically ' + centerY);
  };
};