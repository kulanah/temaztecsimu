'use strict';

let micro = true;
let searchTab = function(){
  $('#nano').on('click', function(event){
    $('#leftcolumnbeamsettings').attr('src', './public/img/beamsettingsmicro.png');
    beamslider.val(3);
    $('#beamvalue').text(beamslider.val());
    micro = true;
    updateCanvas();
  });

  $('#micro').on('click', function(event){
    $('#leftcolumnbeamsettings').attr('src', './public/img/beamsettingsnano.png')
    beamslider.val(6);
    $('#beamvalue').text(beamslider.val());
    micro = false;
    updateCanvas();
  });
};