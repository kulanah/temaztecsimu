let temLens = new Array();
let theta=0;
let lensFocus = 0;
let zoomed = false;
let colValveCutoff = 6;

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




//              xCenter, WIDTH, y, f, kind, name
temLens[00] = new lens(0,0,-10,5, 'source', 'Electron Gun');
temLens[01] = new lens(0,0,55,55, 'lens', 'Gun lens');
temLens[02] = new lens(0,0,100,90, 'label', 'Gun Deflection 1');
temLens[03] = new lens(0,20,130,0, 'label', 'Gun Deflection 2');
temLens[04] = new lens(0,0,210,60, 'lens', 'Condenser Lens 1');
temLens[05] = new lens(0,0,260,6.1, 'aperture', 'C1 Aperture');
temLens[06] = new lens(0,0,305,75, 'lens', 'Condenser Lens 2');
temLens[07] = new lens(0,0,330,25, 'aperture', 'C2 Aperture');
temLens[08] = new lens(0,0,337,05, 'label', 'Condenser Stigmator');
temLens[09] = new lens(0,0,343,55, 'label', 'Beam Deflection X');
temLens[10] = new lens(0,0,349,9, 'label', 'Beam Deflection Y');
temLens[11] = new lens(0,0,356,24, 'lens', 'Minicondenser Lens');
temLens[12] = new lens(0,0,417,70, 'lens', 'Objective UpperPolepiece');
temLens[13] = new lens(0,0,470,-10, 'sample', 'Specimen');
temLens[14] = new lens(0,0,538,60, 'lens', 'Objective LowerPolepiece');
temLens[15] = new lens(0,0,583,16, 'aperture', 'Objective Aperture');
temLens[16] = new lens(0,0,600,16, 'label', 'Objective Stigmator');
temLens[17] = new lens(0,0,610,100, 'label', 'Image Deflection 1');
temLens[18] = new lens(0,0,620,30, 'label', 'Image Deflection 2');
temLens[19] = new lens(0,0,622,30, 'label', 'Diffraction Stigmator');
temLens[20] = new lens(0,0,625,24, 'aperture', 'SAED Aperture');
temLens[21] = new lens(0,0,630,58, 'lens', 'Intermediate/Diffraction Lens');
temLens[22] = new lens(0,0,714,85, 'lens', 'Projection lens 1');
temLens[23] = new lens(0,0,795,10, 'lens', 'Projection Lens 2');
temLens[24] = new lens(0,0,1090,5, 'screen', 'Viewing Screen');


//These are static references for the above.  This allows us to use these as references 
//so that if the above are reordered we don't need to track down every reference

const temLensSpecimen = temLens[13];


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

function drawColumnParam(heightMult = 0.86, yOffset = 0.04 * $(window).height(), zoomedIn = false, widthMult = 0.3){
	let columnDiv;
	let beamDiag;
	let beamLabels;

	if (!zoomedIn){
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
	var xCenter = canvasWidth / 2;

	//draw CenterLine
	ctx.beginPath();
	ctx.moveTo(xCenter,temLens[0].y + yOffset);
	if(colopen){
		ctx.lineTo(xCenter,temLens[temLens.length-1].y);  
	} else {
		ctx.lineTo(xCenter,temLens[colValveCutoff-1].y);
	}
	ctx.strokeStyle = 'blue';
	ctx.stroke();
	
	var numOfRays = 10;
	var widthOfSource = 2;
	ctx.fillStyle = "#9b9b9b";
	for (i = 0; i < numOfLenses; ++i){
		if (zoomedIn){
			lenswidth = 45;
			lensxCenter = xCenter;
			lensheight = 2;
		} else {
			lenswidth = 40;
			lensxCenter = xCenter;
			lensheight = 5;
		}
		if (temLens[i].kind == 'lens'){
			ctx.beginPath();
			ctx.ellipse(lensxCenter, temLens[i].y, lenswidth, lensheight, 0, 0, 2 * Math.PI);
			ctx.fillStyle = "white";
			ctx.fill();
		}
	}
	//Ray drawing function
	for(var ray=0; ray<numOfRays+1; ray++){
		temLens[0].x =  ray * widthOfSource / numOfRays - widthOfSource / 2;
		ctx.beginPath();
		ctx.moveTo(temLens[0].x + xCenter,temLens[0].y + yOffset);
		var blocked=0;
		let rayLenses = numOfLenses;
		if(!colopen){
			rayLenses = colValveCutoff;
		}
		for(var i=0;i<rayLenses;i++){
			if(i>0){
				index = i
				let prevType = temLens[i-1].kind;
				let prevIndex = i - 1;

				//ignore the previous item and go back to the one before it, IF it's a label or a sample
				//while loop so we can go back if there are two labels or samples in a row
				while (prevType == 'label' || prevType == 'sample'){
					prevIndex = prevIndex - 1;
					prevType = temLens[prevIndex].kind;
				}

				let prevX = temLens[prevIndex].x;

				//if the current type isn't a label, because if it's a label we don't want to modify the ray path at all.
				if (!(temLens[i].type == 'label')){
					//check the previous item because if it's a aperture we need to compute if the ray is blocked or not
					if(prevType =='lens' || prevType =='source'){
						//previous rays width - (current y - previous y) * (width of current ray / previous F val)
						temLens[i].x = prevX - 
						(temLens[i].y - temLens[prevIndex].y) * ((prevX-temLens[prevIndex].xCenter) / temLens[prevIndex].f);
					}	

					if(prevType == 'aperture'){
						if(prevX < -temLens[prevIndex].f + temLens[prevIndex].xCenter 
						|| temLens[prevIndex].x>temLens[prevIndex].f +temLens[prevIndex].xCenter){
							blocked = 1;	
						}else{
							temLens[i].x = temLens[prevIndex - 1].x-(temLens[i].y-temLens[prevIndex - 1].y) 
							* ((temLens[prevIndex - 1].x-temLens[prevIndex - 1].xCenter) / temLens[prevIndex - 1].f);
						}
					}	
				}
			} else {
				index = 0;
				
			}
			if(blocked==0 && temLens[index].type != 'sample' && temLens[index].type != 'label'){
				ctx.lineTo(temLens[i].x + xCenter, temLens[i].y);  		
			}
		}	
		//color in rgb as function of starting position
		var r = Math.floor(255 * ray / numOfRays);
		var g = Math.floor(255 * (numOfRays - ray) / numOfRays);		
		var b = 255;
		ctx.strokeStyle = 'rgb(' + r + ',' + g + ',' + b + ')'; 
		ctx.stroke();	
	}
	ctx = beamLabels[0].getContext('2d');
	ctx.clearRect(-10000,-10000,20000,20000);
	ctx.save();
	ctx = beamDiag[0].getContext('2d');

	//drawing squares to point at different lenses
	for(var i=0;i<numOfLenses;i++){
		if (!zoomedIn){
			zoomedOutLabels[i].id = temLens[i].name.replace(/\s+/g, '');
		}
		if(temLens[i].kind=='sample'){
			ctx.fillStyle = '#fff';
			ctx.fillRect(xCenter-60,temLens[i].y,180,6);
		}
		if(temLens[i].kind=='lens'){
			ctx.fillStyle = '#fff';
			if (zoomedIn){
				ctx.fillRect(xCenter+100,temLens[i].y - 4, 20, 7);
			} else {
				ctx.fillRect(xCenter-114,temLens[i].y - 12,14,14);
			}
		}
		if (temLens[i].kind == 'label'){
			if (zoomedIn){
				ctx.strokeStyle= '#fff';
				//draws the empty squares for the label boxes
				// ctx.strokeRect(xCenter - 114, temLens[i].y - 5, 3, 3);
				ctx.strokeRect(xCenter + 102, temLens[i].y - 2, 16, 4);

				//draws the x's in the label boxes
				ctx.beginPath();
				ctx.moveTo(xCenter + 103, temLens[i].y + 1);
				ctx.lineTo(xCenter + 117, temLens[i].y - 1);

				ctx.moveTo(xCenter + 103, temLens[i].y - 1);
				ctx.lineTo(xCenter + 117, temLens[i].y + 1);

				ctx.stroke();
			}
		}
		if(temLens[i].kind=='aperture'){
			ctx.beginPath();
			ctx.moveTo(xCenter+temLens[i].f+temLens[i].xCenter,temLens[i].y);
			ctx.lineTo(xCenter+114,temLens[i].y); 
			ctx.moveTo(xCenter-temLens[i].f+temLens[i].xCenter,temLens[i].y);
			ctx.lineTo(xCenter-114,temLens[i].y); 
			ctx.strokeStyle = '#fff';
			ctx.stroke();
		}
		ctx.restore();	
		ctx = beamLabels[0].getContext('2d');
		

		if (zoomedIn){
			if(temLens[i].kind=='screen'){
				zoomedInLabels[i].style.left = xCenter + 120 + 'px';
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
				zoomedOutLabels[i].style.left = xCenter + 120 + 'px';
				zoomedOutLabels[i].style.top = temLens[i].y - 4 * yScale + yOffset + 'px';
			
			}else{
				if(temLens[i].kind=='source'){
					zoomedOutLabels[i].style.left = xCenter + 95 + 'px';
					zoomedOutLabels[i].style.top = temLens[i].y + 20 + yOffset + 'px';
				}else{
					zoomedOutLabels[i].style.left = xCenter + 95 + 'px';
					zoomedOutLabels[i].style.top = (temLens[i].y * yScale - 8 ) + yOffset + 'px';
				}
			}
				console.log(temLens[i].name + " is a " + temLens[i].kind);
			if (temLens[i].kind !== 'label'){
				columnDiv[0].append(zoomedOutLabels[i]);
			}
		}
	}
	ctx.restore();	

	if (zoomed && !zoomedIn){
		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.strokeRect(10, temLens[lensFocus].y-50, canvasWidth- 15, 100);
		ctx.restore();
	}
}