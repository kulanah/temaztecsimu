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

  // Select the node that will be observed for mutations
  let targetNode = document.getElementById('openbox');

  // Options for the observer (which mutations to observe)
  let config = { attributes: true };

  // Callback function to execute when mutations are observed
  let callback = function(mutationsList) {
    if(isVisible('openbox')){
      $('#processbutton').removeClass('unusable');
    } else {
      $('#processbutton').addClass('unusable');
    }
  };

  // Create an observer instance linked to the callback function
  let observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);

  $('#processbutton').on('click', function(event){
    if($('#processmenu').css('display') == 'none' && isVisible('openbox')){
      $('#processmenu').show();
    } else {
      $('#processmenu').hide();
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

  $('#processfft').on('click', function(event){
    $('#processmenu').hide();
    drawFFT();
    $('#fft').show();
  });

  $('#processtransparent1').on('click', function(event){
    $('#processmenu').hide();
  });

  $('#processtransparent2').on('click', function(event){
    $('#processmenu').hide();
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

  $('#fftclose').on('click', function(event){
    $('#fft').hide();
  });

  $('#filtercontrolclosebox').on('click', function(event){
    $('#filtercontroldiv').hide();
  });

  $('#startview').on('click', function(event){
    if(diffractionMode || setupbox.maskR < 100 || !screenLift){
      $('#errormessage').text('What you are doing could be damaging to the microscope. \nPlease spread the beam to half screen and lift the screen before you use the CCD camera to acquire the image.');
      $('#errordiv').show();
    } else {
      activeWindow = 0;
      $('#openbox').show();
      openbox.drawCanvas();
      checkDiffractograms();
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
      $('#errormessage').text('What you are doing could be damaging to the microscope. \nPlease spread the beam to half screen and lift the screen before you use the CCD camera to acquire the image.');
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
      if(alignmentMode !== 'None' && alignmentMode !== 'Diffraction'){
        $('#directalignmentshelppopup').show();
      }
    } else {
      $('#directalignmentshelppopup').hide();
    }
  });
};