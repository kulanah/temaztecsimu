// Play/pause video on click
let videos = document.getElementsByTagName('video');
for(let video in videos){
    videos[video].addEventListener('click', function(){
        if(videos[video].paused){
            videos[video].play();
        } else {
            videos[video].pause();
        }
    })
}

// Pause video when not visible
// Visibility change code based on example in documentation at https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
var hidden, visibilityChange; 
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

// If the page is hidden, pause the video;
function handleVisibilityChange() {
    if (document[hidden]) {
        for(let video in videos){
            videos[video].pause();
        }
    }
}
  
// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (typeof document.addEventListener === "undefined" || typeof document.hidden === "undefined") {
    console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
} else {
    // Handle page visibility change   
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
}