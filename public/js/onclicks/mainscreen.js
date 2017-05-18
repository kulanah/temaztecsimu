'use strict';

let maindrop = false;

let mainScreen = function(){
  $('#mainscreendropdown').on('click', function(event){
    if(maindrop){
      $('#maindropdown').hide();
      maindrop = false;
    } else {
      $('#maindropdown').show();
      maindrop = true;
    }
  });

  $('#vacuumbutton').on('click', function(event){
    if(maindrop){
      $('#vacuumoverview').show();
      $('#maindropdown').hide();
      maindrop = false;
    }
  });

  $('#closedrop').on('click', function(event){
    $('#vacuumoverview').hide();
    $('#maindropdown').hide();
    maindrop = false;
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
    $('#openfiledialogue').hide();
    $('#microscopeimage').show();
  });

};