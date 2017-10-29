'use strict';

let column = function() {
  $('.columnZoomButton').on('click', function(){
    zoomed = true;
    lensFocus = this.number;
    $('#columndivzoom').show();
    let offset = $('#'+ this.id).css('top');
    offset = parseFloat(offset);
    offset *= -6;
    console.log(offset);

    let newOffset;
    if (lensFocus == 0){
      newOffset = 0;
    } else if (lensFocus == 1){
      newOffset = -180;
    } else {
      newOffset = -temLens[lensFocus - 1].y * 5.4;
    }


    drawColumn(0);
    let i = lensFocus;
    let oldVal = parseFloat(zoomedOutLabels[i].style.top)
    let newVal = parseFloat(zoomedInLabels[i].style.top);
    console.log(temLens[i].name + ": "); 
    console.log(oldVal);
    console.log(newVal);
    // console.log(offset);
  });


  //TODO:  Fix issue with modifying column resetting zoompoint


  $('#zoomexit').on('click', function(){
    $('#columndivzoom').hide();

  });

}