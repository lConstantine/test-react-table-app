(this["webpackJsonptest-react-table-app"]=this["webpackJsonptest-react-table-app"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(17),i=n.n(r),l=(n(26),n(8)),j=n.n(l),d=n(18),o=n(2),b=(n(28),n(19)),u=n.n(b),h=n(6),O=n(20),x=n.n(O),m=function(e){var t=e.data,n=e.onSelectRow,s=e.search,r=e.currentPage,i=e.setCurrentPage,l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(a.useState)(t),c=Object(o.a)(n,2),s=c[0],r=c[1],i=Object(a.useMemo)((function(){var t=Object(h.a)(e);return null!==s&&t.sort((function(e,t){return e[s.key]<t[s.key]?"asc"===s.direction?-1:1:e[s.key]>t[s.key]?"asc"===s.direction?1:-1:0})),t}),[e,s]),l=function(e){var t="asc";s&&s.key===e&&"asc"===s.direction&&(t="desc"),r({key:e,direction:t})};return{items:i,requestSort:l,sortConfig:s}}(t),j=l.items,d=l.requestSort,b=l.sortConfig,u=function(e,t){return t?e.filter((function(e){return e.firstName.toLowerCase().includes(t.toLowerCase())||e.lastName.toLowerCase().includes(t.toLowerCase())||e.email.toLowerCase().includes(t.toLowerCase())})):e}(j,s),O=Math.ceil(u.length/50),m=50*r,p=m-50,f=u.slice(p,m);return Object(c.jsxs)("div",{children:[Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsxs)("th",{onClick:function(){return d("id")},children:["Id ",b&&"id"===b.key?Object(c.jsx)("small",{children:b.direction}):null]}),Object(c.jsxs)("th",{onClick:function(){return d("firstName")},children:["First Name ",b&&"firstName"===b.key?Object(c.jsx)("small",{children:b.direction}):null]}),Object(c.jsxs)("th",{onClick:function(){return d("lastName")},children:["Last Name ",b&&"lastName"===b.key?Object(c.jsx)("small",{children:b.direction}):null]}),Object(c.jsxs)("th",{onClick:function(){return d("email")},children:["Email ",b&&"email"===b.key?Object(c.jsx)("small",{children:b.direction}):null]}),Object(c.jsxs)("th",{onClick:function(){return d("phone")},children:["Phone ",b&&"phone"===b.key?Object(c.jsx)("small",{children:b.direction}):null]})]})}),Object(c.jsx)("tbody",{children:f.map((function(e,t){return Object(c.jsxs)("tr",{onClick:function(){return n(e)},children:[Object(c.jsx)("td",{children:e.id}),Object(c.jsx)("td",{children:e.firstName}),Object(c.jsx)("td",{children:e.lastName}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.phone})]},t)}))})]}),t.length>50?Object(c.jsx)(x.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:O,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){i(e.selected+1)},containerClassName:"pagination",activeClassName:"active",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link"}):null]})},p=function(e){var t=e.row;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["User selected: ",Object(c.jsxs)("b",{children:[t.firstName," ",t.lastName]})]}),Object(c.jsx)("p",{children:"Details:"}),Object(c.jsx)("p",{children:Object(c.jsx)("textarea",{defaultValue:t.description})}),Object(c.jsxs)("p",{children:["Address: ",Object(c.jsx)("b",{children:t.address.streetAddress})]}),Object(c.jsxs)("p",{children:["City: ",Object(c.jsx)("b",{children:t.address.city})]}),Object(c.jsxs)("p",{children:["State: ",Object(c.jsx)("b",{children:t.address.state})]}),Object(c.jsxs)("p",{children:["Zip code: ",Object(c.jsx)("b",{children:t.address.zip})]})]})},f=function(e){var t=e.onSelectMode;return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(){return t("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")},children:"32 ITEMS"}),Object(c.jsx)("button",{className:"btn btn-warning",onClick:function(){return t("http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")},children:"1000 ITEMS"})]})},N=function(e){var t=e.onSearch,n=Object(a.useState)(""),s=Object(o.a)(n,2),r=s[0],i=s[1];return Object(c.jsxs)("div",{className:"input-group mb-3 mt-3",children:[Object(c.jsx)("input",{type:"text",className:"form-control",value:r,onChange:function(e){return i(e.target.value)}}),Object(c.jsx)("div",{className:"input-group-append",children:Object(c.jsx)("button",{className:"btn btn-outline-secondary",id:"search-button",onClick:function(){return t(r)},children:"Search"})})]})},g=function(e){var t=e.data,n=e.setData,s=Object(a.useState)(!1),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(a.useState)(""),d=Object(o.a)(j,2),b=d[0],u=d[1],O=Object(a.useState)(""),x=Object(o.a)(O,2),m=x[0],p=x[1],f=Object(a.useState)(""),N=Object(o.a)(f,2),g=N[0],v=N[1],C=Object(a.useState)(""),k=Object(o.a)(C,2),y=k[0],S=k[1],w=Object(a.useState)(""),L=Object(o.a)(w,2),F=L[0],P=L[1],M=Object(a.useState)(!1),D=Object(o.a)(M,2),I=D[0],A=D[1];Object(a.useEffect)((function(){""!==b&&""!==m&&""!==g&&""!==y&&""!==F&&(""!==b.trim&&""!==m.trim&&""!==g.trim&&""!==y.trim&&""!==F.trim?A(!0):A(!1))}),[b,m,g,y,F]);return i?Object(c.jsxs)("form",{className:"form",onSubmit:function(){var e=[{id:Number(b),firstName:m,lastName:g,email:y,phone:F,address:{streetAddress:"",city:"",state:"",zip:""},description:""}].concat(Object(h.a)(t));n(e),l(!i)},children:[Object(c.jsxs)("table",{className:"form-table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("label",{htmlFor:"id",children:"id"})}),Object(c.jsx)("td",{children:Object(c.jsx)("label",{htmlFor:"firstName",children:"firstName"})}),Object(c.jsx)("td",{children:Object(c.jsx)("label",{htmlFor:"lastName",children:"lastName"})}),Object(c.jsx)("td",{children:Object(c.jsx)("label",{htmlFor:"email",children:"email"})}),Object(c.jsx)("td",{children:Object(c.jsx)("label",{htmlFor:"phone",children:"phone"})})]})}),Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"text",id:"id",min:"0",max:"1000",value:b,onChange:function(e){return u(e.target.value)}})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"text",id:"firstName",value:m,onChange:function(e){return p(e.target.value)}})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"text",id:"lastName",value:g,onChange:function(e){return v(e.target.value)}})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"email",id:"email",value:y,onChange:function(e){return S(e.target.value)}})}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"tel",id:"phone",value:F,onChange:function(e){return P(e.target.value)}})})]})})]}),Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("button",{className:"btn btn-primary add-button",disabled:!I,children:"Add"}),Object(c.jsx)("button",{className:"btn btn-danger add-button",children:"Back"})]})]}):Object(c.jsx)("button",{className:"button-top btn btn-primary btn-sm",onClick:function(){return l(!i)},children:"Add Info"})},v=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!1),i=Object(o.a)(r,2),l=i[0],b=i[1],h=Object(a.useState)(!1),O=Object(o.a)(h,2),x=O[0],v=O[1],C=Object(a.useState)(null),k=Object(o.a)(C,2),y=k[0],S=k[1],w=Object(a.useState)(""),L=Object(o.a)(w,2),F=L[0],P=L[1],M=Object(a.useState)(1),D=Object(o.a)(M,2),I=D[0],A=D[1],E=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,u()(t).then((function(e){return s(e.data)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:b(!1);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return x?Object(c.jsxs)("div",{className:"container",children:[l?Object(c.jsx)("h1",{className:"loader",children:"Loading..."}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)(g,{data:n,setData:s}),Object(c.jsx)(N,{onSearch:function(e){P(e),A(1)}})]}),Object(c.jsx)(m,{data:n,onSelectRow:function(e){S(e)},search:F,currentPage:I,setCurrentPage:A})]}),y?Object(c.jsx)(p,{row:y}):null]}):Object(c.jsx)("div",{className:"mode-selector-container",children:Object(c.jsx)(f,{onSelectMode:function(e){E(e),v(!0)}})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(47);i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),C()}},[[48,1,2]]]);
//# sourceMappingURL=main.2969e930.chunk.js.map