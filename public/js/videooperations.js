let video = document.getElementsByTagName('video')[0];
video.addEventListener('click', function(){
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
})