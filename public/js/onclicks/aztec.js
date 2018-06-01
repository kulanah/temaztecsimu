let aztec = function(){
  $('#aztecinfobutton4').on('click', function(){
    alert('asfg');

  });

  $('#aztecinfodropdown').on('click', function(){
    $('#aztecdropdown').show();

    let offsets = $(this).offset();
    let coordsArray = this.coords.split(',');

    $('#aztecdropdown').css('top', (offsets.top + Number(coordsArray[3])));
    $('#aztecdropdown').css('left', (offsets.left + Number(coordsArray[0])));
  });
}