(window.webpackJsonpadmin_form=window.webpackJsonpadmin_form||[]).push([[0],{18:function(e,t,a){e.exports=a(19)},19:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(2),r=a(6),l=a(4),i=a(7),s=a(0),o=a.n(s),m=a(5),u=a.n(m),d=(a(24),a(17)),p=a.n(d),E=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"main-container"},this.props.tmp.map((function(e){return o.a.createElement("div",{className:"project",key:e._id},o.a.createElement("main",{className:"project-container"},o.a.createElement("img",{className:"project-container__img",src:"http://alexweber.ru/img/"+e.image}),o.a.createElement("a",{className:"project-container__del",target:"_blank",href:e.link}," ",e.name," "),o.a.createElement("a",{className:"project-container__del",target:"_blank",href:"http://alexweber.ru:5000/delete?name="+e.name}," \u0423\u0414\u0410\u041b\u0418\u0422\u042c ")))})))}}]),t}(o.a.Component),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).state={jsonAPI:[]},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"get",value:function(){var e=this,t=[];return p.a.get("http://alexweber.ru:5000/data").then((function(a){t=a.data,e.setState({jsonAPI:t})})),this.state.jsonAPI}}]),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(E,{tmp:this.get()}))}}]),t}(o.a.Component),j=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"onClick",value:function(){"admin"===document.querySelector("#log").value&&"qwe"===document.querySelector("#pass").value?u.a.render(o.a.createElement(h,{isSuccess:!0}),document.getElementById("root")):(alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"),u.a.render(o.a.createElement(h,{isSuccess:!1}),document.getElementById("root")))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"Authorization"},o.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),o.a.createElement("div",{className:"line"},o.a.createElement("div",{className:"row"},"\u041b\u043e\u0433\u0438\u043d:")," ",o.a.createElement("div",{className:"row"},o.a.createElement("input",{id:"log"}))),o.a.createElement("div",{className:"line"},o.a.createElement("div",{className:"row"}," \u041f\u0430\u0440\u043e\u043b\u044c:"),"  ",o.a.createElement("div",{className:"row"},o.a.createElement("input",{id:"pass"}))),o.a.createElement("span",{onClick:this.onClick},o.a.createElement("div",{className:"sbm"},"\u0417\u0430\u043b\u043e\u0433\u0438\u043d\u0438\u0442\u044c\u0441\u044f")))}}]),t}(o.a.Component);function h(e){return e.isSuccess?o.a.createElement(b,null):o.a.createElement(j,null)}u.a.render(o.a.createElement(h,{isSuccess:!1}),document.getElementById("root"))},24:function(e,t,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.d8e54712.chunk.js.map