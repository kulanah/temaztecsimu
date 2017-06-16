'use strict';

let startMenu = function(){

  $('#controls').on('click', function(){
    if (isVisible('microControls')){
      $('#microControls').hide();
    } else {
      $('#microControls').show();
    }
  });

  $('#graph').on('click', function(){
    if(isVisible('microscopeGraph')){
      $('#microscopeGraph').hide();
    } else{
      $('#microscopeGraph').show();
    }
  });

  $('#temuistart').on('click', function(event){
    openWindow = 1;
    $('#mainimage').attr('src', './public/img/tia.png');
    $('#temmask').show();
    $('#temimage').show();
    $('#mainimage').css('background-color', 'transparent');

  });

  $('#micrographstart').on('click', function(event){
    openWindow = 0;
    $('#mainimage').attr('src', './public/img/mainscreen.png');
    $('#temmask').hide();
    $('#temimage').hide();
    $('#mainimage').css('background-color', 'grey');
  });

  $('#filtercontrol').on('click', function(event){
    let element = $('#filtercontroldiv');
    if(isVisible('filtercontroldiv')){
      element.hide();
    } else {
      element.show();
    }
  })
};