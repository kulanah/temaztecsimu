var orbiting = false;

function update() {
    // Extracts information from webpage
    multifunctionApplication(document.getElementById("multifunctionX").value, document.getElementById("multifunctionY").value, document.getElementById("process").value);
    var canvas = document.getElementById("space");
    if(document.getElementById("process").value === "circle") {
        document.getElementById("y").value = canvas.height / 2; // Ensures that moving to circle will happen along the x-axis
    }
    var formData = new FormData(document.getElementById("form"));
    var x = parseInt(formData.get("x"))
    var y = parseInt(formData.get("y"))
    drawBackground(canvas, "1");
    drawBeam(canvas, x, y, parseInt(formData.get("radiusX")), parseInt(formData.get("radiusY")), parseInt(formData.get("rotation")), parseInt(formData.get("lineWidth")));
    if(formData.get("multifunction") === "cdfd") {
        document.getElementById("process").style.visibility = "visible";
        if(formData.get("process") === "center" && checkCenterAlignment(canvas, x, y)) {
            document.getElementById("process").value = "circle";
        } else if(formData.get("process") === "circle" && checkCircleAlignment(canvas, x, y, canvas.width / 8)) {
            document.getElementById("process").value = "movement";
        }
        if(document.getElementById("process").value === "movement" && orbiting === false) {
            orbiting = true;
            document.getElementById("multifunctionX").value = canvas.width / 64;
            document.getElementById("multifunctionY").value = 8;
            orbit();
        }
    } else {
        document.getElementById("process").value = "---";
        document.getElementById("process").style.visibility = "hidden";
    }
    if (document.getElementById("process").value !== "movement") {
        orbiting = false;
    }
}

function checkCenterAlignment(canvas, x, y) {
    // Checks if the beam is in the center of the area
    if(x === canvas.width / 2 && y === canvas.height / 2) {
        return true;
    }
    return false;
}

function checkCircleAlignment(canvas, x, y, cdfdRadius) {
    // Checks if the beam is positioned on the 4cm circle
    if (x === canvas.width / 2 - cdfdRadius || x === canvas.width / 2 + cdfdRadius) {
        return true;
    }
    return false;
}

function drawWhiteBackground(canvas, alpha) {
    // Draws the white background, 4cm circle, and center circle
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(255, 255, 255, ' + alpha + ')';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        var cdfdRadius = canvas.width / 8;
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, cdfdRadius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, cdfdRadius / 8, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function drawBeam(canvas, x, y, radiusX, radiusY, rotation, lineWidth) {
    // Draws the beam
    drawGreenCircle(canvas, x, y, radiusX, radiusY, rotation);
    drawThreeArcs(canvas, x, y, radiusX, radiusY, rotation, lineWidth);
    drawDot(canvas, x, y, radiusX, radiusY, rotation);
}

function drawDot(canvas, x, y, radiusX, radiusY, rotation) {
    // Draws the white dot at the center of the beam
    if (canvas.getContext) {
        var rotationRadians = rotation / 180 * Math.PI;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = ('#FFF');
        ctx.beginPath();
        ctx.ellipse(x, y, radiusX / 8, radiusY / 8, rotationRadians, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawGreenCircle(canvas, x, y, radiusX, radiusY, rotation) {
    // Draws the green body of the beam
    if (canvas.getContext) {
        var rotationRadians = rotation / 180 * Math.PI;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#373'; 
        ctx.beginPath();
        ctx.ellipse(x, y, radiusX, radiusY, rotationRadians, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawThreeArcs(canvas, x, y, radiusX, radiusY, rotation, lineWidth) {
    // Draws the three arcs visible in the beam
    if (canvas.getContext) {
        var rotationRadians = rotation / 180 * Math.PI;
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = '#6E7';
        ctx.lineWidth = lineWidth;
        console.log(x, y, radiusX, radiusY, rotation, lineWidth)
        ctx.beginPath();
        ctx.ellipse(-2 * radiusX * Math.cos(rotationRadians + Math.PI / 3) + x, -2 * radiusY * Math.sin(rotationRadians + Math.PI / 3) + y,
         radiusX * Math.sqrt(3), radiusY * Math.sqrt(3), rotationRadians, Math.PI / 6, Math.PI / 2);
        ctx.stroke();
        console.log((-2 * radiusX * Math.cos(rotationRadians + Math.PI / 3) + x, -2 * radiusY * Math.sin(rotationRadians + Math.PI / 3) + y,
         radiusX * Math.sqrt(3), radiusY * Math.sqrt(3)));
        ctx.beginPath();
        ctx.ellipse(radiusX * 2 * Math.cos(rotationRadians) + x, radiusY * 2 * Math.sin(rotationRadians) + y,
         radiusX * Math.sqrt(3), radiusY * Math.sqrt(3), rotationRadians, 5 * Math.PI / 6, 7 * Math.PI / 6);
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(-2 * radiusX * Math.cos(rotationRadians + 5 * Math.PI / 3) + x, -2 * radiusY * Math.sin(rotationRadians + 5 * Math.PI / 3) + y,
         radiusX * Math.sqrt(3), radiusY * Math.sqrt(3), rotationRadians, 3 * Math.PI / 2, 11 * Math.PI / 6);
        ctx.stroke();
    }
}

function multifunctionApplication(mX, mY, process) {
    // Applies the effects of adjusting multifunctionX and multifunctionY
    switch (process) {
        case "center":
            document.getElementById("x").value = mX;
            document.getElementById("y").value = mY;
            break;
        case "circle":
            document.getElementById("x").value = mX;
            break;
    }
}

function orbit() {
    // Moves the beam in an oval
    if(!orbiting) {
          return;
    }
    var canvas = document.getElementById("space");
    var time = new Date();
    var speed = document.getElementById("speed").value;
    var amplitude = document.getElementById("multifunctionX").value;
    var ellipseRadius = document.getElementById("multifunctionY").value;
    var x = Math.round(Math.cos(((2 * Math.PI) * speed) * time.getSeconds() + ((2 * Math.PI) * speed / 1000) * time.getMilliseconds()) * amplitude * ellipseRadius + canvas.width / 2);
    var y = Math.round(Math.sin(((2 * Math.PI) * speed) * time.getSeconds() + ((2 * Math.PI) * speed / 1000) * time.getMilliseconds()) * amplitude * 8 + canvas.height / 2);
    document.getElementById("x").value = x;
    document.getElementById("y").value = y;
    var rotation = parseFloat(document.getElementById("rotation").value);
    var lineWidth = parseFloat(document.getElementById("lineWidth").value);
    var radiusX = parseFloat(document.getElementById("radiusX").value);
    var radiusY = parseFloat(document.getElementById("radiusY").value);
    drawBackground(canvas, "0.025");
    drawBeam(canvas, x, y, radiusX, radiusY, rotation, lineWidth);
    window.setTimeout(orbit);
    // Alternative animation options:
    //window.requestAnimationFrame(orbit);
    //window.setInterval(orbit, 10);
}

function randomPosition(canvas) {
    // Moves the beam to a random xy-coordinate
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    document.getElementById("x").value = x;
    document.getElementById("y").value = y;
    document.getElementById("multifunctionX").value = x;
    document.getElementById("multifunctionY").value = y;
}

function startCDFD() {
    // Begins the sequence of steps for Dynamic Conical Dark-field Distortion
    randomPosition(document.getElementById("space"));
    document.getElementById("process").value = "center";
}