function r({url:e,type:n,title:a,router:o}){const t={webview:1,h5:2,vestBag:3};switch(n){case t.webview:o.push(`/webview?url=${btoa(e)}&title=${a}`);return;case t.h5:window.location.href=e;return;case t.vestBag:return;default:window.location.href=e}}function i(e){return getComputedStyle(document.documentElement).getPropertyValue(e)}export{i as g,r as j};
