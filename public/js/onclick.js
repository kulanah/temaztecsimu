'use strict';

//l3 -1 onclick built, button needs to eb placed
//nanoprobe set to 6
//microprobe set to 3
//tune tab LATER 
//high tenson on/off - when off KV = 0 animate drop 
//operate on/off - V value goes to 3000 FEG uA to 0 then back to 60
//feg valuue should follow ratio of extraction va
//turbo on/off maybe do color along vaccuum

//file -> open OR start view open microscope image

//break onclicks into sections for different image bases

let clickFunctions = function(){

  $('#colValvesClosed').click(function(){
    alert('test complete');
  });

  $('#extractUp').click(function(){
    if (extractVal < 4500){
      extractVal += 100;
      $('#extractVal').text(extractVal + " V");
    }
  });

  $('#extractDown').click(function(){
    if (extractVal > 3000){
      extractVal -= 100;
      $('#extractVal').text(extractVal + " V");
    }
  });

  $('#extractSubmit').click(function(){
    extractFinal = extractVal;
    $('#extractFinal').text(extractFinal + " V");
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
    $('#mainimage').attr('src', './public/img/mainScreen.png');
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
    $('#leftcolumn').attr('src', './public/img/leftcolclosed.png');
    $('#vacuumimg').attr('src', './public/img/vacuumclosed.png');
  });

  $('#closedrop').click(function(event){
    $('#vacuumoverview').hide();
    $('#maindropdown').hide();
    maindrop = false;
  });

  $('.rightbutton').click(function(event){
    $('#tabs').attr('src', './public/img/tabs2.png');
    $('#tabs').attr('usemap', 'tabs2');
  });

  $('.leftbutton').click(function(event){
    $('#tabs').attr('src', './public/img/tabs1.png');
    $('#tabs').attr('usemap', 'tabs1');
  });

  $('#search').click(function(event){
    if (micro){
      $('#leftcolumn').attr('src', './public/img/leftcolsearchmicro.png');
    } else {
      $('#leftcolumn').attr('src', './public/img/leftcolsearchnano.png');
    }
    $('#leftcolumn').attr('usemap', 'leftcolsearch');
    $('#leftcolsetuptext').hide();
    $('#searchcontent').show();
    currenttab = 1;
  });

  $('#setup').click(function(event){
    $('#leftcolumn').attr('src', './public/img/leftcolsetup.png');
    $('#leftcolumn').attr('usemap', 'leftcolsetup');
    $('#leftcolsetuptext').show();
    $('#searchcontent').hide();
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
}