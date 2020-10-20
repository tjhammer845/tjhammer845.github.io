(this["webpackJsonpreact-portfolio-tjh"]=this["webpackJsonpreact-portfolio-tjh"]||[]).push([[0],{130:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),i=a.n(r),c=(a(88),a(7)),s=a(11),o=a(9),m=a(8),d=a(20),u=a(6),p=a(16),h=(a(89),a(81)),f=a(33),g=a(80);var b=function(e){return l.a.createElement(f.a,{rootClose:!0,className:"sticky-inner border-bottom",bg:"white",expand:"lg"},l.a.createElement(f.a.Brand,{className:"font-weight-bold"},l.a.createElement("h1",{className:"d-inline-block navbar-title m-0"},e.title,l.a.createElement("span",{className:"d-none font-italic"},e.subtitle))),l.a.createElement(f.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(f.a.Collapse,{id:"navbar-toggle"},l.a.createElement(g.a,{className:"ml-auto"},l.a.createElement(d.b,{className:"nav-link text-uppercase p-0",to:"/react-portfolio-tjh"},"Home"),l.a.createElement(d.b,{className:"nav-link text-uppercase p-0 pl-md-5",to:"/about"},"About"),l.a.createElement(d.b,{className:"nav-link text-uppercase p-0 pl-md-5",to:"/workflow"},"Workflow"),l.a.createElement(d.b,{className:"nav-link text-uppercase p-0 pl-md-5",to:"/contact"},"Let\u2019s Chat"))))},E=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),r=a[0],i=a[1],c=Object(n.useRef)(null),s=function(){c&&c.current&&i(c.current.getBoundingClientRect().top<=0)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",(function(){return s}))}}),[]),l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"sticky-wrapper".concat(r?" sticky":""),ref:c},l.a.createElement(b,e)))},w=a(18),v=a(17),y=a(40),k=a(31),N=a(24),x=a(21);var j=function(){return l.a.createElement("footer",{className:"mt-5 fixed-bottom bg-red pl-3 pr-3 border-top"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(w.a,{className:"justify-content-md-between p-3"},l.a.createElement(v.a,{className:"d-flex justify-content-center justify-content-md-start pb-2 pb-md-0",md:3,sm:12},l.a.createElement(y.a,{target:"_blank",className:"pr-3",href:"https://github.com/tjhammer845/"},l.a.createElement(x.a,{className:"display-5",icon:k.a})),l.a.createElement(y.a,{target:"_blank",className:"pr-3",href:"https://www.linkedin.com/in/thomasjhammer/"},l.a.createElement(x.a,{className:"display-5",icon:k.b})),l.a.createElement(y.a,{target:"_blank",className:"pr-3",href:"https://twitter.com/tjhammer845"},l.a.createElement(x.a,{className:"display-5",icon:k.c})),l.a.createElement(d.b,{target:"_blank",className:"p-0",to:"./pdf/TH-CV.pdf"},l.a.createElement(x.a,{className:"display-5",icon:N.b}))),l.a.createElement(v.a,{className:"d-flex justify-content-center justify-content-md-end p-0",md:6,sm:12},l.a.createElement("font",{className:"text-center text-sm-left text-white"},"\xa9 ",(new Date).getFullYear()," Tom Hammer. ",l.a.createElement("span",{className:"text-nowrap"},"All Rights Reserved."))))))},C=a(70);var S=function(e){return l.a.createElement(C.a,{className:"jumbotron-fluid p-0 bg-transparent"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(w.a,{className:"justify-content-center pt-5"},l.a.createElement(v.a,{md:10,sm:12,className:"text-center"},e.title&&l.a.createElement("h2",{className:"display-1 font-weight-bolder mt-5"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-2 font-weight-light mt-2"},e.subTitle))),l.a.createElement(w.a,{className:"justify-content-center pb-4"},l.a.createElement(v.a,{lg:5,md:7,sm:12,className:"text-center"},e.text&&l.a.createElement("p",{className:"display-3 font-weight-light"},e.text),l.a.createElement("h2",{className:"display-4"},l.a.createElement(x.a,{className:"display-4 p-2 color-red",icon:N.d}),l.a.createElement(x.a,{className:"display-4 p-2 color-red",icon:N.a}),l.a.createElement(x.a,{className:"display-4 p-2 color-red",icon:N.c}))))))},T=a(29),I=(a(97),a(41)),O=a(82),A=a(49);var B=function(e){var t=Object(A.b)({opacity:1,from:{opacity:0}});return l.a.createElement(A.a.div,{className:"g-card-info d-flex flex-wrap align-content-center justify-content-center p-3",style:t},l.a.createElement("p",{className:"g-card-title text-white"},e.title),l.a.createElement("p",{className:"g-card-sub-title text-white"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",className:"btn btn-primary",rel:"noopener noreferrer"},"View Website"))},F=a(72);var L=function(e){return l.a.createElement(F.CSSTransitionGroup,{transitionName:"g-card-info",transitionEnterTimeout:500,transitionLeaveTimeout:300},l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(B,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})))},W=a(73),D=a.n(W),H=a(74),M=a.n(H),R=a(75),G=a.n(R),P=a(76),_=a.n(P),q=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={items:[{id:0,title:"Bob's Premium Rewards Program",subTitle:"A Bob's Store membership program loaded with exclusive benefits and rewards built under Clarus Commerce.",imgSrc:D.a,link:"https://www.bestofbobspremium.com/",selected:!1},{id:1,title:"Responsive UI keeps the world turning",subTitle:"Satisfying many users of the Yale MFA-DUO, CAS-SSO and NetID Management Applications.",imgSrc:M.a,link:"https://veritas.its.yale.edu/netid/",selected:!1},{id:2,title:"A website should be bold and proud",subTitle:"Partners Bar and Nightclub is a long-lasting staple in New Haven nightlife and the LGBTQ Community.",imgSrc:G.a,link:"https://www.partnersnewhaven.com",selected:!1},{id:3,title:"Fresh shine, fresh pup, fresh site to go",subTitle:"Buggy Car Wash and Barking Bath is the all-in-one spot for your car and dog maintenance.",imgSrc:_.a,link:"https://buggycarwash.com",selected:!1}]},e.handleCardClick=function(t,a){var n=Object(T.a)(e.state.items);n[t].selected=!n[t].selected,n.forEach((function(e){e.id!==t&&(e.selected=!1)})),e.setState({items:n})},e.makeItems=function(t){return t.map((function(t){return l.a.createElement(L,{item:t,click:function(a){return e.handleCardClick(t.id,a)},key:t.id})}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(p.a,{fluid:!0},l.a.createElement(w.a,{className:"justify-content-around text-center"},l.a.createElement(O.a,{queries:{small:"(max-width: 767px)",medium:"(min-width: 768px) and (max-width: 1199px)",large:"(min-width: 1200px) and (max-width: 2006px)",xlarge:"(min-width: 2007px)"}},(function(t){return l.a.createElement("div",null,t.small&&l.a.createElement(I.Carousel,null,e.makeItems(e.state.items)),t.medium&&l.a.createElement(I.Carousel,{centerMode:!0,centerSlidePercentage:50},e.makeItems(e.state.items)),t.large&&l.a.createElement(I.Carousel,{centerMode:!0,centerSlidePercentage:33.33},e.makeItems(e.state.items)),t.xlarge&&l.a.createElement("div",null,e.makeItems(e.state.items)))}))))}}]),a}(l.a.Component);var J=function(e){return l.a.createElement("div",null,l.a.createElement(S,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(q,null))};var U=function(e){return l.a.createElement(p.a,{fluid:!0},l.a.createElement(w.a,{className:"justify-content-center"},l.a.createElement(v.a,{md:8},e.children)))};var V=function(e){return l.a.createElement("div",null,l.a.createElement(S,{title:e.title}),l.a.createElement(U,null,l.a.createElement("div",{className:"d-block d-xl-flex justify-content-between"},l.a.createElement("div",null,l.a.createElement("p",{className:"lead"},"I am a front-end engineer and digital creator focused on writing clean and readable code. With an education and background in digital design, I understand the entire process of creating quality web applications from conception to completion. In the past, I\u2019ve worked on a variety of web projects and gained invaluable experiences through daily operations within Information Technology and Creative."),l.a.createElement("p",null,"Outside of the office, I tend to be the fun-loving adventurous type, always seeking new sites and taking on new types of challenges. I like to spend my time cooking, gardening, drawing, weightlifting, running, and mountain biking. Although I am passionate about living a healthy lifestyle, I do also enjoy the occasional happy hour or get together with coworkers and friends. I love to stay busy and on the move, both in and out of the workplace.")),l.a.createElement("div",{className:"d-flex justify-content-center justify-content-xl-end"},e.about.images.map((function(e){var t=e.id,a=e.src,n=e.title,r=e.description;return l.a.createElement("img",{key:t,src:a,title:n,alt:r,className:"about-img border-red mt-5 ml-0 ml-xl-5 mt-xl-0"})}))))))};var Y=function(e){return l.a.createElement("div",null,l.a.createElement(S,{title:e.title}),l.a.createElement(U,null,l.a.createElement("p",{className:"lead"},"My development workflow is something I've been constantly improving over the years, and it's always evolving as I discover new tips, tools, methods or applications. I'll list out everything that is typically involved in my everyday workflow, such as my desktop equipment, macOS applications, development tools, etc.")))},Q=a(28),$=a(15),z=a(78),K=a(77),X=a.n(K),Z=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={name:"",email:"",message:"",disabled:!1,emailSent:null},e.handleChange=function(t){var a=t.target,n="checkbox"===a.type?a.checked:a.value,l=a.name;e.setState(Object(Q.a)({},l,n))},e.handleSubmit=function(t){t.preventDefault(),console.log(t.target),e.setState({disabled:!0}),X.a.post("http://localhost:3030/api/email",e.state).then((function(t){t.data.success?e.setState({disabled:!1,emailSent:!0}):e.setState({disabled:!1,emailSent:!1})})).catch((function(t){console.log(t),e.setState({disabled:!1,emailSent:!1})}))},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(S,{title:this.props.title}),l.a.createElement(U,null,l.a.createElement($.a,{onSubmit:this.handleSubmit},l.a.createElement($.a.Group,null,l.a.createElement($.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement($.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement($.a.Group,null,l.a.createElement($.a.Label,{htmlFor:"email"},"Email"),l.a.createElement($.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement($.a.Group,null,l.a.createElement($.a.Label,{htmlFor:"message"},"Message"),l.a.createElement($.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(z.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(l.a.Component),ee=a(79),te=a.n(ee),ae=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={siteTitle:"TH | Front-End Engineer and Digital Creator",title:"Tom Hammer ",subtitle:" | Front-End Engineer and Digital Creator",headerLinks:[{title:"Home",path:"/react-portfolio-tjh"},{title:"About",path:"/about"},{title:"Workflow",path:"/workflow"},{title:"Contact",path:"/contact"}],home:{title:"Creative, logical, and slightly humorous.",subTitle:"Web stuff with a brighter future in mind!",text:"I drink coffee. I draw. I write clean code. I'm a front-end engineer and digital creator embracing new technologies so I can create awesome user experiences. Check out some of my work below!"},about:{images:[{id:0,src:te.a,title:"Tom and his nephew Bentley",description:"Who doesn't love a cute dog pic?"}],title:"About Tom"},workflow:{title:"Tom's Workflow"},contact:{title:"Let's Chat"}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title=this.state.siteTitle}},{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement(p.a,{className:"main-container",fluid:!0},l.a.createElement(E,this.state),l.a.createElement(u.a,{path:"/react-portfolio-tjh",exact:!0,render:function(){return l.a.createElement(J,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(u.a,{path:"/about",render:function(){return l.a.createElement(V,{about:e.state.about,title:e.state.about.title})}}),l.a.createElement(u.a,{path:"/workflow",render:function(){return l.a.createElement(Y,{title:e.state.workflow.title})}}),l.a.createElement(u.a,{path:"/contact",render:function(){return l.a.createElement(Z,{title:e.state.contact.title})}})),l.a.createElement(j,null))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(129);i.a.render(l.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},73:function(e,t,a){e.exports=a.p+"static/media/bobs.f4d65053.jpg"},74:function(e,t,a){e.exports=a.p+"static/media/yale.af72c76e.jpg"},75:function(e,t,a){e.exports=a.p+"static/media/partners.c7ddb27c.jpg"},76:function(e,t,a){e.exports=a.p+"static/media/buggy.ad17bbda.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/about-image.ff5d0bcf.jpg"},83:function(e,t,a){e.exports=a(130)},88:function(e,t,a){},89:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.748a9230.chunk.js.map