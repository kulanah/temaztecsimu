'use strict';

let gunLense = 1;
let extractVal = 3500;
let extractFinal = 4500;

let controlShow = false;
let graphShow = false;
let maindrop = false;
let micro = true;

//current tab can be the followng values:
//status, search, tune, stem, FEGregister, eftem, dark field
let currenttab = 0;

let beamslider = $('#beamrange').slider({
  values: [1, 11], 
  value: 7,
});

$('#beamrange').on("change", function(event, ui){
  $('#beamvalue').text(beamslider.val());
});

let startTime = function() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let ampm = 'AM';
    if (h > 12){
      h -= 12;
      ampm = 'PM';
    };
    m = checkTime(m);
    document.getElementById('clock').innerHTML =
    h + ":" + m + " " + ampm;
    var t = setTimeout(startTime, 500);
}

let checkTime = function(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

let hideBatch = function(){
  $('#controlsLeft').hide();
  $('#controlsRight').hide();
  $('#microscopeGraph').hide();
  $('#maindropdown').hide();
  $('#searchcontent').hide();
  $('#vacuumoverview').hide();
};

$('img').on('dragstart', function(event){ 
    event.preventDefault(); 
});

hideBatch();
startTime();
clickFunctions();
alertFunc();