$(document).ready(function() { 
	var clientH=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	$('.h5video').css({'width':'100%','height':clientH});
	$('.landWrap').css({'width':'100%','height':clientH});
	$('.bg-poster').css({'height':clientH});
	$('.videoBox').css({'width':'120%','left':'-10%'});
	$('.h5video').css({'width':'100%'});
	//为 <video> 元素添加 ontimeupdate 事件，如果当前播放位置改变则执行函数 
	var video=$('#h5video')[0];
	video.addEventListener('playing', function() {
           video.addEventListener('timeupdate', function() {
                if(video.ended){
                    $('#videoWrap').hide();
                    $('.landWrap').show();
                  }
           })
    })
}); 
//也可以在这个事件触发后播放一次然后暂停（这样以后视频会处于加载状态，为后面的流畅播放做准备）
function videoPlay(id){
	var video=document.getElementById(id);
	video.play();
	document.addEventListener("WeixinJSBridgeReady", function (){ 
   	 	video.play();
    	video.pause();
	}, false)
}
