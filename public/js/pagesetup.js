//pagesetup.js -- various functions that set up page to be ready for use
//i.e. disabling drabbables, setting the 'close when clicked out of' items, etc

'use strict';


let beamslider;
let zcounter = 6;

let pageSetup = function(){
  //array of elements that we close when you click outside of the item
  //we loop thorough this later on to set this behavior on all of them
  let closewhenoffclick = ['maindropdown', 'openfiledialogue', 'filemenu', 'deflectorbox', 'floatingdeflectorbox'];
  
  let listOfDraggables = ['openfiledialogue', 'vacuumoverview', 'filtercontroldiv', 
  'openbox', 'basesetup', 'columndiv', 'errordiv', 'directalignmentspopout', 'diffractograms',
  'columndivzoom', 'leftControllerDiv', 'rightControllerDiv', 'qanda', 'examples', 'homework', 
  'curriculum', 'learningmode', 'lecturediv'];

  let draggablesWithTextInputs = ['floatingstigmatordiv', 'notepad']
  
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
  // floatingdeflectorbox will already be at front due to being the child element of a draggable
  bringToFront('maindropdown');  
  bringToFront('filemenu');
  bringToFront('deflectorbox');

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
      iframeFix: true
    });
    $('#' + listOfDraggables[i]).mousedown(function(){
      $('#' + listOfDraggables[i]).css('z-index', zcounter);
      zcounter++;
    });
    bringToFront(listOfDraggables[i]);
    $('#' + listOfDraggables[i]).css({
      'cursor':'move'
    });
  }

  // Make draggablesWithTextInputs draggable separately because cancelling map on notepad causes the textarea to become unclickable
  for (let i = 0; i < draggablesWithTextInputs.length; ++i){    
    $('#' + draggablesWithTextInputs[i]).draggable({
      addClasses: true,
      iframeFix: true
    });
    $('#' + draggablesWithTextInputs[i]).mousedown(function(){
      $(draggablesWithTextInputs[i]).css('z-index', zcounter);
      zcounter++;
    });
    bringToFront(draggablesWithTextInputs[i]);
    $('#' + draggablesWithTextInputs[i]).css({
      'cursor':'move'
    });
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

  //Setup for the alignment box, currently only sets the tune tab one.
  let tunealignmentbox = new AlignmentBox(data, '.alignmenttextdata', '#alignmenthelptune');
  tunealignmentbox.drawInital();
  tunealignmentbox.addNextButton($('#tunealignright'));
  tunealignmentbox.addPrevButton($('#tunealignleft'));

  //setup for the canvas classes

  $('#magnificationvalue').text(setupbox.zooms[setupbox.mag] + ' x')
  $('#spotsizevalue').text(' ' + $('#beamrange').val());
};
