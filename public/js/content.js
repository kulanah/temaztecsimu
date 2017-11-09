/****
*This file added buttons to the DOM and handles button events
* in order to simulate app's user interface
****/

var popped = '#popplaceholder';

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
}

function swapPosition(id1, id2){
    let temptop = $(id1).css('top');
    let templeft = $(id1).css('left');
    $(id1).css('top', $(id2).css('top'));
    $(id1).css('left', $(id2).css('left'));
    $(id2).css('top', temptop);
    $(id2).css('left', templeft);
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
        if(isVisible("lecturediv") === false){
            $("#lecturediv").show();
        }else{
            $("#lecturediv").hide();
        }
    });
}

//toggle open and close notepad feature when clicking Notepad button
function notepadClicked(){
    $("#notepadbtn").click(function(){
        if(isVisible("notepad") === false){
            $("#notepad").show();
        }else{
            $("#notepad").hide();
        }
    });
}

/*function toggleVideo(state) {
    // function by Rob W found at https://stackoverflow.com/questions/8667882/how-to-pause-a-youtube-player-when-hiding-the-iframe
    // modified to not autoplay video
    // currently unused, included in case we decide to embed videos
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("video");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : '';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}*/

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
    if(location.search.includes('introduction')){
        disableButton($('#controlbtn'));
        disableButton($('#homeworkbtn'));
        console.log('Introduction Mode')
    } else if (location.search.includes('assessment')){
        disableButton($('#lecturebtn'));
        disableButton($('#examplebtn'));
        disableButton($('#qabtn'));
        disableButton($('#columnbtn'));
        console.log('Self-Assessment Mode')
    } else {
        console.log('Learning Mode');
    }
}

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