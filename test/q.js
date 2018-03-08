$(function(){
    <!-- 首页导航条-->
	$(".search_pic").click(function(){
		$(".headernav").fadeOut(500);
		$(".search_main").fadeIn(1000);
	});
    $(".close_btn").click(function(){
        $(".search_main").fadeOut(500);
        $(".headernav").fadeIn(1000);
    });
    $(".list_pic").click(function(){
    	$(".login").fadeIn(500);
    });
    $(".close_log").click(function(){
    	$(".login").fadeOut(500);
    });
    $(".zc").click(function(){
    	$(".login").fadeOut(500);
    	$(".register").fadeIn(1000);
    });
    $(".close1_log").click(function(){
    	$(".register").fadeOut(500);
    });
    <!-- 首页导航条-->
    <!-- 图片浮动效果-->
    $(".box_down img").hover(function(){
        $(this).animate({top:"-5px"},'normal');
    },function(){
        $(this).animate({top:"0px"},'normal');
    });
    <!-- 图片浮动效果-->
    <!-- 图片遮罩效果-->
    $('.sgm').hover(function(){
       $(this).children('.cover').stop(true,true).delay(100).animate({top:"-20px",opacity:0.6},300);
    },function(){
        $(this).children('.cover').stop(true,true).animate({top:"-200px",opacity:0},500);
    });
    <!-- 图片遮罩效果-->
    <!-- 回到顶部效果-->
    $('.cTop').click(function(){
        $('body,html').animate({scrollTop:"0px;"},'normal');
    });
    <!-- 回到顶部效果-->
    $('.bgw img').mouseenter(function(){
        var imgwidth=0.7*$(this).width();
        var imgheight=0.7*$(this).height();
        $(this).stop().animate({
                        width:imgwidth,
                        height:imgheight,
                        left:"30px",
                        top:"30px"
                        },1000);
    }).mouseleave(function(){
        $(this).stop().animate({
            width:"100",
            height:"100",
            left:"0px",
            top:"0px"
          },1000);
    });
});
	