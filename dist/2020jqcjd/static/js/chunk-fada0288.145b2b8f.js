(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fada0288"],{"7d1a":function(t,e,a){"use strict";a("b353")},"7f58":function(t,e,a){"use strict";a("c3a4")},b353:function(t,e,a){},c3a4:function(t,e,a){},efe3:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-con"},[a("div",{staticClass:"search-box"},[a("div",{staticClass:"input-con"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.companyName,expression:"companyName",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入企业全称，领取成绩单"},domProps:{value:t.companyName},on:{keyup:t.onKeyup,blur:[t.onBlur,function(e){return t.$forceUpdate()}],focus:t.onFocus,input:function(e){e.target.composing||(t.companyName=e.target.value.trim())}}}),a("span",{on:{click:t.clearInput}},[t._v("X")])]),a("div",{staticClass:"btn",on:{click:t.clickSearch}},[t._v("搜索")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.searchMoreShow,expression:"searchMoreShow"}],staticClass:"search-list"},[a("ul",t._l(t.companyNameList,(function(e,r){return a("li",{key:r,on:{click:function(a){return t.$router.push({path:"/list",query:{companyName:e.CompanyName}})}}},[t._v(t._s(e.CompanyName))])})),0)])]),a("SearchError",{directives:[{name:"show",rawName:"v-show",value:t.searchError,expression:"searchError"}]})],1)},n=[],c=(a("96cf"),a("1da1")),s=a("5530"),i=a("2f62"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-error"},[a("div",{staticClass:"error-main"},[t._m(0),t._m(1),a("div",{staticClass:"btn-con italic"},[a("router-link",{staticClass:"btn-back italic",attrs:{to:"/"}},[t._v("返回首页")]),a("router-link",{staticClass:"btn-look italic",attrs:{to:"/rank"}},[t._v("查看企业榜单")])],1)]),a("div",{staticClass:"error-bg"})])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"img-con"},[a("img",{staticClass:"img-people",attrs:{src:"https://img.cbi360.net/2020/12/15/7fdfed9d-3fae-427b-ad7d-adb803e32999.png",alt:""}}),a("img",{staticClass:"img-text",attrs:{src:"https://img.cbi360.net/2020/12/15/1a4816e2-88f1-4a52-8ac5-f4e20402e197.png",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-con italic"},[a("p",{staticClass:"italic"},[t._v("请确保您输入的是施工企业全称")]),a("p",{staticClass:"italic"},[t._v("如仍有问题，请联系成绩单保管员")]),a("p",{staticClass:"italic"},[t._v("电话: "),a("a",{staticClass:"italic",attrs:{href:"tel:18969186302"}},[t._v("18969186302")])])])}],m={components:{},data:function(){return{}},created:function(){},methods:{}},l=m,p=(a("7f58"),a("2877")),h=Object(p["a"])(l,o,u,!1,null,"7f13419a",null),d=h.exports,f={components:{SearchError:d},data:function(){return{searchError:!1,companyName:"",onKeyup:null,searchMoreShow:!1}},created:function(){this.initShare(),this.clearInput(),this.onKeyup=this.$lodash.debounce(this.searchCompanyName,500)},mounted:function(){document.querySelector("body").scrollTop=0},computed:Object(s["a"])({},Object(i["b"])({companyNameList:function(t){return t.report.companyName}})),methods:{initShare:function(){this.getWeChatShareData({title:"2020年建企成绩单来了，你的企业多少分？"},{title:"2020年建企成绩单来袭，你的成绩是？",desc:""})},searchCompanyName:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.companyName){e.next=5;break}return e.next=3,t.$store.dispatch("report/changeCompanyNameList",[]);case 3:e.next=7;break;case 5:return e.next=7,t.$store.dispatch("report/searchCompanyName",{companyName:t.companyName});case 7:case"end":return e.stop()}}),e)})))()},clearInput:function(){this.companyName="",this.$store.dispatch("report/changeCompanyNameList",[]),this.searchError=!1},clickSearch:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.companyName){e.next=5;break}return e.next=3,t.$store.dispatch("report/getReport",{companyName:t.companyName});case 3:a=e.sent,200==a.Code&&a.Result?t.$router.push({path:"/list",query:{companyName:a.Result.company.CompanyName}}):t.searchError=!0;case 5:case"end":return e.stop()}}),e)})))()},onBlur:function(){var t=this;setTimeout((function(){t.searchMoreShow=!1}),200)},onFocus:function(){this.searchMoreShow=!0}}},v=f,y=(a("7d1a"),Object(p["a"])(v,r,n,!1,null,"492ae9a9",null));e["default"]=y.exports}}]);