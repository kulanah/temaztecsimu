//pagesetup.js -- various functions that set up page to be ready for use
//i.e. disabling drabbables, setting the 'close when clicked out of' items, etc

'use strict';


let beamslider;
let zcounter = 6;

let pageSetup = function(){
  //array of elements that we close when you click outside of the item
  //we loop thorough this later on to set this behavior on all of them
  let closewhenoffclick = ['maindropdown', 'openfiledialogue', 'filemenu', 'deflectorbox'];
  
  let listOfDraggables = ['openfiledialogue', 'vacuumoverview', 'filtercontroldiv', 
  'openbox', 'basesetup', 'columndiv', 'errordiv', 'directalignmentspopout', 'diffractograms', 
  'columndivzoom', 'apertures', 'leftControllerDiv', 'rightControllerDiv', 'floatingstigmatordiv', 
  'tunehelppopup', 'qanda', 'examples', 'homework', 'curriculum', 'learningmode', 'lecturediv'];

  let draggablesWithTextInputs = ['notepad']
  
  function bringToFront(id) {
    // Whenever an element appears, move it to the front
    $(function() {
      var target = document.querySelector('#' + id);
      var observer = new MutationObserver(function(mutations) {
        // Disconnect the observer to avoid an infinite loop, change the z-index, then reconnect
        observer.disconnect();
        $('#' + id).css('z-index', zcounter);
        zcounter++;
        observer.observe(target, {
          attributeFilter: ['style']
        });        
      });
      observer.observe(target, {
        attributeFilter: ['style']
      });
    });
  };

  $(document).mouseup(function(e) {
    for (let i = 0; i < closewhenoffclick.length; ++i){
      var $container = $('#' + closewhenoffclick[i]);

      // if the target of the click isn't the container nor a descendant of the container
      if (!$container.is(e.target) && $container.has(e.target).length === 0) {
        $container.hide();
      }
    }
  });

  // openfiledialog gets bringToFront called on it as a draggable, below
  bringToFront('maindropdown');  
  bringToFront('filemenu');
  bringToFront('deflectorbox');
  bringToFront('grabbingdiv');  

  $('img').on('dragstart', function(event){ 
      event.preventDefault(); 
  });


  beamslider = $('#beamrange').slider({
    values: [1, 11], 
    value: 7,
  });

  for (let i = 0; i < listOfDraggables.length; ++i){
    $('#' + listOfDraggables[i]).draggable({
      addClasses: true,
      cancel: 'map, iframe',
      iframeFix: true,
      cursor: 'move',
      containment: '#maincontent', // keeps users from dragging elements offscreen
      scroll: false
    });
    $('#' + listOfDraggables[i]).mousedown(function(){
      $('#' + listOfDraggables[i]).css('z-index', zcounter); // moves element to the front on mousedown
      zcounter++;
    });
    bringToFront(listOfDraggables[i]);
  }

  // Make draggablesWithTextInputs draggable separately because cancelling map on notepad causes the textarea to become unclickable
  for (let i = 0; i < draggablesWithTextInputs.length; ++i){    
    $('#' + draggablesWithTextInputs[i]).draggable({
      addClasses: true,
      iframeFix: true,
      cursor: 'move',
      containment: '#maincontent',
      scroll: false
    });
    $('#' + draggablesWithTextInputs[i]).mousedown(function(){
      $('#' + draggablesWithTextInputs[i]).css('z-index', zcounter);
      zcounter++;
    });
    bringToFront(draggablesWithTextInputs[i]);
  }

  // Special case for microscope controls since the container div is shown/hidden,
  // but the individual controllers are moved to the front
  $(function() {
    var target = document.querySelector('#microControls');
    var observer = new MutationObserver(function(mutations) {
      // Disconnect the observer to avoid an infinite loop, change the z-index, then reconnect
      observer.disconnect();
      $('#leftControllerDiv').css('z-index', zcounter);
      $('#rightControllerDiv').css('z-index', zcounter);
      zcounter++;
      observer.observe(target, {
        attributeFilter: ['style']
      });        
    });
    observer.observe(target, {
      attributeFilter: ['style']
    });
  });

  // Set magnification and spot size displays based on initial values
  if(setupbox.zooms[setupbox.mag] >= 100000){
    $('#magnificationvalue').text('  ' + setupbox.zooms[setupbox.mag] / 1000 + 'k x');
  } else {
    $('#magnificationvalue').text('  ' + setupbox.zooms[setupbox.mag] + ' x');
  }
  $('#spotsizevalue').text(' ' + $('#beamrange').val());

  // Code to display defocus on page load only works if defocus is set as part of canvas construction
  /*let defocusString = setupbox.defocus.toFixed(2) + ' nm';
  while(defocusString.length < 11){
    defocusString = ' ' + defocusString;
  }
  defocusString = 'Defoc.:' + defocusString;
  $('#defocusvalue').text(defocusString);*/

  // Solution to have cursor adjust only in appropriate area for resizeable elements found at
  // https://stackoverflow.com/questions/9932569/css-to-change-the-cursor-style-of-the-resize-button-on-a-textarea by SpYk3HH
  $(function() {
    $(document).on('mousemove', 'textarea', function(e) {
        var a = $(this).offset().top + $(this).outerHeight() - 16,  //  top border of bottom-right-corner-box area
            b = $(this).offset().left + $(this).outerWidth() - 16;  //  left border of bottom-right-corner-box area
        $(this).css({
            cursor: e.pageY > a && e.pageX > b ? 'nw-resize' : ''
        });
    })
  });

  $(function() {
    $(document).on('mousemove', 'iframe', function(e) {
        var a = $(this).offset().top + $(this).outerHeight() - 16,  //  top border of bottom-right-corner-box area
            b = $(this).offset().left + $(this).outerWidth() - 16;  //  left border of bottom-right-corner-box area
        $(this).css({
            cursor: e.pageY > a && e.pageX > b ? 'nw-resize' : ''
        });
    })
  });
};
