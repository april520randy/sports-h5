import{Y as o,c as t,d as e,aI as l,n as i,U as s,ap as a,a as n,C as r,o as c,e as u,w as d,i as p,f,j as g,t as h,u as m,q as _,v as x,x as v,D as y}from"./index-c87fa551.js";import{c as C}from"./iM.bd32fb6a.js";import{_ as V}from"./newback.52388a60.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";import"./index.befce884.js";const w=k({data:()=>({versionInfo:{},GXshow:!1,loginoutVi:!1,loginoutVis:!1,logOffVis:!1,updateVersionVis:!1,value:!0,cache:"",version:""}),onLoad(){this.gethuancun(),plus.runtime.getProperty(plus.runtime.appid,(o=>{console.log(JSON.stringify(o.version)),this.version=o.version}))},computed:{userInfo:()=>o.state.userInfo,isLogin:()=>o.getters.is_login},methods:{toGX(){plus.runtime.openURL(this.versionInfo.Jump_Url),this.GXshow=!1},getversion(){t("/User/GetVersion_Replace",{Code:uni.$Code,Version:this.version}).then((o=>{console.log(o,999999),this.versionInfo=o.Result,1==o.Result.IsReplace&&(this.GXshow=!0)}))},clearnFn(){e({title:"缓存清理成功",mask:!0,icon:"none"})},gxFn(){this.getversion()},gethuancun(){let o=l().currentSize/1024/1024;console.log(o+"MB"),this.cache=parseFloat(o).toFixed(1),this.cache<1&&(this.cache=0)},loginin(){i({url:"/pages/login/index"})},jump(o){null!=this.$store.state.userInfo.User_Id?i({url:o}):i({url:"/pages/login/index"})},jump2(o){i({url:o})},back(){s(-1)},loginoutHandle(){this.isLogin?(C(),this.loginoutVis=!1,o.commit("CHANGE_USER_ID",""),a({key:"user_Id"}),o.commit("CHANGE_USER_INFO",{}),n("currentIndex",0),r({url:"/pages/myView/index",animationType:"pop-in",animationDuration:200})):(this.loginoutVi=!0,this.loginoutVis=!1)}},onPageScroll(o){}},[["render",function(o,t,e,l,i,s){const a=x,n=p,r=v("var-app-bar"),C=v("var-switch"),k=v("var-cell"),w=v("var-icon"),F=v("var-button"),b=v("var-dialog"),E=y;return c(),u(n,{style:{"background-color":"#F4F4F5",height:"100vh"}},{default:d((()=>[f(r,{style:{"border-radius":"0",background:"#fff"},round:"",elevation:!1},{content:d((()=>[f(n,{class:"nav1"},{default:d((()=>[f(a,{onClick:s.back,style:{width:"40rpx",height:"40rpx","margin-left":"20rpx"},src:V,mode:"widthFix"},null,8,["onClick"]),f(n,{class:"navtitle1"},{default:d((()=>[g("设置")])),_:1})])),_:1})])),_:1}),f(n,{class:"profile-cells"},{default:d((()=>[f(n,{class:"cell"},{default:d((()=>[f(k,{title:"悬浮窗播放"},{extra:d((()=>[f(C,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=o=>i.value=o),color:"#FC683E","close-color":"#FFFFFF"},null,8,["modelValue"])])),_:1}),f(k,{title:"消息通知",onClick:t[1]||(t[1]=o=>s.jump("/pages/myView/setting/notice"))},{extra:d((()=>[f(w,{name:"chevron-right"})])),_:1})])),_:1}),f(n,{class:"cell"},{default:d((()=>[f(k,{title:"关于我们",onClick:t[2]||(t[2]=o=>s.jump2("/pages/myView/setting/edition"))},{extra:d((()=>[f(w,{name:"chevron-right"})])),_:1})])),_:1}),f(n,{class:"cell"},{default:d((()=>[h("div",{onClick:t[3]||(t[3]=(...o)=>s.gxFn&&s.gxFn(...o)),class:"var-cell var-cell--cursor"},[h("div",{class:"var-cell__content"},[h("div",{class:"var-cell__title"},"检测更新")]),h("div",{class:"var-cell__extra"},[g(m(i.version),1),h("i",{class:"var-icon var-icon--set var-icon-chevron-right",style:{"transition-duration":"0ms"}})])]),f(k,{title:"清理缓存",onClick:s.clearnFn},{extra:d((()=>[g(m(i.cache)+"MB ",1),f(w,{name:"chevron-right"})])),_:1},8,["onClick"])])),_:1})])),_:1}),f(n,{style:{width:"90%","margin-left":"5%"}},{default:d((()=>[s.isLogin?(c(),u(F,{key:0,style:{"border-radius":"22px 22px 22px 22px","margin-bottom":"5%","margin-top":"4%"},color:"#FC683E",block:"",type:"primary",onClick:t[4]||(t[4]=o=>i.loginoutVis=!0)},{default:d((()=>[g("退出登录")])),_:1})):_("",!0),s.isLogin?(c(),u(F,{key:1,block:"",color:"#fff","text-color":"#FC683E",outline:"",type:"primary",style:{"border-radius":"22px 22px 22px 22px","margin-bottom":"5%","margin-top":"4%"},onClick:t[5]||(t[5]=o=>i.logOffVis=!0)},{default:d((()=>[g("注销账号")])),_:1})):_("",!0),s.isLogin?_("",!0):(c(),u(F,{key:2,style:{"margin-bottom":"5%","margin-top":"4%"},color:"#FC683E",block:"",type:"primary",onClick:s.loginin},{default:d((()=>[g("登录")])),_:1},8,["onClick"]))])),_:1}),f(b,{show:i.loginoutVis,"onUpdate:show":t[7]||(t[7]=o=>i.loginoutVis=o),"dialog-class":"loginout","confirm-button":!1,"cancel-button":!1},{title:d((()=>[g(" 确定退出登录？ ")])),default:d((()=>[f(n,{class:"btns"},{default:d((()=>[f(F,{color:"white","text-color":"#FC683E",type:"primary",onClick:t[6]||(t[6]=o=>i.loginoutVis=!1)},{default:d((()=>[g("取消")])),_:1}),f(F,{color:"#FC683E","text-color":"white",type:"primary",onClick:s.loginoutHandle},{default:d((()=>[g("确定")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["show"]),f(b,{show:i.loginoutVi,"onUpdate:show":t[10]||(t[10]=o=>i.loginoutVi=o),"dialog-class":"loginout","confirm-button":!1,"cancel-button":!1},{title:d((()=>[g(" 您已退出无需重复退出。 ")])),default:d((()=>[f(n,{class:"btns"},{default:d((()=>[f(F,{color:"white","text-color":"#FC683E",type:"primary",onClick:t[8]||(t[8]=o=>i.loginoutVi=!1)},{default:d((()=>[g("取消")])),_:1}),f(F,{color:"#FC683E","text-color":"white",type:"primary",onClick:t[9]||(t[9]=o=>i.loginoutVi=!1)},{default:d((()=>[g("确定")])),_:1})])),_:1})])),_:1},8,["show"]),f(b,{show:i.logOffVis,"onUpdate:show":t[13]||(t[13]=o=>i.logOffVis=o),"dialog-class":"loginout","confirm-button":!1,"cancel-button":!1},{title:d((()=>[g(" 温馨提示 ")])),default:d((()=>[f(k,null,{default:d((()=>[g("注销后，此账户将无法登录使用")])),_:1}),f(n,{class:"btns"},{default:d((()=>[f(F,{color:"white","text-color":"#FC683E",type:"primary",onClick:t[11]||(t[11]=o=>i.logOffVis=!1)},{default:d((()=>[g("取消")])),_:1}),f(F,{color:"#FC683E","text-color":"white",type:"primary",onClick:t[12]||(t[12]=o=>i.logOffVis=!1)},{default:d((()=>[g("确定")])),_:1})])),_:1})])),_:1},8,["show"]),f(b,{show:i.updateVersionVis,"onUpdate:show":t[16]||(t[16]=o=>i.updateVersionVis=o),"dialog-class":"upate-version","confirm-button":!1,"cancel-button":!1},{default:d((()=>[f(n,{class:"update"},{default:d((()=>[f(E,null,{default:d((()=>[g("发现新版本V1.01")])),_:1}),f(n,null,{default:d((()=>[f(E,null,{default:d((()=>[g(" 直播新版本来袭，新增多种福利活动！ 快来下载体验吧！ ")])),_:1}),f(E,null,{default:d((()=>[g("请认准官网地址：xxxxxx.com")])),_:1})])),_:1}),f(n,{class:"btns"},{default:d((()=>[f(F,{color:"white","text-color":"#FC683E",type:"primary",onClick:t[14]||(t[14]=o=>i.updateVersionVis=!1)},{default:d((()=>[g("去官网升级")])),_:1}),f(F,{color:"#FC683E","text-color":"white",type:"primary",onClick:t[15]||(t[15]=o=>i.updateVersionVis=!1)},{default:d((()=>[g("立即更新")])),_:1})])),_:1})])),_:1})])),_:1},8,["show"]),i.GXshow?(c(),u(n,{key:0,class:"clean"},{default:d((()=>[f(n,{class:"cleancontent"},{default:d((()=>[f(n,{style:{color:"#333333","font-size":"30rpx",margin:"60rpx 20rpx 0"}},{default:d((()=>[g("当前版本号："+m(i.version),1)])),_:1}),f(n,{style:{color:"#333333","font-size":"30rpx",margin:"20rpx"}},{default:d((()=>[g("最新版本号："+m(i.versionInfo.NewVersion),1)])),_:1}),f(n,{class:"foot"},{default:d((()=>[f(n,{class:"left",onClick:t[17]||(t[17]=o=>i.GXshow=!1)},{default:d((()=>[g("取消")])),_:1}),f(n,{class:"right",onClick:s.toGX},{default:d((()=>[g("去更新")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})):_("",!0)])),_:1})}],["__scopeId","data-v-f5e02615"]]);export{w as default};
