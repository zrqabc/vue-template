(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-498f1b70"],{"688c":function(e,t,a){},b065:function(e,t,a){},ea90:function(e,t,a){"use strict";a("b065")},efe3:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search-con"},[a("div",{staticClass:"search-box"},[a("div",{staticClass:"input-con"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.companyName,expression:"companyName",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入企业全称，领取成绩单"},domProps:{value:e.companyName},on:{keyup:e.onKeyup,blur:[e.onBlur,function(t){return e.$forceUpdate()}],focus:e.onFocus,input:function(t){t.target.composing||(e.companyName=t.target.value.trim())}}}),a("span",{on:{click:e.clearInput}},[e._v("X")])]),a("div",{staticClass:"btn",on:{click:e.clickSearch}},[e._v("搜索")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.searchMoreShow,expression:"searchMoreShow"}],staticClass:"search-list"},[a("ul",e._l(e.companyNameList,(function(t,r){return a("li",{key:r,on:{click:function(a){return e.$router.push({path:"/list",query:{companyName:t.CompanyName}})}}},[e._v(e._s(t.CompanyName))])})),0)])]),a("SearchError",{directives:[{name:"show",rawName:"v-show",value:e.searchError,expression:"searchError"}]})],1)},n=[],c=(a("96cf"),a("1da1")),s=a("5530"),o=a("2f62"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search-error"},[e._m(0),e._m(1),a("div",{staticClass:"btn-con italic"},[a("router-link",{staticClass:"btn-back italic",attrs:{to:"/"}},[e._v("返回首页")]),a("router-link",{staticClass:"btn-look italic",attrs:{to:"/rank"}},[e._v("查看企业榜单")])],1)])},u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"img-con"},[a("img",{staticClass:"img-people",attrs:{src:"https://img.cbi360.net/2020/12/15/7fdfed9d-3fae-427b-ad7d-adb803e32999.png",alt:""}}),a("img",{staticClass:"img-text",attrs:{src:"https://img.cbi360.net/2020/12/15/1a4816e2-88f1-4a52-8ac5-f4e20402e197.png",alt:""}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-con italic"},[a("p",{staticClass:"italic"},[e._v("请确保您输入的是施工企业全称")]),a("p",{staticClass:"italic"},[e._v("如仍有问题，请联系成绩单保管员")]),a("p",{staticClass:"italic"},[e._v("电话: "),a("a",{staticClass:"italic",attrs:{href:"tel:18969186302"}},[e._v("18969186302")])])])}],m={components:{},data:function(){return{}},created:function(){},methods:{}},p=m,l=(a("ea90"),a("2877")),h=Object(l["a"])(p,i,u,!1,null,"1b374584",null),f=h.exports,d={components:{SearchError:f},data:function(){return{searchError:!1,companyName:"",onKeyup:null,searchMoreShow:!1}},created:function(){this.clearInput(),this.onKeyup=this.$lodash.debounce(this.searchCompanyName,500)},computed:Object(s["a"])({},Object(o["b"])({companyNameList:function(e){return e.report.companyName}})),methods:{searchCompanyName:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.companyName){t.next=5;break}return t.next=3,e.$store.dispatch("report/changeCompanyNameList",[]);case 3:t.next=7;break;case 5:return t.next=7,e.$store.dispatch("report/searchCompanyName",{companyName:e.companyName});case 7:case"end":return t.stop()}}),t)})))()},clearInput:function(){this.companyName="",this.$store.dispatch("report/changeCompanyNameList",[]),this.searchError=!1},clickSearch:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.companyName){t.next=5;break}return t.next=3,e.$store.dispatch("report/getReport",{companyName:e.companyName});case 3:a=t.sent,200==a.Code&&a.Result?e.$router.push({path:"/list",query:{companyName:a.Result.company.CompanyName}}):e.searchError=!0;case 5:case"end":return t.stop()}}),t)})))()},onBlur:function(){var e=this;setTimeout((function(){e.searchMoreShow=!1}),200)},onFocus:function(){this.searchMoreShow=!0}}},v=d,y=(a("ff6d"),Object(l["a"])(v,r,n,!1,null,"da90a644",null));t["default"]=y.exports},ff6d:function(e,t,a){"use strict";a("688c")}}]);