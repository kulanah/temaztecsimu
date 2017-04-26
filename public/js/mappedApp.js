'use strict';

let gunLense = 1;
let extractVal = 3500;
let extractFinal = 4500;

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

