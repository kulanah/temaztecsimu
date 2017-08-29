'use strict';

class Canvas {
  constructor(source, cssID){
    this.selector = $('#' + cssID);
    this.context = this.selector[0].getContext('2d');

    this.colorR = 0;
    this.colorG = 0;
    this.colorB = 0;
    this.colorO = 1;

    this.img = new Image;
    this.img.src = source;
    this.imgX = 0;
    this.imgY = 0;

    //use this to give the onload function access to the setDimensions method
    this.img.parentThis = this;

    this.focusUp = true;
    this.intUp = false;

    this.maskX = 0;
    this.maskY = 0;
    this.maskR = 0;

    this.mag = 2;
    this.zooms = [0.25, 0.5, 1.0, 2.0, 4.0];

    this.pivotActive = false;
    this.elipW = 200;
    this.elipH = 100;

    this.elipCX = 200;
    this.elipCY = 200;

    //filter string parts
    this.hueRotateActive = false;
    this.sepiaVal = 1;
    this.hueRotateVal = 40;
    this.blurVal = 0.0;
    this.saturateVal = 400;

    this.startTarget;

    this.glowSelector = $('#' + cssID + 'glow')
    this.haloRadius;
    this.haloBlur;
    this.haloWidth;

    this.img.onload = function(){
      this.parentThis.setDimensions();
      this.parentThis.pivotPointSetup();
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

    this.setFilterString();

    let rgbaString = 'rgba(' + this.colorR + ', ' + this.colorG + ', ' + this.colorB + ', ' + this.colorO + ')';

    this.context.fillStyle = rgbaString;
    this.context.clearRect(0,0,900,900);
    this.context.fillRect(0,0,this.img.width * 2,this.img.height * 2);

    let newRadius = this.maskR * this.zooms[this.mag];


    if (this.pivotActive){
      this.drawPPPath();
    }

    this.context.beginPath();
    this.context.arc(this.maskX,this.maskY,newRadius,0,Math.PI * 2,true);
    this.context.clip();

    //(image, sStartx, sStarty, sWidth, sHeight, dStartx, dStarty, dWidth, dHeight);
    this.context.drawImage(this.img,0,0,this.img.width,this.img.height,
                           this.imgX,this.imgY,this.imgW,this.imgH);

    
    this.drawHalo();
    this.context.restore();
  };

  zoom(delta){
    let zoomFactor = 1;

    if(delta > 0){
      // if (this.mag == this.zooms.length - 1){
      //   zoomFactor = this.zooms[0] / this.zooms[this.mag];
      //   this.mag = 0;
      // } else {
      if (this.mag < this.zooms.length - 1){
        console.log('zooming from ' + this.zooms[this.mag] + ' to ' + this.zooms[this.mag+1]);
        zoomFactor = this.zooms[this.mag + 1] / this.zooms[this.mag];
        ++this.mag;
      }
    } else if (delta < 0){
      if (this.mag >= 1){
        zoomFactor = this.zooms[this.mag - 1] / this.zooms[this.mag];
        --this.mag;
      }
    }
    //TODO: figure out why this bugs out on first two zoom values, probably because they're < 1 and shirnking the image out of the viewport

    this.imgW *= zoomFactor;
    this.imgH *= zoomFactor;

    this.drawCanvas();
  };

  focus(delta){
    if (this.blurVal < 0){
      this.blurVal = 0;
    } 
    // console.log(delta); 
    let oldBlur = this.blurVal;

    console.log(oldBlur);
    if (oldBlur < 0.10){
      this.focusUp = !this.focusUp;
    } 

    if (this.focusUp){
      delta = -delta;
    } 

    //stops the blur from getting too intense, this prevents slowdown
    if (oldBlur + delta <= 40){
      let newBlur = oldBlur + delta / 40;
      this.blurVal = newBlur;
      this.setFilterString();
      // this.selector.css('filter', 'blur( ' + newBlur + 'px)');
    }

    this.drawCanvas();
  };

  setFilterString(){
    let stringVal = ''
    if (this.hueRotateActive){
      let sepiaString = 'sepia(' + this.sepiaVal + ') ';
      let hueRotateString = 'hue-rotate(' + this.hueRotateVal + 'deg) ';
      let saturateString = 'saturate(' + this.saturateVal + '%) ';
      let blurString = 'blur(' + this.blurVal + 'px) ';
      stringVal = sepiaString + hueRotateString + saturateString + blurString;
    } else {
      stringVal = 'blur(' + this.blurVal + 'px) ';
    }

    this.selector.css('filter', stringVal);

  }

  hueRotate(){
    this.selector.css('filter', 'sepia(1) hue-rotate(40deg) saturate(400%)');
  };

  stripChars(string){
    return string.replace(/[^0-9.]+/g, '');
  };

  changeIntensity(delta){
    delta = delta - 1;

    if (this.maskR < 3 && this.maskR > 0 ){
      this.intUp = !this.intUp;
    } 

    if (this.intUp){
      delta = -delta;
    }

    this.maskR = this.maskR + (this.maskR * delta);

    //this stops the mask radius from shrinking too small with a high delta value.  
    //the two is arbitrarily far away from our min mask size and the 2.9 is arbitrarily close.
    if (this.maskR < 2){
      this.maskR = 2.9;
    }
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
  };

  setColor(r, g, b, o){
    this.colorR = r;
    this.colorG = g;
    this.colorB = b;
    this.colorO = o;
  };

  pivotPointSetup(){
    this.elipW = this.img.width / 4;
    this.elipH = this.img.height / 4;
    this.elipCX = this.imgW / 2;
    this.elipCY = this.imgH / 2;
  };


  drawPPPath(){
    this.context.beginPath();

    this.context.moveTo(this.elipCX, this.elipCY - this.elipH/2);
    this.context.bezierCurveTo(
      this.elipCX + this.elipW/2, this.elipCY - this.elipH/2,
      this.elipCX + this.elipW/2, this.elipCY + this.elipH/2,
      this.elipCX, this.elipCY + this.elipH/2);
    
    this.context.bezierCurveTo(
      this.elipCX - this.elipW/2, this.elipCY + this.elipH/2, 
      this.elipCX - this.elipW/2, this.elipCY - this.elipH/2,
      this.elipCX, this.elipCY - this.elipH/2);

    this.context.fillStyle = 'red';
    this.context.fill();
    this.context.closePath();
  }

  changePPWidth(delta){
    this.elipW += delta;
  }

  changePPHeight(delta){
    this.elipH += delta;
}

  drawHalo(context){
    context.beginPath();
    context.arc(this.maskX, this.maskY, this.maskR - 20, 0, Math.PI * 2)
    context.lineWidth = 2;
    context.shadowBlur = 10;
    // context.lineWidth = this.haloWidth;
    // context.shadowBlur = this.haloBlur;
    context.shadowColor = 'white';
    context.stroke();
    
  }
  /*

  create circle based on ppxy
  calculate radius
  move image and mask that radius away



  */
};