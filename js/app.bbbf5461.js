(function(t){function e(e){for(var s,r,c=e[0],o=e[1],l=e[2],v=0,h=[];v<c.length;v++)r=c[v],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,c=1;c<i.length;c++){var o=i[c];0!==a[o]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"02a4":function(t,e,i){"use strict";var s=i("bb32"),a=i.n(s);a.a},"034f":function(t,e,i){"use strict";var s=i("64a9"),a=i.n(s);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("header",{staticClass:"top-menu"},[i("div",{staticClass:"svg-wrapper",on:{click:function(e){return t.activePage(1)}}},[i("svg",{attrs:{height:"60",width:"320",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{staticClass:"shape",class:{active:t.isActiveOnePage},attrs:{height:"60",width:"320"}})]),i("div",{staticClass:"text"},[t._v("\n              ГЛАВНАЯ\n         ")])]),i("div",{staticClass:"svg-wrapper",on:{click:function(e){return t.activePage(2)}}},[i("svg",{attrs:{height:"60",width:"320",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{staticClass:"shape",class:{active:t.isActiveTwoPage},attrs:{height:"60",width:"320"}})]),i("a",{staticClass:"text"},[t._v("\n              ПОРТФОЛИО\n        ")])]),i("div",{staticClass:"svg-wrapper",on:{click:function(e){return t.activePage(3)}}},[i("svg",{attrs:{height:"60",width:"320",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{staticClass:"shape",class:{active:t.isActiveThreePage},attrs:{height:"60",width:"320"}})]),i("div",{staticClass:"text"},[t._v("\n            КОНТАКТЫ\n         ")])])]),i("main",[1===t.slider?i("div",{staticClass:"top-baner"},[i("transition-group",{attrs:{name:"fade",tag:"div"}},[i("li",{key:1,staticClass:"alert alert-info"},[i("transition",{attrs:{name:"fade"}},[1==t.show?i("div",{staticClass:"main-page"},[i("div",{staticClass:"content"},[i("h1",{staticClass:"h1-main"},[t._v("1Главная")]),i("h2",{staticClass:"title"},[t._v("Заголовок 2")]),i("div",{staticClass:"text-page"},[t._v("Текст")])])]):t._e()]),i("transition",{attrs:{name:"fade2"}},[2==t.show?i("div",{staticClass:"portfolio-page"},[i("div",{staticClass:"content"},[i("div",{staticClass:"text-page"},[i("MyProjects",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)])]):t._e()]),i("transition",{attrs:{name:"fade3"}},[3==t.show?i("div",{staticClass:"contact-page"},[i("div",{staticClass:"content"},[i("h1",{staticClass:"h1-main"},[t._v("Контакты")]),i("h2",{staticClass:"title"},[t._v("Заголовок 2")]),i("div",{staticClass:"text-page"},[t._v("Текст")])])]):t._e()])],1)])],1):t._e(),2===t.slider?i("div",{staticClass:"top-baner two-slider"},[t._v("\n     ПОРТФОЛИО\n  ")]):t._e()]),i("footer")])},n=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"projects-list"},[i("div",{staticClass:"hidden-info"},[t._v(t._s(t.info))]),t._l(t.info,(function(e){return i("span",{key:t.info.id,staticClass:"project-container"},[i("div",{staticClass:"box-img",on:{click:function(i){return t.showSingle("http://alexweber.ru/img/"+e.imageFull)}}},[i("div",{staticClass:"sloy"}),i("img",{attrs:{src:"http://alexweber.ru/img/"+e.image}})]),i("div",{staticClass:"block-info-project"},[i("div",{staticClass:"link-project"},[i("a",{attrs:{target:"_blank",href:e.link}},[t._v(t._s(e.name))])]),i("div",{staticClass:"title-projects"},[t._v(" "+t._s(e.title)+" ")]),i("div",{staticClass:"discription-projects"},[t._v(" "+t._s(e.discription)+" ")])]),i("div",[i("div",[i("VueEasyLightbox",{attrs:{visible:t.visible,imgs:t.imgs,index:t.index},on:{hide:t.handleHide}})],1)])])}))],2)},c=[],o=i("825a");s["a"].use(o["a"]);var l={components:{VueEasyLightbox:o["a"]},name:"MyProjects",data:function(){return{info:null,visible:!1,imgs:""}},mounted:function(){var t=this,e=i("bc3a"),s="http://alexweber.ru:5000/data";e.get(s).then((function(e){t.info=e.data})).catch((function(e){t.errors.push(e)}))},methods:{showSingle:function(t){this.imgs=t,this.show()},show:function(){this.visible=!0},handleHide:function(){this.visible=!1}}},u=l,v=(i("02a4"),i("2877")),h=Object(v["a"])(u,r,c,!1,null,"0eb35674",null),d=h.exports,p={name:"app",data:function(){return{isActiveOnePage:!0,isActiveTwoPage:!1,isActiveThreePage:!1,active:1,slider:1,show:1,list:[{msg:"Первая страница",id:1},{msg:"Вторая страница",id:2},{msg:"1Третья страница",id:3}]}},methods:{activePage:function(t){1==t&&(this.isActiveOnePage=!0,this.isActiveTwoPage=!1,this.isActiveThreePage=!1),2==t&&(this.isActiveTwoPage=!0,this.isActiveOnePage=!1,this.isActiveThreePage=!1),3==t&&(this.isActiveThreePage=!0,this.isActiveOnePage=!1,this.isActiveTwoPage=!1),this.show=t},menu:function(t){this.slider=t}},computed:{evenList:function(){return this.list.filter((function(t){return t}))}},components:{MyProjects:d}},f=p,g=(i("034f"),Object(v["a"])(f,a,n,!1,null,null,null)),w=g.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(w)}}).$mount("#app")},"64a9":function(t,e,i){},bb32:function(t,e,i){}});
//# sourceMappingURL=app.bbbf5461.js.map