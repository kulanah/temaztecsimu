let temLens = new Array();
let theta=0;
let lensFocus = 0;
let zoomed = false;

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



//          xCenter x  y      f       kind     nam
temLens[00] = new lens(0,0,-10,5,'source','Electron Gun');
temLens[01] = new lens(0,0,90,25,'lens','Gun lens');
temLens[02] = new lens(0,0,130,90,'lens','Gun Deflection 1');
temLens[03] = new lens(0,20,160,20,'lens','Gun Deflection 2');
temLens[04] = new lens(0,0,220,40,'lens','Condenser Lens 1');
temLens[05] = new lens(0,0,260,6.1,'aperture','C1 Aperture');
temLens[06] = new lens(0,0,320,50,'lens','Condenser Lens 2');
temLens[07] = new lens(0,0,350,25,'aperture','C2 Aperture');
temLens[08] = new lens(0,0,370,25, 'label', 'Condenser Label');
temLens[09] = new lens(0,0,400,55, 'lens','Beam Deflection 1');
temLens[10] = new lens(0,0,440,9,'lens','Beam Deflection 2');
temLens[11] = new lens(0,0,480,24,'lens','Minicondenser Lens');
temLens[12] = new lens(0,0,520,70,'lens','Objective UpperPolepiece');
temLens[13] = new lens(0,0,570,-10,'sample','Specimen');
temLens[14] = new lens(0,0,600,40,'lens','Objective LowerPolepiece');
temLens[15] = new lens(0,0,675,16,'label','Condensor Stigmator');
temLens[16] = new lens(0,0,650,16,'aperture','Objective Aperture');
temLens[17] = new lens(0,0,700,100,'lens','Image Deflection 1');
temLens[18] = new lens(0,0,750,30,'lens','Image Deflection 2');
temLens[19] = new lens(0,0,800,24,'aperture','SAED Aperture');
temLens[20] = new lens(0,0,840,58,'lens','Intermediate Lens');
temLens[21] = new lens(0,0,880,80,'lens','Projection lens 1');
temLens[22] = new lens(0,0,990,2,'lens','Projection Lens 2');
temLens[23] = new lens(0,0,1090,5,'screen','Viewing Screen');


//creates the labels for the lenses
zoomedOutLabels = new Array;
for(i = 0; i < temLens.length; i++){
	zoomedOutLabels[i] = document.createElement('div');
	zoomedOutLabels[i].name = temLens[i].name;
	zoomedOutLabels[i].number = i;
	zoomedOutLabels[i].classList.add(temLens[i].kind);
	zoomedOutLabels[i].classList.add('columnZoomButton');
	zoomedOutLabels[i].style.position = 'absolute';
	zoomedOutLabels[i].style.border= 'white solid 2px';
	zoomedOutLabels[i].style.padding = '0px 0px 0px 0px';
	zoomedOutLabels[i].style.background = '#000';
	zoomedOutLabels[i].style.color = '#fff';
	zoomedOutLabels[i].style.width = zoomedOutLabels[i].name.length * 5 + 7 + 'px';
	zoomedOutLabels[i].style.height = 11 + 'px';
	zoomedOutLabels[i].innerHTML = zoomedOutLabels[i].name;
	zoomedOutLabels[i].style.font = '10px Arial';
	zoomedOutLabels[i].style.textAlign = 'center';
}

zoomedInLabels= new Array;
for(i = 0; i < temLens.length; i++){
	zoomedInLabels[i] = document.createElement('div');
	zoomedInLabels[i].name = temLens[i].name;
	zoomedInLabels[i].class = temLens[i].kind;
	zoomedInLabels[i].style.position = 'absolute';
	zoomedInLabels[i].style.border= 'white solid 2px';
	zoomedInLabels[i].style.padding = '0px 0px 0px 0px';
	zoomedInLabels[i].style.background = '#000';
	zoomedInLabels[i].style.color = '#fff';
	zoomedInLabels[i].style.width = zoomedOutLabels[i].name.length * 7 + 9 + 'px';
	zoomedInLabels[i].style.height = 19 + 'px';
	zoomedInLabels[i].innerHTML = zoomedOutLabels[i].name;
	zoomedInLabels[i].style.font = '14px Arial';
	zoomedInLabels[i].style.textAlign = 'center';
}

function drawColumn(){
	if (zoomed){
		drawColumnParam(5.4, zoomedOffsetStatic, true, 0.4);
	}
	
	drawColumnParam();

}

function drawColumnParam(heightMult = 0.9, yOffset = 0, zoomVer = false, widthMult = 0.3){
	let columnDiv;
	let beamDiag;
	let beamLabels;

	if (!zoomVer){
		columnDiv = $('#columndiv');
		beamDiag = $('#columncanvas');
		beamLabels = $('#labelcanvas');
	} else {
		columnDiv = $('#columndivzoom');
		beamDiag = $('#columncanvaszoom');
		beamLabels = $('#labelcanvaszoom');
	}

	beamLabels.css('position', 'absolute');
	beamLabels.css('top', yOffset);	
	beamDiag.css('position', 'absolute');
	beamDiag.css('top', yOffset);

	//unsure if I want this here or not, this saves it if the user modifies
	//screen size but it is also inefficicent if they don't 
	let canvasHeight = $(window).height() * heightMult;
	let canvasWidth = $(window).height() * widthMult;
	beamDiag[0].height = canvasHeight;
	beamDiag[0].width = canvasWidth;
	beamLabels[0].height = canvasHeight;
	beamLabels[0].width = canvasWidth;

	let xScale = 1;
	let yScale = canvasHeight / 1160;

	beamLabels[0].getContext('2d').scale(xScale, yScale);
	beamDiag[0].getContext('2d').scale(xScale, yScale);

	var ctx = beamDiag[0].getContext('2d');
	ctx.clearRect(-10000,-10000,20000,20000);
	ctx.save();

	var numOfLenses = temLens.length;
	var offset = canvasWidth / 2;

	//draw CenterLine
	ctx.beginPath();
	ctx.moveTo(offset,temLens[0].y + yOffset);
	ctx.lineTo(offset,temLens[temLens.length-1].y);  
	ctx.strokeStyle = 'blue';
	ctx.stroke();
	
	var numOfRays = 10;
	var widthOfSource = 2;
	ctx.fillStyle = "#9b9b9b";
	for (i = 0; i < numOfLenses; ++i){
		if (temLens[i].kind == 'lens' && !temLens[i].name.includes("Gun")){
			ctx.fillRect(offset-20, temLens[i].y-5, 40, 10);
		}
	}
	for(var ray=0; ray<numOfRays+1; ray++){
		temLens[0].x=  ray*widthOfSource/numOfRays - widthOfSource/2;
		ctx.beginPath();
		ctx.moveTo(temLens[0].x+offset,temLens[0].y + yOffset);
		var blocked=0;
		for(var i=0;i<numOfLenses;i++){
			if(i>0){
				let prevType = temLens[i-1].kind;
				let prevIndex = i - 1;
				if (prevType == 'label'){
					prevType = temLens[i-2].kind;
					preIndex = i - 2;
				}
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
		if (!zoomVer){
			zoomedOutLabels[i].id = temLens[i].name.replace(/\s+/g, '');
		}
		if (i == 0){
			totalHeight = temLens[i].y;
		} else {
			totalHeight += temLens[i].y - temLens[i - 1].y;
		}
		if(temLens[i].kind=='sample'){
			ctx.fillStyle = '#fff';
			ctx.fillRect(offset-60,temLens[i].y,180,6);
		}
		if(temLens[i].kind=='lens' || temLens[i].kind == 'label'){
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
		

		if (zoomVer){
			if(temLens[i].kind=='screen'){
				zoomedInLabels[i].style.left = offset + 120 + 'px';
				zoomedInLabels[i].style.top = temLens[i].y * heightMult + yOffset + 'px';
			
			}else{
				if(temLens[i].kind=='source'){
					zoomedInLabels[i].style.left = "2px";
					zoomedInLabels[i].style.top = temLens[i].y * yScale + 60 + yOffset + 'px';
				}else{
					zoomedInLabels[i].style.left = "2px";
					zoomedInLabels[i].style.top = temLens[i].y * yScale + yOffset - 8 + 'px';
				}
			}

			columnDiv[0].append(zoomedInLabels[i]);
		} else {
			if(temLens[i].kind=='screen'){
				zoomedOutLabels[i].style.left = offset + 120 + 'px';
				zoomedOutLabels[i].style.top = temLens[i].y - 4 * yScale + 'px';
			
			}else{
				if(temLens[i].kind=='source'){
					zoomedOutLabels[i].style.left = offset + 95 + 'px';
					zoomedOutLabels[i].style.top = temLens[i].y + 20 + 'px';
				}else{
					zoomedOutLabels[i].style.left = offset + 95 + 'px';
					zoomedOutLabels[i].style.top = (temLens[i].y * yScale - 8 ) + 'px';
				}
			}

			columnDiv[0].append(zoomedOutLabels[i]);
		}
	}
	ctx.restore();	

}
