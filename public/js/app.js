'use strict';


$("img[usemap]").rwdImageMaps();

//when the html is all loaded it will call all the relevant javascript functions
$(document).ready(function(event) {
  pageSetup();
  clickFunctions();
  startTime();
});

let parseSelector = function(target){
  let selector;
  if (openWindow == 0){
    if (target == 'buttonrollerr' || target == 'buttonfocus'){
      selector = $('#openboximage');
    } else if (target == 'buttonrollerl') {
      selector = $('#openboxmask')
    }  
  } else {
    if (target == 'buttonrollerr' || target == 'buttonfocus'){
      selector = $('#temimage');
    } else {
      selector = $('#temmask');
    }
  }

  return selector;
};

//from rcontroller roller
let moveImage = function(deltax, deltay, target){
  let element = parseSelector(target);
  let topVal = element.offset().top + deltax;
  let leftVal = element.offset().left + deltay;

  element.offset({top: topVal, left: leftVal});
};

//this is called when the intensity button on the control panel is pressed.
let changeIntensity = function(delta){
  let element;
  if (openWindow == 1){
    element = $('#temmask');
  } else {
    element = $('#openboximage');
  }

  let startW = element.width();
  let startH = element.height();

  let xMove = (1 - delta) * startW /2;
  let yMove = (1 - delta) * startH /2;

  element.width(startW * delta);
  element.height(startH * delta);

  let topVal = element.offset().top + yMove;
  let leftVal = element.offset().left + xMove;

  element.offset({
    top: topVal,
    left: leftVal
  });
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

/*let switchWindow = function(windowNum){
  if (openWindow == windowNum){
    console.log('siwtch target is current window');
  } else {
    //possibly give an open window object with array of background images and maps?  
    // or just make a really ugly switch statement
  }
  $('#mainimage').attr('src', './public/img/tia.png');
  $('#temmask').show();
  $('#temimage').show();
  $('#openbox').hide();
  $('#mainimage').css('background-color', 'transparent');


  openWindow = windowNum;
};*/

let handleMessage = function(message){
  let box = message.data[0];
  let lesson = message.data[1];
  let part = message.data[2];
  updateBox(lesson, part, box);
};

let stripChars = function(string){
  return string.replace(/[^0-9.]+/g, '');
}

let shiftFocus = function(delta, target){
  let selector = parseSelector(target);
  let imagePrevVal = selector.css('filter');
  let newVal = 0;
  
  let maskSelector = parseSelector('mask');
  let maskPrevVal = selector.css('filter');

  imagePrevVal = stripChars(imagePrevVal);
  maskPrevVal = stripChars(maskPrevVal);
  if (imagePrevVal == ''){
    selector.css('filter', 'blur(0.0px)');
    maskSelector.css('filter', 'blur(0.0px)');
  } 
  if (imagePrevVal == 0){
  //flips direction we're going
    focusUp = !focusUp;
  }

  if (focusUp){
    delta = -delta;
  }


  imagePrevVal = parseFloat(imagePrevVal);
  maskPrevVal = parseFloat(maskPrevVal);
  if (imagePrevVal + delta <= 280){
    newVal = imagePrevVal + (delta/50);
    selector.css('filter', 'blur(' + newVal + 'px)');
    maskSelector.css('filter', 'blur(' + newVal + 'px)');
  }
}

window.addEventListener('message', handleMessage, false);