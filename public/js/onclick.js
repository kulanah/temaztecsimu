//onclick.js -- runs though all onclikc functions each segmented into their own function.  
//each section is given it's own function, and when relevant each subsection has it's own function inside.x
//Could potentially only run these when they're needed and remove the html elements when not in use.

'use strict';
let startX, startY, startIntensity;

let openScreen = 0;
let activeWindow = 0;
let diffractionMode = false;
let wobbleMode = false;
let onSpecimen = true;
let alignmentMode = 'None';
let stigmationMode = 'None';
let stigmatorActive = false;
let blockSpecimen = false;
let screenLift = false;

let clickFunctions = function(){
  column();
  microscopeControllers();
  mainScreen();
  searchTab();
  setupTab();
  startMenu();
  tabs();
  tuneTab();
  floatStig();
  aztec();
};
