(this.webpackJsonpasana=this.webpackJsonpasana||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/logo.ca6c3cfd.png"},44:function(e,t,a){e.exports=a.p+"static/media/logo1.ea44d910.png"},47:function(e,t,a){e.exports=a(61)},52:function(e,t,a){},53:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),o=(a(52),a(19)),s=a(6),u=(a(53),a(20)),i=a.n(u),m=a(34),d=a(4),p=Object(n.createContext)(),_=p,b=function(e){var t=Object(s.e)(),a=Object(n.useState)(""),r=Object(d.a)(a,2),c=r[0],o=r[1],u=Object(n.useState)(""),p=Object(d.a)(u,2),b=p[0],E=p[1],f=Object(n.useState)({}),g=Object(d.a)(f,2),h=g[0],v=g[1],y=Object(n.useState)([]),O=Object(d.a)(y,2),N=O[0],j=O[1],x=Object(n.useState)([]),C=Object(d.a)(x,2),S=C[0],T=C[1],k=Object(n.useState)([]),w=Object(d.a)(k,2),A=w[0],I=w[1],D=Object(n.useState)([]),R=Object(d.a)(D,2),M=R[0],q=R[1],P=function(){var e=Object(m.a)(i.a.mark((function e(a,n){var l,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://192.168.0.174:3003/login",l={email:a,password:n},e.next=4,fetch("http://192.168.0.174:3003/login",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}});case 4:return r=e.sent,e.next=7,r.json();case 7:c=e.sent,console.log(c),v(c.persona_data),e.t0=c.persona_data.id_role,e.next=1===e.t0?13:2===e.t0?15:3===e.t0?17:19;break;case 13:return console.log("Where link to users must be"),e.abrupt("break",20);case 15:return t.push("/companypanel"),e.abrupt("break",20);case 17:return t.push("/adminpanel"),e.abrupt("break",20);case 19:console.log("Default");case 20:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),U=function(){var e=Object(m.a)(i.a.mark((function e(t,a,n,l,r,c,s,u,m){var d,p,_;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://192.168.0.174:3003/users/create",d={name:t,lastname:a,id_document_type:n,document:l,id_company:r,position:c,phone_number:s,email:u,address:m},console.log(d),e.next=5,fetch("http://192.168.0.174:3003/users/create",{method:"POST",body:JSON.stringify(d),headers:{"Content-Type":"application/json"}});case 5:return p=e.sent,e.next=8,p.json();case 8:if(_=e.sent,console.log(_),"User created successfully"!==_.msg){e.next=13;break}return o(_),e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})));return function(t,a,n,l,r,c,o,s,u){return e.apply(this,arguments)}}(),F=function(){var e=Object(m.a)(i.a.mark((function e(t,a,n){var l,r,o,s,u,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://192.168.0.174:3003/evaluations/request",l=new Date,r=l.getFullYear()+"-"+(l.getMonth()+1)+"-"+l.getDate(),o=l.getHours()+":"+l.getMinutes()+":"+l.getSeconds(),s={id_user:t,id_company:a,tests:n,time:o,date:r},console.log(s),e.next=8,fetch("http://192.168.0.174:3003/evaluations/request",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}});case 8:return u=e.sent,e.next=11,u.json();case 11:if(m=e.sent,console.log(c),"Evaluation requested successfully"!==m.msg){e.next=16;break}return E(m),e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return l.a.createElement(_.Provider,{value:{register_user:U,register_user_res:c,request_evaluation:F,request_evaluation_res:b,login:P,login_res:h,get_all_company_users:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id_company:e})};fetch("http://192.168.0.174:3003/company/users/get_all",t).then((function(e){return e.json()})).then((function(e){return console.log(e),j(e.company_users),e})).catch((function(e){return console.log("Error al ejecutar Fetch "+e),e}))},get_all_company_users_data:N,evaluations:S,get_all_company_evaluations:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id_company:e})};fetch("http://192.168.0.174:3003/company/evaluations/get_all",t).then((function(e){return e.json()})).then((function(e){return console.log(e),T(e.evaluations),e})).catch((function(e){return console.log("Error al ejecutar Fetch "+e),e}))},evaluation_detail:A,get_evaluation_detail:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idEvaluation:e})};fetch("http://192.168.0.174:3003/company/evaluations/detail",t).then((function(e){return e.json()})).then((function(e){return console.log(e),I(e.evaluation_detail),e})).catch((function(e){return console.log("Error al ejecutar Fetch "+e),e}))},users:M,get_all_users:function(){fetch("http://192.168.0.174:3003/admin/users/get_all",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e),q(e.users_array),e})).catch((function(e){return console.log("Error al ejecutar Fetch "+e),e}))}}},e.children)};b.displayName="MainProvider";var E=b,f=a(44),g=a.n(f),h=function(){var e=Object(n.useContext)(_).login,t=Object(n.useState)(""),a=Object(d.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),s=Object(d.a)(o,2),u=s[0],i=s[1];return l.a.createElement("div",{className:"login_body flex_container_center"},l.a.createElement("div",null,l.a.createElement("div",{className:"logo_container flex_container_center"},l.a.createElement("img",{src:g.a,className:"logo_login",alt:"Logo Asana"})),l.a.createElement("div",{className:"flex_container_center form_container"},l.a.createElement("form",{className:"flex"},l.a.createElement("label",{className:"label"},"Correo electr\xf3nico"),l.a.createElement("input",{type:"text",className:"input_login",onChange:function(e){return c(e.target.value)}}),l.a.createElement("label",{className:"label"},"Contrase\xf1a"),l.a.createElement("input",{type:"password",className:"input_login",onChange:function(e){return i(e.target.value)}}),l.a.createElement("div",{className:"btns_container_login flex_container_center"},l.a.createElement("button",{onClick:function(t){return function(t){t.preventDefault(),e(r,u)}(t)},className:"button btn_login"},"Ingresar"))))))},v=a(18),y=a(27),O=a.n(y),N=function(e){var t=Object(n.useContext)(_).login_res;return l.a.createElement("header",{className:"header flex_container_space_between"},l.a.createElement("div",null,l.a.createElement("img",{src:O.a,alt:"Asana Logo",className:"logo"})),"admin"===e.panel?l.a.createElement("div",null,l.a.createElement(o.b,null,l.a.createElement("button",{className:"button"},"Tratamientos")),l.a.createElement(o.b,{to:"/adminpanel"},l.a.createElement("button",{className:"button"},"Usuarios")),l.a.createElement("div",{id:"company_name_div"},t.name),l.a.createElement(v.a,null,l.a.createElement(v.a.Toggle,{variant:"success",id:"drop_btn_company"}),l.a.createElement(v.a.Menu,{id:"dropdown_menu_company"},l.a.createElement(v.a.Item,{id:"dropdown_item_company",href:"/"},"Cerrar sesi\xf3n")))):l.a.createElement("div",null,l.a.createElement(o.b,{to:"/companypanel/evaluations"},l.a.createElement("button",{className:"button"},"Tratamientos")),l.a.createElement(o.b,{to:"/companypanel"},l.a.createElement("button",{className:"button"},"Usuarios")),l.a.createElement("div",{id:"company_name_div"},t.name),l.a.createElement(v.a,null,l.a.createElement(v.a.Toggle,{variant:"success",id:"drop_btn_company"}),l.a.createElement(v.a.Menu,{id:"dropdown_menu_company"},l.a.createElement(v.a.Item,{id:"dropdown_item_company",href:"/"},"Cerrar sesi\xf3n")))))},j=a(31),x=a(35);var C=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,{id:"modal_btn",variant:"primary",onClick:function(){return c(!0)}},e.modal_btn),l.a.createElement("div",{className:"flex_container_center"},l.a.createElement(x.a,{show:r,onHide:function(){return c(!1)}},l.a.createElement(x.a.Header,{closeButton:!0,className:"modal_header"},l.a.createElement("img",{src:O.a,className:"logo",alt:"Logo Asana"})),l.a.createElement(x.a.Body,null,e.children))))},S=a(39),T=function(e){var t=Object(n.useContext)(_),a=t.request_evaluation,r=t.login_res,c=Object(n.useState)([]),o=Object(d.a)(c,2),s=o[0],u=o[1],i=Object(n.useState)([]),m=Object(d.a)(i,2),p=m[0],b=m[1],E=Object(n.useState)(""),f=Object(d.a)(E,2),g=f[0],h=f[1],v=Object(n.useState)(!1),y=Object(d.a)(v,2),O=y[0],N=y[1];Object(n.useEffect)((function(){h(e.id_user)}),[]);var j=function(e){var t=e.target.id,a=e.target.name;if(e.target.checked){var n=[].concat(Object(S.a)(s),[{id:t}]),l=[].concat(Object(S.a)(p),[{nombre:a}]);u(n),b(l)}else{var r=s.filter((function(e){return e.id!==t})),c=p.filter((function(e){return e.nombre!==a}));b(c),u(r)}};return l.a.createElement("div",null,!0!==O?l.a.createElement("div",null,l.a.createElement("div",{className:"flex_container_center container_form"},l.a.createElement("h1",{className:"h1_new"},"SOLICITAR TRATAMIENTO"),l.a.createElement("form",{className:"user_register_form"},l.a.createElement("label",{className:"label evaluation_type_label user_register_label"},l.a.createElement("b",null,"Tipo de actividad")),l.a.createElement("div",{className:"flex"},l.a.createElement("input",{type:"checkbox",id:"1",onChange:function(e){return j(e)}}),l.a.createElement("label",{className:"modal_label user_register_label"},"Curso Intensivo de Yoga"),l.a.createElement("br",null)),l.a.createElement("div",{className:"flex"},l.a.createElement("input",{type:"checkbox",id:"2",onChange:function(e){return j(e)}}),l.a.createElement("label",{className:"modal_label user_register_label"},"Ba\xf1o con leche de almendras"),l.a.createElement("br",null)),l.a.createElement("div",{className:"flex"},l.a.createElement("input",{type:"checkbox",id:"3",onChange:function(e){return j(e)}}),l.a.createElement("label",{className:"modal_label user_register_label"},"Masaje japon\xe9s")),l.a.createElement("div",{className:"flex"},l.a.createElement("input",{type:"checkbox",id:"4",onChange:function(e){return j(e)}}),l.a.createElement("label",{className:"modal_label user_register_label"},"T\xe9cnicas de meditaci\xf3n")),l.a.createElement("div",{className:"flex"},l.a.createElement("input",{type:"checkbox",id:"5",onChange:function(e){return j(e)}}),l.a.createElement("label",{className:"modal_label user_register_label"},"Degustaci\xf3n vegana")),l.a.createElement("div",{className:"flex"},l.a.createElement("input",{type:"checkbox",id:"6",onChange:function(e){return j(e)}}),l.a.createElement("label",{className:"modal_label user_register_label"},"Curso b\xe1sico de relajaci\xf3n"))),l.a.createElement("div",{className:"btns_container_login btns_container"},l.a.createElement("button",{onClick:function(){a(g,r.id_company,s).then((function(e){e&&N(!0)}))},className:"button"},"Enviar")))):l.a.createElement("div",{className:"container_form"},l.a.createElement("h2",{className:"h2_success"},"\xa1TRATAMIENTO SOLICITADO CON \xc9XITO!")))},k=function(){var e=Object(n.useContext)(p),t=e.register_user,a=e.register_user_res,r=e.login_res,c=Object(n.useState)(""),o=Object(d.a)(c,2),s=o[0],u=o[1],i=Object(n.useState)(""),m=Object(d.a)(i,2),_=m[0],b=m[1],E=Object(n.useState)("1"),f=Object(d.a)(E,2),g=f[0],h=f[1],v=Object(n.useState)(""),y=Object(d.a)(v,2),O=y[0],N=y[1],j=Object(n.useState)(""),x=Object(d.a)(j,2),C=x[0],S=x[1],k=Object(n.useState)(""),w=Object(d.a)(k,2),A=w[0],I=w[1],D=Object(n.useState)(""),R=Object(d.a)(D,2),M=R[0],q=R[1],P=Object(n.useState)(""),U=Object(d.a)(P,2),F=U[0],J=U[1],B=Object(n.useState)(!1),L=Object(d.a)(B,2),H=L[0],W=L[1],G=Object(n.useState)(!1),V=Object(d.a)(G,2),X=V[0],Y=V[1];return l.a.createElement("div",null,!0!==X?l.a.createElement("div",null,l.a.createElement("div",{className:"flex_container_center container_form"},l.a.createElement("h1",{className:"h1_new"},"REGISTRAR USUARIO"),l.a.createElement("form",{className:"flex user_register_form"},l.a.createElement("label",{className:"label user_register_label"},"Nombre"),l.a.createElement("input",{type:"text",onChange:function(e){return u(e.target.value)},className:"input user_register_input"}),l.a.createElement("label",{className:"label user_register_label"},"Apellido"),l.a.createElement("input",{type:"text",onChange:function(e){return b(e.target.value)},className:"input user_register_input"}),l.a.createElement("label",{className:"label user_register_label",htmlFor:"select_doc"},"Documento"),l.a.createElement("div",{className:"flex_container_space_between"},l.a.createElement("select",{id:"select_doc",name:"select_doc",value:g,onChange:function(e){return function(e){e.preventDefault(),h(e.target.value)}(e)}},l.a.createElement("option",{value:"1"},"DNI"),l.a.createElement("option",{value:"2"},"PAS")),l.a.createElement("input",{type:"number",id:"input_doc",onChange:function(e){return N(e.target.value)},className:"input user_register_input"})),l.a.createElement("label",{className:"label user_register_label"},"Cargo"),l.a.createElement("input",{type:"text",onChange:function(e){return S(e.target.value)},className:"input user_register_input"}),l.a.createElement("label",{className:"label user_register_label"},"N\xfamero de tel\xe9fono"),l.a.createElement("input",{type:"number",onChange:function(e){return I(e.target.value)},className:"input user_register_input"}),l.a.createElement("label",{className:"label user_register_label"},"Correo electr\xf3nico"),l.a.createElement("input",{type:"email",onChange:function(e){return q(e.target.value)},className:"input user_register_input"}),l.a.createElement("label",{className:"label user_register_label"},"Direcci\xf3n"),l.a.createElement("input",{type:"text",onChange:function(e){return J(e.target.value)},className:"input user_register_input"}),l.a.createElement("div",{className:"btns_container_login btns_container"},l.a.createElement("button",{onClick:function(e){e.preventDefault(),t(s,_,g,O,r.id_company,C,A,M,F).then((function(e){e&&Y(!0)}))},className:"button"},"Enviar"))))):"",X&&!0!==H&&l.a.createElement("div",{className:"created_user_notification container_form"},l.a.createElement("h2",{className:"h2_success"},"\xa1USUARIO CREADO CON \xc9XITO!"),l.a.createElement("button",{onClick:function(){W(!H)},className:"button"},"Solicitar tratamiento +")),H&&l.a.createElement(T,{id_user:a.id}))},w=(a(42),a(32)),A=function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.lastname),l.a.createElement("td",null,e.document_type," ",e.document),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.phone_number),l.a.createElement("td",null,e.status),l.a.createElement("td",null,l.a.createElement(C,{modal_btn:"Solicitar tratamiento +"},l.a.createElement(T,{id_user:e.id_user,company:e.company}))))},I=function(e){var t=Object(n.useContext)(_),a=t.login_res,r=t.get_all_company_users,c=t.get_all_company_users_data,o=t.get_all_users,s=t.users;return Object(n.useEffect)((function(){"company"===e.panel?r(a.id_company):o()}),[]),l.a.createElement("div",{className:"table_container"},l.a.createElement(w.a,{striped:!0,hover:!0,responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("b",null,"Nombre")),l.a.createElement("th",null,l.a.createElement("b",null,"Apellido")),l.a.createElement("th",null,l.a.createElement("b",null,"Documento")),l.a.createElement("th",null,l.a.createElement("b",null,"Correo electr\xf3nico")),l.a.createElement("th",null,l.a.createElement("b",null,"Tel\xe9fono")),l.a.createElement("th",null),l.a.createElement("th",null))),l.a.createElement("tbody",null,"admin"===e.panel?s.map((function(t,a){return l.a.createElement(A,{panel:e.panel,id_user:t.id_user,name:t.name,lastname:t.lastname,document_type:t.document_type,document:t.document,position:t.position,company:t.company,time:t.time,date:t.date,status:t.status,email:t.email,phone_number:t.phone_number,key:a})})):c.map((function(t,a){return l.a.createElement(A,{panel:e.panel,id_user:t.id_user,name:t.name,lastname:t.lastname,document_type:t.document_type,document:t.document,position:t.position,company:t.company,time:t.time,date:t.date,status:t.status,email:t.email,phone_number:t.phone_number,key:a})})))))},D=function(){return l.a.createElement("div",null,l.a.createElement(N,{panel:"company"}),l.a.createElement("div",{className:"flex_container_space_between subheader"},l.a.createElement(C,{modal_btn:"Registrar usuario + "},l.a.createElement(k,null)),l.a.createElement("h1",{className:"table_title"},"USUARIOS")),l.a.createElement(I,{panel:"company"}))},R=function(){return l.a.createElement("div",null,l.a.createElement(N,{panel:"admin"}),l.a.createElement("div",{className:"flex_container_space_between subheader"},l.a.createElement("div",null,l.a.createElement("button",{className:"button"},"Registrar empresa +")),l.a.createElement("div",null,"Barra de b\xfasqueda")),l.a.createElement(I,{panel:"admin"}))},M=function(e){var t=Object(n.useContext)(_),a=t.get_evaluation_detail,r=t.evaluation_detail;return Object(n.useEffect)((function(){a(e.id_evaluation)}),[]),l.a.createElement("div",{className:"container_form"},l.a.createElement("h2",{className:"table_title"},"ACTIVIDADES SOLICITADAS"),r.map((function(e,t){return l.a.createElement("div",{key:t,className:"request_div"},l.a.createElement("b",null,l.a.createElement("h3",null,e.name)))})))},q=function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.lastname),l.a.createElement("td",null,e.document_type," ",e.document),l.a.createElement("td",null,e.position),l.a.createElement("td",null,e.status),l.a.createElement("td",null,e.date),l.a.createElement("td",null,e.time),l.a.createElement("td",null,l.a.createElement(C,{modal_btn:"Ver detalle"},l.a.createElement(M,{id_evaluation:e.id_evaluation}))))},P=function(e){var t=Object(n.useContext)(_),a=t.get_all_company_evaluations,r=t.evaluations,c=t.login_res;return Object(n.useEffect)((function(){"company"===e.panel&&a(c.id_company)}),[]),l.a.createElement("div",{className:"table_container"},l.a.createElement(w.a,{striped:!0,hover:!0,responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("b",null,"Nombre")),l.a.createElement("th",null,l.a.createElement("b",null,"Apellido")),l.a.createElement("th",null,l.a.createElement("b",null,"Documento")),l.a.createElement("th",null,l.a.createElement("b",null,"Cargo")),l.a.createElement("th",null,l.a.createElement("b",null,"Estado")),l.a.createElement("th",null,l.a.createElement("b",null,"Fecha de solicitud")),l.a.createElement("th",null,"Hora de solicitud"),l.a.createElement("th",null),l.a.createElement("th",null))),l.a.createElement("tbody",null,console.log(r),r.map((function(t,a){return l.a.createElement(q,{panel:e.panel,id_evaluation:t.id_evaluation,name:t.name,lastname:t.lastname,document_type:t.document_type,document:t.document,position:t.position,time:t.time,date:t.date,status:t.status,key:a})})))))},U=function(){return l.a.createElement("div",null,l.a.createElement(N,{panel:"company"}),l.a.createElement("div",{className:"flex_container_space_between subheader"},l.a.createElement("h1",{className:"table_title"},"TRATAMIENTOS"),l.a.createElement("div",null,"Barra de b\xfasqueda")),l.a.createElement(P,{panel:"company"}))};var F=function(){return l.a.createElement("div",{className:"company_panel_body"},l.a.createElement(o.a,null,l.a.createElement(E,null,l.a.createElement(s.a,{exact:!0,path:"/",component:h}),l.a.createElement(s.a,{exact:!0,path:"/companypanel",component:D}),l.a.createElement(s.a,{exact:!0,path:"/companypanel/evaluations",component:U}),l.a.createElement(s.a,{exact:!0,path:"/adminpanel",component:R}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.650b1891.chunk.js.map