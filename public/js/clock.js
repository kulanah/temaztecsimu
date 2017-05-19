//clock.js -- sets the current time then runs a callback function every minute to update the clock time.

let startTime = function() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let ampm = 'AM';
  if (h > 12){
    h -= 12;
    ampm = 'PM';
  };
  m = checkTime(m);
  document.getElementById('clock').innerHTML =
  h + ":" + m + " " + ampm;
  let t = setTimeout(startTime, 5000);
};

let checkTime = function(i) {
  if (i < 10){
    i = "0" + i
  };  // add zero in front of numbers < 10
  return i;
};
