'use strict';

class Canvas {
  constructor(source, cssID){
    this.selector = $('#' + cssID);
    this.context = this.selector[0].getContext('2d');

    this.img = new Image;
    this.img.src = source;
    this.imgX = 0;
    this.imgY = 0;

    //use this to give the onload function access to the setDimensions method
    this.img.parentThis = this;

    this.focusUp = true;
    this.intUp = true;

    this.maskX = 0;
    this.maskY = 0;
    this.maskR = 0;

    this.mag = 2;
    this.zooms = [0.25, 0.5, 1.0, 2.0, 4.0];

    this.startTarget;

    this.img.onload = function(){
      this.parentThis.setDimensions();
    };
  };

  setDimensions(){
    this.imgW = this.img.width;
    this.imgH = this.img.height;
    this.maskX = this.img.width / 2
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

    //s = source d = destination
    //(image, sStartx, sStarty, sWidth, sHeight, dStartx, dStarty, dWidth, dHeight);
    this.context.drawImage(this.img,0,0,this.img.width,this.img.height,
                          this.imgX,this.imgY,this.imgW,this.imgH);

    this.context.restore();
  };

  zoom(){
    let zoomFactor
    //TODO: figure out why this bugs out on first two zoom values, probably because they're < 1 and shirnking the image out of the viewport
    if (this.mag == this.zooms.length - 1){
      zoomFactor = this.zooms[0] / this.zooms[this.mag];
      this.mag = 0;
    } else {
      zoomFactor = this.zooms[this.mag + 1] / this.zooms[this.mag];
      ++this.mag;
    }

    this.imgW *= zoomFactor;
    this.imgH *= zoomFactor;

    this.drawCanvas();
  };

  focus(delta){
    let oldBlur = this.stripChars(this.selector.css('filter'));
    if (oldBlur == ''){
      this.selector.css('filter', 'blur(0.0px)');
    }

    oldBlur = parseFloat(oldBlur);

    if (oldBlur < 0.25 && oldBlur > 0 ){
      focusUp = !focusUp;
    } else if(oldBlur > -0.25 && oldBlur < 0){
      focusUp = !focusUp;
    };

    if (focusUp){
      delta = -delta;
    }

    //stops the blur from getting too intense, this prevents slowdown
    if (oldBlur + delta <= 40){
      let newBlur = oldBlur + delta / 40;
      this.selector.css('filter', 'blur( ' + newBlur + 'px)');
    }

    this.drawCanvas();
  };

  stripChars(string){
    return string.replace(/[^0-9.]+/g, '');
  };

  changeIntensity(delta){
    delta = delta - 1;

    if (this.maskR < 5 && this.maskR > 0 ){
      this.intUp = !this.intUp;
    } else if(this.maskR > -5 && this.maskR < 0){
      this.intUp = !this.intUp;
    };

    if (this.intUp){
      delta = -delta;
    }

    this.maskR = this.maskR + (this.maskR * delta);

    this.drawCanvas();
  };

  moveImage(deltaX, deltaY){
    if (this.startTarget == 'buttonrollerl'){
      this.maskX += deltaX;
      this.maskY += deltaY;
    } else {
      this.imgX += deltaX;
      this.imgY += deltaY;
    }

    this.drawCanvas();
  };

  setTarget(target){
    this.startTarget = target;
  }
};