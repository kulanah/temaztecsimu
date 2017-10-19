function update() {
    // Extracts information from webpage
    var formData = new FormData(document.getElementById("form"));
    var lambda = lambdaCalculation(formData.get("voltage")) * 10;
    var canvas = document.getElementById('image');    
    drawCTFPlot(formData.get("Cs") * 1000000, formData.get("deltaF"), formData.get("R"), formData.get("phi1"), formData.get(phi), lambda, formData.get(intensity));
    drawDiffractogram(canvas, formData.get("intensity"), lambda, formData.get("deltaF"), formData.get("R"), formData.get("phi"), formData.get("phi1"), formData.get("Cs") * 1000000);
}

function A1Calculation(deltaF, R) {
    return deltaF * (Math.pow(R, 2) - 1) / (Math.pow(R, 2) + 1);
}

function chi(lambda, deltaF, R, phi, phi1, q, Cs) {
    var A1 = A1Calculation(deltaF, R);
    return Math.PI *(1 / 2 * Cs * Math.pow(lambda, 3) * Math.pow(q, 4) - lambda * Math.pow(q, 2) * (deltaF - A1 * Math.cos(2 * (phi - phi1))));
}

function CTF(Q, lambda, deltaF, R, phi, phi1, q, Cs) {
    var chiq = chi(lambda, deltaF, R, phi, phi1, q, Cs);
    return -(Math.sqrt(1 - Math.pow(Q, 2)) * Math.sin(chiq) + Q * Math.cos(chiq));
}

function drawCTFPlot(Cs, deltaF, R, phi1, phi, lambda, intensity) {
    // Draws the CTF plot
    var instance = functionPlot({
        target: '#plot',
        yAxis: {domain: [-1, 1]},
        xAxis: {domain: [0, 0.18]},
        data: [{
            graphType: 'polyline',
            fn: function (scope) {
            // scope.x = Number
                var x = scope.x
                return Gau(50, x) * CTF(intensity, lambda, deltaF, R, phi, phi1, x, Cs);
            }
        }]
    })
}

function drawDiffractogram(canvas, Q, lambda, deltaF, R, phi, phi1, Cs) {
    // Draws a diffractogram
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.filter = 'blur(0px)';
    ctx.fillStyle = ctx.createPattern(document.getElementById("noise"), "no-repeat")
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var maxDistance = Math.sqrt(Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2))
    var rotationRadians = phi1 * Math.PI / 180;
    /* Alternative, pixel-by-pixel drawing approach
    for (x = 0; x < canvas.width; x=x+2) {
        for (y = 0; y < canvas.height; y=y+2) {
            var distance = Math.sqrt(Math.pow((canvas.width / 2 - x) / Math.sqrt(R), 2) + Math.pow((canvas.height / 2 - y) * Math.sqrt(R), 2));
            var q = distance / maxDistance * 0.18;
            var pixelIntensity = Math.abs((Gau(50, q) * CTF(Q, lambda, deltaF, R, phi, phi1, q, Cs)));
            ctx.fillStyle = 'rgba(0, 0, 0, ' + pixelIntensity + ')'
            ctx.fillRect(x, y, 2, 2);
        }
    }*/
    for (i = 0; i < maxDistance; i++) {
        var q = i / maxDistance * 0.18;
        var ellipseIntensity = Math.abs(Gau(50, q) * CTF(Q, lambda, deltaF, R, phi, phi1, q, Cs));
        drawEllipse(i, R, phi1, ellipseIntensity)
    }
}

function drawEllipse(radius, R, rotation, intensity) {
    // Draws an ellipse
    var rotationRadians = rotation * Math.PI / 180;
    var canvas = document.getElementById('image');
    var ctx = canvas.getContext('2d');
    ctx.filter = 'blur(2px)';
    ctx.strokeStyle = 'rgba(0, 0, 0, ' + intensity + ')';
    ctx.beginPath();
    ctx.ellipse(canvas.width / 2, canvas.height / 2, radius * Math.sqrt(R), radius / Math.sqrt(R), rotationRadians, 0, 2 * Math.PI);
    ctx.stroke();
}

function Gau(B, q) {
    // the Gaussian approximation of amplitude decay
    return Math.exp(-B * Math.pow(q, 2));
}

function Gsc(alpha, Cs, lambda, q, deltaF) {
    // spatial coherence amplitude decay
    return Math.exp(-Math.pow(Math.PI, 2) * Math.pow(alpha, 2) * Math.pow((Cs * Math.pow(lambda, 2) * Math.pow(q, 3) - deltaF * q), 2));
}

function Gtc(Cc, lambda, deltaE, E, q) {
    // voltage temporal coherence amplitude decay
    return Math.exp(-Math.pow(Math.PI, 2) / 2 * Math.pow(Cc, 2) * Math.pow(lambda, 2) * Math.pow(deltaE / E, 2) * Math.pow(q, 4));
}

function lambdaCalculation(voltage) {
    // electron wavelength
    return 12.27 / Math.sqrt(voltage * (1 + 0.000000978 * voltage));
}