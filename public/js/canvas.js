'use strict';

class Canvas {
  constructor(source, cssID, pxToNmRatio){
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
    this.imgAngle = 0;

    // imgScale constant approximates number of nanometers in a pixel on the user's monitor, assuming 96 DPI
    this.imgScale = (1 / 0.39370) * 10000000 / 96 * pxToNmRatio;

    //use this to give the onload function access to the setDimensions method
    this.img.parentThis = this;

    this.focusUp = true;
    this.intUp = false;

    this.maskX = 0;
    this.maskY = 0;
    this.maskR = 0;
    this.beamAstigmatism = 1;
    this.beamAngle = 0;
    this.combinedRadius = 0;

    this.haloX = 0;
    this.haloY = 0;

    //This is the selector for the spotsize beam selector slider on the search tab.  
    //TODO: Change this from a constant to something more intelligent
    this.beamslider = $('#beamrange');

    this.zooms = [2250, 3500, 4000, 4400, 6200, 8700, 9900, 13000, 15000, 26000, 34000, 38000, 43000, 63000, 86000, 125000, 175000, 250000, 350000, 400000];
    this.mag = this.zooms.length - 1;
    for(i = 0; i < this.zooms.length; i++){
      if(this.zooms[i] >= this.imgScale){
        this.mag = i;
        break;
      }
    }

    this.specimenHeight = 0;

    this.pivotPointWidth = 20;
    this.pivotPointHeight = 100;
    this.pivotPointHeightAlpha = 150;
    this.pivotPointCenterX;
    this.pivotPointCenterY;
    this.rotationOfPPX = -1;
    this.pivotPointAngle = 0;

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

    this.diffractionX = 259;
    this.diffractionY = 279;
    this.diffractionCameraLength = 265;
    this.diffractionRadius = 64;
    this.diffractionAstigmatism = 1;
    this.diffractionAngle = 0;
    this.specimenThickness = 300;
    this.c2 = 1; // variable Tony requested, affects diffraction dot size, no current way to manipulate it    

    this.alignmentMode = 'none';    

    this.rotateAlpha = 8;
    this.rotateBeta = 8;

    this.jump = 64;
    this.defocus = 0;
    this.diffractogramAstigmatism = 1;
    this.diffractogramAngle = 0;

    this.wobbleMode = false;
    this.wobbleMax = 0;
    this.wobbleRight = true;
    this.wobbleSpeed = 20;
    this.wobbleInterval;
    this.wobbleSavedX;
  };

  setDimensions(){
    this.imgW = this.img.width / this.imgScale * this.zooms[this.mag];
    this.imgH = this.img.height / this.imgScale * this.zooms[this.mag];
    this.maskX = this.img.width / 2;
    this.maskY = this.img.height / 2;
    this.maskR = this.img.width / 8;

    this.pivotPointCenterX = this.maskX;
    this.pivotPointCenterY = this.maskY;
  };

  drawCanvas(){
    if (this == setupbox){
      if(diffractionMode){
        this.hueRotateActive = false;
        $('#magnificationvalue').text(this.diffractionCameraLength + ' mm');
        let context = this.glowSelector[0].getContext('2d');
        context.clearRect(0,0,2000,1000);
        this.setFilterString();
        this.drawDiffraction();
        return;
      } else {
        this.hueRotateActive = true;
      }
    }
    $('#magnificationvalue').text(this.zooms[this.mag] + ' x');

    this.context.save();

    this.setFilterString();

    let rgbaString = 'rgba(' + this.colorR + ', ' + this.colorG + ', ' + this.colorB + ', ' + this.colorO + ')';

    this.context.fillStyle = rgbaString;
    this.context.clearRect(0,0,900,900);
    this.context.fillRect(0,0,this.img.width * 2,this.img.height * 2);

    let newRadius = this.maskR * this.zooms[this.mag] / this.imgScale + (11 * 4 - (this.beamslider.val() - 1) * 4);

    if (this.alignmentMode == 'pivotpointx' || this.alignmentMode == 'pivotpointy'){
      this.drawPPPath();
    }
    
    this.context.beginPath();

    // Ellipse approach - extends out in both directions
    let haloAngle = Math.atan2(this.haloY, this.haloX);
    let haloDistance = Math.sqrt(Math.pow(this.haloX, 2) + Math.pow(this.haloY,2));
    this.context.ellipse(this.maskX,this.maskY,Math.max(newRadius, haloDistance) * this.beamAstigmatism,
      Math.min(newRadius, Math.pow(newRadius, 2) / haloDistance) / this.beamAstigmatism, this.beamAngle + haloAngle,0,Math.PI * 2);

    // Quadratic curve approach - extends out in one direction, causes issue with shadowy lines appearing
    /*this.context.arc(this.maskX,this.maskY,newRadius,0,Math.PI * 2,true);
    if(Math.pow(newRadius, 2) < (Math.pow(this.haloX * 1.25, 2) + Math.pow(this.haloY * 1.25, 2))){
      // Conditional avoids unnecessary manipulations when halo is within beam, mitigating odd shadow lines
      let haloAngle = Math.atan2(this.haloY * -1, this.haloX);
      this.context.moveTo(this.maskX + newRadius * Math.sin(haloAngle), this.maskY + newRadius * Math.cos(haloAngle));
      this.context.quadraticCurveTo(this.maskX + this.haloX * 2.25, this.maskY + this.haloY * 2.25, this.maskX - newRadius * Math.sin(haloAngle), this.maskY - newRadius * Math.cos(haloAngle));
    }*/

    this.context.clip();
    
    this.context.save();
    this.context.translate(this.img.width / 2, this.img.height / 2)
    this.context.rotate(this.imgAngle);
    this.context.translate(-this.img.width / 2, -this.img.height / 2);

    //(image, sStartx, sStarty, sWidth, sHeight, dStartx, dStarty, dWidth, dHeight);
    this.context.drawImage(this.img,0,0,this.img.width,this.img.height,
      this.imgX,this.imgY,this.imgW,this.imgH);
    
    this.context.restore();
    
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
          case 960:
            this.magLimitFlash();
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
          case 265:
            this.magLimitFlash();
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
      } else {
        this.magLimitFlash();
      }
    } else if (delta < 0){
      if (this.mag >= 1){
        zoomFactor = this.zooms[this.mag - 1] / this.zooms[this.mag];
        --this.mag;
      } else {
        this.magLimitFlash();
      }
    }

    this.imgW *= zoomFactor;
    this.imgH *= zoomFactor;
    this.imgX = (this.imgX - this.img.width / 2) * zoomFactor + this.img.width / 2;
    this.imgY = (this.imgY - this.img.height / 2) * zoomFactor + this.img.height / 2;
    this.haloX *= zoomFactor;
    this.haloY *= zoomFactor;

    this.drawCanvas();
  };

  magLimitFlash(){
    $('#magnificationvalue').css('background','#ff8888');
    $('#magnificationvalue').animate({
      backgroundColor: '#fffbf0'
    }, 1000);
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
      let contrastVal = 100 + this.blurVal * 5;
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
    let effectiveRadius = this.calculateRadius();
    delta = delta - 1;

    if (effectiveRadius < 11 && effectiveRadius > 0 ){
      this.intUp = !this.intUp;
    } 

    if (this.intUp){
      delta = -delta;
    }
    
    let oldR = this.maskR;
    this.maskR = this.maskR + (effectiveRadius * delta);
    
    //this stops the mask radius from shrinking too small with a high delta value.  
    //the two is arbitrarily far away from our min mask size and the 2.9 is arbitrarily close.
    if (effectiveRadius < 11){
      this.maskR = 11 - beamslider.val() * 4;
    }
    this.haloX = this.haloX * this.maskR / oldR;
    this.haloY = this.haloY * this.maskR / oldR;

    this.drawCanvas();
    return (this.maskR - oldR);
  };

  moveImage(deltaX, deltaY){
    let flag;
    if (this.startTarget == 'buttonrollerl'){
      this.maskX += deltaX;
      this.maskY += deltaY;
      flag = 1;
    } else {
      this.imgX += deltaX;
      this.imgY += deltaY;
      flag = 0;
    }

    this.drawCanvas();
    return flag;
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
    let mainVectorY = Math.sin(angle) * this.pivotPointHeight;
    
    
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

  drawRotatePath(){

  }

  multiXDrag(deltaX){
    if (!isNaN(deltaX)){
      if (diffractionMode && this == setupbox){
        if(diffractionStigmation){
          this.diffractionAngle += deltaX;
        } else {
          //this.diffractionX += deltaX;
          this.specimenThickness += deltaX;
          if(this.specimenThickness < 0){
            this.specimenThickness = 0;
          }
        }
      } else switch (this.alignmentMode){
        case 'guntilt':
          let maskRadius = this.maskR * this.zooms[this.mag] / this.imgScale + (this.beamslider.val() - 1) * 4 - (this.calculateRadius() - 10) / 4;        
          this.haloX += deltaX;
          break;
        case 'gunshift':
        case 'beamshift':
          this.maskX += deltaX;
          break;
        case 'pivotpointx':
          this.pivotPointWidth += deltaX;
          break;
        case 'pivotpointy':
          this.pivotPointHeight += deltaX;
          break;
        case 'rotationcenter':
          this.rotateAlpha += deltaX;
          break;
        case 'comafreealignmentx':
        case 'comafreealignmenty':
          this.defocus += deltaX * 100;
          this.diffractogramAstigmatism *= Math.pow(1.001, deltaX);
          this.drawDiffractogramImages();
          break;
        case 'condensor':
          this.beamAngle += deltaX / 180;
          break;
        case 'objective':
          let imgRotation = deltaX / 180;
          this.imgAngle += imgRotation;
          /*imgRotation = Math.abs(imgRotation)
          console.log('rotate',imgRotation)
          this.imgX = (this.imgX - this.selector[0].width) * Math.cos(imgRotation) + (this.imgY - this.selector[0].height) * Math.sin(imgRotation) + this.selector[0].width * Math.cos(imgRotation) + this.selector[0].height * Math.sin(imgRotation);
          imgRotation = -imgRotation
          this.imgY = (this.imgY - this.selector[0].height) * Math.cos(imgRotation) - (this.imgX - this.selector[0].width ) * Math.sin(imgRotation) + this.selector[0].height * Math.cos(imgRotation) - this.selector[0].width * Math.sin(imgRotation);          
          */this.diffractogramAngle += deltaX / Math.PI;
          break;
      }
      this.drawCanvas();
    }
  }

  multiYDrag(deltaY){
    if (!isNaN(deltaY)){
      if (diffractionMode && this == setupbox){
        if(diffractionStigmation){
          this.diffractionAstigmatism *= Math.pow(1.0005, -deltaY); // the dots are small, so the change is less pronounced (relative to other stigmators)
        } else {
          this.diffractionY += deltaY;
        }
      } else switch (this.alignmentMode){
        case 'guntilt':
          let maskRadius = this.maskR * this.zooms[this.mag] / this.imgScale + (this.beamslider.val() - 1) * 4 - (this.calculateRadius() - 10) / 4;
          this.haloY += deltaY;
          break;
        case 'gunshift':
        case 'beamshift':        
          this.maskY += deltaY;
          break;
        case 'pivotpointx':
          this.pivotPointHeight += deltaY;
          break;
        case 'pivotpointy':
          this.pivotPointWidth += deltaY;
          break;
        case 'rotationcenter':
          this.rotateBeta += deltaY;
          break;
        case 'condensor':
          this.beamAstigmatism *= Math.pow(1.0005, -deltaY / (1 + this.maskR / 25));
          break;
        case 'objective':
          this.imgW *= Math.pow(1.0005, -deltaY);
          this.imgX = (this.imgX - this.img.width / 2) * Math.pow(1.0005, -deltaY) + this.img.width / 2;
          this.imgH *= Math.pow(1.0005, deltaY);
          this.imgY = (this.imgY - this.img.height / 2) * Math.pow(1.0005, deltaY) + this.img.height / 2;
          this.diffractogramAstigmatism *= Math.pow(1.0005, -deltaY)
          break;
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
    context.clearRect(0,0,2000,1000);
    context.filter = 'blur(3px)';

    /*context.beginPath();
    context.arc(this.maskX, this.maskY, haloR + 3, 0, Math.PI * 2);
    context.strokeStyle = 'white';
    context.lineWidth = this.calculateHaloLineWidth(haloR);
    context.stroke();*/

    context.beginPath();
    context.arc(this.maskX + this.haloX, this.maskY + this.haloY, haloR / 4, 0, Math.PI * 2);
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
  
  // Specifications from Tony 
  // - clicking active direct alignments should not stop the alignment
  // - beam should remain at new xy, not revert to old xy
  activateGunTilt(){
    this.alignmentMode = 'guntilt'
  }

  activateGunShift(){
    this.alignmentMode = 'gunshift'
  }

  activatePivotPointX(){
    this.alignmentMode = 'pivotpointx';
    this.intervalVal = setInterval(this.setPPOffset, 80, this);
  }

  activatePivotPointY(){
    this.alignmentMode = 'pivotpointy';
    this.intervalVal = setInterval(this.setPPOffset, 80, this);
  }

  setPPOffset(thisIn){
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

  activateBeamShift(){
    this.alignmentMode = 'beamshift'
  }

  activateRotationCenter(){
    this.alignmentMode = 'rotationcenter';
    this.intervalVal = setInterval(this.setRotateOffset, 10, this);
  }

  setRotateOffset(thisIn){
    let time = new Date();
    let speed = 2;
    thisIn.imgX += Math.sin(((2 * Math.PI) * speed) * time.getSeconds() + ((2 * Math.PI) * speed / 1000) * time.getMilliseconds()) * thisIn.rotateAlpha / 256;
    thisIn.imgY += Math.sin(((2 * Math.PI) * speed) * time.getSeconds() + ((2 * Math.PI) * speed / 1000) * time.getMilliseconds()) * thisIn.rotateBeta / 256;
    let oldR = thisIn.maskR;
    speed *= 2;
    thisIn.maskR *= Math.pow(1.0025, Math.cos(((2 * Math.PI) * speed) * time.getSeconds() + ((2 * Math.PI) * speed / 1000) * time.getMilliseconds()));
    thisIn.haloX = thisIn.haloX * thisIn.maskR / oldR;
    thisIn.haloY = thisIn.haloY * thisIn.maskR / oldR;
    thisIn.drawCanvas();
  }

  activateComaFreeAlignmentX(){
    this.alignmentMode = 'comafreealignmentx';
    this.intervalVal = setInterval(this.jumpLeftRight, 500, this);
    this.drawDiffractogramImages();
  }

  jumpLeftRight(thisIn){
    thisIn.maskX += thisIn.jump;
    thisIn.jump = -thisIn.jump;
    thisIn.drawCanvas();
  }

  activateComaFreeAlignmentY(){
    this.alignmentMode = 'comafreealignmenty';
    this.intervalVal = setInterval(this.jumpUpDown, 500, this);
    this.drawDiffractogramImages();
  }

  jumpUpDown(thisIn){
    thisIn.maskY += thisIn.jump;
    thisIn.jump = -thisIn.jump;
    thisIn.drawCanvas();
  }

  activateCondensor(){
    this.alignmentMode = 'condensor';
  }

  activateObjective(){
    this.alignmentMode = 'objective';
  }

  drawDiffractogramImages(){
    drawDiffractogram(document.getElementById('diffractogram1'), 0.5, lambdaCalculation(100000) * 10, this.defocus - 1000, this.diffractogramAstigmatism, 0, this.diffractogramAngle, 500000);
    drawDiffractogram(document.getElementById('diffractogram2'), 0.5, lambdaCalculation(100000) * 10, -this.defocus - 1000, 1 / this.diffractogramAstigmatism, 0, this.diffractogramAngle, 500000);
  }

  drawDiffraction(){
    clearCanvas(this.selector[0]);
    drawBackground(this.selector[0], this.diffractionX, this.diffractionY, 256, 256, 0);
    let radiusX = this.c2 * this.diffractionRadius * this.diffractionAstigmatism / (this.maskR * this.zooms[this.mag] / this.imgScale + (this.beamslider.val()) * 4);
    let radiusY = this.c2 * this.diffractionRadius / this.diffractionAstigmatism / (this.maskR * this.zooms[this.mag] / this.imgScale + (this.beamslider.val()) * 4);
    var settings = calculateR1R2Angle(silicon, 1, 1, 1, 100000, this.diffractionCameraLength, 4);
    for(i = 0; i < settings[0].length; i++) {
      drawLattice(this.selector[0], this.diffractionX, this.diffractionY, radiusX, radiusY, this.diffractionAngle, 0, 10, 'single', 1, settings[0][i], settings[1][i], settings[2][i], this.specimenThickness, 256);
    }
  }

  focusUpButton(){
    this.focus(10);
    ++this.specimenHeight;
  }

  focusDownButton(){
    this.focus(-10);
    --this.specimenHeight;
  }

  zeroFocus(){
    this.blurVal = 0;
    this.setFilterString();
    this.drawCanvas();
    this.specimenHeight = 0;
  }

  resetPosition(){
    this.maskX = this.img.width / 2
    this.maskY = this.img.height / 2;
    this.drawCanvas();
  }

  deactivateDirectAlignments(){
    this.alignmentMode = 'none';
    clearInterval(this.intervalVal);
    $('#diffractograms').hide();    
    this.drawCanvas();
  }

  //
  toggleWobble(){
    if (this.wobbleMode){
      clearInterval(this.wobbleInterval);
      this.imgX = this.wobbleSavedX;
      this.drawCanvas();
    } else {
      this.wobbleSavedX = this.imgX;
      this.wobbleMax = this.blurVal * 10;
      this.wobbleInterval = setInterval(this.wobbleTimeout.bind(this), 10);
    }

    this.wobbleMode = !this.wobbleMode;
  }

  wobbleTimeout(){
    //reset maximum slide distance
    this.wobbleMax = this.blurVal * 10;
    if (this.wobbleRight){
      //moving to the right
      if (this.imgX < this.wobbleMax){
        this.imgX += this.wobbleMax / this.wobbleSpeed;
      } else {
        this.wobbleRight = false;
      }
    } else {
      //moving to the left 
      if (this.imgX > -this.wobbleMax){
        this.imgX -= this.wobbleMax / this.wobbleSpeed;
      } else {
        this.wobbleRight = true;
      }

    }
  this.drawCanvas();
  }
};