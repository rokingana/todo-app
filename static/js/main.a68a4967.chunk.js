(this["webpackJsonp0511-todo-app"]=this["webpackJsonp0511-todo-app"]||[]).push([[0],{16:function(e,t,n){e.exports=n(27)},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(4),c=n.n(o),r=n(13),i=n(3),u=n(6),d=n(9),m=n(10),s=n(2),h=n(15),p=n(14),b=n(11),f=n(12);var v=function(e){return l.a.createElement("li",{className:"item",style:e.item.complete?{color:"#00b894",backgroundColor:"#55efc4",textDecoration:"line-through"}:null,onClick:function(){return e.handleClick(e.item.text)}},e.item.text,l.a.createElement("span",null,l.a.createElement(b.a,{icon:f.a,onClick:function(){return e.handleDelete(e.item.text)}})))},E=[{text:"Get cats",complete:!0},{text:"Feed cats",complete:!1},{text:"Change litter",complete:!1}],k=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={todos:E,newTodo:""},a.handleClick=a.handleClick.bind(Object(s.a)(a)),a.handleChange=a.handleChange.bind(Object(s.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(s.a)(a)),a.handleDelete=a.handleDelete.bind(Object(s.a)(a)),a}return Object(m.a)(n,[{key:"handleClick",value:function(e){this.setState((function(t){return{todos:t.todos.map((function(t){return t.text===e?Object(u.a)(Object(u.a)({},t),{},{complete:!t.complete}):t}))}}))}},{key:"handleDelete",value:function(e){this.setState((function(t){return{todos:t.todos.filter((function(t){return t.text!==e}))}}))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(i.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t={text:this.state.newTodo,complete:!1};this.setState((function(e){return{todos:[t].concat(Object(r.a)(e.todos))}})),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return l.a.createElement(v,{key:t.text,item:t,handleClick:e.handleClick,handleDelete:e.handleDelete})}));return l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"row"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",onChange:this.handleChange,name:"newTodo",value:this.state.newTodo,placeholder:"your new todo"}),l.a.createElement("button",{type:"submit"},"Add todo"))),l.a.createElement("ul",{className:"todo-list row"},t))}}]),n}(l.a.Component);n(26);var C=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"project \xa9 rokingana"))};var y=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"My Todo App"))};c.a.render(l.a.createElement(y,null),document.getElementById("header")),c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),c.a.render(l.a.createElement(C,null),document.getElementById("footer"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a68a4967.chunk.js.map