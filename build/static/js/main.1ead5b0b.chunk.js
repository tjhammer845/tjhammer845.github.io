(this.webpackJsonptjhammer845=this.webpackJsonptjhammer845||[]).push([[0],{127:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(22),c=a.n(l),r=(a(84),a(13)),s=a(7),o=a(10),m=a(9),u=a(8),d=a(20),p=a(6),b=a(16),h=a(37),g=a(33),f=a(77),E=a(17),v=a(35),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("h4",{title:this.props.subtitle,className:"d-block d-md-inline-block m-0"},i.a.createElement(v.CSSTransitionGroup,{transitionName:"toggle",transitionEnterTimeout:600,transitionLeaveTimeout:600,className:"toggle-base font-italic"},this.props.hidden?null:i.a.createElement("span",null,this.props.children)))}}]),a}(i.a.Component),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onClick=n.onClick.bind(Object(E.a)(n)),n.state={hidden:!0},n}return Object(o.a)(a,[{key:"onClick",value:function(){this.setState((function(e,t){return{hidden:!e.hidden}}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"d-block d-md-flex align-content-center"},i.a.createElement("h1",{onClick:this.onClick,title:this.props.title,className:"d-inline-block navbar-title m-0"},i.a.createElement("img",{className:"logo",src:this.props.logo.imgSrc,alt:this.props.logo.imgSrc}),this.props.title),i.a.createElement(w,{hidden:this.state.hidden},this.props.subtitle))}}]),a}(i.a.Component);var y=function(e){return i.a.createElement(g.a,{className:"sticky-inner border-bottom",expand:"lg"},i.a.createElement(g.a.Brand,{className:"font-weight-bold"},i.a.createElement(N,e)),i.a.createElement(g.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),i.a.createElement(g.a.Collapse,{id:"navbar-toggle"},i.a.createElement(f.a,{className:"ml-auto"},i.a.createElement(d.b,{className:"nav-link text-uppercase p-0",to:"/"},"Home"),i.a.createElement(d.b,{className:"nav-link text-uppercase p-0 pl-lg-5",to:"/about"},"About"),i.a.createElement(d.b,{className:"nav-link text-uppercase p-0 pl-lg-5",to:"/workflow"},"Workflow"),i.a.createElement(d.b,{className:"nav-link text-uppercase p-0 pl-lg-5",to:"/contact"},"Let\u2019s Chat"))))},k=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),l=a[0],c=a[1],r=Object(n.useRef)(null),s=function(){r&&r.current&&c(r.current.getBoundingClientRect().top<=0)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",(function(){return s}))}}),[]),i.a.createElement(n.Fragment,null,i.a.createElement("div",{className:"sticky-wrapper".concat(l?" sticky":""),ref:r},i.a.createElement(y,e)))},A=a(18),j=a(26),I=a(39),M=a(30),O=a(24),x=a(21);var C=function(){return i.a.createElement("footer",{className:"mt-5 fixed-bottom pl-3 pr-3 border-top"},i.a.createElement(b.a,{fluid:!0},i.a.createElement(A.a,{className:"justify-content-md-between p-3"},i.a.createElement(j.a,{className:"d-flex justify-content-center justify-content-md-start pb-2 pb-md-0",md:3,sm:12},i.a.createElement(I.a,{target:"_blank",className:"pr-3",href:"https://github.com/tjhammer845/"},i.a.createElement(x.a,{className:"display-5",icon:M.a})),i.a.createElement(I.a,{target:"_blank",className:"pr-3",href:"https://www.linkedin.com/in/thomasjhammer/"},i.a.createElement(x.a,{className:"display-5",icon:M.b})),i.a.createElement(I.a,{target:"_blank",className:"pr-3",href:"https://twitter.com/tjhammer845"},i.a.createElement(x.a,{className:"display-5",icon:M.c})),i.a.createElement(d.b,{target:"_blank",className:"p-0",to:"./pdf/TH-CV.pdf"},i.a.createElement(x.a,{className:"display-5",icon:O.b}))),i.a.createElement(j.a,{className:"d-flex justify-content-center justify-content-md-end p-0",md:6,sm:12},i.a.createElement("font",{className:"text-center align-self-center text-sm-left color-gold"},"\xa9 ",(new Date).getFullYear()," Tom Hammer. ",i.a.createElement("span",{className:"text-nowrap"},"All Rights Reserved."))))))},T=a(68);var S=function(e){return i.a.createElement(T.a,{className:"jumbotron-fluid p-0 bg-transparent"},i.a.createElement(b.a,{fluid:!0},i.a.createElement(A.a,{className:"justify-content-center pt-5"},i.a.createElement(j.a,{md:10,sm:12,className:"text-center"},e.title&&i.a.createElement("h2",{className:"display-1 font-weight-bolder mt-5"},e.title),e.subTitle&&i.a.createElement("h3",{className:"display-2 font-weight-light mt-2"},e.subTitle))),i.a.createElement(A.a,{className:"justify-content-center pb-4"},i.a.createElement(j.a,{lg:5,md:7,sm:12,className:"text-center"},e.text&&i.a.createElement("p",{className:"display-3 font-weight-light"},e.text),i.a.createElement("h2",{className:"display-4"},i.a.createElement(x.a,{className:"display-4 p-2 color-gold",icon:O.d}),i.a.createElement(x.a,{className:"display-4 p-2 color-gold",icon:O.a}),i.a.createElement(x.a,{className:"display-4 p-2 color-gold",icon:O.c}))))))},Z=a(28),D=(a(104),a(32)),R=a(78),W=a(46),G=a(47);var L=function(e){var t=Object(G.b)({opacity:1,from:{opacity:0}});return i.a.createElement(G.a.div,{className:"g-card-info d-flex flex-wrap align-content-center justify-content-center p-3",style:t},i.a.createElement("p",{className:"g-card-title text-white"},e.title),i.a.createElement("p",{className:"g-card-sub-title text-white mb-4"},e.subTitle),i.a.createElement("a",{href:e.link,target:"_blank",className:"btn btn-primary",rel:"noopener noreferrer"},"View Website"))};var Y=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),l=a[0],c=a[1];return i.a.createElement(v.CSSTransitionGroup,{transitionName:"g-card-info",transitionEnterTimeout:500,transitionLeaveTimeout:300},i.a.createElement(W.BrowserView,null,i.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)},onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)}},i.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),l&&i.a.createElement(L,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))),i.a.createElement(W.MobileView,null,i.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},i.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&i.a.createElement(L,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))))},F=a(70),z=a.n(F),B=a(71),Q=a.n(B),J=a(72),P=a.n(J),V=a(73),U=a.n(V),X=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={items:[{id:0,title:"A website should be bold and proud",subTitle:"Partners Bar and Nightclub is a long-lasting staple in New Haven nightlife and the LGBTQ Community.",imgSrc:P.a,link:"https://www.partnersnewhaven.com",selected:!1},{id:1,title:"Responsive UI keeps the world turning",subTitle:"Satisfying many users of the Yale MFA-DUO, CAS-SSO and NetID Management Applications.",imgSrc:Q.a,link:"https://veritas.its.yale.edu/netid/",selected:!1},{id:2,title:"Bob's Premium Rewards Program",subTitle:"A Bob's Store membership program loaded with exclusive benefits and rewards built under Clarus Commerce.",imgSrc:z.a,link:"https://www.bestofbobspremium.com/",selected:!1},{id:3,title:"Fresh shine, fresh pup, fresh site to go",subTitle:"Buggy Car Wash and Barking Bath is the all-in-one spot for your car and dog maintenance.",imgSrc:U.a,link:"https://buggycarwash.com",selected:!1}]},e.handleCardClick=function(t,a){var n=Object(Z.a)(e.state.items);n[t].selected=!n[t].selected,n.forEach((function(e){e.id!==t&&(e.selected=!1)})),e.setState({items:n})},e.makeItems=function(t){return t.map((function(t){return i.a.createElement(Y,{item:t,click:function(a){return e.handleCardClick(t.id,a)},key:t.id})}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(b.a,{fluid:!0},i.a.createElement(A.a,{className:"justify-content-around text-center"},i.a.createElement(R.a,{queries:{small:"(max-width: 767px)",medium:"(min-width: 768px) and (max-width: 1199px)",large:"(min-width: 1200px) and (max-width: 2006px)",xlarge:"(min-width: 2007px)"}},(function(t){return i.a.createElement("div",null,t.small&&i.a.createElement(D.Carousel,{autoplay:!0,infiniteLoop:!0},e.makeItems(e.state.items)),t.medium&&i.a.createElement(D.Carousel,{autoplay:!0,infiniteLoop:!0,centerMode:!0,centerSlidePercentage:50},e.makeItems(e.state.items)),t.large&&i.a.createElement(D.Carousel,{autoplay:!0,infiniteLoop:!0,centerMode:!0,centerSlidePercentage:33.33},e.makeItems(e.state.items)),t.xlarge&&i.a.createElement(D.Carousel,{infiniteLoop:!0,centerMode:!0,centerSlidePercentage:33.33},e.makeItems(e.state.items)))}))))}}]),a}(i.a.Component);var H=function(e){return i.a.createElement("div",null,i.a.createElement(S,{title:e.title,subTitle:e.subTitle,text:e.text}),i.a.createElement(X,null))};var K=function(e){return i.a.createElement(b.a,{fluid:!0},i.a.createElement(A.a,{className:"justify-content-center"},i.a.createElement(j.a,{md:8},e.children)))};var q=function(e){return i.a.createElement("div",null,i.a.createElement(S,{title:e.title}),i.a.createElement(K,null,i.a.createElement("div",{className:"d-flex flex-column-reverse flex-xl-row justify-content-xl-between"},i.a.createElement("div",null,i.a.createElement("p",{className:"lead"},"I am a regular guy focused on making things pretty and writing clean, readable code. With an education and background in digital design, I understand the entire process of creating quality web applications from conception to completion. In the past, I\u2019ve worked on a variety of web projects and gained invaluable experiences through daily operations within Information Technology and Creative."),i.a.createElement("p",null,"Outside of the office, I tend to be the fun-loving adventurous type, always seeking new sites and taking on new types of challenges. I like to spend my time cooking, gardening, drawing, weightlifting, running, and mountain biking. I love to stay busy and on the move, both in and out of the workplace.")),i.a.createElement("div",{className:"d-flex justify-content-center justify-content-xl-end"},e.about.images.map((function(e){var t=e.id,a=e.src,n=e.title,l=e.description;return i.a.createElement("img",{key:t,src:a,title:n,alt:l,className:"about-img border-gold mb-5 ml-0 ml-xl-5 mb-xl-0"})}))))))};var _=function(e){return i.a.createElement("div",null,i.a.createElement(S,{title:e.title}),i.a.createElement(K,null,i.a.createElement("p",{className:"lead"},"My development workflow is something I've been constantly improving over the years, and it's always evolving as I discover new tips, tools, methods or applications. I'll list out everything that is typically involved in my everyday workflow, such as my desktop equipment, macOS applications, development tools, etc.")))},$=a(74),ee=a.n($),te=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",message:""},n}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),ee()({method:"POST",url:"http://localhost:3002/send",data:this.state}).then((function(e){"success"===e.data.status?(alert("Message Sent."),t.resetForm()):"fail"===e.data.status&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"name"},"Name"),i.a.createElement("input",{type:"text",className:"form-control",id:"name",value:this.state.name,onChange:this.onNameChange.bind(this)})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),i.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"message"},"Message"),i.a.createElement("textarea",{className:"form-control",rows:"5",id:"message",value:this.state.message,onChange:this.onMessageChange.bind(this)})),i.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),a}(i.a.Component),ae=a(75),ne=a.n(ae),ie=a(76),le=a.n(ie),ce=(a(127),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e,n;Object(s.a)(this,a);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return(n=t.call.apply(t,[this].concat(l))).state=(e={title:"Tom Hammer",subtitle:"Front-End Engineer and Digital Creator",siteTitle:n.title+" | "+n.subtitle},Object(r.a)(e,"siteTitle","TH | Front-End Engineer and Digital Creator"),Object(r.a)(e,"logo",{imgSrc:ne.a,title:n.siteTitle}),Object(r.a)(e,"headerLinks",[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Workflow",path:"/workflow"},{title:"Contact",path:"/contact"}]),Object(r.a)(e,"home",{title:"Creative, logical, and always learning.",subTitle:"Web stuff with a brighter future in mind!",text:"I drink coffee. I draw. I write clean code. I'm a front-end engineer and digital creator embracing new technologies so I can create awesome user experiences. Check out some of my work below!"}),Object(r.a)(e,"about",{images:[{id:0,src:le.a,title:"Tom and his nephew Bentley",description:"Who doesn't love a cute dog pic?"}],title:"About Tom"}),Object(r.a)(e,"workflow",{title:"Tom's Workflow"}),Object(r.a)(e,"contact",{title:"Let's Chat"}),e),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title=this.state.siteTitle}},{key:"render",value:function(){var e=this;return i.a.createElement(d.a,null,i.a.createElement(b.a,{className:"main-container",fluid:!0},i.a.createElement(k,this.state),i.a.createElement(p.a,{path:"/",exact:!0,render:function(){return i.a.createElement(H,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),i.a.createElement(p.a,{path:"/about",render:function(){return i.a.createElement(q,{about:e.state.about,title:e.state.about.title})}}),i.a.createElement(p.a,{path:"/workflow",render:function(){return i.a.createElement(_,{title:e.state.workflow.title})}}),i.a.createElement(p.a,{path:"/contact",render:function(){return i.a.createElement(te,{title:e.state.contact.title})}})),i.a.createElement(C,null))}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(128);c.a.render(i.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},70:function(e,t,a){e.exports=a.p+"static/media/bobs.f4d65053.jpg"},71:function(e,t,a){e.exports=a.p+"static/media/yale.af72c76e.jpg"},72:function(e,t,a){e.exports=a.p+"static/media/partners.c7ddb27c.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/buggy.ad17bbda.jpg"},75:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAArCAYAAADSZm7JAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTEwLTI4VDE4OjMzOjUwLTA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTEwLTI4VDIxOjQ5OjU3LTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMC0yOFQyMTo0OTo1Ny0wNDowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphOGZmY2FkNS02MGZjLTJlNDAtYWNmYS00NTQ1ODViMWQ0MDkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjYzAxMDQxNC02NzMwLThhNGYtYjMwMS03MmI4OTg4NzM3YTQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMGNlYzYxZi0wNTlhLWMzNDctOGE5Yi0zYzU3MmI3MzU2OTQiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwY2VjNjFmLTA1OWEtYzM0Ny04YTliLTNjNTcyYjczNTY5NCIgc3RFdnQ6d2hlbj0iMjAyMC0xMC0yOFQxODozMzo1MC0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NzFiMzhjMi02N2RkLTQxNDYtOGNiMC0yN2M2MDAwNDM3YTIiIHN0RXZ0OndoZW49IjIwMjAtMTAtMjhUMTg6MzM6NTAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YThmZmNhZDUtNjBmYy0yZTQwLWFjZmEtNDU0NTg1YjFkNDA5IiBzdEV2dDp3aGVuPSIyMDIwLTEwLTI4VDIxOjQ5OjU3LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cfXP4wAAAbxJREFUaN7tmsuRhCAQhk3BFEjBFCaFOe6VFEzBFDjt3Qi2yhRMwRRMwX25NV1UAw3KCDv/oQ9DNQ8/mvannWbbtgYmN0AAMAADsKqBfby//Vdrv2wj1nJ+APawnsCaXX4A9rCRAOuvBNZboX6GqcCciuljAn1W4tsBmB/YnfitvrEB7NcG4jdcAUyRBdYAbCZ+973NcPPkAKb3iZeAnxGCMJmBKYecWPbfOhew74knMnEtwOgJGEn7QtqnvznPAqaZBdYCzCUnFmYMfRSYHVV0R7oKgLWWnKDjdp5nUynAuKhaSdJsMgJLMROQE7NHcqyp0eaLqiFSbpQAbIhYv0mJNq6j5PiVCozmqZtgzZ0lQX7GjQE2Hri7XQ2sk6p7W1ZYJ8zERtgs3J3Skn6fsPHci8Ck5rDRVUMqFBiVE1pQK0vOYb63pLc0UhAwUbEw8Jz6TB22CI7plcAkcuLGJPhDOqxmpT8ITkQWpV/rXVJSLMx6l6ypWiGVE9mrFa56WGnAemGN7Gn1sNJlxcQUC5sY4fpKX41i5ASAWXJiShnj1YCZBIF9DBj+LwFgAAZgAAZgMAADMAADMACDfQKGgKgwxKVnAgAAAABJRU5ErkJggg=="},76:function(e,t,a){e.exports=a.p+"static/media/about-image.ff5d0bcf.jpg"},79:function(e,t,a){e.exports=a(129)},84:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.1ead5b0b.chunk.js.map