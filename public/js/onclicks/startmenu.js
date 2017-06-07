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
    $('#mainimage').attr('src', './public/img/tia.png');
    $('#temmask').show();
    $('#temimage').show();
  });

  $('#micrographstart').on('click', function(event){
    $('#mainimage').attr('src', './public/img/mainscreen.png');
    $('#temmask').hide();
    $('#temimage').hide();
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