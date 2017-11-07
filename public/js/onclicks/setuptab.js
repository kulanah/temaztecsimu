//setuptab.js -- sets onclicks for the setup tab

//variables to represent data in various boxes
let gunLense = 1;
let extractVal = 3500;
let extractFinal = 4500;
let fegVal = 63;
let kvVal = 200;
let colopen = true;
let turboon = false;
let turboStart = new Audio('./public/audio/Turbo_On.wav');
let turboLoop = new Audio('./public/audio/TurboLoop.wav');
turboLoop.loop = true;
let turboStop = new Audio('./public/audio/Turbo_off.wav');


let setupTab = function(){
  vacuumWindow();
  highTensionWindow();
  fegControlWindow();
};

let vacuumWindow = function(){
  $('#colvalves').on('click', function(event){
    if (colopen){
      if (turboon){
        $('#leftcolumnvacuum').attr('src', './public/img/vacuummenuclosedturboon.png');
        $('#vacuumimg').attr('src', './public/img/vacuumclosed.png');
      } else {
        $('#leftcolumnvacuum').attr('src', './public/img/vacuummenuclosed.png');
        $('#vacuumimg').attr('src', './public/img/vacuumclosed.png');
      }
      colopen = false;
    } else {
      if (turboon){
        $('#leftcolumnvacuum').attr('src', './public/img/vacuummenuopenturboon.png');
        $('#vacuumimg').attr('src', './public/img/vacuumopen.png');
      } else {
        $('#leftcolumnvacuum').attr('src', './public/img/vacuummenuopen.png');
        $('#vacuumimg').attr('src', './public/img/vacuumopen.png');
      }
      colopen = true;
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
      turboStop.currentTime = turboStop.duration * (1 - turboStart.currentTime / turboStart.duration);
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
      turboStart.currentTime = turboStart.duration * (1 - turboStop.currentTime / turboStop.duration);
      turboStart.play();
    }
  });
};

turboStart.onended = function(){
  turboLoop.play();
}

// Approach for avoiding gaps in audio loops found at https://stackoverflow.com/questions/7330023/gapless-looping-audio-html5
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
    if (kvVal == 0){
      kvIncrease();
    } else if (kvVal == 200){
      kvDecrease();
    }
  };

  let kvIncrease = function(){
    if (kvVal < 200){
      kvVal += 1;
      $('#kvval').text(kvVal + ' kV');
      setTimeout(kvIncrease, 300);
    } else {
      $('#leftcolumntension').attr('src', './public/img/hightension.png');
    }
  };

  let kvDecrease = function(){
    if (kvVal > 0){
      kvVal -= 1;
      $('#kvval').text(kvVal + ' kV');
      setTimeout(kvDecrease, 300);
    } else {
      $('#leftcolumntension').attr('src', './public/img/hightensiondone.png');
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
    }
  });

  $('#extractDown').on('click', function(){
    if (extractVal > 3000){
      extractVal -= 100;
      fegVal -= (3/5);
      $('#extractVal').text(extractVal + " V");
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
    }
    //min 1 max 7
    $('#gunLenseVal').text(gunLense);
  });

  $('#gunLenseUp').on('click', function(){
    if(gunLense < 7){
      ++gunLense;
      $('#gunLenseVal').text(gunLense);
    }
  });

  $('#operate').on('click', function(event){
    
  });
}