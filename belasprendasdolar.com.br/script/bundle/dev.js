function openPopupShare(e,r,o,t,n){var a="";switch(e){case"facebook":a="https://www.facebook.com/sharer/sharer.php?u=https://"+r+(o="");break;case"whatsapp":a="https://api.whatsapp.com/send?text="+o+" "+r;break;case"twitter":a="https://twitter.com/intent/tweet?text="+o+" "+r;break;case"telegram":a="https://telegram.me/share/url?url=https://"+r+"&amp&text="+o;break;default:console.log("share erro!")}console.log(a);window.open(a,"","top=250,left=500, width="+t+",height="+n)}!function(e,r,o,t,n,a){(n=r.createElement(o)).async=!0,n.src="https://u.heatmap.it/log.js",(a=r.getElementsByTagName(o)[0]).parentNode.insertBefore(n,a)}(window,document,"script"),function(){"use strict";function e(e){if(e){if(e.action){a=e;var o=new XMLHttpRequest;return o.onload=r,"post"===e.method.toLowerCase()&&(!function(e){if(e){var r=e.querySelectorAll("div.field-error");r.length>0&&r.forEach(function(e,r){e.innerText="",e.className=e.className.replace("show","")})}else console.error("Form not found!")}(e),function(e){var r=null,o=null,t=!0;(o=e.querySelectorAll("[data-required]")).length>0&&o.forEach(function(e,o){if("div"!==e.tagName.toLowerCase())""===e.value.trim()&&(t=!1,(r=e.parentElement.querySelector("div.field-error"))&&(r.innerText="Esse campo é obrigatório",r.className+=" show"));else{var n=e.querySelectorAll("input[type=checkbox]"),a=[].filter.call(n,function(e){return!e.checked});n.length==a.length&&(t=!1,(r=e.parentElement.querySelector("div.field-error"))&&(r.innerText="Selecione ao menos um item",r.className+=" show"))}});return t}(e)&&(t(e,!1),n(e,!0),o.open("post",e.action,!0),o.send(new FormData(e)),fbq("track","CompleteRegistration"))),!1}console.error("Form without action")}else console.error("Form not found!")}function r(){if(a){var e=a,r=e.querySelector("div.error-box").querySelector("div"),s=null,l=!1,c=JSON.parse(this.responseText);c.errors?(c.errors.forEach(function(o,t){null==o.field||""===o.field?(l=!0,r.innerHTML+="<span>"+o.error+"</span><br />"):(s=e.querySelector(o.field))&&(s.innerHTML=o.error,-1===s.className.indexOf("show")&&(s.className+=" show"))}),n(e,!1),l?o(e,!0):t(e,!0)):window.location.href=c}else console.error("Form not found!")}function o(e,r){if(e){var o=e.querySelector("div.error-box");o&&(r?o.className+=" show":o.className=o.className.replace("show",""))}else console.error("Form not found!")}function t(e,r){if(e){Array.from(e.children).forEach(function(e,o){"div"===e.tagName.toLowerCase()&&-1===e.className.indexOf("loading-box")&&-1===e.className.indexOf("error-box")&&(r?e.className=e.className.replace("hidden",""):e.className+=" hidden")})}else console.error("Form not found!")}function n(e,r){if(e){var o=e.querySelector("div.loading-box");o&&(r?o.className+=" show":o.className=o.className.replace("show",""))}else console.error("Form not found!")}window.onload=function(){!function(){var r=document.getElementsByTagName("form");if(r.length>0){for(var n=0;n<r.length;n++)if(void 0!=r[n]&&null!=r[n]&&"llCaptureForm"==r[n].id){var a=r[n];a.onsubmit=function(){return e(this),!1},a.querySelector("#btn-error").addEventListener("click",function(){o(this,!1),t(this,!0)})}}else console.error("No dynamic form found!")}()};var a=null}();