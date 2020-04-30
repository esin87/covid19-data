(this["webpackJsonpcovid19-data"]=this["webpackJsonpcovid19-data"]||[]).push([[0],{51:function(e,t,a){e.exports=a(68)},56:function(e,t,a){},57:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),c=a.n(l),o=(a(56),a(6)),u=(a(57),a(50)),i=a(16),m=a(24),s=a(20),h=a(11),d=function(){return r.a.createElement(m.a,{collapseOnSelect:!0,variant:"light",expand:"md",style:{marginBottom:"2.5rem"}},r.a.createElement(h.LinkContainer,{to:"/home"},r.a.createElement(m.a.Brand,null,"COVID-19 Data")),r.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(s.a,null,r.a.createElement(h.LinkContainer,{to:"/home"},r.a.createElement(s.a.Link,null,"Home")),r.a.createElement(h.LinkContainer,{to:"/countries"},r.a.createElement(s.a.Link,null,"Country List")),r.a.createElement(h.LinkContainer,{to:"/search"},r.a.createElement(s.a.Link,null,"Country Search")),r.a.createElement(h.LinkContainer,{to:"/global"},r.a.createElement(s.a.Link,null,"Global Summary")),r.a.createElement(h.LinkContainer,{to:"/about"},r.a.createElement(s.a.Link,null,"About")))))},E=a(32),f=a(33),p=function(){return r.a.createElement(E.a,null,r.a.createElement("h1",null,"COVID-19 Data"),r.a.createElement("p",null,"A free, open-source tool to search for up-to-date COVID-19 case information by country."," "),r.a.createElement("p",null,"Data courtesy of"," ",r.a.createElement("a",{href:"https://covid19api.com/",target:"_blank",rel:"noopener noreferrer"},"covid19api.com"),"."),r.a.createElement("p",null,r.a.createElement(h.LinkContainer,{to:"/countries"},r.a.createElement(f.a,{variant:"primary"},"Start searching"))))},b=a(13),g=function(e){var t=e.handleSubmit,a=e.handleChange,n=e.searchString;return r.a.createElement(b.a,{onSubmit:t},r.a.createElement(b.a.Group,null,r.a.createElement("h2",{style:{marginBottom:"1.5rem"}},"Country Search"),r.a.createElement(b.a.Control,{size:"lg",placeholder:"Search by country name",type:"text",name:"searchString",required:!0,onChange:a,value:n}),r.a.createElement(b.a.Text,{className:"text-muted"},'Search by full or partial country name. No abbreviations, i.e., "United States", not "USA".')),r.a.createElement(f.a,{type:"submit"},"Submit"))},v=a(48),y=a.n(v),S=function(e){var t=e.date;return r.a.createElement("p",{className:"text-muted",style:{marginTop:"0.5rem"}},"Last updated:"," ",r.a.createElement(y.a,{fromNow:!0,ago:!0},t)," ","ago")},C=a(34),O=function(e){var t=e.data,a=e.formatNumber;return r.a.createElement(C.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Confirmed cases"),r.a.createElement("th",null,"Deaths"),r.a.createElement("th",null,"Recovered"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Total"),r.a.createElement("td",null,a(t.Confirmed)),r.a.createElement("td",null,a(t.Deaths)),r.a.createElement("td",null,a(t.Recovered)))))},j=function(e){var t=e.data,a=e.lastSearch,n=e.formatNumber;if(!t.length)return r.a.createElement(i.a,{variant:"warning",style:{marginTop:"2.5rem"}},'Sorry, no data found for "',a,'". Please try another query.');var l=t[t.length-1];return r.a.createElement("div",{className:"data-container",style:{marginTop:"2.5rem"}},r.a.createElement("h3",null,l.Country),r.a.createElement(O,{formatNumber:n,data:l}),r.a.createElement(S,{date:l.Date}))},k=function(e){var t=e.data,a=e.setData,l=e.lastSearch,c=e.setLastSearch,o=e.handleChange,u=e.handleSubmit,i=e.searchString,m=e.formatNumber;return Object(n.useEffect)((function(){return function(){a(""),c("")}}),[]),r.a.createElement("div",null,r.a.createElement(g,{handleChange:o,handleSubmit:u,searchString:i}),l&&r.a.createElement(j,{data:t,lastSearch:l,formatNumber:m}))},w=a(49),D=a(41),L=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),u=Object(o.a)(c,2),m=u[0],s=u[1],d=Object(n.useState)([]),E=Object(o.a)(d,2),f=E[0],p=E[1],g=Object(n.useState)(""),v=Object(o.a)(g,2),y=v[0],S=v[1];return Object(n.useEffect)((function(){fetch("https://api.covid19api.com/countries").then((function(e){return e.json()})).then((function(e){l(e),m||p(e)})).catch((function(e){return S("Oops, something went wrong! Please try again.")}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Country List"),"Click on a country name to see its COVID-19 data.",r.a.createElement(b.a,{style:{marginTop:"1.5rem"}},r.a.createElement(b.a.Group,null,r.a.createElement(b.a.Control,{size:"lg",placeholder:"Filter by country name",type:"text",name:"searchString",required:!0,onChange:function(e){var t=e.target.value;s(t);var n=a.filter((function(e){return e.Country.toLowerCase().includes(t.toLowerCase())}));p(n),p(t?n:a)},value:m})))," ",0===a.length&&r.a.createElement("div",null,r.a.createElement(w.a,{animation:"grow",role:"status",variant:"primary"}),"Loading data..."),a.length>0&&r.a.createElement(D.a,{variant:"flush"},f.sort((function(e,t){return e.Country>t.Country?1:t.Country>e.Country?-1:0})).map((function(e,t){return r.a.createElement(h.LinkContainer,{to:"countries/".concat(e.Slug),key:"".concat(t,"-").concat(e.Slug)},r.a.createElement(D.a.Item,{action:!0},e.Country))}))),""!==y&&r.a.createElement(i.a,{variant:"warning",style:{marginTop:"2.5rem"}},y))},N=function(e){var t=e.match,a=e.formatNumber,l=Object(n.useState)(""),c=Object(o.a)(l,2),u=c[0],i=c[1],m=Object(n.useState)("Loading ..."),s=Object(o.a)(m,2),h=s[0],d=s[1];return Object(n.useEffect)((function(){!function(){var e="https://api.covid19api.com/total/country/".concat(t.params.name);fetch(e).then((function(e){return e.json()})).then((function(e){0===e.length?d("No data available for selected locality."):i(e[e.length-1])})).catch((function(e){return d("Oops, something went wrong. Please try again.")}))}()}),[]),u?r.a.createElement("div",null,r.a.createElement("h2",null,u.Country),r.a.createElement(O,{formatNumber:a,data:u}),r.a.createElement(S,{date:u.Date})):r.a.createElement("div",null,h)},x=function(){return r.a.createElement(E.a,null,r.a.createElement("h1",null,"About COVID-19 Data"),r.a.createElement("p",null,"This site was inspired by the efforts of developers and engineers all around the world to provide technological resources in the midst of this global crisis."),r.a.createElement("p",null,r.a.createElement("a",{href:"https://twitter.com/ksredelinghuys",target:"_blank",rel:"noreferrer noopener"},"Kyle Redelinghuys"),", in particular, created a free"," ",r.a.createElement("a",{href:"https://covid19api.com/",target:"_blank",rel:"noreferrer noopener"},"Application Programming Interface (API)")," ","that provides accurate and recent data on the pandemic by country, as collected by the"," ",r.a.createElement("a",{href:"https://github.com/CSSEGISandData/COVID-19",target:"_blank",rel:"noreferrer noopener"},"Johns Hopkins University Center for Systems Science and Engineering"),". It inspired me to build a simple frontend to allow users to easily search and access the information."),r.a.createElement("p",null,"This project is a work in progress -- check out the source code linked in the footer below if you'd like to contribute or have ideas!"))},T=function(e){var t=e.formatNumber,a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],u=l[1],m=Object(n.useState)(""),s=Object(o.a)(m,2),h=s[0],d=s[1];return Object(n.useEffect)((function(){fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(e){u(e.Global)})).catch((function(e){return d("Oops, something went wrong! Please try again.")})),h&&d("")}),[]),c?h?r.a.createElement(i.a,{variant:"danger"},h):r.a.createElement("div",null,r.a.createElement("h3",{style:{marginBottom:"1.5em"}},"Global Summary"),r.a.createElement(C.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Confirmed cases"),r.a.createElement("th",null,"Deaths"),r.a.createElement("th",null,"Recovered"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Total"),r.a.createElement("td",null,t(c.TotalConfirmed)),r.a.createElement("td",null,t(c.TotalDeaths)),r.a.createElement("td",null,t(c.TotalRecovered))),r.a.createElement("tr",null,r.a.createElement("td",null,"New"),r.a.createElement("td",null,t(c.NewConfirmed)),r.a.createElement("td",null,t(c.NewDeaths)),r.a.createElement("td",null,t(c.NewRecovered))))),r.a.createElement(S,{date:c.Date})):r.a.createElement("div",null,"Loading...")},I=a(27),A=a(17),P=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),m=Object(o.a)(c,2),s=m[0],h=m[1],E=Object(n.useState)(""),f=Object(o.a)(E,2),b=f[0],g=f[1],v=Object(n.useState)(""),y=Object(o.a)(v,2),S=y[0],C=y[1];function O(e){if(e){var t="https://api.covid19api.com/total/country/".concat(e);fetch(t).then((function(e){return e.json()})).then((function(t){l(t),g(e),h("")})).catch((function(e){return C("Oops, something went wrong. Please try again.")}))}}function j(e){h(e.target.value)}function w(e){e.preventDefault(),O(s)}function D(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}return Object(n.useEffect)((function(){O(s),S&&C("")}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(I.HashRouter,{basename:"/"},r.a.createElement(d,null),r.a.createElement("main",null,r.a.createElement(u.a,null,S&&r.a.createElement(i.a,{variant:"danger"},S),r.a.createElement(A.g,null,r.a.createElement(A.d,{exact:!0,path:"/home",component:p}),r.a.createElement(A.d,{exact:!0,path:"/search",render:function(e){return r.a.createElement(k,Object.assign({},e,{data:a,setData:l,lastSearch:b,searchString:s,setLastSearch:g,handleChange:j,handleSubmit:w,formatNumber:D,getData:O}))}}),r.a.createElement(A.d,{exact:!0,path:"/about",component:x}),r.a.createElement(A.d,{exact:!0,path:"/countries",component:L}),r.a.createElement(A.d,{exact:!0,path:"/countries/:name",render:function(e){return r.a.createElement(N,{match:e.match,formatNumber:D})}}),r.a.createElement(A.d,{exact:!0,path:"/global",render:function(){return r.a.createElement(T,{formatNumber:D})}}),r.a.createElement(A.c,{to:"/home"})))),r.a.createElement("footer",{className:"text-muted"},"Created by"," ",r.a.createElement("a",{href:"https://esinsaribudak.com",target:"_blank",rel:"noopener noreferrer"},"Esin Saribudak"),". See source code"," ",r.a.createElement("a",{href:"https://github.com/esin87/covid19-data",target:"_blank",rel:"noopener noreferrer"},"here"),".")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(67);c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.bc4680c3.chunk.js.map