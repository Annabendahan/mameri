(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(165),r=a(159);t.default=function(){return l.a.createElement(i.a,null,l.a.createElement(r.a,{title:"404: Not found"}),l.a.createElement("h1",null,"NOT FOUND"),l.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},156:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),l=a.n(n),i=a(4),r=a.n(i),s=a(33),o=a.n(s);a.d(t,"a",function(){return o.a});a(158);var c=l.a.createContext({}),m=function(e){return l.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},158:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},159:function(e,t,a){"use strict";var n=a(163),l=(a(160),a(0)),i=a.n(l),r=a(4),s=a.n(r),o=a(170),c=a.n(o);function m(e){var t=e.description,a=e.lang,l=e.meta,r=e.title,s=n.data.site,o=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:r},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:o}].concat(l)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=m},161:function(e){e.exports={data:{site:{siteMetadata:{title:"quentinmameri"}}}}},162:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),l=a.n(n),i=a(4),r=a.n(i),s=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?l.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},163:function(e){e.exports={data:{site:{siteMetadata:{title:"quentinmameri",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},164:function(e,t,a){e.exports=a.p+"static/Qmameri_cmjn-d133eda88c303c046bbecf2aa34bbd05.png"},165:function(e,t,a){"use strict";var n=a(161),l=(a(160),a(0)),i=a.n(l),r=a(4),s=a.n(r),o=a(156),c=(a(159),a(166),function(){return i.a.createElement("div",{className:"footers"},i.a.createElement("div",{className:"footer2"},i.a.createElement("p",{className:"high-s"}," © 2019 Quentin Mameri - Tous droits réservés - Création par ",i.a.createElement("a",{className:"ab",href:"http://annabdh.com"}," Anna Bendahan "),"  ")),i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"footer-left"},i.a.createElement("p",{className:"high-s"}," © 2019 Quentin Mameri - Tous droits réservés - Création par ",i.a.createElement("a",{className:"ab",href:"http://annabdh.com"}," Anna Bendahan "),"  ")),i.a.createElement("div",{className:"footer-right"},i.a.createElement("p",{className:"name"}," Contact "),i.a.createElement("p",{className:""}," ",i.a.createElement("svg",{className:"yellows",width:"13",height:"13",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M25.9876 20.519C26.0427 20.9414 25.9141 21.3086 25.6023 21.6207L21.9415 25.2562C21.7764 25.4398 21.5608 25.596 21.2947 25.7244C21.0287 25.853 20.7672 25.9356 20.5104 25.9723C20.4921 25.9723 20.4369 25.977 20.3451 25.9862C20.2535 25.9953 20.1342 26 19.9874 26C19.6387 26 19.0744 25.9403 18.2945 25.8209C17.5147 25.7015 16.5605 25.4077 15.4321 24.9396C14.3035 24.4714 13.0236 23.7689 11.5924 22.8326C10.1612 21.8963 8.63811 20.6109 7.02335 18.9767C5.73888 17.7097 4.6746 16.4979 3.83052 15.3411C2.98644 14.1843 2.30751 13.1147 1.79372 12.1324C1.27988 11.1501 0.894542 10.2595 0.637648 9.46079C0.380754 8.66206 0.206433 7.9735 0.114685 7.39511C0.022937 6.81672 -0.0137622 6.36228 0.0045874 6.03177C0.022937 5.70126 0.0321118 5.51765 0.0321118 5.48092C0.068811 5.22386 0.151384 4.96221 0.279831 4.69597C0.408278 4.42972 0.56425 4.21398 0.747746 4.04872L4.40849 0.385593C4.66538 0.128531 4.95898 0 5.28927 0C5.52781 0 5.73883 0.0688558 5.92233 0.206567C6.10583 0.344279 6.2618 0.514123 6.39024 0.7161L9.33535 6.30719C9.5005 6.60098 9.54637 6.9223 9.47298 7.27117C9.39958 7.62004 9.24361 7.91383 9.00506 8.15253L7.65637 9.5021C7.61967 9.53882 7.58755 9.5985 7.56003 9.68113C7.53251 9.76375 7.51874 9.83261 7.51874 9.88769C7.59214 10.2733 7.75729 10.714 8.01418 11.2097C8.23438 11.6504 8.57385 12.1875 9.03259 12.821C9.49132 13.4544 10.1427 14.1843 10.9868 15.0105C11.8125 15.8552 12.5465 16.5116 13.1888 16.9799C13.8309 17.4479 14.3678 17.7923 14.799 18.0127C15.2302 18.233 15.5605 18.3661 15.7898 18.4119L16.1338 18.4808C16.1705 18.4808 16.2303 18.467 16.3127 18.4395C16.3953 18.4119 16.4549 18.3798 16.4917 18.3431L18.0605 16.7456C18.391 16.4519 18.7762 16.305 19.2166 16.305C19.5286 16.305 19.7762 16.36 19.9597 16.4702H19.9872L25.2994 19.61C25.6848 19.8489 25.9142 20.1518 25.9876 20.519Z",fill:"#2a4b80"})),"06 40 84 36 19 "),i.a.createElement("p",{className:"up"}," ",i.a.createElement("svg",{className:"yellows",width:"15",height:"8",viewBox:"0 0 27 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M2.59146 5.88196C2.93301 6.09875 3.96255 6.74264 5.68015 7.81327C7.3978 8.88391 8.71364 9.70828 9.62772 10.2864C9.72814 10.3498 9.9415 10.4875 10.2679 10.6999C10.5944 10.9124 10.8656 11.0841 11.0814 11.215C11.2974 11.3459 11.5586 11.4928 11.8651 11.6554C12.1715 11.8178 12.4603 11.94 12.7315 12.0209C13.0028 12.1025 13.2538 12.1429 13.4848 12.1429H13.5H13.5152C13.7462 12.1429 13.9974 12.1024 14.2686 12.0209C14.5397 11.94 14.8288 11.8177 15.1349 11.6554C15.4412 11.4926 15.7023 11.3459 15.9183 11.215C16.1343 11.0841 16.4054 10.9124 16.7319 10.6999C17.0583 10.4874 17.2719 10.3498 17.3723 10.2864C18.2963 9.70828 20.6469 8.23998 24.4236 5.88167C25.1568 5.42107 25.7694 4.86529 26.2615 4.21472C26.754 3.56443 27 2.88224 27 2.16852C27 1.57211 26.7613 1.06157 26.2841 0.636952C25.807 0.212238 25.2419 0 24.5892 0H2.41061C1.63722 0 1.04205 0.234882 0.6252 0.704645C0.2084 1.1745 0 1.7618 0 2.46649C0 3.03571 0.276319 3.65253 0.828692 4.31659C1.38101 4.98069 1.9688 5.50253 2.59146 5.88196Z",fill:"#2a4b80"}),i.a.createElement("path",{d:"M25.4932 7.33201C22.1989 9.33767 19.6975 10.8964 17.9901 12.0079C17.4176 12.3872 16.9531 12.6833 16.5964 12.8955C16.2397 13.1078 15.7654 13.3247 15.1726 13.5459C14.5801 13.7675 14.0279 13.878 13.5155 13.878H13.5001H13.485C12.9727 13.878 12.4202 13.7675 11.8277 13.5459C11.2351 13.3247 10.7604 13.1078 10.4039 12.8955C10.0474 12.6833 9.58277 12.3872 9.01029 12.0079C7.65419 11.1134 5.15814 9.5546 1.52204 7.33201C0.949347 6.9889 0.442094 6.59561 0.00012207 6.15295V16.9137C0.00012207 17.5104 0.236069 18.0206 0.708228 18.4453C1.18028 18.8701 1.74791 19.0824 2.41089 19.0824H24.5895C25.2523 19.0824 25.8199 18.8701 26.292 18.4453C26.7643 18.0205 27.0001 17.5104 27.0001 16.9137V6.15295C26.5681 6.58645 26.066 6.97974 25.4932 7.33201Z",fill:"#2a4b80"})),"qmameri.avocat@gmail.com")),i.a.createElement("div",{className:"footer-right2"},i.a.createElement("p",{className:"name2"}," Coordonnées"),i.a.createElement("p",null," QUENTIN MAMERI "),i.a.createElement("p",{className:"up"}," 16 rue Sauffroy "),i.a.createElement("p",{className:"up"},"  75017 Paris - FRANCE "))))}),m=(a(171),a(164)),h=a.n(m),E=a(7),p=a.n(E),d=(a(172),a(173),function(e){return e.show?i.a.createElement("div",{className:"Backdrop",onClick:e.clicked}," "):null}),w=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={show:!1},t.menuAppearsHandler=function(){t.setState({show:!0})},t.iconeAppearsHandler=function(){t.setState({show:!1})},t}return p()(t,e),t.prototype.render=function(){var e=i.a.createElement("div",{className:"menuSmall",onClick:this.menuAppearsHandler},i.a.createElement("div",{className:"menu-svg"},i.a.createElement("svg",{width:"23",height:"18",viewBox:"0 0 23 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("line",{y1:"1",x2:"22.0935",y2:"1",stroke:"#244C82","stroke-width":"2"}),i.a.createElement("line",{y1:"8.92944",x2:"22.0935",y2:"8.92944",stroke:"#244C82","stroke-width":"2"}),i.a.createElement("line",{y1:"17",x2:"22.0935",y2:"17",stroke:"#244C82","stroke-width":"2"})))),t=i.a.createElement("div",{className:"menu",style:{right:this.state.show?"-10px":"-300px",opacity:this.state.show?"1":"O "}},i.a.createElement(o.a,{to:"/lecabinet/"}," ",i.a.createElement("p",null," LE CABINET ",i.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"}))," ")," "),i.a.createElement(o.a,{to:"/domaines-d-expertise"}," ",i.a.createElement("p",null," DOMAINES D'EXPERTISES ",i.a.createElement("svg",{className:"polygon",width:"10",height:"4",viewBox:"0 0 10 4",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M5 4L0.669823 0.5H9.33008L5 4Z",fill:"white"}))," ")," "),i.a.createElement("div",{className:"ppetit"},i.a.createElement(o.a,{to:"/indemnisation-des-victimes/"}," ",i.a.createElement("p",{style:{fontWeight:"100"}},"  INDEMNISATION DES VICTIMES ",i.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})),"  ")," "),i.a.createElement(o.a,{to:"/defense-des-salaries/"}," ",i.a.createElement("p",{style:{fontWeight:"100"}},"  DÉFENSE DES SALARIÉS ",i.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})),"  ")," "),i.a.createElement(o.a,{to:"/defense-des-personnes-malades-handicap/"}," ",i.a.createElement("p",{style:{fontWeight:"100"}},"  DÉFENSE DES PERSONNES MALADES ET ATTEINTES D'UN HANDICAP ",i.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})),"  ")," ")),i.a.createElement(o.a,{to:"/noshonoraires/"}," ",i.a.createElement("p",null,"NOS HONORAIRES ",i.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})),"  ")," "),i.a.createElement(o.a,{to:"/posts/"},"  ",i.a.createElement("p",null," NOS PUBLICATIONS ",i.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})),"  ")," "),i.a.createElement(o.a,{to:"/contact/"}," ",i.a.createElement("p",null,"  CONTACT ",i.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})),"   ")," "),i.a.createElement(o.a,{to:"/liens-utiles/"}," ",i.a.createElement("p",null," LIENS UTILES ",i.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})),"  ")," "),i.a.createElement("p",{className:"close",onClick:this.iconeAppearsHandler},i.a.createElement("svg",{id:"cross",width:"30",height:"30",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("line",{x1:"23.9244",y1:"63.3012",x2:"74.8046",y2:"10.9543",stroke:"white","stroke-width":"3"}),i.a.createElement("line",{x1:"24.023",y1:"12.903",x2:"77.4122",y2:"62.6885",stroke:"white","stroke-width":"3"}))));i.a.createElement("svg",{id:"svg",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("line",{x1:"14",y1:"15.5",x2:"87",y2:"15.5",stroke:"black","stroke-width":"3"}),i.a.createElement("line",{x1:"14",y1:"38.5",x2:"87",y2:"38.5",stroke:"black","stroke-width":"3"}),i.a.createElement("line",{x1:"14",y1:"61.5",x2:"87",y2:"61.5",stroke:"black","stroke-width":"3"})),i.a.createElement("svg",{className:"line1",width:"389",height:"289",viewBox:"0 0 389 289",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("line",{x1:"76",y1:"90.5",x2:"268",y2:"90.5",stroke:"black","stroke-width":"3"}));return i.a.createElement("div",null,i.a.createElement(d,{show:this.state.show,clicked:this.iconeAppearsHandler}),e,t)},t}(l.Component),g=function(e){e.siteTitle;return i.a.createElement("header",{style:{background:"white",boxShadow:"0px 4px 20px rgba(189, 188, 188, 0.25)",position:"fixed",width:"100%",zIndex:15}},i.a.createElement("div",{style:{margin:"0 auto",fontSize:".7rem",paddingTop:".7rem",paddingLeft:"1.4rem",display:"flex",justifyContent:"space-between",height:"90px"}},i.a.createElement(o.a,{to:"/",style:{color:"#2a4b80",textDecoration:"none"}},i.a.createElement("img",{src:h.a,className:"logo",alt:"fireSpot"})),i.a.createElement("div",{className:"onglets"},i.a.createElement(o.a,{to:"/lecabinet/",className:"ong",activeClassName:"active",style:{color:"#2a4b80",textDecoration:"none",fontFamily:"Avenir",marginRight:"30px"}},"LE CABINET"),i.a.createElement(o.a,{to:"/domaines-d-expertise/",className:"de ",activeClassName:"active",style:{color:"#2a4b80",textDecoration:"none",fontFamily:"Avenir",marginRight:"30px",position:"relative"}},"DOMAINES D'EXPERTISE ",i.a.createElement("svg",{className:"polygon",width:"10",height:"4",viewBox:"0 0 10 4",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M5 4L0.669823 0.5H9.33008L5 4Z",fill:"#244C82"})),i.a.createElement("span",{className:"so sub-onglet"},"  ",i.a.createElement(o.a,{to:"/indemnisation-des-victimes/"}," INDEMNISATION DES VICTIMES ",i.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"#244C82"})))," "),i.a.createElement("span",{className:"so sub-onglet2"},"  ",i.a.createElement(o.a,{to:"/defense-des-salaries/"}," DÉFENSE DES SALARIÉS ",i.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"#244C82"})))," "),i.a.createElement("span",{className:"so sub-onglet3"},"  ",i.a.createElement(o.a,{to:"/defense-des-personnes-malades-handicap/"}," DÉFENSE DES PERSONNES MALADES ET EN SITUATION DE HANDICAP ",i.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"#244C82"})))," ")),i.a.createElement("span",null," "),i.a.createElement(o.a,{to:"/noshonoraires/",activeClassName:"active",className:"ong",style:{color:"#2a4b80",textDecoration:"none",fontFamily:"Avenir",marginRight:"30px"}},"NOS HONORAIRES"),i.a.createElement(o.a,{to:"/posts/",activeClassName:"active",className:"ong",style:{color:"#2a4b80",textDecoration:"none",fontFamily:"Avenir",marginRight:"30px"}},"NOS PUBLICATIONS"),i.a.createElement(o.a,{to:"/contact/",activeClassName:"active",className:"ong",style:{color:"#2a4b80",textDecoration:"none",fontFamily:"Avenir",marginRight:"30px"}},"CONTACT"),i.a.createElement(o.a,{to:"/liens-utiles/",activeClassName:"active",className:"ong",style:{color:"#2a4b80",textDecoration:"none",fontFamily:"Avenir",marginRight:"30px"}},"LIENS UTILES"))),i.a.createElement(w,null),i.a.createElement("p",{className:"number top"}," ",i.a.createElement("svg",{className:"yellows",width:"14",height:"14",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M25.9876 20.519C26.0427 20.9414 25.9141 21.3086 25.6023 21.6207L21.9415 25.2562C21.7764 25.4398 21.5608 25.596 21.2947 25.7244C21.0287 25.853 20.7672 25.9356 20.5104 25.9723C20.4921 25.9723 20.4369 25.977 20.3451 25.9862C20.2535 25.9953 20.1342 26 19.9874 26C19.6387 26 19.0744 25.9403 18.2945 25.8209C17.5147 25.7015 16.5605 25.4077 15.4321 24.9396C14.3035 24.4714 13.0236 23.7689 11.5924 22.8326C10.1612 21.8963 8.63811 20.6109 7.02335 18.9767C5.73888 17.7097 4.6746 16.4979 3.83052 15.3411C2.98644 14.1843 2.30751 13.1147 1.79372 12.1324C1.27988 11.1501 0.894542 10.2595 0.637648 9.46079C0.380754 8.66206 0.206433 7.9735 0.114685 7.39511C0.022937 6.81672 -0.0137622 6.36228 0.0045874 6.03177C0.022937 5.70126 0.0321118 5.51765 0.0321118 5.48092C0.068811 5.22386 0.151384 4.96221 0.279831 4.69597C0.408278 4.42972 0.56425 4.21398 0.747746 4.04872L4.40849 0.385593C4.66538 0.128531 4.95898 0 5.28927 0C5.52781 0 5.73883 0.0688558 5.92233 0.206567C6.10583 0.344279 6.2618 0.514123 6.39024 0.7161L9.33535 6.30719C9.5005 6.60098 9.54637 6.9223 9.47298 7.27117C9.39958 7.62004 9.24361 7.91383 9.00506 8.15253L7.65637 9.5021C7.61967 9.53882 7.58755 9.5985 7.56003 9.68113C7.53251 9.76375 7.51874 9.83261 7.51874 9.88769C7.59214 10.2733 7.75729 10.714 8.01418 11.2097C8.23438 11.6504 8.57385 12.1875 9.03259 12.821C9.49132 13.4544 10.1427 14.1843 10.9868 15.0105C11.8125 15.8552 12.5465 16.5116 13.1888 16.9799C13.8309 17.4479 14.3678 17.7923 14.799 18.0127C15.2302 18.233 15.5605 18.3661 15.7898 18.4119L16.1338 18.4808C16.1705 18.4808 16.2303 18.467 16.3127 18.4395C16.3953 18.4119 16.4549 18.3798 16.4917 18.3431L18.0605 16.7456C18.391 16.4519 18.7762 16.305 19.2166 16.305C19.5286 16.305 19.7762 16.36 19.9597 16.4702H19.9872L25.2994 19.61C25.6848 19.8489 25.9142 20.1518 25.9876 20.519Z",fill:"#2a4b80"})),"06 40 84 36 19 "))};g.propTypes={siteTitle:s.a.string},g.defaultProps={siteTitle:""};var C=g,u=(a(174),function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(C,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",paddingTop:"80px"}},i.a.createElement("main",null,t)),i.a.createElement(c,null))},data:n})});u.propTypes={children:s.a.node.isRequired};t.a=u}}]);
//# sourceMappingURL=component---src-pages-404-js-e3e43c5e7c3060ce6a88.js.map