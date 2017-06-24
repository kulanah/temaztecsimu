'use strict';

let zoomLevels = [0.25, 0.50, 1.0, 2.0, 4.0];
let currentZoom = 2;
let targetID;
let focusUp = true;


let microscopeControllers = function(){

  let handleDrag = function(event){
    let deltaX = event.clientX - startX;
    let deltaY = event.clientY - startY;

    return [deltaX, deltaY];
  };

  let mousemovetemplate = function(event){
    let deltas = handleDrag(event);
    setStartXY();
    moveImage(2 * deltas[1], 2 * deltas[0], targetID);
  };

  let mousefocustemplate = function(event){
    let deltas = handleDrag(event);

    setStartXY();
    shiftFocus(deltas[1], targetID);  
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
    targetID = event.target.id;
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
    targetID = event.target.id;
    setStartXY();

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mousemove', mousemovetemplate);
  });

  $('#buttonrollerl').mousedown(function(event){
    targetID = event.target.id;
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
    let mask;
    let image;
    if (openWindow == 1){
      mask = $('#temmask');
      image = $('#temimage');
    zoom(mask);
    } else {
      mask = $('#openboxmask');
      image = $('#openboximage');
    }
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




//var removedText = self.val().replace(/[^0-9.,]+/, '');