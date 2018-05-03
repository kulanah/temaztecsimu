//setuptab.js -- sets onclicks for the setup tab

//variables to represent data in various boxes
let gunLense = 1;
let extractVal = 3500;
let extractFinal = 4500;
let fegVal = 63;
let kvVal = 200;
let colopen = false;
let turboon = false;
let turboStart = new Audio('./public/audio/Turbo_On.wav');
let turboLoop = new Audio('./public/audio/TurboLoop.wav');
turboLoop.loop = true;
let turboStop = new Audio('./public/audio/Turbo_off.wav');
let firstTurbo = true;
let highTension = true;
let kVChanging = false;

let setupTab = function(){
  vacuumWindow();
  highTensionWindow();
  fegControlWindow();
};

let vacuumWindow = function(){
  $('#colvalves').on('click', function(event){
    if (colopen){
      colopen = false;
      $('#microscopebg').attr('src', './public/img/TEM_04blue.png');
      if (turboon){
        $('#leftcolumnvacuum').attr('src', './public/img/vacuummenuclosedturboon.png');
      } else {
        $('#leftcolumnvacuum').attr('src', './public/img/vacuummenuclosed.png');
      }
      $('#vacuumimg').attr('src', './public/img/vacuumclosed.png');
    } else {
      colopen = true;
      $('#microscopebg').attr('src', './public/img/TEM_02blue.png');
      if (turboon){
        $('#turbo').trigger('click');
      } else {
        $('#leftcolumnvacuum').attr('src', './public/img/vacuummenuopen.png');
      }
      $('#vacuumimg').attr('src', './public/img/vacuumopen.png');
    }
    updateCanvas();
    drawColumn();
    if(isVisible('fft')){
      drawFFT();
    }
  });

  $('#turbo').on('click', function(event){
    if (turboon){
      if (colopen){
        $('#leftcolumnvacuum').attr('src', './public/img/vacuummenuopen.png');
      } else {
        $('#leftcolumnvacuum').attr('src', './public/img/vacuummenuclosed.png');
      }
      turboon = false;
      turboLoop.pause();
      turboStart.pause();
      turboStop.currentTime = Math.min(turboStart.duration, turboStop.duration) - turboStart.currentTime;
      turboStop.play();
    } else {
      if (colopen){
        $('#leftcolumnvacuum').attr('src', './public/img/vacuummenuopenturboon.png');
      } else {
        $('#leftcolumnvacuum').attr('src', './public/img/vacuummenuclosedturboon.png');
      }
      turboon = true;
      turboLoop.pause();
      turboStop.pause();
      if(firstTurbo){
        firstTurbo = false;
      } else {
        turboStart.currentTime = Math.min(turboStart.duration, turboStop.duration) - turboStop.currentTime;
      }
      turboStart.play();
    }
  });
};

turboStart.onended = function(){
  turboLoop.play();
}

// Approach for avoiding gaps in audio loops found at https://stackoverflow.com/questions/7330023/gapless-looping-audio-html5 answer by shooting_sparks
turboStart.addEventListener('timeupdate', function(){
  var buffer = 5;
  if(this.currentTime > this.duration - buffer){
      this.pause();
      turboLoop.play()
  }}, false);

turboLoop.addEventListener('timeupdate', function(){
  var buffer = .44
  if(this.currentTime > this.duration - buffer){
      this.currentTime = 0
      this.play()
  }}, false);

let highTensionWindow = function(){
  let kvSlide = function(){
    if (!highTension){
      $('#leftcolumntension').attr('src', './public/img/hightension.png');
      $('#leftcolumnfegcontrol').attr('src', './public/img/fegcontrol.png');
      highTension = true;
      if(!kVChanging){
        kvIncrease();
      }
    } else {
      $('#leftcolumntension').attr('src', './public/img/hightensiondone.png');
      $('#leftcolumnfegcontrol').attr('src', './public/img/fegcontrolinactive.png');
      highTension = false;
      if(!kVChanging){
        kvDecrease();
      }
    }
    updateCanvas();
    kVChanging = true;
  };

  let kvIncrease = function(){
    if(!highTension){
      setTimeout(kvDecrease, 300);
    } else if (kvVal < 200){
      kvVal += 1;
      $('#kvval').text(kvVal + ' kV');
      setTimeout(kvIncrease, 300);
    } else {
      kVChanging = false;
    }
  };

  let kvDecrease = function(){
    if(highTension){
      setTimeout(kvIncrease, 300)
    } else if (kvVal > 0){
      kvVal -= 1;
      $('#kvval').text(kvVal + ' kV');
      setTimeout(kvDecrease, 300);
    } else {
      kVChanging = false;
    }
  };

  $('#hightension').on('click', function(event){
    kvSlide();
  });
};

let fegControlWindow = function(){
  $('#extractUp').on('click', function(){
    if (extractVal < 4500){
      extractVal += 100;
      fegVal += (3/5);
      $('#extractVal').text(extractVal + " V");
      updateCanvas();
    }
  });

  $('#extractDown').on('click', function(){
    if (extractVal > 3000){
      extractVal -= 100;
      fegVal -= (3/5);
      $('#extractVal').text(extractVal + " V");
      updateCanvas();
    }
  });

  $('#extractSubmit').on('click', function(){
    extractFinal = extractVal;
    $('#extractFinal').text(extractFinal + " V");
    $('#fegvalue').text(Math.floor(fegVal));
  });

  $('#gunLenseDown').on('click', function(){
    if (gunLense > 1){
      --gunLense;
      $('#gunLenseVal').text(gunLense);
      updateCanvas();
    }
    //min 1 max 7
  });

  $('#gunLenseUp').on('click', function(){
    if(gunLense < 7){
      ++gunLense;
      $('#gunLenseVal').text(gunLense);
      updateCanvas();
    }
  });

  $('#operate').on('click', function(event){
    
  });
}