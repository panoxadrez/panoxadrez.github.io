window.onscroll = function(){
   var altura = window.pageYOffset || document.documentElement.scrollTop
   if( altura > 40 ) {
		$(".FloatComprar").css({
			"position": "fixed",
			"button": "0px",
			"overflow": "visible",
			"width": "100vw",
			"height": "initial"});}
   else{
		$(".FloatComprar").css({
			"position": "relative", 
			"button": "0", 
			"overflow": "hidden",
			"width": "0px",
			"height": "0px"
		});}
}