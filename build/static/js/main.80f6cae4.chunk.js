(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(21),o=n.n(a),i=(n(28),n(2)),l=n(4),r=n(3),j=n(0),d=function(){var e=Object(l.g)(),t=Object(c.useContext)(C),n=t.state,s=t.dispatch;return Object(j.jsx)("nav",{className:"blue",children:Object(j.jsxs)("div",{className:" nav-wrapper container",children:[Object(j.jsx)(r.b,{to:n?"/":"signin",className:"navlink brand-logo left",children:"MyBlog"}),Object(j.jsx)("ul",{id:"nav-mobile",className:"right",children:n?[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"navlink",to:"/profile",children:"Profile"})},1),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"navlink",to:"/myfollowingposts",children:"Following"})},2),Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:"btn waves-effect waves-light #b71c1c red darken-3",onClick:function(){localStorage.clear(),s({type:"CLEAR"}),e.push("/signin")},children:"Logout"})},3)]:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"navlink",to:"/signin",children:"Signin"})},4),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{className:"navlink",to:"/signup",children:"Signup"})},5)]})]})})},h=function(){return Object(j.jsxs)("footer",{className:"blue page-footer",children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"center",children:[Object(j.jsx)("h5",{className:"white-text",children:"About MyBlog"}),Object(j.jsx)("p",{className:"grey-text text-lighten-4",children:"Muhammed Abdurahman Blog"})]})}),Object(j.jsx)("div",{className:"footer-copyright",children:Object(j.jsxs)("div",{className:"container",children:["\xa9 2021 All Rights Reserved to Muhammed Abdurahman",Object(j.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"MERN Project for ITI"})]})})]})},u=(n(34),function(e){return Object(j.jsxs)("div",{class:"lds-roller",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})}),b=function(e){var t=e.item,n=e.getData,s=Object(c.useContext)(C),a=s.state;s.dispatch;return Object(j.jsxs)("div",{className:"card home-card",style:{borderRadius:"20px",padding:"1px"},children:[Object(j.jsxs)("div",{className:"userPicAndName",children:[Object(j.jsx)("img",{style:{width:"40px",height:"40px",borderRadius:"20px",marginLeft:"7px"},src:t.postedBy.pic}),Object(j.jsxs)("h5",{children:[Object(j.jsx)(r.b,{style:{fontWeight:"bold",marginLeft:"7px"},className:"linktoprofile text-darken-2",to:t.postedBy._id!==a._id?"/profile/"+t.postedBy._id:"/profile",children:t.postedBy.name}),t.postedBy._id==a._id&&Object(j.jsx)("i",{className:"deleteicon material-icons",style:{float:"right"},onClick:function(){return e=t._id,void fetch("https://mern-blog-iti.herokuapp.com/deletepost/".concat(e),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){n()}));var e},children:"delete"})]})]}),Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("img",{className:"cardimagepost",src:t.photo})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsxs)("div",{className:"likes",style:{display:"flex",alignitems:"center"},children:[t.likes.includes(a._id)?Object(j.jsx)("i",{className:"material-icons thumbyicon dislike",onClick:function(){return e=t._id,void fetch("https://mern-blog-iti.herokuapp.com/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:e})}).then((function(e){return e.json()})).then((function(e){console.log(e),n()})).catch((function(e){console.log(e)}));var e},children:"thumb_down"}):Object(j.jsx)("i",{className:"material-icons thumbyicon ",onClick:function(){return e=t._id,void fetch("https://mern-blog-iti.herokuapp.com/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:e})}).then((function(e){return e.json()})).then((function(e){n()})).catch((function(e){console.log(e)}));var e},children:"thumb_up"}),Object(j.jsxs)("span",{style:{fontWeight:"bold",fontSize:"18px",marginLeft:"5px"},children:[t.likes.length," Likes"]})]}),Object(j.jsx)("h6",{children:t.title}),Object(j.jsx)("p",{children:t.body}),Object(j.jsx)("div",{className:"comments-section",children:t.comments.map((function(e){return Object(j.jsxs)("h6",{children:[Object(j.jsxs)("span",{style:{fontWeight:"500",color:"red"},children:[e.postedBy.name," "]}),e.text]},e._id)}))}),Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),function(e,t,c){fetch("https://mern-blog-iti.herokuapp.com/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:c,text:t})}).then((function(e){return e.json()})).then((function(t){e.target[0].value="",n()})).catch((function(e){console.log(e)}))}(e,e.target[0].value,t._id)},children:Object(j.jsx)("input",{type:"text",placeholder:"add comment"})})]})]},t._id)},p=function(){Object(l.g)();var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!0),o=Object(i.a)(a,2),d=o[0],h=o[1],p=Object(c.useContext)(C),f=p.state;p.dispatch;Object(c.useEffect)((function(){O()}),[]);var O=function(){console.log("getData function"),fetch("https://mern-blog-iti.herokuapp.com/allposts",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){h(!1),console.log(e),s(e.posts)}))};return Object(j.jsxs)("div",{className:"home",children:[d?Object(j.jsx)(u,{}):n.length?n.map((function(e){return Object(j.jsx)(b,{item:e,getData:O},e._id)})):Object(j.jsx)("h4",{className:"no-data",children:"No posts on your blog"}),f&&Object(j.jsx)("div",{className:"fixed-action-btn",children:Object(j.jsx)(r.b,{className:"btn-floating btn-large blue",to:"/create",children:Object(j.jsx)("i",{className:"material-icons",children:"add"})})})]})},f=n(9),O=n.n(f),g=function(){var e=Object(c.useContext)(C),t=(e.state,e.dispatch),n=Object(l.g)(),s=Object(c.useState)(""),a=Object(i.a)(s,2),o=a[0],d=a[1],h=Object(c.useState)(""),u=Object(i.a)(h,2),b=u[0],p=u[1];return Object(j.jsx)("div",{className:"mycard",children:Object(j.jsxs)("div",{className:"card auth-card",children:[Object(j.jsx)("h2",{children:"Blogger"}),Object(j.jsx)("input",{type:"email",placeholder:"email",value:b,onChange:function(e){return p(e.target.value)}}),Object(j.jsx)("input",{type:"password",placeholder:"password",value:o,onChange:function(e){return d(e.target.value)}}),Object(j.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){!b||/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(b)?fetch("https://mern-blog-iti.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:o,email:b})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?O.a.toast({html:e.error,classes:"#d50000 red accent-4"}):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"User",payload:e.user}),O.a.toast({html:"signed in successfully",classes:"#1b5e20 green darken-4"}),n.push("/"))})).catch((function(e){console.log(e)})):O.a.toast({html:"invalid email",classes:"#d50000 red accent-4"})},children:"Signin"}),Object(j.jsx)("h5",{children:Object(j.jsx)(r.b,{to:"/signup",children:"Create An Account ? "})})]})})},m=n(6),x=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useContext)(C),o=a.state,l=a.dispatch,d=Object(c.useState)(""),h=Object(i.a)(d,2),p=h[0],f=h[1],O=Object(c.useState)(""),g=Object(i.a)(O,2),x=g[0],v=g[1];Object(c.useEffect)((function(){y()}),[]);var y=function(){console.log("mypost function"),fetch("https://mern-blog-iti.herokuapp.com/mypost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),s(e.posts),v(!1)}))};Object(c.useEffect)((function(){if(p){var e=new FormData;e.append("file",p),e.append("upload_preset","meanblog"),e.append("cloud_name","meanblogger"),fetch("https://api.cloudinary.com/v1_1/meanblogger/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){fetch("https://mern-blog-iti.herokuapp.com/updatepic",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({pic:e.url})}).then((function(e){return e.json()})).then((function(t){console.log(t),localStorage.setItem("user",JSON.stringify(Object(m.a)(Object(m.a)({},o),{},{pic:e.pic}))),l({type:"UPDATEPIC",payload:t.pic})}))})).catch((function(e){console.log(e)}))}}),[l,p,o]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px",marginRight:"20px"},src:o?o.pic:"loading..."}),Object(j.jsxs)("div",{className:"file-field input-field",children:[Object(j.jsxs)("div",{className:"btn #64b5f6 blue darken-1",style:{marginLeft:"20px"},children:[Object(j.jsx)("span",{children:"update pic"}),Object(j.jsx)("input",{type:"file",onChange:function(e){return t=e.target.files[0],void f(t);var t}})]}),Object(j.jsx)("div",{className:"file-path-wrapper",children:Object(j.jsx)("input",{className:"file-path validate",type:"text"})})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:o?o.name:"Loading"}),Object(j.jsx)("h4",{children:o?o.email:"Loading"}),Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"109%"},children:[Object(j.jsxs)("h6",{children:[n.length," ",1===n.length?Object(j.jsx)("b",{children:"Post"}):Object(j.jsx)("b",{children:"Posts"})]}),Object(j.jsxs)("h6",{children:[" ",o?o.followers.length:"0"," followers"]}),Object(j.jsxs)("h6",{children:[" ",o?o.following.length:"0"," following"]})]})]})]})}),x?Object(j.jsx)(u,{}):n.length?n.map((function(e){return Object(j.jsx)(b,{item:e,getData:y},e._id)})):Object(j.jsx)("h4",{className:"no-data",children:"You haven't created any posts yet"}),o&&Object(j.jsx)("div",{id:"btnAddNewPost",children:Object(j.jsx)(r.b,{className:"addlink",to:"/create",children:Object(j.jsx)("button",{className:"addNewPost",children:"+"})})})]})},v=function(){var e=Object(l.g)(),t=Object(c.useState)(""),n=Object(i.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(""),d=Object(i.a)(o,2),h=d[0],u=d[1],b=Object(c.useState)(""),p=Object(i.a)(b,2),f=p[0],g=p[1],m=Object(c.useState)(""),x=Object(i.a)(m,2),v=x[0],y=x[1],w=Object(c.useState)(void 0),N=Object(i.a)(w,2),S=N[0],k=N[1];Object(c.useEffect)((function(){S&&C()}),[S]);var C=function(){!f||/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(f)?fetch("https://mern-blog-iti.herokuapp.com/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,password:h,email:f,pic:S})}).then((function(e){return e.json()})).then((function(t){t.error?O.a.toast({html:t.error,classes:"#d50000 red accent-4"}):(O.a.toast({html:t.message,classes:"#1b5e20 green darken-4"}),e.push("/signin"))})).catch((function(e){console.log(e)})):O.a.toast({html:"invalid email",classes:"#d50000 red accent-4"})},A=function(){v?function(){var e=new FormData;e.append("file",v),e.append("upload_preset","meanblog"),e.append("cloud_name","meanblogger"),fetch("https://api.cloudinary.com/v1_1/meanblogger/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){k(e.url)})).catch((function(e){console.log(e)}))}():C()};return Object(j.jsx)("div",{className:"mycard",children:Object(j.jsxs)("div",{className:"card auth-card input-field",children:[Object(j.jsx)("h2",{children:"Blogger"}),Object(j.jsx)("input",{type:"text",placeholder:"name",value:s,onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("input",{type:"email",placeholder:"email",value:f,onChange:function(e){return g(e.target.value)}}),Object(j.jsx)("input",{type:"password",placeholder:"password",value:h,onChange:function(e){return u(e.target.value)}}),Object(j.jsxs)("div",{className:"file-field input-field",children:[Object(j.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(j.jsx)("span",{children:"your pic"}),Object(j.jsx)("input",{type:"file",onChange:function(e){return y(e.target.files[0])}})]}),Object(j.jsx)("div",{className:"file-path-wrapper",children:Object(j.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(j.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){return A()},children:"Signup"}),Object(j.jsx)("h5",{children:Object(j.jsx)(r.b,{to:"/signin",children:"Already have an account ?"})})]})})},y=function(){var e=Object(l.g)(),t=Object(c.useState)(""),n=Object(i.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(""),r=Object(i.a)(o,2),d=r[0],h=r[1],u=Object(c.useState)(""),b=Object(i.a)(u,2),p=b[0],f=b[1],g=Object(c.useState)(""),m=Object(i.a)(g,2),x=m[0],v=m[1];Object(c.useEffect)((function(){x&&fetch("https://mern-blog-iti.herokuapp.com/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:s,body:d,photo:x})}).then((function(e){return e.json()})).then((function(t){t.error?O.a.toast({html:t.error,classes:"#d50000 red accent-4"}):(O.a.toast({html:"post created successfully",classes:"#1b5e20 green darken-4"}),e.push("/"))})).catch((function(e){console.log(e)}))}),[d,e,s,x]);return Object(j.jsxs)("div",{className:"card input-filed",style:{margin:"10% auto",maxWidth:"500px",padding:"20px",textAlign:"center"},children:[Object(j.jsx)("input",{type:"text",placeholder:"title",value:s,onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("input",{type:"text",placeholder:"body",value:d,onChange:function(e){return h(e.target.value)}}),Object(j.jsxs)("div",{className:"file-field input-field",children:[Object(j.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(j.jsx)("span",{children:"photo"}),Object(j.jsx)("input",{type:"file",onChange:function(e){return f(e.target.files[0])}})]}),Object(j.jsx)("div",{className:"file-path-wrapper",children:Object(j.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(j.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){return function(){if(s&&d&&p){var e=new FormData;e.append("file",p),e.append("upload_preset","meanblog"),e.append("cloud_name","meanblogger"),fetch("https://api.cloudinary.com/v1_1/meanblogger/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){v(e.url)})).catch((function(e){console.log(e)}))}else O.a.toast({html:"please fill all fields",classes:"#d50000 red accent-4"})}()},children:"Create"})]})},w=n(23),N=function(){var e=Object(c.useContext)(C),t=e.state,n=e.dispatch,s=Object(c.useState)(null),a=Object(i.a)(s,2),o=a[0],d=a[1],h=Object(l.h)().userid,p=Object(c.useState)(!t||!t.following.includes(h)),f=Object(i.a)(p,2),O=f[0],g=f[1];Object(c.useEffect)((function(){x()}),[x]);var x=function(){console.log("getData function"),fetch("https://mern-blog-iti.herokuapp.com/user/".concat(h),{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),d(e)})).catch((function(e){window.location.replace("/")})),g(!t||!t.following.includes(h))};return Object(j.jsxs)(j.Fragment,{children:[o?Object(j.jsxs)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:[Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:o?o.user.pic:"loading..."})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:o&&o.user.name}),Object(j.jsx)("h5",{children:o&&o.user.email}),Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"109%"},children:[Object(j.jsxs)("h6",{children:[o&&o.posts.length,o&&1===o.posts.length?Object(j.jsx)("b",{children:" Post"}):Object(j.jsx)("b",{children:" Posts"})]}),Object(j.jsxs)("h6",{children:[o&&o.user.followers.length," Followers"]}),Object(j.jsxs)("h6",{children:[o&&o.user.following.length," Following"]})]}),O?Object(j.jsx)("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("https://mern-blog-iti.herokuapp.com/follow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({followId:h})}).then((function(e){return e.json()})).then((function(e){n({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),d((function(t){return Object(m.a)(Object(m.a)({},t),{},{user:Object(m.a)(Object(m.a)({},t.user),{},{followers:[].concat(Object(w.a)(t.user.followers),[e._id])})})})),g(!1)}))},children:"follow"}):Object(j.jsx)("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("https://mern-blog-iti.herokuapp.com/unfollow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({unfollowId:h})}).then((function(e){return e.json()})).then((function(e){n({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),d((function(t){var n=t.user.followers.filter((function(t){return t!==e._id}));return Object(m.a)(Object(m.a)({},t),{},{user:Object(m.a)(Object(m.a)({},t.user),{},{followers:n})})})),g(!0)}))},children:"unfollow"})]})]}),Object(j.jsx)("div",{className:"gallery",children:o&&o.posts.map((function(e){return Object(j.jsx)(b,{item:e,getData:x},e._id)}))})]}):Object(j.jsx)(u,{}),t&&Object(j.jsx)("div",{id:"btnAddNewPost",children:Object(j.jsx)(r.b,{className:"addlink",to:"/create",children:Object(j.jsx)("button",{className:"addNewPost",children:"+"})})})]})},S=function(){Object(l.g)();var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),o=Object(i.a)(a,2),d=o[0],h=o[1],p=Object(c.useContext)(C),f=p.state;p.dispatch;Object(c.useEffect)((function(){O()}),[]);var O=function(){console.log("getData function"),fetch("https://mern-blog-iti.herokuapp.com/followersposts",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),s(e.posts),h(!1)}))};return Object(j.jsxs)("div",{className:"home",children:[d?Object(j.jsx)(u,{}):n.length?n.map((function(e){return Object(j.jsx)(b,{item:e,getData:O},e._id)})):Object(j.jsx)("h4",{className:"no-data",children:"You don't have any posts for your followers yet"}),f&&Object(j.jsx)("div",{id:"btnAddNewPost",children:Object(j.jsx)(r.b,{className:"addlink",to:"/create",children:Object(j.jsx)("button",{className:"addNewPost",children:"+"})})})]})},k=function(e,t){return"User"===t.type?t.payload:"CLEAR"===t.type?null:"UPDATE"===t.type?Object(m.a)(Object(m.a)({},e),{},{followers:t.payload.followers,following:t.payload.following}):"UPDATEPIC"===t.type?Object(m.a)(Object(m.a)({},e),{},{pic:t.payload}):e},C=Object(c.createContext)(),A=function(){var e=Object(l.g)(),t=Object(c.useContext)(C),n=(t.state,t.dispatch);return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?n({type:"User",payload:t}):e.push("/signin")}),[]),Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{exact:!0,path:"/",children:Object(j.jsx)(p,{})}),Object(j.jsx)(l.b,{path:"/signin",children:Object(j.jsx)(g,{})}),Object(j.jsx)(l.b,{path:"/signup",children:Object(j.jsx)(v,{})}),Object(j.jsx)(l.b,{exact:!0,path:"/profile",children:Object(j.jsx)(x,{})}),Object(j.jsx)(l.b,{path:"/create",children:Object(j.jsx)(y,{})}),Object(j.jsx)(l.b,{path:"/profile/:userid",children:Object(j.jsx)(N,{})}),Object(j.jsx)(l.b,{path:"/myfollowingposts",children:Object(j.jsx)(S,{})}),Object(j.jsx)(l.b,{path:"*",children:Object(j.jsx)(l.a,{to:"/"})})]})};var I=function(){var e=Object(c.useReducer)(k,null),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(j.jsx)(C.Provider,{value:{state:n,dispatch:s},children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(A,{}),Object(j.jsx)(h,{})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root")),_()}},[[35,1,2]]]);
//# sourceMappingURL=main.80f6cae4.chunk.js.map