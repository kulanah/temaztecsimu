let extractVal = 0;

$('#colValvesClosed').click(function(){
  alert('test complete');
});

$('#extractUp').click(function(){
  extractVal += 100;
  $('#testVal').text(extractVal + "V  ");
  console.log(extractVal);
});


$('#extractDown').click(function(){
  extractVal -= 100;
  $('#testVal').text(extractVal + "V");
  console.log(extractVal);
});
