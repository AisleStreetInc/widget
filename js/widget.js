!(function () {
	var e;
	if (
	  ((e = window.navigator.userAgent),
	  !/(Opera\/.+Opera Mobi.+Version\/((10|11)\.0|11\.1|11\.5|12\.(0|1)))|(Opera\/((10|11)\.0|11\.1|11\.5|12\.(0|1)).+Opera Mobi)|(Opera Mobi.+Opera(?:\/|\s+)((10|11)\.0|11\.1|11\.5|12\.(0|1)))|(SamsungBrowser\/((4|5)\.0|5\.4))|(IEMobile[ /](10|11)\.0)|(Android Eclair)|(Android Froyo)|(Android Gingerbread)|(Android Honeycomb)|(PlayBook.+RIM Tablet OS (7\.0|10\.0)\.\d+)|((Black[bB]erry|BB10).+Version\/(7\.0|10\.0)\.\d+)|(Trident\/6\.0)|(Trident\/5\.0)|(Trident\/4\.0)|(([MS]?IE) (5\.5|([6-9]|10)\.0))/.test(
		e
	  ) && window.navigator.cookieEnabled)
	) {
	  var initial_view = false;
	  var className = initial_view
		? "ch-plugin-script-on"
		: "ch-plugin-script-off";
	  var btnStyleOn = initial_view ? "none" : "block";
	  var btnStyleOff = initial_view ? "block" : "none";
	  var btnStyleBg = initial_view ? "#f0f0f0" : "#fb923c";

	//   console.log('Initializing 2');
	  //
	  if (!document.getElementById("ch-plugin")) {
		var n = document.createElement("div");
		(n.id = "ch-plugin"), document.body.appendChild(n);
	  }
	  var i = document.getElementById("ch-plugin");
	  i.style.zIndex = "21474836470";
	  i.style.setProperty("z-index", "21474836470", "important");
	  i.classList.add("notranslate");
	  i.innerHTML +=
		'<div id="ch-plugin-entry" style="position:relative !important"><div id="ch-plugin-launcher"><button type="button" id="ch-plugin-launcher-button" style="background-color:' +
		btnStyleBg +
		'"><div class="inner"><div id="ch-plugin-launcher-on" style="display:' +
		btnStyleOn +
		'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" class="w-6 h-6"><path fill-rule="evenodd" d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z" clip-rule="evenodd"/></svg></div><div id="ch-plugin-launcher-off" style="display:' +
		btnStyleOff +
		'"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="#555555" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg></div></div></button></div></div>';
	  i.innerHTML +=
		'<div id="ch-plugin-script" class="' +
		className +
		'"><iframe id="ch-plugin-script-iframe" title="Channel chat" style="position:relative!important;height:100%!important;width:100%!important;border:none!important;"></iframe></div>';
  
	  var style = document.createElement("style");
	  style.type = "text/css";
	  var css =
		"#ch-plugin { position: relative !important; display: block !important; color-scheme: normal !important; white-space: normal !important; z-index: 21474836470 !important; } #ch-plugin-script { box-shadow: rgba(255, 255, 255, 0.12) 0px 0px 2px 0px inset, rgba(0, 0, 0, 0.05) 0px 0px 2px 1px, rgba(0, 0, 0, 0.3) 0px 12px 60px; width: 390px !important; min-height: 200px !important; max-height: 690px !important; overflow: hidden !important; background-color: transparent !important; border-radius: 30px !important; will-change: transform, opacity !important; bottom: 90px !important; right: 24px !important; height: calc(100% - 110px) !important; position: fixed !important; transition: opacity 0.5s, transform 0.5s, visibility 0.5s; transform: translateY(0); opacity: 1; } .ch-plugin-script-off { transform: translateY(20px) !important; opacity: 0 !important; visibility: hidden !important; transition: opacity 0.5s, transform 0.5s, visibility 0.5s 0.5s; } #ch-plugin-launcher { position: fixed; z-index: 10; display: flex; justify-content: center; align-items: center; flex-wrap: nowrap; width: auto; overflow: visible; background: transparent; bottom: 24px; right: 24px; } #ch-plugin-launcher-button { width: 54px; height: 54px; border: 0; border-radius: 20px; box-shadow: rgba(255, 255, 255, 0.12) 0px 0px 2px 0px inset, rgba(0, 0, 0, 0.05) 0px 0px 2px 1px, rgba(0, 0, 0, 0.3) 0px 12px 60px; padding: 0; display: flex; justify-content: center; align-items: center; } #ch-plugin-launcher-on svg { width: 36px; height: 36px; } #ch-plugin-launcher-off svg { width: 32px; height: 32px; }@media only screen and (max-width: 430px) { #ch-plugin-script { width: 100% !important; min-height: initial !important; max-height: initial !important; overflow: hidden !important; border-radius: 30px !important; bottom: initial !important; top: 0px !important; right: 0px !important; height: calc(100% - 52px) !important; position: fixed !important; background-color: #FFF !important; z-index: 9; } #ch-plugin-launcher { bottom: 4px; right: 4px; } #ch-plugin-launcher-button { width: 44px; height: 44px; border-radius: 16px; } #ch-plugin-launcher-on svg { width: 32px; height: 32px; } #ch-plugin-launcher-off svg { width: 32px; height: 32px;}}";
	  if (style.styleSheet) {
		style.styleSheet.cssText = css;
	  } else {
		style.appendChild(document.createTextNode(css));
	  }
	  document.head.appendChild(style);
	  //
	  var script = document.createElement("script");
	  script.type = "text/javascript";
	  var jsCode =
		'var button=document.getElementById("ch-plugin-launcher-button");button.onclick=function(){var element=document.getElementById("ch-plugin-script");var btn_on=document.getElementById("ch-plugin-launcher-on");var btn_off=document.getElementById("ch-plugin-launcher-off");if(element.classList.contains("ch-plugin-script-off")){element.classList.remove("ch-plugin-script-off");button.style.backgroundColor="#f0f0f0";btn_on.style.display="none";btn_off.style.display="block";}else{element.classList.add("ch-plugin-script-off");button.style.backgroundColor="#fb923c";btn_on.style.display="block";btn_off.style.display="none";}};';
  
	  if (script.text) {
		script.text = jsCode; // IE8
	  } else {
		script.appendChild(document.createTextNode(jsCode));
	  }
	  document.body.appendChild(script);
  
	  var t = document.getElementById("ch-plugin-script-iframe"),
		r = !1,
		o = function () {
		  var e = t.contentDocument || t.contentWindow.document;
		  e.open(),
			e.write(
			  '<link rel="stylesheet" href="https://aislestreetinc.github.io/widget/app/app.css">'
			),
			e.write(
			  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css">'
			),
			e.write(
			  '<script async type="text/javascript" src="https://aislestreetinc.github.io/widget/app/app.js" charset="UTF-8"></script>'
			),
			e.write(
			  '<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#000000"/><meta name="description" content="Exemplar Chat Widget"/><title>Exemplar Chat Widget</title></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div></body></html>'
			),
			e.close(),
			(r = !0);
		};
	  t.onload || o(),
		(t.onload = function () {
		  r || o();
		});
	}

	var WidgetChat = window.WidgetChat;

	if (WidgetChat) {
		// 초기화 과정에서 큐에 저장된 명령을 처리
		while (WidgetChat.q.length > 0) {
			var args = WidgetChat.q.shift();
			(function(args) {
				checkIframeLoaded(function() {
					handleCommand(args);
				});
			})(args);
		}
	}
	
	function handleCommand(args) {
		var command = args[0];
		var options = args[1];
	
		if (command === "boot") {
			var pluginKey = options.pluginKey;
			var xmplrName = options.xmplrName;
			var facet = options.facet;
			initializeWidget(pluginKey, xmplrName, facet);
		}
	}
	
	function initializeWidget(pluginKey, xmplrName, facet) {
		// iframe에 데이터 전송
		var iframe = document.getElementById('ch-plugin-script-iframe');
		if (iframe && iframe.contentWindow) {
			iframe.contentWindow.postMessage({
				pluginKey: pluginKey,
				xmplrName: xmplrName,
				facet: facet
			}, '*');
			// console.log('iframe loaded');
		} else {
			// console.log('iframe not loaded');
		}
	}
	
	function checkIframeLoaded(callback) {
		var iframe = document.getElementById('ch-plugin-script-iframe');
		if (iframe) {
			iframe.onload = function() {
				callback();
			};
			if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
				callback();
			}
		} else {
			setTimeout(function() {
				checkIframeLoaded(callback);
			}, 100);
		}
	}

  })();



   