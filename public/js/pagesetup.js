//pagesetup.js -- various functions that set up page to be ready for use
//i.e. disabling drabbables, setting the 'close when clicked out of' items, etc

'use strict';


let beamslider; 

let pageSetup = function(){
  //array of elements that we close when you click outside of the item
  //we loop thorough this later on to set this behavior on all of them
  let closewhenoffclick = ['maindropdown', 'openfiledialogue', 'filemenu', 'deflectorbox'];
  
  let listOfDraggables = ['openfiledialogue', 'microscopeGraph', 'vacuumoverview', 'filtercontroldiv', 'openbox', 'basesetup', 'columndiv', 'errordiv', 'directalignmentspopout', 'diffractograms', 'popContent'];
  
  $(document).mouseup(function(e) {
    for (let i = 0; i < closewhenoffclick.length; ++i){
      var $container = $('#' + closewhenoffclick[i]);

      // if the target of the click isn't the container nor a descendant of the container
      if (!$container.is(e.target) && $container.has(e.target).length === 0) {
        $container.hide();
      }
    }
  });

  $('img').on('dragstart', function(event){ 
      event.preventDefault(); 
  });


  beamslider = $('#beamrange').slider({
    values: [1, 11], 
    value: 7,
  });

  $('#beamrange').on("change", function(event, ui){
    $('#beamvalue').text(beamslider.val());
  });

  for (let i = 0; i < listOfDraggables.length; ++i){
    $('#' + listOfDraggables[i]).draggable({
      addClasses: true 
    });
  }

  //Setup for the alignment box, currently only sets the tune tab one.
  let tunealignmentbox = new AlignmentBox(data, '.alignmenttextdata', '#alignmenthelptune');
  tunealignmentbox.drawInital();
  tunealignmentbox.addNextButton($('#tunealignright'));
  tunealignmentbox.addPrevButton($('#tunealignleft'));

  //setup for the canvas classes
};
