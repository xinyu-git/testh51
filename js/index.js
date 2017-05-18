$(function(){
		//$('#plane1')[0].addEventListener('webkitAnimationEnd',function(){alert(1)},false);
		$('#plane1').on('webkitAnimationEnd',function(){
			$('#pageImg2').addClass('pageImgAni');  //第二个格子亮
			$('#plane2').addClass('plane2Ani');		//第二个飞机飞入
		})
		$('#plane2').on('webkitAnimationEnd',function(){
			$('#dialog1').addClass('dialogAni');  //第一个对话框显示
			$('#dialog1_audio')[0].play();  
			$('#pageImg3').addClass('pageImgAni'); //第三个格子亮
			$('#plane3').addClass('plane3Ani');		//第三个飞机淡出
		})
		
		$('#plane3').on('webkitAnimationEnd',function(){
			$('#dialog2').addClass('dialogAni');//第二个对话框显示
			$('#dialog2_audio')[0].play(); 
			$('#fire').addClass('fireAni');    
			setTimeout(function(){
				$('#audio_fire')[0].play();  //战舰开火
			},2000);
		})
		$('#fire').on('webkitAnimationEnd',function(){
			$('#pageImg4').addClass('pageImgAni'); //第四个格子亮
			$('#spray').addClass('sprayAni');   //水花渐入
			setTimeout(function(){
				$('#audio_water')[0].play();  //战舰开火
			},1000);
		})
		$('#spray').on('webkitAnimationEnd',function(){
			$('#pageImg5').addClass('pageImgAni'); //第五个格子亮
			$('#dunker').addClass('dunkerAni');   //潜艇淡入		
		})
		$('#dunker').on('webkitAnimationEnd',function(){
			$('#water_fire').addClass('fireAni')  //水下炮火
		})
		$('#water_fire').on('webkitAnimationEnd',function(){
			showScroll();
			$('#dialog3').addClass('dialogAni');//第三个对话框显示
			$('#dialog3_audio')[0].play(); 
		})
		$('#dialog3').on('webkitAnimationEnd',function(){
			$('#pageBottom').addClass('boardAni');
		})
		$('#pageBottom').on('webkitAnimationEnd',function(){
			$('#tipsPage').addClass('tipsPageAni');  //显示提示页面
		})
		$('#tipsPage').on('webkitAnimationEnd',function(){
			setTimeout(function(){
				$('#tipsPage').addClass('tipsPageAni1').remove(); //移除提示页面
			},2000);
		})
		var srcEl = $('#pageBottom');
		var oBtn=srcEl.find('.btn');
		srcEl[0].addEventListener('touchstart', function(event) {
			oBtn.addClass('btn_active');
            $('#rudder').addClass('rudderAni');  //船舵动dualtouchstart
            $('#pointerImg').addClass('pointerAni');  //指针动
        }, false);
		document.body.addEventListener('touchmove', function(e) {
            e.preventDefault();
            return false;
        }, false);
		$('#pointerImg').on('webkitAnimationEnd',function(){
			$('#pointerImg').addClass('pointerAni1');  //指针循环动
			$('#fish').addClass('fishAni');  //鱼雷出现
			$('.fishOpa').show();    //鱼雷遮罩
			setTimeout(function(){
				$('#audio_fish')[0].play();  //鱼雷爆炸
				//audioAutoPlay('audio_fish')
			},1500);
		})
		$('#fish').on('webkitAnimationEnd',function(){
			$('#blow').addClass('blowAni');
		})
		$('#blow').on('webkitAnimationEnd',function(){
			setTimeout(function(){
				$('.fishOpa').hide().remove();
				$('.wrap-slide').hide()
				$('#videoWrap').show()
				videoPlay('h5video')				
			},1000)			
		})
		$('#blow').on('click',function(){
			//$('.wrap-slide').hide()
			//$('#videoWrap').show()
			//$('#h5video')[0].play();
		})
})

function showScroll(){
	var wrapH=$('.wrap').height();
	var clientH=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	var difH=wrapH-clientH;
	$("html,body").stop(true,true).animate({scrollTop:difH},1000);
}
function audioAutoPlay(id){  
	var audio = document.getElementById(id)
	var play = function(){  
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
