// Basic example of rotation based on code from http://www.williammalone.com/briefs/how-to-rotate-html5-canvas-around-center/

function stigmate() {

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

  context.setTransform(1, 0, 1, 1, 0, 0);
  //2nd argument: how far you bring down the right side of the image
  //3rd argument: how far you bring to the right the bottom of the image

  context.drawImage(document.getElementById('image'),0,0,512,512,
    100, 0, 512, 512);

  /*context.fillStyle = "red";
  context.fillRect(canvasWidth/4, canvasWidth/4, canvasWidth/2, canvasHeight/4);
  context.fillStyle = "blue";
  context.fillRect(canvasWidth/4, canvasWidth/2, canvasWidth/2, canvasHeight/4);*/
}

window.onload = stigmate;