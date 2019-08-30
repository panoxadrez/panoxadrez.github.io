// @koala-append "dev.js"

// @koala-append "../../../lib/popup/v00001.js"
// @koala-append "../../../lib/heatmap/v00001.js"
// @koala-append "../../../lib/leadlovers/form-capture/v1.js"
// @koala-append "lib/facebook/pixel/v1.js"

function openPopupShare(media, url, shareText, width, height) {
    var share = '';
    switch (media) {
        case 'facebook':
            shareText = '';
            share = "https://www.facebook.com/sharer/sharer.php?u=" + "https://" + url + shareText;
            break;

        case 'whatsapp':
            share = "https://api.whatsapp.com/send?text=" + shareText + " " + url;
            //
            break;
        case 'twitter':
            share = "https://twitter.com/intent/tweet?text=" + shareText + " " + url;
            break;

        case 'telegram':
            share = "https://telegram.me/share/url?url=https://" + url + "&amp&" + "text=" + shareText;
            //&amp;text=Participe comigo das aulas especiais e GRATUITAS de Patchwork e Costura Criativa com Eliana Zerbinatti!
            break;

        default:
            console.log("share erro!");
    }
    console.log(share);

    var myWindow = window.open(share, '', "top=250,left=500, width=" + width + ",height=" + height);
}

(function (h, e, a, t, m, p) {
    m = e.createElement(a);
    m.async = !0;
    m.src = t;
    p = e.getElementsByTagName(a)[0];
    p.parentNode.insertBefore(m, p);
})(window, document, 'script', 'https://u.heatmap.it/log.js');

(function () {

	"use strict";
  
	window.onload = function () {
	    LLEvents();
	};
  
	var currentForm = null;
  
	function LLCapture(objForm) {
	    if (!objForm) { console.error('Form not found!'); return; }
	    if (!objForm.action) { console.error('Form without action'); return; }
	    currentForm = objForm;
	    var request = new XMLHttpRequest();
	    request.onload = LLCaptureReturn;
	    if (objForm.method.toLowerCase() === 'post') {
		  LLCaptureClearErrors(objForm);
		  if (LLCaptureValidations(objForm)) {
			LLToogleFields(objForm, false);
			LLToogleLoading(objForm, true);
			request.open("post", objForm.action, true);
			request.send(new FormData(objForm));
			fbq('track', 'CompleteRegistration');
		  }
	    }
	    return false;
	}
	function LLCaptureClearErrors(objForm) {
	    if (!!objForm) {
		  var elements = objForm.querySelectorAll('div.field-error');
		  if (elements.length > 0) {
			elements.forEach(function (item, ix) {
			    item.innerText = '';
			    item.className = item.className.replace('show', '');
			});
		  }
	    }
	    else
		  console.error('Form not found!');
	}
	function LLCaptureReturn() {
	    if (!!currentForm) {
		  var objForm = currentForm;
		  var errorBox = objForm.querySelector('div.error-box');
		  var errorDiv = errorBox.querySelector('div');
		  var div = null;
		  var error = false;
		  var result = JSON.parse(this.responseText);
		  if (!!result.errors) {
			result.errors.forEach(function (err, ix) {
			    if (err.field == null || err.field === '') {
				  error = true;
				  errorDiv.innerHTML += '<span>' + err.error + '</span><br />';
			    }
			    else {
				  div = objForm.querySelector(err.field);
				  if (!!div) {
					div.innerHTML = err.error;
					if (div.className.indexOf('show') === -1)
					    div.className += ' show';
				  }
			    }
			});
			LLToogleLoading(objForm, false);
			if (error)
			    LLToogleError(objForm, true);
			else
			    LLToogleFields(objForm, true);
		  }
		  else
			window.location.href = result;
	    }
	    else
		  console.error('Form not found!');
	}
	function LLCaptureValidations(objForm) {
	    var err = null;
	    var elements = null;
	    var result = true;
	    // get required elements
	    elements = objForm.querySelectorAll('[data-required]');
	    if (elements.length > 0) {
		  elements.forEach(function (item, ix) {
			if (item.tagName.toLowerCase() !== 'div') {
			    if (item.value.trim() === '') {
				  result = false;
				  err = item.parentElement.querySelector('div.field-error');
				  if (err) {
					err.innerText = 'Esse campo é obrigatório';
					err.className += ' show';
				  }
			    }
			}
			else {
			    var items = item.querySelectorAll('input[type=checkbox]');
			    var empty = [].filter.call(items, function (el) {
				  return !el.checked;
			    });
			    if (items.length == empty.length) {
				  result = false;
				  err = item.parentElement.querySelector('div.field-error');
				  if (err) {
					err.innerText = 'Selecione ao menos um item';
					err.className += ' show';
				  }
			    }
			}
		  });
	    }
	    // return
	    return result;
	}
	function LLEvents() {
	    var found = false;
	    var forms = document.getElementsByTagName('form');
	    if (forms.length > 0) {
		  for (var i = 0; i < forms.length; i++) {
			if (forms[i] != undefined && forms[i] != null && forms[i].id == 'llCaptureForm') {
			    found = true;
			    var objForm = forms[i];                    
			    objForm.onsubmit = function () {
				  LLCapture(this);
				  return false;
			    };
			    objForm.querySelector('#btn-error').addEventListener('click', function () {
				  LLToogleError(this, false);
				  LLToogleFields(this, true);
			    });
			}
		  }
	    }
	    else
		  console.error('No dynamic form found!');
	}
	function LLToogleError(objForm, state) {
	    if (!!objForm) {
		  var box = objForm.querySelector('div.error-box');
		  if (box) {
			if (state)
			    box.className += ' show';
			else
			    box.className = box.className.replace('show', '');
		  }
	    }
	    else
		  console.error('Form not found!');
	}
	function LLToogleFields(objForm, state) {
	    if (!!objForm) {
		  var children = Array.from(objForm.children);
		  children.forEach(function (item, ix) {
			if (item.tagName.toLowerCase() === 'div') {
			    if (item.className.indexOf('loading-box') === -1 &&
				  item.className.indexOf('error-box') === -1) {
				  if (!state)
					item.className += ' hidden';
				  else
					item.className = item.className.replace('hidden', '');
			    }
			}
		  });
	    }
	    else
		  console.error('Form not found!');
	}
	function LLToogleLoading(objForm, state) {
	    if (!!objForm) {
		  var box = objForm.querySelector('div.loading-box');
		  if (box) {
			if (state)
			    box.className += ' show';
			else
			    box.className = box.className.replace('show', '');
		  }
	    }
	    else
		  console.error('Form not found!');
	}
  
  }());

! function (f, b, e, v, n, t, s) {
	if (f.fbq) return;
	n = f.fbq = function () {
		n.callMethod ?
			n.callMethod.apply(n, arguments) : n.queue.push(arguments)
	};
	if (!f._fbq) f._fbq = n;
	n.push = n;
	n.loaded = !0;
	n.version = '2.0';
	n.queue = [];
	t = b.createElement(e);
	t.async = !0;
	t.src = v;
	s = b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t, s)
}
(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '2177876549005225');
fbq('track', 'PageView');