(this.webpackJsonptjhammer845=this.webpackJsonptjhammer845||[]).push([[0],{129:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),o=a.n(l),i=(a(86),a(13)),c=a(7),s=a(10),m=a(9),u=a(8),p=a(20),d=a(6),h=a(16),f=a(37),b=a(33),g=a(79),w=a(17),E=a(35),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("h4",{title:this.props.subtitle,className:"d-block d-md-inline-block m-0"},r.a.createElement(E.CSSTransitionGroup,{transitionName:"toggle",transitionEnterTimeout:600,transitionLeaveTimeout:600,className:"toggle-base font-italic"},this.props.hidden?null:r.a.createElement("span",null,this.props.children)))}}]),a}(r.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onClick=n.onClick.bind(Object(w.a)(n)),n.state={hidden:!0},n}return Object(s.a)(a,[{key:"onClick",value:function(){this.setState((function(e,t){return{hidden:!e.hidden}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"d-block d-md-flex align-content-center"},r.a.createElement("h1",{onClick:this.onClick,title:this.props.title,className:"d-inline-block navbar-title m-0"},r.a.createElement("img",{className:"logo",src:this.props.logo.imgSrc,alt:this.props.logo.imgSrc}),this.props.title),r.a.createElement(k,{hidden:this.state.hidden},this.props.subtitle))}}]),a}(r.a.Component);var y=function(e){return r.a.createElement(b.a,{className:"sticky-inner border-bottom",expand:"lg"},r.a.createElement(b.a.Brand,{className:"font-weight-bold"},r.a.createElement(v,e)),r.a.createElement(b.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),r.a.createElement(b.a.Collapse,{id:"navbar-toggle"},r.a.createElement(g.a,{className:"ml-auto"},r.a.createElement(p.b,{className:"nav-link text-uppercase p-0",to:"/"},"Home"),r.a.createElement(p.b,{className:"nav-link text-uppercase p-0 pl-lg-5",to:"/about"},"About"),r.a.createElement(p.b,{className:"nav-link text-uppercase p-0 pl-lg-5",to:"/workflow"},"Workflow"),r.a.createElement(p.b,{className:"nav-link text-uppercase p-0 pl-lg-5",to:"/contact"},"Let\u2019s Chat"))))},N=function(e){var t=Object(n.useState)(!1),a=Object(f.a)(t,2),l=a[0],o=a[1],i=Object(n.useRef)(null),c=function(){i&&i.current&&o(i.current.getBoundingClientRect().top<=0)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",(function(){return c}))}}),[]),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"sticky-wrapper".concat(l?" sticky":""),ref:i},r.a.createElement(y,e)))},A=a(18),I=a(26),j=a(39),M=a(30),x=a(24),C=a(21);var S=function(){return r.a.createElement("footer",{className:"mt-5 fixed-bottom pl-3 pr-3 border-top"},r.a.createElement(h.a,{fluid:!0},r.a.createElement(A.a,{className:"justify-content-md-between p-3"},r.a.createElement(I.a,{className:"d-flex justify-content-center justify-content-md-start pb-2 pb-md-0",md:3,sm:12},r.a.createElement(j.a,{target:"_blank",className:"pr-3",href:"https://github.com/tjhammer845/"},r.a.createElement(C.a,{className:"display-5",icon:M.a})),r.a.createElement(j.a,{target:"_blank",className:"pr-3",href:"https://www.linkedin.com/in/thomasjhammer/"},r.a.createElement(C.a,{className:"display-5",icon:M.b})),r.a.createElement(j.a,{target:"_blank",className:"pr-3",href:"https://twitter.com/tjhammer845"},r.a.createElement(C.a,{className:"display-5",icon:M.c})),r.a.createElement(p.b,{target:"_blank",className:"p-0",to:"./pdf/TH-CV.pdf"},r.a.createElement(C.a,{className:"display-5",icon:x.b}))),r.a.createElement(I.a,{className:"d-flex justify-content-center justify-content-md-end p-0",md:6,sm:12},r.a.createElement("font",{className:"text-center align-self-center text-sm-left color-gold"},"\xa9 ",(new Date).getFullYear()," Tom Hammer. ",r.a.createElement("span",{className:"text-nowrap"},"All Rights Reserved."))))))},T=a(68);var O=function(e){return r.a.createElement(T.a,{className:"jumbotron-fluid p-0 bg-transparent"},r.a.createElement(h.a,{fluid:!0},r.a.createElement(A.a,{className:"justify-content-center pt-5"},r.a.createElement(I.a,{md:10,sm:12,className:"text-center"},e.title&&r.a.createElement("h2",{className:"display-1 font-weight-bolder mt-5"},e.title),e.subTitle&&r.a.createElement("h3",{className:"display-2 font-weight-light mt-2"},e.subTitle))),r.a.createElement(A.a,{className:"justify-content-center pb-4"},r.a.createElement(I.a,{lg:5,md:7,sm:12,className:"text-center"},e.text&&r.a.createElement("p",{className:"display-3 font-weight-light"},e.text),r.a.createElement("h2",{className:"display-4"},r.a.createElement(C.a,{className:"display-4 p-2 color-gold",icon:x.d}),r.a.createElement(C.a,{className:"display-4 p-2 color-gold",icon:x.a}),r.a.createElement(C.a,{className:"display-4 p-2 color-gold",icon:x.c}))))))},D=a(28),W=(a(106),a(32)),G=a(80),Z=a(46),L=a(47);var R=function(e){var t=Object(L.b)({opacity:1,from:{opacity:0}});return r.a.createElement(L.a.div,{className:"g-card-info d-flex flex-wrap align-content-center justify-content-center p-3",style:t},r.a.createElement("p",{className:"g-card-title text-white"},e.title),r.a.createElement("p",{className:"g-card-sub-title text-white mb-4"},e.subTitle),r.a.createElement("a",{href:e.link,target:"_blank",className:"btn btn-primary",rel:"noopener noreferrer"},"View Website"))};var _=function(e){var t=Object(n.useState)(!1),a=Object(f.a)(t,2),l=a[0],o=a[1];return r.a.createElement(E.CSSTransitionGroup,{transitionName:"g-card-info",transitionEnterTimeout:500,transitionLeaveTimeout:300},r.a.createElement(Z.BrowserView,null,r.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)},onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)}},r.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),l&&r.a.createElement(R,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))),r.a.createElement(Z.MobileView,null,r.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},r.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&r.a.createElement(R,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))))},Y=a(70),B=a.n(Y),F=a(71),P=a.n(F),z=a(72),J=a.n(z),V=a(73),Q=a.n(V),X=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={items:[{id:0,title:"A website should be bold and proud",subTitle:"Partners Bar and Nightclub is a long-lasting staple in New Haven nightlife and the LGBTQ Community.",imgSrc:J.a,link:"https://www.partnersnewhaven.com",selected:!1},{id:1,title:"Responsive UI keeps the world turning",subTitle:"Satisfying many users of the Yale MFA-DUO, CAS-SSO and NetID Management Applications.",imgSrc:P.a,link:"https://veritas.its.yale.edu/netid/",selected:!1},{id:2,title:"Bob's Premium Rewards Program",subTitle:"A Bob's Store membership program loaded with exclusive benefits and rewards built under Clarus Commerce.",imgSrc:B.a,link:"https://www.bestofbobspremium.com/",selected:!1},{id:3,title:"Fresh shine, fresh pup, fresh site to go",subTitle:"Buggy Car Wash and Barking Bath is the all-in-one spot for your car and dog maintenance.",imgSrc:Q.a,link:"https://buggycarwash.com",selected:!1}]},e.handleCardClick=function(t,a){var n=Object(D.a)(e.state.items);n[t].selected=!n[t].selected,n.forEach((function(e){e.id!==t&&(e.selected=!1)})),e.setState({items:n})},e.makeItems=function(t){return t.map((function(t){return r.a.createElement(_,{item:t,click:function(a){return e.handleCardClick(t.id,a)},key:t.id})}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{fluid:!0},r.a.createElement(A.a,{className:"justify-content-around text-center"},r.a.createElement(G.a,{queries:{small:"(max-width: 767px)",medium:"(min-width: 768px) and (max-width: 1199px)",large:"(min-width: 1200px) and (max-width: 2006px)",xlarge:"(min-width: 2007px)"}},(function(t){return r.a.createElement("div",null,t.small&&r.a.createElement(W.Carousel,{autoplay:!0,infiniteLoop:!0},e.makeItems(e.state.items)),t.medium&&r.a.createElement(W.Carousel,{autoplay:!0,infiniteLoop:!0,centerMode:!0,centerSlidePercentage:50},e.makeItems(e.state.items)),t.large&&r.a.createElement(W.Carousel,{autoplay:!0,infiniteLoop:!0,centerMode:!0,centerSlidePercentage:33.33},e.makeItems(e.state.items)),t.xlarge&&r.a.createElement(W.Carousel,{infiniteLoop:!0,centerMode:!0,centerSlidePercentage:33.33},e.makeItems(e.state.items)))}))))}}]),a}(r.a.Component);var U=function(e){return r.a.createElement("div",null,r.a.createElement(O,{title:e.title,subTitle:e.subTitle,text:e.text}),r.a.createElement(X,null))};var H=function(e){return r.a.createElement(h.a,{fluid:!0},r.a.createElement(A.a,{className:"justify-content-center"},r.a.createElement(I.a,{md:8},e.children)))};var K=function(e){return r.a.createElement("div",null,r.a.createElement(O,{title:e.title}),r.a.createElement(H,null,r.a.createElement("div",{className:"d-flex flex-column-reverse flex-xl-row justify-content-xl-between"},r.a.createElement("div",null,r.a.createElement("p",{className:"lead"},"I am a regular guy focused on making things pretty and writing clean, readable code. With an education and background in digital design, I understand the entire process of creating quality web applications from conception to completion. In the past, I\u2019ve worked on a variety of web projects and gained invaluable experiences through daily operations within Information Technology and Creative."),r.a.createElement("p",null,"Outside of the office, I tend to be the fun-loving adventurous type, always seeking new sites and taking on new types of challenges. I like to spend my time cooking, gardening, drawing, weightlifting, running, and mountain biking. I love to stay busy and on the move, both in and out of the workplace.")),r.a.createElement("div",{className:"d-flex justify-content-center justify-content-xl-end"},e.about.images.map((function(e){var t=e.id,a=e.src,n=e.title,l=e.description;return r.a.createElement("img",{key:t,src:a,title:n,alt:l,className:"about-img border-gold mb-5 ml-0 ml-xl-5 mb-xl-0"})}))))))};var q=function(e){return r.a.createElement("div",null,r.a.createElement(O,{title:e.title}),r.a.createElement(H,null,e.workflow.images.map((function(e){var t=e.id,a=e.src,n=e.title,l=e.description;return r.a.createElement("img",{key:t,src:a,title:n,alt:l,className:"workflow-img d-inline-block border-gold m-2 mb-5"})})),r.a.createElement("p",{className:"lead"},"My workflow has been, is and will always be a constant work-in-progress. As I learn and evolve as a developer, I strive to incorporate the new tips, tools, methods and applications I discover that provide greater efficiency to my performance. I've listed out the main components that are typically involved in my everyday workflow, such as equipment, development tools and productivity applications as well as links to where to find each product for purchase."),r.a.createElement("h2",null,"Equipment"),r.a.createElement("ul",null,r.a.createElement("li",null,"I use a ",r.a.createElement("a",{href:"https://www.dell.com/en-us/shop/cty/pdp/spd/xps-15-9500-laptop/xn9500cto212s",target:"_blank",rel:"noopener noreferrer"},"Dell XPS 15 9500 Touch")," with i9 Processor, 3TB of internal storage and 64GB of installed RAM, running on ",r.a.createElement("a",{href:"https://www.microsoft.com/en-us/p/windows-10-pro/",target:"_blank",rel:"noopener noreferrer"},"Windows 10 Pro"),". "),r.a.createElement("li",null,"My screen extends with the ",r.a.createElement("a",{href:"https://www.lg.com/us/monitors/lg-34wn80c-b-ultrawide-monitor",target:"_blank",rel:"noopener noreferrer"},"LG 34WN80C-B 34 Inch UltraWide\u2122")," as an external monitor. "),r.a.createElement("li",null,"I test iOS with the ",r.a.createElement("a",{href:"https://support.apple.com/kb/sp583?locale=en_US",target:"_blank",rel:"noopener noreferrer"},"Mac Book Pro (13-inch, Mid 2010)"),", ",r.a.createElement("a",{href:"https://www.apple.com/ipad-10.2/",target:"_blank",rel:"noopener noreferrer"},"iPad (10.2-inch)"),", and ",r.a.createElement("a",{href:"https://www.apple.com/shop/refurbished/iphone/iphone-xs-max",target:"_blank",rel:"noopener noreferrer"},"iPhone XS Max.")),r.a.createElement("li",null,"I key with the ",r.a.createElement("a",{href:"https://www.corsair.com/us/en/Categories/Products/Gaming-Keyboards/Wireless-Keyboards/K63-Wireless-Mechanical-Gaming-Keyboard-and-Gaming-Lapboard-Combo-%E2%80%94-Blue-LED-%E2%80%94-CHERRY%C2%AE-MX-Red/p/CH-9515031-NA",target:"_blank",rel:"noopener noreferrer"},"Corsair K63 Wireless Mechanical Gaming Keyboard and Gaming Lapboard Combo \u2013 Blue LED \u2013 Cherry MX Red"),"."),r.a.createElement("li",null,"I scroll with the ",r.a.createElement("a",{href:"https://www.jellycomb.com/collections/mice/products/mv045-ergonomic-mouse",target:"_blank",rel:"noopener noreferrer"},"Jelly Comb MV045 Ergonomic Mouse"),"."),r.a.createElement("li",null,"I prefer to use the ",r.a.createElement("a",{href:"https://www.logitech.com/en-us/product/hd-webcam-c615",target:"_blank",rel:"noopener noreferrer"},"Logitech HD Webcam C615")," over the built-in webcam."),r.a.createElement("li",null,"I use the ",r.a.createElement("a",{href:"https://www.amazon.com/Neewer-Advanced-Multiple-3200-5600K-Included/dp/B07ZF5V9LZ/ref=pd_lpo_421_t_2/133-6234101-5304966?_encoding=UTF8&pd_rd_i=B07ZF5V9LZ&pd_rd_r=c0d42005-dff6-46d4-b8ba-fa108a444eb3&pd_rd_w=xSkbb&pd_rd_wg=JxjL6&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=Z3V5Y3E66JTGETXANDSB&psc=1&refRID=Z3V5Y3E66JTGETXANDSB",target:"_blank",rel:"noopener noreferrer"},"Neewer Advanced 18-inch LED Ring Light")," when I need optimum lighting."),r.a.createElement("li",null,"For noise proofing, I listen with either the ",r.a.createElement("a",{href:"https://www.sony.com/electronics/headband-headphones/wh-1000xm4",target:"_blank",rel:"noopener noreferrer"},"Sony WH-100XM4 Wireless")," or the ",r.a.createElement("a",{href:"https://www.bose.com/en_us/support/products/bose_headphones_support/bose_around_ear_headphones_support/quietcomfort-25-acoustic-noise-cancelling-headphones-apple-devices.html",target:"_blank",rel:"noopener noreferrer"},"Bose QuietComfort 25"),"."),r.a.createElement("li",null,"I print with the ",r.a.createElement("a",{href:"https://www.usa.canon.com/internet/portal/us/home/products/details/printers/inkjet-single-function/ip-series/ip8720",target:"_blank",rel:"noopener noreferrer"},"Canon Pixma iP8720"),".")),r.a.createElement("h2",null,"Development Tools"),r.a.createElement("ul",null,r.a.createElement("li",null,"I back up my work to ",r.a.createElement("a",{href:"https://www.github.com/",target:"_blank",rel:"noopener noreferrer"},"Github")," and every file to ",r.a.createElement("a",{href:"https://drive.google.com/",target:"_blank",rel:"noopener noreferrer"},"Google Drive")," and ",r.a.createElement("a",{href:"https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage",target:"_blank",rel:"noopener noreferrer"},"OneDrive"),". "),r.a.createElement("li",null,"As per work, I use ",r.a.createElement("a",{href:"https://visualstudio.microsoft.com/",target:"_blank",rel:"noopener noreferrer"},"Visual Studio")," for my IDE."),r.a.createElement("li",null,"As per personal, I use ",r.a.createElement("a",{href:"https://atom.io/",target:"_blank",rel:"noopener noreferrer"},"Atom")," as my text editor, with ",r.a.createElement("a",{href:"https://atom.io/packages/vim-mode-plus",target:"_blank",rel:"noopener noreferrer"},"Vim mode")," installed."),r.a.createElement("li",null,"My terminal of choice is ",r.a.createElement("a",{href:"https://docs.microsoft.com/en-us/powershell/",target:"_blank",rel:"noopener noreferrer"},"PowerShell"),"."),r.a.createElement("li",null,"For FTP, I use ",r.a.createElement("a",{href:"https://filezilla-project.org/",target:"_blank",rel:"noopener noreferrer"},"FileZilla"),"."),r.a.createElement("li",null,"For local testing, I use ",r.a.createElement("a",{href:"https://www.apachefriends.org/index.html",target:"_blank",rel:"noopener noreferrer"},"XAMPP"),"."),r.a.createElement("li",null,"I debug with ",r.a.createElement("a",{href:"https://developers.google.com/web/tools/chrome-devtools",target:"_blank",rel:"noopener noreferrer"},"Dev Tools")," and ",r.a.createElement("a",{href:"https://www.mozilla.org/en-US/firefox/developer/",target:"_blank",rel:"noopener noreferrer"},"Firefox Developer"),"."),r.a.createElement("li",null,"I check for accessibility with ",r.a.createElement("a",{href:"https://wave.webaim.org/",target:"_blank",rel:"noopener noreferrer"},"WAVE"),", ",r.a.createElement("a",{href:"https://www.nvaccess.org/",target:"_blank",rel:"noopener noreferrer"},"NVDA"),", and ",r.a.createElement("a",{href:"https://developers.google.com/web/tools/lighthouse",target:"_blank",rel:"noopener noreferrer"},"Lighthouse")),r.a.createElement("li",null,"My favorite CSS framework is ",r.a.createElement("a",{href:"https://getbootstrap.com/",target:"_blank",rel:"noopener noreferrer"},"Bootstrap"),"."),r.a.createElement("li",null,"My favorite JavaScript framework is ",r.a.createElement("a",{href:"https://jquery.com/",target:"_blank",rel:"noopener noreferrer"},"jQuery"),"."),r.a.createElement("li",null,"My favorite JavaScript library is ",r.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React"),"."),r.a.createElement("li",null,"I use ",r.a.createElement("a",{href:"https://classic.yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"},"Yarn")," and ",r.a.createElement("a",{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},"Npm")," for package management. "),r.a.createElement("li",null,"I use ",r.a.createElement("a",{href:"https://gulpjs.com/",target:"_blank",rel:"noopener noreferrer"},"Gulp")," to minify, uglify, and concatenate files."),r.a.createElement("li",null,"I style with ",r.a.createElement("a",{href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"},"Sass")," and ",r.a.createElement("a",{href:"http://lesscss.org/",target:"_blank",rel:"noopener noreferrer"},"Less"),"."),r.a.createElement("li",null,"I use ",r.a.createElement("a",{href:"https://www.browserstack.com/",target:"_blank",rel:"noopener noreferrer"},"BrowserStack")," to test browsers, operating systems and devices."),r.a.createElement("li",null,"When I hit a roadblock, I turn to ",r.a.createElement("a",{href:"https://stackoverflow.com/",target:"_blank",rel:"noopener noreferrer"},"Stack Overflow"),". ")),r.a.createElement("h2",null,"Productivity Apps"),r.a.createElement("ul",null,r.a.createElement("li",null,"I use ",r.a.createElement("a",{href:"https://www.nurgo-software.com/products/aquasnap",target:"_blank",rel:"noopener noreferrer"},"AquaSnap ")," as my window management tool."),r.a.createElement("li",null,"I design with ",r.a.createElement("a",{href:"https://www.adobe.com/products/photoshop.html",target:"_blank",rel:"noopener noreferrer"},"Photoshop"),", ",r.a.createElement("a",{href:"https://www.adobe.com/products/illustrator.html",target:"_blank",rel:"noopener noreferrer"},"Illustrator"),", and ",r.a.createElement("a",{href:"https://www.adobe.com/products/xd.html",target:"_blank",rel:"noopener noreferrer"},"XD"),"."),r.a.createElement("li",null,"For scheduling, I use ",r.a.createElement("a",{href:"https://calendar.google.com/",target:"_blank",rel:"noopener noreferrer"},"Google Calendar"),"."),r.a.createElement("li",null,"For general note-taking and to-dos, I prefer ",r.a.createElement("a",{href:"https://evernote.com/",target:"_blank",rel:"noopener noreferrer"},"Evernote"),"."),r.a.createElement("li",null,"For project tasks, I\u2019ve grown accustomed to ",r.a.createElement("a",{href:"https://github.com/features/project-management/",target:"_blank",rel:"noopener noreferrer"},"Git Projects"),", ",r.a.createElement("a",{href:"https://www.atlassian.com/software/jira",target:"_blank",rel:"noopener noreferrer"},"Jira")," and ",r.a.createElement("a",{href:"https://www.workfront.com/",target:"_blank",rel:"noopener noreferrer"},"Workfront"),"."),r.a.createElement("li",null,"I use ",r.a.createElement("a",{href:"https://outlook.live.com/",target:"_blank",rel:"noopener noreferrer"},"Outlook")," for my email client."),r.a.createElement("li",null,"I use ",r.a.createElement("a",{href:"https://justgetflux.com/",target:"_blank",rel:"noopener noreferrer"},"f.lux")," to protect my vision. "),r.a.createElement("li",null,"I spell-check with ",r.a.createElement("a",{href:"https://grammarly.com/",target:"_blank",rel:"noopener noreferrer"},"Grammarly"),"."))))},$=a(74),ee=a.n($),te=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",message:""},n}return Object(s.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),ee()({method:"POST",url:"/send",data:this.state}).then((function(e){"success"===e.data.status?(alert("Message Sent."),t.resetForm()):"fail"===e.data.status&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"name",value:this.state.name,onChange:this.onNameChange.bind(this)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("textarea",{className:"form-control",rows:"5",id:"message",value:this.state.message,onChange:this.onMessageChange.bind(this)})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),a}(r.a.Component),ae=a(75),ne=a.n(ae),re=a(76),le=a.n(re),oe=a(77),ie=a.n(oe),ce=a(78),se=a.n(ce),me=(a(129),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e,n;Object(c.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(n=t.call.apply(t,[this].concat(l))).state=(e={title:"Tom Hammer",subtitle:"Front-End Engineer and Digital Creator",siteTitle:n.title+" | "+n.subtitle},Object(i.a)(e,"siteTitle","TH | Front-End Engineer and Digital Creator"),Object(i.a)(e,"logo",{imgSrc:ne.a,title:n.siteTitle}),Object(i.a)(e,"headerLinks",[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Workflow",path:"/workflow"},{title:"Contact",path:"/contact"}]),Object(i.a)(e,"home",{title:"Creative, logical, and always learning.",subTitle:"Web stuff with a brighter future in mind!",text:"I drink coffee. I draw. I write clean code. I'm a front-end engineer and digital creator embracing new technologies so I can create awesome user experiences. Check out some of my work below!"}),Object(i.a)(e,"about",{images:[{id:0,src:le.a,title:"Tom and his nephew Bentley",description:"Who doesn't love a puppy pic?"}],title:"About Tom"}),Object(i.a)(e,"workflow",{images:[{id:0,src:ie.a,title:"Tom's Desk 1",description:"Working from home should be efficient."},{id:1,src:se.a,title:"Tom's Desk 2",description:"Working from home should be painless."}],title:"Tom's Workflow"}),Object(i.a)(e,"contact",{title:"Let's Chat"}),e),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title=this.state.siteTitle}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(h.a,{className:"main-container",fluid:!0},r.a.createElement(N,this.state),r.a.createElement(d.a,{path:"/",exact:!0,render:function(){return r.a.createElement(U,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),r.a.createElement(d.a,{path:"/about",render:function(){return r.a.createElement(K,{about:e.state.about,title:e.state.about.title})}}),r.a.createElement(d.a,{path:"/workflow",render:function(){return r.a.createElement(q,{workflow:e.state.workflow,title:e.state.workflow.title})}}),r.a.createElement(d.a,{path:"/contact",render:function(){return r.a.createElement(te,{title:e.state.contact.title})}})),r.a.createElement(S,null))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(130);o.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},70:function(e,t,a){e.exports=a.p+"static/media/bobs.f4d65053.jpg"},71:function(e,t,a){e.exports=a.p+"static/media/yale.af72c76e.jpg"},72:function(e,t,a){e.exports=a.p+"static/media/partners.c7ddb27c.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/buggy.ad17bbda.jpg"},75:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAArCAYAAADSZm7JAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTEwLTI4VDE4OjMzOjUwLTA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTEwLTI4VDIxOjQ5OjU3LTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMC0yOFQyMTo0OTo1Ny0wNDowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphOGZmY2FkNS02MGZjLTJlNDAtYWNmYS00NTQ1ODViMWQ0MDkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjYzAxMDQxNC02NzMwLThhNGYtYjMwMS03MmI4OTg4NzM3YTQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMGNlYzYxZi0wNTlhLWMzNDctOGE5Yi0zYzU3MmI3MzU2OTQiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwY2VjNjFmLTA1OWEtYzM0Ny04YTliLTNjNTcyYjczNTY5NCIgc3RFdnQ6d2hlbj0iMjAyMC0xMC0yOFQxODozMzo1MC0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NzFiMzhjMi02N2RkLTQxNDYtOGNiMC0yN2M2MDAwNDM3YTIiIHN0RXZ0OndoZW49IjIwMjAtMTAtMjhUMTg6MzM6NTAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YThmZmNhZDUtNjBmYy0yZTQwLWFjZmEtNDU0NTg1YjFkNDA5IiBzdEV2dDp3aGVuPSIyMDIwLTEwLTI4VDIxOjQ5OjU3LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cfXP4wAAAbxJREFUaN7tmsuRhCAQhk3BFEjBFCaFOe6VFEzBFDjt3Qi2yhRMwRRMwX25NV1UAw3KCDv/oQ9DNQ8/mvannWbbtgYmN0AAMAADsKqBfby//Vdrv2wj1nJ+APawnsCaXX4A9rCRAOuvBNZboX6GqcCciuljAn1W4tsBmB/YnfitvrEB7NcG4jdcAUyRBdYAbCZ+973NcPPkAKb3iZeAnxGCMJmBKYecWPbfOhew74knMnEtwOgJGEn7QtqnvznPAqaZBdYCzCUnFmYMfRSYHVV0R7oKgLWWnKDjdp5nUynAuKhaSdJsMgJLMROQE7NHcqyp0eaLqiFSbpQAbIhYv0mJNq6j5PiVCozmqZtgzZ0lQX7GjQE2Hri7XQ2sk6p7W1ZYJ8zERtgs3J3Skn6fsPHci8Ck5rDRVUMqFBiVE1pQK0vOYb63pLc0UhAwUbEw8Jz6TB22CI7plcAkcuLGJPhDOqxmpT8ITkQWpV/rXVJSLMx6l6ypWiGVE9mrFa56WGnAemGN7Gn1sNJlxcQUC5sY4fpKX41i5ASAWXJiShnj1YCZBIF9DBj+LwFgAAZgAAZgMAADMAADMACDfQKGgKgwxKVnAgAAAABJRU5ErkJggg=="},76:function(e,t,a){e.exports=a.p+"static/media/about-image.ff5d0bcf.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/desk1.bb037cb2.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/desk2.560307f4.jpg"},81:function(e,t,a){e.exports=a(131)},86:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.87e60cc4.chunk.js.map