(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{4830:function(e,t,A){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return A(744)}])},224:function(e,t,A){"use strict";var a,n=A(7568),s=A(1799),r=A(9396),i=A(4051),l=A.n(i),c=A(5893),o=A(1163),u=A(7294),d=A(8948),p=A(2782),h=A(8482),x={time:"",title:"",subtitle:"",body:"",image:null,imageName:"",imageDesc:""};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.BODY:return(0,r.Z)((0,s.Z)({},e),{body:t.payload});case a.IMAGE:return(0,r.Z)((0,s.Z)({},e),{image:t.payload});case a.IMAGENAME:return(0,r.Z)((0,s.Z)({},e),{imageName:t.payload});case a.IMAGEDESC:return(0,r.Z)((0,s.Z)({},e),{imageDesc:t.payload});case a.TITLE:return(0,r.Z)((0,s.Z)({},e),{title:t.payload});case a.TIME:return(0,r.Z)((0,s.Z)({},e),{time:t.payload});case a.SUBTITLE:return(0,r.Z)((0,s.Z)({},e),{subtitle:t.payload});case a.CLEAR:return x;default:return e}}!function(e){e.TIME="TIME",e.TITLE="TITLE",e.SUBTITLE="SUBTITLE",e.BODY="BODY",e.IMAGE="IMAGE",e.IMAGENAME="IMAMGENAME",e.IMAGEDESC="IMAGEDESC",e.CLEAR="CLEAR"}(a||(a={}));t.Z=function(e){var t=e.id,A=e.propState,s=void 0===A?x:A,r=(0,o.useRouter)(),i=(0,u.useReducer)(f,s),E=i[0],g=i[1],m=(0,d.xJ)(),v=[{placeholder:"Titulo",value:E.title,setter:function(e){return g({type:a.TITLE,payload:e})}},{placeholder:"Subtitulo",value:E.subtitle,setter:function(e){return g({type:a.SUBTITLE,payload:e})}},{placeholder:"Cuerpo",value:E.body,setter:function(e){return g({type:a.BODY,payload:e})},type:"textarea"},{placeholder:"Fecha",value:E.time,setter:function(e){return g({type:a.TIME,payload:e})},type:"datetime-local"},{placeholder:"Imagen",value:E.image,setter:function(e){return function(e){if(e.target.files&&e.target.files[0]){var t=e.target.files[0];g({type:a.IMAGE,payload:t})}}(e)},type:"file"},{placeholder:"Nombre de la imagen",value:E.imageName,setter:function(e){return g({type:a.IMAGENAME,payload:e})}},{placeholder:"Descripcion de la imagen",value:E.imageDesc,setter:function(e){return g({type:a.IMAGEDESC,payload:e})}}],j=function(){var e=(0,n.Z)(l().mark((function e(A){var n,s,i,c,o,u,d,h,x,f,v;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A.preventDefault(),e.prev=1,n=E.image,s=E.title,i=E.subtitle,c=E.body,o=E.time,u=E.imageDesc,d=E.imageName,h=o.replace("T"," ")+":00.000",(f=new FormData).append("file",n),f.append("title",s),f.append("time",h),f.append("body",c),f.append("subtitle",i),f.append("imageName",d),f.append("imageDesc",u),!t){e.next=19;break}return e.next=16,fetch(p.Mr+"news/"+t,{method:"PATCH",headers:{Authorization:"Bearer "+(null===m||void 0===m?void 0:m.token),"Content-Type":"application/json"},body:JSON.stringify(E)});case 16:x=e.sent,e.next=22;break;case 19:return e.next=21,fetch(p.Mr+"news",{method:"POST",headers:{Authorization:"Bearer "+(null===m||void 0===m?void 0:m.token)},body:f});case 21:x=e.sent;case 22:return e.next=24,x.json();case 24:return v=e.sent,g({type:a.CLEAR}),r.push("/admin"),e.abrupt("return",v);case 30:e.prev=30,e.t0=e.catch(1),console.error(e.t0);case 33:case"end":return e.stop()}}),e,null,[[1,30]])})));return function(t){return e.apply(this,arguments)}}();return(0,c.jsx)(h.Z,{inputs:v,submit:j})}},744:function(e,t,A){"use strict";A.r(t),A.d(t,{default:function(){return N}});var a=A(5893),n={src:"/_next/static/media/paso1.33260416.jpeg",height:386,width:1272,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAACAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAACAwEBAAAAAAAAAAAAAAAAAgEDERIh/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABYRAAMAAAAAAAAAAAAAAAAAAAACMf/aAAwDAQACEQMRAD8AmtTNXQvEyuL5k5gABajLD//Z"},s={src:"/_next/static/media/paso2.382a23f8.jpeg",height:395,width:599,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAACAgIDAAAAAAAAAAAAAAAAAQIRAwQSIaH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAEAMf/aAAwDAQACEQMRAD8Anct3LzbkoPqnWOKvwAEoOyX/2Q=="},r={src:"/_next/static/media/paso3.50dce146.jpeg",height:500,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAADAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAABAwUBAAAAAAAAAAAAAAAAAQIhAwQSIjFR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABgRAAMBAQAAAAAAAAAAAAAAAAACMZGx/9oADAMBAAIRAxEAPwCFuq71tKDNcZjFI5zwAASDe5w//9k="},i=A(5675),l=A.n(i),c=A(7568),o=A(4051),u=A.n(o),d=A(7294),p=A(8948),h=A(1529),x=A(8482),f=function(){var e=(0,d.useState)(""),t=e[0],A=e[1],n=(0,d.useState)(""),s=n[0],r=n[1],i=(0,p.xJ)(),l=function(){var e=(0,c.Z)(u().mark((function e(a){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,(0,h.cN)(t,s,null===i||void 0===i?void 0:i.token);case 4:e.sent.statusCode?alert("Error ingresando video"):(A(""),r("")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),o=[{placeholder:"url",value:t,setter:A},{placeholder:"title",value:s,setter:r}];return(0,a.jsxs)("div",{className:"bg-white p-2 rounded-xl shadow m-2 mb-8",children:[(0,a.jsx)("p",{children:" Agregar video: "}),(0,a.jsx)(x.Z,{submit:l,inputs:o})]})},E=function(e){var t=e.title,A=e.children,n=(0,d.useState)(!1),s=n[0],r=n[1];return(0,a.jsx)("div",{className:"flex flex-col place-items-center w-full m-2",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{onClick:function(){r(!s)},className:"font-bold text-3xl",children:[" ",t," "]}),s&&A]})})},g=A(6483),m=function(){return(0,a.jsx)(g.Z,{canDelete:!0})},v=function(){return(0,a.jsx)(E,{title:"Videos",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("h4",{className:"text-xl",children:[" ","Como insertar un video de youtube paso a paso"]}),(0,a.jsx)("p",{children:" Para hacerlo necesitamos la url de EMBED, asi se consigue: "}),(0,a.jsxs)("div",{className:"flex flex-col space-y-5 flex-wrap h-screemn",children:[(0,a.jsxs)("div",{className:"w-full h-96",children:[(0,a.jsx)("p",{children:" Hacer click en Compartir "}),(0,a.jsx)(l(),{src:n,width:650,height:300})]}),(0,a.jsxs)("div",{className:"w-full h-96",children:[(0,a.jsx)("p",{children:" Hacer click en Incorporar "}),(0,a.jsx)(l(),{src:s,width:650,height:300})]}),(0,a.jsxs)("div",{className:"w-full h-96",children:[(0,a.jsx)("p",{children:" Copiar la url subrayada en azul "}),(0,a.jsx)(l(),{src:r,width:650,height:300})]})]}),(0,a.jsx)(f,{}),(0,a.jsx)(m,{})]})})},j=A(4592),w=function(){return(0,a.jsx)(j.Z,{canDelete:!0,canEdit:!0})},D=A(224),O=function(){return(0,a.jsx)(E,{title:"News",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D.Z,{}),(0,a.jsx)(w,{})]})})},z=A(1512),y=A(2869),I=function(){return(0,a.jsx)("div",{className:"w-10/12 m-auto",children:(0,a.jsx)(y.Z,{canDelete:!0,canEdit:!0})})},b=function(){return(0,a.jsx)(E,{title:"Fixture",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(z.Z,{}),(0,a.jsx)(I,{})]})})},B=A(2782),C=function(){var e=(0,d.useState)(),t=e[0],A=e[1],n=(0,d.useState)(),s=n[0],r=n[1],i=(0,p.xJ)(),l=function(){var e=(0,c.Z)(u().mark((function e(a){var n,l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,fetch(B.Mr+"newsletter/diffusion",{method:"POST",body:JSON.stringify({subject:t,message:s}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+(null===i||void 0===i?void 0:i.token)}});case 4:return n=e.sent,e.next=7,n.json();case 7:return l=e.sent,A(""),r(""),e.abrupt("return",l);case 13:e.prev=13,e.t0=e.catch(1);case 15:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return(0,a.jsx)(E,{title:"Newsletter",children:(0,a.jsxs)("form",{onSubmit:l,className:"m-4 bg-white space-y-4 rounded-xl shadow-lg h-fit p-4 flex flex-col place-items-center justify-center",children:[(0,a.jsx)("input",{value:t,onChange:function(e){return A(e.target.value)},className:"rounded-lg shadow p-2",placeholder:"Asunto"}),(0,a.jsx)("textarea",{value:s,onChange:function(e){return r(e.target.value)},placeholder:"Mensaje",className:"w-full rounded-lg shadow p-2"}),(0,a.jsxs)("button",{type:"submit",onClick:l,onSubmit:l,className:"bg-yellow bg-opacity-70 p-1 font-bold rounded-xl shadow w-full",children:[" ","Enviar"," "]})]})})},N=function(){var e=(0,p.aU)().logout;return(0,a.jsxs)("div",{className:"flex flex-col justify-center place-items-center p-4 space-y-6",children:[(0,a.jsx)(O,{}),(0,a.jsx)("hr",{}),(0,a.jsx)(b,{}),(0,a.jsx)("hr",{}),(0,a.jsx)(v,{}),(0,a.jsx)("hr",{}),(0,a.jsx)(C,{}),(0,a.jsx)("hr",{}),(0,a.jsxs)("button",{onClick:e,className:"bg-yellow bg-opacity-70 shadow rounded p-2",children:[" ","Salir"," "]})]})}}},function(e){e.O(0,[295,917,822,774,888,179],(function(){return t=4830,e(e.s=t);var t}));var t=e.O();_N_E=t}]);