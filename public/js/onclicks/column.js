'use strict';

let zoomedOffsetStatic = 0;
let column = function() {
  $('.columnZoomButton').on('click', function(){
    zoomed = true;
    lensFocus = this.number;
    $('#columndivzoom').show();
    zoomedOffsetStatic = $(window).height() * -5.4 / 1160 * temLens[lensFocus].y + 180;
    

    drawColumn(zoomedOffsetStatic);
  });

  $('#zoomexit').on('click', function(){
    $('#columndivzoom').hide();
    zoomed = false;
    $('#labelcanvas')[0].getContext('2d').clearRect(0,0,3000,3000);
    drawColumn();
  });
}