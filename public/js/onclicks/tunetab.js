'use strict';

let tuneTab = function(){
  $('#tunealignexpand').on('click', function(){
    $('#deflectorbox').show();
  });

  // Condensor stigmator makes beam ellipse
  $('#tunecondensor').on('click', function(event){
    deactivateDA();
    activateCondensor();
  })

  // Objective stigmator stretches image and diffractogram
  $('#tuneobjective').on('click', function(event){
    deactivateDA();
    activateObjective();
  })

  // Diffraction stigmator makes dots ellipses
  $('#tunediffraction').on('click', function(event){
    deactivateDA();
    activateDiffractionStigmator();
  })

  $('#tunenone').on('click', function(event){
    deactivateStigmator();    
  })
};

let floatStig = function(){
  // Condensor stigmator makes beam ellipse
  $('#floatcondensor').on('click', function(event){
    deactivateDA();
    activateCondensor();
  })

  // Objective stigmator stretches image and diffractogram
  $('#floatobjective').on('click', function(event){
    deactivateDA();
    activateObjective();
  })

  // Diffraction stigmator makes dots ellipses
  $('#floatdiffraction').on('click', function(event){
    deactivateDA();
    activateDiffractionStigmator();
  })

  $('#floatnone').on('click', function(event){
    deactivateStigmator();
  })
};