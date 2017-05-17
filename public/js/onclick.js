'use strict';
let colopen = true;

//operate on/off - V value goes to 3000 FEG uA to 0 then back to 60

//file -> open OR start view open microscope image

//break onclicks into sections for different image bases

//tune tab LATER 

//remove the mess of booleans and create a 'isshown' function that returs true if shownn false if not

let clickFunctions = function(){
  $('#extractUp').on('click', function(){
    if (extractVal < 4500){
      extractVal += 100;
      fegVal += (3/5);
      $('#extractVal').text(extractVal + " V");
    }
  });

  $('#extractDown').on('click', function(){
    if (extractVal > 3000){
      extractVal -= 100;
      fegVal -= (3/5);
      $('#extractVal').text(extractVal + " V");
    }
  });

  $('#extractSubmit').on('click', function(){
    extractFinal = extractVal;
    $('#extractFinal').text(extractFinal + " V");
    $('#fegvalue').text(Math.floor(fegVal));
  });

  $('#gunLenseDown').on('click', function(){
    if (gunLense > 1){
      --gunLense;
    }
    //min 1 max 7
    $('#gunLenseVal').text(gunLense);
  });

  $('#gunLenseUp').on('click', function(){
    if(gunLense < 7){
      ++gunLense;
      $('#gunLenseVal').text(gunLense);
    }
  });

  $('#controls').on('click', function(){
    if (controlShow){
      $('#controlsLeft').hide();
      $('#controlsRight').hide();
      controlShow = false;
    } else {
      $('#controlsLeft').show();
      $('#controlsRight').show();
      controlShow = true;
    }
  });

  $('#graph').on('click', function(){
    if(graphShow){
      $('#microscopeGraph').hide();
      graphShow = false;
    } else{
      $('#microscopeGraph').show();
      graphShow = true;
    }
  });

  $('#temuistart').on('click', function(event){
    $('#mainimage').attr('src', './public/img/tia.png');
  });

  $('#micrographstart').on('click', function(event){
    $('#mainimage').attr('src', './public/img/mainscreen.png');
  });

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

  $('#colvalves').on('click', function(event){
    if (colopen){
      $('#leftcolumnvacuum').attr('src', './public/img/vacuummenuclosed.png');
      $('#vacuumimg').attr('src', './public/img/vacuumclosed.png');
      colopen = false;
    } else {
      $('#leftcolumnvacuum').attr('src', './public/img/vacuummenuopen.png');
      $('#vacuumimg').attr('src', './public/img/vacuumopen.png');
      colopen = true;
    }
  });

  $('#closedrop').on('click', function(event){
    $('#vacuumoverview').hide();
    $('#maindropdown').hide();
    maindrop = false;
  });

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

    currentTab = 2;
  });

  $('#setup').on('click', function(event){
    $('#leftcoltune').hide();
    $('#leftcolsearch').hide();
    $('#leftcolsetup').show();
    currenttab = 0;
  });

  $('#buttonl3').on('click', function(event){
    if (currenttab == 1){
      let value = beamslider.val();
      --value;
      beamslider.val(value);
      $('#beamvalue').text(beamslider.val());
    };
  });

  $('#buttonr3').on('click', function(event){
    if (currenttab == 1){
      let value = beamslider.val();
      ++value;
      beamslider.val(value);
      $('#beamvalue').text(beamslider.val());
    };
  });

  $('#nano').on('click', function(event){
    $('#leftcolumn').attr('src', './public/img/leftcolsearchmicro.png');
    beamslider.val(3);
    $('#beamvalue').text(beamslider.val());
    micro = true;
  });

  $('#micro').on('click', function(event){
    $('#leftcolumn').attr('src', './public/img/leftcolsearchnano.png')
    beamslider.val(6);
    $('#beamvalue').text(beamslider.val());
    micro = false;
  });

  $('#hightension').on('click', function(event){
    kvSlide();
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

  $('#operate').on('click', function(event){
    
  });

  $('#imagefile').on('click', function(event){
    $('#openfiledialogue').hide();
    $('#microscopeimage').show();
  });
    let startX, startY;


  $('#buttonrollerr').mousedown(function(event){
    event.preventDefault();
    startX = event.clientX;
    startY = event.clientY;

    /*
    get starting x y
    on mousemove:
      look how far it's moved
      shift image that much as well
    */

    $('body')[0].addEventListener('mouseup', mouseuptemplate);
    $('body')[0].addEventListener('mousemove', mousemovetemplate);

    console.log('start vals are x: ' + startX + ', y: ' + startY);
  });

  let mousemovetemplate = function(event){

    console.log('clientx is ' + event.clientX);
    let deltaX = event.clientX - startX;
    let deltaY = event.clientY - startY;

    startX = event.clientX;
    startY = event.clientY;

    moveImage(2 * deltaY, 2 * deltaX);
  };

  let mouseuptemplate = function(event){
    $('body')[0].removeEventListener('mousemove', mousemovetemplate);
  }

}