(this.webpackJsonptjhammer845=this.webpackJsonptjhammer845||[]).push([[0],{102:function(e,t,r){},104:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(14),i=r.n(s),c=(r(70),r(23)),o=r(9),l=r(13),d=r(12),h=r(11),b=r(21),j=r(7),m=r(18),p=r(39),u=r(35),g=r(65),f=r(10),x=r(37),O=r(1),w=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(O.jsx)("h4",{title:this.props.subtitle,className:"d-block d-md-inline-block m-0",children:Object(O.jsx)(x.CSSTransitionGroup,{transitionName:"toggle",transitionEnterTimeout:600,transitionLeaveTimeout:600,className:"toggle-base font-italic",children:this.props.hidden?null:Object(O.jsx)("span",{children:this.props.children})})})}}]),r}(a.a.Component),k=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).onClick=n.onClick.bind(Object(f.a)(n)),n.state={hidden:!0},n}return Object(l.a)(r,[{key:"onClick",value:function(){this.setState((function(e,t){return{hidden:!e.hidden}}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"d-block d-md-flex align-content-center",children:[Object(O.jsxs)("h1",{onClick:this.onClick,title:this.props.title,className:"d-inline-block navbar-title m-0",children:[Object(O.jsx)("img",{className:"logo",src:this.props.logo.imgSrc,alt:this.props.logo.imgSrc}),this.props.title]}),Object(O.jsx)(w,{hidden:this.state.hidden,children:this.props.subTitle})]})}}]),r}(a.a.Component);var v=function(e){return Object(O.jsxs)(u.a,{className:"sticky-inner bg-white border-bottom",expand:"lg",children:[Object(O.jsx)(u.a.Brand,{className:"font-weight-bold",children:Object(O.jsx)(k,Object(c.a)({},e))}),Object(O.jsx)(u.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(O.jsx)(u.a.Collapse,{id:"navbar-toggle",children:Object(O.jsxs)(g.a,{className:"ml-auto",children:[Object(O.jsx)(b.b,{className:"nav-link text-uppercase p-0",to:"/",children:"Home"}),Object(O.jsx)(b.b,{className:"nav-link text-uppercase p-0 pl-lg-5",to:"/about",children:"About"}),Object(O.jsx)(b.b,{className:"nav-link text-uppercase p-0 pl-lg-5",to:"/workflow",children:"Workflow"}),Object(O.jsx)(b.b,{className:"nav-link text-uppercase p-0 pl-lg-5",to:"/contact",children:"Let\u2019s Chat"})]})})]})},y=function(e){var t=Object(n.useState)(!1),r=Object(p.a)(t,2),a=r[0],s=r[1],i=Object(n.useRef)(null),o=function(){i&&i.current&&s(i.current.getBoundingClientRect().top<=0)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",(function(){return o}))}}),[]),Object(O.jsx)(n.Fragment,{children:Object(O.jsx)("div",{className:"sticky-wrapper".concat(a?" sticky":""),ref:i,children:Object(O.jsx)(v,Object(c.a)({},e))})})},N=r(19),A=r(27),I=r(41),M=r(31),C=r(25),S=r(22);var T=function(){return Object(O.jsx)("footer",{className:"mt-5 fixed-bottom pl-3 pr-3 border-top",children:Object(O.jsx)(m.a,{fluid:!0,children:Object(O.jsxs)(N.a,{className:"justify-content-md-between p-3",children:[Object(O.jsxs)(A.a,{className:"d-flex justify-content-center justify-content-md-start pb-2 pb-md-0",md:3,sm:12,children:[Object(O.jsx)(I.a,{target:"_blank",className:"pr-3",href:"https://github.com/tjhammer845/",children:Object(O.jsx)(S.a,{className:"display-5",icon:M.a})}),Object(O.jsx)(I.a,{target:"_blank",className:"pr-3",href:"https://www.linkedin.com/in/thomasjhammer/",children:Object(O.jsx)(S.a,{className:"display-5",icon:M.b})}),Object(O.jsx)(I.a,{target:"_blank",className:"pr-3",href:"https://twitter.com/tjhammer845",children:Object(O.jsx)(S.a,{className:"display-5",icon:M.c})}),Object(O.jsx)(b.b,{target:"_blank",className:"p-0",to:"./pdf/TH-CV.pdf",children:Object(O.jsx)(S.a,{className:"display-5",icon:C.b})})]}),Object(O.jsx)(A.a,{className:"d-flex justify-content-center justify-content-md-end p-0",md:6,sm:12,children:Object(O.jsxs)("font",{className:"text-center align-self-center text-sm-left color-gold",children:["\xa9 ",(new Date).getFullYear()," Tom Hammer. ",Object(O.jsx)("span",{className:"text-nowrap",children:"All Rights Reserved."})]})})]})})})},D=r(60);var G=function(e){return Object(O.jsx)(D.a,{className:"jumbotron-fluid p-0 bg-transparent",children:Object(O.jsxs)(m.a,{fluid:!0,children:[Object(O.jsx)(N.a,{className:"justify-content-center pt-5",children:Object(O.jsxs)(A.a,{md:10,sm:12,className:"text-center",children:[e.title&&Object(O.jsx)("h2",{className:"display-1 font-weight-bolder mt-5",children:e.title}),e.subTitle&&Object(O.jsx)("h3",{className:"display-2 font-weight-light mt-2",children:e.subTitle})]})}),Object(O.jsx)(N.a,{className:"justify-content-center pb-4",children:Object(O.jsxs)(A.a,{lg:5,md:7,sm:12,className:"text-center",children:[e.text&&Object(O.jsx)("p",{className:"display-3 font-weight-light",children:e.text}),Object(O.jsxs)("h2",{className:"display-4",children:[Object(O.jsx)(S.a,{className:"display-4 p-2 color-gold",icon:C.d}),Object(O.jsx)(S.a,{className:"display-4 p-2 color-gold",icon:C.a}),Object(O.jsx)(S.a,{className:"display-4 p-2 color-gold",icon:C.c})]})]})})]})})},E=r(29),R=(r(92),r(34)),W=r(61),Z=r(47),L=r(48);var _=function(e){var t=Object(L.b)({opacity:1,from:{opacity:0}});return Object(O.jsxs)(L.a.div,{className:"g-card-info d-flex flex-wrap align-content-center justify-content-center p-3",style:t,children:[Object(O.jsx)("p",{className:"g-card-title text-white",children:e.title}),Object(O.jsx)("p",{className:"g-card-sub-title text-white mb-4",children:e.subTitle}),Object(O.jsx)("a",{href:e.link,target:"_blank",className:"btn btn-primary",rel:"noopener noreferrer",children:"View Website"})]})};var F=function(e){var t=Object(n.useState)(!1),r=Object(p.a)(t,2),a=r[0],s=r[1];return Object(O.jsxs)(x.CSSTransitionGroup,{transitionName:"g-card-info",transitionEnterTimeout:500,transitionLeaveTimeout:300,children:[Object(O.jsx)(Z.BrowserView,{children:Object(O.jsxs)("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)},onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},children:[Object(O.jsx)("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),a&&Object(O.jsx)(_,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})}),Object(O.jsx)(Z.MobileView,{children:Object(O.jsxs)("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)},children:[Object(O.jsx)("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(O.jsx)(_,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})})]})},Y=r.p+"static/media/vivaz.fce809bf.jpg",B=r.p+"static/media/bobs.9113a11a.jpg",P=r.p+"static/media/yale.65da0100.jpg",z=r.p+"static/media/partners.008dea12.jpg",V=r.p+"static/media/buggy.41f23c03.jpg",J=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={items:[{id:0,title:"Gourmet Mexican food from the heart.",subTitle:"Vivaz Cantina is a Mexican restaurant in New Haven, CT that takes pride in its authentic dishes and crafty cocktails.",imgSrc:Y,link:"https://test.vivaznewhaven.com",selected:!1},{id:1,title:"A website should be bold and proud",subTitle:"Partners Bar and Nightclub is a long-lasting staple in New Haven nightlife and the LGBTQ Community.",imgSrc:z,link:"https://www.partnersnewhaven.com",selected:!1},{id:2,title:"Responsive UI keeps the world turning",subTitle:"Satisfying many users of the Yale MFA-DUO, CAS-SSO and NetID Management Applications.",imgSrc:P,link:"https://veritas.its.yale.edu/netid/",selected:!1},{id:3,title:"Bob's Premium Rewards Program",subTitle:"A Bob's Store membership program loaded with exclusive benefits and rewards built under Clarus Commerce.",imgSrc:B,link:"https://www.bestofbobspremium.com/",selected:!1},{id:4,title:"Fresh shine, fresh pup, fresh site to go",subTitle:"Buggy Car Wash and Barking Bath is the all-in-one spot for your car and dog maintenance.",imgSrc:V,link:"https://buggycarwash.com",selected:!1}]},e.handleCardClick=function(t,r){var n=Object(E.a)(e.state.items);n[t].selected=!n[t].selected,n.forEach((function(e){e.id!==t&&(e.selected=!1)})),e.setState({items:n})},e.makeItems=function(t){return t.map((function(t){return Object(O.jsx)(F,{item:t,click:function(r){return e.handleCardClick(t.id,r)}},t.id)}))},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return Object(O.jsx)(m.a,{fluid:!0,children:Object(O.jsx)(N.a,{className:"justify-content-around text-center",children:Object(O.jsx)(W.a,{queries:{small:"(max-width: 767px)",medium:"(min-width: 768px) and (max-width: 1199px)",large:"(min-width: 1200px) and (max-width: 2006px)",xlarge:"(min-width: 2007px)"},children:function(t){return Object(O.jsxs)("div",{children:[t.small&&Object(O.jsx)(R.Carousel,{autoplay:!0,infiniteLoop:!0,children:e.makeItems(e.state.items)}),t.medium&&Object(O.jsx)(R.Carousel,{autoplay:!0,infiniteLoop:!0,centerMode:!0,centerSlidePercentage:50,children:e.makeItems(e.state.items)}),t.large&&Object(O.jsx)(R.Carousel,{autoplay:!0,infiniteLoop:!0,centerMode:!0,centerSlidePercentage:33.33,children:e.makeItems(e.state.items)}),t.xlarge&&Object(O.jsx)(R.Carousel,{infiniteLoop:!0,centerMode:!0,centerSlidePercentage:33.33,children:e.makeItems(e.state.items)})]})}})})})}}]),r}(a.a.Component);var Q=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)(G,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(O.jsx)(J,{})]})};var X=function(e){return Object(O.jsx)(m.a,{fluid:!0,children:Object(O.jsx)(N.a,{className:"justify-content-center",children:Object(O.jsx)(A.a,{md:8,children:e.children})})})};var U=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)(G,{title:e.title}),Object(O.jsx)(X,{children:Object(O.jsxs)("div",{className:"d-flex flex-column-reverse flex-xl-row justify-content-xl-between",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:"lead",children:"I am a front-end engineer and digital creator focused on clean and modern designs, user-friendly experiences, and writing maintainable and readable code. With a background in web design, I understand the entire process of creating quality websites and content from conception to completion. In the past, I\u2019ve worked on a wide variety of web projects and gained invaluable experience as both a developer and designer. Since the beginning of the Covid pandemic, I have spent my time building and improving my digital startup, acquiring clients, and managing/working on the projects for them."}),Object(O.jsx)("p",{children:"Outside of the workplace, I tend to be the fun-loving adventurous type, always seeking new sites and taking on new types of challenges. I like to spend my time cooking, gardening, drawing, weightlifting, running, and mountain biking. I love to stay busy and on the move, both in and out of the workplace."})]}),Object(O.jsx)("div",{className:"d-flex justify-content-center justify-content-xl-end",children:e.about.images.map((function(e){var t=e.id,r=e.src,n=e.title,a=e.description;return Object(O.jsx)("img",{src:r,title:n,alt:a,className:"about-img border-gold mb-5 ml-0 ml-xl-5 mb-xl-0"},t)}))})]})})]})};var H=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)(G,{title:e.title}),Object(O.jsxs)(X,{children:[Object(O.jsx)("div",{className:"d-flex justify-content-between",children:e.workflow.images.map((function(e){var t=e.id,r=e.src,n=e.title,a=e.description;return Object(O.jsx)("img",{src:r,title:n,alt:a,className:"workflow-img d-inline-block border-gold h-100 m-0 mb-5"},t)}))}),Object(O.jsx)("p",{className:"lead mb-5",children:"My workflow has been, is and will always be a constant work-in-progress. As I learn and evolve as a developer, I try my best to incorporate the new tips, methods and tools I discover that improve my performance. I've listed out the main components involved in my daily workflow, such as equipment, development tools and productivity applications as well as links to purchase or download. Feel free to reach out to me with any questions!"}),Object(O.jsx)("h2",{children:"Equipment"}),Object(O.jsxs)("ul",{class:"mb-5",children:[Object(O.jsxs)("li",{children:["I use a ",Object(O.jsx)("a",{href:"https://www.dell.com/en-us/shop/cty/pdp/spd/xps-15-9500-laptop/xn9500cto212s",target:"_blank",rel:"noopener noreferrer",children:"Dell XPS 15 9500 Touch"})," with i9 Processor, 3TB of internal storage and 64GB of installed RAM, running on ",Object(O.jsx)("a",{href:"https://www.microsoft.com/en-us/p/windows-10-pro/",target:"_blank",rel:"noopener noreferrer",children:"Windows 10 Pro"}),". "]}),Object(O.jsxs)("li",{children:["My screen extends with the ",Object(O.jsx)("a",{href:"https://www.lg.com/us/monitors/lg-34wn80c-b-ultrawide-monitor",target:"_blank",rel:"noopener noreferrer",children:"LG 34WN80C-B 34 Inch UltraWide\u2122"})," as an external monitor. "]}),Object(O.jsxs)("li",{children:["I test iOS with the ",Object(O.jsx)("a",{href:"https://support.apple.com/kb/sp583?locale=en_US",target:"_blank",rel:"noopener noreferrer",children:"Mac Book Pro (13-inch, Mid 2010)"}),", ",Object(O.jsx)("a",{href:"https://www.apple.com/ipad-10.2/",target:"_blank",rel:"noopener noreferrer",children:"iPad (10.2-inch)"}),", and ",Object(O.jsx)("a",{href:"https://www.apple.com/shop/refurbished/iphone/iphone-xs-max",target:"_blank",rel:"noopener noreferrer",children:"iPhone XS Max."})]}),Object(O.jsxs)("li",{children:["I key with the ",Object(O.jsx)("a",{href:"https://www.corsair.com/us/en/Categories/Products/Gaming-Keyboards/Wireless-Keyboards/K63-Wireless-Mechanical-Gaming-Keyboard-and-Gaming-Lapboard-Combo-%E2%80%94-Blue-LED-%E2%80%94-CHERRY%C2%AE-MX-Red/p/CH-9515031-NA",target:"_blank",rel:"noopener noreferrer",children:"Corsair K63 Wireless Mechanical Gaming Keyboard and Gaming Lapboard Combo \u2013 Blue LED \u2013 Cherry MX Red"}),"."]}),Object(O.jsxs)("li",{children:["I scroll with the ",Object(O.jsx)("a",{href:"https://www.jellycomb.com/collections/mice/products/mv045-ergonomic-mouse",target:"_blank",rel:"noopener noreferrer",children:"Jelly Comb MV045 Ergonomic Mouse"}),"."]}),Object(O.jsxs)("li",{children:["I prefer to use the ",Object(O.jsx)("a",{href:"https://www.logitech.com/en-us/product/hd-webcam-c615",target:"_blank",rel:"noopener noreferrer",children:"Logitech HD Webcam C615"})," over the built-in webcam."]}),Object(O.jsxs)("li",{children:["I use the ",Object(O.jsx)("a",{href:"https://www.amazon.com/Neewer-Advanced-Multiple-3200-5600K-Included/dp/B07ZF5V9LZ/ref=pd_lpo_421_t_2/133-6234101-5304966?_encoding=UTF8&pd_rd_i=B07ZF5V9LZ&pd_rd_r=c0d42005-dff6-46d4-b8ba-fa108a444eb3&pd_rd_w=xSkbb&pd_rd_wg=JxjL6&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=Z3V5Y3E66JTGETXANDSB&psc=1&refRID=Z3V5Y3E66JTGETXANDSB",target:"_blank",rel:"noopener noreferrer",children:"Neewer Advanced 18-inch LED Ring Light"})," when I need optimum lighting."]}),Object(O.jsxs)("li",{children:["For noise proofing, I listen with either the ",Object(O.jsx)("a",{href:"https://www.sony.com/electronics/headband-headphones/wh-1000xm4",target:"_blank",rel:"noopener noreferrer",children:"Sony WH-100XM4 Wireless"})," or the ",Object(O.jsx)("a",{href:"https://www.bose.com/en_us/support/products/bose_headphones_support/bose_around_ear_headphones_support/quietcomfort-25-acoustic-noise-cancelling-headphones-apple-devices.html",target:"_blank",rel:"noopener noreferrer",children:"Bose QuietComfort 25"}),"."]}),Object(O.jsxs)("li",{children:["I print with the ",Object(O.jsx)("a",{href:"https://www.usa.canon.com/internet/portal/us/home/products/details/printers/inkjet-single-function/ip-series/ip8720",target:"_blank",rel:"noopener noreferrer",children:"Canon Pixma iP8720"}),"."]})]}),Object(O.jsx)("h2",{children:"Development Tools"}),Object(O.jsxs)("ul",{class:"mb-5",children:[Object(O.jsxs)("li",{children:["I back up my work to ",Object(O.jsx)("a",{href:"https://www.github.com/",target:"_blank",rel:"noopener noreferrer",children:"Github"})," and every file to ",Object(O.jsx)("a",{href:"https://drive.google.com/",target:"_blank",rel:"noopener noreferrer",children:"Google Drive"})," and ",Object(O.jsx)("a",{href:"https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage",target:"_blank",rel:"noopener noreferrer",children:"OneDrive"}),". "]}),Object(O.jsxs)("li",{children:["As per work, I use ",Object(O.jsx)("a",{href:"https://visualstudio.microsoft.com/",target:"_blank",rel:"noopener noreferrer",children:"Visual Studio"})," for my IDE."]}),Object(O.jsxs)("li",{children:["As per personal, I use ",Object(O.jsx)("a",{href:"https://atom.io/",target:"_blank",rel:"noopener noreferrer",children:"Atom"})," as my text editor, with ",Object(O.jsx)("a",{href:"https://atom.io/packages/vim-mode-plus",target:"_blank",rel:"noopener noreferrer",children:"Vim mode"})," installed."]}),Object(O.jsxs)("li",{children:["My terminal of choice is ",Object(O.jsx)("a",{href:"https://docs.microsoft.com/en-us/powershell/",target:"_blank",rel:"noopener noreferrer",children:"PowerShell"}),"."]}),Object(O.jsxs)("li",{children:["For FTP, I use ",Object(O.jsx)("a",{href:"https://filezilla-project.org/",target:"_blank",rel:"noopener noreferrer",children:"FileZilla"}),"."]}),Object(O.jsxs)("li",{children:["For local testing, I use ",Object(O.jsx)("a",{href:"https://www.apachefriends.org/index.html",target:"_blank",rel:"noopener noreferrer",children:"XAMPP"}),"."]}),Object(O.jsxs)("li",{children:["I debug with ",Object(O.jsx)("a",{href:"https://developers.google.com/web/tools/chrome-devtools",target:"_blank",rel:"noopener noreferrer",children:"Dev Tools"})," and ",Object(O.jsx)("a",{href:"https://www.mozilla.org/en-US/firefox/developer/",target:"_blank",rel:"noopener noreferrer",children:"Firefox Developer"}),"."]}),Object(O.jsxs)("li",{children:["I check for accessibility with ",Object(O.jsx)("a",{href:"https://wave.webaim.org/",target:"_blank",rel:"noopener noreferrer",children:"WAVE"}),", ",Object(O.jsx)("a",{href:"https://www.nvaccess.org/",target:"_blank",rel:"noopener noreferrer",children:"NVDA"}),", and ",Object(O.jsx)("a",{href:"https://developers.google.com/web/tools/lighthouse",target:"_blank",rel:"noopener noreferrer",children:"Lighthouse"}),"."]}),Object(O.jsxs)("li",{children:["My favorite CSS framework is ",Object(O.jsx)("a",{href:"https://getbootstrap.com/",target:"_blank",rel:"noopener noreferrer",children:"Bootstrap"}),"."]}),Object(O.jsxs)("li",{children:["My favorite JavaScript libraries are ",Object(O.jsx)("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer",children:"React"})," and ",Object(O.jsx)("a",{href:"https://jquery.com/",target:"_blank",rel:"noopener noreferrer",children:"jQuery"}),"."]}),Object(O.jsxs)("li",{children:["My favorite JavaScript framework is ",Object(O.jsx)("a",{href:"https://www.gatsbyjs.com/",target:"_blank",rel:"noopener noreferrer",children:"Gatsby"}),"."]}),Object(O.jsxs)("li",{children:["My query language of choice is ",Object(O.jsx)("a",{href:"https://graphql.com/",target:"_blank",rel:"noopener noreferrer",children:"GraphQL"}),"."]}),Object(O.jsxs)("li",{children:["I use ",Object(O.jsx)("a",{href:"https://classic.yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer",children:"Yarn"})," and ",Object(O.jsx)("a",{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer",children:"Npm"})," for package management. "]}),Object(O.jsxs)("li",{children:["I use ",Object(O.jsx)("a",{href:"https://gulpjs.com/",target:"_blank",rel:"noopener noreferrer",children:"Gulp"})," to minify, uglify, and concatenate files."]}),Object(O.jsxs)("li",{children:["I style with ",Object(O.jsx)("a",{href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer",children:"Sass"})," and ",Object(O.jsx)("a",{href:"http://lesscss.org/",target:"_blank",rel:"noopener noreferrer",children:"Less"}),"."]}),Object(O.jsxs)("li",{children:["I use ",Object(O.jsx)("a",{href:"https://www.browserstack.com/",target:"_blank",rel:"noopener noreferrer",children:"BrowserStack"})," to test browsers, operating systems and devices."]}),Object(O.jsxs)("li",{children:["When I hit a roadblock, I turn to ",Object(O.jsx)("a",{href:"https://stackoverflow.com/",target:"_blank",rel:"noopener noreferrer",children:"Stack Overflow"}),". "]})]}),Object(O.jsx)("h2",{children:"Productivity Apps"}),Object(O.jsxs)("ul",{class:"mb-5",children:[Object(O.jsxs)("li",{children:["I use ",Object(O.jsx)("a",{href:"https://www.nurgo-software.com/products/aquasnap",target:"_blank",rel:"noopener noreferrer",children:"AquaSnap "})," as my window management tool."]}),Object(O.jsxs)("li",{children:["I design with ",Object(O.jsx)("a",{href:"https://www.adobe.com/products/photoshop.html",target:"_blank",rel:"noopener noreferrer",children:"Photoshop"}),", ",Object(O.jsx)("a",{href:"https://www.adobe.com/products/illustrator.html",target:"_blank",rel:"noopener noreferrer",children:"Illustrator"}),", and ",Object(O.jsx)("a",{href:"https://www.adobe.com/products/xd.html",target:"_blank",rel:"noopener noreferrer",children:"XD"}),"."]}),Object(O.jsxs)("li",{children:["For scheduling, I use ",Object(O.jsx)("a",{href:"https://calendar.google.com/",target:"_blank",rel:"noopener noreferrer",children:"Google Calendar"}),"."]}),Object(O.jsxs)("li",{children:["For general note-taking and to-dos, I prefer ",Object(O.jsx)("a",{href:"https://evernote.com/",target:"_blank",rel:"noopener noreferrer",children:"Evernote"}),"."]}),Object(O.jsxs)("li",{children:["For project tasks, I\u2019ve grown accustomed to ",Object(O.jsx)("a",{href:"https://github.com/features/project-management/",target:"_blank",rel:"noopener noreferrer",children:"Git Projects"}),", ",Object(O.jsx)("a",{href:"https://www.atlassian.com/software/jira",target:"_blank",rel:"noopener noreferrer",children:"Jira"})," and ",Object(O.jsx)("a",{href:"https://www.workfront.com/",target:"_blank",rel:"noopener noreferrer",children:"Workfront"}),"."]}),Object(O.jsxs)("li",{children:["I use ",Object(O.jsx)("a",{href:"https://outlook.live.com/",target:"_blank",rel:"noopener noreferrer",children:"Outlook"})," for my email client."]}),Object(O.jsxs)("li",{children:["I use ",Object(O.jsx)("a",{href:"https://justgetflux.com/",target:"_blank",rel:"noopener noreferrer",children:"f.lux"})," to protect my vision. "]}),Object(O.jsxs)("li",{children:["I spell-check with ",Object(O.jsx)("a",{href:"https://grammarly.com/",target:"_blank",rel:"noopener noreferrer",children:"Grammarly"}),"."]})]})]})]})},q=r(15),K=r(63),$=r(64),ee=r.n($),te=r(42),re=(r(101),RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)),ne=function(e){var t=e.formErrors,r=Object(K.a)(e,["formErrors"]),n=!0;return Object.values(t).forEach((function(e){e.length>0&&(n=!1)})),Object.values(r).forEach((function(e){""===e&&(n=!1)})),n},ae=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={name:"",email:"",subject:"",message:"",formErrors:{name:"",email:"",subject:"",message:""}},e.handleSubmit=function(t){if(t.preventDefault(),ne(e.state)){var r=e.state,n=r.name,a=r.email,s=r.subject,i=r.message,c={name:n,email:a,subject:s,message:i};ee.a.send("service_98zmfwt","template_iehnoxp",c,"user_goljAlep59GnPER4sQCG0"),console.log("\n        --SUBMITTING--\n        Name: ".concat(n,"\n        Email: ").concat(a,"\n        Subject: ").concat(s,"\n        Message: ").concat(i,"\n      ")),e.toastifySuccess(),e.resetForm()}else console.error("FORM INVALID - DISPLAY ERROR MESSAGE"),e.toastifyFail()},e.handleChange=function(t){t.preventDefault();var r=t.target,n=r.name,a=r.value,s=Object(c.a)({},e.state.formErrors);switch(n){case"name":s.name=a.length<1?"Please enter your name.":"";break;case"email":s.email=re.test(a)?"":"Please enter a valid email address.";break;case"subject":s.subject=a.length<1?"Please enter a subject.":"";break;case"message":s.message=a.length<1?"Please enter a message":""}e.setState(Object(q.a)({formErrors:s},n,a))},e}return Object(l.a)(r,[{key:"toastifySuccess",value:function(){te.b.success("Form sent!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,className:"rounded submit-feedback success"})}},{key:"toastifyFail",value:function(){te.b.error("Form failed to send!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,className:"rounded submit-feedback fail"})}},{key:"resetForm",value:function(){this.setState({name:"",email:"",subject:"",message:""})}},{key:"render",value:function(){var e=this.state.formErrors;return Object(O.jsxs)("div",{children:[Object(O.jsx)(G,{title:this.props.title}),Object(O.jsx)(X,{children:Object(O.jsxs)("div",{className:"ContactForm",children:[Object(O.jsxs)("form",{id:"contact-form",onSubmit:this.handleSubmit,noValidate:!0,children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"contactName",children:"Name"}),Object(O.jsx)("input",{type:"text",name:"name",value:this.state.name,id:"contactName",className:"form-control formInput ".concat(e.name.length>0?"error":null),onChange:this.handleChange,noValidate:!0}),e.name.length>0&&Object(O.jsx)("span",{className:"errorMessage",children:e.name})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"contactEmail",children:"Email"}),Object(O.jsx)("input",{type:"email",name:"email",value:this.state.email,id:"contactEmail",className:"form-control formInput ".concat(e.email.length>0?"error":null),onChange:this.handleChange,noValidate:!0}),e.email.length>0&&Object(O.jsx)("span",{className:"errorMessage",children:e.email})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(O.jsx)("input",{type:"subject",name:"subject",value:this.state.subject,id:"contactSubject",className:"form-control formInput ".concat(e.subject.length>0?"error":null),onChange:this.handleChange,noValidate:!0}),e.subject.length>0&&Object(O.jsx)("span",{className:"errorMessage",children:e.subject})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"contactMessage",children:"Message"}),Object(O.jsx)("textarea",{rows:"5",name:"message",value:this.state.message,id:"contactMessage",className:"form-control formInput ".concat(e.message.length>0?"error":null),onChange:this.handleChange,noValidate:!0}),e.message.length>0&&Object(O.jsx)("span",{className:"errorMessage",children:e.message})]}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("button",{className:"submit-btn btn btn-primary",type:"submit",children:"Send Message"})})]}),Object(O.jsx)(te.a,{})]})})]})}}]),r}(n.Component),se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAArCAYAAADSZm7JAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTEwLTI4VDE4OjMzOjUwLTA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTEwLTI4VDIxOjQ5OjU3LTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMC0yOFQyMTo0OTo1Ny0wNDowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphOGZmY2FkNS02MGZjLTJlNDAtYWNmYS00NTQ1ODViMWQ0MDkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjYzAxMDQxNC02NzMwLThhNGYtYjMwMS03MmI4OTg4NzM3YTQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMGNlYzYxZi0wNTlhLWMzNDctOGE5Yi0zYzU3MmI3MzU2OTQiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwY2VjNjFmLTA1OWEtYzM0Ny04YTliLTNjNTcyYjczNTY5NCIgc3RFdnQ6d2hlbj0iMjAyMC0xMC0yOFQxODozMzo1MC0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NzFiMzhjMi02N2RkLTQxNDYtOGNiMC0yN2M2MDAwNDM3YTIiIHN0RXZ0OndoZW49IjIwMjAtMTAtMjhUMTg6MzM6NTAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YThmZmNhZDUtNjBmYy0yZTQwLWFjZmEtNDU0NTg1YjFkNDA5IiBzdEV2dDp3aGVuPSIyMDIwLTEwLTI4VDIxOjQ5OjU3LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cfXP4wAAAbxJREFUaN7tmsuRhCAQhk3BFEjBFCaFOe6VFEzBFDjt3Qi2yhRMwRRMwX25NV1UAw3KCDv/oQ9DNQ8/mvannWbbtgYmN0AAMAADsKqBfby//Vdrv2wj1nJ+APawnsCaXX4A9rCRAOuvBNZboX6GqcCciuljAn1W4tsBmB/YnfitvrEB7NcG4jdcAUyRBdYAbCZ+973NcPPkAKb3iZeAnxGCMJmBKYecWPbfOhew74knMnEtwOgJGEn7QtqnvznPAqaZBdYCzCUnFmYMfRSYHVV0R7oKgLWWnKDjdp5nUynAuKhaSdJsMgJLMROQE7NHcqyp0eaLqiFSbpQAbIhYv0mJNq6j5PiVCozmqZtgzZ0lQX7GjQE2Hri7XQ2sk6p7W1ZYJ8zERtgs3J3Skn6fsPHci8Ck5rDRVUMqFBiVE1pQK0vOYb63pLc0UhAwUbEw8Jz6TB22CI7plcAkcuLGJPhDOqxmpT8ITkQWpV/rXVJSLMx6l6ypWiGVE9mrFa56WGnAemGN7Gn1sNJlxcQUC5sY4fpKX41i5ASAWXJiShnj1YCZBIF9DBj+LwFgAAZgAAZgMAADMAADMACDfQKGgKgwxKVnAgAAAABJRU5ErkJggg==",ie=r.p+"static/media/about-image.8324ab37.jpg",ce=r.p+"static/media/desk1.2147f160.jpg",oe=r.p+"static/media/desk2.3fb4b081.jpg",le=(r(102),function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={title:"Tom Hammer",subTitle:"Front-End Engineer and Digital Creator",siteTitle:"TH | Front-End Engineer and Digital Creator",logo:{imgSrc:se,title:e.siteTitle},headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Workflow",path:"/workflow"},{title:"Contact",path:"/contact"}],home:{title:"Creative, logical, and always learning.",subTitle:"Web stuff with a brighter future in mind!",text:"I drink coffee. I draw. I write clean code. I'm a front-end engineer and digital creator embracing new technologies so I can create awesome user experiences. Check out some of my work below!"},about:{images:[{id:0,src:ie,title:"Tom and his nephew Bentley",description:"Who doesn't love a puppy pic?"}],title:"About Tom"},workflow:{images:[{id:0,src:ce,title:"Tom's Desk 1",description:"Working from home should be efficient."},{id:1,src:oe,title:"Tom's Desk 2",description:"Working from home should be painless."}],title:"Tom's Workflow"},contact:{title:"Let's Chat"}},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){document.title=this.state.siteTitle}},{key:"render",value:function(){var e=this;return Object(O.jsxs)(b.a,{children:[Object(O.jsxs)(m.a,{className:"main-container",fluid:!0,children:[Object(O.jsx)(y,Object(c.a)({},this.state)),Object(O.jsx)(j.a,{path:"/",exact:!0,render:function(){return Object(O.jsx)(Q,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),Object(O.jsx)(j.a,{path:"/about",render:function(){return Object(O.jsx)(U,{about:e.state.about,title:e.state.about.title})}}),Object(O.jsx)(j.a,{path:"/workflow",render:function(){return Object(O.jsx)(H,{workflow:e.state.workflow,title:e.state.workflow.title})}}),Object(O.jsx)(j.a,{path:"/contact",render:function(){return Object(O.jsx)(ae,{title:e.state.contact.title})}})]}),Object(O.jsx)(T,{})]})}}]),r}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(103);i.a.render(Object(O.jsx)(le,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},70:function(e,t,r){}},[[104,1,2]]]);
//# sourceMappingURL=main.156c911d.chunk.js.map