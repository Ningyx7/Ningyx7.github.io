$(function(){
	var start1;
	$(".btn1").click(function(){
		start1=setInterval(start,100)
		$(this).prop("disabled",true)
		$(".btn2").prop("disabled",false)
	});
	
	$(".btn2").click(function(){
		clearInterval(start1)
		var img2src=$(".img2").prop("src");
		$(".img1").prop("src",img2src);
		$(this).prop("disabled",true)
		$(".btn1").prop("disabled",false)
	});
	
	var i=1;
	var start = function(){
		$(".img2").prop("src","img/pic"+i+".jpg");
		i++;
		if(i==9){
			i=1;
		}
	}
	
	
});