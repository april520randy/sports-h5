import{C as m,H as B}from"./CustomInput-061780ae.js";import{_ as g,y as $,r as i,f as E,o as v,c as w,h as o,z as n,A as t,B as k,C as f,D as A,E as h,F as y,x as D}from"./index-b00f018c.js";import N from"./IconArrowDown-efa46ef4.js";import{R as c,_ as T}from"./Country-644582f8.js";import"./IconClose-51b650fc.js";import"./IconClear-5ebacbfb.js";import"./IconEyeClose-b2eb9942.js";import"./IconEyeOpen-825160a7.js";import"./IconSearch-a174cf78.js";const V=e=>(h("data-v-1c55b07e"),e=e(),y(),e),U=V(()=>t("div",{class:"split"},null,-1)),H={class:"country-wrapper"},M={class:"sub-country-wrapper"},z=V(()=>t("p",{class:"tip"},"选定国家后不能修改，如有问题找客服协助",-1)),F={__name:"Register",setup(e){const l=$(),r=i(""),a=i(""),u=i(""),d=E(()=>c.usernameReg.test(r.value)&&c.passwordReg.test(a.value)),b=_=>{u.value=_},x=_=>{if(_.preventDefault(),d.value){console.log("验证通过");const s={username:r.value,password:a.value,country:u.value.title};console.log(s),l.registerAction(s)}};return(_,s)=>{const C=T,I=N,S=A;return v(),w("form",{class:"form",onSubmit:x},[o(n(m),{clearable:"",hasErrorTip:"",modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=p=>r.value=p),placeholder:"请输入6-16个字母及数字组成的账号",rule:{reg:n(c).usernameReg,errorMessage:"账号由6-16位数字+字母组成!"}},null,8,["modelValue","rule"]),U,o(n(m),{isPwd:"",hasErrorTip:"",modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=p=>a.value=p),placeholder:"请输入8-20个字母及数字组成的密码",rule:{reg:n(c).passwordReg,errorMessage:"密码由6-16位数字+字母组成!"}},null,8,["modelValue","rule"]),t("div",H,[t("div",M,[o(C,{type:2,onGetCountry:b})]),o(I,{class:"icon-arrow-down"})]),z,o(S,{disabled:!d.value},{default:k(()=>[f("注册")]),_:1},8,["disabled"])],32)}}},G=g(F,[["__scopeId","data-v-1c55b07e"]]);const R=e=>(h("data-v-76182b56"),e=e(),y(),e),L={class:"wrapper register"},P=R(()=>t("h3",{class:"tit"},"创建账号",-1)),j=R(()=>t("span",null,"去登录",-1)),q={__name:"RegisterView",setup(e){const l=D(),r=()=>{l.push("/login")};return(a,u)=>(v(),w("div",L,[o(n(B)),P,o(G),t("div",{onClick:r,class:"register"},[f("已有账号？"),j])]))}},se=g(q,[["__scopeId","data-v-76182b56"]]);export{se as default};
