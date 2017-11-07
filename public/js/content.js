/****
*This file added buttons to the DOM and handles button events
* in order to simulate app's user interface
****/

var popped = 'none';

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

function setPopContentCSS(){
    $("object").last().css({
        "background-color":"white",
        "height":"46vh",
        "border":"5px",
        "border-style":"solid"
    });
}

//add function to Q/A button
function qaClicked(){
    $("#qabtn").click(function(){
        if(popped != 'QA'){
            $("#popContent").html('<object class="popped" type="text/html" data="QandA.html" ></object>');
            setPopContentCSS();
            popped = 'QA';          
        }else{
            $("object").last().remove();
            popped = 'none';
        }
    });
}

//add function to Example and Application button
function exampleClicked(){
    $("#examplebtn").click(function(){
        if(popped != 'example'){
            $("#popContent").html('<object class="popped" type="text/html" data="exampleAndApplication.html" ></object>');
            setPopContentCSS();            
            popped = 'example'
        }else{
            $("object").last().remove();
            popped = 'none';
        }
    });
}

//add function to Homework button
function homeworkClicked(){
    $("#homeworkbtn").click(function(){
        if(popped != 'homework'){
            $("#popContent").html('<object class="popped" type="text/html" data="homework.html" ></object>');
            setPopContentCSS();            
            popped = 'homework';
        }else{
            $("object").last().remove();
            popped = 'none';
        }
    });
}

//add function to User's Curriculum button
function ucClicked(){
    $("#curriculumbtn").click(function(){
        if(popped != 'curriculum'){
            $("#popContent").html('<object class="popped" type="text/html" data="syllabus.html" ></object>');
            setPopContentCSS();            
            popped = 'curriculum';
        }else{
            $("object").last().remove();
            popped = 'none';
        }
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
    if(popped != 'learningmode'){
        $("#popContent").html('<object class="popped" type="text/html" data="learningmode.html" ></object>');
        setPopContentCSS();        
        popped = 'learningmode';
    } else {
        $("object").last().remove();
        popped = 'none';
    };
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