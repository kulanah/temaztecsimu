'use strict';

let mainScreen = function(){
  $('#mainscreendropdown').on('click', function(event){
    if(isVisible('maindropdown')){
      $('#maindropdown').hide();
      maindrop = false;
    } else {
      $('#maindropdown').show();
    }
  });

  $('#vacuumbutton').on('click', function(event){
    if(isVisible('maindropdown')){
      $('#vacuumoverview').show();
      $('#maindropdown').hide();
    }
  });

  $('#directalignmentdrop').on('click', function(event){
    $('#maindropdown').hide();
    //open up the setup button with all the accompanying effects
    if (openScreen == 0){
      $('#basesetup').show();
    }
    $('#microControls').show();
    $('#directalignmentspopout').show();
    setupbox.drawCanvas();
    openScreen = 0;
    activeWindow = 1;

  })

  $('#closedrop').on('click', function(event){
    $('#vacuumoverview').hide();
    $('#maindropdown').hide();
    $('#directalignmentspopout').hide();
  });

  $('#filebutton').on('click', function(event){
    if($('#filemenu').css('display') == 'none'){
      $('#filemenu').show();
    } else {
      $('#filemenu').hide();
    }
  });

  $('#fileopen').on('click', function(event){
    $('#filemenu').hide();
    $('#openfiledialogue').show();
  });

  $('#xbox').on('click', function(event){
    $('#openfiledialogue').hide();
  });


  $('#cancel').on('click', function(event){
    $('#openfiledialogue').hide();
  });
  
  $('#openbutton').on('click', function(event){
    $('#openfiledialogue').show();
  });

  $('#imagefile').on('click', function(event){
    activeWindow = 0;
    $('#openfiledialogue').hide();
    $('#openbox').show();
    openbox.drawCanvas();
    $('#basesetup').hide();
  });

  $('#filtercontrolclosebox').on('click', function(event){
    $('#filtercontroldiv').hide();
  });

  $('#startview').on('click', function(event){
    activeWindow = 0;
    $('#openbox').show();
    openbox.drawCanvas();
    $('#basesetup').hide();
  });

  $('#micrographxbox').on('click', function(event){
    $('#openbox').hide();
  });

  $('#setupboxxbox').on('click', function(event){
    $('#basesetup').hide();
  });

  $('#error').on('click', function(event){
    $('#errordiv').show();
  });

  $('#errorokay').on('click', function(event){
    $('#errordiv').hide();
  });

  $('#daguntilt').on('click', function(event){
    deactivateDirectAlignments();
    activateGunTilt();
  })

  $('#dagunshift').on('click', function(event){
    deactivateDirectAlignments();
    activateGunShift();
  })

  $('.pptoggle').on('click', function(event){
    deactivateDirectAlignments();
    activatePivotPoint();
  });

  $('#dabeamshift').on('click', function(event){
    deactivateDirectAlignments();
    resetPosition();
    activateBeamShift();
  })

  $('#darotationcenter').on('click', function(event){
    deactivateDirectAlignments();
    activateRotationCenter();
  })

  $('#dacomafreealignmentx').on('click', function(event){
    deactivateDirectAlignments();
    activateComaFreeAlignmentX();
    $('#diffractograms').show();
  })

  $('#dacomafreealignmenty').on('click', function(event){
    deactivateDirectAlignments();
    activateComaFreeAlignmentY();
    $('#diffractograms').show();    
  })

  $('#dadone').on('click', function(event){
    deactivateDirectAlignments();
  })
};