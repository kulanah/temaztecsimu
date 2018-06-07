'use strict'; 

//current tab can be related to the following values:
//status, search, tune, stem, FEGregister, eftem, dark field
let currentTab = 0;
let tabsList = ['leftcolsetup', 'leftcolsearch', 'leftcoltune', 'leftcolstem', 'leftcolfegregister', 'leftcoleftem', 'leftcoldarkfield'];

let tabs = function(){

  let setCurrentTab = function(next){
    $('#' + tabsList[currentTab]).hide();
    $('#' + tabsList[next]).show();
    currentTab = next;
    if(next === 2){
      // the following line activates tune alignment on switching to the tab - probably not desirable behavior?
      //tunealignmentbox.activateTuneAlignment();
    } else {
      tunealignmentbox.deactivateTuneAlignment();
    }
  };

  $('.rightbutton').on('click', function(event){
    $('#tabsleft').hide();
    $('#tabsright').show();
  });

  $('.leftbutton').on('click', function(event){
    $('#tabsleft').show();
    $('#tabsright').hide();
  });

  $('#setup').on('click', function(event){
    setCurrentTab(0);
  });

  $('#search').on('click', function(event){
    setCurrentTab(1)
    if (micro){
      $('#leftcolumn').attr('src', './public/img/leftcolsearchmicro.png');
    } else {
      $('#leftcolumn').attr('src', './public/img/leftcolsearchnano.png');
    }
  });

  $('#tune').on('click', function(event){
    setCurrentTab(2);
    $('#floatingstigmatordiv').hide();    
  });

  $('#stem').on('click', function(event){
    setCurrentTab(3);
  });

  $('#fegregister').on('click', function(event){
    setCurrentTab(4);
  });

  $('#fegregtab1').on('click', function(event){
    setCurrentTab(4);
    $('#tabsleft').hide();
    $('#tabsright').show();
  });

  $('#eftem').on('click', function(event){
    setCurrentTab(5);
  });

  $('#darkfield').on('click', function(event){
    setCurrentTab(6);
  });
};