(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12b0b23d"],{"00c1":function(t,e,n){},"040c":function(t,e,n){"use strict";n("0d89")},"0d89":function(t,e,n){},"111d":function(t,e,n){"use strict";n("39f4")},"16f0":function(t,e,n){"use strict";n("00c1")},2656:function(t,e,n){},"31af":function(t,e,n){"use strict";n("efcb")},"39f4":function(t,e,n){},"49cd":function(t,e,n){"use strict";n("8f55")},"4b54":function(t,e,n){},5186:function(t,e,n){},"64b7":function(t,e,n){},"7e43":function(t,e,n){"use strict";n("f6e3")},"891f":function(t,e,n){"use strict";n("ee10")},"8f55":function(t,e,n){},"90a2":function(t,e,n){"use strict";n("5186")},"99af":function(t,e,n){"use strict";var a=n("23e7"),i=n("d039"),s=n("e8b5"),r=n("861d"),c=n("7b0b"),o=n("50c4"),l=n("8418"),u=n("65f0"),p=n("1dde"),d=n("b622"),m=n("2d00"),v=d("isConcatSpreadable"),f=9007199254740991,C="Maximum allowed index exceeded",h=m>=51||!i((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),_=p("concat"),b=function(t){if(!r(t))return!1;var e=t[v];return void 0!==e?!!e:s(t)},g=!h||!_;a({target:"Array",proto:!0,forced:g},{concat:function(t){var e,n,a,i,s,r=c(this),p=u(r,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(s=-1===e?r:arguments[e],b(s)){if(i=o(s.length),d+i>f)throw TypeError(C);for(n=0;n<i;n++,d++)n in s&&l(p,d,s[n])}else{if(d>=f)throw TypeError(C);l(p,d++,s)}return p.length=d,p}})},"9d32":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resultlist"},[n("van-swipe",{staticStyle:{height:"calc(100vh - 100px)"},attrs:{vertical:"",loop:!1,"show-indicators":!1,"initial-swipe":"0"}},[t.report.company.TenderCount>0?n("van-swipe-item",[n("Project")],1):t._e(),t.report.company.TenderMoneySum>0?n("van-swipe-item",[n("Money")],1):t._e(),t.report.projectRanges.length>0?n("van-swipe-item",[n("Area")],1):t._e(),t.report.company.TechniqueCount>0?n("van-swipe-item",[n("Qualification")],1):t._e(),t.report.company.RedCompanyCount+t.report.company.RedBuilderCount+t.report.company.RedProjectCount>0?n("van-swipe-item",[n("Honor")],1):t._e(),t.report.company.PeopleOneCount+t.report.company.PeopleTwoCount>0?n("van-swipe-item",[n("Builder")],1):t._e(),n("van-swipe-item",[n("ResultVs")],1),n("van-swipe-item",[n("Score")],1)],1),n("Form"),t.isClickShare?n("Share"):t._e()],1)},i=[],s=(n("99af"),n("5530")),r=(n("96cf"),n("1da1")),c=n("2f62"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-con"},[n("div",{staticClass:"main-bg"},[n("div",{staticClass:"top-con"},[n("h1",{staticClass:"italic"},[t._v("亲爱的")]),n("p",{staticClass:"text italic"},[t._v(t._s(t.report.company.CompanyName))]),n("div",{staticClass:"num-con italic"},[t._v(" 2020年一共中了 "),n("span",{staticClass:"num"},[t._v(t._s(t.report.company.TenderCount))]),t._v("个标 ")])]),n("div",{staticClass:"middle-con"},[t._m(0),n("div",{staticClass:"text-con italic"},[t._v(t._s(t.report.company.FirstTenderName))])]),n("div",{staticClass:"bottom-con"},[n("div",{staticClass:"item"},[t._m(1),n("div",{staticClass:"text-con italic"},[n("span",[n("i",[t._v(t._s(t.report.company.OftenTenderCity))])])])]),n("div",{staticClass:"item"},[t._m(2),n("div",{staticClass:"text-con italic"},[n("span",[n("i",[t._v(t._s(t.report.company.OftenTenderCityCount))]),t._v("个标 ")])])])])]),n("Arrow")],1)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-con"},[n("img",{staticClass:"img1",attrs:{src:"https://img.cbi360.net/2020/12/15/1240cf02-16ab-4187-891d-d1c115f0f51f.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-con"},[n("img",{staticClass:"img1",attrs:{src:"https://img.cbi360.net/2020/12/15/df74aeb5-ce3a-46b2-8629-86c9abb5e513.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-con"},[n("img",{staticClass:"img2",attrs:{src:"https://img.cbi360.net/2020/12/15/c386cea9-960d-4d57-92dc-959c2831f442.png",alt:""}})])}],u={components:{},data:function(){return{}},created:function(){},computed:Object(s["a"])({},Object(c["b"])({report:function(t){return t.report.report}})),methods:{}},p=u,d=(n("040c"),n("2877")),m=Object(d["a"])(p,o,l,!1,null,"4541e626",null),v=m.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-con"},[n("div",{staticClass:"main-bg"},[n("div",{staticClass:"top-con"},[n("h1",{staticClass:"italic"},[t._v("2020年,您的中标总金额达")]),n("p",{staticClass:"text italic"},[n("i",[t._v(t._s(t.report.company.TenderMoneySum?t.report.company.TenderMoneySum.toFixed(0):""))]),t._v("万 ")])]),n("div",{staticClass:"middle-con"},[t._m(0),n("div",{staticClass:"text-con italic"},[t._v(t._s(t.report.company.TenderMoneyMaxName))])]),n("div",{staticClass:"bottom-con"},[n("div",{staticClass:"item"},[n("div",{staticClass:"title-con"},[t._v("金额为")]),n("div",{staticClass:"text-con italic"},[n("i",[t._v(t._s(t.report.company.TenderMoneyMax?t.report.company.TenderMoneyMax.toFixed(0):""))]),t._v("万 ")])]),n("div",{staticClass:"item"},[n("div",{staticClass:"title-con con2"},[t._v("常中标的金额范围是")]),n("div",{staticClass:"text-con italic often"},[t._v(t._s(t.report.company.OftenTenderMoney))])])])]),n("Arrow")],1)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-con"},[n("img",{staticClass:"img1",attrs:{src:"https://img.cbi360.net/2020/12/15/e539f61c-10eb-4bc2-8546-fb8b928a6fa4.png",alt:""}})])}],h={components:{},data:function(){return{}},created:function(){},computed:Object(s["a"])({},Object(c["b"])({report:function(t){return t.report.report}})),methods:{}},_=h,b=(n("891f"),Object(d["a"])(_,f,C,!1,null,"d5833cc4",null)),g=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-con"},[n("div",{staticClass:"main-bg"},[n("div",{staticClass:"new-con"},[1==t.newArea.length?n("div",{staticClass:"item-con"},[t._m(0),n("div",{staticClass:"text-con italic"},[n("div",{staticClass:"text-top"},[n("span",{staticClass:"province"},[t._v(t._s(t.newArea[0].Province))]),t._v("建筑市场 ")])])]):t._e(),2==t.newArea.length?n("div",{staticClass:"item-con"},[t._m(1),n("div",{staticClass:"text-con italic"},[n("div",{staticClass:"text-top"},[n("span",{staticClass:"province"},[t._v(t._s(t.newArea[0].Province)+"、"+t._s(t.newArea[1].Province))]),n("span",{staticClass:"num"},[t._v("2")]),n("span",[t._v("个")]),t._v("建筑市场 ")])])]):t._e(),3==t.newArea.length?n("div",{staticClass:"item-con"},[t._m(2),n("div",{staticClass:"text-con italic"},[n("div",{staticClass:"text-top"},[n("span",{staticClass:"province"},[t._v(t._s(t.newArea[0].Province)+"、"+t._s(t.newArea[1].Province)+"、"+t._s(t.newArea[2].Province))]),n("span",{staticClass:"num"},[t._v("3")]),n("span",[t._v("个")]),t._v("建筑市场 ")])])]):t._e(),t.newArea.length>3?n("div",{staticClass:"item-con"},[t._m(3),n("div",{staticClass:"text-con italic"},[n("div",{staticClass:"text-top"},[n("span",{staticClass:"province"},[t._v(t._s(t.newArea[0].Province)+"、"+t._s(t.newArea[1].Province)+"、"+t._s(t.newArea[2].Province))]),n("span",[t._v("等")])]),n("div",{staticClass:"text-top"},[n("span",{staticClass:"num"},[t._v(t._s(t.newArea.length))]),n("span",[t._v("个")]),t._v(" 建筑市场 ")])])]):t._e()]),n("div",{staticClass:"all-con"},[1==t.allAreaDescending.length?n("div",{staticClass:"item-con item-con2"},[n("div",{staticClass:"title-con italic"},[t._v("截止2020年")]),n("div",{staticClass:"text-con italic"},[n("div",{staticClass:"text-top"},[t._v(" 您的业务范围主要在 "),n("span",{staticClass:"province"},[t._v(t._s(t.allAreaDescending[0].Province))])])])]):t._e(),2==t.allAreaDescending.length?n("div",{staticClass:"item-con item-con2"},[n("div",{staticClass:"title-con italic"},[t._v("截止2020年")]),n("div",{staticClass:"text-con italic"},[n("div",{staticClass:"text-top"},[t._v("您的业务范围主要在")]),n("div",{staticClass:"text-top"},[n("span",{staticClass:"province"},[t._v(t._s(t.allAreaDescending[0].Province)+"、"+t._s(t.allAreaDescending[1].Province))]),n("span",{staticClass:"num"},[t._v("2")]),n("span",[t._v("个")]),t._v("地区 ")])])]):t._e(),3==t.allAreaDescending.length?n("div",{staticClass:"item-con item-con2"},[n("div",{staticClass:"title-con italic"},[t._v(" 截止2020年 ")]),n("div",{staticClass:"text-con italic"},[n("div",{staticClass:"text-top"},[t._v("您的业务范围主要在")]),n("div",{staticClass:"text-top"},[n("span",{staticClass:"province"},[t._v(t._s(t.allAreaDescending[0].Province)+"、"+t._s(t.allAreaDescending[1].Province)+"、"+t._s(t.allAreaDescending[2].Province))]),n("span",{staticClass:"num"},[t._v("3")]),n("span",[t._v("个")]),t._v("地区 ")])])]):t._e(),t.allAreaDescending.length>3?n("div",{staticClass:"item-con item-con2"},[n("div",{staticClass:"title-con italic"},[t._v(" 截止2020年 ")]),n("div",{staticClass:"text-con italic"},[n("div",{staticClass:"text-top"},[t._v("您的业务范围已遍布全国")]),n("div",{staticClass:"text-top"},[n("span",{staticClass:"province"},[t._v(t._s(t.allAreaDescending[0].Province)+"、"+t._s(t.allAreaDescending[1].Province)+"、"+t._s(t.allAreaDescending[2].Province))]),n("span",[t._v("等")])]),n("div",{staticClass:"text-top"},[n("span",{staticClass:"num"},[t._v(t._s(t.allAreaDescending.length))]),n("span",[t._v("个")]),t._v("地区 ")])])]):t._e()]),0==t.newArea.length?n("div",{staticClass:"nochange-con"},[n("img",{attrs:{src:"https://img.cbi360.net/2020/12/16/6e051111-1324-4470-b6db-df0c362da25e.png",alt:""}})]):t._e(),t._m(4)]),n("Arrow")],1)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-con"},[n("img",{staticClass:"img1",attrs:{src:"https://img.cbi360.net/2020/12/15/32299e6e-a857-40d0-a82e-2fa67ae2ef5a.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-con"},[n("img",{staticClass:"img1",attrs:{src:"https://img.cbi360.net/2020/12/15/32299e6e-a857-40d0-a82e-2fa67ae2ef5a.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-con"},[n("img",{staticClass:"img1",attrs:{src:"https://img.cbi360.net/2020/12/15/32299e6e-a857-40d0-a82e-2fa67ae2ef5a.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-con"},[n("img",{staticClass:"img1",attrs:{src:"https://img.cbi360.net/2020/12/15/32299e6e-a857-40d0-a82e-2fa67ae2ef5a.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chart-con"},[n("div",{attrs:{id:"area"}})])}],w=(n("4de4"),n("d81d"),n("fb6a"),n("b893")),O={components:{},data:function(){return{}},created:function(){},mounted:function(){this.area()},computed:Object(s["a"])(Object(s["a"])({},Object(c["b"])({report:function(t){return t.report.report}})),{},{newArea:function(){return this.report.projectRanges.filter((function(t,e){return 1==t.IsNew}))},allAreaDescending:function(){var t=JSON.parse(JSON.stringify(this.report.projectRanges)),e=t.sort(Object(w["b"])("TenderCount",!1));return e}}),methods:{area:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("report/getReport",{companyName:t.$route.query.companyName});case 2:n=t.chartData(),a=t.$echarts.init(document.getElementById("area")),i={legend:{textStyle:{color:"#312260"},orient:"vertical",top:"middle",right:"10%"},series:[{type:"pie",center:["40%","50%"],data:n,label:{show:!1,formatter:"{c}，{d}%",color:"#fff"}}]},a.setOption(i);case 6:case"end":return e.stop()}}),e)})))()},chartData:function(){var t=JSON.parse(JSON.stringify(this.report.projectRanges)),e=t.sort(Object(w["b"])("TenderCount",!1)),n=e.slice(3),a=0;return n.map((function(t){a+=t.TenderCount})),[{value:e[0]?e[0]["TenderCount"]:0,name:e[0]?e[0]["Province"]:""},{value:e[1]?e[1]["TenderCount"]:0,name:e[1]?e[1]["Province"]:""},{value:e[2]?e[2]["TenderCount"]:0,name:e[2]?e[2]["Province"]:""},{value:a,name:"其他"}]}}},j=O,P=(n("111d"),Object(d["a"])(j,y,x,!1,null,"15229856",null)),A=P.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-con"},[n("div",{staticClass:"main-bg"},[n("div",{staticClass:"item-con"},[n("div",{staticClass:"title-con italic"},[t._v("截止2020年底")]),n("div",{staticClass:"text-con italic"},[n("div",{staticClass:"text-item"},[t._v(" 您一共申请了"),n("span",{staticClass:"num"},[t._v(" "+t._s(t.report.company.TechniqueCount)+" ")]),t._v("项资质 ")]),t.report.company.TechniqueWholeCount?n("div",{staticClass:"text-item"},[t._v(" 总承包资质"),n("span",{staticClass:"num"},[t._v(" "+t._s(t.report.company.TechniqueWholeCount)+" ")]),t._v("项 ")]):t._e(),t.report.company.TechniqueMajorCount?n("div",{staticClass:"text-item"},[t._v(" 专业承包资质"),n("span",{staticClass:"num"},[t._v(" "+t._s(t.report.company.TechniqueMajorCount)+" ")]),t._v("项 ")]):t._e()])]),t.report.company.TechniqueWholeCount?n("div",{staticClass:"item-con item-con2"},[n("div",{staticClass:"title-con italic"},[t._v("总承包最高等级资质分别为")]),n("div",{staticClass:"text-con italic"},t._l(t.wholeArea,(function(e,a){return n("div",{key:a,staticClass:"text-item"},[n("img",{staticClass:"icon",attrs:{src:e.src,alt:""}}),n("p",{staticClass:"italic"},[t._v(t._s(e.CategoryName))])])})),0)]):t._e(),t.report.company.TechniqueMajorCount&&!t.report.company.TechniqueWholeCount?n("div",{staticClass:"professional-con"},[n("img",{attrs:{src:"https://img.cbi360.net/2020/12/16/2d064b85-ed33-4d50-95eb-f824bfc2eb5c.png",alt:""}})]):t._e()]),n("Arrow")],1)},$=[],R={components:{},data:function(){return{iconList:[{id:"101010",src:"https://img.cbi360.net/2020/12/16/b8521726-ddc2-4c50-8331-3545f4ce1155.png"},{id:"101011",src:"https://img.cbi360.net/2020/12/16/91c8ca91-0471-477a-aa23-4e6b93d6a20c.png"},{id:"101012",src:"https://img.cbi360.net/2020/12/16/8d4331b9-073e-46b4-b865-84fead4ffcd2.png"},{id:"101013",src:"https://img.cbi360.net/2020/12/16/d48a8576-9f21-4dd8-a9f3-2afe1569bacf.png"},{id:"101014",src:"https://img.cbi360.net/2020/12/16/12cded8e-16d5-4d2a-a569-f14e153f6d39.png"},{id:"101015",src:"https://img.cbi360.net/2020/12/16/e8d40fcf-d0e4-407c-a458-c7028902871c.png"},{id:"101016",src:"https://img.cbi360.net/2020/12/16/a39e455b-b81c-4643-bfd6-b6853b13eba5.png"},{id:"101017",src:"https://img.cbi360.net/2020/12/16/91905555-97fa-47db-90b2-22cf9be3acb6.png"},{id:"101018",src:"https://img.cbi360.net/2020/12/16/df6514f1-9dd7-478e-b688-12cf56210c72.png"},{id:"101019",src:"https://img.cbi360.net/2020/12/16/3fce2ea6-8b40-4441-88b5-e2ad06faa7e3.png"},{id:"101020",src:"https://img.cbi360.net/2020/12/16/4d4bde9f-5b54-462d-b36a-9b98b4e67a1d.png"},{id:"101021",src:"https://img.cbi360.net/2020/12/16/0e62098f-064a-43a9-915b-4c3a6c90ec62.png"}]}},created:function(){},computed:Object(s["a"])(Object(s["a"])({},Object(c["b"])({report:function(t){return t.report.report}})),{},{wholeArea:function(){var t=this,e=this.report.techniques.filter((function(t,e){return 1==t.ParentID}));return e.map((function(e,n){t.iconList.map((function(t,n){e.CategoryID==t.id&&(e.src=t.src)}))})),e}}),methods:{}},T=R,N=(n("9ff2"),Object(d["a"])(T,S,$,!1,null,"8a7ff944",null)),k=N.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-con"},[n("div",{staticClass:"main-bg"},[n("div",{staticClass:"item-con"},[n("div",{staticClass:"title-con italic"},[t._v("2020年")]),n("div",{staticClass:"text-con italic"},[n("div",{staticClass:"text-item"},[t._v(" 您荣获了"),n("span",{staticClass:"num"},[t._v(" "+t._s(t.report.company.RedCompanyCount)+" ")]),t._v("项企业荣誉 ")]),n("div",{staticClass:"text-item"},[n("span",{staticClass:"num"},[t._v(" "+t._s(t.report.company.RedBuilderCount)+" ")]),t._v("项建造师荣誉 ")]),t.report.company.RedProjectCount?n("div",{staticClass:"text-item"},[n("span",{staticClass:"num"},[t._v(" "+t._s(t.report.company.RedProjectCount)+" ")]),t._v("项工程荣誉 ")]):t._e()])]),t.report.company.RedProjectProvinceCount&&t.report.company.RedProjectCountryCount?n("div",{staticClass:"item-con italic item-con2"},[n("div",{staticClass:"text-con italic"},[n("div",{staticClass:"text-item"},[t._v(" 工程荣誉中省级奖项有"),n("span",{staticClass:"num"},[t._v(" "+t._s(t.report.company.RedProjectProvinceCount)+" ")]),t._v("项 ")]),n("div",{staticClass:"text-item"},[t._v(" 国家级奖项有"),n("span",{staticClass:"num"},[t._v(" "+t._s(t.report.company.RedProjectCountryCount)+" ")]),t._v("项，为 ")])]),n("div",{staticClass:"list-con"},t._l(t.redProjectCountry,(function(e,a){return n("div",{key:a,staticClass:"title-con"},[t._v(" "+t._s(e.AwardName)+" ")])})),0),n("div",{staticClass:"list"},t._l(6,(function(t,e){return n("li",{key:e})})),0)]):t._e(),t.report.company.RedProjectCountryCount&&!t.report.company.RedProjectProvinceCount?n("div",{staticClass:"item-con italic item-con2"},[n("div",{staticClass:"text-con italic"},[n("div",{staticClass:"text-item"},[t._v(" 国家级奖项有"),n("span",{staticClass:"num"},[t._v(" "+t._s(t.report.company.RedProjectCountryCount)+" ")]),t._v("项，为 ")])]),n("div",{staticClass:"list-con"},t._l(t.redProjectCountry,(function(e,a){return n("div",{key:a,staticClass:"title-con"},[t._v(" "+t._s(e.AwardName)+" ")])})),0),n("div",{staticClass:"list"},t._l(6,(function(t,e){return n("li",{key:e})})),0)]):t._e(),t.report.company.RedProjectProvinceCount&&!t.report.company.RedProjectCountryCount?n("div",{staticClass:"item-con italic item-con2"},[n("div",{staticClass:"text-con italic"},[n("div",{staticClass:"text-item"},[t._v(" 工程荣誉中省级奖项有"),n("span",{staticClass:"num"},[t._v(" "+t._s(t.report.company.RedProjectProvinceCount)+" ")]),t._v("项 ")])]),t._m(0)]):t._e(),t.report.company.RedProjectCount?t._e():n("div",{staticClass:"item-con italic item-con2"},[t._m(1)])]),n("Arrow")],1)},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img-con"},[n("img",{attrs:{src:"https://img.cbi360.net/2020/12/16/1edb8f9a-c142-4ba7-a8bc-b0804cc4d0de.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img-con"},[n("img",{attrs:{src:"https://img.cbi360.net/2020/12/16/1edb8f9a-c142-4ba7-a8bc-b0804cc4d0de.png",alt:""}})])}],M={components:{},data:function(){return{}},created:function(){},computed:Object(s["a"])(Object(s["a"])({},Object(c["b"])({report:function(t){return t.report.report}})),{},{redProjectCountry:function(){var t=JSON.parse(JSON.stringify(this.report.reds)),e=t.sort(Object(w["b"])("Sort",!0));return e.slice(0,3)}}),methods:{}},B=M,q=(n("90a2"),Object(d["a"])(B,E,D,!1,null,"5adda365",null)),I=q.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-con"},[n("div",{staticClass:"main-bg"},[t._m(0),n("div",{staticClass:"builder-con"},[t.report.company.PeopleOneCount&&t.report.company.PeopleTwoCount?n("All"):t._e(),t.report.company.PeopleOneCount&&!t.report.company.PeopleTwoCount?n("One"):t._e(),t.report.company.PeopleTwoCount&&!t.report.company.PeopleOneCount?n("Two"):t._e()],1)]),n("Arrow")],1)},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-con"},[n("div",{staticClass:"title-con italic"},[t._v("截止2020年")])])}],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-con"},[n("div",{staticClass:"text-con italic"},[n("div",{staticClass:"text-item"},[t._v(" 您已有"),n("span",{staticClass:"num"},[t._v(" "+t._s(t.report.company.PeopleOneCount+t.report.company.PeopleTwoCount)+" ")]),t._v("名注册建造师，其中 ")])]),t._m(0),n("ul",{staticClass:"btn-con"},t._l(t.btnList,(function(e,a){return n("li",{key:a,staticClass:"italic",class:{active:t.activeIndex==a},on:{click:function(e){return t.clickBtn(a)}}},[t._v(t._s(e))])})),0)])},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chart-con"},[n("div",{attrs:{id:"people-all"}})])}],G={components:{},data:function(){return{btnList:["一级","二级"],activeIndex:0}},created:function(){},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("report/getReport",{companyName:t.$route.query.companyName});case 2:t.peopleChart(t.oneArr);case 3:case"end":return e.stop()}}),e)})))()},computed:Object(s["a"])(Object(s["a"])({},Object(c["b"])({report:function(t){return t.report.report}})),{},{oneArr:function(){return this.report.peoples.filter((function(t){return 1==t.CategoryLevel}))},twoArr:function(){return this.report.peoples.filter((function(t){return 2==t.CategoryLevel}))}}),methods:{clickBtn:function(t){switch(this.activeIndex=t,t){case 0:this.peopleChart(this.oneArr);break;case 1:this.peopleChart(this.twoArr);break}},peopleChart:function(t){var e=0==this.activeIndex?"一级建造师有 ".concat(this.report.company.PeopleOneCount," 名"):"二级建造师有 ".concat(this.report.company.PeopleTwoCount," 名"),n=this.chartData(t),a=this.$echarts.init(document.getElementById("people-all")),i={title:{subtext:e,subtextStyle:{color:"#312260",fontSize:14},x:"center"},legend:{textStyle:{color:"#312260"},bottom:"0"},series:[{type:"pie",radius:"58%",center:["50%","42%"],data:n,label:{show:!1,formatter:"{c}，{d}%",color:"#fff"}}]};a.setOption(i)},chartData:function(t){var e=JSON.parse(JSON.stringify(t)),n=e.sort(Object(w["b"])("PeopleCount",!1)),a=n.slice(4),i=0;return a.map((function(t){i+=t.PeopleCount})),[{value:n[0]?n[0]["PeopleCount"]:0,name:n[0]?n[0]["CategoryName"]:""},{value:n[1]?n[1]["PeopleCount"]:0,name:n[1]?n[1]["CategoryName"]:""},{value:n[2]?n[2]["PeopleCount"]:0,name:n[2]?n[2]["CategoryName"]:""},{value:n[3]?n[3]["PeopleCount"]:0,name:n[3]?n[3]["CategoryName"]:""},{value:i,name:"其他"}]}}},V=G,z=(n("fb1d"),Object(d["a"])(V,F,W,!1,null,"7af70548",null)),H=z.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-con"},[n("div",{staticClass:"text-con italic"},[n("div",{staticClass:"text-item"},[t._v(" 您已有一级建造师"),n("span",{staticClass:"num"},[t._v(" "+t._s(t.report.company.PeopleOneCount)+" ")]),t._v("名 ")])]),t._m(0)])},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chart-con"},[n("div",{attrs:{id:"people-one"}})])}],U={components:{},data:function(){return{}},created:function(){},mounted:function(){this.peopleChart()},computed:Object(s["a"])(Object(s["a"])({},Object(c["b"])({report:function(t){return t.report.report}})),{},{oneArr:function(){return this.report.peoples.filter((function(t){return 1==t.CategoryLevel}))}}),methods:{peopleChart:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("report/getReport",{companyName:t.$route.query.companyName});case 2:n=t.chartData(t.oneArr),a=t.$echarts.init(document.getElementById("people-one")),i={legend:{textStyle:{color:"#312260"},bottom:"0"},series:[{type:"pie",radius:"68%",center:["50%","42%"],data:n,label:{show:!1,formatter:"{c}，{d}%",color:"#fff"}}]},a.setOption(i);case 6:case"end":return e.stop()}}),e)})))()},chartData:function(t){var e=JSON.parse(JSON.stringify(t)),n=e.sort(Object(w["b"])("PeopleCount",!1)),a=n.slice(4),i=0;return a.map((function(t){i+=t.PeopleCount})),[{value:n[0]?n[0]["PeopleCount"]:0,name:n[0]?n[0]["CategoryName"]:""},{value:n[1]?n[1]["PeopleCount"]:0,name:n[1]?n[1]["CategoryName"]:""},{value:n[2]?n[2]["PeopleCount"]:0,name:n[2]?n[2]["CategoryName"]:""},{value:n[3]?n[3]["PeopleCount"]:0,name:n[3]?n[3]["CategoryName"]:""},{value:i,name:"其他"}]}}},X=U,Y=(n("ef3f"),Object(d["a"])(X,Q,K,!1,null,"5965708c",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-con"},[n("div",{staticClass:"text-con italic"},[n("div",{staticClass:"text-item"},[t._v(" 您已有二级建造师"),n("span",{staticClass:"num"},[t._v(" "+t._s(t.report.company.PeopleTwoCount)+" ")]),t._v("名 ")])]),t._m(0)])},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chart-con"},[n("div",{attrs:{id:"people-two"}})])}],nt={components:{},data:function(){return{}},created:function(){},mounted:function(){this.peopleChart()},computed:Object(s["a"])(Object(s["a"])({},Object(c["b"])({report:function(t){return t.report.report}})),{},{twoArr:function(){return this.report.peoples.filter((function(t){return 2==t.CategoryLevel}))}}),methods:{peopleChart:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("report/getReport",{companyName:t.$route.query.companyName});case 2:n=t.chartData(t.twoArr),a=t.$echarts.init(document.getElementById("people-two")),i={legend:{textStyle:{color:"#312260"},bottom:"0"},series:[{type:"pie",radius:"68%",center:["50%","42%"],data:n,label:{show:!1,formatter:"{c}，{d}%",color:"#fff"}}]},a.setOption(i);case 6:case"end":return e.stop()}}),e)})))()},chartData:function(t){var e=JSON.parse(JSON.stringify(t)),n=e.sort(Object(w["b"])("PeopleCount",!1)),a=n.slice(4),i=0;return a.map((function(t){i+=t.PeopleCount})),[{value:n[0]?n[0]["PeopleCount"]:0,name:n[0]?n[0]["CategoryName"]:""},{value:n[1]?n[1]["PeopleCount"]:0,name:n[1]?n[1]["CategoryName"]:""},{value:n[2]?n[2]["PeopleCount"]:0,name:n[2]?n[2]["CategoryName"]:""},{value:n[3]?n[3]["PeopleCount"]:0,name:n[3]?n[3]["CategoryName"]:""},{value:i,name:"其他"}]}}},at=nt,it=(n("16f0"),Object(d["a"])(at,tt,et,!1,null,"62478bbe",null)),st=it.exports,rt={components:{All:H,One:Z,Two:st},data:function(){return{}},created:function(){},computed:Object(s["a"])({},Object(c["b"])({report:function(t){return t.report.report}})),methods:{}},ct=rt,ot=(n("31af"),Object(d["a"])(ct,L,J,!1,null,"00fe2f07",null)),lt=ot.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-con"},[t._m(0),n("Arrow")],1)},pt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-bg"},[n("div",{staticClass:"item-con"},[n("div",{staticClass:"title-con italic"},[t._v("2019 VS 2020年度对比")])]),n("div",{staticClass:"chart-con"},[n("div",{attrs:{id:"resultvs"}})]),n("div",{staticClass:"bottom-con"},[t._v(" 胜不骄败不馁 "),n("br"),n("p",[n("span",[t._v("2021")]),t._v("年继续砥砺奋进！ ")])])])}],dt={components:{},data:function(){return{}},created:function(){},mounted:function(){this.resultvs()},computed:Object(s["a"])({},Object(c["b"])({report:function(t){return t.report.report}})),methods:{resultvs:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a,i,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("report/getReport",{companyName:t.$route.query.companyName});case 2:n=["中标量/个","中标总额/W","荣誉/项","业务范围/个省"],a=[t.report.history.TenderCount,Math.round(t.report.history.TenderMoney),t.report.history.RedCount,t.report.history.BusinessRangeCount],i=[t.report.company.TenderCount,Math.round(t.report.company.TenderMoneySum),t.report.company.RedCompanyCount+t.report.company.RedBuilderCount+t.report.company.RedProjectCount,t.report.projectRanges.length],s=t.$echarts.init(document.getElementById("resultvs")),r={tooltip:{trigger:"axis"},legend:{top:"bottom",left:"right",textStyle:{}},grid:{width:"99%",left:"center"},xAxis:{type:"category",data:n,axisLine:{lineStyle:{}},axisLabel:{formatter:"{value}",fontSize:10,interval:0}},yAxis:[{show:!1,type:"log",name:"数量/个",axisLabel:{formatter:"{value}个"},axisLine:{show:!1,lineStyle:{color:"#ABCBFF"}},splitLine:{show:!1,lineStyle:{color:"#ABCBFF"}},axisTick:{lineStyle:{}}},{show:!1,type:"log",name:"中标总额/亿",axisLabel:{formatter:"{value}项"},axisLine:{show:!1,lineStyle:{color:"#ABCBFF"}},splitLine:{show:!1,lineStyle:{color:"#6076AD"}},axisTick:{lineStyle:{}}}],series:[{name:"2019年",type:"bar",data:a,label:{show:!0,position:"insideTopRight"},itemStyle:{color:"#295EC6"}},{name:"2020年",type:"bar",yAxisIndex:1,data:i,barGap:"0%",label:{show:!0,position:"top"},itemStyle:{color:"#2F235C"}}]},s.setOption(r);case 8:case"end":return e.stop()}}),e)})))()}}},mt=dt,vt=(n("7e43"),Object(d["a"])(mt,ut,pt,!1,null,"4100fb69",null)),ft=vt.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-con"},[n("div",{staticClass:"main-bg"},[n("div",{staticClass:"item-con"},[n("div",{staticClass:"title-con italic"},[t._v("2020年建企成绩单")]),n("div",{staticClass:"top-con"},[n("h1",{staticClass:"italic"},[t._v("亲爱的")]),n("p",{staticClass:"text italic"},[t._v(t._s(t.report.company.CompanyName))]),n("div",{staticClass:"num-con italic"},[n("p",{staticClass:"italic"},[t._v(" 您的综合实力为："),n("span",{staticClass:"num"},[t._v(t._s(t.report.company.Score))])]),n("p",{staticClass:"italic"},[t._v(" 您已打败了"),n("span",{staticClass:"num"},[t._v(t._s((1.0132*t.report.company.Score/10).toFixed(0))+"%")]),t._v("建筑同行 ")]),n("img",{staticClass:"watermark",attrs:{src:"https://img.cbi360.net/2020/12/30/df60b3f6-4f66-46a4-a8c2-3ac4f1ee72b3.png",alt:""}})])]),n("div",{staticClass:"img-con"},[t._v(" 建筑业的跨域强者，人生就要不停奋斗 ")])]),n("div",{staticClass:"bottom-con"},[n("div",{staticClass:"left"},[n("router-link",{staticClass:"look-btn italic",attrs:{to:"/rank"}},[t._v("查看企业榜单")]),n("a",{staticClass:"look-btn italic",on:{click:t.clickShare}},[t._v("晒成绩")])],1),t._m(0)]),n("div",{staticClass:"tip-con"},[t._v("*数据来源于公投市场")])])])},ht=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right"},[n("img",{attrs:{src:"https://img.cbi360.net/2020/12/28/dd3c9c8a-bcc9-4c39-a6c7-c5c54a2b0f53.png",alt:""}}),n("p",[t._v("生成我的成绩单")])])}],_t={components:{},data:function(){return{}},created:function(){},computed:Object(s["a"])({},Object(c["b"])({report:function(t){return t.report.report}})),methods:{clickShare:function(){this.$store.dispatch("other/getIsClickShare",!0)}}},bt=_t,gt=(n("49cd"),Object(d["a"])(bt,Ct,ht,!1,null,"68001a44",null)),yt=gt.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-con"},[n("van-dialog",{attrs:{"show-confirm-button":!1,"close-on-click-overlay":!1},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"form"},[n("div",{staticClass:"form-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"请输入手机号领取成绩单"},domProps:{value:t.phone},on:{blur:t.onBlur,input:function(e){e.target.composing||(t.phone=e.target.value)}}}),n("div",{staticClass:"send",class:{gray:t.isGray},on:{click:t.send}},[t._v(t._s(t.sendText))])]),n("div",{staticClass:"form-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.verifyCode,expression:"verifyCode"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.verifyCode},on:{blur:t.onBlur,input:function(e){e.target.composing||(t.verifyCode=e.target.value)}}})]),n("div",{staticClass:"form-item"},[n("div",{staticClass:"get",on:{click:t.clickReport}},[t._v("领取成绩单")])])])])],1)},wt=[],Ot={components:{},data:function(){return{show:!1,sendText:"发送验证码",isGray:!1,phone:"",verifyCode:""}},created:function(){this.show=!this.isPermissions},computed:Object(s["a"])({},Object(c["b"])({})),methods:{send:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.validate()){e.next=5;break}return e.next=3,t.$store.dispatch("other/sendSMS",{phone:t.phone});case 3:n=e.sent,200==n.Code?(t.$toast(n.Msg),t.timeDown()):t.$toast(n.Msg);case 5:case"end":return e.stop()}}),e)})))()},clickReport:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.validate2()){e.next=5;break}return e.next=3,t.$store.dispatch("other/userSMSIsVerify",{phone:t.phone,verify:t.verifyCode});case 3:n=e.sent,200==n.Code?(t.$cookie.setCookie("isPermissions","1",30),t.show=!1):t.$toast(n.Msg);case 5:case"end":return e.stop()}}),e)})))()},validate:function(){return this.phone?!!/^1[345678]\d{9}$/.test(this.phone)||(this.$toast("请输入正确的手机号码"),!1):(this.$toast("请输入手机号码"),!1)},validate2:function(){return this.phone?/^1[345678]\d{9}$/.test(this.phone)?!!this.verifyCode||(this.$toast("请输入验证码"),!1):(this.$toast("请输入正确的手机号码"),!1):(this.$toast("请输入手机号码"),!1)},timeDown:function(){var t=this;this.isGray=!0;var e=60,n=setInterval((function(){e--,t.sendText="".concat(e," S"),e<=0&&(clearInterval(n),t.sendText="发送验证码",t.isGray=!1)}),1e3)},onBlur:function(){document.querySelector("body").scrollTop=0}}},jt=Ot,Pt=(n("aa4b"),Object(d["a"])(jt,xt,wt,!1,null,"52bb59c7",null)),At=Pt.exports,St={components:{Project:v,Money:g,Area:A,Qualification:k,Honor:I,Builder:lt,ResultVs:ft,Score:yt,Form:At},data:function(){return{}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getReport();case 2:return e.next=4,t.initShare();case 4:case"end":return e.stop()}}),e)})))()},computed:Object(s["a"])({},Object(c["b"])({report:function(t){return t.report.report},isClickShare:function(t){return t.other.isClickShare}})),methods:{initShare:function(){var t=this.isShare?"2020建企成绩单来了，".concat(this.report.company.CompanyName,"得分").concat(this.report.company.Score,"，你的企业多少分？"):"我是".concat(this.report.company.CompanyName,"，这是我2020年的成绩单，总成绩是").concat(this.report.company.Score,"分！");this.getWeChatShareData({title:t},{title:"2020建企成绩单",desc:t})},getReport:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("report/getReport",{companyName:t.$route.query.companyName});case 2:n=e.sent,200!=n.Code&&t.$router.push("/404");case 4:case"end":return e.stop()}}),e)})))()}}},$t=St,Rt=Object(d["a"])($t,a,i,!1,null,"0c9cebce",null);e["default"]=Rt.exports},"9ff2":function(t,e,n){"use strict";n("4b54")},aa0e:function(t,e,n){},aa4b:function(t,e,n){"use strict";n("aa0e")},ee10:function(t,e,n){},ef3f:function(t,e,n){"use strict";n("64b7")},efcb:function(t,e,n){},f6e3:function(t,e,n){},fb1d:function(t,e,n){"use strict";n("2656")},fb6a:function(t,e,n){"use strict";var a=n("23e7"),i=n("861d"),s=n("e8b5"),r=n("23cb"),c=n("50c4"),o=n("fc6a"),l=n("8418"),u=n("b622"),p=n("1dde"),d=n("ae40"),m=p("slice"),v=d("slice",{ACCESSORS:!0,0:0,1:2}),f=u("species"),C=[].slice,h=Math.max;a({target:"Array",proto:!0,forced:!m||!v},{slice:function(t,e){var n,a,u,p=o(this),d=c(p.length),m=r(t,d),v=r(void 0===e?d:e,d);if(s(p)&&(n=p.constructor,"function"!=typeof n||n!==Array&&!s(n.prototype)?i(n)&&(n=n[f],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return C.call(p,m,v);for(a=new(void 0===n?Array:n)(h(v-m,0)),u=0;m<v;m++,u++)m in p&&l(a,u,p[m]);return a.length=u,a}})}}]);