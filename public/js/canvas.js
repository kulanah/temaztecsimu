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
    this.combinedRadius = 0;

    //This is the selector for the spotsize beam selector slider on the search tab.  
    //TODO: Change this from a constant to something more intelligent
    this.beamslider = $('#beamrange');

    this.mag = 2;
    this.zooms = [0.25, 0.5, 1.0, 2.0, 4.0];

    this.pivotActive = false;
    this.pivotPointWidth = 20;
    this.pivotPointHeight = 100;
    this.pivotPointHeightAlpha = 150;
    this.pivotPointCenterX;
    this.pivotPointCenterY;
    this.rotationOfPPX = -1;
    this.pivotPointAngle = 0;

    this.savedImageX;
    this.savedImageY;
    this.savedMaskX;
    this.savedMaskY;

    //filter string parts
    this.hueRotateActive = false;
    this.sepiaVal = 1;
    this.hueRotateVal = 40;
    this.blurVal = 0.0;
    this.saturateVal = 400;

    this.startTarget;

    this.glowSelector = $('#' + cssID + 'glow')
    this.haloBlur;
    this.radiusToDrawHaloUnder = 36;

    const minBeamRadius = 4;

    this.img.onload = function(){
      this.parentThis.setDimensions();
    };

    this.diffractionX = 256;
    this.diffractionY = 256;
    this.diffractionCameraLength = 265;
    this.diffractionRadiusX = 1;
    this.diffractionRadiusY = 1;
    this.diffractionIntUp = false;

    this.rotateActive = false;
    this.rotatePointWidth = 20;
    this.rotatePointHeight = 100;
    this.rotatePointHeightAlpha = 150;
    this.rotatePointCenterX;
    this.rotatePointCenterY;
    this.rotationOfRX = -1;
    this.rotatePointAngle = 0;
  };

  setDimensions(){
    this.imgW = this.img.width;
    this.imgH = this.img.height;
    this.maskX = this.img.width / 2
    this.maskY = this.img.height / 2;
    this.maskR = this.img.width / 8;

    this.pivotPointCenterX = this.maskX;
    this.pivotPointCenterY = this.maskY;
  };

  drawCanvas(){
    if (diffractionMode && this == setupbox){
      document.getElementById('setupcrosshair').style.visibility = 'hidden';      
      this.drawDiffraction();
      return;
    }
    document.getElementById('setupcrosshair').style.visibility = 'visible';

    this.context.save();

    this.setFilterString();

    let rgbaString = 'rgba(' + this.colorR + ', ' + this.colorG + ', ' + this.colorB + ', ' + this.colorO + ')';

    this.context.fillStyle = rgbaString;
    this.context.clearRect(0,0,900,900);
    this.context.fillRect(0,0,this.img.width * 2,this.img.height * 2);

    let newRadius = this.maskR * this.zooms[this.mag] + (this.beamslider.val() - 1) * 4;

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
    if (diffractionMode && this == setupbox){
      if (delta > 0) {
        switch(this.diffractionCameraLength){
          case 265:
            this.diffractionCameraLength = 460;
            break;
          case 460:
            this.diffractionCameraLength = 640;
            break;
          default:
            this.diffractionCameraLength = 960;
        }
      } else if (delta < 0) {
        switch(this.diffractionCameraLength){
          case 960:
            this.diffractionCameraLength = 640;
            break;
          case 640:
            this.diffractionCameraLength = 460;
            break;
          default:
            this.diffractionCameraLength = 265;
        }
      }
      this.drawCanvas();
      return;
    }
    let zoomFactor = 1;

    if (delta > 0){
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
    let oldBlur = this.blurVal;

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
    if (diffractionMode && this == setupbox){
      let shift = (delta - 1) * 100
      if (shift > 0){
        this.diffractionRadiusX++;
        this.diffractionRadiusY++;
      } else if (shift < 0) {
        this.diffractionRadiusX--;
        this.diffractionRadiusY--;
      }
      this.drawCanvas();
      return;
    }
    let effectiveRadius = this.calculateRadius();
    delta = delta - 1;

    if (effectiveRadius < 11 && effectiveRadius > 0 ){
      this.intUp = !this.intUp;
    } 

    if (this.intUp){
      delta = -delta;
    }
    
    this.maskR = this.maskR + (effectiveRadius * delta);
    
    //this stops the mask radius from shrinking too small with a high delta value.  
    //the two is arbitrarily far away from our min mask size and the 2.9 is arbitrarily close.
    if (effectiveRadius < 11){
      this.maskR = 11 - beamslider.val() * 4;
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

  mapXYfromAngle(angle){
    //for all vectors, notation is Acp {Vector A, coordinate system c, parameter p (usually x or y)}
  
    //sets up the main vector modified by pivotpointheight and width and modified by the stored angle

    //TODO: make this more functional, remove width and height
    //because there are two forms fo this (ppx and ppy) this wont work once we add the other form
    let mainVectorX =  Math.cos(angle) * this.pivotPointWidth;
    let mainVectorY = Math.cos(angle) * this.pivotPointHeight;
    
    
    //sets up vector secondaryVector, in the coordinate system b in which the alpha offset feature is computed - 
    //as a function of angle and settings[stg['PPX ALPHA']].val

    let secondaryVectorX = 0.3 * Math.sin(angle) * this.pivotPointHeightAlpha;
    let secondaryVectorY = 0;
    
    //finds phi, angle of main vector to the horizontal
    let phi = Math.atan(this.pivotPointWidth / this.pivotPointHeight);
    
    //rotates secondayVector by -phi -> Oa
    let Oax = Math.cos(-1 * phi) * secondaryVectorX;
    let Oay = Math.sin(-1 * phi) * secondaryVectorX;
    
    //adds vector Oa to vector Va
    mainVectorX += Oax;
    mainVectorY += Oay;
    
    //TODO: replace "replace this" with rotation value for PPY
    //rotates vector Va by -pi/4 -> Vs (this was det empirically by observing TEM)
    let resultantX = Math.cos(-1 * this.rotationOfPPX * Math.PI) * mainVectorX - Math.sin(-1 * -1 /*<-- REPLACE THIS */ * Math.PI) * mainVectorY;
    let resultantY = Math.sin(-1 * this.rotationOfPPX * Math.PI) * mainVectorX + Math.cos(-1 * -1 /*<-- REPLACE THIS*/ * Math.PI) * mainVectorY;
    // console.log('vsx: ' + Vsx);
    // console.log('vsy: ' + Vsy);

    return [-resultantX, -resultantY];
  }

  drawPPPath(){
    let savedFilter = this.context.filter;
    this.context.filter = 'blur(5px)';

    this.context.strokeStyle='white';
    this.context.beginPath();
    this.context.moveTo(0,0);
    for (let angle = 0; angle < 2*Math.PI; angle += Math.PI / 32){
      let mappedArray = this.mapXYfromAngle(angle);
      let mappedXCoord = mappedArray[0];
      let mappedYCoord = mappedArray[1];
      let finalX, finalY
      finalX = mappedXCoord + this.pivotPointCenterX;
      finalY = mappedYCoord + this.pivotPointCenterY;
      
      this.context.moveTo(finalX, finalY);
      
      //moves us along the angle of the circle by 5 degrees
      mappedArray = this.mapXYfromAngle(angle + Math.PI / 16);
      mappedXCoord = mappedArray[0];
      mappedYCoord = mappedArray[1];
      
      finalX = mappedXCoord + this.pivotPointCenterX;
      finalY = mappedYCoord + this.pivotPointCenterY;

      this.context.lineTo(finalX, finalY);
    }
    this.context.stroke();
    this.context.filter = savedFilter;
  }

  multiXDrag(deltaX){
    //TODO: add a check to see if we're in PP mode
    if (!isNaN(deltaX)){
      // console.log(deltaX);
      if (diffractionMode && this == setupbox){
        this.diffractionX += deltaX;
      } else {
        this.pivotPointWidth += deltaX;
      }
      this.drawCanvas();
    }
  }

  multiYDrag(deltaY){
    //TODO: remove thiss duplication of code
    //TODO: add a check to see if we're in PP mode
    if (!isNaN(deltaY)){
      // console.log(deltaY);
      if (diffractionMode && this == setupbox){
        this.diffractionY += deltaY;
      } else {
        this.pivotPointHeight += deltaY;
      }
      this.drawCanvas();
    }
  }

  handleBeamSlider(newVal){
    let iterateCount = newVal - this.oldSlider;
    let delta;
    if (iterateCount > 0){
      delta = -4;
    } else {
      delta = 4
    }
    iterateCount = Math.abs(iterateCount);
    for (let i = 0; i < iterateCount; ++i){
      changeIntensity(delta);
    }
  }

  calculateRadius(){
    return this.maskR + this.beamslider.val() * 4;
  }

  drawHalo(){
    let context = this.glowSelector[0].getContext('2d');
    let haloR;

    let maskRadius = this.calculateRadius() - 10;

    if (maskRadius < 1.5){
      haloR = 1;
    } else {
      haloR = maskRadius
    }

    context.save();
    context.clearRect(0,0,900,900);
    context.filter = 'blur(3px)';

    context.beginPath();
    context.arc(this.maskX, this.maskY, haloR + 3, 0, Math.PI * 2);
    context.strokeStyle = 'white';
    context.lineWidth = this.calculateHaloLineWidth(haloR);
    context.stroke();

    context.beginPath();
    context.arc(this.maskX, this.maskY, haloR / 4, 0, Math.PI * 2);
    context.strokeStyle = 'white';
    context.lineWidth = this.calculateHaloLineWidth(haloR);
    context.stroke();

    this.drawShade(context);

    context.restore();
  }

  //this function is used darken the screen at large beam sizes.
  drawShade(context){
    let totalRadius = this.calculateRadius();

    context.globalAlpha = 0 + (0.0037 * totalRadius);
    context.fillRect(0, 0, 900, 900);

    context.globalAlpha = 1;
  }

  calculateHaloLineWidth(maskRadius){
    let lineWidth = 6 - (maskRadius / 12);  

    if (lineWidth < 0){
      return 0.1;
    } else {
      return lineWidth;
    }
  }
  
  togglePivotPoint(){
    if (this.pivotActive){
      this.deactivatePivotPoint();
    } else {
      this.activatePivotPoint();
    }
  }

  activatePivotPoint(){
    this.savedMaskX = this.maskX;
    this.savedMaskY = this.maskY;
    this.savedImageX = this.imgX;
    this.savedImageY = this.imgY;
    this.pivotActive = true;
    this.intervalVal = setInterval(this.setPPOffset, 80, this);
  }

  deactivatePivotPoint(){
    this.pivotActive = false;
    clearInterval(this.intervalVal);
    this.imgX = this.savedImageX;
    this.imgY = this.savedImageY;
    this.maskX = this.savedMaskX;
    this.maskY = this.savedMaskY;

    this.drawCanvas();
  }

  setPPOffset(thisIn){
    if (thisIn.pivotActive)
      thisIn.pivotPointAngle += 52;
    let xy = thisIn.mapXYfromAngle(thisIn.pivotPointAngle);

    xy[0] += thisIn.pivotPointCenterX;
    xy[1] += thisIn.pivotPointCenterY;
    thisIn.maskX = xy[0];
    thisIn.maskY = xy[1];
    thisIn.imgX = xy[0] - thisIn.imgW / 2;
    thisIn.imgY = xy[1] - thisIn.imgH / 2;
    thisIn.drawCanvas();
    }

  drawDiffraction(){
    clearCanvas(this.selector[0]);
    drawBackground(this.selector[0], this.diffractionX, this.diffractionY, 256, 256, 0);
    var settings = calculateR1R2Angle(silicon, 1, 1, 1, 100000, this.diffractionCameraLength, 4);
    for(i = 0; i < settings[0].length; i++) {      
      drawLattice(this.selector[0], this.diffractionX, this.diffractionY, this.diffractionRadiusX, this.diffractionRadiusY, 0, 0, 10, 'single', 1, settings[0][i], settings[1][i], settings[2][i]);
    }
  }

  toggleRotationCenter(){
    if (this.rotateActive){
      this.deactivateRotationCenter();
    } else {
      this.activateRotationCenter();
    }
  }

  activateRotationCenter(){
    this.savedMaskX = this.maskX;
    this.savedMaskY = this.maskY;
    this.savedImageX = this.imgX;
    this.savedImageY = this.imgY;
    this.rotateActive = true;
    this.intervalVal = setInterval(this.setPPOffset, 80, this);
  }

  deactivateRotationCenter(){
    this.rotateActive = false;
    clearInterval(this.intervalVal);
    this.imgX = this.savedImageX;
    this.imgY = this.savedImageY;
    this.maskX = this.savedMaskX;
    this.maskY = this.savedMaskY;

    this.drawCanvas();
  }
};