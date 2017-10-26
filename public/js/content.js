/****
*This file added buttons to the DOM and handles button events
* in order to simulate app's user interface
****/

var lastState = "";
var hasVideoScreen = false;
var QApopped = false;
var homeworkPopped = false;

//register all the events to targets when docuemnts are all loaded
function main(){
    clickedStart();
    lectureClicked();
    controlClicked();
    TEMClicked();
    qaClicked();
    exampleClicked();
    homeworkClicked();
    ucClicked();
}

//add function to Q/A button
function qaClicked(){
    $("#qabtn").click(function(){
        console.log("Clicked QA");
        if(QApopped === false){
            $("#popContent").html('<object class="popped" type="text/html" data="QandA.html" ></object>');
            $("object").last().css({
                //"position":"absolute",
                //"top":"100px",
                "background-color":"white",
                "height":"50vh",
                "border":"5px",
                "border-style":"solid"
            });
            QApopped = true;
            homeworkPopped = false;            
        }else{
            $("object").last().remove();
            QApopped = false;
        }
    });
}

//add function to Example and Application button
function exampleClicked(){
    var examplePopped = false;
    $("#example").click(function(){
        if(examplePopped === false){
            $("#popContent").html('<object class="popped" type="text/html" data="exampleAndApplication.html" ></object>');
            /*$("object").last().css({
                "position":"absolute",
                "top":"100px",
                "background-color":"white",
                "height":"500px",
                "border":"5px",
                "border-style":"solid"
            });*/
            examplePopped = true;
        }else{
            $("object").last().remove();
            examplePopped = false;
        }
    });
}

//add function to Homework button
function homeworkClicked(){
    $("#homeworkbtn").click(function(){
        console.log("Clicked HW");        
        if(homeworkPopped === false){
            $("#popContent").html('<object class="popped" type="text/html" data="homework.html" ></object>');
            $("object").last().css({
                //"position":"absolute",
                //"top":"100px",
                "background-color":"white",
                "height":"50vh",
                "border":"5px",
                "border-style":"solid"
            });
            homeworkPopped = true;
            QApopped = false;            
        }else{
            $("object").last().remove();
            homeworkPopped = false;
        }
    });
}

//add function to User's Curriculum button
function ucClicked(){
    var ucPopped = false;
    $("#uc").click(function(){
        if(ucPopped === false){
            $("#popContent").html('<object class="popped" type="text/html" data="uc.html" ></object>');
            $("object").last().css({
                "position":"absolute",
                "top":"100px",
                "background-color":"white",
                "height":"500px",
                "border":"5px",
                "border-style":"solid"
            });
            ucPopped = true;
        }else{
            $("object").last().remove();
            ucPopped = false;
        }
    });
}

//toggle open and close microscope when clicking microscope image
function TEMClicked(){
    var hasmicroscope = false;
    $("#TEM").click(function(){
        if(hasmicroscope === false){
            $("#em").css({
                "opacity":"0"
            });

            $("#TEM").css({
                "opacity":".2"
            });
            hasmicroscope = true;
        }else{
            $("#em").css({
                "opacity":"1"
            });
            $("#TEM").css({
                "opacity":"1"
            });
            hasmicroscope = false;
        }
    });
}

//toggle controls
function controlClicked(){
    var hasControls = false;
    $("#control").click(function(){
        if(hasControls === false){
            $("#content").append('<div id="twoControls"> \
                                    <img id="leftControl" src="images/controlPadL.png" alt="Image open error"> \
                                    <img id="rightControl" src="images/controlPadR.png" alt="Image open error"> \
                                  </div>');
            //reloacation the controls
            $("#twoControls").css({
                "position":"absolute",
                "top":"470px",
            });

            $("#leftControl").css({
                "position":"absolute",
                "width":"200px"
            });

            $("#rightControl").css({
                "position":"absolute",
                "left":"760px",
                "width":"200px"
            });

            hasControls = true;
        }else{
            $("#twoControls").remove();
            hasControls = false;
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
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("video");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : '';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

//register event based on button clicked and lastStates of that moment
function clickedStart(){
    $("#launcher").click(function(){
        $("#img").attr("src","images/contentImages/launcherStart.jpg");
        setTimeout(function(){
            $("#img").attr("src","images/contentImages/launcherInProgress.jpg");
        }, 500);
        setTimeout(function(){
            $("#img").attr("src","images/contentImages/opened.jpg");
        }, 2000);
        setTimeout(function(){
            $("#img").attr("src","images/contentImages/interfaceOpened.jpg");
            lastState = "interfaceOpened.jpg";
        }, 3000);
        $("#launcher").remove();
        //add digital button to the DOM
        var digitalSwitchButton = $('<button id="dsb" type="button" class="buttons">switcher</button>');
        $("#content").append(digitalSwitchButton);
        $("#dsb").css(
            {
                "top":"580px",
                "left":"440px",
                "width":"90px"
            }
        );
        //add TEM interface button to the DOM
        var TEMInterfaceButton = $('<button id="temB" type="button" class="buttons">TEMB</button>');
        $("#content").append(TEMInterfaceButton);
        $("#temB").css(
            {
                "top":"580px",
                "left":"625px",
                "width":"90px"
            }
        );

        //add select button and its event
        var selectButton = $('<button id="sel" type="button" class="buttons"></button>');
        $("#content").append(selectButton);
        $("#sel").css(
            {
                "top":"505px",
                "left":"880px",
                "height":"2px",
                "width":"60px"

            }
        );

        var selectPopped = false;
        var vobAppended = false;
        $("#sel").click(function(){
            if(selectPopped === false){
                console.log("0");
                $("#img").attr("src","images/contentImages/selectPopped.jpg");
                //Vaccum Overview Select button
                if(!vobAppended){
                    var vOverviewButton = $('<button id="vob" type="button" class="buttons"></button>');
                    $("#content").append(vOverviewButton);
                    $("#vob").css(
                        {
                            "top":"488px",
                            "left":"880px",
                            "height":"2px",
                            "width":"60px"
                        }
                    );
                    $("#vob").click(function(){
                        $("#img").attr("src","images/contentImages/VaccumOverviewSelected.jpg");
                        lastState = "VaccumOverviewSelected.jpg";
                    });
                }
                vobAppended = true;
                selectPopped = true;
            }else{
                $("#img").attr("src","images/contentImages/"+lastState);
                $("button").last().remove();// has problem here
                selectPopped = false;
                vobAppended = false;
                console.log("1");
            }

        });


        //add cValveClosed button and its event
        var cvClosedButton = $('<button id="cv" type="button" class="buttons"></button>');
        $("#content").append(cvClosedButton);
        $("#cv").css(
            {
                "top":"140px",
                "left":"30px",
                "width":"40px"
            }
        );

        //add TubeOn button and its event
        var tubeOnButton = $('<button id="tubeB" type="button" class="buttons"></button>');
        $("#content").append(tubeOnButton);
        $("#tubeB").css(
            {
                "top":"140px",
                "left":"50px",
                "width":"40px"
            }
        );

        $("#tubeB").click(function(){
            if(lastState === "VaccumOverviewSelected.jpg"){
                $("#img").attr("src","images//contentImages/TubeOn.jpg");
                setTimeout(function(){
                    $("#img").attr("src","images/contentImages/TubeOnFinished.jpg");
                }, 500);
                setTimeout(function(){
                    $("#img").attr("src","images/contentImages/TubeOnFinished2.jpg");
                }, 1000);

                var stButton = $('<button id="singleTilt" type="button" class="buttons"></button>');
                $("#content").append(stButton);
                $("#singleTilt").css(
                    {
                        "top":"500px",
                        "left":"400px",
                        "width":"100px"
                    }
                );

                var singlePopped = false;
                $("#singleTilt").click(function(){
                    if(!singlePopped){
                        $("#img").attr("src","images/contentImages/singleTiltPopped.png");

                        var tiltSelect = $('<button id="tiltSelect" type="button" class="buttons"></button>');
                        $("#content").append(tiltSelect);
                        $("#tiltSelect").css(
                            {
                                "top":"537px",
                                "left":"400px",
                                "width":"100px",
                                "height":"2px",
                            }
                        );
                        $("#tiltSelect").click(function(){
                            $("#img").attr("src","images/contentImages/tiltClicked.jpg");
                            setTimeout(function(){
                                $("#img").attr("src","images/contentImages/tiltEntered.jpg");
                                lastState = "tiltEntered.jpg";
                            },1000);
                            $("#dsb").css({
                                "position":"absolute",
                                "left":"250px"
                            });

                            $("#temB").css({
                                "position":"absolute",
                                "left":"430px"
                            });
                            $(this).remove();
                            singlePopped = false;
                        });
                        singlePopped = true;
                    }else{
                        $("#img").attr("src","images/contentImages/TubeOnFinished2.jpg");
                        $("#tiltSelect").remove();
                        singlePopped = false;
                    }
                });
            }
        });


        //register digital button clicked event and its action
        $("#dsb").click(function(){
            if (lastState === ""){
                $("#img").attr("src","images/contentImages/digitalSwitched.jpg");
                $("#dsb").css(
                    {
                        "top":"590px",
                        "left":"300px",
                        "width":"20px"
                    }
                );

                $("#temB").css(
                    {
                        "top":"590px",
                        "left":"450px",
                        "width":"20px"
                    }
                );
                lastState = "digitalSwitched.jpg";
            }else if (lastState === "tiltEntered.jpg" || "19.jpg"){
                $("#img").attr("src","images/contentImages/digitalSwitchAfterTiltEntered.jpg");
                lastState = "digitalSwitchAfterTiltEntered.jpg";
            }
        });

        //register TEM interface button clicked event and its action
        $("#temB").click(function(){
            if(lastState === ""){
                $("#img").attr("src","images/contentImages/interfaceOpened.jpg");
                $("#dsb").css(
                    {
                        "top":"590px",
                        "left":"450px",
                        "width":"20px"
                    }
                );
                $("#temB").css(
                    {
                        "top":"590px",
                        "left":"650px",
                        "width":"20px"
                    }
                );
                lastState = "interfaceOpened.jpg";
            }else if (lastState === "digitalSwitchAfterTiltEntered.jpg"){
                $("#img").attr("src","images/contentImages/19.jpg");
                setTimeout(function(){
                    $("#img").attr("src","images/contentImages/20.jpg");
                },1000);
                lastState = "19.jpg";

            }
        });
    });
}

$(document).ready(main);
