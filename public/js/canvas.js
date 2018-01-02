'use strict';

class Canvas {
  constructor(source, cssID, scale){
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
    this.defocus = 0;    

    this.imgScale = scale;

    // Backup method for calculating the image's scale based on the pixel to nanometer ratio
    // The constant approximates number of nanometers in a pixel on the user's monitor, assuming 96 DPI
    //this.imgScale = (1 / 0.39370) * 10000000 / 96 * pxToNmRatio;

    //use this to give the onload function access to the setDimensions method
    this.img.parentThis = this;

    this.intUp = false;

    this.maskX = 0;
    this.maskY = 0;
    this.maskR = 0;
    this.beamAstigmatismX = 0;
    this.beamAstigmatismY = 0;
    this.beamAngle = 0;

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

    this.focusStep = 3;

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

    this.diffractionX = 0;
    this.diffractionY = 0;
    this.diffractionZooms = [26.5, 35, 44, 62, 71, 89, 135, 175, 265, 430, 600, 860, 1650, 2650, 3500, 4100];
    this.diffractionMag = 8;
    this.diffractionCameraLength = 265;
    this.diffractionRadius = 1280;
    this.diffractionAstigmatismX = 0;
    this.diffractionAstigmatismY = 0;
    this.diffractionAngle = 0;
    this.specimenThickness = 50;
    this.c2 = 1; // variable Tony requested, affects diffraction dot size, no current way to manipulate it
    this.alphaTilt = 0;
    this.betaTilt = 0;

    this.rotateAlpha = 8;
    this.rotateBeta = 8;

    this.jump = 64;
    this.diffractogramAstigmatism = 1;
    this.diffractogramAngle = 0;

    this.wobbleMode = false;
    this.wobbleMax = 0;
    this.wobbleRight = true;
    this.wobbleSpeed = 20;
    this.wobbleInterval;
    this.wobbleSavedX;

    this.tuneAlignmentStep = 0;
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

  drawMainScreenValues(){
    $('#focusstepvalue').text(this.focusStep);
    let defocusString = Math.round(this.defocus * this.imgScale / this.zooms[this.mag] * 100) / 100 + ' nm' // converts from pixels to nanometers
    while(defocusString.length < 11){
      defocusString = ' ' + defocusString;
    }
    defocusString = 'Defoc.:' + defocusString;
    $('#defocusvalue').text(defocusString);
    $('#xvalue').text((((this.imgX - this.img.width / 2) * this.imgScale / this.zooms[this.mag] + this.img.width / 2) / 1000).toFixed(2)); // converts from pixels to micrometers
    $('#yvalue').text(' ' + (((this.imgY - this.img.height / 2) * this.imgScale / this.zooms[this.mag] + this.img.height / 2) / 1000).toFixed(2)); // leading space covers minus sign from original image
    $('#zvalue').text((this.specimenHeight * 200 / 57).toFixed(2)); // maps the current range of 528 to 585 onto a 200 micrometer scale
    $('#alphavalue').text(' ' + this.alphaTilt.toFixed(2));
    $('#betavalue').text(' ' + this.betaTilt.toFixed(2));
  };

  drawCanvas(){
    this.drawMainScreenValues();
    this.context.save();
    switch(this.tuneAlignmentStep){
      case 1:
        return;
    }

    if (this == setupbox){
      if(diffractionMode){
        this.hueRotateActive = false;
        if(this.diffractionCameraLength >= 1000){
          $('#magnificationvalue').text(this.diffractionCameraLength / 1000 + ' m');
        } else {
          $('#magnificationvalue').text(this.diffractionCameraLength + ' mm');
        }
        let context = this.glowSelector[0].getContext('2d');
        context.clearRect(0,0,this.glowSelector[0].width,this.glowSelector[0].height);
        this.setFilterString();

        this.drawDiffraction();

        this.context.restore();

        return;
      } else {
        this.hueRotateActive = true;
      }
    }
    $('#magnificationvalue').text(this.zooms[this.mag] + ' x');


    this.setFilterString();

    let rgbaString = 'rgba(' + this.colorR + ', ' + this.colorG + ', ' + this.colorB + ', ' + this.colorO + ')';

    this.context.fillStyle = rgbaString;
    this.context.clearRect(0,0,this.selector[0].width,this.selector[0].height);
    this.context.fillRect(0,0,this.img.width * 2,this.img.height * 2);

    let newRadius = this.maskR * this.zooms[this.mag] / this.imgScale + (11 * 4 - (this.beamslider.val() - 1) * 4);

    if (alignmentMode == 'pivotpointx' || alignmentMode == 'pivotpointy'){
      this.drawPPPath();
    }
    
    this.context.beginPath();

    // Ellipse approach - extends out in both directions
    this.beamAngle = Math.atan2(this.beamAstigmatismY, this.beamAstigmatismX);
    let haloAngle = Math.atan2(this.haloY * Math.cos(this.beamAngle) - this.haloX * Math.sin(this.beamAngle), this.haloX * Math.cos(this.beamAngle) + this.haloY * Math.sin(this.beamAngle));
    let haloDistance = Math.sqrt(Math.pow(this.haloX, 2) + Math.pow(this.haloY,2));
    let longRadius = Math.max(newRadius, haloDistance) * Math.max(Math.pow(1.0005, Math.abs(this.beamAstigmatismX) / (1 + this.maskR / 25)) / Math.pow(1.0005, Math.abs(this.beamAstigmatismY) / (1 + this.maskR / 25)), Math.pow(1.0005, Math.abs(this.beamAstigmatismY) / (1 + this.maskR / 25)) / Math.pow(1.0005, Math.abs(this.beamAstigmatismX) / (1 + this.maskR / 25)));
    let shortRadius = Math.min(newRadius, Math.pow(newRadius, 2) / haloDistance) * Math.min(Math.pow(1.0005, Math.abs(this.beamAstigmatismX) / (1 + this.maskR / 25)) / Math.pow(1.0005, Math.abs(this.beamAstigmatismY) / (1 + this.maskR / 25)), Math.pow(1.0005, Math.abs(this.beamAstigmatismY) / (1 + this.maskR / 25)) / Math.pow(1.0005, Math.abs(this.beamAstigmatismX) / (1 + this.maskR / 25)));
    console.log(this.beamAngle, haloAngle)
    if(haloDistance > 0){
      this.context.ellipse(this.maskX,this.maskY,longRadius,shortRadius,haloAngle,0,Math.PI * 2);
    } else {
      this.context.ellipse(this.maskX,this.maskY,longRadius,shortRadius,this.beamAngle,0,Math.PI * 2);
    }

    // Quadratic curve approach - extends out in one direction, causes issue with shadowy lines appearing
    /*this.context.arc(this.maskX,this.maskY,newRadius,0,Math.PI * 2,true);
    if(Math.pow(newRadius, 2) < (Math.pow(this.haloX * 1.25, 2) + Math.pow(this.haloY * 1.25, 2))){
      // Conditional avoids unnecessary manipulations when halo is within beam, mitigating odd shadow lines
      let haloAngle = Math.atan2(this.haloY * -1, this.haloX);
      this.context.moveTo(this.maskX + newRadius * Math.sin(haloAngle), this.maskY + newRadius * Math.cos(haloAngle));
      this.context.quadraticCurveTo(this.maskX + this.haloX * 2.25, this.maskY + this.haloY * 2.25, this.maskX - newRadius * Math.sin(haloAngle), this.maskY - newRadius * Math.cos(haloAngle));
    }*/

    this.context.clip();
    
    this.context.translate(this.img.width / 2, this.img.height / 2)
    this.context.rotate(this.imgAngle);
    this.context.translate(-this.img.width / 2, -this.img.height / 2);

    //(image, sStartx, sStarty, sWidth, sHeight, dStartx, dStarty, dWidth, dHeight);

    let betaTiltImpact;
    if (this.specimenHeight == 0){
      betaTiltImpact = this.betaTilt;
    } else {
      betaTiltImpact = this.betaTilt * this.specimenHeight;
    }
    this.context.globalAlpha = .5;
    this.context.drawImage(this.img,0,0,this.img.width,this.img.height,
      this.imgX + this.alphaTilt * this.specimenHeight - this.defocus * Math.cos(this.imgAngle) - this.specimenHeight, this.imgY + betaTiltImpact + this.defocus * Math.sin(this.imgAngle),this.imgW,this.imgH);
    this.context.drawImage(this.img,0,0,this.img.width,this.img.height,
      this.imgX + this.alphaTilt * this.specimenHeight + this.defocus * Math.cos(this.imgAngle) + this.specimenHeight, this.imgY + betaTiltImpact - this.defocus * Math.sin(this.imgAngle),this.imgW,this.imgH);
      
    this.drawHalo();

    this.context.restore();

  };

  zoom(delta){
    if (diffractionMode && this == setupbox){
      if (delta > 0) {
        if (this.diffractionMag < this.diffractionZooms.length - 1){
          this.diffractionMag++;
        } else {
          this.limitFlash('#magnificationvalue');
        }
      } else if (delta < 0) {
        if (this.diffractionMag > 0){
          this.diffractionMag--;
        } else {
          this.limitFlash('#magnificationvalue');
        }
      }
      this.diffractionCameraLength = this.diffractionZooms[this.diffractionMag];
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
        this.limitFlash('#magnificationvalue');
      }
    } else if (delta < 0){
      if (this.mag >= 1){
        zoomFactor = this.zooms[this.mag - 1] / this.zooms[this.mag];
        --this.mag;
      } else {
        this.limitFlash('#magnificationvalue');
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

  limitFlash(element){
    $(element).css('background','#ff8888');
    $(element).animate({
      backgroundColor: '#fffbf0'
    }, 1000);
  };

  focus(delta){
    this.defocus += delta * this.focusStep * .1;
    this.drawCanvas();
  };

  shiftFocusStep(delta){
    if(delta > 0){
      this.focusStep++;
    } else if (delta < 0) {
      this.focusStep--;
    }
    if(this.focusStep < 1){
      this.focusStep = 1;
      this.limitFlash('#focusstepvalue');
    } else if(this.focusStep > 9){
      this.focusStep = 9;
      this.limitFlash('#focusstepvalue');      
    }
    this.drawCanvas();
  }

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
      this.maskX += deltaX * beamStepSize;
      this.maskY += deltaY * beamStepSize;
      flag = 1;
    } else {
      this.imgX += (deltaX * Math.cos(this.imgAngle) + deltaY * Math.sin(this.imgAngle)) * stageStepSize;
      this.imgY += (deltaY * Math.cos(this.imgAngle) - deltaX * Math.sin(this.imgAngle)) * stageStepSize;
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
    let mainVectorX, mainVectorY
    let width, height;
    let phi = -1
    if (this.pivotPointWidth < 10 && this.pivotPointWidth > -10){
      mainVectorX = 0;
      width = 0;
    } else {
      mainVectorX =  Math.cos(angle) * this.pivotPointWidth;
      width = this.pivotPointWidth;
    }
    if (this.pivotPointHeight < 25 && this.pivotPointHeight > -25){
      mainVectorY = 0;
      height = 0;
    } else {
      mainVectorY = Math.sin(angle) * this.pivotPointHeight;
      height = this.pivotPointHeight;
    }

    if (height === 0 && width === 0){
      phi = 0;
    } else {
      //finds phi, angle of main vector to the horizontal
      phi = Math.atan2(height, width);
    }
    //sets up vector secondaryVector, in the coordinate system b in which the alpha offset feature is computed - 
    //as a function of angle and settings[stg['PPX ALPHA']].val
    let secondaryVectorX = 0.3 * Math.sin(angle) * this.pivotPointHeightAlpha;
    let secondaryVectorY = 0;
    


    let Oax, Oay;
    //rotates secondayVector by -phi and stores into Oa
    if (height === 0){
      Oay = 0;
    } else {
      Oay = Math.sin(-1 * phi) * secondaryVectorX;
    }
    if(width === 0){
      Oax = 0;
    } else {
      Oax = Math.cos(-1 * phi) * secondaryVectorX;
    }
    console.log(height);

    
    
    //adds vector Oa to mainVector
    mainVectorX += Oax;
    mainVectorY += Oay;
    
    //TODO: replace "replace this" with rotation value for PPY
    //rotates vector mainvector by -pi/4 -> Vs (this was det empirically by observing TEM)
    let resultantX = Math.cos(-1 * this.rotationOfPPX * Math.PI) * mainVectorX - Math.sin(-1 * -1 /*<-- REPLACE THIS */ * Math.PI) * mainVectorY;
    let resultantY = Math.sin(-1 * this.rotationOfPPX * Math.PI) * mainVectorX + Math.cos(-1 * -1 /*<-- REPLACE THIS*/ * Math.PI) * mainVectorY;

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
        if(stigmationMode == 'Diffraction'){
          this.diffractionAstigmatismX += deltaX;
        } else {
          this.diffractionX += deltaX;
        }
      } else if (stigmatorActive) {
        switch (stigmationMode) {
          case 'Condensor':
            this.beamAstigmatismX += deltaX;
            break;
          case 'Objective':
            this.imgAngle += deltaX / 180;
            this.diffractogramAngle += deltaX / Math.PI;
            break;
        }
      } else {
        switch (alignmentMode){
          case 'Gun Tilt':
            let maskRadius = this.maskR * this.zooms[this.mag] / this.imgScale + (this.beamslider.val() - 1) * 4 - (this.calculateRadius() - 10) / 4;        
            this.haloX += deltaX;
            break;
          case 'Gun Shift':
          case 'Beam Shift':
            this.maskX += deltaX;
            break;
          case 'pivotpointx':
            this.pivotPointWidth += deltaX / 3;
            break;
          case 'pivotpointy':
            this.pivotPointHeight += deltaX / 3;
            break;
          case 'Rotation Center':
            this.rotateAlpha += deltaX;
            break;
          case 'comafreealignmentx':
          case 'comafreealignmenty':
            this.imgW *= Math.pow(1.0005, deltaX);
            this.imgX = (this.imgX - this.img.width / 2) * Math.pow(1.0005, deltaX) + this.img.width / 2;
            this.imgH *= Math.pow(1.0005, -deltaX);
            this.imgY = (this.imgY - this.img.height / 2) * Math.pow(1.0005, -deltaX) + this.img.height / 2;
            this.diffractogramAstigmatism *= Math.pow(1.0005, deltaX)
            this.drawDiffractogramImages();
            break;
        }
      }
      this.drawCanvas();
    }
  }

  multiYDrag(deltaY){
    if (!isNaN(deltaY)){
      if (diffractionMode && this == setupbox){
        if(stigmationMode == 'Diffraction'){
          this.diffractionAstigmatismY += deltaY; // the dots are small, so the change is less pronounced (relative to other stigmators)
        } else {
          this.diffractionY += deltaY;
        }
      } else if (stigmatorActive){
        switch (stigmationMode){
          case 'Condensor':
            this.beamAstigmatismY += deltaY;
            break;
          case 'Objective':
            this.imgW *= Math.pow(1.0005, -deltaY);
            this.imgX = (this.imgX - this.img.width / 2) * Math.pow(1.0005, -deltaY) + this.img.width / 2;
            this.imgH *= Math.pow(1.0005, deltaY);
            this.imgY = (this.imgY - this.img.height / 2) * Math.pow(1.0005, deltaY) + this.img.height / 2;
            this.diffractogramAstigmatism *= Math.pow(1.0005, -deltaY)
            break;
          }
      } else {
        switch (alignmentMode){
          case 'Gun Tilt':
            let maskRadius = this.maskR * this.zooms[this.mag] / this.imgScale + (this.beamslider.val() - 1) * 4 - (this.calculateRadius() - 10) / 4;
            this.haloY += deltaY;
            break;
          case 'Gun Shift':
          case 'Beam Shift':        
            this.maskY += deltaY;
            break;
          case 'pivotpointx':
            this.pivotPointHeight += deltaY;
            break;
          case 'pivotpointy':
            this.pivotPointWidth += deltaY;
            break;
          case 'Rotation Center':
            this.rotateBeta += deltaY;
            break;
          case 'comafreealignmentx':
          case 'comafreealignmenty':
            this.imgW *= Math.pow(1.0005, -deltaY);
            this.imgX = (this.imgX - this.img.width / 2) * Math.pow(1.0005, -deltaY) + this.img.width / 2;
            this.imgH *= Math.pow(1.0005, deltaY);
            this.imgY = (this.imgY - this.img.height / 2) * Math.pow(1.0005, deltaY) + this.img.height / 2;
            this.diffractogramAstigmatism *= Math.pow(1.0005, -deltaY)
            this.drawDiffractogramImages();
            break;

        }
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
    context.clearRect(0,0,this.glowSelector[0].width,this.glowSelector[0].height);
    context.filter = 'blur(3px)';

    /*context.beginPath();
    context.arc(this.maskX, this.maskY, haloR + 3, 0, Math.PI * 2);
    context.strokeStyle = 'white';
    context.lineWidth = this.calculateHaloLineWidth(haloR);
    context.stroke();*/

    context.beginPath();
    context.arc(this.maskX + this.haloX * Math.cos(this.beamAngle) + this.haloY * Math.sin(this.beamAngle), this.maskY + this.haloY * Math.cos(this.beamAngle) - this.haloX * Math.sin(this.beamAngle), haloR / 4, 0, Math.PI * 2);
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
    context.fillRect(0, 0, this.selector[0].width, this.selector[0].height);

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
  activatePivotPointX(){
    alignmentMode = 'pivotpointx';
    this.intervalVal = setInterval(this.setPPOffset, 80, this);
    drawInfoPanelValues();
  }

  activatePivotPointY(){
    alignmentMode = 'pivotpointy';
    this.intervalVal = setInterval(this.setPPOffset, 80, this);
    drawInfoPanelValues();
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

  activateRotationCenter(){
    alignmentMode = 'Rotation Center';
    this.intervalVal = setInterval(this.setRotateOffset, 10, this);
    drawInfoPanelValues();
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
    alignmentMode = 'comafreealignmentx';
    this.intervalVal = setInterval(this.jumpLeftRight, 500, this);
    this.drawDiffractogramImages();
    drawInfoPanelValues();
  }

  jumpLeftRight(thisIn){
    thisIn.maskX += thisIn.jump;
    thisIn.jump = -thisIn.jump;
    thisIn.drawCanvas();
  }

  activateComaFreeAlignmentY(){
    alignmentMode = 'comafreealignmenty';
    this.intervalVal = setInterval(this.jumpUpDown, 500, this);
    this.drawDiffractogramImages();
    drawInfoPanelValues();
  }

  jumpUpDown(thisIn){
    thisIn.maskY += thisIn.jump;
    thisIn.jump = -thisIn.jump;
    thisIn.drawCanvas();
  }

  drawDiffractogramImages(){
    drawDiffractogram(document.getElementById('diffractogram1'), 0.5, lambdaCalculation(100000) * 10, this.defocus - 1000, this.diffractogramAstigmatism, 0, this.diffractogramAngle, 500000);
    drawDiffractogram(document.getElementById('diffractogram2'), 0.5, lambdaCalculation(100000) * 10, -this.defocus - 1000, 1 / this.diffractogramAstigmatism, 0, this.diffractogramAngle, 500000);
  }

  drawDiffraction(){
    clearCanvas(this.selector[0]);
    let beamRadius = this.maskR * this.zooms[this.mag] / this.imgScale + (11 * 4 - (this.beamslider.val() - 1) * 4);
    drawBackground(this.selector[0], this.selector[0].width / 2, this.selector[0].height / 2, this.selector[0].height / 2, this.selector[0].height / 2, 0, this.selector[0].height / 2 / beamRadius);
    let radiusX = this.c2 * this.diffractionRadius * Math.max(Math.pow(1.0005, Math.abs(this.diffractionAstigmatismX)) / Math.pow(1.0005, Math.abs(this.diffractionAstigmatismY)), Math.pow(1.0005, Math.abs(this.diffractionAstigmatismY)) / Math.pow(1.0005, Math.abs(this.diffractionAstigmatismX))) / beamRadius;
    let radiusY = this.c2 * this.diffractionRadius * Math.min(Math.pow(1.0005, Math.abs(this.diffractionAstigmatismX)) / Math.pow(1.0005, Math.abs(this.diffractionAstigmatismY)), Math.pow(1.0005, Math.abs(this.diffractionAstigmatismY)) / Math.pow(1.0005, Math.abs(this.diffractionAstigmatismX))) / beamRadius;
    this.context.beginPath();
    this.context.arc(this.selector[0].width / 2, this.selector[0].height / 2, this.selector[0].height / 2, 0, 2 * Math.PI);
    this.context.clip();
    if(onSpecimen){
      this.diffractionAngle = Math.atan2(this.diffractionAstigmatismY, this.diffractionAstigmatismX);
      var settings = calculateR1R2Angle(silicon, 1, 1, 1, 100000, this.diffractionCameraLength, 4);
      for(i = 1; i < 2; i++) {
        drawLattice(this.selector[0], this.selector[0].width / 2 + this.diffractionX * this.diffractionCameraLength / 300, 
          this.selector[0].height / 2 + this.diffractionY * this.diffractionCameraLength / 300, radiusX, radiusY, this.diffractionAngle, 
          0, 2 * beamRadius / this.selector[0].height, 'single', 3, settings[0][i], settings[1][i], settings[2][i], 
          this.specimenThickness, this.selector[0].height / 2, this.alphaTilt, this.betaTilt);
      }
    } else {
      drawBeam(this.selector[0], this.selector[0].width / 2 + this.diffractionX * this.diffractionCameraLength / 300, this.selector[0].height / 2 + this.diffractionY * this.diffractionCameraLength / 300, beamRadius, beamRadius, this.diffractionAngle, radiusX + radiusY);
    }
  }

  focusUpButton(){
    this.specimenHeight += stageStepSize;
    this.drawCanvas();
  }

  focusDownButton(){
    this.specimenHeight -= stageStepSize;
    this.drawCanvas();
  }

  zeroFocus(){
    this.defocus = 0;
    this.drawCanvas();
  }

  resetPosition(){
    this.maskX = this.img.width / 2
    this.maskY = this.img.height / 2;
    this.drawCanvas();
  }

  deactivateDirectAlignments(){
    alignmentMode = '          ';
    clearInterval(this.intervalVal);
    $('#diffractograms').hide();
    diffractionMode = false;
    drawInfoPanelValues();
    this.drawCanvas();
  }

  sampleTilt(x, y){
    this.betaTilt += x * stageStepSize / this.zooms[this.mag] * this.imgScale;
    this.alphaTilt += y * stageStepSize / this.zooms[this.mag] * this.imgScale;
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
      this.wobbleMax = Math.abs(this.defocus);
      this.wobbleInterval = setInterval(this.wobbleTimeout.bind(this), 10);
    }

    this.wobbleMode = !this.wobbleMode;
  }

  wobbleTimeout(){
    //reset maximum slide distance
    this.wobbleMax = Math.abs(this.defocus);
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