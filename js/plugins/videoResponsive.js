var video = $("#myvideo"),
    WindowWidth = $(window).width();
WindowWidth < 769 ? video.append("<source src='video/videomob.mp4' type='video/mp4' >") : video.append("<source src='video/videodesk.mp4' type='video/mp4' >");
