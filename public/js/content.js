/****
*This file handles button events
* for the six bottom buttons on the right
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
    showCh2Lecture();
    showCh5Lecture();
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

function showCh2Lecture(){
    $('#ch2btn').click(function(){
        $('#temlecture').attr('src', 'https://cemnpdx.github.io/Reveal/HTML/Chapter%202.html')
    })
}

function showCh5Lecture(){
    $('#ch5btn').click(function(){
        $('#temlecture').attr('src', 'https://docs.google.com/presentation/d/e/2PACX-1vQviXR-mHf40Xg8w09L5BWO_0or4DzmYFfrnCu1APE7DUgE4HX-l0vOoQBvn5Tk1M8jeaYfdUEbHOgl/embed?start=false&loop=false&delayms=60000')
    })
}