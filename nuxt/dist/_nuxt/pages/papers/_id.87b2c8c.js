(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{196:function(t,e,n){var content=n(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("2db2ba5e",content,!0,{sourceMap:!1})},203:function(t,e,n){"use strict";var o=n(196);n.n(o).a},204:function(t,e,n){(e=n(26)(!1)).push([t.i,'iframe[data-v-9366552a]{width:100%;left:0;height:100vh;border:0}.comments[data-v-9366552a]{font-size:16px}.comment__conent[data-v-9366552a]{padding:10px;background:#f2fafc;text-align:left;margin:10px 10px 30px}.comments-box[data-v-9366552a]{font-size:18px;background:#fff;padding:25px;max-width:900px;border:1px solid;margin:0 auto 10px}.comment__user[data-v-9366552a]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;text-align:left;margin:5px 0;background:beige;padding:10px;border-radius:8px}.comments-box__item.comment[data-v-9366552a]{max-width:80%;margin:5px auto;position:relative}.paper-page[data-v-9366552a]{width:100%}#name_form[data-v-9366552a]{position:absolute;top:0;left:0;width:200px}.container-comment__input button[data-v-9366552a]:after,.container-comment__input button[data-v-9366552a]:before{content:"Отправить";position:absolute;top:0;bottom:0;right:0;left:0}.container-comment__input button[data-v-9366552a]:before{content:"wait..";transform:translateX(-100%);background:#000;transition:transform .3s cubic-bezier(.55,.055,.675,.19);color:#fff}.container-comment__input button[data-v-9366552a]:after{background:#413ad5;transform:translateX(100%);transition:transform .3s cubic-bezier(.16,.73,.58,.62) .3s}.container-comment__input button[data-v-9366552a]:hover:after,.container-comment__input button[data-v-9366552a]:hover:before{transform:translateX(0)}.container-comment__input button[data-v-9366552a]{overflow:hidden;position:absolute;top:0;left:200px;color:#000;padding:10px;box-shadow:0 0 10px rgba(0,0,0,.5);margin-left:20px;background:#fff}.container-comment__input button[data-v-9366552a]:after,.container-comment__input button[data-v-9366552a]:hover:before{position:absolute;top:0;right:0;left:0;height:100%;display:flex;vertical-align:middle;align-content:center;align-items:center;justify-content:center;color:#fff}#comment_add textarea[data-v-9366552a]{padding:30px 45px;width:500px;height:200px;outline:none}#comment_add textarea[data-v-9366552a]:focus{border-color:#bee5eb}#comment_add input[data-v-9366552a]{box-shadow:0 0 10px rgba(0,0,0,.5);border:none;padding:3px;outline:none}.close-btn img[data-v-9366552a]{position:absolute;width:35px;margin:10px;right:-50px;top:-50px}.container-comment__form input[data-v-9366552a],.container-comment__form textarea[data-v-9366552a]{margin:10px}.container-comment__input[data-v-9366552a]{position:relative}.container-comment__form[data-v-9366552a],.container-comment__form div[data-v-9366552a]{display:flex;padding:10px;align-items:center}.container-comment__form[data-v-9366552a]{border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;text-align:center;bottom:25px;margin:20px auto;background:#edeef0;justify-content:center}.container-comment__item[data-v-9366552a]{background:#edeef0;width:90%;margin:10px auto;text-align:left;padding:10px}.container-comment__header[data-v-9366552a]{font-size:20px;position:relative;display:flex;margin:45px}.container-comment__header div[data-v-9366552a]{padding:5px}.container-comment__header button[data-v-9366552a]{position:absolute;top:5px;right:5px}.container-comment[data-v-9366552a]{top:10%;color:#000;width:100%;z-index:999999999;position:absolute;left:0;height:100%;top:30px}.container-comment__content[data-v-9366552a]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;box-shadow:0 0 10px rgba(0,0,0,.5);width:900px;background:#fff;border-radius:5px;padding:10px;margin:0 auto 45px}',""]),t.exports=e},212:function(t,e,n){"use strict";n.r(e);n(67),n(28),n(29),n(14),n(47),n(193),n(84);var o=n(30),r=n(25);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{item:"",url:"",comments:[]}},computed:m({},Object(r.c)(["featuredPapers","featuredComments"])),methods:m(m({},Object(r.b)(["addComments","refrashComments"])),{},{comment_add:function(t){t.preventDefault();var component=this;t.preventDefault();var form=t.target.parentElement.parentElement,data={user:form.querySelector("input[name='name_form']").value,title:form.querySelector("textarea[name='comment_form']").value,paper:component.item.title,callbak:function(data){component.comments.push(data)}};console.log(form.querySelector("input[name='name_form']").value),console.log(form.querySelector("input[name='name_form']").value),""==form.querySelector("input[name='name_form']").value?(form.querySelector("input[name='name_form']").style="border:1px solid red;",alert("Заполните Имя")):""==form.querySelector("textarea[name='comment_form']").value?(form.querySelector("textarea[name='comment_form']").style="border:1px solid red;",alert("Заполните Комментарий")):(form.querySelector("input[name='name_form']").style="border:none",form.querySelector("textarea[name='comment_form']").style="border:none",this.addComments(data))}}),mounted:function(){var component=this,t=this.$store;t.getters.featuredPapers((function(data){var t=window.location.href.split("/")[4];component.url=window.location.href,data.filter((function(e){JSON.parse(e)._id==t&&(component.item=JSON.parse(e))}))})),t.getters.featuredComments((function(data){for(var i=0;i<data.length;i++)data[i].paper==component.item.title&&component.comments.push(data[i])}))},head:function(){return{title:this.item.title,meta:[{property:"og:title",content:this.item.title},{property:"og:type",content:this.item.discription},{property:"og:url",content:this.url},{property:"og:image",content:"http://www.alexweber.ru/img/papers/"+this.item.link+".jpg"}]}}},l=(n(203),n(9)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"paper-page"},[n("iframe",{attrs:{src:"http://alexweber.ru/papers/"+this.item.link+".html"}}),t._v(" "),n("section",{staticClass:"comments-box"},[n("h3",{staticClass:"comments-box__title"},[t._v("Комментарии к статье: "+t._s(this.item.title))]),t._v(" "),t._l(this.comments,(function(e){return n("div",{staticClass:"comments-box__item comment"},[n("div",{staticClass:"comment__user"},[n("svg",{staticStyle:{"enable-background":"new 0 0 612 612"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"15px",height:"15px",viewBox:"0 0 612 612","xml:space":"preserve"}},[n("g",[n("path",{attrs:{d:"M306,328.667c90.759,0,164.333-73.575,164.333-164.333S396.759,0,306,0c-90.759,0-164.333,73.575-164.333,164.333\n        S215.241,328.667,306,328.667z M383.878,229.376c-7.475,24.718-39.498,43.298-77.878,43.298c-38.38,0-70.403-18.581-77.878-43.298\n        H383.878z M583.667,498.667v54.169c0,8.029-5.912,17.359-13.246,20.624C541.993,586.109,464.45,612,306,612\n        c-158.451,0-235.992-25.891-264.42-38.54c-7.335-3.265-13.246-12.595-13.246-20.624v-54.169\n        c0-81.174,61.804-148.515,140.666-157.533c2.396-0.275,5.949,0.751,7.903,2.165c36.361,26.324,80.877,42.035,129.097,42.035\n        s92.738-15.711,129.097-42.035c1.955-1.414,5.508-2.44,7.904-2.165C521.862,350.152,583.667,417.493,583.667,498.667z"}})]),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g")]),t._v("\n      "+t._s(e.user)+"\n      ")]),t._v(" "),n("div",{staticClass:"comment__conent"},[t._v(t._s(e.title))])])})),t._v(" "),n("div",{staticClass:"container-comment__form"},[n("form",{attrs:{id:"comment_add"}},[n("div",{staticClass:"container-comment__input"},[n("input",{attrs:{placeholder:"Ваше имя?",id:"name_form",name:"name_form",type:"text"}}),t._v(" "),n("button",{on:{click:t.comment_add}},[t._v("Написать")]),t._v(" "),n("textarea",{attrs:{name:"comment_form"}})])])])],2)])}),[],!1,null,"9366552a",null);e.default=component.exports}}]);