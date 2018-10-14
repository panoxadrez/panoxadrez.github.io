window.onscroll = function(){
   var altura = window.pageYOffset || document.documentElement.scrollTop
   if( altura > 40 ) {
		$(".FloatComprar").css({"position": "fixed", "button": "0px", "visibility": "visible"});}
   else{
		$(".FloatComprar").css({"position": "relative", "button": "0", "visibility": "hidden"});}
}