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
    if(isVisible('columndiv')){
      $('#columndiv').hide();
    } else{
      $('#columndiv').show();
    }
  });

  $('#temuistart').on('click', function(event){
    openScreen = 1;
    $('#mainimage').attr('src', './public/img/tiablank2.png');
    $('#mainmicroscopediv').show();
    $('#openbox').hide();
    $('#mainimage').css('background-color', 'transparent');
    $('#basesetup').hide();
    $('#controlsinstruction').hide();
    $('#viewexposure').hide();
    $('#acquireexposure').hide();
    mainmicro.drawCanvas();
  });

  $('#micrographstart').on('click', function(event){
    openScreen = 0;
    $('#mainimage').attr('src', './public/img/mainscreenblank2.png');
    $('#mainmicroscopediv').hide();
    $('#mainimage').css('background-color', 'grey');
    $('#controlsinstruction').show();
    $('#viewexposure').show();
    $('#acquireexposure').show();
    setupbox.drawCanvas();
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
    if (openScreen == 0){
      if (isVisible('basesetup')){
        $('#basesetup').hide();
      } else {
        $('#basesetup').show();
        $('#openbox').hide();
      }
    } else {
      $('#micrographstart').trigger('click');
      $('#basesetup').show();
    }
    openScreen = 0;
    activeWindow = 1;
    setupbox.drawCanvas();
  });
};