import{aA as de,X as J,aB as ue,aC as Ne,r as C,aD as Oe,ah as Le,aE as Ee,aF as He,S as fe,h as D,n as z,m as ve,P as O,d as M,at as he,Q as be,b as I,aG as me,e as ge,ay as We,w as $,U as ye,aH as Q,aI as A,V as L,aJ as we,av as De,f as m,q as p,a as Y,a3 as Me,j as ee,t as X,a5 as Fe,aK as Ze,R as Ue,g as ie,Y as G,aL as Ve,aM as je,aN as oe,ag as Ke,aO as Xe,aP as Ye,a6 as qe,u as Je,aQ as Qe,i as Ge,aR as pe,W as et,aS as tt,F as nt,N as at,J as lt,aT as it,a0 as ot,l as st,p as se}from"./index-95ea299f.js";import{u as xe}from"./use-id-3849c0ed.js";import{S as rt,a as ct}from"./index-dcf88bc5.js";function dt(e,a,o){let l,r=0;const t=e.scrollLeft,s=o===0?1:Math.round(o*1e3/16);function c(){de(l)}function v(){e.scrollLeft+=(a-t)/s,++r<s&&(l=J(v))}return v(),c}function ut(e,a,o,l){let r,t=ue(e);const s=t<a,c=o===0?1:Math.round(o*1e3/16),v=(a-t)/c;function g(){de(r)}function w(){t+=v,(s&&t>a||!s&&t<a)&&(t=a),Ne(e,t),s&&t<a||!s&&t>a?r=J(w):l&&(r=J(l))}return w(),g}function ft(){const e=C([]),a=[];return Oe(()=>{e.value=[]}),[e,l=>(a[l]||(a[l]=r=>{e.value[l]=r}),a[l])]}function Se(e,a){if(!Le||!window.IntersectionObserver)return;const o=new IntersectionObserver(t=>{a(t[0].intersectionRatio>0)},{root:document.body}),l=()=>{e.value&&o.observe(e.value)},r=()=>{e.value&&o.unobserve(e.value)};Ee(r),He(r),fe(l)}const[vt,ht]=D("sticky"),bt={zIndex:z,position:ve("top"),container:Object,offsetTop:O(0),offsetBottom:O(0)};var mt=M({name:vt,props:bt,emits:["scroll","change"],setup(e,{emit:a,slots:o}){const l=C(),r=he(l),t=be({fixed:!1,width:0,height:0,transform:0}),s=C(!1),c=I(()=>me(e.position==="top"?e.offsetTop:e.offsetBottom)),v=I(()=>{if(s.value)return;const{fixed:f,height:T,width:u}=t;if(f)return{width:`${u}px`,height:`${T}px`}}),g=I(()=>{if(!t.fixed||s.value)return;const f=ge(We(e.zIndex),{width:`${t.width}px`,height:`${t.height}px`,[e.position]:`${c.value}px`});return t.transform&&(f.transform=`translate3d(0, ${t.transform}px, 0)`),f}),w=f=>a("scroll",{scrollTop:f,isFixed:t.fixed}),k=()=>{if(!l.value||Q(l))return;const{container:f,position:T}=e,u=L(l),S=ue(window);if(t.width=u.width,t.height=u.height,T==="top")if(f){const d=L(f),B=d.bottom-c.value-t.height;t.fixed=c.value>u.top&&d.bottom>0,t.transform=B<0?B:0}else t.fixed=c.value>u.top;else{const{clientHeight:d}=document.documentElement;if(f){const B=L(f),b=d-B.top-c.value-t.height;t.fixed=d-c.value<u.bottom&&d>B.top,t.transform=b<0?-b:0}else t.fixed=d-c.value<u.bottom}w(S)};return $(()=>t.fixed,f=>a("change",f)),ye("scroll",k,{target:r,passive:!0}),Se(l,k),$([we,De],()=>{!l.value||Q(l)||!t.fixed||(s.value=!0,A(()=>{const f=L(l);t.width=f.width,t.height=f.height,s.value=!1}))}),()=>{var f;return m("div",{ref:l,style:v.value},[m("div",{class:ht({fixed:t.fixed&&!s.value}),style:g.value},[(f=o.default)==null?void 0:f.call(o)])])}}});const gt=p(mt),[yt,re]=D("tabs");var wt=M({name:yt,props:{count:Y(Number),inited:Boolean,animated:Boolean,duration:Y(z),swipeable:Boolean,lazyRender:Boolean,currentIndex:Y(Number)},emits:["change"],setup(e,{emit:a,slots:o}){const l=C(),r=c=>a("change",c),t=()=>{var c;const v=(c=o.default)==null?void 0:c.call(o);return e.animated||e.swipeable?m(rt,{ref:l,loop:!1,class:re("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:r},{default:()=>[v]}):v},s=c=>{const v=l.value;v&&v.state.active!==c&&v.swipeTo(c,{immediate:!e.inited})};return $(()=>e.currentIndex,s),Me(()=>{s(e.currentIndex)}),ee({swipeRef:l}),()=>m("div",{class:re("content",{animated:e.animated||e.swipeable})},[t()])}});const[Te,K]=D("tabs"),xt={type:ve("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:O(0),duration:O(.3),animated:Boolean,ellipsis:X,swipeable:Boolean,scrollspy:Boolean,offsetTop:O(0),background:String,lazyRender:X,lineWidth:z,lineHeight:z,beforeChange:Function,swipeThreshold:O(5),titleActiveColor:String,titleInactiveColor:String},Ce=Symbol(Te);var St=M({name:Te,props:xt,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:a,slots:o}){let l,r,t,s,c;const v=C(),g=C(),w=C(),k=C(),f=xe(),T=he(v),[u,S]=ft(),{children:d,linkChildren:B}=Fe(Ce),b=be({inited:!1,position:"",lineStyle:{},currentIndex:-1}),E=I(()=>d.length>+e.swipeThreshold||!e.ellipsis||e.shrink),F=I(()=>({borderColor:e.color,background:e.background})),H=(n,i)=>{var h;return(h=n.name)!=null?h:i},Z=I(()=>{const n=d[b.currentIndex];if(n)return H(n,b.currentIndex)}),N=I(()=>me(e.offsetTop)),te=I(()=>e.sticky?N.value+l:0),W=n=>{const i=g.value,h=u.value;if(!E.value||!i||!h||!h[b.currentIndex])return;const x=h[b.currentIndex].$el,y=x.offsetLeft-(i.offsetWidth-x.offsetWidth)/2;s&&s(),s=dt(i,y,n?0:+e.duration)},_=()=>{const n=b.inited;A(()=>{const i=u.value;if(!i||!i[b.currentIndex]||e.type!=="line"||Q(v.value))return;const h=i[b.currentIndex].$el,{lineWidth:x,lineHeight:y}=e,R=h.offsetLeft+h.offsetWidth/2,P={width:ie(x),backgroundColor:e.color,transform:`translateX(${R}px) translateX(-50%)`};if(n&&(P.transitionDuration=`${e.duration}s`),G(y)){const j=ie(y);P.height=j,P.borderRadius=j}b.lineStyle=P})},Re=n=>{const i=n<b.currentIndex?-1:1;for(;n>=0&&n<d.length;){if(!d[n].disabled)return n;n+=i}},U=(n,i)=>{const h=Re(n);if(!G(h))return;const x=d[h],y=H(x,h),R=b.currentIndex!==null;b.currentIndex!==h&&(b.currentIndex=h,i||W(),_()),y!==e.active&&(a("update:active",y),R&&a("change",y,x.title)),t&&!e.scrollspy&&je(Math.ceil(oe(v.value)-N.value))},V=(n,i)=>{const h=d.find((y,R)=>H(y,R)===n),x=h?d.indexOf(h):0;U(x,i)},ne=(n=!1)=>{if(e.scrollspy){const i=d[b.currentIndex].$el;if(i&&T.value){const h=oe(i,T.value)-te.value;r=!0,c&&c(),c=ut(T.value,h,n?0:+e.duration,()=>{r=!1})}}},Ie=(n,i,h)=>{const{title:x,disabled:y}=d[i],R=H(d[i],i);y||(Ke(e.beforeChange,{args:[R],done:()=>{U(i),ne()}}),Xe(n)),a("clickTab",{name:R,title:x,event:h,disabled:y})},ke=n=>{t=n.isFixed,a("scroll",n)},Be=n=>{A(()=>{V(n),ne(!0)})},$e=()=>{for(let n=0;n<d.length;n++){const{top:i}=L(d[n].$el);if(i>te.value)return n===0?0:n-1}return d.length-1},_e=()=>{if(e.scrollspy&&!r){const n=$e();U(n)}},Pe=()=>{if(e.type==="line"&&d.length)return m("div",{class:K("line"),style:b.lineStyle},null)},ae=()=>{var n,i,h;const{type:x,border:y,sticky:R}=e,P=[m("div",{ref:R?void 0:w,class:[K("wrap"),{[Ve]:x==="line"&&y}]},[m("div",{ref:g,role:"tablist",class:K("nav",[x,{shrink:e.shrink,complete:E.value}]),style:F.value,"aria-orientation":"horizontal"},[(n=o["nav-left"])==null?void 0:n.call(o),d.map(j=>j.renderTitle(Ie)),Pe(),(i=o["nav-right"])==null?void 0:i.call(o)])]),(h=o["nav-bottom"])==null?void 0:h.call(o)];return R?m("div",{ref:w},[P]):P},le=()=>{_(),A(()=>{var n,i;W(!0),(i=(n=k.value)==null?void 0:n.swipeRef.value)==null||i.resize()})};$(()=>[e.color,e.duration,e.lineWidth,e.lineHeight],_),$(we,le),$(()=>e.active,n=>{n!==Z.value&&V(n)}),$(()=>d.length,()=>{b.inited&&(V(e.active),_(),A(()=>{W(!0)}))});const Ae=()=>{V(e.active,!0),A(()=>{b.inited=!0,w.value&&(l=L(w.value).height),W(!0)})},ze=(n,i)=>a("rendered",n,i);return ee({resize:le,scrollTo:Be}),Ze(_),Ue(_),fe(Ae),Se(v,_),ye("scroll",_e,{target:T,passive:!0}),B({id:f,props:e,setLine:_,scrollable:E,onRendered:ze,currentName:Z,setTitleRefs:S,scrollIntoView:W}),()=>m("div",{ref:v,class:K([e.type])},[e.sticky?m(gt,{container:v.value,offsetTop:N.value,onScroll:ke},{default:()=>[ae()]}):ae(),m(wt,{ref:k,count:d.length,inited:b.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:b.currentIndex,onChange:U},{default:()=>{var n;return[(n=o.default)==null?void 0:n.call(o)]}})])}});const Tt=Symbol(),[Ct,ce]=D("tab"),Rt=M({name:Ct,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:z,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:X},setup(e,{slots:a}){const o=I(()=>{const r={},{type:t,color:s,disabled:c,isActive:v,activeColor:g,inactiveColor:w}=e;s&&t==="card"&&(r.borderColor=s,c||(v?r.backgroundColor=s:r.color=s));const f=v?g:w;return f&&(r.color=f),r}),l=()=>{const r=m("span",{class:ce("text",{ellipsis:!e.scrollable})},[a.title?a.title():e.title]);return e.dot||G(e.badge)&&e.badge!==""?m(Ye,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[r]}):r};return()=>m("div",{id:e.id,role:"tab",class:[ce([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:o.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[l()])}}),[It,q]=D("tab"),kt=ge({},qe,{dot:Boolean,name:z,badge:z,title:String,disabled:Boolean,titleClass:Je,titleStyle:[String,Object],showZeroBadge:X});var Bt=M({name:It,props:kt,setup(e,{slots:a}){const o=xe(),l=C(!1),r=Qe(),{parent:t,index:s}=Ge(Ce);if(!t)return;const c=()=>{var u;return(u=e.name)!=null?u:s.value},v=()=>{l.value=!0,t.props.lazyRender&&A(()=>{t.onRendered(c(),e.title)})},g=I(()=>{const u=c()===t.currentName.value;return u&&!l.value&&v(),u}),w=C(""),k=C("");pe(()=>{const{titleClass:u,titleStyle:S}=e;w.value=u?lt(u):"",k.value=S&&typeof S!="string"?it(ot(S)):S});const f=u=>m(Rt,st({key:o,id:`${t.id}-${s.value}`,ref:t.setTitleRefs(s.value),style:k.value,class:w.value,isActive:g.value,controls:o,scrollable:t.scrollable.value,activeColor:t.props.titleActiveColor,inactiveColor:t.props.titleInactiveColor,onClick:S=>u(r.proxy,s.value,S)},se(t.props,["type","color","shrink"]),se(e,["dot","badge","title","disabled","showZeroBadge"])),{title:a.title}),T=C(!g.value);return $(g,u=>{u?T.value=!1:et(()=>{T.value=!0})}),$(()=>e.title,()=>{t.setLine(),t.scrollIntoView()}),tt(Tt,g),ee({id:o,renderTitle:f}),()=>{var u;const S=`${t.id}-${s.value}`,{animated:d,swipeable:B,scrollspy:b,lazyRender:E}=t.props;if(!a.default&&!d)return;const F=b||g.value;if(d||B)return m(ct,{id:o,role:"tabpanel",class:q("panel-wrapper",{inactive:T.value}),tabindex:g.value?0:-1,"aria-hidden":!g.value,"aria-labelledby":S},{default:()=>{var N;return[m("div",{class:q("panel")},[(N=a.default)==null?void 0:N.call(a)])]}});const Z=l.value||b||!E?(u=a.default)==null?void 0:u.call(a):null;return nt(m("div",{id:o,role:"tabpanel",class:q("panel"),tabindex:F?0:-1,"aria-labelledby":S},[Z]),[[at,F]])}}});const At=p(Bt),zt=p(St);export{zt as T,At as a};
