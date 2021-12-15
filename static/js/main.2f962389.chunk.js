(this.webpackJsonpcountries_api=this.webpackJsonpcountries_api||[]).push([[0],{52:function(e,n,t){},53:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(37),c=t.n(i),s=t(9),o=t(2),l=a.a.createContext(),d=a.a.createContext(),h=a.a.createContext();function j(){return Object(r.useContext)(l)}function m(){return Object(r.useContext)(h)}function u(e){var n=e.children,t=JSON.parse(localStorage.getItem("darkTheme")),a=Object(r.useState)(t),i=Object(s.a)(a,2),c=i[0],j=i[1],m=Object(r.useState)([]),u=Object(s.a)(m,2),b=u[0],p=u[1];return Object(o.jsx)(l.Provider,{value:c,children:Object(o.jsx)(h.Provider,{value:{countries:b,setCountries:p},children:Object(o.jsx)(d.Provider,{value:function(){localStorage.setItem("darkTheme",!c),j((function(e){return!e}))},children:n})})})}var b,p,x,g,O,f,v,w,y,k,C,N,S,L,I,z=t(21),E=t(3),A=t(55),T=t(6),B=t(7),D=t(18),P=t(17),R=function(){var e=j(),n=Object(r.useContext)(d);return Object(o.jsx)(J,{className:e?"dark-theme-class-lighter":"light-theme-class",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Where in the world?"}),Object(o.jsxs)("button",{onClick:function(){return n()},className:e?"dark-theme-class":"light-theme-class",children:[Object(o.jsx)(P.a,{icon:D.c}),"Dark Mode"]})]})})},J=B.a.nav(b||(b=Object(T.a)(["\n  position: relative;\n  height: 10vh;\n  width: 100%;\n  box-shadow: 0px 12px 15px -15px hsl(0, 0%, 0%);\n  z-index: 2;\n  div {\n    margin: 0 auto;\n    width: 90%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    button {\n      height: 4rem;\n      width: auto;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 1.2rem;\n      background: none;\n      border: none;\n      img {\n        height: 1rem;\n        margin: 0 0.2rem;\n        width: 1rem;\n      }\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"]))),H=t(26),M=t.n(H),_=t(19),F=t(30),G=function(e){e.countriesCoppy;var n=e.setCountriesCoppy,t=j(),r=m().countries;return Object(o.jsxs)(W,{className:t?"dark-theme-class":"light-theme-class",children:[Object(o.jsxs)(q,{className:t?"dark-theme-class-lighter":"light-theme-class",children:[Object(o.jsx)(P.a,{icon:D.d,className:"search-icon ".concat(t?"dark-theme-class-lighter":"light-theme-class")}),Object(o.jsx)("input",{type:"text",onChange:function(e){return function(e){e.preventDefault(),e.target.value?n(r.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())}))):n(Object(_.a)(r))}(e)},placeholder:"Search for a country...",className:t?"dark-theme-class-lighter":"light-theme-class"})]}),Object(o.jsxs)("select",{onChange:function(e){return function(e){e.target.value?n(r.filter((function(n){return n.region===e.target.value}))):n(Object(_.a)(r))}(e)},id:"select-region",className:t?"dark-theme-class-lighter":"light-theme-class",children:[Object(o.jsx)("option",{value:"",children:"Filter by Region"}),Object(o.jsx)("option",{value:"Africa",children:"Africa"}),Object(o.jsx)("option",{value:"Americas",children:"America"}),Object(o.jsx)("option",{value:"Asia",children:"Asia"}),Object(o.jsx)("option",{value:"Europe",children:"Europe"}),Object(o.jsx)("option",{value:"Oceania",children:"Oceania"})]})]})},W=B.a.div(p||(p=Object(T.a)(["\n    position:relative;\n    width:100%:\n    height:15rem;\n    padding:2rem 5%;\n    color: hsl(0, 0%, 52%);\n    display:flex;\n    align-items:center;\n    justify-content:space-between;\n    \n    }\n\n    select{\n      width:12rem;\n      height:3rem;\n      border:none;\n      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n      font-size:1rem;\n      &:hover{\n        cursor:pointer;\n      }\n      option{\n       \n        \n      }\n    }\n    @media only screen and (max-width:680px){\n      flex-direction:column;\n      gap:2rem;\n    }\n"]))),q=B.a.div(x||(x=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  height: 3rem;\n  width: 26rem;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 0.4rem;\n  @media only screen and (max-width: 430px) {\n    width: 20rem;\n    input {\n      width: 12rem;\n    }\n  }\n  @media only screen and (max-width: 330px) {\n    width: 16rem;\n    input {\n      width: 9rem;\n    }\n  }\n  input {\n    height: 3rem;\n    width: 18rem;\n    border: none;\n    border-top-right-radius: 0.4rem;\n    border-bottom-right-radius: 0.4rem;\n    padding-left: 1rem;\n\n    &:focus {\n      outline: none;\n    }\n  }\n"]))),K=t(54),Q=function(e){var n=e.country,t=n.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),r=n.name,a=j();return Object(o.jsx)(z.b,{to:"/details/".concat(r),style:{textDecoration:"none"},children:Object(o.jsxs)(U,{className:a?"dark-theme-class-lighter":"light-theme-class",children:[Object(o.jsx)(V,{style:{backgroundImage:"url(".concat(n.flags.svg,")")}}),Object(o.jsxs)(X,{children:[Object(o.jsx)("h2",{children:n.name}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Population:"}),t]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Region:"}),n.region]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Capital:"}),n.capital]})]})]})})},U=B.a.div(g||(g=Object(T.a)(["\n  height: 25rem;\n  width: 20rem;\n  border-radius: 0.2rem;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  @media only screen and (max-width: 330px) {\n    width: 16rem;\n    height: 23rem;\n  }\n\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n"]))),V=B.a.div(O||(O=Object(T.a)(["\n  width: 100%;\n  height: 12rem;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n"]))),X=B.a.div(f||(f=Object(T.a)(["\n  height: 13rem;\n  padding: 1rem;\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  h2 {\n    margin-bottom: 1rem;\n  }\n  span {\n    letter-spacing: 0.1rem;\n    font-weight: 600;\n  }\n"]))),Y=function(){var e=m().setCountries,n=j(),t=Object(r.useState)([]),a=Object(s.a)(t,2),i=a[0],c=a[1],l=Object(r.useState)(!0),d=Object(s.a)(l,2),h=d[0],u=d[1];Object(r.useEffect)((function(){b()}),[]);var b=function(){var n=Object(F.a)(M.a.mark((function n(){var t,r;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://restcountries.com/v2/all");case 2:return t=n.sent,n.next=5,t.json();case 5:r=n.sent,e((function(){return Object(_.a)(r)})),c((function(){return Object(_.a)(r)})),u((function(e){return!e}));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return h?Object(o.jsxs)("div",{style:{minHeight:"90vh",display:"flex",alignItems:"center",justifyContent:"center"},className:n?"dark-theme-class":"light-theme-class",children:[Object(o.jsx)("h1",{children:"Loading..."}),Object(o.jsx)("div",{className:"lds-dual-ring"})]}):Object(o.jsxs)("div",{animate:{y:0},initial:{y:"100vw"},transition:{ease:"easeIn",duration:1.5},exit:{opacity:0,y:"100vw",transition:{duration:1.5}},children:[Object(o.jsx)(G,{countriesCoppy:i,setCountriesCoppy:c}),Object(o.jsx)(Z,{className:n?"dark-theme-class":"light-theme-class",children:i.length>0&&i.map((function(e){return Object(o.jsx)(Q,{country:e},e.numericCode)}))})]},"countries-container")},Z=Object(B.a)(K.a.section)(v||(v=Object(T.a)(["\n  min-height: 100vh;\n  padding: 2rem 5% 0 5%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 2rem;\n  flex-wrap: wrap;\n  @media only screen and (max-width: 1135px) {\n    justify-content: space-around;\n  }\n"]))),$=function(e){var n=e.name,t=e.data;return Object(o.jsxs)("p",{children:[Object(o.jsxs)(ee,{children:[n,":"]}),t]})},ee=B.a.span(w||(w=Object(T.a)(["\n  font-weight: 600;\n  margin: 0.2rem 0;\n  text-decoration: underline;\n"]))),ne=function(){var e,n=Object(E.g)().id.toLowerCase(),t=Object(r.useState)([]),a=Object(s.a)(t,2),i=a[0],c=a[1],l=j(),d=Object(r.useState)(!0),h=Object(s.a)(d,2),m=h[0],u=h[1];Object(r.useEffect)((function(){b()}),[]);var b=function(){var t=Object(F.a)(M.a.mark((function t(){var r,a;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://restcountries.com/v2/name/".concat(n));case 2:return r=t.sent,t.next=5,r.json();case 5:a=t.sent,c((function(){return Object(_.a)(a)})),i.length>0&&(e=i[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),u((function(e){return!e}));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return m?Object(o.jsxs)("div",{style:{minHeight:"90vh",display:"flex",alignItems:"center",justifyContent:"center"},className:l?"dark-theme-class":"light-theme-class",children:[Object(o.jsx)("h1",{children:"Loading..."}),Object(o.jsx)("div",{className:"lds-dual-ring"})]}):i.length>0&&Object(o.jsxs)(te,{exit:{opacity:0},className:l?"dark-theme-class":"light-theme-class",children:[Object(o.jsx)(re,{children:Object(o.jsx)(z.b,{to:"/",children:Object(o.jsxs)("button",{className:l?"dark-theme-class-lighter":"light-theme-class",children:[Object(o.jsx)(P.a,{icon:D.b}),"Go Back"]})})}),Object(o.jsxs)(ae,{children:[Object(o.jsx)(ie,{style:{backgroundImage:"url(".concat(i[0].flag,")")}}),Object(o.jsxs)(ce,{children:[Object(o.jsx)("h1",{children:i[0].name}),Object(o.jsxs)("div",{children:[Object(o.jsx)($,{name:"Native-name",data:i[0].nativeName}),Object(o.jsx)($,{name:"Population",data:e}),Object(o.jsx)($,{name:"Region",data:i[0].region}),Object(o.jsx)($,{name:"Sub Region",data:i[0].subregion}),Object(o.jsx)($,{name:"Capital",data:i[0].capital}),Object(o.jsxs)("p",{children:[Object(o.jsx)(se,{children:"Top Level Domain: "}),i[0].topLevelDomain.map((function(e){return Object(o.jsx)("span",{children:e},e)}))]}),Object(o.jsxs)("p",{children:[Object(o.jsx)(se,{children:"Currencies:"}),i[0].currencies&&i[0].currencies.map((function(e){return Object(o.jsxs)("span",{children:[e.name,"; "]},e.name)}))]}),Object(o.jsxs)("p",{children:[Object(o.jsx)(se,{children:"Languages:"}),i[0].languages.map((function(e){return Object(o.jsxs)("span",{children:[e.name," "]},e.name)}))]})]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("p",{children:"Border Countries:"}),i[0].borders?i[0].borders.map((function(e){return Object(o.jsx)("li",{children:e},e)})):Object(o.jsx)("p",{children:"This country has no borders."})]})]})]})]},"details-section")},te=Object(B.a)(K.a.section)(y||(y=Object(T.a)(["\n  min-height: 90vh;\n"]))),re=B.a.div(k||(k=Object(T.a)(["\n  height: 8rem;\n  width: 100%;\n  padding: 0 5%;\n  display: flex;\n  align-items: center;\n  button {\n    padding: 1rem 2rem;\n    border: none;\n    background: none;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    border-radius: 0.4rem;\n    &:hover {\n      transform: scale(1.1);\n      cursor: pointer;\n    }\n  }\n"]))),ae=Object(B.a)(K.a.div)(C||(C=Object(T.a)(["\n  height: 70vh;\n  width: 100%;\n  padding: 2rem 5%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n  @media only screen and (max-width: 1024px) {\n    flex-direction: column;\n  }\n"]))),ie=B.a.div(N||(N=Object(T.a)(["\n  width: 40%;\n  height: 25rem;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  @media only screen and (max-width: 1024px) {\n    width: 50%;\n    height: 30rem;\n  }\n"]))),ce=B.a.div(S||(S=Object(T.a)(["\n  width: 60%;\n  height: 25rem;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-around;\n  flex-direction: column;\n  @media only screen and (max-width: 1024px) {\n    width: 100%;\n  }\n  h1 {\n    margin: 0 0 1rem 0;\n  }\n  div {\n    display: grid;\n    width: 100%;\n    grid-template-columns: repeat(2, 1fr);\n    margin: 0.5rem 0;\n    p {\n      padding: 0.25rem;\n    }\n    @media only screen and (max-width: 1024px) {\n      align-items: center;\n      justify-content: center;\n    }\n    @media only screen and (max-width: 530px) {\n      grid-template-columns: 1fr;\n    }\n  }\n  ul {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.5em;\n    list-style-type: none;\n    margin: 0.5rem 0;\n    p {\n      padding: 0.2rem 0;\n      font-weight: 600;\n      font-size: 1.3rem;\n    }\n    li {\n      padding: 0.2rem 1rem;\n      margin: 0 0.2rem;\n      border: 1px solid hsl(0, 0%, 52%);\n      border-radius: 0.4rem;\n    }\n  }\n"]))),se=B.a.span(L||(L=Object(T.a)(["\n  font-weight: 600;\n  margin: 0.2rem 0;\n  text-decoration: underline;\n"]))),oe=function(){var e=j(),n=Object(r.useState)(!1),t=Object(s.a)(n,2),a=t[0],i=t[1];return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>300?i(!0):e<=300&&i(!1)})),Object(o.jsx)(le,{className:e?"dark-theme-class-lighter":"light-theme-class",style:{display:a?"block":"none"},onClick:function(){window.scrollTo({top:0})},children:Object(o.jsx)(P.a,{icon:D.a})})},le=Object(B.a)(K.a.button)(I||(I=Object(T.a)(["\n  position: fixed;\n  height: 4rem;\n  width: 4rem;\n  font-size: 1.7rem;\n  border: none;\n  background: none;\n  bottom: 1rem;\n  right: 1rem;\n  transition: transform 0.3s ease;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.2);\n  }\n"])));var de=function(){return Object(o.jsx)(z.a,{children:Object(o.jsx)(u,{children:Object(o.jsxs)(A.a,{children:[Object(o.jsx)(R,{},"navbar"),Object(o.jsxs)(E.c,{children:[Object(o.jsx)(E.a,{exact:!0,path:"/",element:Object(o.jsx)(Y,{})},"countries-container"),Object(o.jsx)(E.a,{exact:!0,path:"/details/:id",element:Object(o.jsx)(ne,{})},"details-container")]}),Object(o.jsx)(oe,{})]})})})};t(52);c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(de,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.2f962389.chunk.js.map