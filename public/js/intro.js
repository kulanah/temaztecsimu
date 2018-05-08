function advanceIntro(){
    switch(introStep){
        case 0:
            $('#setupbtn').css('border', '2px solid skyblue');
            $('#setupbtn').on('click', introElementClick)
            break;
        case 1:
            if(!isVisible('microControls')){
                $('#controlbtn').css('border', '2px solid skyblue');
                $('#controlbtn').on('click', introElementClick)
                break;
            }
            introStep++;
        case 2:
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
        case 4:
            if(setupbox.maskX < 250 || setupbox.maskX > 268 || setupbox.maskY < 255 || setupbox.maskY > 282){
                console.log('Center beam')
                $('#controlsLeft').css('background', 'skyblue');
                $('body')[0].addEventListener('mousemove', introConditionCheck);
                break;
            }
            $('#controlsLeft').css('background', '');
            introStep++;
        case 5:
            $('#controlsRight').css('background', 'skyblue');
            $('#buttontop1r').on('click', introElementClick)
            break;
        case 6:
            /*if(setupbox.zooms[setupbox.mag] !== 34000){
                $('#controlsRight').css('background', 'skyblue');
                $('body')[0].addEventListener('mouseup', introConditionCheck);
                break;
            }*/
            introStep++;
        case 7:
            $('#controlsRight').css('background', '');
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

function introConditionCheck(event){
    advanceIntro();
}