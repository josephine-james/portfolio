(this["webpackJsonpportfolio2.0"]=this["webpackJsonpportfolio2.0"]||[]).push([[0],{28:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},64:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},71:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(2),i=s.n(a),n=s(8),r=s.n(n);s(51),s(52),s(28);var l=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"cards_items",children:Object(c.jsxs)("a",{className:"cards_item_link",href:e.path,target:"_blank",rel:"noopener noreferrer",children:[Object(c.jsx)("figure",{className:"cards_item_pic-wrap","data-category":e.label,children:Object(c.jsx)("img",{className:"cards_item_img",src:e.src,alt:"img"})}),Object(c.jsx)("div",{className:"cards_item_info",children:Object(c.jsx)("h5",{className:" cards_item_text",children:e.text})})]})})})};var o=function(){return Object(c.jsx)("div",{className:"/cards",children:Object(c.jsxs)("div",{className:"cards_container",children:[Object(c.jsx)("h1",{children:" Projects"}),Object(c.jsx)("div",{className:"cards_wrapper",children:Object(c.jsxs)("ul",{className:"cards_items",children:[Object(c.jsx)(l,{text:"Created using React.js with help of code-along Youtube videos",src:"./images/to-do-app_pic.png",path:"https://github.com/josephine-james/todo-app.git",label:"To-do App"}),Object(c.jsx)(l,{text:"Created using Python and tkinter GUI package",src:"./images/ceaser_pic.png",label:"Ceaser Cipher",path:"https://github.com/josephine-james/ceaser-cipher.git"}),Object(c.jsx)(l,{text:"Created using Python as a part of Cousera course using CodeSkulptor",src:"./images/pong_pic.png",label:"Pong",path:"http://www.codeskulptor.org/#user47_lJHOPsbSM9qlFdl.py"})]})})]})})},j=s(35),d=s(36),b=s(40),h=s(39),m=(s(53),s(14)),u=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(j.a)(this,s);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("nav",{className:"NavbarItems",children:[Object(c.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(c.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(c.jsxs)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:[Object(c.jsx)("li",{children:Object(c.jsx)(m.Link,{className:"nav-links",activeClass:"active",spy:!0,smooth:!0,offset:0,duration:500,to:"/home",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(m.Link,{className:"nav-links",activeClass:"active",spy:!0,smooth:!0,offset:0,duration:500,to:"/about",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)(m.Link,{className:"nav-links",activeClass:"active",spy:!0,smooth:!0,offset:0,duration:500,to:"/cards",children:"Portfolio"})}),Object(c.jsx)("li",{children:Object(c.jsx)(m.Link,{className:"nav-links",activeClass:"active",spy:!0,smooth:!0,offset:0,duration:500,to:"/contact",children:"Contact"})})]})]})}}]),s}(a.Component),x=s(10),p=(s(64),s(82)),O={style:{width:"50%",height:"12em"}},f=function(){return Object(c.jsxs)("div",{id:"/about",children:[Object(c.jsx)("br",{}),Object(c.jsxs)(p.a,{className:"about_box",display:"flex",justifyContent:"center",children:[Object(c.jsx)("img",{className:"profile_pic",src:"./images/smallprofile.jpeg",alt:"profilepicture"}),Object(c.jsx)(p.a,Object(x.a)(Object(x.a)({className:"info_box"},O),{},{children:Object(c.jsxs)("h6",{classname:"info",children:["I'm Josephine James, a first year B. teach student at Federal Institute of Science and Technology, Angamaly, Kerala. Eager to explore and learn,",Object(c.jsx)("br",{})," I am currently discovering new fields in Computer Science"]})}))]})]})},g=(s(67),{backgroundColor:"black",opacity:"0.9",borderColor:"white",m:15,border:2,style:{width:"50%",height:"12em"}}),v=function(){return Object(c.jsxs)("div",{id:"/home",children:[Object(c.jsx)("video",{src:"./videos/video.mp4",autoPlay:!0,muted:!0,loop:!0}),Object(c.jsx)(p.a,{className:"biggerdabba",display:"flex",justifyContent:"center",children:Object(c.jsxs)(p.a,Object(x.a)(Object(x.a)({className:"dabba",borderRadius:16},g),{},{children:[Object(c.jsx)("center",{children:Object(c.jsx)("div",{className:"home_title",children:" Josephine James"})}),Object(c.jsx)("hr",{style:{backgroundColor:"white"}}),Object(c.jsx)("div",{className:"home_subtitle",children:"Wanna-be Full Stack Developer | Currently Student"}),Object(c.jsx)("br",{})]}))})]})},y=s(37),N=s.n(y),k=s(38),C=s.n(k);s(68);var _=function(){return Object(c.jsx)("div",{className:"/contact",children:Object(c.jsx)(p.a,{className:"contact-box",display:"flex",justifyContent:"center",children:Object(c.jsxs)("div",{className:"listitems",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)(N.a,{style:{fontSize:50}})," josephinejames@gmail.com"]}),Object(c.jsxs)("li",{children:[Object(c.jsx)(C.a,{style:{fontSize:50}}),"Ghaziabad, Uttar Pradesh -201005"]})]})})})};var w=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(u,{}),Object(c.jsx)(v,{}),Object(c.jsx)(f,{}),Object(c.jsx)(o,{}),Object(c.jsx)(_,{})]})},S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,85)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),S()}},[[71,1,2]]]);
//# sourceMappingURL=main.28038113.chunk.js.map