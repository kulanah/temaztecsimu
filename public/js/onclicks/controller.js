'use strict';

let microscopeControllers = function(){

  let mousemovetemplate = function(event){
    let deltaX = event.clientX - startX;
    let deltaY = event.clientY - startY;

    startX = event.clientX;
    startY = event.clientY;

    moveImage(2 * deltaY, 2 * deltaX);
  };

  let mouseuptemplate = function(event){
    $('body')[0].removeEventListener('mousemove', mousemovetemplate);
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
    startX = event.clientX;
    startY = event.clientY;

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mousemove', mousemovetemplate);

    console.log('start vals are x: ' + startX + ', y: ' + startY);
  });
};