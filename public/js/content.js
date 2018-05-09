/****
*This file handles button events
* for the eight bottom buttons on the right
****/

var popped = '#popplaceholder';
let currentCh = 0;
let fullscreen = false;
let simulatorMode = 'learning';
let introStep = -1;

//register all the events to targets when docuemnts are all loaded
function prepareContent(){
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
    // Set the homework window to the appropriate chapter if the user selected a chapter 
    currentCh = chNum;
    if(currentCh > 1 && currentCh < 8 && currentCh != 6){
        $('#homeworkiframe').attr('src', 'public/html/hw' + currentCh + '.html');
    }
}