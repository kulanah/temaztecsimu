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
}

//add function to Q/A button
function qaClicked(){
    $("#qabtn").click(function(){
        if(popped != 'QA'){
            $("#popContent").html('<object class="popped" type="text/html" data="QandA.html" ></object>');
            $("object").last().css({
                //"position":"absolute",
                //"top":"100px",
                "background-color":"white",
                "height":"46vh",
                "border":"5px",
                "border-style":"solid"
            });
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
            $("object").last().css({
                //"position":"absolute",
                //"top":"100px",
                "background-color":"white",
                "height":"46vh",
                "border":"5px",
                "border-style":"solid"
            });
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
            $("object").last().css({
                //"position":"absolute",
                //"top":"100px",
                "background-color":"white",
                "height":"46vh",
                "border":"5px",
                "border-style":"solid"
            });
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
            $("object").last().css({
                //"position":"absolute",
                //"top":"100px",
                "background-color":"white",
                "height":"46vh",
                "border":"5px",
                "border-style":"solid"
            });
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

function toggleVideo(state) {
    // function by Rob W found at https://stackoverflow.com/questions/8667882/how-to-pause-a-youtube-player-when-hiding-the-iframe
    // modified to not autoplay video
    // currently unused, included in case we decide to embed videos
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("video");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : '';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

function learningModePopup(){
    if(popped != 'learningmode'){
        $("#popContent").html('<object class="popped" type="text/html" data="learningmode.html" ></object>');
        $("object").last().css({
            "background-color":"white",
            "height":"46vh",
            "border":"5px",
            "border-style":"solid"
        });
        popped = 'learningmode';
    } else {
        $("object").last().remove();
        popped = 'none';
    };
}

function disableButton(button){
    button.css('background','gray');
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