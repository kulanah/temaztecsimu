'use strict';

let startMenu = function(){

  $('#controls').on('click', function(){
    if (controlShow){
      $('#controlsLeft').hide();
      $('#controlsRight').hide();
      controlShow = false;
    } else {
      $('#controlsLeft').show();
      $('#controlsRight').show();
      controlShow = true;
    }
  });

  $('#graph').on('click', function(){
    if(graphShow){
      $('#microscopeGraph').hide();
      graphShow = false;
    } else{
      $('#microscopeGraph').show();
      graphShow = true;
    }
  });

  $('#temuistart').on('click', function(event){
    $('#mainimage').attr('src', './public/img/tia.png');
  });

  $('#micrographstart').on('click', function(event){
    $('#mainimage').attr('src', './public/img/mainscreen.png');
  });
};