import{_ as u,aB as p,ab as f,al as h,o,c as r,h as g,l as n,n as b,G as s,H as w,$ as y,b6 as B,aP as v,aN as L}from"./index-f4623d48.js";const k={class:"iframe-wrapper",id:"iframeWrapper"},V=["src"],E={__name:"WebView",props:{isShowLeft:{type:Boolean,default:!0},isShowRight:{type:Boolean,default:!1}},setup(H){const i=p();let{title:l,url:t}=i.query;t=atob(t),f(()=>{d(),c()});const d=()=>{let e=document.getElementById("iframe");h({duration:0,forbidClick:!0});let a=()=>{B(),e.removeEventListener("load",a,!0)};e.addEventListener("load",a,!0)},c=()=>{document.getElementById("iframeWrapper").style.height=window.innerHeight-46+"px"};return(e,a)=>{const _=v,m=L;return o(),r(y,null,[g(_,{title:n(l)},null,8,["title"]),b("div",k,[n(t)?(o(),r("iframe",{key:0,src:n(t),id:"iframe",width:"100%",height:"100%",frameborder:"0",name:"iframe"},null,8,V)):s("",!0)]),e.loading?(o(),w(m,{key:0})):s("",!0)],64)}}},W=u(E,[["__scopeId","data-v-4b3283aa"]]);export{W as default};