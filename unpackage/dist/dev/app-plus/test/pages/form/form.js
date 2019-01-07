
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"title { padding: 10px 0 !important; }\n",],undefined,{path:"./pages/form/form.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/form/form.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      