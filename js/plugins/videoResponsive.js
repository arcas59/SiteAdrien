var video=$("#myvideo"),WindowWidth=$(window).width();WindowWidth<769?video.append("<source src='video/videomob.webm' type='video/webm' >"):video.append("<source src='video/videodesk.webm' type='video/webm' >");