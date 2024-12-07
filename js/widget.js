!(function () {
  var e;
  if (
    ((e = window.navigator.userAgent),
    !/(Opera\/.+Opera Mobi.+Version\/((10|11)\.0|11\.1|11\.5|12\.(0|1)))|(Opera\/((10|11)\.0|11\.1|11\.5|12\.(0|1)).+Opera Mobi)|(Opera Mobi.+Opera(?:\/|\s+)((10|11)\.0|11\.1|11\.5|12\.(0|1)))|(SamsungBrowser\/((4|5)\.0|5\.4))|(IEMobile[ /](10|11)\.0)|(Android Eclair)|(Android Froyo)|(Android Gingerbread)|(Android Honeycomb)|(PlayBook.+RIM Tablet OS (7\.0|10\.0)\.\d+)|((Black[bB]erry|BB10).+Version\/(7\.0|10\.0)\.\d+)|(Trident\/6\.0)|(Trident\/5\.0)|(Trident\/4\.0)|(([MS]?IE) (5\.5|([6-9]|10)\.0))/.test(
      e
    ) && window.navigator.cookieEnabled)
  ) {
    //
    if (!document.getElementById("ch-plugin")) {
      var n = document.createElement("div");
      (n.id = "ch-plugin"), document.body.appendChild(n);
    }
    var i = document.getElementById("ch-plugin");
    i.style.zIndex = "2147483647";
    i.style.setProperty("z-index", "2147483647", "important");
    i.classList.add("notranslate");
    i.classList.add("ch-plugin-off");
    i.classList.add("ch-plugin-message-off");
    i.innerHTML +=
      '<div id="ch-plugin-entry" style="position:relative!important"><div id="ch-plugin-launcher"><div id="ch-plugin-message-box"><div id="ch-plugin-message-button"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3.20293 9.5L2.50293 8.8L5.30293 6L2.50293 3.2L3.20293 2.5L6.00293 5.3L8.80293 2.5L9.50293 3.2L6.70293 6L9.50293 8.8L8.80293 9.5L6.00293 6.7L3.20293 9.5Z" fill="#0C0C0D"/></svg></div><div id="ch-plugin-message"></div></div><button type="button" id="ch-plugin-launcher-button"><div class="inner"><div id="ch-plugin-launcher-on"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4 28V6.4C4 5.74 4.235 5.175 4.705 4.705C5.175 4.235 5.74 4 6.4 4H25.6C26.26 4 26.825 4.235 27.295 4.705C27.765 5.175 28 5.74 28 6.4V20.8C28 21.46 27.765 22.025 27.295 22.495C26.825 22.965 26.26 23.2 25.6 23.2H8.8L4 28ZM7.78 20.8H25.6V6.4H6.4V22.15L7.78 20.8Z" fill="#FCFCFD"/></svg></div><div id="ch-plugin-launcher-off"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8.53341 25.3333L6.66675 23.4666L14.1334 16L6.66675 8.53329L8.53341 6.66663L16.0001 14.1333L23.4667 6.66663L25.3334 8.53329L17.8667 16L25.3334 23.4666L23.4667 25.3333L16.0001 17.8666L8.53341 25.3333Z" fill="#FCFCFD"/></svg></div></div></button></div></div>';
    i.innerHTML +=
      '<div id="ch-plugin-script"><iframe id="ch-plugin-script-iframe" title="Channel chat" style="position:relative!important;height:100%!important;width:100%!important;border:none!important;"></iframe></div>';

    var style = document.createElement("style");
    style.type = "text/css";

    var css =
      "#ch-plugin{position:relative!important;display:block!important;color-scheme:normal!important;white-space:normal!important;z-index:2147483647!important;}#ch-plugin-script{box-shadow:rgba(255,255,255,0.12)0px 0px 2px 0px inset,rgba(0,0,0,0.05)0px 0px 2px 1px,rgba(0,0,0,0.3)0px 12px 60px;width:390px!important;min-height:200px!important;max-height:690px!important;overflow:hidden!important;background-color:transparent!important;border-radius:30px!important;will-change:transform,opacity!important;bottom:90px!important;right:24px!important;height:calc(100%-110px)!important;position:fixed!important;transition:opacity 0.5s,transform 0.5s,visibility 0.5s;transform:translateY(0);opacity:1;}#ch-plugin-off #ch-plugin-script{transform:translateY(20px)!important;opacity:0!important;visibility:hidden!important;transition:opacity 0.5s,transform 0.5s,visibility 0.5s 0.5s;}#ch-plugin-launcher{position:fixed;z-index:10;display:flex;justify-content:center;align-items:center;flex-wrap:nowrap;width:auto;overflow:visible;background:transparent;bottom:24px;right:24px;}#ch-plugin-message-box{display:none;position:absolute;bottom:70px;right:3px;background:#fcfcfd;color:#333;border-radius:14px;padding:16px;font-size:14px;font-weight:500;line-height:1.4em;z-index:1;max-width:141px;box-shadow:0px 0px 4px 0px rgba(0,0,0,0.1),0px 0px 5px 1px rgba(0,0,0,0.08);transition:opacity 0.1s,transform 0.1s,visibility 0.1s;transform:translateY(0);}#ch-plugin-launcher-on svg{width:28px;height:28px;}#ch-plugin-launcher-off svg{width:32px;height:32px;}#ch-plugin-launcher-button{width:54px;height:54px;border:0;border-radius:12px;box-shadow:rgba(255,255,255,0.12)0px 0px 2px 0px inset,rgba(0,0,0,0.05)0px 0px 2px 1px,rgba(0,0,0,0.3)0px 12px 60px;padding:0;display:flex;justify-content:center;align-items:center;background-color:#fd5c26;cursor:pointer;}#ch-plugin-launcher-button:hover{box-shadow:0px 0px var(--128,128px)var(--128,128px)rgba(0,0,0,0.1)inset,0px 0px 2px 0px rgba(0,0,0,0.1),0px 0px 3px 1px rgba(0,0,0,0.08);}";

    var css2 =
      "#ch-plugin-launcher-on{display:none;}#ch-plugin-launcher-off{display:block;}.ch-plugin-off #ch-plugin-message-box{display:block;}.ch-plugin-message-off #ch-plugin-message-box{display:none!important;}.ch-plugin-off #ch-plugin-launcher-button{background-color:#fd5c26;}.ch-plugin-off #ch-plugin-launcher-on{display:block;}.ch-plugin-off #ch-plugin-launcher-off{display:none;}#ch-plugin-message-button{position:absolute;display:flex;align-items:center;justify-content:center;top:-20px;right:0px;width:12px;height:12px;border-radius:50%;background-color:#fcfcfd;cursor:pointer;box-shadow:0px 0px 4px 0px rgba(0,0,0,0.1),0px 0px 5px 1px rgba(0,0,0,0.08);}#ch-plugin-message-button svg{width:10px;height:10px;color:#ffffff;}@media only screen and (max-width:430px){#ch-plugin-script{width:100%!important;min-height:initial!important;max-height:initial!important;overflow:hidden!important;border-radius:30px!important;bottom:initial!important;top:0px!important;right:0px!important;height:calc(100% - 52px)!important;position:fixed!important;background-color:#fff!important;z-index:9;}#ch-plugin-launcher{bottom:4px;right:4px;}#ch-plugin-launcher-button{width:44px;height:44px;border-radius:16px;}#ch-plugin-launcher-on svg{width:32px;height:32px;}#ch-plugin-launcher-off svg{width:32px;height:32px;}}";

    if (style.styleSheet) {
      style.styleSheet.cssText = css + css2;
    } else {
      style.appendChild(document.createTextNode(css + css2));
    }
    document.head.appendChild(style);
    //
    var script = document.createElement("script");
    script.type = "text/javascript";
    var jsCode =
      'var button=document.getElementById("ch-plugin-launcher-button");button.onclick=function(){var element=document.getElementById("ch-plugin");if(element.classList.contains("ch-plugin-off")){element.classList.remove("ch-plugin-off");element.classList.add("ch-plugin-message-off");}else{element.classList.add("ch-plugin-off");}};var button2=document.getElementById("ch-plugin-message-button");button2.onclick=function(){var element=document.getElementById("ch-plugin");element.classList.add("ch-plugin-message-off");};';

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
            '<script async type="text/javascript" src="https://aislestreetinc.github.io/widget/app/main.js" charset="UTF-8"></script>'
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
      (function (args) {
        checkIframeLoaded(function () {
          handleCommand(args);
        });
      })(args);
    }
  }

  function changeView(is_view) {
    var target = document.getElementById("ch-plugin");
    if (is_view) {
      target.classList.remove("ch-plugin-off");
    } else {
      target.classList.add("ch-plugin-off");
    }
  }

  function handleCommand(args) {
    var command = args[0];
    var res = args[1];

    if (command === "boot") {
      var pluginKey = res.pluginKey;
      var xmplrName = res.xmplrName;
      var facet = res.facet;
      var options = res.options || {
        default: "CLOSED",
        message: `Come and Chat with &${xmplrName} here!`,
      };

      if (options.message) {
        var ele_message = document.getElementById("ch-plugin-message");
        ele_message.innerHTML = options.message;
      }

      if (options.default == "OPENED") {
        changeView(true);
      } else if (options.default == "CLOSED") {
        changeView(false);
      } else if (options.default == "INVITE") {
        changeView(false);
        var ele = document.getElementById("ch-plugin");
        ele.classList.remove("ch-plugin-message-off");
      }

      initializeWidget(pluginKey, xmplrName, facet);
    }
  }

  function initializeWidget(pluginKey, xmplrName, facet) {
    // iframe에 데이터 전송
    var iframe = document.getElementById("ch-plugin-script-iframe");
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        {
          pluginKey: pluginKey,
          xmplrName: xmplrName,
          facet: facet,
        },
        "*"
      );
      // console.log('iframe loaded');
    } else {
      // console.log('iframe not loaded');
    }
  }

  function checkIframeLoaded(callback) {
    var iframe = document.getElementById("ch-plugin-script-iframe");
    if (iframe) {
      iframe.onload = function () {
        callback();
      };
      if (
        iframe.contentDocument &&
        iframe.contentDocument.readyState === "complete"
      ) {
        callback();
      }
    } else {
      setTimeout(function () {
        checkIframeLoaded(callback);
      }, 100);
    }
  }
})();
