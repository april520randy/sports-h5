import{_ as g,j as k,r as x,M as C,a8 as T,ay as N,o as n,c as _,h as t,q as e,B as S,Z as q,$ as w,n as a,E as v,s as l,x as B,y as I}from"./index-4a568665.js";import{T as V,a as D}from"./index-0119c832.js";import"./index-6954bf4c.js";import{_ as L}from"./arrow-left-279bbca1.js";import{_ as P}from"./service-common-5c9248d1.js";import{_ as j}from"./is-link-8da89114.js";import"./use-id-755468c2.js";const m=r=>(B("data-v-b3b70b8c"),r=r(),I(),r),E={class:"common-problem"},M=S('<div class="common-navbar" data-v-b3b70b8c><img src="'+L+'" alt="error" class="arrow-left" data-v-b3b70b8c><span class="common-title" data-v-b3b70b8c>常见问题</span><img src="'+P+'" alt="error" class="service-common" data-v-b3b70b8c></div><div class="border-common" data-v-b3b70b8c></div>',2),R=m(()=>a("div",{class:"border-common"},null,-1)),$={class:"tab-service-content"},F={class:"title-index"},U={class:"title"},Z=["onClick"],z=m(()=>a("img",{src:j,alt:"error"},null,-1)),A=[z],G={__name:"CommonProblem",setup(r){const b=k(),o=x(0),p=C({serviceList:[{title:"提款失败而且钱变少？",id:111},{title:"游戏账户里有钱为什么无法取款？",id:222},{title:"可以使用别人的银行卡进行取款吗？",id:333},{title:"申请取款需要注意些什么？",id:444},{title:"取款为什么还要申请？",id:555},{title:"我取款未到账？",id:666},{title:"提款失败而且钱变少？",id:777},{title:"游戏账户里有钱为什么无法取款？",id:888},{title:"可以使用别人的银行卡进行取款吗？",id:999}]}),u=()=>{console.log(o.value)},f=i=>{b.push({path:"/serviceDetail",query:{active:o.value,title:i}})};return T(()=>{const i=N();o.value=Number(i.query.active),console.log("active.value",typeof o.value,typeof i.query.active)}),(i,d)=>{const s=D,h=V;return n(),_("div",E,[M,t(h,{active:o.value,"onUpdate:active":d[0]||(d[0]=c=>o.value=c),"line-width":"25",ellipsis:!1,"title-active-color":"#111","title-inactive-color":"#999",onClickTab:u},{default:e(()=>[t(s,{title:"取款问题"},{default:e(()=>[R,(n(!0),_(q,null,w(p.serviceList,(c,y)=>(n(),_("div",{class:"tab-service-list",key:c.id},[a("div",$,[a("span",F,v(y+1),1),a("span",U,v(c.title),1)]),a("div",{class:"is-link",onClick:H=>f(c.title)},A,8,Z)]))),128))]),_:1}),t(s,{title:"投注结算"},{default:e(()=>[l("内容 2")]),_:1}),t(s,{title:"存款问题"},{default:e(()=>[l("内容 3")]),_:1}),t(s,{title:"优惠问题"},{default:e(()=>[l("内容 4")]),_:1}),t(s,{title:"福利中心"},{default:e(()=>[l("内容 4")]),_:1}),t(s,{title:"优惠问题"},{default:e(()=>[l("内容 6")]),_:1})]),_:1},8,["active"])])}}},tt=g(G,[["__scopeId","data-v-b3b70b8c"]]);export{tt as default};
