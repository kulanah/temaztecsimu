'use strict';
let colopen = true;

//operate on/off - V value goes to 3000 FEG uA to 0 then back to 60

//file -> open OR start view open microscope image

//break onclicks into sections for different image bases

//tune tab LATER 

//remove the mess of booleans and create a 'isshown' function that returs true if shownn false if not

let clickFunctions = function(){

  $('#extractUp').click(function(){
    if (extractVal < 4500){
      extractVal += 100;
      fegVal += (3/5);
      $('#extractVal').text(extractVal + " V");
    }
  });

  $('#extractDown').click(function(){
    if (extractVal > 3000){
      extractVal -= 100;
      fegVal -= (3/5);
      $('#extractVal').text(extractVal + " V");
    }
  });

  $('#extractSubmit').click(function(){
    extractFinal = extractVal;
    $('#extractFinal').text(extractFinal + " V");
    $('#fegvalue').text(Math.floor(fegVal));
  });

  $('#gunLenseDown').click(function(){
    if (gunLense > 1){
      --gunLense;
    }
    //min 1 max 7
    $('#gunLenseVal').text(gunLense);
  });

  $('#gunLenseUp').click(function(){
    if(gunLense < 7){
      ++gunLense;
      $('#gunLenseVal').text(gunLense);
    }
  });

  $('#controls').click(function(){
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

  $('#graph').click(function(){
    if(graphShow){
      $('#microscopeGraph').hide();
      graphShow = false;
    } else{
      $('#microscopeGraph').show();
      graphShow = true;
    }
  });

  $('#temuistart').click(function(event){
    $('#mainimage').attr('src', './public/img/tia.png');
  });

  $('#micrographstart').click(function(event){
    $('#mainimage').attr('src', './public/img/mainscreen.png');
  });

  $('#mainscreendropdown').click(function(event){
    if(maindrop){
      $('#maindropdown').hide();
      maindrop = false;
    } else {
      $('#maindropdown').show();
      maindrop = true;
    }
  });

  $('#vacuumbutton').click(function(event){
    if(maindrop){
      $('#vacuumoverview').show();
      $('#maindropdown').hide();
      maindrop = false;
    }
  });

  $('#colvalves').click(function(event){
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

  $('#closedrop').click(function(event){
    $('#vacuumoverview').hide();
    $('#maindropdown').hide();
    maindrop = false;
  });

  $('.rightbutton').click(function(event){
    $('#tabsleft').hide();
    $('#tabsright').show();
  });

  $('.leftbutton').click(function(event){
    $('#tabsleft').show();
    $('#tabsright').hide();
  });

  $('#search').click(function(event){
    $('#leftcolsearch').show();
    $('#leftcolsetup').hide();
    if (micro){
      $('#leftcolumn').attr('src', './public/img/leftcolsearchmicro.png');
    } else {
      $('#leftcolumn').attr('src', './public/img/leftcolsearchnano.png');
    }
    currenttab = 1;
  });

  $('#setup').click(function(event){
    $('#leftcolsearch').hide();
    $('#leftcolsetup').show();
    currenttab = 0;
  });

  $('#buttonl3').click(function(event){
    if (currenttab == 1){
      let value = beamslider.val();
      --value;
      beamslider.val(value);
      $('#beamvalue').text(beamslider.val());
    };
  });

  $('#buttonr3').click(function(event){
    if (currenttab == 1){
      let value = beamslider.val();
      ++value;
      beamslider.val(value);
      $('#beamvalue').text(beamslider.val());
    };
  });

  $('#nano').click(function(event){
    $('#leftcolumn').attr('src', './public/img/leftcolsearchmicro.png');
    beamslider.val(3);
    $('#beamvalue').text(beamslider.val());
    micro = true;
  });

  $('#micro').click(function(event){
    $('#leftcolumn').attr('src', './public/img/leftcolsearchnano.png')
    beamslider.val(6);
    $('#beamvalue').text(beamslider.val());
    micro = false;
  });

  $('#hightension').click(function(event){
    kvSlide();
  });

  $('#filebutton').click(function(event){
    if($('#filemenu').css('display') == 'none'){
      $('#filemenu').show();
    } else {
      $('#filemenu').hide();
    }
  });

  $('#fileopen').click(function(event){
    $('#filemenu').hide();
    $('#openfiledialogue').show();
  });

  $('#xbox').click(function(event){
    $('#openfiledialogue').hide();
  });


  $('#cancel').click(function(event){
    $('#openfiledialogue').hide();
  });
  
  $('#openbutton').click(function(event){
    $('#openfiledialogue').show();
  });

  $('#operate').click(function(event){
    
  });

  $('#imagefile').click(function(event){
    $('#openfiledialogue').hide();
    $('#microscopeimage').show();
  });
    let startX, startY;


  $('#buttonrollerr').mousedown(function(event){
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