import{Y as e,c as t,U as l,n as s,o as a,e as o,w as r,i as c,f as i,j as n,k as _,l as d,F as u,q as f,v as h,Q as g,J as p,m,u as x,O as y,P as I,D as C}from"./index-c87fa551.js";import{_ as b}from"./lodash.bbce98da.js";import{_ as k}from"./search.384cbe7f.js";import{_ as S,a as v}from"./xin2.ab47a951.js";import{_ as w,a as A}from"./bzb2.bc98be11.js";import{_ as M}from"./sckong.f3fd5d2c.js";import{_ as D}from"./_plugin-vue_export-helper.1b428a4d.js";const H=D({data:()=>({searchvalue:null,Page:1,Limit:10,listData:[],tatal:0}),computed:{isLogin:()=>e.getters.is_login,userInfo(){return this.isLogin?e.state.userInfo:this.default_userInfo}},onReachBottom(){this.listData.length<this.tatal?(this.Page++,this.getList()):console.log(123)},methods:{doSearch(){""==this.searchvalue?(this.searchvalue=null,this.listData=[]):(this.Page=1,this.listData=[],this.getList(),console.log(this.searchvalue))},getList(){t("/Search/Get_Competition_searchResult",{Search_Parm:this.searchvalue,User_Id:this.$store.state.userInfo.User_Id?this.$store.state.userInfo.User_Id:"",Page:this.Page,Limit:this.Limit}).then((e=>{if(console.log(e),this.listData=e.Result,this.tatal=e.Count,this.listData)for(let t of this.listData)t.Home_Scores="string"==typeof t.Home_Scores?t.Home_Scores.split(","):t.Home_Scores,t.Away_Scores="string"==typeof t.Away_Scores?t.Away_Scores.split(","):t.Away_Scores,6==t.Home_Scores.length&&"加时"!=t.Status_Name&&2==t.Category_Id&&(t.Home_Scores.splice(4,1),t.Away_Scores.splice(4,1))}))},cancelClick(){l({})},rowClick(e){console.log(e);const{Anchoer_Id:t,Match_Id:l}=e;0!=this.activeIndex&&1!=this.activeIndex&&2!=this.activeIndex&&3!=this.activeIndex&&4!=this.activeIndex||(1==this.Animation_State?1==e.Coverage_Mlive?(console.log("动画直播间"),s({url:`/pages/liveView/broadcast/index?Match_Id=${l}&activeIndex=2&Id=${e.Id}`})):console.log("无反应"):1==e.Coverage_Mlive?(console.log("动画直播间"),s({url:`/pages/liveView/broadcast/index?Match_Id=${l}&activeIndex=2&Id=${e.Id}`})):(e.Anchoer_Logo&&(console.log("视频直播间"),s({url:`/pages/liveView/broadcast/index?Match_Id=${l}&activeIndex=1&Id=${e.Id}`})),console.log("无反应")))},collectData(e){t("/Immediately/Collect_Match",e).then((e=>{}))},collectionClickDebounced:b.debounce((function(e,t,l){this.collectionClick(e,t,l)}),500),collectionClick(e,t){null!=this.$store.state.userInfo.User_Id?("取消"==e&&(console.log("取消",this.userInfo.User_Id),t.IsCollect=0,this.collectData({Match_Id:t.Match_Id,User_Id:this.userInfo.User_Id,Type:1})),"收藏"==e&&(console.log("收藏",this.userInfo.User_Id),t.IsCollect=1,this.collectData({Match_Id:t.Match_Id,User_Id:this.userInfo.User_Id,Type:0})),console.log(88888888,t.Type)):s({url:"/pages/login/index"})},toClicklive(e){1==this.Animation_State?1==e.Coverage_Mlive?(console.log("动画直播间"),s({url:`/pages/liveView/broadcast/index?Match_Id=${e.Match_Id}&activeIndex=2&Id=${e.Id}`})):console.log("无反应"):(e.Coverage_Mlive,console.log("视频直播间"),s({url:`/pages/liveView/broadcast/index?Match_Id=${e.Match_Id}&activeIndex=1&Id=${e.Id}`}))}}},[["render",function(e,t,l,s,b,D){const H=h,L=g,$=c,U=C;return a(),o($,{style:{background:"#f4f4f5",height:"100vh"}},{default:r((()=>[i($,{class:"search_top",style:{background:"#fff"}},{default:r((()=>[i($,{class:"top_input"},{default:r((()=>[i($,{class:"navsearch",style:{"background-color":"#EFEFEF"}},{default:r((()=>[i(H,{src:k,style:{width:"24rpx",height:"24rpx",margin:"0 24rpx"}}),i(L,{type:"text",modelValue:b.searchvalue,"onUpdate:modelValue":t[0]||(t[0]=e=>b.searchvalue=e),onInput:D.doSearch,"placeholder-style":"fontSize:20rpx",style:{color:"#000"}},null,8,["modelValue","onInput"])])),_:1}),i($,{class:"qx",onClick:D.cancelClick},{default:r((()=>[n(" 取消 ")])),_:1},8,["onClick"])])),_:1})])),_:1}),0!=b.listData.length?(a(),o($,{key:0,style:{"padding-bottom":"100rpx"}},{default:r((()=>[i($,{style:{width:"100%",height:"176rpx"}}),(a(!0),_(u,null,d(b.listData,((t,l)=>(a(),o($,{class:"btm_box",key:l,onClick:p((e=>D.rowClick(t)),["stop"])},{default:r((()=>[i($,{class:"btm_box_top"},{default:r((()=>[i($,{class:"groups",style:m({color:1==t.IsCollect?"#5934BF":"",background:1==t.IsCollect?"#EDE4FD":"",color:0==t.IsCollect?"#C37A2B":"",background:0==t.IsCollect?"#FEE2B2":""})},{default:r((()=>[n(x(t.Competition_Name),1)])),_:2},1032,["style"]),i($,{class:"times"},{default:r((()=>[n(x(t.Match_Date.substring(10,16).replace("T"," ")),1)])),_:2},1024),i($,{class:"section",style:{color:"#8e92a4"}},{default:r((()=>[n(x(t.Status_Name),1)])),_:2},1024),1!=t.Status_Id&&2==t.Category_Id?(a(),o($,{key:0,class:"progress"},{default:r((()=>[i(U,null,{default:r((()=>[n("一")])),_:1}),i(U,null,{default:r((()=>[n("二")])),_:1}),i(U,null,{default:r((()=>[n("三")])),_:1}),i(U,null,{default:r((()=>[n("四")])),_:1}),9==t.Status_Id?(a(),o(U,{key:0},{default:r((()=>[n("五")])),_:1})):f("",!0),i(U,{style:m([{color:"#F4764A"},{"margin-left":9==t.Status_Id?"17rpx":"20rpx"}])},{default:r((()=>[n("总")])),_:2},1032,["style"])])),_:2},1024)):f("",!0),1!=t.Status_Id&&1==t.Category_Id?(a(),o($,{key:1,class:"progress",style:{color:"#F4764A"}})):f("",!0)])),_:2},1024),i($,{class:"btm_box_btm"},{default:r((()=>[1==t.IsCollect?(a(),o(H,{key:0,src:S,alt:"",class:"btm1",onClick:p((e=>D.collectionClickDebounced("取消",t)),["stop"])},null,8,["onClick"])):f("",!0),0==t.IsCollect?(a(),o(H,{key:1,src:v,alt:"",class:"btm1",onClick:p((e=>D.collectionClickDebounced("收藏",t)),["stop"])},null,8,["onClick"])):f("",!0),i($,{class:"btm2"},{default:r((()=>[i($,{class:"btm2_top"},{default:r((()=>[i(H,{src:t.Home_Team_Logo,alt:""},null,8,["src"]),i($,{class:"btm2_top_name"},{default:r((()=>[i($,{style:{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","max-width":"130rpx"}},{default:r((()=>[n(x(t.Home_Team_Name),1)])),_:2},1024),t.Home_Scores[2]>0&&1==t.Category_Id?(a(),o($,{key:0,style:{width:"26rpx",height:"24rpx",color:"#ffffff",background:"#f56161","text-align":"center","line-height":"24rpx","font-size":"20rpx","border-radius":"2rpx 2rpx 2rpx 2rpx","margin-left":"6rpx"}},{default:r((()=>[n(x(t.Home_Scores[2]),1)])),_:2},1024)):f("",!0),t.Home_Scores[3]>0&&1==t.Category_Id?(a(),o($,{key:1,style:{width:"26rpx",height:"24rpx",color:"#ffffff",background:"#f5ce61","text-align":"center","line-height":"24rpx","font-size":"20rpx","border-radius":"2rpx 2rpx 2rpx 2rpx","margin-left":"6rpx"}},{default:r((()=>[n(x(t.Home_Scores[3]),1)])),_:2},1024)):f("",!0)])),_:2},1024)])),_:2},1024),i($,{class:"btm2_btm"},{default:r((()=>[i(H,{src:t.Away_Team_Logo,alt:""},null,8,["src"]),i($,{class:"btm2_btm_name"},{default:r((()=>[i($,{style:{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","max-width":"130rpx"}},{default:r((()=>[n(x(t.Away_Team_Name),1)])),_:2},1024),t.Away_Scores[2]>0&&1==t.Category_Id?(a(),o($,{key:0,style:{width:"26rpx",height:"24rpx",color:"#ffffff",background:"#f56161","text-align":"center","line-height":"24rpx","font-size":"20rpx","border-radius":"2rpx 2rpx 2rpx 2rpx","margin-left":"6rpx"}},{default:r((()=>[n(x(t.Away_Scores[2]),1)])),_:2},1024)):f("",!0),t.Away_Scores[3]>0&&1==t.Category_Id?(a(),o($,{key:1,style:{width:"26rpx",height:"24rpx",color:"#ffffff",background:"#f5ce61","text-align":"center","line-height":"24rpx","font-size":"20rpx","border-radius":"2rpx 2rpx 2rpx 2rpx","margin-left":"6rpx"}},{default:r((()=>[n(x(t.Away_Scores[3]),1)])),_:2},1024)):f("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024),1!=t.Status_Id&&2==t.Category_Id?(a(),o($,{key:2,class:"btm3"},{default:r((()=>[i($,{class:"btm3_top"},{default:r((()=>[(a(!0),_(u,null,d(t.Home_Scores,((e,l)=>(a(),o($,{style:m({color:l==t.Home_Scores.length-1&&t.Home_Scores.length-1!=0?"#F4764A":"","margin-left":l==t.Home_Scores.length-1?"15rpx":""}),key:l},{default:r((()=>[n(x(e),1)])),_:2},1032,["style"])))),128))])),_:2},1024),i($,{class:"btm3_btm"},{default:r((()=>[(a(!0),_(u,null,d(t.Away_Scores,((e,l)=>(a(),o($,{style:m({color:l==t.Away_Scores.length-1&&t.Away_Scores.length-1!=0?"#F4764A":"","margin-left":l==t.Away_Scores.length-1?"15rpx":""}),key:l},{default:r((()=>[n(x(e>=0?e:"-"),1)])),_:2},1032,["style"])))),128))])),_:2},1024)])),_:2},1024)):f("",!0),y(i($,{class:"btm3"},{default:r((()=>[i($,{class:"btm3_top"},{default:r((()=>[i($,{style:{"text-align":"center"}},{default:r((()=>[n(x(t.Home_Scores[0]>=0?t.Home_Scores[0]:"-"),1)])),_:2},1024)])),_:2},1024),i($,{class:"btm3_btm"},{default:r((()=>[i($,{style:{"text-align":"center"}},{default:r((()=>[n(x(t.Away_Scores[0]>=0?t.Away_Scores[0]:"-"),1)])),_:2},1024)])),_:2},1024)])),_:2},1536),[[I,1!=t.Status_Id&&1==t.Category_Id]]),t.Anchoer_Logo&&"完场"!==t.Status_Name?(a(),o($,{key:3,style:m({marginLeft:"未开赛"==t.Status_Name?"350rpx":""}),onClick:p((e=>D.toClicklive(t)),["stop"]),class:"btm4"},{default:r((()=>[i(H,{src:t.Anchoer_Logo,alt:""},null,8,["src"])])),_:2},1032,["style","onClick"])):f("",!0),!t.Anchoer_Logo&&1==t.Coverage_Mlive||"完场"==t.Status_Name&&1==t.Coverage_Mlive?(a(),o($,{key:4,style:m([{marginLeft:"未开赛"==t.Status_Name?"350rpx":""},{border:"none"}]),onClick:p((l=>e.toClick(t)),["stop"]),class:"btm4"},{default:r((()=>[i(H,{src:w,alt:""})])),_:2},1032,["style","onClick"])):f("",!0),!t.Anchoer_Logo&&0==t.Coverage_Mlive||"完场"==t.Status_Name&&0==t.Coverage_Mlive?(a(),o($,{key:5,style:m([{marginLeft:"未开赛"==t.Status_Name?"350rpx":""},{border:"none"}]),onClick:p((l=>e.toClick(t)),["stop"]),class:"btm4"},{default:r((()=>[i(H,{src:A,alt:""})])),_:2},1032,["style","onClick"])):f("",!0)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})):f("",!0),0==b.listData.length?(a(),o($,{key:1,style:{display:"flex","align-items":"center","justify-content":"center",height:"100vh","flex-direction":"column"}},{default:r((()=>[i(H,{src:M,mode:"",style:{width:"400rpx",height:"400rpx"}}),i($,{style:{color:"#9ea2af","font-size":"26rpx","margin-top":"15rpx"}},{default:r((()=>[n(" 暂无数据 ")])),_:1})])),_:1})):f("",!0)])),_:1})}],["__scopeId","data-v-bdc1aca6"]]);export{H as default};
