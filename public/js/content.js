/****
*This file handles button events
* for the eight bottom buttons on the right
****/

var popped = '#popplaceholder';
let currentCh = 0;
let fullscreen = false;
let lectureTop = 0;
let lectureLeft = 0;
/*let lectureWidth = 0;
let lectureHeight = 0;*/
let simulatorMode = 'learning';
let introStep = -1;

//register all the events to targets when docuemnts are all loaded
function prepareContent(){
    lectureClicked();
    qaClicked();
    exampleClicked();
    homeworkClicked();
    ucClicked();
    notepadClicked();
    helpClicked();
    labSessionClicked();
    modeAdjustment();
    closeNotes();
    copyNotes();
    saveNotes();
    showOverview();
    addLectures();
    initializeChapter();
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
    if(popped === '#examples'){
        $('#examplepopup').show();
    } else {
        $('#examplepopup').hide();
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
            window.speechSynthesis.cancel();
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

function helpClicked(){
    $('#helpbtn').click(function(){
        if(isVisible('generalhelppopup') && $('#generalhelpcontent').prop('src').includes('Functions.htm')){
            $('#generalhelppopup').hide();
        } else {
            $('#generalhelpcontent').prop('src','public/docs/OEMP Functions.htm');
            $('#generalhelppopup').css('z-index', zcounter);
            zcounter++;
            $('#generalhelppopup').show();
        }
    })
    $('#helpmenubutton').click(function(){
        if(isVisible('generalhelppopup') && $('#generalhelpcontent').prop('src').includes('Functions.htm')){
            $('#generalhelppopup').hide();
        } else {
            $('#generalhelpcontent').prop('src','public/docs/OEMP Functions.htm');
            $('#generalhelppopup').css('z-index', zcounter);
            zcounter++;
            $('#generalhelppopup').show();
        }
    })
}

function labSessionClicked(){
    $('#labbtn').click(function(){
        if(isVisible('generalhelppopup') && $('#generalhelpcontent').prop('src').includes('labsession.html')){
            $('#generalhelppopup').hide();
        } else {
            $('#generalhelpcontent').prop('src','public/html/psulabsession.html');
            $('#generalhelppopup').css('z-index', zcounter);
            zcounter++;
            $('#generalhelppopup').show();
        }
    })
}

function toggleVideo(state) {
    // function by Rob W found at https://stackoverflow.com/questions/8667882/how-to-pause-a-youtube-player-when-hiding-the-iframe
    // modified to not autoplay video, not currently used
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
        disableButton($('#homeworkbtn'));
        $('#intropopup').show();
        introStep = 0;
        advanceIntro();
        console.log('Introduction Mode');
        simulatorMode = 'introduction';
    } else if (location.search.includes('mode=self-assessment')){
        disableButton($('#lecturebtn'));
        disableButton($('#examplebtn'));
        disableButton($('#qabtn'));
        disableButton($('#columnbtn'));
        console.log('Self-Assessment Mode');
        simulatorMode = 'self-assessment';
    } else {
        console.log('Learning Mode');
    }
}

function getSimulatorMode(){
    return simulatorMode;
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
        textToSave = textToSave.replace(/\n/g, '\r\n');
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
        $('#temlecture').attr('src', 'public/html/ch1v1.html')
        currentCh = 0;
        $('#speakernotesplay').prop('disabled', true);
    })
}

let pptsrcs = [
    'https://onedrive.live.com/embed?resid=4438293664F5F344%21157&authkey=ANhP2NnjGf3uE0c&em=2',
    'https://onedrive.live.com/embed?resid=4438293664F5F344%21167&authkey=AH5tGo5jMAE6Tto&em=2',
    'https://onedrive.live.com/embed?resid=4438293664F5F344%21189&authkey=AKDMMdxseBnzZd4&em=2',
    'https://onedrive.live.com/embed?resid=4438293664F5F344%21171&authkey=AMYBQiOoIw1f8xA&em=2',
    'https://onedrive.live.com/embed?resid=4438293664F5F344%21169&authkey=AJO7eA8rvJVuRE4&em=2',
    'https://onedrive.live.com/embed?resid=4438293664F5F344%21145&authkey=ADHOH-YI97IM8VY&em=2',
    'https://onedrive.live.com/embed?resid=4438293664F5F344%21204&authkey=AJZ5j-T659F-odg&em=2',
    'https://onedrive.live.com/embed?resid=4438293664F5F344%21208&authkey=AApOCyFB1WFHLyE&em=2',
    'https://onedrive.live.com/embed?resid=4438293664F5F344%21210&authkey=AP-0QHOM68t8_4Q&em=2'
]

function addLectures(){
    // Create the buttons to switch between lectures plus the fullscreen button
    /*let srcs = ['https://docs.google.com/presentation/d/e/2PACX-1vTmZNiWgLNOUc-i9XLeroyMTG-SWL-OlOxI4VKVU9_2n6ewXmonU5pc-wjG6x-chkNuXH4tMC59X4-N/embed?start=false&loop=false&delayms=3000', //PPT Online Ch1: 'https://onedrive.live.com/embed?cid=4438293664F5F344&resid=4438293664F5F344%21126&authkey=ABwysJ8rPoa5qc0&em=2'
    'https://cemnpdx.github.io/Reveal/HTML/Chapter%202.html',
    '',
    '',
    'https://docs.google.com/presentation/d/e/2PACX-1vSbZCb6AR5mZNqE9CwO5FDdpM3QVJXu0CcwaoYcbYlQaziOnAYDz6pMwaVNKl_kp6gaZkLWrEojJVHc/embed?start=false&loop=false&delayms=3000']
    //Embed simulator into itself: 'https://onedrive.live.com/embed?cid=4438293664F5F344&resid=4438293664F5F344%21120&authkey=AHtG2LBmRaeo0KQ&em=2'
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
    }*/

    // Fullscreen button only functions properly in Chrome - other browsers use different prefixes for the Fullscreen API
    $('#fullscreenbtn').on('click', function(){
        if(document.webkitFullscreenElement === document.getElementById('lecturediv')){
            leaveFullscreen();
        } else {
            enterFullscreen(document.getElementById('lecturediv'));
        }
    });
    document.onwebkitfullscreenchange = function ( event ) { 
        if(document.webkitFullscreenElement === document.getElementById('lecturediv')){
            lectureLeft = $('#lecturediv').css('left');
            lectureTop = $('#lecturediv').css('top');
            //lectureWidth = $('#temlecture').css('width');
            //lectureHeight = $('#temlecture').css('height');
            $('#lecturediv').css({
                'left': '0px',
                'top': '0px'
            })
            $('#temlecture').css({
                'width': '99.4vw',
                'height': '94.4vh'
            })
        } else {
            $('#lecturediv').css({
                'left': lectureLeft,
                'top': lectureTop
            })
            $('#temlecture').css({
                'width': '40vw',
                'height': '57.5vh'
            })
        }
    };
    for(i = 0; i < pptsrcs.length; i++){
        if(pptsrcs[i] != ''){
            let btn = document.createElement('button');
            let src = pptsrcs[i];
            $(btn).attr('id', 'ch' + i + 'pptbtn')
            $(btn).addClass('lecturetab');
            $(btn).css('margin', '2px');
            $(btn).text('Chapter ' + i);
            $(btn).click(function(){
                $('#temlecture').attr('src', src);
                currentCh = $(btn).text().split(' ')[1];
                if(currentCh === '0'){
                    $('#speakernotesplay').prop('disabled', true);
                } else {
                    $('#speakernotesplay').prop('disabled', false);
                }
            });
            $('#lecturediv').append(btn);
        }
    }
}

// Enter fullscreen mode
function enterFullscreen(element) {
    // Check which implementation is available
    var requestMethod = element.requestFullscreen ||
                        element.webkitRequestFullscreen ||
                        element.mozRequestFullScreen ||
                        element.msRequestFullscreen;
    if( requestMethod ) {
        requestMethod.apply( element );
    }
}

// Exit fullscreen mode
function leaveFullscreen() {
    var requestMethod = document.exitFullscreen ||
                        document.webkitExitFullscreen ||
                        document.mozExitFullScreen ||
                        document.msExitFullscreen;
    if( requestMethod ) {
        requestMethod.apply( document );
    }
}

function initializeChapter(){
    if(location.search.includes('ch=')){
        setChapter(location.search.split('ch=')[1].split('&')[0]);
    }
}

function setChapter(chNum){
    // Set the lecture and homework windows to the appropriate chapter if the user selected a chapter 
    currentCh = chNum;
    $('#temlecture').ready(function(){
        let src = pptsrcs[currentCh];
        if(src != ''){
            $('#temlecture').attr('src', src);
            if (currentCh !== '0'){
                $('#speakernotesplay').prop('disabled', false);
            }
            //$('#lecturediv').show();
        }
    });
    if(currentCh > 1 && currentCh < 8 && currentCh != 6){
        $('#homeworkiframe').attr('src', 'public/html/hw' + currentCh + '.html');
    }
}

function setExample(exampleSrc){
    $('#examplecontent').attr('src', exampleSrc);
}