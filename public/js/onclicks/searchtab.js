'use strict';

let micro = true;
let searchTab = function(){
  $('#stage2arrow').on('click', function(){
    $('#stage2popout').show();
  });

  $('#resetholder').on('click', function(){
    resetHolder();
  });

  $('#resetxy').on('click', function(){
    resetXY();
  });

  $('#resetab').on('click', function(){
    resetAB();
  });

  $('#wobbler').on('click', function(){
    toggleWobble();
    deactivateDirectAlignments();
  });

  $('#nano').on('click', function(event){
    $('#leftcolumnbeamsettings').attr('src', './public/img/beamsettingsmicro.png');
    updateBeamSlider(3);
    micro = true;
  });

  $('#micro').on('click', function(event){
    $('#leftcolumnbeamsettings').attr('src', './public/img/beamsettingsnano.png');
    updateBeamSlider(6);
    micro = false;
  });

  beamslider.on('change', updateBeamSlider);
  beamslider.on('input', updateBeamSlider);
};