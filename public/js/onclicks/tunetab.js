'use strict';

let updateStigmatorVisual = true;

let tuneTab = function(){
  $('#tuneexpand').on('click', function(){
    $('#deflectorbox').show();
  });

  // Condensor stigmator makes beam ellipse
  $('#tunecondensor').on('click', function(event){
    updateStigmatorVisual = false;
    deactivateStigmator();
    updateStigmatorVisual = true;
    activateCondensor();
  })

  // Objective stigmator stretches image and diffractogram
  $('#tuneobjective').on('click', function(event){
    updateStigmatorVisual = false;
    deactivateStigmator();
    updateStigmatorVisual = true;
    activateObjective();
  })

  // Diffraction stigmator makes dots ellipses
  $('#tunediffraction').on('click', function(event){
    updateStigmatorVisual = false;
    deactivateStigmator();
    updateStigmatorVisual = true;
    activateDiffractionStigmator();
  })

  $('#tunenone').on('click', function(event){
    deactivateStigmator();    
  })
};

let floatStig = function(){
  $('#floatexpand').on('click', function(){
    $('#floatingdeflectorbox').show();
  });

  // Condensor stigmator makes beam ellipse
  $('#floatcondensor').on('click', function(event){
    updateStigmatorVisual = false;
    deactivateStigmator();
    updateStigmatorVisual = true;
    activateCondensor();
  })

  // Objective stigmator stretches image and diffractogram
  $('#floatobjective').on('click', function(event){
    updateStigmatorVisual = false;
    deactivateStigmator();
    updateStigmatorVisual = true;
    activateObjective();
  })

  // Diffraction stigmator makes dots ellipses
  $('#floatdiffraction').on('click', function(event){
    updateStigmatorVisual = false;
    deactivateStigmator();
    updateStigmatorVisual = true;
    activateDiffractionStigmator();
  })

  $('#floatnone').on('click', function(event){
    deactivateStigmator();
  })
};