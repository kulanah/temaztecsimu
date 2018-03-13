/****
*This file handles button events
* for the six bottom buttons on the right
****/

var popped = '#popplaceholder';
let currentCh = 0;
let fullscreen = false;
let lectureTop = 0;
let lectureLeft = 0;
let lectureWidth = 0;
let lectureHeight = 0;

//register all the events to targets when docuemnts are all loaded
function prepareContent(){
    lectureClicked();
    qaClicked();
    exampleClicked();
    homeworkClicked();
    ucClicked();
    notepadClicked();
    modeAdjustment();
    closeNotes();
    copyNotes();
    saveNotes();
    showOverview();
    showWIP();
    addLectures();
    //incrementSlideCounter();
    //setLecture();
}

// Keep the popup position and dimensions consistent across content
function swapPosition(id1, id2){
    let temptop = $(id1).css('top');
    let templeft = $(id1).css('left');
    let tempz = $(id1).css('z-index');
    let tempwidth = $(id1).children().css('width');
    let tempheight = $(id1).children().css('height');
    
    $(id1).css('top', $(id2).css('top'));
    $(id1).css('left', $(id2).css('left'));
    $(id1).css('z-index', $(id2).css('z-index'));
    $(id1).children().css('width', $(id2).children().css('width'));
    $(id1).children().css('height', $(id2).children().css('height'));

    $(id2).css('top', temptop);
    $(id2).css('left', templeft);
    $(id2).css('z-index', tempz);
    $(id2).children().css('width', tempwidth);
    $(id2).children().css('height', tempheight);
}

function popContentDisplay(id){
    if(popped != id){
        swapPosition(id, popped);
        popped = id; 
    }else{
        swapPosition(id, '#popplaceholder')
        popped = '#popplaceholder';
    }
}

//add function to Q/A button
function qaClicked(){
    $("#qabtn").click(function(){
        popContentDisplay('#qanda');
    });
}

//add function to Example and Application button
function exampleClicked(){
    $("#examplebtn").click(function(){
        popContentDisplay('#examples');
    });
}

//add function to Homework button
function homeworkClicked(){
    $("#homeworkbtn").click(function(){
        popContentDisplay('#homework');
    });
}

//add function to User's Curriculum button
function ucClicked(){
    $("#curriculumbtn").click(function(){
        popContentDisplay('#curriculum');
    });
}

//toggle open and close video when clicking Lecture button
function lectureClicked(){
    $("#lecturebtn").click(function(){
        if(!isVisible("lecturediv")){
            $("#lecturediv").show();
        }else{
            $("#lecturediv").hide();
            toggleVideo('hide');
        }
    });
}

//toggle open and close notepad feature when clicking Notepad button
function notepadClicked(){
    $("#notepadbtn").click(function(){
        if(!isVisible("notepad")){
            $("#notepad").show();
            $("#notes").focus();
        }else{
            $("#notepad").hide();
        }
    });
}

function toggleVideo(state) {
    // function by Rob W found at https://stackoverflow.com/questions/8667882/how-to-pause-a-youtube-player-when-hiding-the-iframe
    // modified to not autoplay video
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("lecturediv");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : '';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

// Disable features in certain modes, direct users seeking those features to learning mode
function learningModePopup(){
    popContentDisplay('#learningmode');
}

function disableButton(button){
    button.css({
        'background':'linear-gradient(rgb(161, 161, 161), rgb(140, 140, 140))',
        'box-shadow':'0 1px 0 rgba(255, 255, 255, .5) inset, 0 -1px 0 rgba(255, 255, 255, .1) inset, 0 4px 0 rgb(112, 112, 112), 0 4px 2px rgba(0, 0, 0, .5)'
    });
    button.off('click');
    button.click(function(){
        learningModePopup();
    });
}

function modeAdjustment(){
    if(location.search.includes('mode=introduction')){
        disableButton($('#controlbtn'));
        disableButton($('#homeworkbtn'));
        console.log('Introduction Mode')
    } else if (location.search.includes('mode=self-assessment')){
        disableButton($('#lecturebtn'));
        disableButton($('#examplebtn'));
        disableButton($('#qabtn'));
        disableButton($('#columnbtn'));
        console.log('Self-Assessment Mode')
    } else {
        console.log('Learning Mode');
    }
}

// Add functionality to notepad buttons
function closeNotes(){
    $('#closenotes').click(function(){
        $("#notepad").hide();        
    });
}

function copyNotes(){
    $('#copynotes').click(function(){
        $('#notes').select();
        document.execCommand('copy');
    });
}

function saveNotes(){
    $('#downloadnotes').click(function(){
        // Function based on saveTextAsFile() function from https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
        var textToSave = document.getElementById("notes").value;
        var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
        var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
        var date = new Date();
        var fileNameToSaveAs = "TEMnotes" + (date.getMonth() + 1) + "-" + date.getDate();
     
        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        downloadLink.href = textToSaveAsURL;
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
     
        downloadLink.click();
    });
}

function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}

function showOverview(){
    $('#overviewbtn').click(function(){
        $('#temlecture').attr('src', 'https://www.youtube.com/embed/DL0gA-sE2Xk?enablejsapi=1')
        currentCh = 0;
        $('#speakernotesplay').prop('disabled', true);
    })
}

function showWIP(){
    $('#wipbtn').click(function(){
        $('#temlecture').attr('src', 'https://s3-us-west-2.amazonaws.com/cemn-upload-image/TEMOverviewFixed.mp4')
        currentCh = 0;
        $('#speakernotesplay').prop('disabled', true);
    })
}

function addLectures(){
    // Create the buttons to switch between lectures plus the fullscreen button
    let srcs = ['', 
    'https://cemnpdx.github.io/Reveal/HTML/Chapter%202.html',
    '',
    '',
    'https://docs.google.com/presentation/d/e/2PACX-1vQviXR-mHf40Xg8w09L5BWO_0or4DzmYFfrnCu1APE7DUgE4HX-l0vOoQBvn5Tk1M8jeaYfdUEbHOgl/embed?start=false&loop=false&delayms=60000']
    for(i = 1; i < srcs.length + 1; i++){
        if(srcs[i-1] != ''){
            let btn = document.createElement('button');
            let src = srcs[i-1];
            $(btn).attr('id', 'ch' + i + 'btn')
            $(btn).addClass('lecturetab');
            $(btn).css('margin', '2px');
            $(btn).text('Chapter ' + i);
            $(btn).click(function(){
                $('#temlecture').attr('src', src);
                currentCh = $(btn).text().split(' ')[1];
                $('#speakernotesplay').prop('disabled', false);
            });
            $('#lecturediv').append(btn);
        }
    }
    $('#fullscreenbtn').on('click', function(){
        fullscreen = !fullscreen;
        if(!fullscreen){
            $('#lecturediv').css({
                'left': lectureLeft,
                'top': lectureTop
            })
            $('#temlecture').css({
                'width': lectureWidth,
                'height': lectureHeight
            })
        } else {
            lectureLeft = $('#lecturediv').css('left');
            lectureTop = $('#lecturediv').css('top');
            lectureWidth = $('#temlecture').css('width');
            lectureHeight = $('#temlecture').css('height');
            $('#lecturediv').css({
                'left': '0px',
                'top': '0px'
            })
            $('#temlecture').css({
                'width': '99.4vw',
                'height': '94.4vh'
            })
        }
    });
    /*let audiosrcs = ['', 
    '',
    '',
    '',
    'http://slidespeech.com/s/b7Dt2mJQen/']
    for(i = 1; i < audiosrcs.length + 1; i++){
        if(audiosrcs[i-1] != ''){
            let btn = document.createElement('button');
            let src = audiosrcs[i-1];
            $(btn).attr('id', 'ch' + i + 'audiobtn')
            $(btn).addClass('lecturetab');
            $(btn).css('margin', '2px');
            $(btn).text('Chapter ' + i + ' with audio');
            $(btn).click(function(){
                //$('#temlecture').attr('src', src);
                window.open(src, 'ch' + i)
            });
            $('#lecturediv').append(btn);
        }
    }*/
}

function incrementSlideCounter(){
    $('#temlecture').load(function() {
        var eventlist = 'click dblclick \
                        blur focus focusin focusout \
                        keydown keypress keyup \
                        mousedown mouseenter mouseleave mousemove mouseover mouseout mouseup mousemove \
                        touchstart touchend touchcancel touchleave touchmove';
    
        var iframe = $('#temlecture').contents().find('html');
    
        // Bubble events to parent
        iframe.on(eventlist, function(event) {
            console.log('event')
            //$('html').trigger(event);
        });
    });
    /*$('#temlecture'[0].contentWindow).on('click', function(){
        console.log('clicked lecture')
        document.getElementById('slidenumber').value += 1;
    });*/
}

function setLecture(){
    // Set the lecture window to the appropriate chapter if the user selected a chapter
    if(location.search.includes('ch=')){
        let chNum = location.search.split('ch=')[1].split('&')[0];
        let chBtn = '#ch' + chNum + 'btn';
        if($(chBtn).length){
            $('#lecturediv').show();
            $(chBtn).trigger('click');
        }
    }
}