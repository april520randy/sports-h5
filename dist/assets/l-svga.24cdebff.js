import{a4 as t,am as e,M as s,aC as i,o as r,e as a,w as n,f as o,i as h}from"./index-c87fa551.js";import{_ as l}from"./_plugin-vue_export-helper.1b428a4d.js";const m=()=>{let{SDKVersion:e}=t();uni.getEnv||(uni.getEnv=()=>"uni");const s={WEAPP:"2.9.7",TT:"1.78.0",ALIPAY:"2.7.0"}[uni.getEnv()];return s&&e&&function(t,e){t=t.split("."),e=e.split(".");const s=Math.max(t.length,e.length);for(;t.length<s;)t.push("0");for(;e.length<s;)e.push("0");for(let i=0;i<s;i++){const s=parseInt(t[i],10),r=parseInt(e[i],10);if(s>r)return 1;if(s<r)return-1}return 0}(e,s)>=1};class c{constructor(){this.currentSrc=null,this.naturalHeight=0,this.naturalWidth=0,this.width=0,this.height=0,this.tagName="IMG"}set src(t){var s;/^data:/.test(t)?(s=t,new Promise(((t,e)=>{let i=s.split(",")[0].split(":")[1].split(";")[0],r=atob(s.split(",")[1]),a=new ArrayBuffer(r.length),n=new Uint8Array(a);for(let s=0;s<r.length;s++)n[s]=r.charCodeAt(s);t(URL.createObjectURL(new Blob([n],{type:i})))}))).then((t=>{this.currentSrc=t,i(t)})):(this.currentSrc=t,i(t));const i=t=>{e({src:t,success:t=>{this.naturalWidth=this.width=t.width,this.naturalHeight=this.height=t.height,this.onload()},fail:t=>{this.onerror(t)}})}}get src(){return this.currentSrc}}class p{constructor(t,e,s,i){this.canvasId,this.size=e,this.ctx=s,this.pixelRatio=i}requestAnimationFrame(t){return setTimeout((()=>{t()}),1e3/30)}getContext(){const{ctx:t}=this;return t.uniDrawImage=t.drawImage,t.drawImage=(...e)=>{e[0]=e[0].src,t.uniDrawImage(...e)},t}createImage(){return new c}set width(t){this.size.width=t}set height(t){this.size.height=t}get width(){return this.size.width||0}get height(){return this.size.height||0}}let d,u;const g={data:()=>({isInit:null,rparser:null,rplayer:null,clearsAfterStop:!0,videoItem:{},map:{}}),created(){const t=document.createElement("script");t.src="uni_modules/lime-svga/static/svgaplayer.web.js",t.onload=()=>{d=SVGA.Parser,u=SVGA.Player,this.init()},document.head.appendChild(t)},mounted(){},unmounted(){},beforeUnmount(){this.rplayer&&(this.rplayer.stopAnimation(!0),this.rplayer.clear())},beforeDestroy(){this.rplayer&&(this.rplayer.stopAnimation(!0),this.rplayer.clear())},destroyed(){},methods:{init(){this.$nextTick((()=>{const t=this.$ownerInstance.$el.querySelector(".lime-svga__canvas"),e=t.id,s=document.createElement("div"),i=`${e}div`;s.id=i,s.style="height: 100%",t.appendChild&&t.appendChild(s),this.rplayer||(this.rplayer=new u(`#${i}`),this.rplayer.onFinished((()=>{this.emit({onFinished:!0})})),this.rplayer.onFrame((t=>{this.emit({onFrame:t})})),this.rplayer.onPercentage((t=>{this.emit({onPercentage:t})}))),this.rparser||(this.rparser=new d(`#${i}`)),this.isInit=!0}))},emit(t){this.$ownerInstance.callMethod("onMessage",{detail:{data:[{event:t}]}})},parserLoad(t){t&&!this.rparser&&this.$watch("isInit",(()=>{this.load(t)})),this.rparser&&t&&this.load(t)},load(t){console.log(t,"==========================================");const e=/@/.test(t)?t.split("@")[1]:t;this.map[e]?this.emit({load:this.map[e]}):this.rparser.load(e,(t=>{const s="video"+ +new Date;this.map[e]=s,this.videoItem[s]||(this.videoItem[s]=t),this.emit({load:s})}))},setVideoItem(t){t&&(t=t.split("@")[0]),t&&this.videoItem[t]&&this.rplayer&&(this.rplayer.setVideoItem(this.videoItem[t]),this.emit({setVideoItem:!0}))},startAnimation(t){t&&this.rplayer&&this.rplayer.startAnimation(t.reverse||!1)},stopAnimation(t){t&&this.rplayer&&this.rplayer.stopAnimation()},setLoops(t){t>=0&&this.rplayer&&(this.rplayer.loops=t)},clear(t){t&&this.rplayer&&this.rplayer.clear()},pauseAnimation(t){t&&this.rplayer&&this.rplayer.pauseAnimation()},startAnimationWithRange(t){t&&this.rplayer&&this.rplayer.startAnimationWithRange(t.range,t.reverse)},setContentMode(t){t&&this.rplayer&&this.rplayer.setContentMode(t)},onPlayer(t){if("number"==typeof t.rLoops&&this.rLoops2!=t.rLoops&&(this.rLoops2=t.rLoops,this.setLoops(t.rLoops)),t.rStartAnimation&&this.startAnimation(t.rStartAnimation),t.rStopAnimation&&this.stopAnimation(t.rStopAnimation),t.rClear&&this.clear(t.rClear),t.rPauseAnimation&&this.pauseAnimation(t.rPauseAnimation),t.rStartAnimationWithRange&&this.startAnimationWithRange(t.rStartAnimationWithRange),t.rSetContentMode&&this.setContentMode(t.rSetContentMode),t.rClearsAfterStop!=this.clearsAfterStop&&this.rplayer&&(this.clearsAfterStop=t.rClearsAfterStop,this.rplayer.clearsAfterStop=t.rClearsAfterStop),t.rSetText&&this.setText!=t.rSetText){this.setText=t.rSetText;for(let t in this.setText)this.rplayer&&this.rplayer.setText(this.setText[t],t)}if(t.rSetImage&&this.setImage!=t.rSetImage){this.setImage=t.rSetImage;for(let t in this.setImage)this.rplayer&&this.rplayer.setImage(this.setImage[t],t)}}}},S=t=>{t.$renderjs||(t.$renderjs=[]),t.$renderjs.push("svga"),t.mixins||(t.mixins=[]),t.mixins.push({beforeCreate(){this.svga=this},mounted(){this.$ownerInstance=this.$gcd(this,!0)}}),t.mixins.push(g)},A={props:{type:{type:String,default:"2d"},src:String},data:()=>({use2dCanvas:!0,nIsInit:!1,rIsLoad:!1,rLoadSrc:null,rVideoItem:null,rSetVideoItem:!1,rStartAnimation:null,rStopAnimation:null,rLoops:null,rClear:!1,rPauseAnimation:null,rSetContentMode:null,rClearsAfterStop:!0,rStartAnimationWithRange:null,rSetText:null,rSetImage:null,rOnFinished:!1,rOnFrame:0,rOnPercentage:0}),computed:{rPlayer(){const{rClearsAfterStop:t,rSetContentMode:e,rLoops:s,rStartAnimation:i,rStopAnimation:r,rClear:a,rPauseAnimation:n,rStartAnimationWithRange:o,rSetText:h,rSetImage:l}=this;return{rClearsAfterStop:t,rSetContentMode:e,rLoops:s,rStartAnimation:i,rStopAnimation:r,rClear:a,rPauseAnimation:n,rStartAnimationWithRange:o,rSetText:h,rSetImage:l}},canvasId(){return this._?`lime-svga${this._.uid}`:`lime-svga${this._uid}`}},methods:{onMessage(t){const{detail:{data:[e]}={}}=t,{data:s,event:i}=e;Array.isArray(e)?console.log(...e):(i.onPercentage&&(this.rOnPercentage=i.onPercentage),i.onFrame>=0&&(this.rOnFrame=i.onFrame),i.onFinished&&(this.rOnFinished=!0),i.inited&&(this.nIsInit=!0),i.load&&(this.rIsLoad=`${i.load}@${+new Date}`),i.setVideoItem&&(this.rSetVideoItem=!0))},setSvga(t){t(this.parser,this.player)},getContext(){return new Promise((e=>{const{pixelRatio:r}=t();this.use2dCanvas?s().in(this).select(`#${this.canvasId}`).fields({node:!0,size:!0}).exec((t=>{let{node:s,width:i,height:a}=t[0];e({canvas:s,width:i,height:a,pixelRatio:r})})):s().in(this).select(`#${this.canvasId}`).boundingClientRect().exec((t=>{if(t){const{width:s,height:a}=t[0],n=i(this.canvasId,this),o=new p(this.canvasId,t[0],n,r);e({canvas:o,width:s,height:a,pixelRatio:1})}}))}))},async render(t){await this.$nextTick(),await this.getContext();const e=this;this.parser={load:async t=>{const s=await(i=t,new Promise((t=>{/^\/static/.test(i)||t(i),t(i)})));var i;return e.rLoadSrc=`svga${+new Date}@${s}`,new Promise((t=>{e.stopWatch=e.$watch("rIsLoad",((s,i)=>{s!=i&&(e.stopWatch(),t(s))}))}))}},this.player=new class{constructor(t){this.imageBus={},this.textBus={},this.resetBus=[],this.component=t}set loops(t){this.component.rLoops=t}set clearsAfterStop(t){this.component.rClearsAfterStop=t}set fillMode(t){this.component.rFillMode=t}clear(){this.component.rClear=!0,this.reset("rClear")}pauseAnimation(){this.component.rPauseAnimation=!0,this.reset("rPauseAnimation")}reset(t){t&&(t&&!this.resetBus.includes(t)&&this.resetBus.push(t),clearTimeout(this.resetTimer),this.resetTimer=setTimeout((()=>{for(;this.resetBus.length;){const t=this.resetBus.shift();this.component[t]=!1}}),30))}setVideoItem(t){const e=this.component;return e.rVideoItem=t,e.rOnFinished=!1,new Promise((t=>{const s=e.$watch("rSetVideoItem",(e=>{e&&(t(!0),this.reset("rSetVideoItem"),s())}))}))}startAnimation(t){this.component.rStartAnimation={reverse:t},this.reset("rStartAnimation")}stopAnimation(t){this.component.rStopAnimation={clear:t},this.reset("rStopAnimation")}startAnimationWithRange(t,e){this.component.rStartAnimationWithRange={range:t,reverse:e},this.reset("rStartAnimation")}onFinished(t){const e=this.component.$watch("rOnFinished",(s=>{s&&(t(),e())}))}onFrame(t){const e=this.component.$watch("rOnFrame",(s=>{t(s),e()}))}onPercentage(t){const e=this.component.$watch("rOnPercentage",(s=>{t(s),e()}))}stepToFrame(t,e=!1){console.log("未实现")}stepToPercentage(t,e=!1){console.log("未实现")}setContentMode(t){this.component.rSetContentMode=t,this.reset("rSetContentMode")}setText(t,e){clearTimeout(this.textTimer),this.textBus[e]||(this.textBus[e]=t),this.textTimer=setTimeout((()=>{this.component.rSetText=this.textBus,this.textBus={},this.reset("rSetText")}),5)}setImage(t,e){clearTimeout(this.imageTimer),this.imageBus[e]||(this.imageBus[e]=t),this.imageTimer=setTimeout((()=>{this.component.rSetImage=this.imageBus,this.imageBus={},this.reset("rSetImage")}),5)}}(this),t(this.parser,this.player)}},mounted(){this.src&&this.render((async(t,e)=>{const s=await t.load(this.src);await e.setVideoItem(s),e.startAnimation()}))},created(){this.use2dCanvas="2d"===this.type&&m()},beforeDestroy(){this.player&&(this.player.stopAnimation(!0),this.player.clear())}};S(A);const y=l(A,[["render",function(t,e,s,i,l,m){const c=h;return r(),a(c,{class:"lime-svga"},{default:n((()=>[o(c,{class:"lime-svga__canvas",id:m.canvasId,ref:"webview",rload:l.rLoadSrc,"change:rload":t.svga.parserLoad,rVideoItem:l.rVideoItem,"change:rVideoItem":t.svga.setVideoItem,rPlayer:m.rPlayer,"change:rPlayer":t.svga.onPlayer},null,8,["id","rload","change:rload","rVideoItem","change:rVideoItem","rPlayer","change:rPlayer"])])),_:1})}],["__scopeId","data-v-0844c7dc"]]);export{y as _};