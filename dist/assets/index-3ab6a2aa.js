import{L as h,a4 as g,K as C,d as P,e as S,a5 as x,t as z,r as y,b as r,h as d,R as B,a6 as D}from"./index-f4623d48.js";const G={name:h,shape:g("round"),disabled:Boolean,iconSize:C,modelValue:h,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var V=P({props:S({},G,{bem:x(Function),role:String,parent:Object,checked:Boolean,bindGroup:z}),emits:["click","toggle"],setup(e,{emit:s,slots:t}){const u=y(),o=n=>{if(e.parent&&e.bindGroup)return e.parent.props[n]},c=r(()=>{if(e.parent&&e.bindGroup){const n=o("disabled")||e.disabled;if(e.role==="checkbox"){const l=o("modelValue").length,a=o("max"),i=a&&l>=+a;return n||i&&!e.checked}return n}return e.disabled}),m=r(()=>o("direction")),f=r(()=>{const n=e.checkedColor||o("checkedColor");if(n&&e.checked&&!c.value)return{borderColor:n,backgroundColor:n}}),v=n=>{const{target:l}=n,a=u.value,i=a===l||(a==null?void 0:a.contains(l));!c.value&&(i||!e.labelDisabled)&&s("toggle"),s("click",n)},b=()=>{const{bem:n,shape:l,checked:a}=e,i=e.iconSize||o("iconSize");return d("div",{ref:u,class:n("icon",[l,{disabled:c.value,checked:a}]),style:{fontSize:D(i)}},[t.icon?t.icon({checked:a,disabled:c.value}):d(B,{name:"success",style:f.value},null)])},k=()=>{if(t.default)return d("span",{class:e.bem("label",[e.labelPosition,{disabled:c.value}])},[t.default()])};return()=>{const n=e.labelPosition==="left"?[k(),b()]:[b(),k()];return d("div",{role:e.role,class:e.bem([{disabled:c.value,"label-disabled":e.labelDisabled},m.value]),tabindex:c.value?void 0:0,"aria-checked":e.checked,onClick:v},[n])}}});export{G as c,V as s};