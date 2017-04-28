'use strict';

let gunLense = 1;
let extractVal = 3500;
let extractFinal = 4500;

let controlShow = false;
let graphShow = false;

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


function startTime() {
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

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

$('#controlsLeft').hide();
$('#controlsRight').hide();
$('#microscopeGraph').hide();

startTime();
