(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),a=n.n(s),o=(n(12),n(2)),i=n(3),h=n(5),l=n(4),j=n(0),b=function(e){e.searchfield;var t=e.searchChange;return Object(j.jsx)("div",{className:"pa2",children:Object(j.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},d=function(e){return Object(j.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})},u=function(e){var t=e.id,n=e.name,r=e.email,c=e.username;return Object(j.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(j.jsx)("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"robots"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:n}),Object(j.jsx)("p",{children:r}),Object(j.jsxs)("code",{children:["ID: ",t]}),Object(j.jsx)("br",{}),Object(j.jsxs)("code",{children:["Username: ",c]})]})]})},O=function(e){var t=e.robots;return Object(j.jsx)("div",{children:t.map((function(e,n){return Object(j.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email,username:t[n].username},t[n].id)}))})},f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.state({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(j.jsx)("h1",{children:"Ooops. That is not good"}):this.props.children}}]),n}(r.Component),m=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}));return t.length?Object(j.jsxs)("div",{className:"tc",children:[Object(j.jsx)("h1",{className:"f1",children:"Robofriends"}),Object(j.jsx)(b,{searchChange:this.onSearchChange}),Object(j.jsx)(d,{children:Object(j.jsx)(f,{children:Object(j.jsx)(O,{robots:r})})})]}):Object(j.jsx)("h1",{className:"tc",children:"Loading..."})}}]),n}(r.Component));n(15);a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ddd13462.chunk.js.map