(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(e,t,r){var content=r(200);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(27).default)("9ccd9bb0",content,!0,{sourceMap:!1})},199:function(e,t,r){"use strict";var n=r(194);r.n(n).a},200:function(e,t,r){(t=r(26)(!1)).push([e.i,".item-contain[data-v-eceed432]{margin-left:8%;width:80%;display:grid;justify-content:space-around;grid-template-columns:1fr 2fr}.product-options[data-v-eceed432]{display:flex}input[data-v-eceed432],select[data-v-eceed432]{width:60px;font-size:25px;margin:0 5px;padding:5px 10px}.update-num[data-v-eceed432]{background:#000;border-color:#000;color:#fff;font-size:20px;width:45px}.size[data-v-eceed432]{margin-left:10px}.size-picker[data-v-eceed432]{width:130px;font-size:20px;height:100%;border:0;background-color:#fff;outline:1px solid #ccc;outline-offset:-1px}.quantity[data-v-eceed432]{display:flex}.size-required-message[data-v-eceed432]{color:red}@media screen and (max-width:650px){.img img[data-v-eceed432]{width:100%}.item-contain[data-v-eceed432]{margin-left:0!important;width:95%!important}.review[data-v-eceed432]{width:90%;margin-left:4%}}",""]),e.exports=t},203:function(e,t,r){"use strict";r.r(t);r(67),r(25),r(19),r(12),r(37),r(68);var n=r(28),c=r(24);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={data:function(){return{item:""}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)(["featuredProjects"])),mounted:function(){var component=this;this.$store.getters.featuredProjects((function(data){var e=window.location.href.split("/")[4];data.filter((function(t){JSON.parse(t)._id==e&&(component.item=JSON.parse(t))}))}))}},f=(r(199),r(9)),component=Object(f.a)(d,(function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  "+this._s(this.item._id)+"\n")])}),[],!1,null,"eceed432",null);t.default=component.exports}}]);