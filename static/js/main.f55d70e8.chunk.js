(this["webpackJsonpreact-portfolio-tjh"]=this["webpackJsonpreact-portfolio-tjh"]||[]).push([[0],{120:function(e,t){},158:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(27),c=a.n(i),r=(a(90),a(7)),s=a(11),o=a(9),m=a(8),u=a(32),d=a(6),h=a(15),p=a(33),f=a(84),g=(a(91),a(76)),b=a.n(g),E=a(19),v=a(17),N=a(26),w=a(30);var k=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,{className:"border-top justify-content-between p-3"},l.a.createElement(v.a,{className:"p-0",md:3,sm:12},l.a.createElement(w.a,{className:"text-white p-0",icon:N.a}),l.a.createElement(w.a,{className:"text-white p-0",icon:N.b}),l.a.createElement(w.a,{className:"text-white p-0",icon:N.c})),l.a.createElement(v.a,{className:"p-0 d-flex justify-content-end",md:3,sm:12},l.a.createElement("font",{className:"text-white"},"\xa9 2020 Tom Hammer. All Rights Reserved.")))))},y=a(77),C=a(41),j=a.n(C);var S=function(e){return l.a.createElement(y.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,{className:"justify-content-center py-5"},l.a.createElement(v.a,{md:8,sm:12,className:"text-center"},e.title&&l.a.createElement("h2",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h4",{className:"lead font-weight-light"},e.text),j()(e.icon1),j()(e.icon2),j()(e.icon3)))))},x=a(24),T=a(50);var O=function(e){var t=Object(T.b)({opacity:1,from:{opacity:0}});return l.a.createElement(T.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var I=function(e){return l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(O,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},A=a(78),F=a.n(A),B=a(79),L=a.n(B),H=a(80),W=a.n(H),D=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(x.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return l.a.createElement(I,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Responsive UI keeps the collegiate world turning",subTitle:"Satisfying many users of the Yale MFA-DUO, CAS-SSO and NetID Management Applications.",imgSrc:F.a,link:"https://veritas.its.yale.edu/netid/",selected:!1},{id:1,title:"Websites should be bold and proud",subTitle:"Partners Bar and Nightclub is a long-lasting staple in New Haven nightlife and the LGBTQ Community.",imgSrc:L.a,link:"https://www.partnersnewhaven.com",selected:!1},{id:2,title:"Fresh shine, fresh pup, fresh website to go",subTitle:"Buggy Car Wash and Barking Bath is the all-in-one spot for your car and dog maintenance.",imgSrc:W.a,link:"https://buggycarwash.com",selected:!1}]},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(l.a.Component);var G=function(e){return l.a.createElement("div",null,l.a.createElement(S,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(D,null))};var M=function(e){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,{className:"justify-content-center"},l.a.createElement(v.a,{md:8},e.children)))};var R=function(e){return l.a.createElement("div",null,l.a.createElement(S,{title:e.title}),l.a.createElement(M,null,l.a.createElement("p",{className:"lead"},"I am a front-end engineer focused on writing clean code and learning new web technologies. With an education and background in digital design, I understand the entire process of creating quality web applications from conception to completion. In the past, I\u2019ve worked on a variety of web projects and gained invaluable experiences through daily operations within Information Technology and Creative. ")))},U=a(23),J=a(14),P=a(82),q=a(81),Q=a.n(q),V=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,l=t.name;n.setState(Object(U.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),console.log(e.target),n.setState({disabled:!0}),Q.a.post("http://localhost:3030/api/email",n.state).then((function(e){e.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){console.log(e),n.setState({disabled:!1,emailSent:!1})}))},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(S,{title:this.props.title}),l.a.createElement(M,null,l.a.createElement(J.a,{onSubmit:this.handleSubmit},l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(J.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(J.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(J.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(P.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(l.a.Component),Y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={title:"Tom Hammer",siteTitle:"TH | Front-End Engineer and Digital Designer",icon1:'<FontAwesomeIcon className="p-0" icon={faPencilRuler} />',icon2:'<FontAwesomeIcon className="p-0" icon={faCode} />',icon3:'<FontAwesomeIcon className="p-0" icon={faGrinWink} />',headerLinks:[{title:"Home",path:"/react-portfolio-tjh"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Creative, logical, and slightly sarcastic.",subTitle:"Web stuff with a brighter future in mind!",text:"Check out some of my work below."},about:{title:"About Tom"},contact:{title:"Let's Chat"}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title=this.state.siteTitle}},{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(h.a,{className:"p-0",fluid:!0},l.a.createElement(p.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(p.a.Brand,{className:"font-weight-bold"},l.a.createElement("img",{className:"main-logo",src:b.a,alt:"Logo"}),l.a.createElement("h1",{className:"d-inline-block navbar-title"},this.state.title,l.a.createElement("span",{className:"font-italic"},this.state.subtitle))),l.a.createElement(p.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(p.a.Collapse,{id:"navbar-toggle"},l.a.createElement(f.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link p-0 pl-md-4",to:"/react-portfolio-tjh"},"Home"),l.a.createElement(u.b,{className:"nav-link p-0 pl-md-4",to:"/about"},"About"),l.a.createElement(u.b,{className:"nav-link p-0",to:"/contact"},"Let\u2019s Chat")))),l.a.createElement(d.a,{path:"/react-portfolio-tjh",exact:!0,render:function(){return l.a.createElement(G,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.a,{path:"/about",render:function(){return l.a.createElement(R,{title:e.state.about.title})}}),l.a.createElement(d.a,{path:"/contact",render:function(){return l.a.createElement(V,{title:e.state.contact.title})}})),l.a.createElement(k,null))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(157);c.a.render(l.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},76:function(e,t,a){e.exports=a.p+"static/media/logo.9b21af92.png"},78:function(e,t,a){e.exports=a.p+"static/media/yaleUI.734308e4.png"},79:function(e,t,a){e.exports=a.p+"static/media/partnersNewHaven.c7d614e3.png"},80:function(e,t,a){e.exports=a.p+"static/media/evverest.461088f6.png"},85:function(e,t,a){e.exports=a(158)},90:function(e,t,a){},91:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.f55d70e8.chunk.js.map