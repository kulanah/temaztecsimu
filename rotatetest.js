function rotate() {

    var canvas = document.getElementById('rotatearea')
    var context = document.getElementById('rotatearea').getContext('2d');
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
  // Clear the canvas
  context.clearRect(0, 0, canvasWidth, canvasHeight);
	
  // Move registration point to the center of the canvas
  context.translate(canvasWidth/2, canvasWidth/2);
	
  // Rotate 1 degree
  context.rotate(Math.PI / 180);
    
  // Move registration point back to the top left corner of canvas
  context.translate(-canvasWidth/2, -canvasWidth/2);
	
  context.fillStyle = "red";
  context.fillRect(canvasWidth/4, canvasWidth/4, canvasWidth/2, canvasHeight/4);
  context.fillStyle = "blue";
  context.fillRect(canvasWidth/4, canvasWidth/2, canvasWidth/2, canvasHeight/4);
}

setInterval(rotate, 100);