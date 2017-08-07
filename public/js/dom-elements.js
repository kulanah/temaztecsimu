var beamDiagDiv= document.createElement("div");
beamDiagDiv.id = "beamDiagDiv";
beamDiagDiv.width = 600;
beamDiagDiv.height = 1200;
beamDiagDiv.style.position = "fixed";
beamDiagDiv.style.top = 0 + "px";
beamDiagDiv.style.left = 0 + "px";
beamDiagDiv.style.opacity = 100;
document.body.appendChild(beamDiagDiv);

var beamDiagImg= document.createElement("img");
beamDiagImg.id = "beamDiagImg";
beamDiagImg.width = 600;
beamDiagImg.height = 1200;
beamDiagImg.style.position = "fixed";
beamDiagImg.style.top = 0 + "px";
beamDiagImg.style.left = 0 + "px";
beamDiagDiv.appendChild(beamDiagImg);

var beamDiag = document.createElement("canvas");
beamDiag.id = "beamDiag";
beamDiag.width = 1920;
beamDiag.height = 1200;
beamDiag.style.position = "fixed";
beamDiag.style.top = 13 + "px";
beamDiag.style.left = 39 + "px";
beamDiagDiv.appendChild(beamDiag);

var beamLabels = document.createElement("canvas");
beamLabels.id = "beamLabels";
beamLabels.width = 1920;
beamLabels.height = 1200;
beamLabels.style.position = "fixed";
// beamLabels.style.background = "white";
beamLabels.style.top = 13 + "px";
beamLabels.style.left = 39 + "px";
beamDiagDiv.appendChild(beamLabels);