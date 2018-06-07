'use strict';

class Canvas {
  constructor(source, cssID, scale, wNM){
    this.selector = $('#' + cssID);
    this.context = this.selector[0].getContext('2d');

    this.img = new Image;

    if(source[0] != '.'){
      // Workaround to allow cross-origin access, found at https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror by Karuban
      this.img.crossOrigin = 'anonymous';
      this.img.src = source + '?'; // originally used a timestamp, but that appears to be unnecessary
    } else {
      this.img.src = source;
    }

    this.imgX = 0;
    this.imgY = 0;
    this.imgAngle = 0;
    this.defocus = 0;

    this.imgScale = scale;
    this.widthNM = wNM;

    // Backup method for calculating the image's scale based on the pixel to nanometer ratio
    // The constant approximates number of nanometers in a pixel on the user's monitor, assuming 96 DPI
    //this.imgScale = (1 / 0.39370) * 10000000 / 96 * pxToNmRatio;

    //use this to give the onload function access to the setDimensions method
    this.img.parentThis = this;

    this.intUp = false;

    this.maskX = 0;
    this.maskY = 0;
    this.intensity = 0;
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
    if(randomProperties){
      this.mag = Math.min(Math.max(this.mag + 2 - Math.floor(randomValues[7] * 5), 0), this.zooms.length - 1); // pick a valid mag within two steps
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
    this.brightnessVal = 100;
    this.brightnessOffsetX = 0;
    this.brightnessOffsetY = 0;

    this.startTarget;

    this.glowSelector = $('#' + cssID + 'glow')
    this.haloBlur;
    this.radiusToDrawHaloUnder = 36;

    const minBeamRadius = 4;

    this.img.onload = function(){
      this.parentThis.setDimensions();
      if(this.parentThis === setupbox){
        this.parentThis.drawCanvas();
      }
    };

    this.diffractionX = 0;
    this.diffractionY = 0;
    this.diffractionZooms = [26.5, 35, 44, 62, 71, 89, 135, 175, 265, 430, 600, 860, 1650, 2650, 3500, 4100];
    this.diffractionMag = 8;
    this.diffractionCameraLength = 265;
    this.diffractionRadius = 128;
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
    this.wobbleRight = true;
    this.wobbleSpeed = 20;
    this.wobbleInterval;
    this.wobbleSavedX;
  };

  setDimensions(){
    this.imgW = 512 / this.imgScale * this.zooms[this.mag];
    this.imgH = this.imgW * this.img.height / this.img.width;

    this.imgX = (this.selector[0].width - this.imgW) / 2;
    this.imgY = (this.selector[0].height - this.imgH) / 2;

    if(randomProperties){
      if(this === mainmicro){
        // keep the beam in the upper left quadrant so it will not appear off-screen on lower resolution monitors
        // necessary since mainmicro canvas has a fixed width and height
        this.maskX = this.selector[0].width / 4 + randomValues[0] * this.selector[0].width / 4;
        this.maskY = this.selector[0].height / 4 + randomValues[1] * this.selector[0].height / 4;
      } else {
        this.maskX = this.selector[0].width / 4 + randomValues[0] * this.selector[0].width / 2;
        this.maskY = this.selector[0].height / 4 + randomValues[1] * this.selector[0].height / 2;
        setTemBeamStart(this.maskX / this.selector[0].width);
        projectionLens1.f = 100 - 50 * this.mag / this.zooms.length;
      }
      this.maskR = 20 + randomValues[2] * 500;
      this.defocus = 10 - 20 * randomValues[3];
      this.beamAstigmatismX = 1000 - 2000 * randomValues[4];
      this.beamAstigmatismY = 1000 - 2000 * randomValues[5];
      let stretchDelta = 200 - 400 * randomValues[6];
      this.stretchImage(stretchDelta);
      this.pivotPointWidth = 20 - randomValues[10] * 40;
      this.pivotPointHeight = 100 - randomValues[11] * 200;
      this.rotateAlpha = 16 - randomValues[12] * 32;
      this.rotateBeta = 16 - randomValues[13] * 32;
    } else {
      this.maskX = this.selector[0].width / 2;
      this.maskY = this.selector[0].height / 2;
      this.maskR = 256;
    }
    this.intensity = this.maskR;

    this.pivotPointCenterX = this.maskX;
    this.pivotPointCenterY = this.maskY;

    openbox.maskR = setupbox.maskR * 4;
    openbox.haloX = setupbox.haloX * 4;
    openbox.haloY = setupbox.haloY * 4;
  };

  drawMainScreenValues(){
    if(this.zooms[this.mag] >= 100000){
      $('#magnificationvalue').text('  ' + this.zooms[this.mag] / 1000 + 'k x');
    } else {
      $('#magnificationvalue').text('  ' + this.zooms[this.mag] + ' x');
    }
    $('#focusstepvalue').text(this.focusStep);
    let defocusString = this.defocus.toFixed(2) + ' nm';
    while(defocusString.length < 11){
      defocusString = ' ' + defocusString;
    }
    defocusString = 'Defoc.:' + defocusString;
    $('#defocusvalue').text(defocusString);
    $('#xvalue').text((((this.imgX - this.selector[0].width / 2) * this.imgScale / this.zooms[this.mag] + this.selector[0].width / 2) / 1000 * this.widthNM / 512).toFixed(2)); // converts from pixels to micrometers
    $('#yvalue').text(' ' + (((this.imgY - this.selector[0].height / 2) * this.imgScale / this.zooms[this.mag] + this.selector[0].height / 2) / 1000 * this.widthNM / 512).toFixed(2)); // leading space covers minus sign from original image
    $('#zvalue').text((this.specimenHeight * 200 / 57).toFixed(2)); // maps the current range of 528 to 585 onto a 200 micrometer scale
    $('#alphavalue').text(' ' + this.alphaTilt.toFixed(2));
    $('#betavalue').text(' ' + this.betaTilt.toFixed(2));
  };

  drawCanvas(){
    this.drawMainScreenValues();
    this.context.save();
    this.context.fillStyle = 'black';
    this.context.fillRect(0,0,this.selector[0].width,this.selector[0].height);
    this.glowSelector[0].getContext('2d').clearRect(0,0,this.glowSelector[0].width,this.glowSelector[0].height);
    if(!colopen || !highTension){
      this.context.restore();
      return;
    }

    let alphaTiltImpact = Math.tan(this.alphaTilt * Math.PI / 180) * this.specimenHeight * this.zooms[this.mag] / this.imgScale * 3;
    alphaTiltImpact = Math.min(this.imgW / 2, Math.max(-this.imgW / 2, alphaTiltImpact)); // keep tilt impact limited to staying on specimen
    let betaTiltImpact;
    if (this.specimenHeight == 0){
      betaTiltImpact = Math.tan(this.betaTilt * Math.PI / 180) * this.zooms[this.mag] / this.imgScale * 3;
    } else {
      betaTiltImpact = Math.tan(this.betaTilt * Math.PI / 180) * this.specimenHeight * this.zooms[this.mag] / this.imgScale * 3;
    }
    betaTiltImpact = Math.min(this.imgH / 2, Math.max(-this.imgH / 2, betaTiltImpact));

    if (this == setupbox){
      if(screenLift){
        this.context.restore();
        return;
      }
      if (diffractionMode){
        imagectx.globalAlpha = 1;
        imagectx.fillStyle = '#FFF';
        imagectx.fillRect(0, 0, 3, 3);
        if(!blockSpecimen){
          if(this.defocus + this.specimenHeight * 1000 <= 0 && underFocusValue > 0){
            this.drawTwoImageDefocus(imagectx, this.imgX + alphaTiltImpact - this.maskX + 1, this.imgY + betaTiltImpact - this.maskY + 1, underFocusImage, underFocusValue);
          } else if(this.defocus + this.specimenHeight * 1000 >= 0 && overFocusValue > 0){
            this.drawTwoImageDefocus(imagectx, this.imgX + alphaTiltImpact - this.maskX + 1, this.imgY + betaTiltImpact - this.maskY + 1, overFocusImage, overFocusValue);
          } else {
            this.drawSplitImageDefocus(imagectx, this.imgX + alphaTiltImpact - this.maskX + 1, this.imgY + betaTiltImpact - this.maskY + 1);
          }
        }
        if(this.diffractionCameraLength >= 1000){
          $('#magnificationvalue').text('  ' + this.diffractionCameraLength / 1000 + ' m ');
        } else {
          $('#magnificationvalue').text('  ' + this.diffractionCameraLength + ' mm ');
        }
        let context = this.glowSelector[0].getContext('2d');
        context.clearRect(0,0,this.glowSelector[0].width,this.glowSelector[0].height);
        if(objectiveLevel < 5){
          this.context.beginPath();
          this.context.arc(this.selector[0].width / 2 + objectivex, this.selector[0].height / 2 + objectivey, objectiveSizes[objectiveLevel - 1] * this.diffractionCameraLength / 600, 0, Math.PI * 2);
          this.context.clip();
        }
        if(blockSpecimen || this.maskX < this.imgX + alphaTiltImpact || this.maskX > this.imgX + alphaTiltImpact + this.imgW || this.maskY < this.imgY + betaTiltImpact || this.maskY > this.imgY + betaTiltImpact + this.imgH){
          onSpecimen = false;
        } else {
          onSpecimen = true;
          if(this.maskX > this.imgX + alphaTiltImpact + this.imgW / 2){
            this.hueRotateActive = true;
            this.setFilterString();
            drawDiffractogram(this.selector[0], (1 / Math.max(Math.abs(this.intensity),1)) ** .1, lambdaCalculation(100000) * 10, this.defocus - 1000, this.diffractogramAstigmatism, 0, this.diffractogramAngle, 500000);
            this.context.restore();
            return;
          }
        }
        // getImageData will only function on a server - it will fail if run locally.
        // To do local testing, create a web server with Python.
        // See https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server for directions.
        if(window.location.protocol != 'file:'){
          // Get the average of the values of the pixel at the center of the beam plus the surrounding eight pixels
          var p = imagectx.getImageData(0, 0, 3, 3).data;
          let colorValue = 0;
          for (let i = 0; i < 9; i++){ 
            colorValue += p[i * 4] + p[i * 4 + 1] + p[i * 4 + 2];
          }
          colorValue /= 27;
          //console.log('colorValue', colorValue);
          this.specimenThickness = (255 - colorValue) / 255 * 100;
          // Backup method for checking if on specimen
          /*if(colorValue > 254){
            onSpecimen = false;
          } else {
            onSpecimen = true;
          }*/
        }
        this.hueRotateActive = false;
        this.setFilterString();
        this.drawDiffraction();
        this.context.restore();
        return;
      }
      this.hueRotateActive = true;
      this.context.clearRect(0,0,this.selector[0].width,this.selector[0].height);
    }

    this.setFilterString();

    let newRadius = this.maskR * this.zooms[this.mag] / this.imgScale / Math.sqrt(2) ** (this.beamslider.val() - 1) * c2Sizes[c2Level - 1] / 150;

    if (alignmentMode == 'Pivot Point X' || alignmentMode == 'Pivot Point Y'){
      this.drawPPPath();
    }
    
    this.context.beginPath();

    // Ellipse approach - extends out in both directions
    this.beamAngle = Math.atan2(this.beamAstigmatismY, this.beamAstigmatismX);
    let haloAngle = Math.atan2(this.haloY * Math.cos(this.beamAngle) - this.haloX * Math.sin(this.beamAngle), this.haloX * Math.cos(this.beamAngle) + this.haloY * Math.sin(this.beamAngle));
    let haloDistance = Math.sqrt(Math.pow(this.haloX, 2) + Math.pow(this.haloY,2));
    let longRadius = Math.max(newRadius, haloDistance) * Math.max(Math.pow(1.0005, Math.abs(this.beamAstigmatismX) / (1 + this.maskR / 25)) / Math.pow(1.0005, Math.abs(this.beamAstigmatismY) / (1 + this.maskR / 25)), Math.pow(1.0005, Math.abs(this.beamAstigmatismY) / (1 + this.maskR / 25)) / Math.pow(1.0005, Math.abs(this.beamAstigmatismX) / (1 + this.maskR / 25)));
    let shortRadius = Math.min(newRadius, Math.pow(newRadius, 2) / haloDistance) * Math.min(Math.pow(1.0005, Math.abs(this.beamAstigmatismX) / (1 + this.maskR / 25)) / Math.pow(1.0005, Math.abs(this.beamAstigmatismY) / (1 + this.maskR / 25)), Math.pow(1.0005, Math.abs(this.beamAstigmatismY) / (1 + this.maskR / 25)) / Math.pow(1.0005, Math.abs(this.beamAstigmatismX) / (1 + this.maskR / 25)));
    //console.log(this.beamAngle, haloAngle)
    if(haloDistance > 0){
      this.context.ellipse(this.maskX + c2x * this.intensity,this.maskY + c2y * this.intensity,longRadius,shortRadius,haloAngle,0,Math.PI * 2);
    } else {
      this.context.ellipse(this.maskX + c2x * this.intensity,this.maskY + c2y * this.intensity,longRadius,shortRadius,this.beamAngle,0,Math.PI * 2);
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

    if(saedInserted){
      this.context.beginPath();
      let saedRadius = 2000;
      saedRadius = saedSizes[saedLevel - 1];
      this.context.arc(this.selector[0].width / 2 + saedx, this.selector[0].height / 2 + saedy, Math.sqrt(saedRadius) * this.zooms[this.mag] / 15000, 0, Math.PI * 2);
      this.context.clip();
    }

    this.context.translate(this.selector[0].width / 2, this.selector[0].height / 2)
    this.context.rotate(this.imgAngle);
    this.context.translate(-this.selector[0].width / 2, -this.selector[0].height / 2);

    //(image, sStartx, sStarty, sWidth, sHeight, dStartx, dStarty, dWidth, dHeight);

    this.context.globalAlpha = 1;
    this.context.fillStyle = '#CCC';
    this.context.fillRect(0, 0, this.selector[0].width, this.selector[0].height);
    // Block the specimen during tune alignments
    if(!blockSpecimen){
      if(this === mainmicro){
        this.drawSplitImageDefocus(this.context, this.imgX + alphaTiltImpact, this.imgY + betaTiltImpact);
      } else {
        if(this.defocus + this.specimenHeight * 1000 <= 0 && underFocusValue > 0){
          this.drawTwoImageDefocus(this.context, this.imgX + alphaTiltImpact, this.imgY + betaTiltImpact, underFocusImage, underFocusValue);
        } else if(this.defocus + this.specimenHeight * 1000 >= 0 && overFocusValue > 0){
          this.drawTwoImageDefocus(this.context, this.imgX + alphaTiltImpact, this.imgY + betaTiltImpact, overFocusImage, overFocusValue);
        } else {
          this.drawSplitImageDefocus(this.context, this.imgX + alphaTiltImpact, this.imgY + betaTiltImpact);
        }
      }
    }

    this.drawHalo();

    this.context.restore();
  };

  drawTwoImageDefocus(ctx, x, y, defocusImage, defocusValue){
    let defocusRatio = Math.min(Math.abs(this.defocus + this.specimenHeight * 1000) / defocusValue, 1)
    ctx.globalAlpha = defocusRatio;
    ctx.drawImage(defocusImage,0,0,this.img.width,this.img.height,
      x, y, this.imgW, this.imgH);
    ctx.globalAlpha = 1 - defocusRatio;
    ctx.drawImage(this.img,0,0,this.img.width,this.img.height,
      x, y, this.imgW, this.imgH);
  }

  drawSplitImageDefocus(ctx, x, y){
    ctx.globalAlpha = .5;
    let defocusPx = Math.max(Math.min((this.defocus / 1000 + this.specimenHeight), 1), -1) * 10 * this.zooms[this.mag] / this.imgScale * 512 / this.widthNM; //convert from nanometers to pixels
    ctx.drawImage(this.img,0,0,this.img.width,this.img.height,
      x - defocusPx * Math.cos(this.imgAngle), y + defocusPx * Math.sin(this.imgAngle),this.imgW,this.imgH);
    ctx.drawImage(this.img,0,0,this.img.width,this.img.height,
      x + defocusPx * Math.cos(this.imgAngle), y - defocusPx * Math.sin(this.imgAngle),this.imgW,this.imgH); 
  }

  zoom(delta){
    if (diffractionMode && this != mainmicro){
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
        //console.log('zooming from ' + this.zooms[this.mag] + ' to ' + this.zooms[this.mag+1]);
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
    this.imgX = (this.imgX - this.selector[0].width / 2) * zoomFactor + this.selector[0].width / 2;
    this.wobbleSavedX = (this.wobbleSavedX - this.selector[0].width / 2) * zoomFactor + this.selector[0].width / 2;
    this.imgY = (this.imgY - this.selector[0].height / 2) * zoomFactor + this.selector[0].height / 2;
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
    let oldDefocus = this.defocus;
    this.defocus += delta * 4 ** (this.focusStep - 1) * .47;
    if(Math.sign(oldDefocus) !== Math.sign(this.defocus) && oldDefocus !== 0){
      // Snap to zero when changing between positive and negative
      this.defocus = 0;
    }
    if(this.defocus < -9999.99){
      this.defocus = -9999.99;
      this.limitFlash('#defocusvalue');
    } else if(this.defocus > 10000){
      this.defocus = 10000;
      this.limitFlash('#defocusvalue');
    }
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
      let brightnessString = 'brightness(' + this.brightnessVal + '%) ';
      let contrastString = 'contrast(' + contrastVal + '%) '
      if(diffractionMode){
        brightnessString = 'brightness(100%) '
        contrastString = 'contrast(100%) '
      }
      stringVal = sepiaString + hueRotateString + saturateString + blurString + brightnessString + contrastString;
    } else {
      stringVal = 'blur(' + this.blurVal + 'px) ';
    }

    this.selector.css('filter', stringVal);

  }

  hueRotate(){
    this.selector.css('filter', 'sepia(1) hue-rotate(40deg) saturate(400%)');
  };

  changeIntensity(delta){
    this.intensity += delta;
    let oldR = this.maskR;
    let minR = .2 * 32;
    // .2 = minimum beam radius in nm
    // 32 = current difference in scale between spot size 1 and spot size 11
    this.maskR = Math.max(Math.abs(this.intensity), minR);
    this.haloX = this.haloX * this.maskR / oldR;
    this.haloY = this.haloY * this.maskR / oldR;
    return (this.maskR - oldR);
    /*let effectiveRadius = this.calculateRadius();
    delta = delta / -100;

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
    return (this.maskR - oldR);*/
  };

  moveImage(deltaX, deltaY){
    let flag;
    if (this.startTarget == 'buttonrollerl'){
      this.maskX += deltaX * beamStepSize;
      this.pivotPointCenterX += deltaX * beamStepSize;
      this.maskY += deltaY * beamStepSize;
      this.pivotPointCenterY += deltaY * beamStepSize;
      flag = 1;
    } else {
      this.imgX += (deltaX * Math.cos(this.imgAngle) + deltaY * Math.sin(this.imgAngle)) * stageStepSize;
      this.wobbleSavedX += (deltaX * Math.cos(this.imgAngle) + deltaY * Math.sin(this.imgAngle)) * stageStepSize;
      this.imgY += (deltaY * Math.cos(this.imgAngle) - deltaX * Math.sin(this.imgAngle)) * stageStepSize;
      flag = 0;
    }

    this.drawCanvas();
    return flag;
  };

  setTarget(target){
    this.startTarget = target;
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

  multiXDrag(deltaX){
    if (!isNaN(deltaX)){
      if (diffractionMode && this == setupbox){
        if(stigmationMode == 'Diffraction'){
          this.diffractionAstigmatismX += deltaX / 10;
        } else {
          this.diffractionX += deltaX;
        }
      } else if (stigmatorActive) {
        switch (stigmationMode) {
          case 'Condensor':
            this.beamAstigmatismX += deltaX;
            break;
          case 'Objective':
            this.imgAngle += deltaX / 180 / 30;
            this.diffractogramAngle += deltaX / Math.PI / 30;
            break;
        }
      } else {
        switch (alignmentMode){
          case 'Gun Tilt':
            //let maskRadius = this.maskR * this.zooms[this.mag] / this.imgScale + (this.beamslider.val() - 1) * 4 - (this.calculateRadius() - 10) / 4;        
            this.haloX += deltaX;
            break;
          case 'Gun Shift':
          case 'Beam Shift':
            this.maskX += deltaX;
            this.pivotPointCenterX += deltaX;
            break;
          case 'Pivot Point X':
            this.pivotPointWidth += deltaX / 3;
            break;
          case 'Pivot Point Y':
            this.pivotPointHeight += deltaX / 3;
            break;
          case 'Rotation Center':
            this.rotateAlpha += deltaX;
            break;
          case 'Coma-free Alignment X':
          case 'Coma-free Alignment Y':
            this.stretchImage(-deltaX);
            this.drawDiffractogramImages();
            break;
          case 'Screen Intensity':
            this.brightnessOffsetX += deltaX * .1;
            this.brightnessVal = 100 - Math.abs(this.brightnessOffsetX) - Math.abs(this.brightnessOffsetY);
            this.maskX += deltaX * .1;
            this.pivotPointCenterX += deltaX * .1;
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
          this.diffractionAstigmatismY += deltaY / 10; // the dots are small, so the change is less pronounced (relative to other stigmators)
        } else {
          this.diffractionY += deltaY;
        }
      } else if (stigmatorActive){
        switch (stigmationMode){
          case 'Condensor':
            this.beamAstigmatismY += deltaY;
            break;
          case 'Objective':
            this.stretchImage(deltaY / 30);
            break;
          }
      } else {
        switch (alignmentMode){
          case 'Gun Tilt':
            //let maskRadius = this.maskR * this.zooms[this.mag] / this.imgScale + (this.beamslider.val() - 1) * 4 - (this.calculateRadius() - 10) / 4;
            this.haloY += deltaY;
            break;
          case 'Gun Shift':
          case 'Beam Shift':        
            this.maskY += deltaY;
            this.pivotPointCenterY += deltaY;
            break;
          case 'Pivot Point X':
            this.pivotPointHeight += deltaY;
            break;
          case 'Pivot Point Y':
            this.pivotPointWidth += deltaY;
            break;
          case 'Rotation Center':
            this.rotateBeta += deltaY;
            break;
          case 'Coma-free Alignment X':
          case 'Coma-free Alignment Y':
            this.stretchImage(deltaY);
            this.drawDiffractogramImages();
            break;
          case 'Screen Intensity':
            this.brightnessOffsetY += deltaY * .1;
            this.brightnessVal = 100 - Math.abs(this.brightnessOffsetX) - Math.abs(this.brightnessOffsetY);
            this.maskY += deltaY * .1;
            this.pivotPointCenterY += deltaY * .1;
            break;
        }
      }
      this.drawCanvas();
    }
  }

  stretchImage(deltaY){
    this.imgW *= Math.pow(1.0005, -deltaY);
    this.imgX = (this.imgX - this.selector[0].width / 2) * Math.pow(1.0005, -deltaY) + this.selector[0].width / 2;
    this.wobbleSavedX = (this.wobbleSavedX - this.selector[0].width / 2) * Math.pow(1.0005, -deltaY) + this.selector[0].width / 2;
    this.imgH *= Math.pow(1.0005, deltaY);
    this.imgY = (this.imgY - this.selector[0].height / 2) * Math.pow(1.0005, deltaY) + this.selector[0].height / 2;
    this.diffractogramAstigmatism *= Math.pow(1.0005, -deltaY)
  }

  calculateRadius(){
    return this.maskR / Math.sqrt(2) ** (this.beamslider.val() - 1);
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
    context.filter = 'blur(3px)';

    /*context.beginPath();
    context.arc(this.maskX, this.maskY, haloR + 3, 0, Math.PI * 2);
    context.strokeStyle = 'white';
    context.lineWidth = this.calculateHaloLineWidth(haloR);
    context.stroke();*/

    if(saedInserted){
      context.beginPath();
      let saedRadius = 2000;
      saedRadius = saedSizes[saedLevel - 1];
      context.arc(this.selector[0].width / 2 + saedx, this.selector[0].height / 2 + saedy, Math.sqrt(saedRadius) * this.zooms[this.mag] / 15000, 0, Math.PI * 2);
      context.clip();
    }

    context.beginPath();
    context.arc(this.maskX + c2x * this.intensity + this.haloX * Math.cos(this.beamAngle) + this.haloY * Math.sin(this.beamAngle), this.maskY + c2y * this.intensity + this.haloY * Math.cos(this.beamAngle) - this.haloX * Math.sin(this.beamAngle), haloR / 4, 0, Math.PI * 2);
    context.strokeStyle = 'rgba(255,255,255,' + Math.min(1, 10 / haloR) + ')';
    context.lineWidth = this.calculateHaloLineWidth(haloR);
    context.stroke();

    this.drawShade(context);

    context.restore();
  }

  //this function is used darken the screen at large beam sizes.
  drawShade(context){
    let totalRadius = this.maskR;
    if(this == openbox){
      // Accomodate for the greater beam spread in camera view
      totalRadius /= 4;
    }
    context.globalAlpha = (1 - (1 - totalRadius * this.zooms[this.mag] / 100000000) / 2 ** ((this.beamslider.val() - 1) / 10 / Math.sqrt(c2Sizes[c2Level - 1] / 150))) * 4500 / extractVal * 1.35 ** (gunLense - 2);
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
    alignmentMode = 'Pivot Point X';
    this.intervalVal = setInterval(this.setPPOffset, 80, this);
    drawInfoPanelValues();
    blockSpecimen = true;
    this.drawCanvas();
  }

  activatePivotPointY(){
    alignmentMode = 'Pivot Point Y';
    this.intervalVal = setInterval(this.setPPOffset, 80, this);
    drawInfoPanelValues();
    blockSpecimen = true;
    this.drawCanvas();
  }

  setPPOffset(thisIn){
    thisIn.pivotPointAngle += 52;
    let xy = thisIn.mapXYfromAngle(thisIn.pivotPointAngle);

    xy[0] += thisIn.pivotPointCenterX;
    xy[1] += thisIn.pivotPointCenterY;
    thisIn.maskX = xy[0];
    thisIn.maskY = xy[1];
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
    thisIn.wobbleSavedX += Math.sin(((2 * Math.PI) * speed) * time.getSeconds() + ((2 * Math.PI) * speed / 1000) * time.getMilliseconds()) * thisIn.rotateAlpha / 256;
    thisIn.imgY += Math.sin(((2 * Math.PI) * speed) * time.getSeconds() + ((2 * Math.PI) * speed / 1000) * time.getMilliseconds()) * thisIn.rotateBeta / 256;
    let oldR = thisIn.maskR;
    speed *= 2;
    thisIn.maskR *= Math.pow(1.0025, Math.cos(((2 * Math.PI) * speed) * time.getSeconds() + ((2 * Math.PI) * speed / 1000) * time.getMilliseconds()));
    thisIn.haloX = thisIn.haloX * thisIn.maskR / oldR;
    thisIn.haloY = thisIn.haloY * thisIn.maskR / oldR;
    thisIn.drawCanvas();
  }

  activateComaFreeAlignmentX(){
    alignmentMode = 'Coma-free Alignment X';
    this.intervalVal = setInterval(this.jumpLeftRight, 500, this);
    this.drawDiffractogramImages();
    drawInfoPanelValues();
  }

  jumpLeftRight(thisIn){
    thisIn.maskX += thisIn.jump;
    thisIn.pivotPointCenterX += thisIn.jump;
    thisIn.jump = -thisIn.jump;
    thisIn.drawCanvas();
  }

  activateComaFreeAlignmentY(){
    alignmentMode = 'Coma-free Alignment Y';
    this.intervalVal = setInterval(this.jumpUpDown, 500, this);
    this.drawDiffractogramImages();
    drawInfoPanelValues();
  }

  jumpUpDown(thisIn){
    thisIn.maskY += thisIn.jump;
    thisIn.pivotPointCenterY += thisIn.jump;
    thisIn.jump = -thisIn.jump;
    thisIn.drawCanvas();
  }

  drawDiffractogramImages(){
    if(this == openbox){
      // Not necessary to have both setupbox and openbox draw diffractograms, so returning avoids unnecessary slowdown
      return;
    }
    drawDiffractogram(document.getElementById('diffractogram1'), 0.5, lambdaCalculation(100000) * 10, this.defocus - 1000, this.diffractogramAstigmatism, 0, this.diffractogramAngle, 500000);
    drawDiffractogram(document.getElementById('diffractogram2'), 0.5, lambdaCalculation(100000) * 10, -this.defocus - 1000, 1 / this.diffractogramAstigmatism, 0, this.diffractogramAngle, 500000);
  }

  drawDiffraction(){
    clearCanvas(this.selector[0]);
    let beamRadius = this.maskR * (Math.sqrt(2) ** (this.beamslider.val() - 1));
    drawBackground(this.selector[0], this.selector[0].width / 2, this.selector[0].height / 2, this.selector[0].height / 2, this.selector[0].height / 2, 0, this.selector[0].height / 2 / beamRadius);
    let saedImpact = 1;
    if(saedInserted){
      saedImpact = Math.sqrt(saedSizes[saedLevel - 1] / 1000);
    }
    let radiusX = Math.sqrt(c2Sizes[c2Level - 1] / 150) * saedImpact * this.diffractionRadius * Math.max(Math.pow(1.0005, Math.abs(this.diffractionAstigmatismX)) / Math.pow(1.0005, Math.abs(this.diffractionAstigmatismY)), Math.pow(1.0005, Math.abs(this.diffractionAstigmatismY)) / Math.pow(1.0005, Math.abs(this.diffractionAstigmatismX))) / beamRadius;
    let radiusY = Math.sqrt(c2Sizes[c2Level - 1] / 150) * saedImpact * this.diffractionRadius * Math.min(Math.pow(1.0005, Math.abs(this.diffractionAstigmatismX)) / Math.pow(1.0005, Math.abs(this.diffractionAstigmatismY)), Math.pow(1.0005, Math.abs(this.diffractionAstigmatismY)) / Math.pow(1.0005, Math.abs(this.diffractionAstigmatismX))) / beamRadius;
    this.context.beginPath();
    this.context.arc(this.selector[0].width / 2, this.selector[0].height / 2, this.selector[0].height / 2, 0, 2 * Math.PI);
    this.context.clip();
    this.diffractionAngle = Math.atan2(this.diffractionAstigmatismY, this.diffractionAstigmatismX);
    if(onSpecimen){
      var settings = calculateR1R2Angle(micrographMaterial, 1, 1, 1, 100000, this.diffractionCameraLength, 10);
      for(i = 1; i < 2; i++) {
        drawLattice(this.selector[0], this.selector[0].width / 2 + this.diffractionX * this.diffractionCameraLength / 300, 
          this.selector[0].height / 2 + this.diffractionY * this.diffractionCameraLength / 300, radiusX, radiusY, this.diffractionAngle, 
          0, 128 * this.maskR / (Math.sqrt(2) ** (this.beamslider.val() - 1)) * Math.sqrt(c2Sizes[c2Level - 1] / 150) / this.selector[0].height, 'single', 3, settings[0][i], settings[1][i], settings[2][i], 
          this.specimenThickness, this.selector[0].height / 2, this.alphaTilt, this.betaTilt, this.diffractionCameraLength);
      }
    } else {
      drawBeam(this.selector[0], this.selector[0].width / 2 + this.diffractionX * this.diffractionCameraLength / 300, this.selector[0].height / 2 + this.diffractionY * this.diffractionCameraLength / 300, radiusX * 10, radiusY * 10, this.diffractionAngle, radiusX + radiusY);
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
    this.maskX = this.selector[0].width / 2;
    this.maskY = this.selector[0].height / 2;
    this.pivotPointCenterX = this.selector[0].width / 2;
    this.pivotPointCenterY = this.selector[0].height / 2;
    this.drawCanvas();
  }

  deactivateDirectAlignments(){
    clearInterval(this.intervalVal);
    $('#diffractograms').hide();
    $('#tunehelppopup').hide();
    blockSpecimen = false;
    diffractionMode = false;
    if(alignmentMode == 'Diffraction'){
      alignmentMode = 'None';
    }
    availableAlignments = [];
    drawInfoPanelValues();
    $('#objvalue').text('');
    this.drawCanvas();
  }

  sampleTilt(x, y){
    this.betaTilt += x * stageStepSize * .1;
    if(this.betaTilt > 20){
      this.betaTilt = 20;
      this.limitFlash('#betavalue');
    } else if(this.betaTilt < -20){
      this.betaTilt = -20;
      this.limitFlash('#betavalue');
    }
    this.alphaTilt += y * stageStepSize * .1;
    if(this.alphaTilt > 30){
      this.alphaTilt = 30;
      this.limitFlash('#alphavalue');
    } else if(this.alphaTilt < -30){
      this.alphaTilt = -30;
      this.limitFlash('#alphavalue');
    }
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
      let defocusPx = Math.max(Math.min(this.defocus / 1000, 1), -1) * 10 * this.zooms[this.mag] / this.imgScale * 512 / this.widthNM; //convert from nanometers to pixels
      this.wobbleInterval = setInterval(this.wobbleTimeout.bind(this), 10);
    }

    this.wobbleMode = !this.wobbleMode;
  }

  wobbleTimeout(){
    //reset maximum slide distance
    let defocusPx = Math.max(Math.min(this.defocus / 1000, 1), -1) * 10 * this.zooms[this.mag] / this.imgScale * 512 / this.widthNM; //convert from nanometers to pixels
    if (this.wobbleRight){
      //moving to the right
      if (this.imgX < Math.abs(defocusPx) + this.wobbleSavedX){
        this.imgX += Math.abs(defocusPx) / this.wobbleSpeed;
      } else {
        this.wobbleRight = false;
      }
    } else {
      //moving to the left 
      if (this.imgX > this.wobbleSavedX - Math.abs(defocusPx)){
        this.imgX -= Math.abs(defocusPx) / this.wobbleSpeed;
      } else {
        this.wobbleRight = true;
      }

    }
  this.drawCanvas();
  }

  factoryAlign(){
    this.mag = Math.floor(this.zooms.length / 2);

    this.imgW = 512 / this.imgScale * this.zooms[this.mag];
    this.imgH = this.imgW * this.img.height / this.img.width;

    this.imgX = (this.selector[0].width - this.imgW) / 2;
    this.imgY = (this.selector[0].height - this.imgH) / 2;

    this.maskX = this.selector[0].width / 2;
    this.maskY = this.selector[0].height / 2;
    this.maskR = 256;
    this.intensity = this.maskR;
    temLens[22].xCenter = 0;
    drawColumn();

    this.pivotPointCenterX = this.maskX;
    this.pivotPointCenterY = this.maskY;

    this.imgAngle = 0;
    this.defocus = 10;

    this.beamAstigmatismX = 0;
    this.beamAstigmatismY = 0;
    this.beamAngle = 0;

    this.haloX = 0;
    this.haloY = 0;

    this.brightnessVal = 100;
    this.brightnessOffsetX = 0;
    this.brightnessOffsetY = 0;

    this.diffractionX = 0;
    this.diffractionY = 0;
    this.diffractionMag = 8;
    this.diffractionCameraLength = 265;
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

    this.specimenHeight = 0;

    this.pivotPointWidth = 20;
    this.pivotPointHeight = 100;

    openbox.maskR = setupbox.maskR * 4;
  }

  supervisorAlign(){
    this.mag = this.zooms.length - 1;
    for(i = 0; i < this.zooms.length; i++){
      if(this.zooms[i] >= this.imgScale){
        this.mag = i;
        break;
      }
    }

    this.imgW = 512 / this.imgScale * this.zooms[this.mag];
    this.imgH = this.imgW * this.img.height / this.img.width;

    this.imgX = (this.selector[0].width - this.imgW) / 2;
    this.imgY = (this.selector[0].height - this.imgH) / 2;

    this.maskX = this.selector[0].width / 2;
    this.maskY = this.selector[0].height / 2;
    this.maskR = 256;
    this.intensity = this.maskR;
    temLens[22].xCenter = 0;
    drawColumn();

    this.pivotPointCenterX = this.maskX;
    this.pivotPointCenterY = this.maskY;

    this.imgAngle = 0;
    this.defocus = 0;

    this.beamAstigmatismX = 0;
    this.beamAstigmatismY = 0;
    this.beamAngle = 0;

    this.haloX = 0;
    this.haloY = 0;

    this.brightnessVal = 100;
    this.brightnessOffsetX = 0;
    this.brightnessOffsetY = 0;

    this.diffractionX = 0;
    this.diffractionY = 0;
    this.diffractionMag = 8;
    this.diffractionCameraLength = 265;
    this.diffractionAstigmatismX = 0;
    this.diffractionAstigmatismY = 0;
    this.diffractionAngle = 0;
    this.specimenThickness = 50;
    this.c2 = 1; // variable Tony requested, affects diffraction dot size, no current way to manipulate it
    this.alphaTilt = 0;
    this.betaTilt = 0;

    this.rotateAlpha = 0;
    this.rotateBeta = 0;

    this.jump = 64;
    this.diffractogramAstigmatism = 1;
    this.diffractogramAngle = 0;

    this.specimenHeight = 0;

    this.pivotPointWidth = 0;
    this.pivotPointHeight = 0;

    openbox.maskR = setupbox.maskR * 4;
  }
};