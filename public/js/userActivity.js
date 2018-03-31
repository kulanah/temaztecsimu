let userActive = true;

$(window).on('mousedown', function(event){
    userActive = true;
});

$(window).on('mousemove', function(event){
    userActive = true;
});

$(window).on('keydown', function(event){
    userActive = true;
});

function logActivity(){
    if(userActive){
        // Send message to server to log user activity
        //console.log('Active')
    }
    userActive = false;
}

window.setInterval(logActivity, 900000);