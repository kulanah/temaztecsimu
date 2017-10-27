/****
*This file added buttons to the DOM and handles button events
* in order to simulate app's user interface
****/

var hasVideoScreen = false;
var popped = 'none';

//register all the events to targets when docuemnts are all loaded
function main(){
    lectureClicked();
    qaClicked();
    exampleClicked();
    homeworkClicked();
    ucClicked();
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
                "height":"45vh",
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
                "height":"45vh",
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
                "height":"45vh",
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
                "height":"45vh",
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
        if(hasVideoScreen === false){
            $("#lecturediv").show();
            hasVideoScreen = true;
        }else{
            $("#lecturediv").hide();
            hasVideoScreen = false;
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

$(document).ready(main);
