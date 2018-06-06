/****
*This file handles button events
* for the eight bottom buttons on the right
****/

var popped = '#popplaceholder';
let currentSection = 1;
let currentCh = 0;
let fullscreen = false;
let lectureTop = 0;
let lectureLeft = 0;
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
        $('#chapterselect').val(-1);
    })
}

let pptsrcs = [
    [],
    [
        'https://onedrive.live.com/embed?resid=4438293664F5F344%21157&authkey=ANhP2NnjGf3uE0c&em=2',
        'https://onedrive.live.com/embed?resid=4438293664F5F344%21167&authkey=AH5tGo5jMAE6Tto&em=2',
        'https://onedrive.live.com/embed?resid=4438293664F5F344%21189&authkey=AKDMMdxseBnzZd4&em=2',
        'https://onedrive.live.com/embed?resid=4438293664F5F344%21171&authkey=AMYBQiOoIw1f8xA&em=2',
        'https://onedrive.live.com/embed?resid=4438293664F5F344%21169&authkey=AJO7eA8rvJVuRE4&em=2',
        'https://onedrive.live.com/embed?resid=4438293664F5F344%21145&authkey=ADHOH-YI97IM8VY&em=2',
        'https://onedrive.live.com/embed?resid=4438293664F5F344%21204&authkey=AJZ5j-T659F-odg&em=2',
        'https://onedrive.live.com/embed?resid=4438293664F5F344%21208&authkey=AApOCyFB1WFHLyE&em=2'
    ],
    [
        '',
        'https://onedrive.live.com/embed?resid=4438293664F5F344%21210&authkey=AP-0QHOM68t8_4Q&em=2',
        'https://onedrive.live.com/embed?resid=4438293664F5F344%21218&authkey=AJJGlgQX6I5iZZQ&em=2',
        '',
        'https://onedrive.live.com/embed?resid=4438293664F5F344%21219&authkey=ACwN_CMzEu9sk88&em=2'
    ],
    [
        ''
    ],
    [
        ''
    ]
]

function addLectures(){
    // Create the buttons to switch between lectures plus the fullscreen button
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
    for(let i = 0; i < pptsrcs.length; i++){
        if(pptsrcs[i].length > 1){
            $('#sectionselect').append('<option value=' + i + '>Section ' + i + '</option>')
        }
        /*if(pptsrcs[1][i] != ''){
            let btn = document.createElement('button');
            let src = pptsrcs[1][i];
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
        }*/
    }
    $('#sectionselect').on('change', function(){
        setSection($('#sectionselect').val());
    });
    $('#chapterselect').on('change', function(){
        if($('#chapterselect').val() != -1){
            setChapter($('#sectionselect').val(), $('#chapterselect').val());
        }
    });
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
    if(location.search.includes('chapter=')){
        setChapter(location.search.split('section=')[1].split('&')[0], location.search.split('chapter=')[1].split('&')[0]);
    }
}

function setSection(sNum){
    // Set the section select to the specified value and populate the chapter select appropriately
    $('#sectionselect').val(sNum)
    $('#chapterselect').empty();
    $('#chapterselect').append('<option value="-1">Select a chapter:</option>')
    for(let i = 0; i < pptsrcs[$('#sectionselect').val()].length; i++){
        if(pptsrcs[$('#sectionselect').val()][i] != ''){
            $('#chapterselect').append('<option value=' + i + '>Chapter ' + i + '</option>')
        }
    }
    if (pptsrcs[$('#sectionselect').val()].length < 1){
        $('#chapterselect').prop('disabled', true);
    } else {
        $('#chapterselect').prop('disabled', false);
    }
}

function setChapter(sNum, chNum){
    // Set the lecture and homework windows to the appropriate chapter if the user selected a chapter
    currentSection = sNum;
    setSection(sNum);
    currentCh = chNum;
    $('#chapterselect').val(chNum)
    $('#temlecture').ready(function(){
        let src = pptsrcs[currentSection][currentCh];
        if(src != ''){
            $('#temlecture').attr('src', src);
            if (currentCh !== '0'){
                $('#speakernotesplay').prop('disabled', false);
            } else {
                $('#speakernotesplay').prop('disabled', true);
            }
        }
    });
    if(currentSection == 1 && currentCh > 1 && currentCh < 8 && currentCh != 6){
        $('#homeworkiframe').attr('src', 'public/html/hw' + currentCh + '.html');
    }
}

function setExample(exampleSrc){
    $('#examplecontent').attr('src', exampleSrc);
}