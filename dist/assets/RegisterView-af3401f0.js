import{C as m,H as B}from"./CustomInput-277732ed.js";import{_ as g,v as $,r as i,b as k,o as v,c as w,f as o,x as n,y as t,z as A,A as f,B as D,C as h,D as y,s as E}from"./index-95ea299f.js";import N from"./IconArrowDown-3385282b.js";import{R as c,_ as T}from"./Country-8511ce35.js";import"./IconClose-4e9a1a83.js";import"./IconClear-64b8b96a.js";import"./IconEyeClose-2a3c11a4.js";import"./IconEyeOpen-91470a74.js";import"./IconSearch-77cfcfe6.js";const V=e=>(h("data-v-1c55b07e"),e=e(),y(),e),U=V(()=>t("div",{class:"split"},null,-1)),H={class:"country-wrapper"},M={class:"sub-country-wrapper"},z=V(()=>t("p",{class:"tip"},"选定国家后不能修改，如有问题找客服协助",-1)),G={__name:"Register",setup(e){const l=$(),r=i(""),a=i(""),u=i(""),d=k(()=>c.usernameReg.test(r.value)&&c.passwordReg.test(a.value)),b=_=>{u.value=_},x=_=>{if(_.preventDefault(),d.value){console.log("验证通过");const s={username:r.value,password:a.value,country:u.value.title};console.log(s),l.registerAction(s)}};return(_,s)=>{const C=T,I=N,S=D;return v(),w("form",{class:"form",onSubmit:x},[o(n(m),{clearable:"",hasErrorTip:"",modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=p=>r.value=p),placeholder:"请输入6-16个字母及数字组成的账号",rule:{reg:n(c).usernameReg,errorMessage:"账号由6-16位数字+字母组成!"}},null,8,["modelValue","rule"]),U,o(n(m),{isPwd:"",hasErrorTip:"",modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=p=>a.value=p),placeholder:"请输入8-20个字母及数字组成的密码",rule:{reg:n(c).passwordReg,errorMessage:"密码由6-16位数字+字母组成!"}},null,8,["modelValue","rule"]),t("div",H,[t("div",M,[o(C,{type:2,onGetCountry:b})]),o(I,{class:"icon-arrow-down"})]),z,o(S,{disabled:!d.value},{default:A(()=>[f("注册")]),_:1},8,["disabled"])],32)}}},L=g(G,[["__scopeId","data-v-1c55b07e"]]);const R=e=>(h("data-v-76182b56"),e=e(),y(),e),P={class:"wrapper register"},j=R(()=>t("h3",{class:"tit"},"创建账号",-1)),q=R(()=>t("span",null,"去登录",-1)),F={__name:"RegisterView",setup(e){const l=E(),r=()=>{l.push("/login")};return(a,u)=>(v(),w("div",P,[o(n(B)),j,o(L),t("div",{onClick:r,class:"register"},[f("已有账号？"),q])]))}},se=g(F,[["__scopeId","data-v-76182b56"]]);export{se as default};
