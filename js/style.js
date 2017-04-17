$(function(){
	var index=0;
	var time;
	$('.lbbox .lunbobtn li:eq(0)').css('background','#66C5FF')
	$('.lbbox .lunbobtn li').click(function(){
		index=$(this).index()
		tab()
	})
	function tab(){
		$('.lunbo li').eq(index).fadeIn(400).siblings().fadeOut(600)
		$('.lunbobtn li').eq(index).css('background','#66C5FF').siblings().css('background','#7E7E7E')
	}
	$('.lbbox').hover(function(){
		clearInterval(time)
	},function(){
		clearInterval(time)
		time=setInterval(function(){
			tab();
			index++;
			index%=$('.lunbo li').length;		
		},1000)
	}).trigger('mouseleave')
})
