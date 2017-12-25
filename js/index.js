
//验证jq引入成功了
	//alert($);//弹窗确定
	//hover 鼠标移入或者移出
	$('.box').hover(function(){
		//alert('移入')
		$('.move').show();
		$('.bimg').show();
	},function(){
		$('.move').hide();
		$('.bimg').hide();
	});
	var x=0,y=0,l=0,t=0;
	$('.move').mousemove(function(e){
		var ev = e||window.event;//解决ie和火狐兼容问题
		x = ev.clientX //鼠标滑到坐标x
		y =	ev.clientY //鼠标滑到坐标y
		l = $('.box').offset().left;
		t = $('.box').offset().top;
		//console.log(1)
		//改变move位置
		/*move坐标改变 = 鼠标滑到坐标- box原有的坐标
		把改变的值给move坐标*/
		var nowLeft = x - l -$(this).width()/2;
		var nowTop =  y - t -$(this).height()/2;
		var max_w =$('.box').width()-$(this).width();
		var max_t =$('.box').height()-$(this).height();
		if(nowLeft<0){
			nowLeft=0;
		}else if(nowLeft>max_w){
			nowLeft=max_w;
		}
		if(nowTop<0){
			nowTop = 0;
		}else if(nowTop>max_t){
			nowTop =max_t;
		}
		$(this).css({
			left:nowLeft,
			top:nowTop
		});
		//
		var w = nowLeft/$('.box').width()
		var h = nowTop/$('.box').height()
		var _left = w*$('.b-img').width();
		var _top = h*$('.b-img').height();
		$('.b-img').css({
			left:-_left,
			top:-_top
		});
	})




