var settings = new Array();
//this block defines an array that is used in all sensitivity settings
var sensArray = new Array();
for(var i = 0; i < 10; i++){
	sensArray[i] = i;
}
//
//this block defines an array that is used in the magnification settings[7]
var magVals = new Array();

magVals.push(17000);
magVals.push(38000);
magVals.push(64000);
magVals.push(125000);
magVals.push(250000);
magVals.push(440000);
magVals.push(590000);	
magVals.push(690000);
magVals.push(780000);
//

function valRange(setting){
	if(setting.val >= setting.maxVal){
			setting.val = setting.maxVal;
			return setting.maxVal;
		}
		else{
			if(setting.val <= setting.minVal){
				setting.val = setting.minVal;
				return setting.minVal;
			}
			else{
				return setting.val;
			}
		}
	}

var seed = Math.random();
function RNG() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

settings[0] = {
	name: 'Image Shift X',
	val: -100,
	screenVal: function(){
		return 250 + this.val;
	},
	
	modelVal: function() {
		return this.val;
	},
	actual: 0,
	sens: function(){
		return settings[13].modelVal()/10; //settings[13] is imgshft sensitivity
	}
};
settings[1] = {
	name: 'Image Shift Y',
	val: -10,
	screenVal: function(){
		return 150 + this.val;
	},
	modelVal: function(){
		return 0;
	},
	actual: 0,
	sens: function(){
		return settings[13].modelVal()/10;
	}
};
settings[2] = {
	name: 'Stage X',
	val: -350,
	sens: function(){
		return settings[14].modelVal()/10;
	},
	modelVal: function() {
		return 0;
	},
	screenVal: function() {
		return 2*this.val-450;
	},
	actual: function(){
		return this.val*1;
	}
};
settings[3] = {
	name: 'Stage Y',
	val: -350,
	sens: function(){
		return settings[14].modelVal()/10;
	},
	modelVal: function() {
		return 0
	},
	screenVal: function() {
		return 2*this.val-400;
	},
	actual: function(){
		return this.val*1;
	}
};
settings[4] = {
	name: 'Intensity',
	val: 10,
	screenVal: function() {
		return this.val;
	},
	modelVal: function() {
		return this.val;
	},

	actual: 0,
	sens: function(){
		return 1;
	}
};
settings[5] = {
	name: 'C Stig X',
	val: 0,
	screenVal: function() {
		return this.val;
	},
	modelVal: function() {
		return this.val;
	},
	actual: 0,
	sens: function(){
		return 1;
	}
};
settings[6] = {
	name: 'C Stig Y',
	val: 0,
	screenVal: function() {
		return this.val;
	},
	modelVal: function() {
		return this.val;
	},
	actual: 0,
	sens: function(){
		return 1;
	}
};
settings[7] = {
	name: 'Mag',
	val: 150,
	
	sens: function(){
		return 1;
	},
	screenVal: function(){
		return .00002*this.actual();
	},
	modelVal: function(lensId){
		return 20*(temLens[20].y()-temLens[19].y())/Math.log(this.actual())-146;
	},
	actual: function() {
		var i = Math.floor(this.val/50);
		if(i>=magVals.length){
			i=magVals.length-1;
		}
		if(i<0){
			i=0;
		}
		this.val = i*50;
		return magVals[i];
	}
};
settings[8] = {
	name: 'Focus',
	val: 0,
	screenVal: function() { 
		return this.val*this.sens();
	},
	modelVal: function() {
		return this.val*this.sens();
	},
	actual: 0,
	sens: function(){
		return 75/500;
	}
};
settings[9] = {
	name: 'PPX Left',
	val: 0,
	screenVal: function() {
		return this.val;
	},
	modelVal: function() {
		return this.val;
	},
	actual: 0,
	sens: ()=>1
};
settings[10] = {
	name: 'PPX Right',
	val: 0,
	screenVal: function() {
		return this.val;
	},
	modelVal: function() {
		return this.val;
	},
	actual: 0,
	sens: function(){
		return 1;
	}
};
settings[11] = {
	name: 'PPX',
	val: 0,
	screenVal: function() {
		return this.val;
	},
	modelVal: function() {
		
		return this.val;
	},
	actual: 0,
	sens: function(){
		return 1;
	}
};
settings[12] = {
	name: 'Condenser Stigmator',
	val: 0,
	modelVal: function() {
		return this.val;
	},
	sens: function(){
		return 1;
	}
};

settings[13] = {
	name: 'ImageShift Sensitivity',
	val: 5, //range 1-10?
	/*
	modelVals: new Array(),
	 */
	maxVal: 10,
	minVal: 1,
	modelVal: function(){
		return valRange(this);
	},
	screenVal: function() { 
		return valRange(this);
	}
};

settings[14] = {
	name: 'StageShift Sensitivity',
	val: 5,
	maxVal: 10,
	minVal: 1,
	modelVal: function() { 
		return valRange(this);
	},
	
	screenVal: function() { 
		return valRange(this);
	}
};

settings[15] = {
	name: 'Z-height',
	val: 0,
	modelVal: function(){
		return 556 + this.val*this.sens;
	},
	screenVal: function(){
		return this.val*this.sens*5;
	}, 
	actual: function(){
		return this.val*this.sens;
	}, 
	sens: 0.5
}; 
settings[16] = {
	name: 'Alpha Stage Angle',
	val: 0,
	modelval: function(){
		return this.val;
	},
	screenVal: function(){
		return this.val;
	},
	actual: function(){
		return this.val;
	},
	direction: 1,
	sens: 1.5
};
settings[17] = {
	name: 'Alpha Stage Toggle',
	val: 0,
	modelVal: function(){
		return this.val;
	},
	screenVal: function(){
		return this.val;
	},
	actual: function(){
		return this.val;
	}
	
};

settings[18] = {
	name: 'Eucentric focus',
	val: 0,
	modelVal: function(){
		return this.val;
	},
	screenVal: function(){
		return this.val;
	},
	actual: function(){
		return 4.1 + val/100;
	}
};
settings[19] = {
	name: 'Spot Size',
	val: 0,
	maxVal: 11,
	minVal: 1,
	modelVal: ()=> settings[19].val*(6/11) + 1,
	screenVal: function(){
		return valRange(this);
	},
	actual: function(){
		return valRange(this);
	}	
};
settings[20] = {
	name: 'Gun Shift',
	val: 0,
	modelVal: ()=> settings[20].val,
	screenVal: ()=> settings[20].val,
	actual: ()=> settings[20].val
};
settings[21] = {
	name: 'Gun ShiftX',
	val: 0,
	modelVal: ()=>0.01*settings[21].val,
	screenVal: ()=> 0.5*settings[21].val,
	actual: ()=> settings[21].val,
	sens: ()=>1
};
settings[22] = {
	name: 'Gun ShiftY',
	val: 0,
	modelVal: ()=>0.01*settings[22].val,
	screenVal: ()=> 0.5*settings[22].val,
	actual: ()=> settings[22].val,
	sens: ()=>1
};
settings[23] = {
	name: 'Gun Tilt',
	val: 0,
	modelVal: ()=>settings[23].val,
	screenVal: ()=>settings[23].val,
	actual: ()=>settings[23].val
};
settings[24] = {
	name: 'Gun TiltX',
	val: 0,
	modelVal: ()=>0.001*settings[24].val,
	screenVal: ()=>0.1*settings[24].val,
	actual: ()=>settings[24].val,
	sens: ()=>1
};
settings[25] = {
	name: 'Gun TiltY',
	val: 0,
	modelVal: ()=>0.001*settings[25].val,
	screenVal: ()=>0.1*settings[25].val,
	actual: ()=>settings[25].val,
	sens: ()=>1
};
settings[26] = {
	name: 'PPY',
	val: 0,
	modelVal: ()=>settings[26].val,
	screenVal: ()=>settings[26].val,
	actual: ()=>settings[26].val
};
settings[27] = {
	name: 'PPY Left',
	val: 0,
	modelVal: ()=>settings[27].val,
	screenVal: ()=>settings[27].val,
	actual: ()=>settings[27].val,
	sens: ()=>1
};
settings[28] = {
	name: 'PPY Right',
	val: 0,
	modelVal: ()=>settings[28].val,
	screenVal: ()=>settings[28].val,
	actual: ()=>settings[28].val,
	sens: ()=>1
};
settings[29] = {
	name: 'PPX Y',
	val: 20,
	modelVal: ()=> settings[29].val,
	screenVal: ()=>settings[29].val,
	actual: ()=> settings[29].val,
	init: RNG()*50
};
settings[30] = {
	name: 'PPX X',
	val: 20,
	modelVal: ()=> settings[30].val,
	screenVal: ()=> settings[30].val,
	actual: ()=> settings[30].val,
	init: RNG()*50
};
settings[31] = {
	name: 'PPX ALPHA',
	val: 0,
	modelVal: ()=> settings[31].val,
	screenVal: ()=> settings[31].val,
	actual: ()=> settings[31].val
};
settings[32] = {
	name: 'PPY X',
	val: 0,
	modelVal: ()=> settings[32].val,
	screenVal: ()=> settings[32].val,
	actual: ()=> settings[32].val,
	init: RNG()*50
};
settings[33] = {
	name: 'PPY Y',
	val: 0,
	modelVal: ()=> settings[33].val,
	screenVal: () => settings[33].val,
	actual: ()=> settings[33].val,
	init: RNG()*50
};
settings[34] = {
	name: 'PPY ALPHA',
	val: 0,
	modelVal: ()=> settings[34].val,
	screenVal: ()=> settings[34].val,
	actual: ()=> settings[34].val
};
settings[35] = {
	name: 'C1 Aperture Interact',
	val: 0,
	modelVal: ()=> settings[35].val,
	screenVal: ()=> settings[35].val,
	actual: ()=> settings[35].val
};
settings[36] = {
	name: 'C2 Aperture Interact',
	val: 0,
	modelVal: ()=> settings[36].val,
	screenVal: ()=> settings[36].val,
	actual: ()=> settings[36].val
};
settings[37] = {
	name: 'Objective Aperture Interact',
	val: 0,
	modelVal: ()=> settings[37].val,
	screenVal: ()=> settings[37].val,
	actual: ()=> settings[37].val
};	
settings[38]= {
	name: 'Diffraction Aperture Interact',
	val: 0,
	modelVal: ()=> settings[38].val,
	screenVal: ()=> settings[38].val,
	actual: ()=> settings[38].val
};
stg = {}
for(i = 0; i < settings.length; i++){
	stg[settings[i].name] = i;
}
