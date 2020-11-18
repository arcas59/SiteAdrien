var video = $('#myvideo');

var WindowWidth = $(window).width();

if (WindowWidth < 768) {
    //It is a small screen
    video.append("<source src='video/videomob.webm' type='video/webm' >");
} else {
    //It is a big screen or desktop
    video.append("<source src='video/videodesk.webm' type='video/webm' >");
}