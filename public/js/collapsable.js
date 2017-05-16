'use strict';

$('#1content').hide();

$('#1header').click(function(event){
  let content =  $('#1content');
  if (content.css('display') == 'none'){
    content.show();
    $('#1icon').attr('src', '../img/minus.png');
  } else {
    content.hide();
    $('#1icon').attr('src', '../img/plus.png');
  }
});


$('#2content').hide();

$('#2header').click(function(event){
  let content =  $('#2content');
  if (content.css('display') == 'none'){
    content.show();
    $('#2icon').attr('src', '../img/minus.png');
  } else {
    content.hide();
    $('#2icon').attr('src', '../img/plus.png');
  }
});

$('#3content').hide();

$('#3header').click(function(event){
  let content =  $('#3content');
  if (content.css('display') == 'none'){
    content.show();
    $('#3icon').attr('src', '../img/minus.png');
  } else {
    content.hide();
    $('#3icon').attr('src', '../img/plus.png');
  }
});

$('#4content').hide();

$('#4header').click(function(event){
  let content =  $('#4content');
  if (content.css('display') == 'none'){
    content.show();
    $('#4icon').attr('src', '../img/minus.png');
  } else {
    content.hide();
    $('#4icon').attr('src', '../img/plus.png');
  }
});

$('#5content').hide();

$('#5header').click(function(event){
  let content =  $('#5content');
  if (content.css('display') == 'none'){
    content.show();
    $('#5icon').attr('src', '../img/minus.png');
  } else {
    content.hide();
    $('#5icon').attr('src', '../img/plus.png');
  }
});