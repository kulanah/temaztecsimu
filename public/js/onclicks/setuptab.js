//setuptab.js -- sets onclicks for the setup tab

//variables to represent data in various boxes
let gunLense = 1;
let extractVal = 3500;
let extractFinal = 4500;
let fegVal = 63;
let kvVal = 200;
let colopen = true;
let turboon = false;


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
    } else {
      if (colopen){
        $('#leftcolumnvacuum').attr('src', './public/img/vacuummenuopenturboon.png');
      } else {
        $('#leftcolumnvacuum').attr('src', './public/img/vacuummenuclosedturboon.png');
      }
      turboon = true;
    }
  });
};

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