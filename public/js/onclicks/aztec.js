let aztecScreen = 1;
let aztec = function(){

  let hideAztecHeaders = function(){
    $('#pandiheader').hide();
    $('#analyzerheader').hide();
    $('#linescanheader').hide();
    $('#mapheader').hide();
    $('#optimizeheader').hide();
  };

  let hideAztecMains = function(){
    $('.aztecmaindiv').hide();
  }

  $('.aztecinfodropdown').on('click', function(){
    $('#aztecdropdown').show();

    let offsets = $(this).offset();
    let coordsArray = this.coords.split(',');

    $('#aztecdropdown').css('top', (offsets.top + 3 + Number(coordsArray[3])));
    $('#aztecdropdown').css('left', (offsets.left + Number(coordsArray[0])));
  });

  $('#aztecdropdownanalyzer').on('click', function(){
    aztecScreen = 0;
    $('#aztecdropdown').hide();

    hideAztecHeaders();
    hideAztecMains();
    $('#analyzermain').show();
    $('#analyzerheader').show();
    $(window).trigger('resize');
  });

  $('#aztecdropdownpointandid').on('click', function(){
    aztecScreen = 1;
    $('#aztecdropdown').hide();

    hideAztecHeaders();
    hideAztecMains();
    $('#pandimain').show();
    $('#pandiheader').show();
    $(window).trigger('resize');
  });

  $('#aztecdropdownlinescan').on('click', function(){
    aztecScreen = 2;
    hideAztecHeaders();
    hideAztecMains();
    $('#linescanmain').show();
    $('#linescanheader').show();

    $('#aztecdropdown').hide();
    $(window).trigger('resize');
  });

  $('#aztecdropdownmap').on('click', function(){
    aztecScreen = 3;
    hideAztecHeaders();
    hideAztecMains();
    $('#mapmain').show();
    $('#mapheader').show();

    $('#aztecdropdown').hide();
    $(window).trigger('resize');
  });

  $('#aztecdropdownorganize').on('click', function(){
    aztecScreen = 4;
    hideAztecHeaders();
    hideAztecMains();
    $('#optimizemain').show();
    $('#optimizeheader').show();

    $('#aztecdropdown').hide();
    $(window).trigger('resize');
  });

  $('#pandidescribebutton').on('click', function(){
    $('#pandiheaderimg').attr('src', 'public/img/pandidescribeheader.png');
    $('.pandimain').hide();
    $('#pandidescribemain').show();

  });

  $('#pandiscanbutton').on('click', function(){
    $('#pandiheaderimg').attr('src', 'public/img/pandiscanheader.png');
    $('.pandimain').hide();
    $('#pandiscanmain').show();
  });

  $('#pandiacquirebutton').on('click', function(){
    if (aztecScreen == 1){
      $(window).trigger('resize');
    }
    $('.pandimain').hide();
    $('#pandiacquiremain').show();
    $('#pandiheaderimg').attr('src', 'public/img/pandiacquireheader.png');

  });

  $('#pandiconfirmbutton').on('click', function(){
    $('.pandimain').hide();
    $('#pandiheaderimg').attr('src', 'public/img/pandiconfirmheader.png');
    $('#pandiconfirmmain').show();
  });

  $('#pandicalculatebutton').on('click', function(){
    $('#pandiheaderimg').attr('src', 'public/img/pandicalculateheader.png');
    $('.pandimain').hide();
    $('#pandicalculatemain').show();
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

  $('#analyzerdescribebutton').on('click', function(){
    $('.analyzermain').hide();
    $('#analyzerheaderimg').attr('src', 'public/img/analyzerdescribeheader.png');
    $('#analyzerdescribemain').show();
    
  });

  $('#analyzeracquirebutton').on('click', function(){
    $('.analyzermain').hide();
    $('#analyzerheaderimg').attr('src', 'public/img/analyzeracquireheader.png');
    $('#analyzeracquiremain').show();
  });

  $('#analyzerconfirmbutton').on('click', function(){
    $('.analyzermain').hide();
    $('#analyzerheaderimg').attr('src', 'public/img/analyzerconfirmheader.png');
    $('#analyzerconfirmmain').show();
  });

  $('#analyzercalculatebutton').on('click', function(){
    $('.analyzermain').hide();
    $('#analyzerheaderimg').attr('src', 'public/img/analyzercalculateheader.png');
    $('#analyzercalculatemain').show();
  });

  $('#linescandescribebutton').on('click', function(){
    $('.linescanmain').hide();
    $('#linescanheaderimg').attr('src', 'public/img/linescandescribeheader.png');
    $('#linescandescribemain').show();
  });

  $('#linescanscanbutton').on('click', function(){
    $('.linescanmain').hide();
    $('#linescanheaderimg').attr('src', 'public/img/linescanscanheader.png');
    $('#linescanscanmain').show();
  });

  $('#linescanacquirebutton').on('click', function(){
    $('.linescanmain').hide();
    $('#linescanheaderimg').attr('src', 'public/img/linescanacquireheader.png');
    $('#linescanacquiremain').show();
  });

  $('#linescanconstructbutton').on('click', function(){
    $('.linescanmain').hide();
    $('#linescanheaderimg').attr('src', 'public/img/linescanconstructheader.png');
    $('#linescanconstructmain').show();
  });

  $('#mapdescribebutton').on('click', function(){
    $('.mapmain').hide();
    $('#mapheaderimg').attr('src', 'public/img/mapdescribeheader.png');
    $('#mapdescribemain').show();
  });

  $('#mapscanbutton').on('click', function(){
    $('.mapmain').hide();
    $('#mapheaderimg').attr('src', 'public/img/mapscanheader.png');
    $('#mapscanmain').show();
  });

  $('#mapacquirebutton').on('click', function(){
    $('.mapmain').hide();
    $('#mapheaderimg').attr('src', 'public/img/mapacquireheader.png');
    $('#mapacquiremain').show();
  });

  $('#mapconstructbutton').on('click', function(){
    $('.mapmain').hide();
    $('#mapheaderimg').attr('src', 'public/img/mapconstructheader.png');
    $('#mapconstructmain').show();
  });

  $('#optimizecalibratebutton').on('click', function(){
    $('.optimizemain').hide();
    $('#optimizeheaderimg').attr('src', 'public/img/optimizecalibrateheader.png');
    $('#optimizecalibratemain').show();
  });

  $('#optimizestandardizebutton').on('click', function(){
    $('.optimizemain').hide();
    $('#optimizeheaderimg').attr('src', 'public/img/optimizestandardizeheader.png');
    $('#optimizestandardizemain').show();
  });

  $('#optimizepileupbutton').on('click', function(){
    $('.optimizemain').hide();
    $('#optimizeheaderimg').attr('src', 'public/img/optimizepileupheader.png');
    $('#optimizepileupmain').show();
  });

}