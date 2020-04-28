(this["webpackJsonpcovid19-data"]=this["webpackJsonpcovid19-data"]||[]).push([[0],{51:function(e,t,a){e.exports=a(68)},56:function(e,t,a){},57:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a.n(l),o=(a(56),a(11)),i=(a(57),a(49)),u=a(24),m=a(20),s=a(10),h=function(){return r.a.createElement(u.a,{variant:"light",expand:"md",style:{marginBottom:"2.5rem"}},r.a.createElement(s.LinkContainer,{to:"/home"},r.a.createElement(u.a.Brand,null,"COVID-19 Data")),r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(m.a,null,r.a.createElement(s.LinkContainer,{to:"/home"},r.a.createElement(m.a.Link,null,"Home")),r.a.createElement(s.LinkContainer,{to:"/about"},r.a.createElement(m.a.Link,null,"About")),r.a.createElement(s.LinkContainer,{to:"/search"},r.a.createElement(m.a.Link,null,"Country Search")),r.a.createElement(s.LinkContainer,{to:"/countries"},r.a.createElement(m.a.Link,null,"Country List")))))},d=a(31),E=a(32),f=function(){return r.a.createElement(d.a,null,r.a.createElement("h1",null,"COVID-19 Data"),r.a.createElement("p",null,"A free, open-source tool to search for up-to-date COVID-19 case information by country."," "),r.a.createElement("p",null,"Data courtesy of"," ",r.a.createElement("a",{href:"https://covid19api.com/",target:"_blank",rel:"noopener noreferrer"},"covid19api.com"),"."),r.a.createElement("p",null,r.a.createElement(s.LinkContainer,{to:"/search"},r.a.createElement(E.a,{variant:"primary"},"Start searching"))))},p=a(23),b=function(e){var t=e.handleSubmit,a=e.handleChange,n=e.searchString;return r.a.createElement(p.a,{onSubmit:t},r.a.createElement(p.a.Group,null,r.a.createElement("h2",null,"Country Search"),r.a.createElement(p.a.Control,{size:"lg",placeholder:"Search by country name",type:"text",name:"searchString",required:!0,onChange:a,value:n}),r.a.createElement(p.a.Text,{className:"text-muted"},'Search by full or partial country name. No abbreviations, i.e., "United States", not "USA".')),r.a.createElement(E.a,{type:"submit"},"Submit"))},g=a(47),v=a.n(g),y=function(e){var t=e.date;return r.a.createElement("p",{className:"text-muted",style:{marginTop:"0.5rem"}},"Last updated:"," ",r.a.createElement(v.a,{fromNow:!0,ago:!0},t)," ","ago")},S=a(33),C=a(50),k=function(e){var t=e.data,a=e.lastSearch,n=e.formatNumber;if(!t.length)return r.a.createElement(C.a,{variant:"warning",style:{marginTop:"2.5rem"}},'Sorry, no data found for "',a,'". Please try another query.');var l=t[t.length-1];return r.a.createElement("div",{className:"data-container",style:{marginTop:"2.5rem"}},r.a.createElement("h3",null,l.Country),r.a.createElement(S.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Confirmed cases"),r.a.createElement("th",null,"Deaths"),r.a.createElement("th",null,"Recovered"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Total"),r.a.createElement("td",null,n(l.Confirmed)),r.a.createElement("td",null,n(l.Deaths)),r.a.createElement("td",null,n(l.Recovered))))),r.a.createElement(y,{date:l.Date}))},O=function(e){var t=e.data,a=e.setData,l=e.lastSearch,c=e.setLastSearch,o=e.handleChange,i=e.handleSubmit,u=e.searchString,m=e.formatNumber;return Object(n.useEffect)((function(){return function(){a(""),c("")}}),[]),r.a.createElement("div",null,r.a.createElement(b,{handleChange:o,handleSubmit:i,searchString:u}),l&&r.a.createElement(k,{data:t,lastSearch:l,formatNumber:m}))},j=a(48),w=a(40),D=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("https://api.covid19api.com/countries").then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return console.error(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Country List"),"Click on a country name to see its Covid-19 data.",0===a.length&&r.a.createElement("div",null,r.a.createElement(j.a,{animation:"grow",role:"status",variant:"primary"}),"Loading data..."),a.length>0&&r.a.createElement(w.a,{variant:"flush"},a.sort((function(e,t){return e.Country>t.Country?1:t.Country>e.Country?-1:0})).map((function(e,t){return r.a.createElement(s.LinkContainer,{to:"countries/".concat(e.Slug),key:"".concat(t,"-").concat(e.Slug)},r.a.createElement(w.a.Item,{action:!0},e.Country))}))))},L=function(e){var t=e.match,a=e.formatNumber,l=Object(n.useState)(""),c=Object(o.a)(l,2),i=c[0],u=c[1],m=Object(n.useState)("Loading ..."),s=Object(o.a)(m,2),h=s[0],d=s[1];return Object(n.useEffect)((function(){!function(){var e="https://api.covid19api.com/total/country/".concat(t.params.name);fetch(e).then((function(e){return e.json()})).then((function(e){0===e.length?d("No data available for selected locality."):u(e[e.length-1])})).catch((function(e){return d("Oops, something went wrong. Please try again.")}))}()}),[]),i?r.a.createElement("div",null,r.a.createElement("h2",null,i.Country),r.a.createElement(S.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Confirmed"),r.a.createElement("th",null,"Deaths"),r.a.createElement("th",null,"Recovered"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Total"),r.a.createElement("td",null,a(i.Confirmed)),r.a.createElement("td",null,a(i.Deaths)),r.a.createElement("td",null,a(i.Recovered))))),r.a.createElement(y,{date:i.Date})):r.a.createElement("div",null,h)},N=function(){return r.a.createElement(d.a,null,r.a.createElement("h1",null,"About COVID-19 Data"),r.a.createElement("p",null,"This site was inspired by the efforts of developers and engineers all around the world to provide technological resources in the midst of this global crisis."),r.a.createElement("p",null,r.a.createElement("a",{href:"https://twitter.com/ksredelinghuys",target:"_blank",rel:"noreferrer noopener"},"Kyle Redelinghuys"),", in particular, created a free"," ",r.a.createElement("a",{href:"https://covid19api.com/",target:"_blank",rel:"noreferrer noopener"},"Application Programming Interface (API)")," ","that provides accurate and recent data on the pandemic by country, as collected by the"," ",r.a.createElement("a",{href:"https://github.com/CSSEGISandData/COVID-19",target:"_blank",rel:"noreferrer noopener"},"Johns Hopkins University Center for Systems Science and Engineering"),". It inspired me to build a simple frontend to allow users to easily search and access the information."),r.a.createElement("p",null,"This project is a work in progress -- checkout the source code linked in the footer below if you'd like to contribute or have ideas!"))},x=a(15),I=function(){var e="https://api.covid19api.com/",t="total/country/",a=Object(n.useState)([]),l=Object(o.a)(a,2),c=l[0],u=l[1],m=Object(n.useState)(""),s=Object(o.a)(m,2),d=s[0],E=s[1],p=Object(n.useState)(""),b=Object(o.a)(p,2),g=b[0],v=b[1],y=Object(n.useState)(""),S=Object(o.a)(y,2),C=(S[0],S[1]);function k(a){if(a){var n="".concat(e).concat(t).concat(a);fetch(n).then((function(e){return e.json()})).then((function(e){u(e),v(a),E("")})).catch((function(e){return C("Oops, something went wrong. Please try again.")}))}}function j(e){E(e.target.value)}function w(e){e.preventDefault(),k(d)}function I(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}return Object(n.useEffect)((function(){k(d)}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement("main",null,r.a.createElement(i.a,null,r.a.createElement(x.g,null,r.a.createElement(x.d,{exact:!0,path:"/home",component:f}),r.a.createElement(x.d,{exact:!0,path:"/search",render:function(e){return r.a.createElement(O,Object.assign({},e,{data:c,setData:u,lastSearch:g,searchString:d,setLastSearch:v,handleChange:j,handleSubmit:w,formatNumber:I,getData:k}))}}),r.a.createElement(x.d,{exact:!0,path:"/about",component:N}),r.a.createElement(x.d,{exact:!0,path:"/countries",component:D}),r.a.createElement(x.d,{exact:!0,path:"/countries/:name",render:function(e){return r.a.createElement(L,{match:e.match,formatNumber:I})}}),r.a.createElement(x.c,{to:"/home"})))),r.a.createElement("footer",{className:"text-muted"},"Created by"," ",r.a.createElement("a",{href:"https://esinsaribudak.com",target:"_blank",rel:"noopener noreferrer"},"Esin Saribudak"),". See source code"," ",r.a.createElement("a",{href:"https://github.com/esin87/covid19-data",target:"_blank",rel:"noopener noreferrer"},"here"),"."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(67);var T=a(21);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T.BrowserRouter,null,r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.2bdce6a2.chunk.js.map