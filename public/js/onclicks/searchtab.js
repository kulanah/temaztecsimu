'use strict';

let micro = true;
let searchTab = function(){
  $('#nano').on('click', function(event){
    $('#leftcolumn').attr('src', './public/img/leftcolsearchmicro.png');
    beamslider.val(3);
    $('#beamvalue').text(beamslider.val());
    micro = true;
  });

  $('#micro').on('click', function(event){
    $('#leftcolumn').attr('src', './public/img/leftcolsearchnano.png')
    beamslider.val(6);
    $('#beamvalue').text(beamslider.val());
    micro = false;
  });
};