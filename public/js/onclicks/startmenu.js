'use strict';

let startMenu = function(){

  $('#controlbtn').on('click', function(){
    if (isVisible('microControls')){
      $('#microControls').hide();
    } else {
      $('#microControls').show();
    }
  });

  $('#columnbtn').on('click', function(){
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
    $('#openbox').hide();
    $('#mainimage').css('background-color', 'transparent');
    $('#microscopeimage').show();
    $('#basesetup').hide();
    mainmicro.drawCanvas();
  });

  $('#micrographstart').on('click', function(event){
    openWindow = 0;
    $('#mainimage').attr('src', './public/img/mainscreen.png');
    $('#temmask').hide();
    $('#temimage').hide();
    $('#mainimage').css('background-color', 'grey');
    $('#microscopeimage').hide();
  });

  $('#filtercontrol').on('click', function(event){
    let element = $('#filtercontroldiv');
    if(isVisible('filtercontroldiv')){
      element.hide();
    } else {
      element.show();
    }
  });

  $('#setupbtn').on('click', function(event){
    if (openWindow = 1){
      if (isVisible('basesetup')){
        $('#micrographstart').trigger('click');
        $('#basesetup').hide();
      } else {
        $('#micrographstart').trigger('click');
        $('#basesetup').show();
        $('#openbox').hide();
        
      }
    } else {
      $('#basesetup').show();
    }
    setupbox.drawCanvas();
  });
};