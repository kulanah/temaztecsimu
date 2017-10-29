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

  //TODO:  Fix issue with modifying column resetting zoompoint

  $('#zoomexit').on('click', function(){
    $('#columndivzoom').hide();
  });
}