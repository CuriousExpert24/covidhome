(this.webpackJsonpcovidhome=this.webpackJsonpcovidhome||[]).push([[0],{101:function(e,t,a){e.exports={container:"Chart_container__9oEjO"}},104:function(e,t,a){e.exports=a(223)},19:function(e,t,a){e.exports={logoSite:"Cards_logoSite__3D6hi",container:"Cards_container__aKZfk",card:"Cards_card__jKlO9",infected:"Cards_infected__13gZ6",recovered:"Cards_recovered__1xC6I",deaths:"Cards_deaths__Db3Im",lead:"Cards_lead__3Unnh",inline:"Cards_inline__3Glq4",rotate:"Cards_rotate__2luoy"}},223:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(91),o=a.n(l),c=a(4),i=a.n(c),s=a(8),u=a(7),d=a(15),m=a(13),p=a(12),f=a(92),h=a.n(f),b=a(10),v=a(11),E=a(23);function g(){var e=Object(b.a)(["\n    display: inline-block;\n    width: 50%;\n    margin-top: 1%;\n    @media (max-width: 769px) {\n        margin-top: 3%;\n    }\n"]);return g=function(){return e},e}function y(){var e=Object(b.a)(["\n    color: #1e90ff;\n    margin: auto 0;\n    display: inline-block;\n    margin-left: 0;\n"]);return y=function(){return e},e}function _(){var e=Object(b.a)(["\n  font-size: 1.5em;\n  color: #fff;\n  display: inline-block;\n  margin: auto 0;\n  margin-right: 0;\n"]);return _=function(){return e},e}var x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null,r.a.createElement(C,null,"COVID"),r.a.createElement(O,null,"Tracker")))},C=v.b.h1(_()),O=v.b.h1(y()),j=v.b.div(g());function k(){var e=Object(b.a)(["\n  position: relative;\n  padding-top: .7rem;\n  cursor: pointer;\n  display: block;\n  & span {\n    background: #fff;\n    display: block;\n    position: relative;\n    width: 3.5rem;\n    height: .4rem;\n    margin-bottom: .7rem;\n    transition: all ease-in-out 0.2s;\n  }\n  .open span:nth-child(2) {\n      opacity: 0;\n    }\n  .open span:nth-child(3) {\n    transform: rotate(45deg);\n    top: -11px;\n  }\n  .open span:nth-child(1) {\n    transform: rotate(-45deg);\n    top: 11px;\n  }\n"]);return k=function(){return e},e}var D=function(e){return r.a.createElement(w,{onClick:e.handleNavbar},r.a.createElement("div",{className:e.navbarState?"open":""},r.a.createElement("span",null,"\xa0"),r.a.createElement("span",null,"\xa0"),r.a.createElement("span",null,"\xa0")))},w=v.b.div(k());function N(){var e=Object(b.a)(["\n  list-style-type: none;\n  padding: 2rem 1rem 2rem 2rem;\n  \n  & li {\n    transition: all 300ms linear 0s;\n  }\n  & a {\n    font-size: 1.4rem;\n    line-height: 2;\n    color: #dfe6e9;\n    text-transform: uppercase;\n    text-decoration: none;\n    cursor: pointer;\n    &:hover {\n      color: #fdcb6e;\n      border-bottom: 1px solid #fdcb6e;\n    }\n  }\n"]);return N=function(){return e},e}function S(){var e=Object(b.a)(["\n  background: #2d3436;\n  position: fixed;\n  top: 4.5rem;\n  left: 0;\n  right: 0;\n"]);return S=function(){return e},e}var R=function(e){var t=Object(E.c)({open:e.navbarState?0:1}).open;return!0===e.navbarState?r.a.createElement(T,{style:{transform:t.interpolate({range:[0,.2,.3,1],output:[0,-20,0,-200]}).interpolate((function(e){return"translate3d(0, ".concat(e,"px, 0")}))}},r.a.createElement(F,null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://curiousexpert24.github.io/covidtacker_about/",onClick:e.handleNavbar},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://curiousexpert24.github.io/covidtacker_about/safetypage.html",onClick:e.handleNavbar},"Safety Page")))):null},T=Object(v.b)(E.a.div)(S()),F=v.b.ul(N());function A(){var e=Object(b.a)(["\n  margin: auto 0;\n  @media (min-width: 769px) {\n    display: none;\n  }\n"]);return A=function(){return e},e}function I(){var e=Object(b.a)(["\n  justify-self: end;\n  list-style-type: none;\n  margin: auto 0;\n  \n  & a {\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: 600;\n    border-bottom: 1px solid transparent;\n    margin: 0 1.5rem;\n    transition: all 300ms linear 0s;\n    text-decoration: none;\n    cursor: pointer;\n    &:hover {\n      color: #1e90ff;\n      border-bottom: 1px solid #1e90ff;\n      border-top: 1px solid #1e90ff;\n    }\n    @media (max-width: 768px) {\n      display: none;\n    }\n  }\n"]);return I=function(){return e},e}function V(){var e=Object(b.a)(["\n  max-width: 120rem;\n  display: flex;\n  margin: auto;\n  padding: 0 2rem;;\n  justify-content: space-between;\n  height: 5rem;\n"]);return V=function(){return e},e}function U(){var e=Object(b.a)(["\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background: #2d3436;\n  z-index: 1;\n  font-size: 1.4rem;\n"]);return U=function(){return e},e}var z=function(e){var t=Object(E.c)({from:{transform:"translate3d(0, -10rem, 0)"},transform:"translate3d(0, 0, 0)"}),a=Object(E.c)({from:{transform:"translate3d(0, 30px, 0)",opacity:0},to:{transform:"translate3d(0, 0, 0)",opacity:1},delay:800,config:E.b.wobbly});return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{style:t},r.a.createElement(W,null,r.a.createElement(x,null),r.a.createElement(G,{style:a},r.a.createElement("a",{href:"https://curiousexpert24.github.io/covidtacker_about/"},"About"),r.a.createElement("a",{href:"https://curiousexpert24.github.io/covidtacker_about/safetypage.html"},"Safety Page")),r.a.createElement(P,null,r.a.createElement(D,{navbarState:e.navbarState,handleNavbar:e.handleNavbar})))),r.a.createElement(R,{navbarState:e.navbarState,handleNavbar:e.handleNavbar}))},M=Object(v.b)(E.a.nav)(U()),W=v.b.div(V()),G=Object(v.b)(E.a.ul)(I()),P=v.b.div(A()),B=a(245),J=a(241),K=a(246),L=a(242),Q=a(243),Y=a(52),Z=a.n(Y),q=a(53),H=a.n(q),X=a(19),$=a.n(X),ee=function(e){var t=e.data,a=t.confirmed,n=t.recovered,l=t.deaths,o=t.lastUpdate;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:$.a.logoSite},r.a.createElement("h2",{className:$.a.lead},"C",r.a.createElement("img",{src:"https://covid19.com.ph/static/media/bacteria.8172e304.svg",alt:"",className:$.a.inline}),"VID TRACKER"),r.a.createElement("h5",null,"Reliable tracker for COVID-19 Cases, Recoveries, and Deaths")),r.a.createElement("div",{className:B.b.container},r.a.createElement(J.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(J.a,{item:!0,component:K.a,xs:12,md:3,className:H()($.a.card,$.a.infected)},r.a.createElement(L.a,null,r.a.createElement(Q.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(Q.a,{variant:"h5"},r.a.createElement(Z.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(Q.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(Q.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(J.a,{item:!0,component:K.a,xs:12,md:3,className:H()($.a.card,$.a.recovered)},r.a.createElement(L.a,null,r.a.createElement(Q.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(Q.a,{variant:"h5"},r.a.createElement(Z.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(Q.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(Q.a,{variant:"body2"},"Number of recoveries of COVID-19"))),r.a.createElement(J.a,{item:!0,component:K.a,xs:12,md:3,className:H()($.a.card,$.a.deaths)},r.a.createElement(L.a,null,r.a.createElement(Q.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(Q.a,{variant:"h5"},r.a.createElement(Z.a,{start:0,end:l.value,duration:2.5,separator:","})),r.a.createElement(Q.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(Q.a,{variant:"body2"},"Number of deaths as a result of COVID-19")))))):"Loading..."},te=a(50),ae=a(247),ne=a(244),re=a(54),le=a.n(re),oe="https://covid19.mathdro.id/api",ce=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n,r,l,o,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=oe,t&&(a="".concat(oe,"/countries/").concat(t)),e.prev=2,e.next=5,le.a.get(a);case 5:return n=e.sent,r=n.data,l=r.confirmed,o=r.recovered,c=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:l,recovered:o,deaths:c,lastUpdate:s});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le.a.get("".concat(oe,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le.a.get("".concat(oe,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ue=a(99),de=a.n(ue),me=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),l=Object(te.a)(a,2),o=l[0],c=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,se();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(ae.a,{className:de.a.formControl},r.a.createElement(ne.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))};console.log(me);var pe=me,fe=a(30),he=a.n(fe),be=a(22),ve=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0,person:null,country:null},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.covid19api.com/summary",e.next=3,fetch("https://api.covid19api.com/summary");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),this.setState({person:a.Global.TotalRecovered,country:a,loading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.loading||!this.state.person)return r.a.createElement("div",null,"Loading...");for(var e=this.state.person,t=[],a=["a","a","a","a","a"],n=[],l=0;l<186;l++)t.push(this.state.country.Countries[l]),n.push(t[l].TotalRecovered);for(var o=n.sort((function(e,t){return t-e})).slice(0,5),c=0;c<186;c++){"United States of America"===t[c].Country&&(t[c].Country="US"),"Russian Federation"===t[c].Country&&(t[c].Country="Russia");for(var i=0;t[c].TotalRecovered!==o[i]&&i<5;)i++;i<=4&&(a[i]=t[c].Country)}console.log(t),console.log(o),console.log(a);var s=r.a.createElement(be.c,{data:{labels:[a[0],a[1],a[2],a[3],a[4],"Rest of the World"],datasets:[{data:[o[0]/e*100,o[1]/e*100,o[2]/e*100,o[3]/e*100,o[4]/e*100,100-(o[0]/e*100+o[1]/e*100+o[2]/e*100+o[3]/e*100+o[4]/e*100)],backgroundColor:["rgba(220, 20, 60, 0.7)","rgba(72, 61, 139, 0.7)","rgba(34, 139, 34, 0.7)","rgba(255, 215, 0, 0.7)","rgba(218, 112, 214, 0.7)","rgba(30, 144, 255, 0.7)"]}]},options:{responsive:!0,maintainAspectRatio:!0}});return r.a.createElement("div",{className:he.a.stat},r.a.createElement("h3",{className:he.a.hthree},"Most COVID-19 Recoveries"),r.a.createElement("div",{className:he.a.contain},r.a.createElement("table",{className:he.a.tabl},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"COVID-19 Recovered"),r.a.createElement("th",null,"% of World Recoveries"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,a[0]),r.a.createElement("td",null,o[0]),r.a.createElement("td",null,(o[0]/e*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,a[1]),r.a.createElement("td",null,o[1]),r.a.createElement("td",null,(o[1]/e*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,a[2]),r.a.createElement("td",null,o[2]),r.a.createElement("td",null,(o[2]/e*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,a[3]),r.a.createElement("td",null,o[3]),r.a.createElement("td",null,(o[3]/e*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,a[4]),r.a.createElement("td",null,o[4]),r.a.createElement("td",null,(o[4]/e*100).toFixed(2)))))),r.a.createElement("div",{className:he.a.charts},s))}}]),a}(r.a.Component),Ee=a(32),ge=a.n(Ee),ye=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0,person:null,country:null},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.covid19api.com/summary",e.next=3,fetch("https://api.covid19api.com/summary");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),this.setState({person:a.Global.TotalDeaths,country:a,loading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.loading||!this.state.person)return r.a.createElement("div",null,"Loading...");for(var e=this.state.person,t=[],a=["a","a","a","a","a"],n=[],l=0;l<186;l++)t.push(this.state.country.Countries[l]),n.push(t[l].TotalDeaths);for(var o=n.sort((function(e,t){return t-e})).slice(0,5),c=0;c<186;c++){"United States of America"===t[c].Country&&(t[c].Country="US"),"Russian Federation"===t[c].Country&&(t[c].Country="Russia");for(var i=0;t[c].TotalDeaths!==o[i]&&i<5;)i++;i<=4&&(a[i]=t[c].Country)}console.log(t),console.log(o),console.log(a);var s=r.a.createElement(be.c,{data:{labels:[a[0],a[1],a[2],a[3],a[4],"Rest of the World"],datasets:[{data:[o[0]/e*100,o[1]/e*100,o[2]/e*100,o[3]/e*100,o[4]/e*100,100-(o[0]/e*100+o[1]/e*100+o[2]/e*100+o[3]/e*100+o[4]/e*100)],backgroundColor:["rgba(220, 20, 60, 0.7)","rgba(72, 61, 139, 0.7)","rgba(34, 139, 34, 0.7)","rgba(255, 215, 0, 0.7)","rgba(218, 112, 214, 0.7)","rgba(30, 144, 255, 0.7)"]}]},options:{responsive:!0,maintainAspectRatio:!0}});return r.a.createElement("div",{className:ge.a.stat},r.a.createElement("h3",{className:ge.a.hthree},"Most COVID-19 Deaths"),r.a.createElement("div",{className:ge.a.contain},r.a.createElement("table",{className:ge.a.tbl},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"COVID-19 Deaths"),r.a.createElement("th",null,"% of World Deaths"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,a[0]),r.a.createElement("td",null,o[0]),r.a.createElement("td",null,(o[0]/e*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,a[1]),r.a.createElement("td",null,o[1]),r.a.createElement("td",null,(o[1]/e*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,a[2]),r.a.createElement("td",null,o[2]),r.a.createElement("td",null,(o[2]/e*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,a[3]),r.a.createElement("td",null,o[3]),r.a.createElement("td",null,(o[3]/e*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,a[4]),r.a.createElement("td",null,o[4]),r.a.createElement("td",null,(o[4]/e*100).toFixed(2)))))),r.a.createElement("div",{className:ge.a.chartss},s))}}]),a}(r.a.Component),_e=a(33),xe=a.n(_e),Ce=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0,person:null,country:null},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.covid19api.com/summary",e.next=3,fetch("https://api.covid19api.com/summary");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),this.setState({person:a.Global.TotalConfirmed,country:a,loading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.loading||!this.state.person)return r.a.createElement("div",null,"Loading...");for(var e=this.state.person,t=[],a=["a","a","a","a","a"],n=[],l=0;l<186;l++)t.push(this.state.country.Countries[l]),n.push(t[l].TotalConfirmed);for(var o=n.sort((function(e,t){return t-e})).slice(0,5),c=0;c<186;c++){"United States of America"===t[c].Country&&(t[c].Country="US"),"Russian Federation"===t[c].Country&&(t[c].Country="Russia");for(var i=0;t[c].TotalConfirmed!==o[i]&&i<5;)i++;i<=4&&(a[i]=t[c].Country)}console.log(t),console.log(o),console.log(a);var s=r.a.createElement(be.c,{data:{labels:[a[0],a[1],a[2],a[3],a[4],"Rest of the World"],datasets:[{data:[o[0]/e*100,o[1]/e*100,o[2]/e*100,o[3]/e*100,o[4]/e*100,100-(o[0]/e*100+o[1]/e*100+o[2]/e*100+o[3]/e*100+o[4]/e*100)],backgroundColor:["rgba(220, 20, 60, 0.7)","rgba(72, 61, 139, 0.7)","rgba(34, 139, 34, 0.7)","rgba(255, 215, 0, 0.7)","rgba(218, 112, 214, 0.7)","rgba(30, 144, 255, 0.7)"]}]},options:{responsive:!0,maintainAspectRatio:!0}});return r.a.createElement("div",{className:xe.a.stat},r.a.createElement("h3",{className:xe.a.hthree},"Most COVID-19 Cases"),r.a.createElement("div",{className:xe.a.contain},r.a.createElement("table",{className:xe.a.tabl},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"COVID-19 Cases"),r.a.createElement("th",null,"% of World Cases"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,a[0]),r.a.createElement("td",null,o[0]),r.a.createElement("td",null,(o[0]/e*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,a[1]),r.a.createElement("td",null,o[1]),r.a.createElement("td",null,(o[1]/e*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,a[2]),r.a.createElement("td",null,o[2]),r.a.createElement("td",null,(o[2]/e*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,a[3]),r.a.createElement("td",null,o[3]),r.a.createElement("td",null,(o[3]/e*100).toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,a[4]),r.a.createElement("td",null,o[4]),r.a.createElement("td",null,(o[4]/e*100).toFixed(2)))))),r.a.createElement("div",{className:xe.a.chart},s))}}]),a}(r.a.Component),Oe=a(101),je=a.n(Oe),ke=function e(t){var a=t.data,l=a.confirmed,o=a.recovered,c=a.deaths,u=t.country,d=Object(n.useState)({}),m=Object(te.a)(d,2),p=m[0],f=m[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(e);var h=l?r.a.createElement(be.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[l.value,o.value,c.value]}]},options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},title:{display:!0,text:"Current situation in ".concat(u)},animation:{duration:1e3,easing:"linear"}}}):null,b=p[0]?r.a.createElement(be.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]},options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Current situation in the World"},animation:{duration:4e3,easing:"linear"}}}):null;return r.a.createElement("div",{className:je.a.container},u?h:b)};function De(){var e=Object(b.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;\n  *,\n  *::after,\n  *::before {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: inherit;\n  }\n  html {\n    font-size: 62.5%;\n  }\n  body {\n    box-sizing: border-box;\n    font-family: 'Montserrat', sans-serif;\n  }\n"]);return De=function(){return e},e}var we=Object(v.a)(De()),Ne=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={navbarOpen:!1,data:{},country:""},e.handleNavbar=function(){e.setState({navbarOpen:!e.state.navbarOpen})},e.handleCountryChange=function(){var t=Object(s.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{navbarState:this.state.navbarOpen,handleNavbar:this.handleNavbar}),r.a.createElement(we,null),r.a.createElement("div",{className:h.a.totalContain},r.a.createElement(ee,{data:t}),r.a.createElement(pe,{handleCountryChange:this.handleCountryChange}),r.a.createElement(ke,{data:t,country:a}),r.a.createElement(Ce,null),r.a.createElement(ve,null),r.a.createElement(ye,null)))}}]),a}(r.a.Component);o.a.render(r.a.createElement(Ne,null),document.getElementById("root"))},30:function(e,t,a){e.exports={charts:"RecoveredTable_charts__Sml9P",stat:"RecoveredTable_stat__2WQxS",contain:"RecoveredTable_contain__11c0k",three:"RecoveredTable_three__3dcFR",table:"RecoveredTable_table__33V9i"}},32:function(e,t,a){e.exports={tbl:"DeathsTable_tbl__1-xpy",chartss:"DeathsTable_chartss__2DRzw",stat:"DeathsTable_stat__2glpT",contain:"DeathsTable_contain__jhytU",three:"DeathsTable_three__2TTY9",tble:"DeathsTable_tble__1JOmR"}},33:function(e,t,a){e.exports={tabl:"ConfirmedTbl_tabl__1kRzw",chart:"ConfirmedTbl_chart__3kUAQ",stat:"ConfirmedTbl_stat__38cbb",contain:"ConfirmedTbl_contain__3iQgJ",three:"ConfirmedTbl_three__Kn2gV",table:"ConfirmedTbl_table__2SPkY"}},92:function(e,t,a){e.exports={totalContain:"App_totalContain__1V8eO",image:"App_image__Hlcs3",float:"App_float__1WD0y",fadeIn:"App_fadeIn__1bBkA"}},99:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__1OIG-"}}},[[104,1,2]]]);
//# sourceMappingURL=main.ee36b440.chunk.js.map