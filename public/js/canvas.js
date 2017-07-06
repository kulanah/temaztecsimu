'use strict';

//this allows me to call an external function upon image load,  this could definitely be done bettter but I'm not sure how
let contextVar;

class Canvas {
  constructor(source, cssID){
    this.selector = $('#' + cssID);
    this.context = this.selector[0].getContext('2d');

    contextVar = this;

    this.img = new Image;
    this.img.src = source;
    this.imgX = 0;
    this.imgY = 0;

    this.img.onload = function(){
      console.log(this);
      contextVar.setMaskXYR();
    };

    this.maskX = 0;
    this.maskY = 0;
    this.maskR = 0;

    this.mag = 2;
    this.zooms = [0.25, 0.5, 1.0, 2.0, 4.0];
  };

  setMaskXYR(){
    this.maskX = this.img.width / 2;
    this.maskY = this.img.height / 2;
    this.maskR = this.img.width / 8;
  };

  drawCanvas(){
    this.context.save();

    let newRadius = this.maskR * this.zooms[this.mag];

    this.context.clearRect(0,0,900,900);

    this.context.fillRect(0,0,this.img.width * 2,this.img.height * 2);

    this.context.beginPath();
    this.context.arc(this.maskX,this.maskY,newRadius,0,Math.PI * 2,true);
    this.context.clip();

    this.context.drawImage(this.img,this.imgX,this.imgY);

    this.context.restore();
  };

  zoom(){
    if (this.mag == this.zooms.length - 1){
      this.mag = 0;
    } else {
      ++this.mag;
    }

    this.drawCanvas();
  };

};