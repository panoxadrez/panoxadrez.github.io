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