(this["webpackJsonpgilmond-technical-task-todo-app"]=this["webpackJsonpgilmond-technical-task-todo-app"]||[]).push([[0],{80:function(e,t,n){},81:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(10),c=n.n(i),r=(n(80),n(68)),d=n(23),l=n(33),s=(n(81),n(125)),u=n(128),j=n(136),b=n(64),h=n.n(b),p=n(6),m=Object(s.a)((function(e){return{listItem:Object(l.a)({display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},e.breakpoints.up("sm"),{width:360}),deleteIcon:{color:"blue","&:hover":{color:"red"}}}})),f=function(e){var t=e.todo,n=e.id,o=e.handleDelete,i=m(),c=Object(a.useState)(!1),r=Object(d.a)(c,2),l=r[0],s=r[1];return Object(p.jsxs)("li",{className:i.listItem,style:l?{textDecoration:"line-through"}:void 0,children:[Object(p.jsx)(u.a,{control:Object(p.jsx)(j.a,{onClick:function(){return s(!l)},name:"checkbox",color:"primary"}),label:t}),Object(p.jsx)(h.a,{className:i.deleteIcon,onClick:function(){return o(n)}})]})},x=function(e){var t=e.todos,n=e.handleDelete;return Object(p.jsx)("ul",{children:t.length>0?t.map((function(e){return Object(p.jsx)(f,{todo:e.todo,id:e.id,handleDelete:n},e.id)})):null})},g=n(90),O=n(135),v=n(131),y=Object(s.a)((function(e){return{modalBackdrop:{display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",zIndex:1,top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.25)"},modalContent:Object(l.a)({display:"flex",flexDirection:"column",justifyContent:"space-evenly",width:"100%",height:"60%",margin:e.spacing(2),background:"white",border:"2px solid white",borderRadius:5,padding:e.spacing(4)},e.breakpoints.up("sm"),{width:360}),form:{display:"flex",flexDirection:"column",justifyContent:"space-evenly",height:"100%"}}})),C=function(e){var t=e.isModal,n=e.addTodo,o=y(),i=Object(a.useState)(""),c=Object(d.a)(i,2),r=c[0],l=c[1],s=Object(a.useState)(""),u=Object(d.a)(s,2),j=u[0],b=u[1];return Object(p.jsx)("div",{onClick:t,className:o.modalBackdrop,children:Object(p.jsxs)("div",{onClick:function(e){e.stopPropagation()},className:o.modalContent,children:[Object(p.jsx)(g.a,{variant:"h3",children:"Add Your Todo"}),Object(p.jsxs)("form",{className:o.form,onSubmit:function(e){e.preventDefault(),0===r.length||""===r.trim()?b("Input is empty. Please enter a todo"):(n(r),t(),b(""))},children:[Object(p.jsx)(O.a,{onChange:function(e){return l(e.target.value)},type:"text",name:"todo",placeholder:"What do you have todo?",value:r,id:"filled-basic",label:"Add Todo",variant:"outlined",helperText:j,error:!!j}),Object(p.jsx)(v.a,{variant:"outlined",size:"large",color:"primary",type:"submit",children:"Add Todo"})]})]})})},k=n(137),w=n(132),I=n.p+"static/media/logo.02afe57c.svg",D=n(133),B=n(65),T=n.n(B),N=n(134),S=n(130),A=Object(s.a)((function(e){return{root:{flexGrow:1},appContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"80vh",padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},img:{width:190,margin:50,height:50},addButton:{position:"fixed",bottom:24,right:24},modalBackdrop:{display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",zIndex:1,top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.25)"},modalContent:Object(l.a)({width:"100%",height:"60%",margin:e.spacing(2),background:"white",border:"2px solid white",borderRadius:5,display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{width:360})}})),z=[],M=function(){var e=A(),t=Object(a.useState)(z),n=Object(d.a)(t,2),o=n[0],i=n[1],c=Object(a.useState)(!1),l=Object(d.a)(c,2),s=l[0],u=l[1],j=function(){return u(!s)};return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(w.a,{container:!0,spacing:0,children:Object(p.jsx)(w.a,{item:!0,xs:12,children:Object(p.jsxs)("div",{className:e.appContainer,children:[Object(p.jsx)(g.a,{variant:"h2",children:"Todos"}),Object(p.jsx)("img",{src:I,alt:"gilmnd-logo",className:e.img}),0===o.length&&Object(p.jsx)("h4",{children:"Your Todo Will Be Added Here"}),Object(p.jsx)(D.a,{onClick:j,className:e.addButton,color:"primary","aria-label":"add",children:Object(p.jsx)(T.a,{})}),Object(p.jsx)(x,{todos:o,handleDelete:function(e){return i(o.filter((function(t){return t.id!==e})))}}),s&&Object(p.jsx)(N.a,{in:s,children:Object(p.jsx)(S.a,{children:Object(p.jsx)(C,{isModal:j,addTodo:function(e){i([].concat(Object(r.a)(o),[{id:Object(k.a)(),todo:e,isComplete:!1}]))}})})})]})})})})},P=n(43),R=n(52),J=n.n(R),W=n(66);function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var E=Object(P.b)("counter/fetchCount",function(){var e=Object(W.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),F=Object(P.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(E.pending,(function(e){e.status="loading"})).addCase(E.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),G=F.actions,H=(G.increment,G.decrement,G.incrementByAmount,F.reducer),q=Object(P.a)({reducer:{counter:H}}),K=n(67);c.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(K.a,{store:q,children:Object(p.jsx)(M,{})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.24b0ceec.chunk.js.map