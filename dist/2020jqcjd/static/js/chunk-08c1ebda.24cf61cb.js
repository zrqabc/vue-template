(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08c1ebda"],{"6f35":function(t,e,i){},"7acc":function(t,e,i){"use strict";i.r(e);var c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rank-con"},[i("div",{staticClass:"main-bg"},[i("div",{staticClass:"title-con"},[t._v(" 2020年"),i("span",[t._v(t._s(t.provinceName))]),t._v("企业综合实力排行榜 ")]),i("div",{staticClass:"btn-con"},t._l(t.btns,(function(e,c){return i("div",{key:c,staticClass:"btn",class:{active:t.activeIndex==c},on:{click:function(e){return t.clickBtn(c)}}},[t._v(" "+t._s(e)+" ")])})),0),i("div",{staticClass:"list-con"},[i("table",[i("tbody",[t._m(0),t._l(t.reportTop,(function(e,c){return i("tr",{key:c},[i("td",[t._v(t._s(c+1))]),i("td",{staticClass:"text-left"},[t._v(t._s(e.CompanyName))]),i("td",[t._v(t._s(e.Score))]),i("td",[i("div",{staticClass:"btn",on:{click:function(i){return t.$router.push({path:"/list",query:{companyName:e.CompanyName}})}}},[t._v("领取")])])])}))],2)])]),i("div",{staticClass:"tip-con"},[t._v("*数据来源于公投市场")]),i("div",{staticClass:"back-con"},[i("router-link",{staticClass:"btn italic",attrs:{to:"/"}},[t._v("返回首页")])],1),i("van-dialog",{attrs:{"show-confirm-button":!1,"close-on-click-overlay":!1},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("ul",{staticClass:"provice-con"},t._l(t.provinceList,(function(e,c){return i("li",{key:c,on:{click:function(i){return t.clickProvince(e.ProvinceID,e.Province)}}},[t._v(t._s(e.ShortName))])})),0)])],1),t.isShare?t._e():i("Share")],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("th",[t._v("排名")]),i("th",[t._v("企业名称")]),i("th",[t._v("综合实力")]),i("th",[t._v("点击领取")])])}],n=i("5530"),o=i("2f62"),r={components:{},data:function(){return{btns:["全国","省份"],activeIndex:0,show:!1,provinceID:-1,provinceName:"全国"}},created:function(){this.initShare(),this.getReportTop()},computed:Object(n["a"])({},Object(o["b"])({provinceList:function(t){return t.report.provinceList},reportTop:function(t){return t.report.reportTop}})),methods:{initShare:function(){this.getWeChatShareData({title:"2020年建企成绩单来了，你的企业多少分？"},{title:"2020年建企成绩单来袭，你的成绩是？",desc:""},this.successCallback)},successCallback:function(){alert("分享成功回调"),this.$store.dispatch("record/sendRecord",{clickType:2,phone:this.$cookie.getCookie("isPermissions")})},clickBtn:function(t){switch(this.activeIndex=t,t){case 0:this.provinceID=-1,this.provinceName="全国",this.getReportTop(),this.show=!1;break;case 1:this.getProvinceList(),this.show=!0;break}},getProvinceList:function(){this.$store.dispatch("report/getProvinceList")},getReportTop:function(){this.$store.dispatch("report/getReportTop",{provinceID:this.provinceID})},clickProvince:function(t,e){this.show=!1,this.provinceID=t,this.provinceName=e,this.getReportTop()}}},a=r,l=(i("bbca"),i("2877")),p=Object(l["a"])(a,c,s,!1,null,"0655b69d",null);e["default"]=p.exports},bbca:function(t,e,i){"use strict";i("6f35")}}]);