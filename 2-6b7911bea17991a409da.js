(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{212:function(e,t,a){"use strict";a.d(t,"b",function(){return E});var n=a(0),l=a.n(n),s=a(10),r=a.n(s),i=a(59),c=a.n(i);a.d(t,"a",function(){return c.a});a(272);var o=l.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,n=e.query,s=e.render,r=a?a.data:t[n]&&t[n].data;return l.a.createElement(l.a.Fragment,null,r&&s(r),!r&&l.a.createElement("div",null,"Loading (StaticQuery)"))}var E=function(e){var t=e.data,a=e.query,n=e.render,s=e.children;return l.a.createElement(o.Consumer,null,function(e){return l.a.createElement(m,{data:t,query:a,render:n||s,staticQueryData:e})})};E.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},213:function(e,t,a){"use strict";var n=a(451),l=(a(236),a(0)),s=a.n(l),r=a(10),i=a.n(r),c=a(452),o=a.n(c);function m(e){var t=e.description,a=e.lang,l=e.meta,r=e.title,i=n.data.site,c=t||i.siteMetadata.description;return s.a.createElement(o.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:r},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:c}].concat(l)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=m},214:function(e,t,a){"use strict";var n=a(282),l=(a(236),a(0)),s=a.n(l),r=a(10),i=a.n(r),c=a(212),o=(a(213),a(216),function(){return s.a.createElement("div",{className:"footers"},s.a.createElement("div",{className:"footer2"},s.a.createElement("p",{className:"high-s"}," © 2019 Quentin Mameri - Tous droits réservés - Création par ",s.a.createElement("a",{className:"ab",href:"http://annabdh.com"}," Anna Bendahan "),"  ")),s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"footer-left"},s.a.createElement("p",{className:"high-s"}," © 2019 Quentin Mameri - Tous droits réservés - Création par ",s.a.createElement("a",{className:"ab",href:"http://annabdh.com"}," Anna Bendahan "),"  ")),s.a.createElement("div",{className:"footer-right"},s.a.createElement("p",{className:"name"}," Contact "),s.a.createElement("p",{className:""}," ",s.a.createElement("svg",{className:"yellows",width:"13",height:"13",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M25.9876 20.519C26.0427 20.9414 25.9141 21.3086 25.6023 21.6207L21.9415 25.2562C21.7764 25.4398 21.5608 25.596 21.2947 25.7244C21.0287 25.853 20.7672 25.9356 20.5104 25.9723C20.4921 25.9723 20.4369 25.977 20.3451 25.9862C20.2535 25.9953 20.1342 26 19.9874 26C19.6387 26 19.0744 25.9403 18.2945 25.8209C17.5147 25.7015 16.5605 25.4077 15.4321 24.9396C14.3035 24.4714 13.0236 23.7689 11.5924 22.8326C10.1612 21.8963 8.63811 20.6109 7.02335 18.9767C5.73888 17.7097 4.6746 16.4979 3.83052 15.3411C2.98644 14.1843 2.30751 13.1147 1.79372 12.1324C1.27988 11.1501 0.894542 10.2595 0.637648 9.46079C0.380754 8.66206 0.206433 7.9735 0.114685 7.39511C0.022937 6.81672 -0.0137622 6.36228 0.0045874 6.03177C0.022937 5.70126 0.0321118 5.51765 0.0321118 5.48092C0.068811 5.22386 0.151384 4.96221 0.279831 4.69597C0.408278 4.42972 0.56425 4.21398 0.747746 4.04872L4.40849 0.385593C4.66538 0.128531 4.95898 0 5.28927 0C5.52781 0 5.73883 0.0688558 5.92233 0.206567C6.10583 0.344279 6.2618 0.514123 6.39024 0.7161L9.33535 6.30719C9.5005 6.60098 9.54637 6.9223 9.47298 7.27117C9.39958 7.62004 9.24361 7.91383 9.00506 8.15253L7.65637 9.5021C7.61967 9.53882 7.58755 9.5985 7.56003 9.68113C7.53251 9.76375 7.51874 9.83261 7.51874 9.88769C7.59214 10.2733 7.75729 10.714 8.01418 11.2097C8.23438 11.6504 8.57385 12.1875 9.03259 12.821C9.49132 13.4544 10.1427 14.1843 10.9868 15.0105C11.8125 15.8552 12.5465 16.5116 13.1888 16.9799C13.8309 17.4479 14.3678 17.7923 14.799 18.0127C15.2302 18.233 15.5605 18.3661 15.7898 18.4119L16.1338 18.4808C16.1705 18.4808 16.2303 18.467 16.3127 18.4395C16.3953 18.4119 16.4549 18.3798 16.4917 18.3431L18.0605 16.7456C18.391 16.4519 18.7762 16.305 19.2166 16.305C19.5286 16.305 19.7762 16.36 19.9597 16.4702H19.9872L25.2994 19.61C25.6848 19.8489 25.9142 20.1518 25.9876 20.519Z",fill:"#2a4b80"})),"06 40 84 36 19 "),s.a.createElement("p",{className:"up"}," ",s.a.createElement("svg",{className:"yellows",width:"15",height:"8",viewBox:"0 0 27 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M2.59146 5.88196C2.93301 6.09875 3.96255 6.74264 5.68015 7.81327C7.3978 8.88391 8.71364 9.70828 9.62772 10.2864C9.72814 10.3498 9.9415 10.4875 10.2679 10.6999C10.5944 10.9124 10.8656 11.0841 11.0814 11.215C11.2974 11.3459 11.5586 11.4928 11.8651 11.6554C12.1715 11.8178 12.4603 11.94 12.7315 12.0209C13.0028 12.1025 13.2538 12.1429 13.4848 12.1429H13.5H13.5152C13.7462 12.1429 13.9974 12.1024 14.2686 12.0209C14.5397 11.94 14.8288 11.8177 15.1349 11.6554C15.4412 11.4926 15.7023 11.3459 15.9183 11.215C16.1343 11.0841 16.4054 10.9124 16.7319 10.6999C17.0583 10.4874 17.2719 10.3498 17.3723 10.2864C18.2963 9.70828 20.6469 8.23998 24.4236 5.88167C25.1568 5.42107 25.7694 4.86529 26.2615 4.21472C26.754 3.56443 27 2.88224 27 2.16852C27 1.57211 26.7613 1.06157 26.2841 0.636952C25.807 0.212238 25.2419 0 24.5892 0H2.41061C1.63722 0 1.04205 0.234882 0.6252 0.704645C0.2084 1.1745 0 1.7618 0 2.46649C0 3.03571 0.276319 3.65253 0.828692 4.31659C1.38101 4.98069 1.9688 5.50253 2.59146 5.88196Z",fill:"#2a4b80"}),s.a.createElement("path",{d:"M25.4932 7.33201C22.1989 9.33767 19.6975 10.8964 17.9901 12.0079C17.4176 12.3872 16.9531 12.6833 16.5964 12.8955C16.2397 13.1078 15.7654 13.3247 15.1726 13.5459C14.5801 13.7675 14.0279 13.878 13.5155 13.878H13.5001H13.485C12.9727 13.878 12.4202 13.7675 11.8277 13.5459C11.2351 13.3247 10.7604 13.1078 10.4039 12.8955C10.0474 12.6833 9.58277 12.3872 9.01029 12.0079C7.65419 11.1134 5.15814 9.5546 1.52204 7.33201C0.949347 6.9889 0.442094 6.59561 0.00012207 6.15295V16.9137C0.00012207 17.5104 0.236069 18.0206 0.708228 18.4453C1.18028 18.8701 1.74791 19.0824 2.41089 19.0824H24.5895C25.2523 19.0824 25.8199 18.8701 26.292 18.4453C26.7643 18.0205 27.0001 17.5104 27.0001 16.9137V6.15295C26.5681 6.58645 26.066 6.97974 25.4932 7.33201Z",fill:"#2a4b80"})),"qmameri.avocat@gmail.com")),s.a.createElement("div",{className:"footer-right2"},s.a.createElement("p",{className:"name2"}," Coordonnées"),s.a.createElement("p",null," QUENTIN MAMERI "),s.a.createElement("p",{className:"up"}," 16 rue Sauffroy "),s.a.createElement("p",{className:"up"},"  75017 Paris - FRANCE "))))}),m=(a(458),a(459)),E=a.n(m),p=(a(460),a(461),function(e){return e.show?s.a.createElement("div",{className:"Backdrop",onClick:e.clicked}," "):null});var h=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={show:!1},t.menuAppearsHandler=function(){t.setState({show:!0})},t.iconeAppearsHandler=function(){t.setState({show:!1})},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=s.a.createElement("div",{className:"menuSmall",onClick:this.menuAppearsHandler},s.a.createElement("div",{className:"menu-svg"},s.a.createElement("svg",{width:"23",height:"18",viewBox:"0 0 23 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("line",{y1:"1",x2:"22.0935",y2:"1",stroke:"white","stroke-width":"2"}),s.a.createElement("line",{y1:"8.92944",x2:"22.0935",y2:"8.92944",stroke:"white","stroke-width":"2"}),s.a.createElement("line",{y1:"17",x2:"22.0935",y2:"17",stroke:"white","stroke-width":"2"})))),t=s.a.createElement("div",{className:"menu",style:{right:this.state.show?"-10px":"-300px",opacity:this.state.show?"1":"O "}},s.a.createElement(c.a,{to:"/"}," ",s.a.createElement("p",null," ACCUEIL ",s.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"}))," ")," "),s.a.createElement(c.a,{to:"/lecabinet/"}," ",s.a.createElement("p",null," LE CABINET ",s.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"}))," ")," "),s.a.createElement(c.a,{to:"/domaines-d-expertise"}," ",s.a.createElement("p",null," DOMAINES D'EXPERTISES ",s.a.createElement("svg",{className:"polygon",width:"10",height:"4",viewBox:"0 0 10 4",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M5 4L0.669823 0.5H9.33008L5 4Z",fill:"white"}))," ")," "),s.a.createElement("div",{className:"ppetit"},s.a.createElement(c.a,{to:"/indemnisation-des-victimes/"}," ",s.a.createElement("p",{style:{fontWeight:"100"}},"  INDEMNISATION DES VICTIMES ",s.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})),"  ")," "),s.a.createElement(c.a,{to:"/defense-des-salaries/"}," ",s.a.createElement("p",{style:{fontWeight:"100"}},"  DÉFENSE DES SALARIÉS ",s.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})),"  ")," "),s.a.createElement(c.a,{to:"/defense-des-personnes-malades-handicap/"}," ",s.a.createElement("p",{style:{fontWeight:"100"}},"  DÉFENSE DES PERSONNES MALADES ET ATTEINTES D'UN HANDICAP ",s.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})),"  ")," ")),s.a.createElement(c.a,{to:"/noshonoraires/"}," ",s.a.createElement("p",null,"NOS HONORAIRES ",s.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})),"  ")," "),s.a.createElement(c.a,{to:"/posts/"},"  ",s.a.createElement("p",null," NOS PUBLICATIONS ",s.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})),"  ")," "),s.a.createElement(c.a,{to:"/liens-utiles/"}," ",s.a.createElement("p",null," NOS INFOS ET CONSEILS UTILES ",s.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})),"  ")," "),s.a.createElement(c.a,{to:"/contact/"}," ",s.a.createElement("p",null,"  CONTACT ET ACCÈS ",s.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})),"   ")," "),s.a.createElement("p",{className:"close",onClick:this.iconeAppearsHandler},s.a.createElement("svg",{id:"cross",width:"30",height:"30",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("line",{x1:"23.9244",y1:"63.3012",x2:"74.8046",y2:"10.9543",stroke:"white","stroke-width":"3"}),s.a.createElement("line",{x1:"24.023",y1:"12.903",x2:"77.4122",y2:"62.6885",stroke:"white","stroke-width":"3"}))));s.a.createElement("svg",{id:"svg",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("line",{x1:"14",y1:"15.5",x2:"87",y2:"15.5",stroke:"black","stroke-width":"3"}),s.a.createElement("line",{x1:"14",y1:"38.5",x2:"87",y2:"38.5",stroke:"black","stroke-width":"3"}),s.a.createElement("line",{x1:"14",y1:"61.5",x2:"87",y2:"61.5",stroke:"black","stroke-width":"3"})),s.a.createElement("svg",{className:"line1",width:"389",height:"289",viewBox:"0 0 389 289",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("line",{x1:"76",y1:"90.5",x2:"268",y2:"90.5",stroke:"black","stroke-width":"3"}));return s.a.createElement("div",null,s.a.createElement(p,{show:this.state.show,clicked:this.iconeAppearsHandler}),e,t)},n}(l.Component),w=function(e){e.siteTitle;return s.a.createElement("header",{style:{background:"#2a4b80",boxShadow:"0px 4px 20px rgba(189, 188, 188, 0.25)",position:"fixed",width:"100%",padding:"10px",zIndex:15}},s.a.createElement("div",{style:{margin:"0 auto",fontSize:".8rem",paddingTop:"1rem",paddingLeft:"1.4rem",display:"flex",justifyContent:"space-between",height:"140px"}},s.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},s.a.createElement("img",{src:E.a,className:"logo",alt:"fireSpot"})),s.a.createElement("div",{className:"onglets"},s.a.createElement(c.a,{to:"/",className:"ong",activeClassName:"active",style:{color:"white",textDecoration:"none",fontFamily:"Avenir",marginRight:"30px"}},"ACCUEIL"),s.a.createElement(c.a,{to:"/lecabinet/",className:"ong",activeClassName:"active",style:{color:"white",textDecoration:"none",fontFamily:"Avenir",marginRight:"30px"}},"LE CABINET"),s.a.createElement(c.a,{to:"/domaines-d-expertise/",className:"de ",activeClassName:"active",style:{color:"white",textDecoration:"none",fontFamily:"Avenir",marginRight:"30px",position:"relative"}},"DOMAINES D'EXPERTISE ",s.a.createElement("svg",{className:"polygon",width:"10",height:"4",viewBox:"0 0 10 4",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M5 4L0.669823 0.5H9.33008L5 4Z",fill:"#244C82"})),s.a.createElement("span",{className:"so sub-onglet"},"  ",s.a.createElement(c.a,{to:"/indemnisation-des-victimes/"}," INDEMNISATION DES VICTIMES ",s.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})))," "),s.a.createElement("span",{className:"so sub-onglet2"},"  ",s.a.createElement(c.a,{to:"/defense-des-salaries/"}," DÉFENSE DES SALARIÉS ",s.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})))," "),s.a.createElement("span",{className:"so sub-onglet3"},"  ",s.a.createElement(c.a,{to:"/defense-des-personnes-malades-handicap/"}," DÉFENSE DES PERSONNES MALADES ET EN SITUATION DE HANDICAP ",s.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})))," "),s.a.createElement("span",{className:"so2 sub-onglet4"},"  ",s.a.createElement(c.a,{to:"/accidents-de-la-route/"}," ",s.a.createElement("p",{className:"m"}," - ACCIDENT DE LA ROUTE ")),s.a.createElement(c.a,{className:"m",to:"/agressions-et-delits-routiers/"}," ",s.a.createElement("p",{className:"m"}," - AGRESSIONS ET DELITS ROUTIERS ")),s.a.createElement(c.a,{className:"m",to:"/accidents-medicaux/"}," ",s.a.createElement("p",{className:"m"}," - ACCIDENTS MEDICAUX ")),s.a.createElement(c.a,{className:"m",to:"/accidents-de-sport/"},"  ",s.a.createElement("p",{className:"m"},"- ACCIDENTS DE SPORT ")),s.a.createElement(c.a,{className:"m",to:"/accidents-de-la-vie-privee/"},"  ",s.a.createElement("p",{className:"m"},"- ACCIDENTS DE LA VIE PRIVÉE ")),s.a.createElement(c.a,{className:"m",to:"/accidents-du-travail/"}," ",s.a.createElement("p",{className:"m"}," - ACCIDENTS DU TRAVAIL ")),s.a.createElement(c.a,{className:"m",to:"/grand-handicap/"}," ",s.a.createElement("p",{className:"m"}," - INDEMNISATION DU GRAND HANDICAP ")),s.a.createElement(c.a,{className:"m",to:"/aggravation/"}," ",s.a.createElement("p",{className:"m"}," - REOUVERTURE EN AGGRAVATION "))),s.a.createElement("span",{className:"so3 sub-onglet7"},s.a.createElement(c.a,{to:"/rupture-torts-employeur/"}," ",s.a.createElement("p",{className:"m"}," - RUPTURE AUX TORTS DE L'EMPLOYEUR ")),s.a.createElement(c.a,{to:"/rupture-conventionnelle/"}," ",s.a.createElement("p",{className:"m"}," - RUPTURE CONVENTIONNELLE ")),s.a.createElement(c.a,{to:"/licenciements-abusifs/"}," ",s.a.createElement("p",{className:"m"}," - LICENCIEMENTS ABUSIFS ")),s.a.createElement(c.a,{to:"/harcelement-moral/"}," ",s.a.createElement("p",{className:"m"}," - HARCÈLEMENT MORAL ")),s.a.createElement(c.a,{to:"/sanction-disciplinaire/"}," ",s.a.createElement("p",{className:"m"}," - SANCTION DISCIPLINAIRE "))),s.a.createElement("span",{className:"so4 r sub-onglet13"},"  ",s.a.createElement(c.a,{to:"/litige-secu/"},s.a.createElement("p",{className:"m"}," - LITIGE AVEC LA SECURITE SOCIALE")),s.a.createElement(c.a,{to:"/litige-mdph/"}," ",s.a.createElement("p",{className:"m"}," - LITIGE AVEC LA MDPH ")),s.a.createElement(c.a,{to:"/litige-assurances/"},"  ",s.a.createElement("p",{className:"m"}," - LITIGE AVEC LES ASSURANCES")))),s.a.createElement("a",null," "),s.a.createElement(c.a,{to:"/noshonoraires/",activeClassName:"active",className:"ong",style:{color:"white",textDecoration:"none",fontFamily:"Avenir",marginRight:"30px"}},"NOS HONORAIRES"),s.a.createElement(c.a,{to:"/posts/",activeClassName:"active",className:"ong",style:{color:"white",textDecoration:"none",fontFamily:"Avenir",marginRight:"30px"}},"NOS PUBLICATIONS"),s.a.createElement(c.a,{to:"/liens-utiles/",activeClassName:"active",className:"onge",style:{color:"white",textDecoration:"none",fontFamily:"Avenir",marginRight:"30px"}},"NOS INFOS ET CONSEILS PRATIQUES",s.a.createElement("span",{className:"so soo1"},"  ",s.a.createElement(c.a,{to:"/conseils-pratiques/"}," CONSEILS PRATIQUES ",s.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})))," "),s.a.createElement("span",{className:"so soo2"},"  ",s.a.createElement(c.a,{to:"/infos-pratiques/"}," INFOS PRATIQUES ",s.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})))," "),s.a.createElement("span",{className:"so soo3"},"  ",s.a.createElement(c.a,{to:"/modeles-et-formulaires/"}," MODÈLES ET FORMULAIRES ",s.a.createElement("svg",{width:"5",height:"7",viewBox:"0 0 5 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z",fill:"white"})))," "),s.a.createElement("span",{className:" soo11"},"  ",s.a.createElement(c.a,{to:"/conseils-aux-victimes/"}," ",s.a.createElement("p",{className:"m"}," - CONSEILS AUX VICTIMES ")),s.a.createElement(c.a,{className:"soo12",to:"/agressions-et-delits-routiers/"}," ",s.a.createElement("p",{className:"m"}," - AGRESSIONS ET DELITS ROUTIERS "))," ")),s.a.createElement(c.a,{to:"/contact/",activeClassName:"active",className:"ong",style:{color:"white",textDecoration:"none",fontFamily:"Avenir",marginRight:"30px"}},"CONTACT ET ACCÈS"))),s.a.createElement(h,null),s.a.createElement("p",{className:"number top"}," ",s.a.createElement("svg",{className:"yellows",width:"14",height:"14",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M25.9876 20.519C26.0427 20.9414 25.9141 21.3086 25.6023 21.6207L21.9415 25.2562C21.7764 25.4398 21.5608 25.596 21.2947 25.7244C21.0287 25.853 20.7672 25.9356 20.5104 25.9723C20.4921 25.9723 20.4369 25.977 20.3451 25.9862C20.2535 25.9953 20.1342 26 19.9874 26C19.6387 26 19.0744 25.9403 18.2945 25.8209C17.5147 25.7015 16.5605 25.4077 15.4321 24.9396C14.3035 24.4714 13.0236 23.7689 11.5924 22.8326C10.1612 21.8963 8.63811 20.6109 7.02335 18.9767C5.73888 17.7097 4.6746 16.4979 3.83052 15.3411C2.98644 14.1843 2.30751 13.1147 1.79372 12.1324C1.27988 11.1501 0.894542 10.2595 0.637648 9.46079C0.380754 8.66206 0.206433 7.9735 0.114685 7.39511C0.022937 6.81672 -0.0137622 6.36228 0.0045874 6.03177C0.022937 5.70126 0.0321118 5.51765 0.0321118 5.48092C0.068811 5.22386 0.151384 4.96221 0.279831 4.69597C0.408278 4.42972 0.56425 4.21398 0.747746 4.04872L4.40849 0.385593C4.66538 0.128531 4.95898 0 5.28927 0C5.52781 0 5.73883 0.0688558 5.92233 0.206567C6.10583 0.344279 6.2618 0.514123 6.39024 0.7161L9.33535 6.30719C9.5005 6.60098 9.54637 6.9223 9.47298 7.27117C9.39958 7.62004 9.24361 7.91383 9.00506 8.15253L7.65637 9.5021C7.61967 9.53882 7.58755 9.5985 7.56003 9.68113C7.53251 9.76375 7.51874 9.83261 7.51874 9.88769C7.59214 10.2733 7.75729 10.714 8.01418 11.2097C8.23438 11.6504 8.57385 12.1875 9.03259 12.821C9.49132 13.4544 10.1427 14.1843 10.9868 15.0105C11.8125 15.8552 12.5465 16.5116 13.1888 16.9799C13.8309 17.4479 14.3678 17.7923 14.799 18.0127C15.2302 18.233 15.5605 18.3661 15.7898 18.4119L16.1338 18.4808C16.1705 18.4808 16.2303 18.467 16.3127 18.4395C16.3953 18.4119 16.4549 18.3798 16.4917 18.3431L18.0605 16.7456C18.391 16.4519 18.7762 16.305 19.2166 16.305C19.5286 16.305 19.7762 16.36 19.9597 16.4702H19.9872L25.2994 19.61C25.6848 19.8489 25.9142 20.1518 25.9876 20.519Z",fill:"#2a4b80"})),"06 40 84 36 19 "))};w.propTypes={siteTitle:i.a.string},w.defaultProps={siteTitle:""};var d=w,g=(a(462),function(e){var t=e.children;return s.a.createElement(c.b,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{style:{margin:"0 auto",paddingTop:"80px"}},s.a.createElement("main",null,t)),s.a.createElement(o,null))},data:n})});g.propTypes={children:i.a.node.isRequired};t.a=g},272:function(e,t,a){var n;e.exports=(n=a(450))&&n.default||n},282:function(e){e.exports={data:{site:{siteMetadata:{title:"quentinmameri"}}}}},450:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),l=a.n(n),s=a(10),r=a.n(s),i=a(112),c=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},451:function(e){e.exports={data:{site:{siteMetadata:{title:"quentinmameri",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},459:function(e,t,a){e.exports=a.p+"static/Qmameri_blanc-cacb8c09c5b015dc5b15cd28f521d2de.png"}}]);
//# sourceMappingURL=2-6b7911bea17991a409da.js.map