import{_ as h,o,c as r,a1 as y,A as l,M as m,h as v,a0 as x,x as k,r as B,f as w,a4 as N,an as Q,B as b,z as $,O as A}from"./index-b00f018c.js";import{T as C,a as D}from"./index-5a30bf3e.js";import"./index-1279be93.js";import I from"./IcoArrowRight-e4a43c7f.js";import{l as f}from"./question-list-data-6f9bed95.js";const R=["onClick"],S={class:"tab-service-content"},T={class:"title-index"},M={class:"title"},V={class:"is-link"},z={__name:"List",props:{list:{type:Array,default:()=>[]}},emits:["select"],setup(_,{emit:u}){const p=n=>{u("select",n)};return(n,e)=>{const d=I;return o(!0),r(x,null,y(_.list,(i,c)=>(o(),r("div",{onClick:t=>p(c),class:"item",key:i.id},[l("div",S,[l("span",T,m(c+1),1),l("span",M,m(i.title),1)]),l("div",V,[v(d)])],8,R))),128)}}},E=h(z,[["__scopeId","data-v-b32b6b52"]]);const F={__name:"QuestionList",props:{limit:{type:Number,default:0}},setup(_,{expose:u}){const p=_,n=k(),e=B(0),d=w(()=>f[e.value].type);N(()=>{const s=Q().params.idx;e.value=Number(s)});const i=t=>{let s=p.limit||t.length;return t.slice(0,s)},c=t=>{n.push({path:`/service-detail/${d.value}/${t}`})};return u({active:e}),(t,s)=>{const g=D,L=C;return o(),r("div",null,[v(L,{active:e.value,"onUpdate:active":s[0]||(s[0]=a=>e.value=a),swipeable:"","line-width":"30",ellipsis:!1,"title-active-color":"#111","title-inactive-color":"#999"},{default:b(()=>[(o(!0),r(x,null,y($(f),a=>(o(),A(g,{key:a.title,title:a.title},{default:b(()=>[v(E,{onSelect:c,list:i(a.subList)},null,8,["list"])]),_:2},1032,["title"]))),128))]),_:1},8,["active"])])}}},H=h(F,[["__scopeId","data-v-aa825ae5"]]);export{H as Q};
