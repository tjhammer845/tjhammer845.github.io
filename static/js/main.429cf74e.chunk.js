(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,t,a){e.exports=a.p+"static/media/devgrub.bf79b675.png"},53:function(e,t,a){e.exports=a.p+"static/media/youtube.0f423153.png"},54:function(e,t,a){e.exports=a.p+"static/media/evverest.3da49c68.png"},59:function(e,t,a){e.exports=a(90)},64:function(e,t,a){},65:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),i=a.n(r),c=(a(64),a(6)),s=a(11),o=a(8),m=a(7),u=a(9),d=a(27),h=a(5),b=a(15),p=a(28),E=a(58),g=(a(65),a(20)),f=a(18);var v=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(b.a,{fluid:!0},l.a.createElement(g.a,{className:"border-top justify-content-between p-3"},l.a.createElement(f.a,{className:"p-0",md:3,sm:12},"Tom Hammer"),l.a.createElement(f.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made by Tom Hammer."))))},k=a(51);var w=function(e){return l.a.createElement(k.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(b.a,{fluid:!0},l.a.createElement(g.a,{className:"justify-content-center py-5"},l.a.createElement(f.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},y=a(25),N=a(37);var S=function(e){var t=Object(N.b)({opacity:1,from:{opacity:0}});return l.a.createElement(N.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var T=function(e){return l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(S,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},j=a(52),x=a.n(j),C=a(53),O=a.n(C),H=a(54),I=a.n(H),J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleCardClick=function(e,t){var n=Object(y.a)(a.state.items);n[e].selected=!n[e].selected,n.forEach(function(t){t.id!==e&&(t.selected=!1)}),a.setState({items:n})},a.makeItems=function(e){return e.map(function(e){return l.a.createElement(T,{item:e,click:function(t){return a.handleCardClick(e.id,t)},key:e.id})})},a.state={items:[{id:0,title:"Dev Grub",subTitle:"The cookbook for developers",imgSrc:x.a,link:"https://d.com",selected:!1},{id:1,title:"Tom Hammer",subTitle:"YouTube channel",imgSrc:O.a,link:"https://www.youtube.com",selected:!1},{id:2,title:"Evverest",subTitle:"A social network for developers",imgSrc:I.a,link:"https://github.com",selected:!1}]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(b.a,{fluid:!0},l.a.createElement(g.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),t}(l.a.Component);var A=function(e){return l.a.createElement("div",null,l.a.createElement(w,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(J,null))};var B=function(e){return l.a.createElement(b.a,{fluid:!0},l.a.createElement(g.a,{className:"justify-content-center"},l.a.createElement(f.a,{md:8},e.children)))};var L=function(e){return l.a.createElement("div",null,l.a.createElement(w,{title:e.title}),l.a.createElement(B,null,l.a.createElement("p",null,"Hello, my name is Tom Hammer. I'm a full stack engineer with experience in Angular, AngularJS, Express JS, Node JS, Oracle SQL, MongoDB, and React."),l.a.createElement("p",null,"My dream is to one day start my own business and become an entrepreneur (currently working on some ideas)."),l.a.createElement("p",null,"I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS"),l.a.createElement("p",null,"My latest project, Dev Grub, is a cookbook for developers. You can check it out ",l.a.createElement("a",{href:"https://devgrub.com",target:"_blank",rel:"noopener noreferrer"},"here"),", or on the homepage. It is built with Angular, MongoDB, Express JS, and Node JS. However, I will be rebuilding it using React in the coming months"),l.a.createElement("p",null,"When I'm not learning something new chances are I'm creating some YouTube videos. You can find those ",l.a.createElement("a",{href:"http://www.youtube.com/c/Tom HammerLove1",target:"_blank",rel:"noopener noreferrer"},"here"))))},M=a(24),D=a(14),G=a(56),F=a(55),R=a.n(F),Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,l=t.name;a.setState(Object(M.a)({},l,n))},a.handleSubmit=function(e){e.preventDefault(),console.log(e.target),a.setState({disabled:!0}),R.a.post("http://localhost:3030/api/email",a.state).then(function(e){e.data.success?a.setState({disabled:!1,emailSent:!0}):a.setState({disabled:!1,emailSent:!1})}).catch(function(e){console.log(e),a.setState({disabled:!1,emailSent:!1})})},a.state={name:"",email:"",message:"",disabled:!1,emailSent:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,{title:this.props.title}),l.a.createElement(B,null,l.a.createElement(D.a,{onSubmit:this.handleSubmit},l.a.createElement(D.a.Group,null,l.a.createElement(D.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(D.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(D.a.Group,null,l.a.createElement(D.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(D.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(D.a.Group,null,l.a.createElement(D.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(D.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(G.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),t}(l.a.Component),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={title:"Tom Hammer",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Be Relentless",subTitle:"Projects the make a difference",text:"Checkout my projects below"},about:{title:"About Me"},contact:{title:"Let's Talk"}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement(b.a,{className:"p-0",fluid:!0},l.a.createElement(p.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(p.a.Brand,null,"Tom Hammer"),l.a.createElement(p.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(p.a.Collapse,{id:"navbar-toggle"},l.a.createElement(E.a,{className:"ml-auto"},l.a.createElement(d.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(d.b,{className:"nav-link",to:"/about"},"About"),l.a.createElement(d.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(h.a,{path:"/",exact:!0,render:function(){return l.a.createElement(A,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(h.a,{path:"/about",render:function(){return l.a.createElement(L,{title:e.state.about.title})}}),l.a.createElement(h.a,{path:"/contact",render:function(){return l.a.createElement(Y,{title:e.state.contact.title})}}),l.a.createElement(A,{title:this.state.home.title,subTitle:this.state.home.subTitle,text:this.state.home.text}),l.a.createElement(v,null)))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(89);i.a.render(l.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[59,1,2]]]);
//# sourceMappingURL=main.429cf74e.chunk.js.map