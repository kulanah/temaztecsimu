'use strict';

let drawCanvases = function(){

  let img = new Image();
  img.src = './public/img/23.png';

  img.onload = function(){
    let dmCanvas = $('#micrographboxcanvas')[0];
    let context = dmCanvas.getContext('2d');
    context.drawImage(img,0,0);
  };

  // open box in micrograph screen
  // $('#openboximage').drawImage({
  // source: './public/img/23.png',
  // x: 10, y: 10,
  // width: 512, height: 512,
  // fromCenter: false,
  // });
};