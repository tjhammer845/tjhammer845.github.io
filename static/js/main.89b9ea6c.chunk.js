(this["webpackJsonpreact-portfolio-tjh"]=this["webpackJsonpreact-portfolio-tjh"]||[]).push([[0],{58:function(e,t,a){e.exports=a.p+"static/media/logo.9b21af92.png"},60:function(e,t,a){e.exports=a.p+"static/media/yaleUI.734308e4.png"},61:function(e,t,a){e.exports=a.p+"static/media/partnersNewHaven.c7d614e3.png"},62:function(e,t,a){e.exports=a.p+"static/media/evverest.461088f6.png"},67:function(e,t,a){e.exports=a(98)},72:function(e,t,a){},73:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(26),r=a.n(i),c=(a(72),a(7)),s=a(11),o=a(9),m=a(8),u=a(29),d=a(6),h=a(15),p=a(30),g=a(66),f=(a(73),a(58)),b=a.n(f),E=a(19),v=a(17),N=a(25),k=a(27);var y=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,{className:"border-top justify-content-between p-3"},l.a.createElement(v.a,{className:"p-0",md:3,sm:12},l.a.createElement(k.a,{className:"text-white p-0",icon:N.a}),l.a.createElement(k.a,{className:"text-white p-0",icon:N.b}),l.a.createElement(k.a,{className:"text-white p-0",icon:N.c})),l.a.createElement(v.a,{className:"p-0 d-flex justify-content-end",md:3,sm:12},l.a.createElement("font",{className:"text-white"},"\xa9 2020 Tom Hammer. All Rights Reserved.")))))},w=a(59);var C=function(e){return l.a.createElement(w.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,{className:"justify-content-center py-5"},l.a.createElement(v.a,{md:8,sm:12,className:"text-center"},l.a.createElement("ul",null,e.tags.map((function(e){return l.a.createElement("li",{key:e},e)}))),e.title&&l.a.createElement("h2",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h4",{className:"lead font-weight-light"},e.text)))))},j=a(24),S=a(45);var x=function(e){var t=Object(S.b)({opacity:1,from:{opacity:0}});return l.a.createElement(S.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var T=function(e){return l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(x,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},O=a(60),I=a.n(O),A=a(61),B=a.n(A),L=a(62),F=a.n(L),H=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(j.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return l.a.createElement(T,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Responsive UI keeps the collegiate world turning",subTitle:"Satisfying many users of the Yale MFA-DUO, CAS-SSO and NetID Management Applications.",imgSrc:I.a,link:"https://veritas.its.yale.edu/netid/",selected:!1},{id:1,title:"Websites should be bold and proud",subTitle:"Partners Bar and Nightclub is a long-lasting staple in New Haven nightlife and the LGBTQ Community.",imgSrc:B.a,link:"https://www.partnersnewhaven.com",selected:!1},{id:2,title:"Fresh shine, fresh pup, fresh website to go",subTitle:"Buggy Car Wash and Barking Bath is the all-in-one spot for your car and dog maintenance.",imgSrc:F.a,link:"https://buggycarwash.com",selected:!1}]},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(l.a.Component);var W=function(e){return l.a.createElement("div",null,l.a.createElement(C,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(H,null))};var D=function(e){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,{className:"justify-content-center"},l.a.createElement(v.a,{md:8},e.children)))};var G=function(e){return l.a.createElement("div",null,l.a.createElement(C,{title:e.title}),l.a.createElement(D,null,l.a.createElement("p",{className:"lead"},"I am a front-end engineer focused on writing clean code and learning new web technologies. With an education and background in digital design, I understand the entire process of creating quality web applications from conception to completion. In the past, I\u2019ve worked on a variety of web projects and gained invaluable experiences through daily operations within Information Technology and Creative. ")))},M=a(23),R=a(14),U=a(64),J=a(63),P=a.n(J),q=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,l=t.name;n.setState(Object(M.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),console.log(e.target),n.setState({disabled:!0}),P.a.post("http://localhost:3030/api/email",n.state).then((function(e){e.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){console.log(e),n.setState({disabled:!1,emailSent:!1})}))},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(C,{title:this.props.title}),l.a.createElement(D,null,l.a.createElement(R.a,{onSubmit:this.handleSubmit},l.a.createElement(R.a.Group,null,l.a.createElement(R.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(R.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(R.a.Group,null,l.a.createElement(R.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(R.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(R.a.Group,null,l.a.createElement(R.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(R.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(U.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(l.a.Component),Q=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={title:"Tom Hammer",siteTitle:"TH | Front-End Engineer and Digital Designer",tags:["faPencilRuler","faCode","faGrinWink"],headerLinks:[{title:"Home",path:"/react-portfolio-tjh"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Creative, logical, and slightly sarcastic.",subTitle:"Web stuff with a brighter future in mind!",text:"Check out some of my work below."},about:{title:"About Tom"},contact:{title:"Let's Chat"}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title=this.state.siteTitle}},{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(h.a,{className:"p-0",fluid:!0},l.a.createElement(p.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(p.a.Brand,{className:"font-weight-bold"},l.a.createElement("img",{className:"main-logo",src:b.a,alt:"Logo"}),l.a.createElement("h1",{className:"d-inline-block navbar-title"},this.state.title,l.a.createElement("span",{className:"font-italic"},this.state.subtitle))),l.a.createElement(p.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(p.a.Collapse,{id:"navbar-toggle"},l.a.createElement(g.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link p-0 pl-md-4",to:"/react-portfolio-tjh"},"Home"),l.a.createElement(u.b,{className:"nav-link p-0 pl-md-4",to:"/about"},"About"),l.a.createElement(u.b,{className:"nav-link p-0",to:"/contact"},"Let\u2019s Chat")))),l.a.createElement(d.a,{path:"/react-portfolio-tjh",exact:!0,render:function(){return l.a.createElement(W,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.a,{path:"/about",render:function(){return l.a.createElement(G,{title:e.state.about.title})}}),l.a.createElement(d.a,{path:"/contact",render:function(){return l.a.createElement(q,{title:e.state.contact.title})}})),l.a.createElement(y,null))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(97);r.a.render(l.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[67,1,2]]]);
//# sourceMappingURL=main.89b9ea6c.chunk.js.map