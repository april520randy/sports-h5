import{aG as e,o as t,e as o,w as s,k as n,l as i,F as a,f as l,Q as u,i as d,A as r,J as c,m as p,j as f,u as h,D as m,aH as I,g,d as v,n as _,I as b,Y as x,_ as y,a0 as C,U as D,x as A}from"./index-c87fa551.js";import{_ as U}from"./_plugin-vue_export-helper.1b428a4d.js";import"./index.befce884.js";const B=U({components:{codeInput:U({name:"vcode-input",props:{autofocus:{type:Boolean,default:!0},sum:{type:Number,default:6},isBorderLine:{type:Boolean,default:!1},borderColor:{type:String,default:"#DADADA"},borderValueColor:{type:String,default:"#424456"},borderActiveColor:{type:String,default:"#FF6B00"},isAutoComplete:{type:Boolean,default:!0},isPassword:{type:Boolean,default:!1}},data:()=>({focus:!1,text:[],value:""}),watch:{value(e,t){if(this.isAutoComplete?e.length>=this.sum&&(this.setBlur(),this.$emit("vcodeInput",e)):this.$emit("vcodeInput",e),this.isPassword){let t="";for(let o=0;o<e.length;o++)t+="●";this.text=t}else this.text=e?e.split(""):[]}},mounted(){this.$nextTick((()=>{this.initInput()}))},methods:{initInput(){this.autofocus&&(this.focus=!0)},setBlur(){e(),this.$nextTick((()=>{this.focus=!1}))},setFocus(){this.focus=!0},clearValue(){this.setBlur(),this.value="",this.text=[],this.$forceUpdate()}}},[["render",function(e,I,g,v,_,b){const x=m,y=u,C=d;return t(),o(C,{class:"vcode-input-body"},{default:s((()=>[(t(!0),n(a,null,i(g.sum,((e,n)=>(t(),o(x,{class:r(["vcode-input-item",g.isBorderLine?"vcode-input-line":"vcode-input-border"]),key:n,onClick:c(b.setFocus,["stop"]),style:p({borderColor:_.text.length===n&&_.focus?g.borderActiveColor:_.text.length>n?g.borderValueColor:g.borderColor,color:_.text.length>n?g.borderValueColor:g.borderColor})},{default:s((()=>[f(h(_.text[n]),1)])),_:2},1032,["class","onClick","style"])))),128)),l(C,{class:"hidden-input"},{default:s((()=>[l(y,{type:"number","show-confirm-bar":!1,"auto-blur":"",cursor:99,focus:_.focus,maxlength:g.sum,modelValue:_.value,"onUpdate:modelValue":I[0]||(I[0]=e=>_.value=e),onBlur:b.setBlur,onFocus:b.setFocus,password:g.isPassword,placeholder:"验证码"},null,8,["focus","maxlength","modelValue","onBlur","onFocus","password"])])),_:1})])),_:1})}],["__scopeId","data-v-e169bea3"]])},setup:()=>({VcodeInput:I(null)}),name:"verification",data:()=>({phone:"",second:60,value:"",config:{userID:"",SDKAppID:1400813717,secretKey:"c74d2910cc6c7180b015d75d44e73ba0af399d5f3e3d159c6d09bd5903ff01a0"}}),onLoad(){this.setTimeout();const e=g("login_phone");e?this.phone=e:(v({title:"异常",icon:"none"}),_({url:"/pages/login/index"}))},mounted(){this.VcodeInput.setFocus()},methods:{setTimeout(){this.second>0&&setTimeout((()=>{this.second=this.second-1,this.setTimeout()}),1e3)},vcodeInput(e){let t={User_Phone:this.phone,Register_Source:"App",AuthorizeCode:e,Imei:g("deviceInfo").imei,Oaid:g("deviceInfo").OAID,GUID:g("deviceInfo").guid,Android_id:g("deviceInfo").androidID,UUID:g("UUID")};console.log(t,"===============newdata"),uni.$api("/User/LoginByAuthorizeCode",t).then((e=>{if(200!==e.Code)v({title:e.Message,icon:"none"});else{v({title:"登录成功",icon:"none"}),console.log(e,"===========================s"),b.emit("loginOut",!1),x.commit("CHANGE_USER_ID",e.Result.User_Id),x.dispatch("getUserInfo"),this.config.userID=String(e.Result.User_Id);const t=y(this.config).userSig;uni.$TUIKit.login({userID:this.config.userID,userSig:t}).then((e=>{})),C({url:"/pages/myView/index",animationType:"pop-in",animationDuration:200})}}))},back(){D({delta:1})}}},[["render",function(e,n,i,a,u,r){const c=d,p=A("var-app-bar"),I=m,g=A("codeInput");return t(),o(c,{class:"box",style:{"background-color":"#f4f4f5"}},{default:s((()=>[l(p,{style:{"background-color":"#ffffff"},round:"",elevation:!1},{content:s((()=>[l(c,{class:"nav"})])),_:1}),l(c,{class:"verification-content"},{default:s((()=>[l(I,{class:"h1"},{default:s((()=>[f("请输入验证码")])),_:1}),l(I,{class:"tips"},{default:s((()=>[f("验证码已发送至："+h(u.phone),1)])),_:1}),l(g,{ref:"VcodeInput",onVcodeInput:r.vcodeInput,class:"code-input",isAutoComplete:!0},null,8,["onVcodeInput"]),l(c,{class:"ft"},{default:s((()=>[l(I,{class:"lf"},{default:s((()=>[l(I,null,{default:s((()=>[f(h(u.second)+"s",1)])),_:1}),f(" 后重新发送 ")])),_:1}),l(I,{class:"rt"},{default:s((()=>[f("收不到验证码？")])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-00c4454e"]]);export{B as default};