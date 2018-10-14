window.onscroll = function(){
   var altura = window.pageYOffset || document.documentElement.scrollTop
   if( altura > 40 ) {
		$(".FloatComprar").css({
			"position": "fixed",
			"button": "0px",
			"visibility": "visible !important",
			"width": "100% !important",
			"height": "40px !important"});}
   else{
		$(".FloatComprar").css({
			"position": "relative", 
			"button": "0", 
			"width": "0px",
			"height": "0px"
			"visibility": "hidden"
		});}
}