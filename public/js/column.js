var temLens = new Array();
var theta=0;

class lens {
	constructor(xCenter, x, y, f, kind, name){
		this.xCenter = xCenter;
		this.x = x;
		this.y = y;
		this.f = f;
		this.kind = kind;
		this.name = name;
	}
}

let columnDiv = $('#columndiv');
let beamDiag = $('#columncanvas');
let beamLabels = $('#labelcanvas');

beamLabels.css('position', 'absolute');
beamLabels.css('top', '0');	

//          xCenter x  y      f       kind     nam
temLens[00] = new lens(0,0,20,5,'source','Electron Gun');
temLens[01] = new lens(0,0,90,25,'lens','Gun lens');
temLens[02] = new lens(0,0,130,140,'lens','Gun Deflection 1');
temLens[03] = new lens(0,20,160,5,'lens','Gun Deflection 2');
temLens[04] = new lens(0,0,220,50,'lens','Condenser Lens 1');
temLens[05] = new lens(0,0,260,6.1,'aperture','C1 Aperture');
temLens[06] = new lens(0,0,320,20,'lens','Condenser Lens 2');
temLens[07] = new lens(0,0,350,25,'aperture','C2 Aperture');
temLens[08] = new lens(0,0,400,100, 'lens','Beam Deflection 1');
temLens[09] = new lens(0,0,440,15,'lens','Beam Deflection 2');
temLens[10] = new lens(0,0,480,24,'lens','Minicondenser Lens');
temLens[11] = new lens(0,0,520,70,'lens','Objective Condenser Lens');
temLens[12] = new lens(0,0,570,10,'sample','Specimen');
temLens[13] = new lens(0,0,600,40,'lens','Objective Imaging Lens');
temLens[14] = new lens(0,0,650,8,'aperture','Objective Aperture');
temLens[15] = new lens(0,0,700,100,'lens','Image Deflection 1');
temLens[16] = new lens(0,0,750,30,'lens','Image Deflection 2');
temLens[17] = new lens(0,0,800,58,'lens','Intermediate Lens');
temLens[18] = new lens(0,0,840,24,'aperture','Diffraction Aperture');
temLens[19] = new lens(0,0,880,10,'lens','Projection lens 1');
temLens[20] = new lens(0,0,990,200,'lens','Projection Lens 2');
temLens[21] = new lens(0,0,1160,400,'screen','Viewing Screen');


//creates the labels for the lenses
visualArray = new Array;
for(i = 0; i < temLens.length; i++){
	visualArray[i] = document.createElement('div');
	visualArray[i].name = temLens[i].name;
	visualArray[i].class = temLens[i].kind;
	visualArray[i].style.position = 'absolute';
	visualArray[i].style.border= 'white solid 2px';
	visualArray[i].style.padding = '0px 0px 0px 0px';
	visualArray[i].style.background = '#000';
	visualArray[i].style.color = '#fff';
	visualArray[i].style.width = visualArray[i].name.length * 7 + 9 + 'px';
	visualArray[i].style.height = 19 + 'px';
	visualArray[i].innerHTML = visualArray[i].name;
	visualArray[i].style.font = '14px Arial';
	visualArray[i].style.textAlign = 'center';
}

function drawColumn(){
	//default height = 1160

	//unsure if I want this here or not, this saves it if the user modifies
	//screen size but it is also inefficicent if they don't 
	let canvasHeight = $(window).height() * 0.9;
	let canvasWidth = $(window).height() * 0.4;
	$('#columncanvas')[0].height = canvasHeight;
	$('#columncanvas')[0].width = canvasWidth;
	$('#labelcanvas')[0].height = canvasHeight;
	$('#labelcanvas')[0].width = canvasWidth;

	let xScale = 1;
	let yScale = canvasHeight / 1160;

	beamLabels[0].getContext('2d').scale(xScale, yScale);
	beamDiag[0].getContext('2d').scale(xScale, yScale);

	var ctx = beamDiag[0].getContext('2d');
	ctx.clearRect(-10000,-10000,20000,20000);
	ctx.save();

	var numOfLenses = temLens.length;
	var offset = 120;

	//draw CenterLine
	ctx.beginPath();
	ctx.moveTo(offset,temLens[0].y);
	ctx.lineTo(offset,temLens[temLens.length-1].y);  
	ctx.strokeStyle = 'blue';
	ctx.stroke();
	
	var numOfRays = 10;
	var widthOfSource = 2;
	for(var ray=0; ray<numOfRays+1; ray++){
		temLens[0].x=  ray*widthOfSource/numOfRays - widthOfSource/2;
		ctx.beginPath();
		ctx.moveTo(temLens[0].x+offset,temLens[0].y);
		var blocked=0;
		for(var i=0;i<numOfLenses;i++){
			if(i>0){
				let prevType = temLens[i-1].kind;
				if(prevType =='lens' || prevType =='source' || prevType =='sample'){
					temLens[i].x = temLens[i-1].x-(temLens[i].y - temLens[i-1].y)*((temLens[i-1].x-temLens[i-1].xCenter)/temLens[i-1].f);
				}	
				if(prevType == 'aperture'){
					if(temLens[i-1].x < -temLens[i-1].f + temLens[i-1].xCenter || temLens[i-1].x>temLens[i-1].f +temLens[i-1].xCenter){
						blocked = 1;	
					}else{
						temLens[i].x = temLens[i-2].x-(temLens[i].y-temLens[i-2].y)*((temLens[i-2].x-temLens[i-2].xCenter)/temLens[i-2].f);
					}
				}	
			}
			if(blocked==0){
				
				ctx.lineTo(temLens[i].x+offset,temLens[i].y);  
				
			}
		}		
		//color in rgb as function of starting position
		var r = Math.floor(255*ray/numOfRays);
		var g = Math.floor(255*(numOfRays-ray)/numOfRays);		
		var b = 255;
		ctx.strokeStyle = 'rgb('+ r + ','+g+','+b+')'; 
		ctx.stroke();	
	}
	ctx = beamLabels[0].getContext('2d');
	ctx.clearRect(-10000,-10000,20000,20000);
	ctx.save();
	ctx = beamDiag[0].getContext('2d');
	for(var i=0;i<numOfLenses;i++){
		if (i == 0){
			totalHeight = temLens[i].y;
		} else {
			totalHeight += temLens[i].y - temLens[i - 1].y;
		}
		if(temLens[i].kind=='sample'){
			ctx.fillStyle = '#fff';
			ctx.fillRect(offset-60,temLens[i].y,180,6);
		}
		if(temLens[i].kind=='lens'){
			ctx.fillStyle = '#fff';
			ctx.fillRect(offset-114,temLens[i].y-12,14,24);
			ctx.fillRect(offset+100,temLens[i].y-12,14,24);
		}
		if(temLens[i].kind=='aperture'){
			ctx.beginPath();
			ctx.moveTo(offset+temLens[i].f+temLens[i].xCenter,temLens[i].y);
			ctx.lineTo(offset+114,temLens[i].y); 
			ctx.moveTo(offset-temLens[i].f+temLens[i].xCenter,temLens[i].y);
			ctx.lineTo(offset-114,temLens[i].y); 
			ctx.strokeStyle = '#fff';
			ctx.stroke();
		}
		ctx.restore();	
		ctx = beamLabels[0].getContext('2d');
		

		if(temLens[i].kind=='screen'){
			visualArray[i].style.left = offset + 120 + 'px';
			visualArray[i].style.top = temLens[i].y - 4 * yScale + 'px';
		
		}else{
      if(temLens[i].kind=='source'){
        visualArray[i].style.left = offset + 95 + 'px';
        visualArray[i].style.top = temLens[i].y - 4 + 'px';
      }else{
        visualArray[i].style.left = offset + 95 + 'px';
				visualArray[i].style.top = (temLens[i].y * yScale - 8 ) + 'px';
      }
    }
		columnDiv[0].append(visualArray[i]);
	}
	ctx.restore();	
}
