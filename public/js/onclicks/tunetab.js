'use strict';


let tuneTab = function(){
  $('#tuneexpand').on('click', function(){
    $('#deflectorbox').show();
  });

  // Condensor stigmator makes beam ellipse
  $('#tunecondensor').on('click', function(event){
    deactivateDA();
    activateCondensor();
  })

  // Diffraction stigmator makes dots ellipses
  $('#tunediffraction').on('click', function(event){
    diffractionStigmation = true;
  })

  $('#tunenone').on('click', function(event){
    deactivateDA();
    diffractionStigmation = false;
  })
};

let floatStig = function(){
  $('#floatexpand').on('click', function(){
    $('#floatingdeflectorbox').show();
  });

  // Condensor stigmator makes beam ellipse
  $('#floatcondensor').on('click', function(event){
    deactivateDA();
    activateCondensor();
  })

  // Diffraction stigmator makes dots ellipses
  $('#floatdiffraction').on('click', function(event){
    diffractionStigmation = true;
  })

  $('#floatnone').on('click', function(event){
    deactivateDA();
    diffractionStigmation = false;
  })
};