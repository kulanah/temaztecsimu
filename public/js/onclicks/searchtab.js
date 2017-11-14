'use strict';

let micro = true;
let searchTab = function(){
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