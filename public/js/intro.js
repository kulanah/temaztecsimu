let introInterval;

function advanceIntro(){
    switch(introStep){
        case 0:
            if(!isVisible('basesetup')){
                $('#setupbtn').css('border', '2px solid skyblue');
                $('#setupbtn').css('box-shadow', '0 1px 0 rgba(255, 255, 255, .5) inset, 0 -1px 0 rgba(255, 255, 255, .1) inset, 0 4px 0 skyblue, 0 4px 2px rgba(0, 0, 0, .5)');
                $('#setupbtn').on('click', introElementClick)
                break;
            }
            introStep++;
        case 1:
            $('#setupbtn').css('box-shadow', '0 1px 0 rgba(255, 255, 255, .5) inset, 0 -1px 0 rgba(255, 255, 255, .1) inset, 0 4px 0 #001022, 0 4px 2px rgba(0, 0, 0, .5)');
            if(!isVisible('microControls')){
                $('#controlbtn').css('border', '2px solid skyblue');
                $('#controlbtn').css('box-shadow', '0 1px 0 rgba(255, 255, 255, .5) inset, 0 -1px 0 rgba(255, 255, 255, .1) inset, 0 4px 0 skyblue, 0 4px 2px rgba(0, 0, 0, .5)');
                $('#controlbtn').on('click', introElementClick)
                break;
            }
            introStep++;
        case 2:
            $('#controlbtn').css('box-shadow', '0 1px 0 rgba(255, 255, 255, .5) inset, 0 -1px 0 rgba(255, 255, 255, .1) inset, 0 4px 0 #001022, 0 4px 2px rgba(0, 0, 0, .5)');
            if(!colopen){
                $('#leftcolumnvacuum').attr('src', './public/img/vacuummenuclosedbluerectangle.png')
                $('#colvalves').on('click', introElementClick)
                break;
            }
            introStep++;
        case 3:
            if(Number(beamslider.val()) > 3){
                console.log('Lower spot size')
                $('#controlsLeft').css('background', 'skyblue');
                $('#buttonl3').on('click', introElementClickRepeat);
                break;
            }
            introStep++;
            introInterval = setInterval(advanceIntro, 10);
        case 4:
            if(setupbox.maskX < 250 || setupbox.maskX > 268 || setupbox.maskY < 255 || setupbox.maskY > 282){
                console.log('Center beam')
                $('#controlsLeft').css('background', 'skyblue');
                break;
            }
            $('#controlsLeft').css('background', '');
            introStep = 5;
        case 5:
            if(setupbox.defocus !== 0){
                $('#controlsRight').css('background', 'skyblue');
                break;
            }
            introStep = 6
        case 6:
            if(setupbox.zooms[setupbox.mag] !== 34000){
                $('#controlsRight').css('background', 'skyblue');
                break;
            }
            introStep = 7;
        case 7:
            $('#controlsRight').css('background', '');
            if(setupbox.calculateRadius() > 6.4){
                $('#controlsLeft').css('background', 'skyblue');
                break;
            }
            introStep = 8;
        case 8:
            let distanceFromCenter = Math.sqrt((setupbox.maskX - 259) ** 2 + (setupbox.maskY - 268.5) ** 2)
            if(distanceFromCenter > 6.4){
                $('#controlsLeft').css('background', 'skyblue');
                break;
            }
            introStep = 9;
        case 9:
            $('#controlsLeft').css('background', '');
            if(setupbox.zooms[setupbox.mag] !== 125000){
                $('#controlsRight').css('background', 'skyblue');
                break;
            }
            introStep = 10;
        case 10:
            $('#controlsRight').css('background', '');
            if(setupbox.calculateRadius() < 7.5){
                $('#controlsLeft').css('background', 'skyblue');
                break;
            }
            introStep = 11;
        case 11:
            $('#controlsLeft').css('background', '');
            clearInterval(introInterval);
    }
}

function introElementClick(event){
    $(event.target).off('click', introElementClick);
    $(event.target).css('border', '');
    introStep++;
    advanceIntro();
}

function introElementClickRepeat(event){
    $(event.target).off('click', introElementClickRepeat);
    $(event.target).css('border', '');
    advanceIntro();
}