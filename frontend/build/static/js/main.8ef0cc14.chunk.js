(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{156:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},193:function(e,t){},195:function(e,t){},209:function(e,t){},211:function(e,t){},239:function(e,t){},241:function(e,t){},242:function(e,t){},247:function(e,t){},249:function(e,t){},268:function(e,t){},280:function(e,t){},283:function(e,t){},301:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(145),s=n.n(c),i=(n(156),n(151)),u=n(5),o=n.n(u),l=n(10),j=n(11),b=(n(158),n(159),n(13)),p=n(302),h=n(303),d=n(304),m=n(0),O=function(e){var t=e.currentUser,n=e.logout;return Object(m.jsx)("div",{children:Object(m.jsxs)(p.a,{expand:"md",color:"light",children:[Object(m.jsx)(b.c,{exact:!0,to:"/",className:"navbar-welcome",children:"Jobly"}),t&&Object(m.jsxs)(h.a,{className:"ml-auto",navbar:!0,children:[Object(m.jsx)(d.a,{className:"navbar-link",children:Object(m.jsx)(b.c,{to:"/companies",children:"Companies"})}),Object(m.jsx)(d.a,{className:"navbar-link",children:Object(m.jsx)(b.c,{to:"/jobs",children:"Jobs"})}),Object(m.jsx)(d.a,{className:"navbar-link",children:Object(m.jsx)(b.c,{to:"/profile",children:"Profile"})}),Object(m.jsx)(d.a,{className:"navbar-link",children:Object(m.jsx)(b.c,{to:"/",onClick:n,children:"Log Out"})})]}),!t&&Object(m.jsxs)(h.a,{className:"ml-auto",navbar:!0,children:[Object(m.jsx)(d.a,{className:"navbar-link",children:Object(m.jsx)(b.c,{to:"/login",children:"Log In"})}),Object(m.jsx)(d.a,{className:"navbar-link",children:Object(m.jsx)(b.c,{to:"/signup",children:"Sign Up"})})]})]})})},f=n(12),x=n(147),v=n(148),g=n(149),N=n.n(g),y="https://react-jobly-ja.herokuapp.com",w=function(){function e(){Object(x.a)(this,e)}return Object(v.a)(e,null,[{key:"request",value:function(){var t=Object(l.a)(o.a.mark((function t(n){var a,r,c,s,i,u,l=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:{},r=l.length>2&&void 0!==l[2]?l[2]:"get",c="".concat(y,"/").concat(n),s={Authorization:"Bearer ".concat(e.token)},i="get"===r?a:{},t.prev=5,t.next=8,N()({url:c,method:r,data:a,params:i,headers:s});case 8:return t.abrupt("return",t.sent.data);case 11:throw t.prev=11,t.t0=t.catch(5),u=t.t0.response.data.error.message,Array.isArray(u)?u:[u];case 15:case"end":return t.stop()}}),t,null,[[5,11]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getCompanies",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("companies",{name:t});case 2:return n=e.sent,e.abrupt("return",n.companies);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCompany",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("companies/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.company);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getJobs",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("jobs",{title:t});case 2:return n=e.sent,e.abrupt("return",n.jobs);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getJob",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("jobs/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.job);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCurrentUser",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.user);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("auth/token",t,"post");case 2:return n=e.sent,e.abrupt("return",n.token);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"signup",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("auth/register",t,"post");case 2:return n=e.sent,e.abrupt("return",n.token);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"saveProfile",value:function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t),n,"patch");case 2:return a=e.sent,e.abrupt("return",a.user);case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"applyToJob",value:function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t,"/jobs/").concat(n),{},"post");case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),k=n(310),F=n(311),S=n(312),C=n(313),q=n(314),J=(n(182),n(305)),U=n(306),A=n(307),E=n(308),I=n(309),L=(n(183),function(e){var t=e.searchFor,n=Object(a.useState)(""),r=Object(j.a)(n,2),c=r[0],s=r[1];return Object(m.jsx)("div",{className:"SearchForm",children:Object(m.jsx)(J.a,{className:"form-inline",onSubmit:function(e){e.preventDefault(),t(c.trim()||void 0),s(c.trim())},children:Object(m.jsxs)(U.a,{children:[Object(m.jsx)(A.a,{htmlFor:"search"}),Object(m.jsx)(E.a,{className:"form-control flex-grow-1",name:"search",placeholder:"Enter search term..",value:c,onChange:function(e){s(e.target.value)}}),Object(m.jsx)(I.a,{type:"submit",className:"btn btn-success",children:"Submit"})]})})})}),P=function(e){var t=e.companies,n=e.getCompanies,a=e.jobs,r=e.getJobs;return Object(m.jsx)("section",{className:"MainSearch",children:Object(m.jsx)(k.a,{children:Object(m.jsxs)(F.a,{children:[t&&Object(m.jsxs)("div",{children:[Object(m.jsx)(S.a,{className:"font-weight-bold text-center",children:Object(m.jsx)(L,{searchFor:n})}),t.map((function(e){return Object(m.jsx)(C.a,{children:Object(m.jsx)(b.b,{to:"/companies/".concat(e.handle),children:Object(m.jsx)(q.a,{children:e.name},e.handle)},e.handle)},e.handle)}))," "]}),a&&Object(m.jsxs)("div",{children:[Object(m.jsx)(S.a,{className:"font-weight-bold text-center",children:Object(m.jsx)(L,{searchFor:r})}),a.map((function(e){return Object(m.jsx)(C.a,{children:Object(m.jsx)(b.b,{to:"/jobs/".concat(e.id),children:Object(m.jsx)(q.a,{children:e.title},e.title)},e.id)},e.title)}))]})]})})})},T=(n(184),function(e){var t=e.currentUser;return Object(m.jsxs)("div",{className:"Home-body",children:[Object(m.jsx)("p",{className:"font-weight-bold",children:"Jobly"}),Object(m.jsx)("p",{children:"All the jobs in one, convenient place."}),t&&Object(m.jsxs)("p",{children:["Welcome back, ",Object(m.jsx)("b",{children:t.username}),"!"]}),!t&&Object(m.jsx)("p",{children:"Please, Log in or Sign up to begin."})]})}),D=n(315),H=(n(185),function(e){var t=e.companies,n=e.jobs,a=e.cantFind,r=Object(f.h)().handle,c=t.find((function(e){return e.handle===r})),s=n.filter((function(e){return e.companyHandle===c.handle}));return c?Object(m.jsx)("section",{children:Object(m.jsx)(k.a,{className:"Company",children:Object(m.jsxs)(F.a,{children:[Object(m.jsx)(S.a,{className:"font-weight-bold text-center",children:c.name}),Object(m.jsx)(D.a,{tag:"h6",className:"mb-2 text-muted text-center",children:c.description}),Object(m.jsx)("b",{children:"Jobs available: "}),Object(m.jsx)("ul",{children:s.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsxs)(b.b,{to:"/jobs/".concat(e.id),children:[Object(m.jsx)("i",{children:e.title})," "]},e.id)},e.id)}))})]})})}):Object(m.jsx)(f.a,{to:a})}),B=(n(186),r.a.createContext()),M=function(e){var t=e.jobs,n=e.cantFind,r=Object(f.h)().id,c=Object(a.useContext)(B),s=c.hasAppliedToJob,i=c.applyToJob,u=Object(a.useState)(),p=Object(j.a)(u,2),h=p[0],d=p[1];function O(){return(O=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!s(r)){e.next=3;break}return e.abrupt("return");case 3:i(r),d(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){d(s(r))}),[r,s]);var x=t.find((function(e){return parseInt(e.id)===parseInt(r)}));return x?Object(m.jsx)("section",{children:Object(m.jsxs)(k.a,{className:"Job",children:[Object(m.jsxs)(F.a,{children:[Object(m.jsx)(S.a,{className:"font-weight-bold text-center",children:x.title}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Salary:"})," ",x.salary]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Equity:"})," ",x.equity]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Company Name:"})," ",Object(m.jsx)(b.b,{to:"/companies/".concat(x.companyHandle),children:x.companyHandle})]})]}),Object(m.jsx)(I.a,{onClick:function(e){return O.apply(this,arguments)},className:"Job-btn btn-success",disabled:h,children:h?"Applied":"Apply"})]})}):Object(m.jsx)(f.a,{to:n})},z=n(27),W=n(23),G=function(e){var t=e.type,n=void 0===t?"danger":t,a=e.messages,r=void 0===a?[]:a;return Object(m.jsx)("div",{className:"alert alert-".concat(n),role:"alert",children:r.map((function(e){return Object(m.jsx)("p",{className:"mb-0 small",children:e},e)}))})},K=(n(187),function(e){var t=e.login,n=Object(f.g)(),r=Object(a.useState)({username:"",password:""}),c=Object(j.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)([]),b=Object(j.a)(u,2),p=b[0],h=b[1];function d(e){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(o.a.mark((function e(a){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t(s);case 3:(r=e.sent).success?n.push("/"):h(r.errors);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var t=e.target,n=t.name,a=t.value;i((function(e){return Object(W.a)(Object(W.a)({},e),{},Object(z.a)({},n,a))}))}return Object(m.jsx)("div",{className:"LoginForm",children:Object(m.jsxs)(J.a,{className:"Form-body",onSubmit:d,children:[Object(m.jsxs)(U.a,{children:[Object(m.jsx)(A.a,{htmlFor:"username",children:"Username"}),Object(m.jsx)(E.a,{id:"username",name:"username",className:"Form-input",value:s.username,onChange:x,autoComplete:"username",required:!0})]}),Object(m.jsxs)(U.a,{children:[Object(m.jsx)(A.a,{htmlFor:"password",children:"Password"}),Object(m.jsx)(E.a,{id:"password",type:"password",name:"password",className:"Form-input",value:s.password,onChange:x,autoComplete:"current-password",required:!0})]}),p.length?Object(m.jsx)(G,{type:"danger",messages:p}):null,Object(m.jsx)(I.a,{className:"btn btn-success float-right",onSubmit:d,children:"Submit"})]})})}),Q=(n(188),function(e){var t=e.signup,n=Object(f.g)(),r=Object(a.useState)({username:"",password:"",firstName:"",lastName:"",email:""}),c=Object(j.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)([]),b=Object(j.a)(u,2),p=b[0],h=b[1];function d(e){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(o.a.mark((function e(a){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t(s);case 3:(r=e.sent).success?n.push("/"):h(r.errors);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var t=e.target,n=t.name,a=t.value;i((function(e){return Object(W.a)(Object(W.a)({},e),{},Object(z.a)({},n,a))}))}return Object(m.jsx)("div",{className:"SignupForm",children:Object(m.jsxs)(J.a,{className:"Form-body",onSubmit:d,children:[Object(m.jsxs)(U.a,{children:[Object(m.jsx)(A.a,{htmlFor:"username",children:"Username"}),Object(m.jsx)(E.a,{id:"username",name:"username",className:"Form-input",value:s.username,onChange:x,required:!0})]}),Object(m.jsxs)(U.a,{children:[Object(m.jsx)(A.a,{htmlFor:"password",children:"Password"}),Object(m.jsx)(E.a,{id:"password",type:"password",name:"password",className:"Form-input",value:s.password,onChange:x,required:!0})]}),Object(m.jsxs)(U.a,{children:[Object(m.jsx)(A.a,{htmlFor:"firstName",children:"First Name"}),Object(m.jsx)(E.a,{id:"firstName",type:"text",name:"firstName",className:"Form-input",value:s.firstName,onChange:x,required:!0})]}),Object(m.jsxs)(U.a,{children:[Object(m.jsx)(A.a,{htmlFor:"lastName",children:"Last Name"}),Object(m.jsx)(E.a,{id:"lastName",type:"text",name:"lastName",className:"Form-input",value:s.lastName,onChange:x,required:!0})]}),Object(m.jsxs)(U.a,{children:[Object(m.jsx)(A.a,{htmlFor:"email",children:"Email"}),Object(m.jsx)(E.a,{id:"email",type:"email",name:"email",className:"Form-input",value:s.email,onChange:x,required:!0})]}),p.length?Object(m.jsx)(G,{type:"danger",messages:p}):null,Object(m.jsx)(I.a,{className:"btn btn-success float-right",onSubmit:d,children:"Submit"})]})})}),R=(n(189),function(e){var t=e.currentUser,n={username:t.username,firstName:t.firstName,lastName:t.lastName,email:t.email,password:""},r=Object(a.useState)(n),c=Object(j.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)([]),b=Object(j.a)(u,2),p=b[0],h=b[1],d=Object(a.useState)(!1),O=Object(j.a)(d,2),x=O[0],v=O[1],g=Object(f.g)(),N=function(e){var t=e.target,n=t.name,a=t.value;i((function(e){return Object(W.a)(Object(W.a)({},e),{},Object(z.a)({},n,a))}))},y=function(){var e=Object(l.a)(o.a.mark((function e(n){var a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a={firstName:s.firstName,lastName:s.lastName,email:s.email,password:s.password},e.prev=2,r=t.username,e.next=6,w.saveProfile(r,a);case 6:c=e.sent,console.log(c),e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(2),h(e.t0),e.abrupt("return");case 14:i((function(e){return Object(W.a)(Object(W.a)({},e),{},{password:""})})),h([]),v(!0),g.push("/");case 18:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"Form",children:[Object(m.jsx)(A.a,{htmlFor:"username",children:"Username"}),Object(m.jsx)("p",{children:Object(m.jsx)("b",{children:t.username})}),Object(m.jsxs)(J.a,{className:"Form-body",onSubmit:y,children:[Object(m.jsxs)(U.a,{children:[Object(m.jsx)(A.a,{htmlFor:"firstName",children:"First Name"}),Object(m.jsx)(E.a,{className:"Form-input",name:"firstName",id:"firstName",value:s.firstName,onChange:N})]}),Object(m.jsxs)(U.a,{children:[Object(m.jsx)(A.a,{htmlFor:"lastName",children:"Last Name"}),Object(m.jsx)(E.a,{className:"Form-input",name:"lastName",id:"lastName",value:s.lastName,onChange:N})]}),Object(m.jsxs)(U.a,{children:[Object(m.jsx)(A.a,{htmlFor:"email",children:"Email"}),Object(m.jsx)(E.a,{className:"Form-input",name:"email",id:"email",value:s.email,onChange:N})]}),Object(m.jsxs)(U.a,{children:[Object(m.jsx)(A.a,{htmlFor:"password",children:"Confirm password to make changes"}),Object(m.jsx)(E.a,{className:"Form-input",type:"password",name:"password",id:"password",value:s.password,onChange:N})]}),p.length?Object(m.jsx)(G,{type:"danger",messages:p}):null,x?Object(m.jsx)(G,{type:"success",messages:["Updated successfully."]}):null,Object(m.jsx)(I.a,{className:"Form-btn btn-success",children:"Save"})]})]})}),V=function(e){var t=e.login,n=e.signup,r=e.currentUser,c=Object(a.useState)(!0),s=Object(j.a)(c,2),i=s[0],u=s[1],b=Object(a.useState)([]),p=Object(j.a)(b,2),h=p[0],d=p[1],O=Object(a.useState)([]),x=Object(j.a)(O,2),v=x[0],g=x[1];function N(e){return y.apply(this,arguments)}function y(){return(y=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getCompanies(t);case 2:n=e.sent,d(n),u(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return F.apply(this,arguments)}function F(){return(F=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getJobs(t);case 2:n=e.sent,g(n),u(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){N(),k()}),[]),i?Object(m.jsx)("p",{children:"Loading \u2026"}):Object(m.jsxs)(f.d,{children:[Object(m.jsx)(f.b,{exact:!0,path:"/",children:Object(m.jsx)(T,{currentUser:r})}),r&&Object(m.jsx)(f.b,{exact:!0,path:"/companies",children:Object(m.jsx)(P,{companies:h,getCompanies:N})}),r&&Object(m.jsx)(f.b,{exact:!0,path:"/jobs",children:Object(m.jsx)(P,{jobs:v,getJobs:k})}),r&&Object(m.jsx)(f.b,{path:"/companies/:handle",children:Object(m.jsx)(H,{companies:h,jobs:v,cantFind:"/companies"})}),r&&Object(m.jsx)(f.b,{path:"/jobs/:id",children:Object(m.jsx)(M,{jobs:v,cantFind:"/jobs"})}),Object(m.jsx)(f.b,{path:"/login",children:Object(m.jsx)(K,{login:t})}),Object(m.jsx)(f.b,{path:"/signup",children:Object(m.jsx)(Q,{signup:n})}),r&&Object(m.jsx)(f.b,{path:"/profile",children:Object(m.jsx)(R,{currentUser:r})}),Object(m.jsx)(f.a,{to:"/"})]})},X=n(150),Y=n.n(X);var Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=localStorage.getItem(e)||t,r=Object(a.useState)(n),c=Object(j.a)(r,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){null===s?localStorage.removeItem(e):localStorage.setItem(e,s)}),[e,s]),[s,i]},$=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(new Set([])),s=Object(j.a)(c,2),u=s[0],p=s[1],h=Object(a.useState)(null),d=Object(j.a)(h,2),x=d[0],v=d[1],g=Z("jobly-token"),N=Object(j.a)(g,2),y=N[0],k=N[1];function F(){return(F=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.login(t);case 3:return n=e.sent,k(n),e.abrupt("return",{success:!0});case 8:return e.prev=8,e.t0=e.catch(0),console.error("login failed",e.t0),e.abrupt("return",{success:!1,errors:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function S(){return(S=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.signup(t);case 3:return n=e.sent,k(n),e.abrupt("return",{success:!0});case 8:return e.prev=8,e.t0=e.catch(0),console.error("signup failed",e.t0),e.abrupt("return",{success:!1,errors:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y){e.next=15;break}return e.prev=1,t=Y.a.decode(y),n=t.username,w.token=y,e.next=6,w.getCurrentUser(n);case 6:a=e.sent,v(a),p(new Set(a.applications)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error("App loadUserInfo: problem loading",e.t0),v(null);case 15:r(!0);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}r(!1),function(){e.apply(this,arguments)}()}),[y]);var C=function(e){return u.has(e)},q=function(){v(null),k(null)};return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(b.a,{children:Object(m.jsxs)(B.Provider,{value:{hasAppliedToJob:C,applyToJob:function(e){C(e)||(w.applyToJob(x.username,e),p(new Set([].concat(Object(i.a)(u),[e]))))}},children:[Object(m.jsx)(O,{currentUser:x,logout:q}),Object(m.jsx)(V,{login:function(e){return F.apply(this,arguments)},signup:function(e){return S.apply(this,arguments)},logout:q,currentUser:x}),!n&&Object(m.jsx)(f.a,{to:"/"})]})})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,316)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(300);s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)($,{})}),document.getElementById("root")),_()}},[[301,1,2]]]);
//# sourceMappingURL=main.8ef0cc14.chunk.js.map