(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{177:function(t,n,e){"use strict";e.r(n);e(95),e(96),e(17);var o=e(151),c=e.n(o),r={data:function(){return{logs:"",content:"",address:"https://go-chat-zeno0119.herokuapp.com"}},methods:{post:function(){var t=this,n=new URLSearchParams;n.append("timestamp",(new Date).toString()),n.append("content",this.content),c.a.post(this.address+"/api/post",n).then((function(n){t.logs=n.data,console.log(n.data)}))},get:function(){var t=this;c.a.get(this.address+"/api/get").then((function(n){t.logs=n.data,console.log(n)}))}}},d=e(22),component=Object(d.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._l(t.logs,(function(n){return e("div",{key:n.timestamp,staticStyle:{border:"solid 1px"}},[e("p",[t._v(t._s(n.content))])])})),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{type:"text"},domProps:{value:t.content},on:{input:function(n){n.target.composing||(t.content=n.target.value)}}}),t._v(" "),e("button",{on:{click:t.post}},[t._v("post")]),t._v(" "),e("button",{on:{click:t.get}},[t._v("update")])],2)}),[],!1,null,"b3ed6350",null);n.default=component.exports}}]);