import{j as q,d as K,h as l,a0 as D,t as H,s as re,aM as pe,v as me,b as B,n as ae,S as ue,aV as we,r as I,f as O,w as Y,W as be,aq as G,aX as $,Z as xe,ar as ye,X as ve,b1 as Ie,ay as Ce,R as E,u as oe,m as se,l as ke,a4 as Pe,aK as Te,aw as Se,aJ as $e,q as Re,ab as ze,Q as Xe,I as Ye,ah as Le,_ as J,o as p,c as C,a1 as W,A as x,M as N,L as He,O as U,B as Z,N as ie,C as Ne,J as Ze,b2 as De}from"./index-b00f018c.js";import{I as Me}from"./index-c478677d.js";import{a as Be,S as Oe}from"./index-1279be93.js";import{a as Ee,T as We}from"./index-5a30bf3e.js";import je from"./IcoRedlikes-062fc76b.js";import Ae from"./Iconlikes-987ef467.js";import{C as Ve}from"./index-37a9e194.js";import"./use-id-ee0580cc.js";const[Ge,ne]=q("cell-group"),Fe={title:String,inset:Boolean,border:H};var Ue=K({name:Ge,inheritAttrs:!1,props:Fe,setup(t,{slots:n,attrs:v}){const e=()=>{var r;return l("div",re({class:[ne({inset:t.inset}),{[pe]:t.border&&!t.inset}]},v),[(r=n.default)==null?void 0:r.call(n)])},o=()=>l("div",{class:ne("title",{inset:t.inset})},[n.title?n.title():t.title]);return()=>t.title||n.title?l(D,null,[o(),e()]):e()}});const qe=me(Ue),le=t=>Math.sqrt((t[0].clientX-t[1].clientX)**2+(t[0].clientY-t[1].clientY)**2),Ke=t=>({x:(t[0].clientX+t[1].clientX)/2,y:(t[0].clientY+t[1].clientY)/2}),F=q("image-preview")[1],ce=2.6;var Je=K({props:{src:String,show:Boolean,active:Number,minZoom:B(ae),maxZoom:B(ae),rootWidth:B(Number),rootHeight:B(Number),disableZoom:Boolean},emits:["scale","close","longPress"],setup(t,{emit:n,slots:v}){const e=ue({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,initializing:!1,imageRatio:0}),o=we(),r=I(),d=I(),w=I(!1),g=I(!1);let _=0;const m=O(()=>{const{scale:a,moveX:s,moveY:i,moving:f,zooming:b,initializing:z}=e,M={transitionDuration:b||f||z?"0s":".3s"};return(a!==1||g.value)&&(M.transform=`matrix(${a}, 0, 0, ${a}, ${s}, ${i})`),M}),u=O(()=>{if(e.imageRatio){const{rootWidth:a,rootHeight:s}=t,i=w.value?s/e.imageRatio:a;return Math.max(0,(e.scale*i-a)/2)}return 0}),y=O(()=>{if(e.imageRatio){const{rootWidth:a,rootHeight:s}=t,i=w.value?s:a*e.imageRatio;return Math.max(0,(e.scale*i-s)/2)}return 0}),h=(a,s)=>{var i;if(a=$(a,+t.minZoom,+t.maxZoom+1),a!==e.scale){const f=a/e.scale;if(e.scale=a,s){const b=ve((i=r.value)==null?void 0:i.$el),z={x:b.width*.5,y:b.height*.5},M=e.moveX-(s.x-b.left-z.x)*(f-1),fe=e.moveY-(s.y-b.top-z.y)*(f-1);e.moveX=$(M,-u.value,u.value),e.moveY=$(fe,-y.value,y.value)}else e.moveX=0,e.moveY=g.value?_:0;n("scale",{scale:a,index:t.active})}},R=()=>{h(1)},j=()=>{const a=e.scale>1?1:2;h(a,a===2||g.value?{x:o.startX.value,y:o.startY.value}:void 0)};let T,S,c,k,P,A,L,Q,V=!1;const de=a=>{const{touches:s}=a;if(T=s.length,T===2&&t.disableZoom)return;const{offsetX:i}=o;o.start(a),S=e.moveX,c=e.moveY,Q=Date.now(),V=!1,e.moving=T===1&&(e.scale!==1||g.value),e.zooming=T===2&&!i.value,e.zooming&&(k=e.scale,P=le(s))},ge=a=>{const{touches:s}=a;if(o.move(a),e.moving){const{deltaX:i,deltaY:f}=o,b=i.value+S,z=f.value+c;if((b>u.value||b<-u.value)&&!V&&o.isHorizontal()){e.moving=!1;return}V=!0,G(a,!0),e.moveX=$(b,-u.value,u.value),e.moveY=$(z,-y.value,y.value)}if(e.zooming&&(G(a,!0),s.length===2)){const i=le(s),f=k*i/P;A=Ke(s),h(f,A)}},_e=()=>{if(T>1)return;const{offsetX:a,offsetY:s}=o,i=Date.now()-Q,f=250,b=5;a.value<b&&s.value<b&&(i<f?L?(clearTimeout(L),L=null,j()):L=setTimeout(()=>{n("close"),L=null},f):i>Ie&&n("longPress"))},ee=a=>{let s=!1;if((e.moving||e.zooming)&&(s=!0,e.moving&&S===e.moveX&&c===e.moveY&&(s=!1),!a.touches.length)){e.zooming&&(e.moveX=$(e.moveX,-u.value,u.value),e.moveY=$(e.moveY,-y.value,y.value),e.zooming=!1),e.moving=!1,S=0,c=0,k=1,e.scale<1&&R();const i=+t.maxZoom;e.scale>i&&h(i,A)}G(a,s),_e(),o.reset()},te=()=>{const{rootWidth:a,rootHeight:s}=t,i=s/a,{imageRatio:f}=e;w.value=e.imageRatio>i&&f<ce,g.value=e.imageRatio>i&&f>=ce,g.value&&(_=(f*a-s)/2,e.moveY=_,e.initializing=!0,xe(()=>{e.initializing=!1})),R()},he=a=>{const{naturalWidth:s,naturalHeight:i}=a.target;e.imageRatio=i/s,te()};return Y(()=>t.active,R),Y(()=>t.show,a=>{a||R()}),Y(()=>[t.rootWidth,t.rootHeight],te),be("touchmove",ge,{target:O(()=>{var a;return(a=d.value)==null?void 0:a.$el})}),()=>{const a={loading:()=>l(ye,{type:"spinner"},null)};return l(Be,{ref:d,class:F("swipe-item"),onTouchstartPassive:de,onTouchend:ee,onTouchcancel:ee},{default:()=>[v.image?l("div",{class:F("image-wrap")},[v.image({src:t.src})]):l(Me,{ref:r,src:t.src,fit:"contain",class:F("image",{vertical:w.value}),style:m.value,onLoad:he},a)]})}}});const[Qe,X]=q("image-preview"),et=["show","teleport","transition","overlayStyle","closeOnPopstate"],tt={show:Boolean,loop:H,images:Ce(),minZoom:E(1/3),maxZoom:E(3),overlay:H,closeable:Boolean,showIndex:H,className:oe,closeIcon:se("clear"),transition:String,beforeClose:Function,overlayClass:oe,overlayStyle:Object,swipeDuration:E(300),startPosition:E(0),showIndicators:Boolean,closeOnPopstate:H,closeIconPosition:se("top-right"),teleport:[String,Object]};var at=K({name:Qe,props:tt,emits:["scale","close","closed","change","longPress","update:show"],setup(t,{emit:n,slots:v}){const e=I(),o=ue({active:0,rootWidth:0,rootHeight:0,disableZoom:!1}),r=()=>{if(e.value){const c=ve(e.value.$el);o.rootWidth=c.width,o.rootHeight=c.height,e.value.resize()}},d=c=>n("scale",c),w=c=>n("update:show",c),g=()=>{Le(t.beforeClose,{args:[o.active],done:()=>w(!1)})},_=c=>{c!==o.active&&(o.active=c,n("change",c))},m=()=>{if(t.showIndex)return l("div",{class:X("index")},[v.index?v.index({index:o.active}):`${o.active+1} / ${t.images.length}`])},u=()=>{if(v.cover)return l("div",{class:X("cover")},[v.cover()])},y=()=>{o.disableZoom=!0},h=()=>{o.disableZoom=!1},R=()=>l(Oe,{ref:e,lazyRender:!0,loop:t.loop,class:X("swipe"),duration:t.swipeDuration,initialSwipe:t.startPosition,showIndicators:t.showIndicators,indicatorColor:"white",onChange:_,onDragEnd:h,onDragStart:y},{default:()=>[t.images.map((c,k)=>l(Je,{src:c,show:t.show,active:o.active,maxZoom:t.maxZoom,minZoom:t.minZoom,rootWidth:o.rootWidth,rootHeight:o.rootHeight,disableZoom:o.disableZoom,onScale:d,onClose:g,onLongPress:()=>n("longPress",{index:k})},{image:v.image}))]}),j=()=>{if(t.closeable)return l(Ye,{role:"button",name:t.closeIcon,class:[X("close-icon",t.closeIconPosition),Xe],onClick:g},null)},T=()=>n("closed"),S=(c,k)=>{var P;return(P=e.value)==null?void 0:P.swipeTo(c,k)};return ke({swipeTo:S}),Pe(r),Y([Te,Se],r),Y(()=>t.startPosition,c=>_(+c)),Y(()=>t.show,c=>{const{images:k,startPosition:P}=t;c?(_(+P),$e(()=>{r(),S(+P,{immediate:!0})})):n("close",{index:o.active,url:k[o.active]})}),()=>l(ze,re({class:[X(),t.className],overlayClass:[X("overlay"),t.overlayClass],onClosed:T,"onUpdate:show":w},Re(t,et)),{default:()=>[j(),R(),m(),u()]})}});const ot=me(at);const st="/sports-h5/dist/assets/avator-fc415b35.png";const it={class:"lap-date"},nt={class:"month-date"},lt={class:"date-time"},ct={class:"lap-img"},rt={class:"copywriting"},mt={class:"lap-content"},ut=["onClick"],vt=["src"],dt={class:"likes"},gt={__name:"HerDynamic",emits:["handImgClick"],setup(t,{emit:n}){const v=I([{date:"12月30",time:"08:36",text:"我们虚张声势的人，只要被爱就会变成粘人小狗 O(∩_∩)O~~",imgList:[{path:"../img/img.png",id:1},{path:"../img/img.png",id:2},{path:"../img/img.png",id:3},{path:"../img/img.png",id:4},{path:"../img/img.png",id:5}],value:1,likesNum:1021,status:!0},{date:"12月30",time:"08:34",text:"人生是旷野，不是轨道。今天继续冲呀～",imgList:[{path:"../img/two.png",id:6}],value:2,likesNum:1021,status:!0},{date:"12月30",time:"08:34",text:"人生是旷野，不是轨道。今天继续冲呀～",imgList:[{path:"../img/two.png",id:7}],value:3,likesNum:1021,status:!0},{date:"12月30",time:"08:34",text:"人生是旷野，不是轨道。今天继续冲呀～",imgList:[{path:"../img/two.png",id:8}],value:4,likesNum:1021,status:!0}]),e=d=>new URL(d,import.meta.url).href,o=d=>{d.status=!d.status};function r(d){n("handImgClick",d)}return(d,w)=>{const g=Ae,_=je;return p(!0),C(D,null,W(v.value,m=>(p(),C("div",{class:"tab-content",key:m.value},[x("div",it,[x("div",nt,N(m.date),1),x("div",lt,N(m.time),1)]),x("div",ct,[x("div",rt,N(m.text),1),x("div",mt,[(p(!0),C(D,null,W(m.imgList,u=>(p(),C("div",{class:He({"img-box":m.imgList.length>1,"img-box-one":m.imgList.length==1}),key:u.id,onClick:y=>r(m.imgList)},[x("img",{src:e(u.path),alt:""},null,8,vt)],10,ut))),128))]),x("div",dt,[m.status?(p(),U(g,{key:0,class:"svg-icon",onClick:u=>o(m)},null,8,["onClick"])):(p(),U(_,{key:1,class:"svg-icon",onClick:u=>o(m)},null,8,["onClick"])),x("text",null,N(m.likesNum),1)])])]))),128)}}},_t=J(gt,[["__scopeId","data-v-cb53b835"]]);const ht={class:"info-content"},ft={class:"lap-content"},pt=["src"],wt={__name:"HerInformation",setup(t){const n=I({height:"172Cm",weight:"48KG",birthday:"1992-12-16",hobby:"打球 旅行 看书",status:"未公开",imgList:[{path:"../img/img.png",id:1},{path:"../img/img.png",id:2},{path:"../img/img.png",id:3},{path:"../img/img.png",id:4},{path:"../img/img.png",id:5}]}),v=e=>new URL(e,import.meta.url).href;return(e,o)=>{const r=Ve,d=qe;return p(),C("div",ht,[x("div",null,[l(d,null,{default:Z(()=>[l(r,{title:"身高",size:"large",value:n.value.height},null,8,["value"]),l(r,{title:"体重",size:"large",value:"48KG"}),l(r,{title:"生日",size:"large",value:"1992-12-16"}),l(r,{title:"爱好",size:"large",value:"打球 旅行 看书"}),l(r,{title:"情感状态",size:"large",value:"未公开"}),l(r,{title:"照片墙",size:"large"},{label:Z(()=>[x("div",ft,[(p(!0),C(D,null,W(n.value.imgList,w=>(p(),C("div",{class:"img-box",key:w.id},[x("img",{src:v(w.path),alt:""},null,8,pt)]))),128))])]),_:1})]),_:1})])])}}},bt=J(wt,[["__scopeId","data-v-8e029d0d"]]);const xt={class:"content-box"},yt=Ze('<div class="head-card" data-v-bff33548><div class="avatar" data-v-bff33548><img src="'+st+'" alt="" data-v-bff33548></div><div class="avaname" data-v-bff33548>画画的babe</div><div class="avatext" data-v-bff33548> 万物皆有裂痕，那是光照进来的地方。万物皆有裂痕，那是光照进来的地方。 </div></div>',1),It={class:"ava-tab"},Ct={key:0,class:"tab-item"},kt={key:1,class:"tab-item"},Pt={__name:"AnchorInforView",setup(t){const n=I(0),v=I([{title:"Ta的动态",value:1},{title:"Ta的资料",value:2}]),e=I(!1),o=I(0),r=["https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg","https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg","https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg","https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"],d=g=>{o.value=g};function w(g){var _=De(g);e.value=!0,console.log(_,"444")}return(g,_)=>{const m=Ee,u=We,y=ot;return p(),C("div",xt,[yt,x("div",It,[l(u,{active:n.value,"onUpdate:active":_[0]||(_[0]=h=>n.value=h),swipeable:""},{default:Z(()=>[(p(!0),C(D,null,W(v.value,h=>(p(),U(m,{key:h.value,title:h.title},{default:Z(()=>[h.value=="1"?(p(),C("div",Ct,[l(_t,{onHandImgClick:w})])):ie("",!0),h.value=="2"?(p(),C("div",kt,[l(bt)])):ie("",!0)]),_:2},1032,["title"]))),128))]),_:1},8,["active"])]),l(y,{show:e.value,"onUpdate:show":_[1]||(_[1]=h=>e.value=h),images:r,onChange:d,showIndicators:!0,showIndex:!1},{index:Z(()=>[Ne("第"+N(o.value+1)+"页",1)]),_:1},8,["show"])])}}},Ht=J(Pt,[["__scopeId","data-v-bff33548"]]);export{Ht as default};