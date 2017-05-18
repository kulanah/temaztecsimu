//pagesetup.js -- various functions that set up page to be ready for use
//i.e. disabling drabbables, setting the 'close when clicked out of' items, etc

'use strict';

let pageSetup = function(){
  $('img').on('dragstart', function(event){ 
      event.preventDefault(); 
  });

  //array of elements that we close when you click outside of the item
  //we loop thorough this later on to set this behavior on all of them
  let closewhenoffclick = ['maindropdown', 'openfiledialogue', 'filemenu'];

  let beamslider = $('#beamrange').slider({
    values: [1, 11], 
    value: 7,
  });

  $('#beamrange').on("change", function(event, ui){
    $('#beamvalue').text(beamslider.val());
  });

  $('#openfiledialogue').draggable({
    addClasses: false 
  });
};
