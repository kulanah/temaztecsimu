'use strict'; 

//current tab can be related to the following values:
//status, search, tune, stem, FEGregister, eftem, dark field
let currenttab = 0;

let tabs = function(){
  $('.rightbutton').on('click', function(event){
    $('#tabsleft').hide();
    $('#tabsright').show();
  });

  $('.leftbutton').on('click', function(event){
    $('#tabsleft').show();
    $('#tabsright').hide();
  });

  $('#search').on('click', function(event){
    $('#leftcolsearch').show();
    $('#leftcolsetup').hide();
    $('#leftcoltune').hide();
    if (micro){
      $('#leftcolumn').attr('src', './public/img/leftcolsearchmicro.png');
    } else {
      $('#leftcolumn').attr('src', './public/img/leftcolsearchnano.png');
    }
    currenttab = 1;
  });

  $('#tune').on('click', function(event){
    $('#leftcolsearch').hide();
    $('#leftcolsetup').hide();
    $('#leftcoltune').show();

    currenttab = 2;
  });

  $('#setup').on('click', function(event){
    $('#leftcoltune').hide();
    $('#leftcolsearch').hide();
    $('#leftcolsetup').show();
    currenttab = 0;
  });
};