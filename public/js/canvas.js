'use strict';

let contextVar;
class Canvas {

  constructor(source, cssID){
    this.selector = $('#' + cssID);
    this.context = this.selector[0].getContext('2d');
    this.baseContext = this;

    contextVar = this;


    this.maskX = 0;
    this.maskY = 0;
    this.maskR = 0;

    this.img = new Image;
    this.img.src = source;

    this.img.onload = function(){
      console.log(this);
      contextVar.setMaskXYR();
    }

    console.log(this.maskX);

    this.zooms = [0.25, 0.5, 1.0, 2.0, 4.0];
    
    this.imgX = 0;
    this.imgY = 0;
  };

  setMaskXYR(){
    this.maskX = this.img.width / 2;
    this.maskY = this.img.height / 2;
    this.maskR = this.img.width / 8;


  }


  drawCanvas(){
    this.context.clearRect(0,0,this.img.width,this.img.height);

    this.context.fillRect(0,0,this.img.width * 2,this.img.height * 2);

    this.context.beginPath();
    this.context.arc(this.maskX,this.maskY,this.maskR,0,Math.PI * 2, true);
    this.context.clip();

    this.context.drawImage(this.img,this.imgX,this.imgY);
  }
};