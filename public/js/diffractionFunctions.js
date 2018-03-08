// Handles calculations and display for diffraction mode

function update() {
    // Extracts information from webpage
    var material = document.getElementById("material").value;
    for (i = 0; i < materialArray.length; i++) {
        if (material === materialArray[i].name) {
            document.getElementById("crystalStructure").value = materialArray[i].crystalStructure;
            break;
        }
    }
    var formData = new FormData(document.getElementById("form"));
    var background = document.getElementById("background");
    var lattice = document.getElementById("lattice");
    clearCanvas(lattice);
    drawBackground(background, formData.get("maskX"), formData.get("maskY"), formData.get("maskXR"), formData.get("maskYR"), formData.get("rotation"));
    if(!checkValidity(material, formData.get("u"), formData.get("v"), formData.get("w"))) {
        drawLattice(lattice, parseInt(formData.get("maskX")), parseInt(formData.get("maskY")), formData.get("radiusX"), formData.get("radiusY"), formData.get("rotation"), formData.get("blur"), formData.get("intensity"), formData.get("type"), formData.get("layers"), 0, 0, 0);
        return;
    }
    var settings = calculateR1R2Angle(materialArray[i], formData.get("u"), formData.get("v"), formData.get("w"), formData.get("voltage"), formData.get("cameraLength"), formData.get("max"));
    for(i = 0; i < settings[0].length; i++) {
        drawLattice(lattice, parseInt(formData.get("maskX")), parseInt(formData.get("maskY")), formData.get("radiusX"), formData.get("radiusY"), formData.get("rotation"), formData.get("blur"), formData.get("intensity"), formData.get("type"), formData.get("layers"), settings[0][i], settings[1][i], settings[2][i]);
    }
}

function calculateR1R2Angle(material, u, v, w, voltage, cameraLength, max) {
    // Determine the r1, r2, and angle based on the specified material and other parameters
    var r1s = [];
    var r2s = [];
    var angles = [];
    var alphaR = material.alpha / 180 * Math.PI;
    var betaR = material.beta / 180 * Math.PI;
    var gammaR = material.gamma / 180 * Math.PI;
    var omega = Math.sqrt(Math.pow(material.a * material.b * material.c, 2) * 
        (1 - Math.pow(Math.cos(alphaR), 2) - Math.pow(Math.cos(betaR), 2) - 
        Math.pow(Math.cos(gammaR), 2) + 2 * Math.cos(alphaR) * Math.cos(betaR) * 
        Math.cos(gammaR)));
    var s11 = Math.pow(material.b, 2) * Math.pow(material.c, 2) * Math.pow(Math.sin(alphaR), 2);
    var s22 = Math.pow(material.a, 2) * Math.pow(material.c, 2) * Math.pow(Math.sin(betaR), 2);
    var s33 = Math.pow(material.a, 2) * Math.pow(material.b, 2) * Math.pow(Math.sin(gammaR), 2);
    var s12 = material.a * material.b * Math.pow(material.c, 2) * (Math.cos(alphaR) * Math.cos(betaR) - Math.cos(gammaR));
    var s23 = Math.pow(material.a, 2) * material.b * material.c * (Math.cos(betaR) * Math.cos(gammaR) - Math.cos(alphaR));
    var s31 = material.a * Math.pow(material.b, 2) * material.c * (Math.cos(gammaR) * Math.cos(alphaR) - Math.cos(betaR));
    if(material.alpha === 90 && material.beta === 90 && material.gamma === 90) {
        s12 = 0;
        s23 = 0;
        s31 = 0;
    }
    var h1, k1, l1, h2, k2, l2;
    var min1 = -10;
    var max1 = 10;
    var max2 = max;
    var min2 = -max2;
    var complete = false;
    for (h = min1; h <= max1; h++) {
        for (k = min1; k <= max1; k++) {
            for (l = min2; l <= max2; l++) {
                if (h === 0 && k === 0 && l === 0) {
                    continue;
                }
                if (h * u + k * v + l * w === 0) {
                    var blank = false;
                    if (!determineValidHKL(material.crystalStructure, h, k, l)) {
                        continue;
                    }
                    h1 = h;
                    k1 = k;
                    l1 = l;
                    for (hh = min2; hh <= max2; hh++) {
                        for (kk = min2; kk <= max2; kk++) {
                            for (ll = min2; ll <= max2; ll++) {
                                if (hh == 0 && kk == 0 && ll == 0) {
                                    continue;
                                }
                                if ((h * hh + k * kk + l * ll) % (u + v + w) != 0){
                                    continue;
                                }
                                if (hh * u + kk * v + ll * w === 0) {
                                    if (!determineValidHKL(material.crystalStructure, hh, kk, ll)) {
                                        blank = true;
                                        continue;
                                    } else {
                                        blank = false;
                                    }
                                    h2 = hh;
                                    k2 = kk;
                                    l2 = ll;
                                    // Calculate r1 and r2
                                    function calculateDSpacings(h, k, l) {
                                    return omega / Math.sqrt(s11 * Math.pow(h, 2) + s22 * Math.pow(k, 2) + s33 * Math.pow(l, 2) + 
                                     2 * s12 * h * k + 2 * s23 * k * l + 2 * s31 * l * h);
                                    }
                                    var d1 = calculateDSpacings(h1, k1, l1);
                                    var d2 = calculateDSpacings(h2, k2, l2);
                                    if (d1 < .1 || d2 < .1) {
                                        continue;
                                    }
                                    var lambda = 12.27 / Math.sqrt(voltage * (1 + 0.000000978 * voltage));
                                    function calculateR(d) {
                                        return lambda * cameraLength / d / 5 * (1 + 3 / 32 * lambda ** 2 / d ** 2);
                                    }
                                    var r1 = calculateR(d1);
                                    var r2 = calculateR(d2);
                                    // Calculate the angle
                                    function functionA(h, k, l) {
                                        return Math.pow(h, 2) * s11 + Math.pow(k, 2) * s22 + Math.pow(l, 2) * s33 + 
                                         h * k * s12 + h * l * s31+ k * l * s23;
                                    }
                                    function calculateAngle() {
                                        return (h1 * h2 * s11 + k1 * k2 * s22 + l1 * l2 * s33 + s12 * (k1 * h2 + h1 * k2) + s31 * (h1 * l2 + l1 * h2) +
                                         s23 * (k1 * l2 + l1 * k2)) / (functionA(h1, k1, l1) * functionA(h2, k2, l2));
                                    }
                                    var angle = Math.acos(calculateAngle()) * 180 / Math.PI;
                                    //console.log(functionA(h1, k1, l1), functionA(h2, k2, l2), calculateAngle(), angle)
                                    if(!isNaN(angle)){
                                        r1s.push(r1);
                                        r2s.push(r2);                                        
                                        angles.push(angle);
                                    }
                                    complete = true;
                                }
                            }
                        }
                    }
                }
                if(complete) {
                    var settings = [r1s, r2s, angles];
                    return settings;
                }
            }
        }
    }
}

function checkValidity(material, u, v, w) {
    // Checks whether the specified material and uvw configuration is valid
    if (material === "---") {
        return false;
    }
    if (u == 0 && v == 0 && w == 0) {
        return false;
    }
    return true;
}

function clearCanvas(canvas) {
    // Clears the canvas
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function determineValidHKL(crystalStructure, h, k, l) {
    // Determine valid HKL values based on the crystal structure of the material
    switch(crystalStructure) {
        case "fcc":
        case "FCC":
        case "Face Centered Cubic":
            if((h % 2 === 0 && k % 2 === 0 && l % 2 === 0) || (h % 2 === 1 && k % 2 === 1 && l % 2 === 1)) {
                return true;
            } else {
                return false;
            }
        case "bcc":
        case "BCC":
        case "Body Centered Cubic":
            if((h + k + l) % 2 === 0) {
                return true;
            } else {
                return false;
            }
        case "diamond cube":
        case "Tetragonal":
        case "Primitive Tetragonal":
            var remainder = (h + k + l) % 4;
            if((remainder === 0 && h % 2 === 0 && k % 2 === 0 && l % 2 === 0) || (h % 2 === 1 && k % 2 === 1 && l % 2 === 1)) {
                return true;
            } else {
                return false;
            }
        default:
            return true;
    } 
}

function drawBackground(canvas, x, y, radiusX, radiusY, rotation, intensity) {
    // Draw a black rectangle and a green circle
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = ('#000');
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        var rotationRadians = rotation / 180 * Math.PI;
        let brightness = Math.min(1, intensity);
        ctx.fillStyle = 'rgba(0,17,0,' + brightness + ')'; //'#373' //'#6E7'; //true value 
        ctx.beginPath();
        ctx.ellipse(x, y, radiusX, radiusY, rotationRadians, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawDot(ctx, x, y, rx, ry, rotationRadians){
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, rotationRadians, 0, 2 * Math.PI);
    ctx.fill();
}

function drawKikuchiBand(canvas, alphaTilt, betaTilt, gradient, lightGradient, darkGradient, lineWidth, CO, lineAngle, xCenter, yCenter){
    // Draw a single Kikuchi band
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.arc(xCenter + Math.cos(lineAngle) * CO, yCenter + Math.sin(lineAngle) * CO, CO, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineWidth = 1;
        console.log(Math.sin(lineAngle) * alphaTilt + Math.cos(lineAngle) * betaTilt)
        // Draw bright edge and dark edge
        if (Math.sin(lineAngle) * alphaTilt + Math.cos(lineAngle) * betaTilt <= 0){
            ctx.strokeStyle = darkGradient;
            ctx.beginPath();
            ctx.arc(xCenter + Math.cos(lineAngle) * CO, yCenter + Math.sin(lineAngle) * CO, CO - lineWidth / 2, 0, Math.PI * 2);
            ctx.stroke();
        } 
        if (Math.sin(lineAngle) * alphaTilt + Math.cos(lineAngle) * betaTilt >= 0){
            ctx.strokeStyle = lightGradient;
            ctx.beginPath();
            ctx.arc(xCenter + Math.cos(lineAngle) * CO, yCenter + Math.sin(lineAngle) * CO, CO - lineWidth / 2, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
}

function drawKikuchiLines(canvas, xOffset, yOffset, radiusX, radiusY, r1, r2, dx, dy, angle, specimenThickness, platformRadius, alphaTilt, betaTilt, i, j, xCenter, yCenter, cameraLength){
    // Draw Kikuchi lines - lines for points that are closer together are narrower and less transparent
    if (specimenThickness <= 0){
        return;
    }
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        let lineWidthX = Math.abs(2 * dy * j);
        let lineWidthY = Math.abs(2 * dx * j - 2 * r1 * i);
        let lineWidth = Math.sqrt(Math.pow(lineWidthX, 2) + Math.pow(lineWidthY, 2)) / 2;
        if (lineWidth === 0){
            return; // used to avoid drawing a thin vertical line for the center dot
        }
        let lineTransparency = specimenThickness / 150 / Math.pow(lineWidth, 2) * radiusX * radiusY;
        let lineAngle = Math.atan2(dy * j, dx * j - r1 * i);
        
        console.log(lineAngle)

        // Applying the blur filter significantly worsens performance, so it is avoided when possible
        //ctx.filter = 'blur(' + Math.floor(Math.abs(blur) + Math.abs(specimenThickness / 1000)) + 'px)';

        // Scaling transparency by thickness and scaling color by proximity to center
        let gradient = ctx.createRadialGradient(xOffset, yOffset, platformRadius * cameraLength / 265, xOffset, yOffset, 0);
        gradient.addColorStop(0, 'rgba(0,17,0,0)');
        gradient.addColorStop(.8, 'rgba(128,255,154,' + lineTransparency * .8 + ')');
        gradient.addColorStop(1, 'rgba(255,255,255,' + lineTransparency + ')');
        let lightGradient = ctx.createRadialGradient(xOffset, yOffset, platformRadius * cameraLength / 265, xOffset, yOffset, 0);
        lightGradient.addColorStop(0, 'rgba(255,255,255,0)');
        lightGradient.addColorStop(.8, 'rgba(255,255,255,' + lineTransparency * .8 + ')');
        lightGradient.addColorStop(1, 'rgba(255,255,255,' + lineTransparency + ')');
        let darkGradient = ctx.createRadialGradient(xOffset, yOffset, platformRadius * cameraLength / 265, xOffset, yOffset, 0);
        darkGradient.addColorStop(0, 'rgba(0,0,0,0)');
        darkGradient.addColorStop(.8, 'rgba(0,0,0,' + lineTransparency * .8 + ')');
        darkGradient.addColorStop(1, 'rgba(0,0,0,' + lineTransparency + ')');
        let CO = 10000;
        drawKikuchiBand(canvas, alphaTilt, betaTilt, gradient, lightGradient, darkGradient, lineWidth, CO, lineAngle, xCenter, yCenter)
        lineAngle = Math.atan2(dy * j, -dx * j + r1 * i);
        drawKikuchiBand(canvas, alphaTilt, betaTilt, gradient, lightGradient, darkGradient, lineWidth, CO, lineAngle, xCenter, yCenter)
        lineAngle = Math.atan2(-dy * j, -dx * j + r1 * i);
        drawKikuchiBand(canvas, alphaTilt, betaTilt, gradient, lightGradient, darkGradient, lineWidth, CO, lineAngle, xCenter, yCenter)
        lineAngle = Math.atan2(-dy * j, dx * j - r1 * i);
        drawKikuchiBand(canvas, alphaTilt, betaTilt, gradient, lightGradient, darkGradient, lineWidth, CO, lineAngle, xCenter, yCenter)
        /*ctx.fillStyle = gradient;
        ctx.translate(xCenter, yCenter);
        ctx.rotate(lineAngle);
        ctx.translate(-xCenter, -yCenter);
        ctx.fillRect(xCenter - lineWidth / 2, 0, lineWidth, platformRadius * 2);
        ctx.translate(xCenter, yCenter);
        ctx.rotate(-lineAngle * 2);
        ctx.translate(-xCenter, -yCenter);
        ctx.fillRect(xCenter - lineWidth / 2, 0, lineWidth, platformRadius * 2);
        ctx.translate(xCenter, yCenter);
        ctx.rotate(lineAngle);
        ctx.translate(-xCenter, -yCenter);*/
    }
}

function drawLattice(canvas, xOffset, yOffset, radiusX, radiusY, rotation, blur, intensity, type, layers, r1, r2, angle, specimenThickness, platformRadius, alphaTilt, betaTilt, cameraLength) {
    // Draw the lattice diffraction pattern
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(canvas.width / 2 + objectivex, canvas.height / 2 + objectivey, objectiveSizes[objectiveLevel - 1] * cameraLength / 600, 0, Math.PI * 2);
        ctx.clip();
        //ctx.filter = 'blur(' + Math.floor(Math.abs(blur) + Math.abs(specimenThickness / 300)) + 'px)';
        var dx = r1 / 2 //r2 * Math.cos(angle / 180 * Math.PI); // x component for vector r2
        var dy = r2 * Math.sin(angle / 180 * Math.PI); // y component for vector r2
        //console.log(r2, angle)
        //console.log(dx, dy);
        var rotationRadians = rotation; // conversion no longer necessary, rotation is calculated in radians
        var maxDistance = platformRadius;
        //let coords = findClosestDot(dx, dy, alphaTilt, betaTilt, platformRadius);
        let xCenter = xOffset + Math.tan(betaTilt * Math.PI / 180) * cameraLength * 3;
        let yCenter = yOffset + Math.tan(alphaTilt * Math.PI / 180) * cameraLength * 3;
        let brightness = Math.min(intensity, 1);
        if(saedInserted){
            brightness *= saedSizes[saedLevel - 1] / 1000
        }
        let gradient = ctx.createRadialGradient(xCenter, yCenter, platformRadius * cameraLength / 265, xCenter, yCenter, 0);
        gradient.addColorStop(0, 'rgba(0,17,0,0');
        gradient.addColorStop(.8, 'rgba(128,255,154,' + .8 * brightness + ')');
        gradient.addColorStop(1, 'rgba(255,255,255,' + brightness + ')');
        for (var i = 0; i <= layers; i++) {
            for (var j = 0; j <= layers; j++) {
                ctx.fillStyle = gradient;
                var distance = Math.sqrt(Math.pow(r1 * i - dx * j, 2) + Math.pow(dy * j, 2));
                var distanceRatio = distance / maxDistance;
                if(type === "poly") {
                    ctx.beginPath();
                    ctx.ellipse(canvas.width / 2, canvas.height / 2, distance * radiusX / 4, distance * radiusY / 4, rotationRadians, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(canvas.width / 2, canvas.height / 2, distance * radiusX / 32, distance * radiusY / 32, rotationRadians, 0, 2 * Math.PI);
                    ctx.fill();
                } else {
                    var x1 = r1 * i - dx * j + xOffset;
                    var x2 = -r1 * i + dx * j + xOffset;
                    var y1 = dy * j + yOffset;
                    var y2 = -dy * j + yOffset;
                    var rx = radiusX / (distanceRatio + 1);
                    var ry = radiusY / (distanceRatio + 1);
                    let kBandAngle = Math.atan2(dy * j, r1 * i - dx * j) - Math.PI / 2;
                    let xDiff = xCenter - xOffset;
                    let yDiff = yCenter - yOffset;
                    let diffDistance = Math.abs(xDiff * Math.sin(kBandAngle) - yDiff * Math.cos(kBandAngle));
                    if (diffDistance <= distance){
                        drawDot(ctx, x1, y1, rx, ry, rotationRadians);
                        drawDot(ctx, x2, y2, rx, ry, rotationRadians);
                    }
                    kBandAngle = Math.atan2(dy * j, -r1 * i + dx * j) - Math.PI / 2;
                    diffDistance = Math.abs(xDiff * Math.sin(kBandAngle) - yDiff * Math.cos(kBandAngle));
                    if (diffDistance <= distance){
                        drawDot(ctx, x2, y1, rx, ry, rotationRadians);
                        drawDot(ctx, x1, y2, rx, ry, rotationRadians);
                    }
                }
                if(objectiveLevel > 4 && !saedInserted){
                    drawKikuchiLines(canvas, xOffset, yOffset, radiusX, radiusY, r1, r2, dx, dy, angle, specimenThickness, platformRadius, alphaTilt, betaTilt, i, j, xCenter, yCenter, cameraLength);
                }
            }
        }
        gradient = ctx.createRadialGradient(xOffset, yOffset, platformRadius * cameraLength / 265, xOffset, yOffset, 0);
        gradient.addColorStop(0, 'rgba(128,255,154,' + .3 * brightness + ')');
        gradient.addColorStop(.8, 'rgba(128,255,154,' + .5 * brightness + ')');
        gradient.addColorStop(1, 'rgba(255,255,255,' + brightness + ')');
        ctx.fillStyle = gradient;
        drawDot(ctx, xOffset, yOffset, radiusX, radiusY, rotation);
    }
}

/*function findClosestDot(dx, dy, alphaTilt, betaTilt, platformRadius){
    // Returns the x and y coordinates of the closet dot to the tilt position
    let topRow = Math.ceil(alphaTilt * platformRadius / 45 / dy)
    let top = topRow * dy
    let left = Math.floor(betaTilt * platformRadius / 45 / (dx * 2)) * dx * 2 - (topRow % 2) * dx
    let right = left + dx * 2
    let bottom = top - dy;
    let array = [[left, top], [left + dx, bottom], [right, top], [right + dx, bottom]];
    let minDistance = Infinity;
    let closestPoint;
    //console.log(topRow, top, left, right, bottom);
    for (let i = 0; i < 4; i++){
        let distance = Math.sqrt(Math.pow((array[i][0] - betaTilt), 2) + Math.pow((array[i][1] - alphaTilt), 2));
        if(distance < minDistance){
            minDistance = distance;
            closestPoint = array[i];
        }
    }
    //console.log(closestPoint);
    return closestPoint;
}*/