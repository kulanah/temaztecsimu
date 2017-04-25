let extractVal = 0;
let gunLense = 0;
let extractFinal = 0;

$('#colValvesClosed').click(function(){
  alert('test complete');
});

$('#extractUp').click(function(){
  extractVal += 100;
  $('#extractVal').text(extractVal + " V");
  console.log(extractVal);
});


$('#extractDown').click(function(){
  extractVal -= 100;
  $('#extractVal').text(extractVal + " V");
  console.log(extractVal);
});

$('#extractSubmit').click(function(){
  extractFinal = extractVal;
  $('#extractFinal').text(extractFinal + " V");
})

$('#gunLenseDown').click(function(){
  --gunLense;
  $('#gunLenseVal').text(gunLense);
})

$('#gunLenseUp').click(function(){
  ++gunLense;
  $('#gunLenseVal').text(gunLense);
})

