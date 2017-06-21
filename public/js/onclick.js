//onclick.js -- runs though all onclikc functions each segmented into their own function.  
//each section is given it's own function, and when relevant each subsection has it's own function inside.x
//Could potentially only run these when they're needed and remove the html elements when not in use.

'use strict';
let startX, startY, startIntensity;

let openWindow = 0;
let currentWindow = 0;

let clickFunctions = function(){
  microscopeControllers();
  mainScreen();
  searchTab();
  setupTab();
  startMenu();
  tabs();
};
