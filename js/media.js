function autoPlayMusic() {   
    // 自动播放音乐效果，解决浏览器或者APP自动播放问题 
    function musicInBrowserHandler() {   
        musicPlay(true);   
        document.body.removeEventListener('touchstart', musicInBrowserHandler);   
    }   
    document.body.addEventListener('touchstart', musicInBrowserHandler);   
    // 自动播放音乐效果，解决微信自动播放问题  
    function musicInWeixinHandler() {   
        musicPlay(true);   
        document.addEventListener("WeixinJSBridgeReady", function () {   
            musicPlay(true);   
        }, false);   
        document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);   
    }   
    document.addEventListener('DOMContentLoaded', musicInWeixinHandler);   
}   
function musicPlay(isPlay) {   
    var media = document.getElementById('myMusic');   
    if (isPlay && media.paused) {   
        media.play();   
    }   
    if (!isPlay && !media.paused) {   
        media.pause();   
    }   
}  




function autoPlayMusic(id) {   
	musicPlay(true,id);  
    // 自动播放音乐效果，解决浏览器或者APP自动播放问题 
    function musicInBrowserHandler() {   
        musicPlay(true,id);   
        document.body.removeEventListener('touchstart', musicInBrowserHandler);   
    }   
    document.body.addEventListener('touchstart', musicInBrowserHandler);   
    // 自动播放音乐效果，解决微信自动播放问题  
    function musicInWeixinHandler() {   
        musicPlay(true,id);   
        document.addEventListener("WeixinJSBridgeReady", function () {   
            musicPlay(true,id);   
        }, false);   
        document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);   
    }   
    document.addEventListener('DOMContentLoaded', musicInWeixinHandler);   
}   
function musicPlay(isPlay,id) {   
    var media = document.getElementById(id);   
    if (isPlay && media.paused) {   
        media.play();   
    }   
    if (!isPlay && !media.paused) {   
        media.pause();   
    }   
} 



function audioAutoPlay(id){  
    var audio = document.getElementById(id),  
        play = function(){  
            audio.play();  
            document.removeEventListener("touchstart",play, false);  
        };  
    audio.play();  
    document.addEventListener("WeixinJSBridgeReady", function () {  
        play();  
    }, false);  
    document.addEventListener('YixinJSBridgeReady', function() {  
        play();  
    }, false);  
    document.addEventListener("touchstart",play, false);  
}  
audioAutoPlay('Jaudio');  

