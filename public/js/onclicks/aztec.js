let aztecScreen = 1;
let aztec = function(){
  $('#aztecinfodropdown').on('click', function(){
    $('#aztecdropdown').show();

    let offsets = $(this).offset();
    let coordsArray = this.coords.split(',');

    $('#aztecdropdown').css('top', (offsets.top + 3 + Number(coordsArray[3])));
    $('#aztecdropdown').css('left', (offsets.left + Number(coordsArray[0])));
  });

  $('#aztecdropdownanalyzer').on('click', function(){
    aztecScreen = 0;
    console.log('you\'re in the drop down button');
    $('#aztecdropdown').hide();
  });

  $('#aztecdropdownpointandid').on('click', function(){
    aztecScreen = 1;
    console.log('you\'re in the drop down button');
    console.log('more specifically you\'re in pani');
    $('#aztecdropdown').hide();
    $('#aztecmainimage').attr('src', './public/img/pandidescribemain.png');
    $('#aztecinfobar').attr('src', './public/img/pandidescribeheader.png');
  });

  $('#aztecdropdownlinescan').on('click', function(){
    aztecScreen = 2;
    console.log('you\'re in the drop down button');
    $('#aztecdropdown').hide();
  });

  $('#aztecdropdownmap').on('click', function(){
    aztecScreen = 3;
    console.log('you\'re in the drop down button');
    $('#aztecdropdown').hide();
  });

  $('#aztecdropdownorganize').on('click', function(){
    aztecScreen = 4;
    console.log('you\'re in the drop down button');
    $('#aztecdropdown').hide();
  });

  $('#aztecinfobutton1').on('click', function(){
    $('#aztecmainimage').attr('src', 'public/img/pandidescribemain.png');
    $('#aztecinfobar').attr('src', 'public/img/pandidescribeheader.png');
  });

  $('#aztecinfobutton2').on('click', function(){
    $('#aztecmainimage').attr('src', 'public/img/pandiscanmain.png');
    $('#aztecinfobar').attr('src', 'public/img/pandiscanheader.png');
  });

  $('#aztecinfobutton3').on('click', function(){
    if (aztecScreen == 1){
      $('#aztecmainimage').attr('usemap', '#aztecacquiremap');
      $(window).trigger('resize');
    }
    $('#aztecmainimage').attr('src', 'public/img/pandiaquiremain.png');
    $('#aztecinfobar').attr('src', 'public/img/pandiaquireheader.png');
  });

  $('#aztecinfobutton4').on('click', function(){
    $('#aztecmainimage').attr('src', 'public/img/pandiconfirmmain.png');
    $('#aztecinfobar').attr('src', 'public/img/pandiconfirmheader.png');
  });

  $('#aztecinfobutton5').on('click', function(){
    $('#aztecmainimage').attr('src', 'public/img/pandicalculatemain.png');
    $('#aztecinfobar').attr('src', 'public/img/pandicalculateheader.png');
  });

  $('#aztecacquiresettingsbutton').on('click', function(){
    $('#aztecacquiresettings').show();

    let offsets = $(this).offset();
    let coordsArray = this.coords.split(',');

    $('#aztecacquiresettings').css('top', (offsets.top + 3 + Number(coordsArray[3])));
    $('#aztecacquiresettings').css('left', (offsets.left + Number(coordsArray[0])));
  });

  $('#azteccloseicon').on('click', function(){
    $('#aztecacquiresettings').hide();
  });
}