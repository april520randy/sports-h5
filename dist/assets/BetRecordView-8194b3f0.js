import{h as $,t as b,n as N,P as T,m as U,d as z,r as C,a5 as j,at as F,b as S,Y as H,j as D,au as K,U as M,f as a,V as Y,av as q,O as L,Q,i as Z,aw as G,ax as J,u as E,ay as X,F as ee,N as te,aa as oe,l as ne,I as ae,q as R,o as le,c as se,x as re,al as ie,z as ce,y as ue}from"./index-bc3b0c30.js";import{E as de}from"./index-778a11b4.js";import{C as pe}from"./index-109af657.js";import{u as ve}from"./use-id-bc98e96e.js";const[W,x]=$("dropdown-menu"),me={overlay:b,zIndex:N,duration:T(.2),direction:U("down"),activeColor:String,closeOnClickOutside:b,closeOnClickOverlay:b},A=Symbol(W);var fe=z({name:W,props:me,setup(t,{slots:i}){const c=ve(),p=C(),o=C(),s=C(0),{children:r,linkChildren:u}=j(A),w=F(p),v=S(()=>r.some(e=>e.state.showWrapper)),m=S(()=>{if(v.value&&H(t.zIndex))return{zIndex:+t.zIndex+1}}),y=()=>{r.forEach(e=>{e.toggle(!1)})},k=()=>{t.closeOnClickOutside&&y()},h=()=>{if(o.value){const e=Y(o);t.direction==="down"?s.value=e.bottom:s.value=q.value-e.top}},O=()=>{v.value&&h()},V=e=>{r.forEach((n,l)=>{l===e?n.toggle():n.state.showPopup&&n.toggle(!1,{immediate:!0})})},P=(e,n)=>{const{showPopup:l}=e.state,{disabled:d,titleClass:f}=e;return a("div",{id:`${c}-${n}`,role:"button",tabindex:d?void 0:0,class:[x("item",{disabled:d}),{[L]:!d}],onClick:()=>{d||V(n)}},[a("span",{class:[x("title",{down:l===(t.direction==="down"),active:l}),f],style:{color:l?t.activeColor:""}},[a("div",{class:"van-ellipsis"},[e.renderTitle()])])])};return D({close:y}),u({id:c,props:t,offset:s,updateOffset:h}),K(p,k),M("scroll",O,{target:w,passive:!0}),()=>{var e;return a("div",{ref:p,class:x()},[a("div",{ref:o,style:m.value,class:x("bar",{opened:v.value})},[r.map(P)]),(e=i.default)==null?void 0:e.call(i)])}}});const[we,g]=$("dropdown-item"),Ce={title:String,options:J(),disabled:Boolean,teleport:[String,Object],lazyRender:b,modelValue:E,titleClass:E};var ye=z({name:we,inheritAttrs:!1,props:Ce,emits:["open","opened","close","closed","change","update:modelValue"],setup(t,{emit:i,slots:c,attrs:p}){const o=Q({showPopup:!1,transition:!0,showWrapper:!1}),{parent:s,index:r}=Z(A);if(!s)return;const u=e=>()=>i(e),w=u("open"),v=u("close"),m=u("opened"),y=()=>{o.showWrapper=!1,i("closed")},k=e=>{t.teleport&&e.stopPropagation()},h=(e=!o.showPopup,n={})=>{e!==o.showPopup&&(o.showPopup=e,o.transition=!n.immediate,e&&(s.updateOffset(),o.showWrapper=!0))},O=()=>{if(c.title)return c.title();if(t.title)return t.title;const e=t.options.find(n=>n.value===t.modelValue);return e?e.text:""},V=e=>{const{activeColor:n}=s.props,l=e.value===t.modelValue,d=()=>{o.showPopup=!1,e.value!==t.modelValue&&(i("update:modelValue",e.value),i("change",e.value))},f=()=>{if(l)return a(ae,{class:g("icon"),color:n,name:"success"},null)};return a(pe,{role:"menuitem",key:e.value,icon:e.icon,title:e.text,class:g("option",{active:l}),style:{color:l?n:""},tabindex:l?0:-1,clickable:!0,onClick:d},{value:f})},P=()=>{const{offset:e}=s,{zIndex:n,overlay:l,duration:d,direction:f,closeOnClickOverlay:B}=s.props,I=X(n);return f==="down"?I.top=`${e.value}px`:I.bottom=`${e.value}px`,ee(a("div",ne({style:I,class:g([f]),onClick:k},p),[a(oe,{show:o.showPopup,"onUpdate:show":_=>o.showPopup=_,role:"menu",class:g("content"),overlay:l,position:f==="down"?"top":"bottom",duration:o.transition?d:0,lazyRender:t.lazyRender,overlayStyle:{position:"absolute"},"aria-labelledby":`${s.id}-${r.value}`,closeOnClickOverlay:B,onOpen:w,onClose:v,onOpened:m,onClosed:y},{default:()=>{var _;return[t.options.map(V),(_=c.default)==null?void 0:_.call(c)]}})]),[[te,o.showWrapper]])};return D({state:o,toggle:h,renderTitle:O}),()=>t.teleport?a(G,{to:t.teleport},{default:()=>[P()]}):P()}});const he=R(ye),Pe=R(fe);const ke={__name:"BetRecordView",setup(t){const i=C(0),c=C("a"),p=[{text:"全部",value:0}],o=[{text:"今日",value:"a"},{text:"昨日",value:"b"},{text:"近7日",value:"c"},{text:"近30日",value:"d"}];return(s,r)=>{const u=he,w=Pe,v=de;return le(),se("div",null,[a(re(ie),{title:"投注记录"}),a(w,null,{default:ce(()=>[a(u,{modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=m=>i.value=m),options:p},null,8,["modelValue"]),a(u,{modelValue:c.value,"onUpdate:modelValue":r[1]||(r[1]=m=>c.value=m),options:o},null,8,["modelValue"])]),_:1}),ue("div",null,[a(v,{description:"暂无数据"})])])}}};export{ke as default};