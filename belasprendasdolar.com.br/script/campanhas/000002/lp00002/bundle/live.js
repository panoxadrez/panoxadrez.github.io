function openPopupShare(e,o,r,t,n){var a="";switch(e){case"facebook":a="https://www.facebook.com/sharer/sharer.php?u=https://"+o+(r="");break;case"whatsapp":a="https://api.whatsapp.com/send?text="+r+" "+o;break;case"twitter":a="https://twitter.com/intent/tweet?text="+r+" "+o;break;case"telegram":a="https://telegram.me/share/url?url=https://"+o+"&amp&text="+r;break;default:console.log("share erro!")}console.log(a);window.open(a,"","top=250,left=500, width="+t+",height="+n)}!function(e,o,r,t,n,a){(n=o.createElement(r)).async=!0,n.src="https://u.heatmap.it/log.js",(a=o.getElementsByTagName(r)[0]).parentNode.insertBefore(n,a)}(window,document,"script"),function(){"use strict";function e(e){if(e){if(e.action){a=e;var r=new XMLHttpRequest;return r.onload=o,"post"===e.method.toLowerCase()&&(!function(e){if(e){var o=e.querySelectorAll("div.field-error");o.length>0&&o.forEach(function(e,o){e.innerText="",e.className=e.className.replace("show","")})}else console.error("Form not found!")}(e),function(e){var o=null,r=null,t=!0;(r=e.querySelectorAll("[data-required]")).length>0&&r.forEach(function(e,r){if("div"!==e.tagName.toLowerCase())""===e.value.trim()&&(t=!1,(o=e.parentElement.querySelector("div.field-error"))&&(o.innerText="Esse campo é obrigatório",o.className+=" show"));else{var n=e.querySelectorAll("input[type=checkbox]"),a=[].filter.call(n,function(e){return!e.checked});n.length==a.length&&(t=!1,(o=e.parentElement.querySelector("div.field-error"))&&(o.innerText="Selecione ao menos um item",o.className+=" show"))}});return t}(e)&&(t(e,!1),n(e,!0),r.open("post",e.action,!0),r.send(new FormData(e)),fbq("track","CompleteRegistration"))),!1}console.error("Form without action")}else console.error("Form not found!")}function o(){if(a){var e=a,o=e.querySelector("div.error-box").querySelector("div"),s=null,l=!1,c=JSON.parse(this.responseText);c.errors?(c.errors.forEach(function(r,t){null==r.field||""===r.field?(l=!0,o.innerHTML+="<span>"+r.error+"</span><br />"):(s=e.querySelector(r.field))&&(s.innerHTML=r.error,-1===s.className.indexOf("show")&&(s.className+=" show"))}),n(e,!1),l?r(e,!0):t(e,!0)):window.location.href=c}else console.error("Form not found!")}function r(e,o){if(e){var r=e.querySelector("div.error-box");r&&(o?r.className+=" show":r.className=r.className.replace("show",""))}else console.error("Form not found!")}function t(e,o){if(e){Array.from(e.children).forEach(function(e,r){"div"===e.tagName.toLowerCase()&&-1===e.className.indexOf("loading-box")&&-1===e.className.indexOf("error-box")&&(o?e.className=e.className.replace("hidden",""):e.className+=" hidden")})}else console.error("Form not found!")}function n(e,o){if(e){var r=e.querySelector("div.loading-box");r&&(o?r.className+=" show":r.className=r.className.replace("show",""))}else console.error("Form not found!")}window.onload=function(){!function(){var o=document.getElementsByTagName("form");if(o.length>0){for(var n=0;n<o.length;n++)if(void 0!=o[n]&&null!=o[n]&&"llCaptureForm"==o[n].id){var a=o[n];a.onsubmit=function(){return e(this),!1},a.querySelector("#btn-error").addEventListener("click",function(){r(this,!1),t(this,!0)})}}else console.error("No dynamic form found!")}()};var a=null}(),function(e,o,r,t,n,a,s){e.fbq||(n=e.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)},e._fbq||(e._fbq=n),n.push=n,n.loaded=!0,n.version="2.0",n.queue=[],(a=o.createElement(r)).async=!0,a.src="https://connect.facebook.net/en_US/fbevents.js",(s=o.getElementsByTagName(r)[0]).parentNode.insertBefore(a,s))}(window,document,"script"),fbq("init","2084064961703497"),fbq("track","PageView");