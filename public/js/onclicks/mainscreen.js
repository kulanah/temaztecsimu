'use strict';

function closeFloatingItems(){
  $('#vacuumoverview').hide();
  $('#maindropdown').hide();
  $('#directalignmentspopout').hide();
  $('#floatingstigmatordiv').hide();  
}

let mainScreen = function(){
  $('#mainscreendropdown').on('click', function(event){
    if(isVisible('maindropdown')){
      $('#maindropdown').hide();
      maindrop = false;
    } else {
      $('#maindropdown').show();
    }
  });

  $('.vacuumbutton').on('click', function(event){
    closeFloatingItems();    
    $('#vacuumoverview').show();
  });

  $('#stigmatordrop').on('click', function(event){
    closeFloatingItems();    
    if(!isVisible('leftcoltune')){
      $('#floatingstigmatordiv').show();
    }
  });

  $('#directalignmentdrop').on('click', function(event){
    closeFloatingItems();
    $('#openbox').hide();    
    //open up the setup button with all the accompanying effects
    if (openScreen == 0){
      $('#basesetup').show();
      activeWindow = 1;
    }
    $('#microControls').show();
    $('#directalignmentspopout').show();
    setupbox.drawCanvas();
  });

  $('#alignmentdrop').on('click', function(event){
    $('#maindropdown').hide();
    $('#openbox').hide();    
    if (openScreen == 0){
      $('#basesetup').show();
      activeWindow = 1;
    }
    $('#microControls').show();
    $('#tune').trigger('click');
    setupbox.drawCanvas();
  });

  $('#closedrop').on('click', function(event){
    closeFloatingItems();
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

  $('#filesaveas').on('click', function(event){
    $('#filemenu').hide();
    saveImage();
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

  $('#savebutton').on('click', function(event){
    saveImage();
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
    if(diffractionMode || setupbox.maskR < 100 || !screenLift){
      $('#errordiv').show();
    } else {
      activeWindow = 0;
      $('#openbox').show();
      openbox.drawCanvas();
      $('#basesetup').hide();
    }
  });

  $('#micrographxbox').on('click', function(event){
    $('#openbox').hide();
  });

  $('#setupboxxbox').on('click', function(event){
    $('#basesetup').hide();
  });

  $('#startacquire').on('click', function(event){
    if(isVisible('openbox')){
      screenshotImage();
    } else {
      $('#errordiv').show();
    }
  });

  $('#errorokay').on('click', function(event){
    $('#errordiv').hide();
  });

  $('#daguntilt').on('click', function(event){
    deactivateDA();
    activateGunTilt();
  })

  $('#dagunshift').on('click', function(event){
    deactivateDA();
    activateGunShift();
  })

  $('.ppxtoggle').on('click', function(event){
    deactivateDA();
    activatePivotPointX();
  });

  $('.ppytoggle').on('click', function(event){
    deactivateDA();
    activatePivotPointY();
  });

  $('#dabeamshift').on('click', function(event){
    deactivateDA();
    resetPosition();
    activateBeamShift();
  })

  $('#darotationcenter').on('click', function(event){
    deactivateDA();
    activateRotationCenter();
  })

  $('#dacomafreealignmentx').on('click', function(event){
    deactivateDA();
    activateComaFreeAlignmentX();
    $('#diffractograms').show();
  })

  $('#dacomafreealignmenty').on('click', function(event){
    deactivateDA();
    activateComaFreeAlignmentY();
    $('#diffractograms').show();    
  })

  $('#dadone').on('click', function(event){
    stigmatorActive = true;
    alignmentMode = 'None';
    deactivateDA();
  })

  $('#daautohelp').on('click', function(){
    if(this.checked){
      if(alignmentMode !== 'None' || stigmatorMode !== 'None'){
        $('#tunehelppopup').show();
      }
    } else {
      $('#tunehelppopup').hide();
    }
  });
};