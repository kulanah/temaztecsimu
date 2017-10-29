'use strict';

let column = function() {
  $('#ElectronGun').on('click', function(){
    zoomed = true;
    lensFocus = 1;
    $('#columndivzoom').show();

    drawColumn();
  });


  $('#zoomexit').on('click', function(){
    $('#columndivzoom').hide();

  });

}