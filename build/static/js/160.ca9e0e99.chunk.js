(this["webpackJsonpanymay-app"]=this["webpackJsonpanymay-app"]||[]).push([[160],{2761:function(e,a,t){"use strict";t.r(a);var n=t(177),r=t(255),l=t(0),c=t.n(l),i=t(5),o=t(42),s=t(79),u=t(14),d=t(113),m=t(413),p=t(1442),f=t(1237),b=t(153),E=t(283),g=t(134),v=t(29),h=t(25),x=t(20),O=t.n(x),C=t(40),j=t(18),N=t(39),y=t.n(N),S=Object(j.b)("candidates/compare",function(){var e=Object(C.a)(O.a.mark((function e(a,t){var n,r,l,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.getState,r=n().candidatesCompare.candidates.compare,e.next=4,y.a.get("/api/candidates/compare",{params:{id:r},pagination:n().candidatesCompare.candidates.pagination,filter:n().candidatesCompare.candidates.filter});case 4:return l=e.sent,e.next=7,l.data;case 7:return c=e.sent,e.abrupt("return",{data:c,routeParams:a});case 9:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()),w=(Object(j.b)("candidatesApp/candidates/addCandidate",function(){var e=Object(C.a)(O.a.mark((function e(a,t){var n,r,l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,t.getState,e.next=3,y.a.post("/api/candidates-app/add-candidate",{candidate:a});case 3:return r=e.sent,e.next=6,r.data;case 6:return l=e.sent,n(S()),e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()),Object(j.c)({})),k=w.getSelectors((function(e){return e.candidatesCompare.candidates})),P=k.selectAll,I=(k.selectById,Object(j.d)({name:"candidates/compare",initialState:w.getInitialState(Object(h.a)({isGrid:!1,selectedMenu:null,leftPagination:{page:0,pageNumber:1,size:5},filter:{},jobid:null,compare:[],pagination:{sortBy:"createdDate",page:0,size:10},selectedItemId:"1",searchText:"",routeParams:{},candidateDialog:{type:"new",props:{open:!1},data:null}},"filter",{experience:[0,100],location:[],industry:[],rating:[0,10],level:[],salary:[0,100],skill:[],tag:[]})),reducers:{setSelectedItem:function(e,a){e.selectedItemId=a.payload},setCandidatesSearchText:{reducer:function(e,a){e.searchText=a.payload},prepare:function(e){return{payload:e.target.value||""}}},setCompare:function(e,a){var t=a.payload.id.split(",").map((function(e){return parseInt(e)}));t=t.filter((function(e,a){return t.indexOf(e)==a})),e.compare=t},showCandidate:function(e,a){e.candidate={type:"edit",props:{open:!0},data:a.payload}},updatePagination:function(e,a){e.pagination={sortBy:a.payload.sortBy,page:a.payload.page,size:a.payload.size}},updateleftPagination:function(e,a){e.leftPagination={page:a.payload.page,pageNumber:a.payload.pageNumber,size:a.payload.size}},removeCandidate:function(e,a){e.compare=e.compare.filter((function(e){return e!==parseInt(a.payload)}))},addToBoard:function(e,a){},updateFilter:function(e,a){e.filter=a.payload},clearFilter:function(e,a){e.filter={experience:[0,100],location:[],industry:[],rating:[0,10],level:[],salary:[0,100],skill:[],tag:[]}}},extraReducers:Object(h.a)({},S.fulfilled,(function(e,a){var t=a.payload,n=t.data,r=t.routeParams;w.setAll(e,n),e.routeParams=r,e.searchText=""}))})),R=I.actions,T=R.updateFilter,z=R.clearFilter,M=R.setCompare,A=R.setSelectedItem,F=R.setCandidatesSearchText,B=R.removeCandidate,D=R.updateleftPagination,L=R.addToBoard,H=I.reducer,_=t(1188),V=t(608),W=t(662),G=t(1232),U=t(2),J=Object(W.a)((function(e){return{root:{},inputWrapper:{backgroundColor:e.palette.primary.dark}}}));function q(e){var a=Object(i.c)(),t=Object(i.d)((function(e){return e.candidatesCompare.candidates.searchText})),n=J(e),r=Object(l.useState)(!1),o=Object(u.a)(r,2),s=o[0],d=o[1];function m(){d(!0),document.addEventListener("keydown",f,!1)}function p(){d(!1),document.removeEventListener("keydown",f,!1)}function f(e){27===e.keyCode&&p()}return c.a.createElement("div",{className:Object(U.default)(n.root,"flex",e.className)},c.a.createElement(G.a,{title:"Click to search",placement:"bottom"},c.a.createElement("div",{onClick:m,onKeyDown:m,role:"button",tabIndex:0},e.trigger)),s&&c.a.createElement(_.a,{onClickAway:function(){p()}},c.a.createElement("div",{className:Object(U.default)(n.inputWrapper,"absolute left-0 right-0 top-0 bottom-0 h-full z-9999 px-8 sm:px-24")},c.a.createElement("div",{className:"flex items-center w-full h-full"},c.a.createElement(V.a,{placeholder:"Search for anything",className:"flex flex-1 py-0 px-16 h-64",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:function(e){return a(F(e))},autoFocus:!0}),c.a.createElement(E.a,{onClick:p,className:"mx-8"},c.a.createElement(b.a,null,"close"))))))}q.defaultProps={trigger:c.a.createElement(E.a,{className:"w-64 h-64"},c.a.createElement(b.a,{color:"primary"},"search"))};var K=q;var Q=function(e){Object(i.c)();var a=Object(i.d)((function(e){return e.candidatesCompare.candidates})),t=(Object(i.d)((function(e){return e.candidatesCompare.candidates.searchText})),Object(i.d)(v.e),c.a.useState(!1)),n=Object(u.a)(t,2),r=(n[0],n[1],c.a.useRef(null),c.a.useState(1)),l=Object(u.a)(r,2);return l[0],l[1],c.a.createElement("div",{className:"flex flex-1 items-center justify-between p-4 sm:p-24"},c.a.createElement("div",{className:"flex flex-shrink items-center sm:w-224"},c.a.createElement(f.a,{lgUp:!0},c.a.createElement(E.a,{onClick:function(a){e.pageLayout.current.toggleLeftSidebar()},"aria-label":"open left sidebar"},c.a.createElement(b.a,null,"menu"))),c.a.createElement("div",{className:"flex items-center"},c.a.createElement(d.a,{animation:"transition.expandIn",delay:300},c.a.createElement(b.a,{className:"text-32"},"people")),c.a.createElement(d.a,{animation:"transition.slideLeftIn",delay:300},c.a.createElement(g.a,{variant:"h6",className:"mx-12 hidden sm:flex"},a.ids.length," Candidates")))),c.a.createElement("div",{className:"flex flex-1 items-center justify-end"}),c.a.createElement("div",{className:"flex flex-1 items-center justify-end"},c.a.createElement(p.a,null,c.a.createElement(m.a,{variant:"contained",startIcon:c.a.createElement(b.a,{className:"text-20"},"save_alt")},"Import CSV"),c.a.createElement(m.a,{variant:"contained",startIcon:c.a.createElement(b.a,{className:"text-20"},"add")},"Add Candidate"))))},X=t(24),Y=t(647),Z=t(1238),$=t(245),ee=t(248),ae=t(152),te=t(461),ne=t(1192);var re=function(e){var a=Object(i.c)(),t=e.selectedCandidateIds,n=Object(l.useState)(null),r=Object(u.a)(n,2),o=r[0],s=r[1];function d(){s(null)}return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{className:"p-0","aria-owns":o?"selectedCandidatesMenu":null,"aria-haspopup":"true",onClick:function(e){s(e.currentTarget)}},c.a.createElement(b.a,null,"more_horiz")),c.a.createElement(te.a,{id:"selectedCandidatesMenu",anchorEl:o,open:Boolean(o),onClose:d},c.a.createElement(ne.a,null,c.a.createElement($.a,{onClick:function(){a(B(t)),d()}},c.a.createElement(ee.a,{className:"min-w-40"},c.a.createElement(b.a,null,"delete")),c.a.createElement(ae.a,{primary:"Remove"})),c.a.createElement($.a,{onClick:function(){d()}},c.a.createElement(ee.a,{className:"min-w-40"},c.a.createElement(b.a,null,"star")),c.a.createElement(ae.a,{primary:"Starred"})),c.a.createElement($.a,{onClick:function(){d()}},c.a.createElement(ee.a,{className:"min-w-40"},c.a.createElement(b.a,null,"star_border")),c.a.createElement(ae.a,{primary:"Unstarred"})))))},le=t(11),ce=t(139),ie=t(1236),oe=t(1417),se=t(1419),ue=t(1393),de=t(1424),me=t(1441),pe=t(1390),fe=t(1418),be=t(1389),Ee=t(1381),ge=t(1331),ve=t.n(ge),he=t(1312),xe=t.n(he),Oe=t(1311),Ce=t.n(Oe),je=t(1330),Ne=t.n(je),ye=t(46),Se=function(e){var a=Object(ye.a)(),t=e.count,n=e.page,r=e.rowsPerPage,l=e.onChangePage;return c.a.createElement("div",{className:"flex-shrink-0 px-12 overflow-hidden"},c.a.createElement(E.a,{onClick:function(e){l(e,0)},disabled:0===n,"aria-label":"first page"},"rtl"===a.direction?c.a.createElement(Ne.a,null):c.a.createElement(ve.a,null)),c.a.createElement(E.a,{onClick:function(e){l(e,n-1)},disabled:0===n,"aria-label":"previous page"},"rtl"===a.direction?c.a.createElement(Ce.a,null):c.a.createElement(xe.a,null)),c.a.createElement(E.a,{onClick:function(e){l(e,n+1)},disabled:n>=Math.ceil(t/r)-1,"aria-label":"next page"},"rtl"===a.direction?c.a.createElement(xe.a,null):c.a.createElement(Ce.a,null)),c.a.createElement(E.a,{onClick:function(e){l(e,Math.max(0,Math.ceil(t/r)-1))},disabled:n>=Math.ceil(t/r)-1,"aria-label":"last page"},"rtl"===a.direction?c.a.createElement(ve.a,null):c.a.createElement(Ne.a,null)))},we=c.a.forwardRef((function(e,a){var t=e.indeterminate,n=Object(ce.a)(e,["indeterminate"]),r=c.a.useRef(),l=a||r;return c.a.useEffect((function(){l.current.indeterminate=t}),[l,t]),c.a.createElement(c.a.Fragment,null,c.a.createElement(ie.a,Object.assign({ref:l},n)))})),ke=function(e){var a=e.columns,t=e.data,n=e.onRowClick,r=Object(Ee.useTable)({columns:a,data:t,autoResetPage:!0},Ee.useGlobalFilter,Ee.useSortBy,Ee.usePagination,Ee.useRowSelect,(function(e){e.allColumns.push((function(e){return[{id:"selection",sortable:!1,Header:function(e){var a=e.getToggleAllRowsSelectedProps;return c.a.createElement("div",null,c.a.createElement(we,a()))},Cell:function(e){var a=e.row;return c.a.createElement("div",null,c.a.createElement(we,Object.assign({},a.getToggleRowSelectedProps(),{onClick:function(e){return e.stopPropagation()}})))}}].concat(Object(le.a)(e))}))})),l=r.getTableProps,i=r.headerGroups,o=r.prepareRow,s=r.page,u=r.gotoPage,d=r.setPageSize,m=r.state,p=m.pageIndex,f=m.pageSize;return c.a.createElement("div",{className:"flex flex-col min-h-half sm:border-1 overflow-hidden"},c.a.createElement(de.a,{className:"flex flex-1"},c.a.createElement(oe.a,Object.assign({},l(),{stickyHeader:!0}),c.a.createElement(me.a,null,i.map((function(e){return c.a.createElement(fe.a,e.getHeaderGroupProps(),e.headers.map((function(e){return c.a.createElement(ue.a,Object.assign({className:"whitespace-no-wrap p-4 md:p-12"},e.sortable?e.getHeaderProps(e.getSortByToggleProps()):e.getHeaderProps()),e.render("Header"),e.sortable?c.a.createElement(be.a,{active:e.isSorted,direction:e.isSortedDesc?"desc":"asc"}):null)})))}))),c.a.createElement(se.a,null,s.map((function(e,a){return o(e),c.a.createElement(fe.a,Object.assign({},e.getRowProps(),{onClick:function(a){return n(a,e)},className:"truncate cursor-pointer"}),e.cells.map((function(e){return c.a.createElement(ue.a,Object.assign({},e.getCellProps(),{className:Object(U.default)("p-4 md:p-12",e.column.className)}),e.render("Cell"))})))}))))),c.a.createElement(pe.a,{component:"div",classes:{root:"flex-shrink-0 border-t-1"},rowsPerPageOptions:[5,10,25,{label:"All",value:t.length+1}],colSpan:5,count:t.length,rowsPerPage:f,page:p,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!1},onChangePage:function(e,a){u(a)},onChangeRowsPerPage:function(e){d(Number(e.target.value))},ActionsComponent:Se}))},Pe=function(e){var a=e.columns,t=e.data,n=e.onRowClick,r=Object(Ee.useTable)({columns:a,data:t,autoResetPage:!0},Ee.useGlobalFilter,Ee.useSortBy,Ee.usePagination,Ee.useRowSelect,(function(e){e.allColumns.push((function(e){return Object(le.a)(e)}))})),l=r.getTableProps,i=(r.headerGroups,r.prepareRow),o=r.page,s=(r.gotoPage,r.setPageSize,r.state);s.pageIndex,s.pageSize;return c.a.createElement("div",{className:"mt-36 flex flex-col min-h-50 sm:border-1 overflow-hidden"},c.a.createElement(de.a,{className:"flex flex-1"},c.a.createElement(oe.a,Object.assign({},l(),{stickyHeader:!0}),c.a.createElement(me.a,null,c.a.createElement(fe.a,null,c.a.createElement(ue.a,{colSpan:"8"},"Job Skills"))),c.a.createElement(se.a,null,o.map((function(e,a){return i(e),c.a.createElement(fe.a,Object.assign({},e.getRowProps(),{onClick:function(a){return n(a,e)},className:"truncate cursor-pointer"}),e.cells.map((function(e){return c.a.createElement(ue.a,Object.assign({},e.getCellProps(),{className:Object(U.default)("p-4 md:p-12",e.column.className)}),e.render("Cell"))})))}))))))},Ie=[{value:"Change Status",icon:""},{value:"Change Progress",icon:"show_chart"},{value:"Change Rating",icon:"star"},{value:"Add To Board",icon:"developer_board"},{value:"Archive",icon:"archive"}];var Re=function(e){var a=c.a.useState(null),t=Object(u.a)(a,2),n=t[0],r=t[1],l=Object(i.c)();var o=e.data;return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{onClick:function(e){e.preventDefault(),e.stopPropagation(),r(e.currentTarget)}},c.a.createElement(b.a,null,"more_vert")),c.a.createElement(te.a,{id:"card-actions-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(e){e.preventDefault(),e.stopPropagation(),r(null)}},Ie.map((function(e,a){return c.a.createElement($.a,{onClick:function(e){e.preventDefault(),e.stopPropagation(),function(e,a){console.log(a),2===e&&l(L(a.id))}(a,o)}},c.a.createElement(b.a,{className:"mr-10",fontSize:"small"},e.icon),e.value)}))))},Te=function(e){var a=Object(i.c)(),t=Object(i.d)(P),n=(c.a.useRef(null),Object(i.d)((function(e){return e.candidatesCompare.candidates.searchText}))),r=Object(l.useState)(null),o=Object(u.a)(r,2),s=o[0],m=o[1],p=Object(l.useState)(null),f=Object(u.a)(p,2),v=f[0],h=f[1],x=c.a.useMemo((function(){return[{Header:function(e){var a=e.selectedFlatRows,t=a.map((function(e){return e.original.id}));return a.length>0&&c.a.createElement(re,{selectedCandidateIds:t})},accessor:"avatar",Cell:function(e){var a=e.row;return c.a.createElement(Y.a,{className:"mx-8",alt:a.original.applicant.firstName,src:a.original.applicant.avatar})},className:"justify-center",width:64,sortable:!1},{Header:"Applicants",accessor:"firstName",Cell:function(e){var a=e.row;return c.a.createElement(g.a,{className:"mx-8"},a.original.applicant.firstName," ",a.original.applicant.lastName)},className:"font-bold",sortable:!0},{Header:"Experience",accessor:"noOfMonths",Cell:function(e){var a=e.row;return c.a.createElement(g.a,{className:"mx-8"},(a.original.applicant.noOfMonths/12).toFixed(2))},sortable:!0},{Header:"Level",accessor:"level",Cell:function(e){var a=e.row;return c.a.createElement(g.a,{className:"mx-8"},a.original.applicant.level)},sortable:!0},{Header:"Rate",accessor:"rating",sortable:!0},{Header:"Salary",accessor:"salary",Cell:function(e){var a=e.row;return c.a.createElement(g.a,{className:"mx-8"},a.original.applicant.salary)},sortable:!0},{Header:"Started Date",accessor:"appliedOn",sortable:!0},{id:"action",width:128,sortable:!1,Cell:function(e){var t=e.row;return c.a.createElement("div",{className:"flex items-center"},c.a.createElement(E.a,{onClick:function(e){e.stopPropagation(),a(B(t.original.id)),a(S())}},c.a.createElement(b.a,null,"delete")),c.a.createElement(Re,{data:t.original}))}}]}),[a]),O=c.a.useMemo((function(){return[{Header:"Skill",accessor:"name",Cell:function(e){var a=e.row;return c.a.createElement(Z.a,{label:a.original.skill.name,clickable:!0,color:"primary"})},className:"w-56 font-bold",sortable:!0},{Header:"Applicants",accessor:"avatar",Cell:function(e){var a=e.row;return c.a.createElement("div",{className:"flex"},a.original.applicants.map((function(e){return c.a.createElement(Y.a,{src:e.avatar,alt:e.firstName})})))},className:"justify-center",width:64,sortable:!1}]}),[a]);return Object(l.useEffect)((function(){var e;t&&(m(0===(e=n).length?t:X.a.filterArrayByString(t,e)),function(){var e=[];t.forEach((function(a){a.applicant.skills.forEach((function(t){var n=a.applicant,r=e.findIndex((function(e){return e.skill.id===t.id}));r>-1?e[r].applicants.push(n):e.push({skill:t,applicants:[n]})}))})),h(e)}())}),[t,n]),s?0===s.length?c.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},c.a.createElement(g.a,{color:"textSecondary",variant:"h5"},"There are no candidates!")):c.a.createElement(d.a,{animation:"transition.slideUpIn",delay:300},c.a.createElement(c.a.Fragment,null,c.a.createElement(ke,{columns:x,data:s,onRowClick:function(e,t){t&&a(A(t.original.id))}}),v?c.a.createElement(Pe,{columns:O,data:v,onRowClick:function(e,t){t&&a(A(t.original.id))}}):null)):null},ze=t(176),Me=t(1254),Ae=t(1350),Fe=t(1349),Be=t(1225),De=Object(j.b)("candidates/suggestions",function(){var e=Object(C.a)(O.a.mark((function e(a,t){var n,r,l,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.getState,r=n().candidatesCompare.candidates.jobId,e.next=4,y.a.get("/api/candidates/suggestions",{params:{jobId:r,page:n().candidatesCompare.candidates.pagination.page,size:n().candidatesCompare.candidates.pagination.size}});case 4:return l=e.sent,e.next=7,l.data;case 7:return c=e.sent,e.abrupt("return",{data:c,routeParams:a});case 9:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()),Le=Object(j.d)({name:"candidates/suggestions",initialState:{},pagination:{sortBy:"createdDate",page:0,size:10},selected:[],reducers:{setSelected:function(e,a){var t=a.payload.id.split(",").map((function(e){return parseInt(e)}));t=t.filter((function(e,a){return t.indexOf(e)==a})),e.selected=t}},extraReducers:Object(h.a)({},De.fulfilled,(function(e,a){return a.payload}))}),He=Le.actions.setSelected,_e=Le.reducer,Ve=t(9),We=t(95),Ge=t(1425),Ue=t(1426),Je=t(1427),qe=t(1291),Ke=t.n(qe),Qe=t(670),Xe=t(668),Ye=t(669),Ze=t(642),$e=t(324),ea=t(213),aa=t(2784),ta=t(1234),na=Object(j.d)({name:"chatApp/sidebars",initialState:{mobileChatsSidebarOpen:!1,filterSidebarOpen:!1,contactSidebarOpen:!1},reducers:{openMobileChatsSidebar:function(e,a){e.mobileChatsSidebarOpen=!0},closeMobileChatsSidebar:function(e,a){e.mobileChatsSidebarOpen=!1},openFilterSidebar:function(e,a){e.filterSidebarOpen=!0},closeFilterSidebar:function(e,a){e.filterSidebarOpen=!1},openContactSidebar:function(e,a){e.contactSidebarOpen=!0},closeContactSidebar:function(e,a){e.contactSidebarOpen=!1}}}),ra=na.actions,la=(ra.openMobileChatsSidebar,ra.closeMobileChatsSidebar,ra.openFilterSidebar),ca=ra.closeFilterSidebar,ia=(ra.openContactSidebar,ra.closeContactSidebar,na.reducer),oa=t(1685),sa=["Intern","Junior","Senior","Manager","Director","Executive"],ua=Object(W.a)((function(e){return{listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:"".concat(e.palette.secondary.contrastText,"!important"),pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{marginRight:16}}}}));function da(e){return"".concat(e)}var ma=function(e){Object(i.d)((function(e){return e.candidatesCompare.user}));var a=Object(i.d)((function(e){return e.candidatesCompare.candidates.filter})),t=Object(i.d)((function(e){return e.candidatesCompare.address})),n=Object(i.d)((function(e){return e.candidatesCompare.skill})),r=Object(i.d)((function(e){return e.candidatesCompare.industry}));console.log("skills"),console.log(n);var s=c.a.useState(a.experience),p=Object(u.a)(s,2),f=p[0],v=p[1],h=c.a.useState(a.location),x=Object(u.a)(h,2),O=x[0],C=x[1],j=c.a.useState(a.industry),N=Object(u.a)(j,2),y=N[0],w=N[1],k=c.a.useState(a.skill),P=Object(u.a)(k,2),I=P[0],R=P[1],M=c.a.useState(a.level),A=Object(u.a)(M,2),F=A[0],B=A[1],D=c.a.useState(a.salary),L=Object(u.a)(D,2),H=L[0],_=L[1],V=c.a.useState(a.rating),W=Object(u.a)(V,2),G=W[0],U=W[1],J=c.a.useState(""),q=Object(u.a)(J,2),K=q[0],Q=q[1],X=c.a.useState(""),Y=Object(u.a)(X,2),Z=Y[0],$=Y[1],ee=c.a.useState(""),te=Object(u.a)(ee,2),ne=te[0],re=te[1],ce=c.a.useState(""),oe=Object(u.a)(ce,2),se=oe[0],ue=oe[1],de=c.a.useState(""),me=Object(u.a)(de,2),pe=me[0],fe=me[1],be=c.a.useState(""),Ee=Object(u.a)(be,2),ge=Ee[0],ve=Ee[1],he=Object(o.j)();Object(l.useEffect)((function(){v(a.experience),C(a.location.map((function(e){return{checked:!0,value:e}}))),w(a.industry.map((function(e){return{checked:!0,value:e}}))),R(a.skill.map((function(e){return{checked:!0,value:e}}))),B(a.level),_(a.salary),U(a.rating)}),[a]);var xe=Object(i.c)(),Oe=ua(e),Ce=function(e){var a=O;a=a.map((function(a){return a.value===e.target.name?Object(Ve.a)(Object(Ve.a)({},a),{},{checked:e.target.checked}):a})),C(a)},je=function(e){var a=I;a=a.map((function(a){return a.value===e.target.name?Object(Ve.a)(Object(Ve.a)({},a),{},{checked:e.target.checked}):a})),R(a)},Ne=function(e){var a=y;a=a.map((function(a){return a.value===e.target.name?Object(Ve.a)(Object(Ve.a)({},a),{},{checked:e.target.checked}):a})),w(a)},ye=function(e){var a=F;a=e.target.checked?[].concat(Object(le.a)(a),[e.target.name]):a.filter((function(a){return a!==e.target.name})),B(a)};return c.a.createElement("div",{className:"p-0"},c.a.createElement(d.a,{animation:"transition.slideLeftIn",delay:200},c.a.createElement(ea.a,{className:"rounded-0 shadow-none lg:rounded-8 lg:shadow-1"},c.a.createElement("div",{className:"p-24 flex"},c.a.createElement(E.a,{color:"primary",onClick:function(){return xe(ca())}},c.a.createElement(b.a,null,"close")),c.a.createElement(m.a,{variant:"outlined",color:"primary",className:"w-full",onClick:function(e){xe(z()),xe(S())}},"Clear Filters")),c.a.createElement("div",{className:Oe.root},c.a.createElement(Ge.a,{className:"m-0",defaultExpanded:"true"},c.a.createElement(Ue.a,{expandIcon:c.a.createElement(Ke.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},c.a.createElement(g.a,{className:Oe.heading},"Experiences")),c.a.createElement(Je.a,{className:"block"},c.a.createElement("div",{className:"w-full m-0"},c.a.createElement(aa.a,{value:f,onChange:function(e,a){v(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:da})),c.a.createElement("div",{className:"flex w-full m-0"},c.a.createElement(ta.a,{id:"outlined-name",label:"min",value:f[0],variant:"outlined"}),c.a.createElement(ta.a,{id:"outlined-uncontrolled",label:"max",value:f[1],variant:"outlined"})))),c.a.createElement(Ge.a,{defaultExpanded:"true"},c.a.createElement(Ue.a,{expandIcon:c.a.createElement(Ke.a,null),"aria-controls":"panel2a-content",id:"panel2a-header"},c.a.createElement(g.a,{className:Oe.heading},"Locations")),c.a.createElement(Je.a,{className:"block"},t&&t.hasOwnProperty("data")&&c.a.createElement(oa.a,{value:K,inputValue:Z,onChange:function(e,a){!function(e,a){var t=O;a&&0===t.filter((function(e){return e.value===a})).length&&(t=[].concat(Object(le.a)(t),[{checked:!1,value:a}]),C(t)),Q(""),$("")}(0,a)},onInputChange:function(e,a){$(a)},options:t&&t.hasOwnProperty("data")&&t.data.map((function(e){return e.city})),renderInput:function(e){return c.a.createElement(ta.a,Object.assign({},e,{label:"Search Locations",variant:"outlined",fullWidth:!0}))}}),c.a.createElement("div",{className:"w-full"},c.a.createElement(Qe.a,{component:"fieldset",className:Oe.formControl+" w-full"},c.a.createElement(Xe.a,{className:"w-full"},O&&O.length>0&&O.slice(0,8).map((function(e){return c.a.createElement("div",{className:"w-full flex flex-row justify-between items-center "},c.a.createElement(Ye.a,{control:c.a.createElement(ie.a,{checked:e.checked,onChange:Ce,name:e.value}),label:e.value}),c.a.createElement(E.a,{className:"w-24 h-24",onClick:function(a){C(O.filter((function(a){return a.value!==e.value})))}},c.a.createElement(b.a,{fontSize:"small"},"clear")))})))),O&&O.length>8&&c.a.createElement(m.a,{variant:"outlined"},"Show More")))),c.a.createElement(Ge.a,{defaultExpanded:"true"},c.a.createElement(Ue.a,{expandIcon:c.a.createElement(Ke.a,null),"aria-controls":"panel2a-content",id:"panel2a-header"},c.a.createElement(g.a,{className:Oe.heading},"Skills")),c.a.createElement(Je.a,{className:"block"},n&&n.hasOwnProperty("data")&&c.a.createElement(oa.a,{value:pe,inputValue:ge,onChange:function(e,a){!function(e,a){var t=I;a&&0===t.filter((function(e){return e.value===a})).length&&(t=[].concat(Object(le.a)(t),[{checked:!1,value:a}]),R(t)),fe(""),ve("")}(0,a)},onInputChange:function(e,a){ve(a)},options:n&&n.hasOwnProperty("data")&&n.data.map((function(e){return e.name})),renderInput:function(e){return c.a.createElement(ta.a,Object.assign({},e,{label:"Search Skills",variant:"outlined",fullWidth:!0}))}}),c.a.createElement("div",{className:"w-full"},c.a.createElement(Qe.a,{component:"fieldset",className:Oe.formControl+" w-full"},c.a.createElement(Xe.a,{className:"w-full"},I&&I.length>0&&I.slice(0,8).map((function(e){return c.a.createElement("div",{className:"w-full flex flex-row justify-between items-center "},c.a.createElement(Ye.a,{control:c.a.createElement(ie.a,{checked:e.checked,onChange:je,name:e.value}),label:e.value}),c.a.createElement(E.a,{className:"w-24 h-24",onClick:function(a){R(I.filter((function(a){return a.value!==e.value})))}},c.a.createElement(b.a,{fontSize:"small"},"clear")))})))),I&&I.length>8&&c.a.createElement(m.a,{variant:"outlined"},"Show More")))),c.a.createElement(Ge.a,{defaultExpanded:"true"},c.a.createElement(Ue.a,{expandIcon:c.a.createElement(Ke.a,null),"aria-controls":"panel2a-content",id:"panel2a-header"},c.a.createElement(g.a,{className:Oe.heading},"Industries")),c.a.createElement(Je.a,{className:"block"},r&&r.hasOwnProperty("data")&&c.a.createElement(oa.a,{value:ne,inputValue:se,onChange:function(e,a){!function(e,a){var t=y;a&&0===t.filter((function(e){return e.value===a})).length&&(t=[].concat(Object(le.a)(t),[{checked:!1,value:a}]),w(t)),re(""),ue("")}(0,a)},onInputChange:function(e,a){ue(a)},options:r&&r.hasOwnProperty("data")&&r.data.map((function(e){return e.name})),renderInput:function(e){return c.a.createElement(ta.a,Object.assign({},e,{label:"Search Industries",variant:"outlined",fullWidth:!0}))}}),c.a.createElement("div",{className:"w-full"},c.a.createElement(Qe.a,{component:"fieldset",className:Oe.formControl+" w-full"},c.a.createElement(Xe.a,{className:"w-full"},y&&y.length>0&&y.slice(0,8).map((function(e){return c.a.createElement("div",{className:"w-full flex flex-row justify-between items-center "},c.a.createElement(Ye.a,{control:c.a.createElement(ie.a,{checked:e.checked,onChange:Ne,name:e.value}),label:e.value}),c.a.createElement(E.a,{className:"w-24 h-24",onClick:function(a){w(y.filter((function(a){return a.value!==e.value})))}},c.a.createElement(b.a,{fontSize:"small"},"clear")))})))),y&&y.length>8&&c.a.createElement(m.a,{variant:"outlined"},"Show More")))),c.a.createElement(Ge.a,{defaultExpanded:"true"},c.a.createElement(Ue.a,{expandIcon:c.a.createElement(Ke.a,null),"aria-controls":"panel2a-content",id:"panel2a-header"},c.a.createElement(g.a,{className:Oe.heading},"Levels")),c.a.createElement(Je.a,null,c.a.createElement(Qe.a,{component:"fieldset",className:Oe.formControl+" w-full"},c.a.createElement(Xe.a,{className:"w-full"},sa.map((function(e){return c.a.createElement(Ye.a,{control:c.a.createElement(ie.a,{onChange:ye,name:e}),label:e})})))))),c.a.createElement(Ge.a,{defaultExpanded:"true"},c.a.createElement(Ue.a,{expandIcon:c.a.createElement(Ke.a,null),"aria-controls":"panel2a-content",id:"panel2a-header"},c.a.createElement(g.a,{className:Oe.heading},"Salaries")),c.a.createElement(Je.a,{className:"block"},c.a.createElement("div",{className:"w-full m-0"},c.a.createElement(aa.a,{value:H,onChange:function(e,a){_(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:da,max:10})),c.a.createElement("div",{className:"flex w-full m-0"},c.a.createElement(ta.a,{id:"outlined-name",label:"min",value:H[0],variant:"outlined"}),c.a.createElement(ta.a,{id:"outlined-uncontrolled",label:"max",value:H[1],variant:"outlined"})))),c.a.createElement(Ge.a,{defaultExpanded:"true"},c.a.createElement(Ue.a,{expandIcon:c.a.createElement(Ke.a,null),"aria-controls":"panel2a-content",id:"panel2a-header"},c.a.createElement(g.a,{className:Oe.heading},"Ratings")),c.a.createElement(Je.a,{className:"block"},c.a.createElement("div",{className:"w-full m-0"},c.a.createElement(aa.a,{value:G,onChange:function(e,a){U(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:da,max:10})),c.a.createElement("div",{className:"flex w-full m-0"},c.a.createElement(ta.a,{id:"outlined-name",label:"min",value:G[0],variant:"outlined"}),c.a.createElement(ta.a,{id:"outlined-uncontrolled",label:"max",value:G[1],variant:"outlined"}))))),c.a.createElement(Ze.a,{className:"pt-0"},c.a.createElement($e.a,{button:!0,component:We.a,to:"/talent/candidates/all",activeClassName:"active",className:Oe.listItem},c.a.createElement(b.a,{className:"list-item-icon text-16",color:"action"},"people"),c.a.createElement(ae.a,{className:"truncate",primary:"All candidates",disableTypography:!0})),c.a.createElement($e.a,{button:!0,component:We.a,to:"/talent/candidates/frequent",activeClassName:"active",className:Oe.listItem},c.a.createElement(b.a,{className:"list-item-icon text-16",color:"action"},"restore"),c.a.createElement(ae.a,{className:"truncate",primary:"Frequently candidateed",disableTypography:!0})),c.a.createElement($e.a,{button:!0,component:We.a,to:"/talent/candidates/starred",activeClassName:"active",className:Oe.listItem},c.a.createElement(b.a,{className:"list-item-icon text-16",color:"action"},"star"),c.a.createElement(ae.a,{className:"truncate",primary:"Starred candidates",disableTypography:!0}))),c.a.createElement("div",{className:"p-24"},c.a.createElement(m.a,{variant:"contained",color:"primary",className:"w-full",onClick:function(){var e={experience:f,skill:I.filter((function(e){return!0===e.checked})).map((function(e){return e.value})),location:O.filter((function(e){return!0===e.checked})).map((function(e){return e.value})),industry:y.filter((function(e){return!0===e.checked})).map((function(e){return e.value})),level:F,rating:G,salary:H,jobId:he.jobId};xe(T(e)),xe(S(e))}},"Apply")))))},pa=["Add to Comparison"],fa=Object(W.a)((function(e){return{cardBorder:{border:"1px solid #61dafb !important"}}}));var ba=function(e){var a=c.a.useState(null),t=Object(u.a)(a,2),n=t[0],r=t[1],l=Object(i.c)(),o=Object(i.d)((function(e){return e.candidatesCompare.candidates.compare}));Object(i.d)((function(e){return e.candidatesCompare.candidateSuggestions.selected}));var s=function(){r(null)},d=e.data;return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{onClick:function(e){var a;e.preventDefault(),e.stopPropagation(),a=d,r(e.currentTarget),l(He({id:a.id}))}},c.a.createElement(b.a,null,"more_vert")),c.a.createElement(te.a,{id:"card-actions-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(e){e.preventDefault(),e.stopPropagation(),s(e)}},pa.map((function(e,a){return c.a.createElement($.a,{onClick:function(e){var a;e.preventDefault(),e.stopPropagation(),a=d,l(M({id:o.toString()+","+a.id})),l(S()),s()}},e)}))))},Ea=function(e){var a=Object(i.c)(),t=fa(),n=(Object(ye.a)(),Object(i.d)((function(e){return e.candidatesCompare.candidateSuggestions.data}))),r=Object(i.d)((function(e){return e.candidatesCompare.candidates.leftPagination})),l=Object(i.d)((function(e){return e.candidatesCompare.candidateSuggestions.selected})),o=Object(i.d)((function(e){return e.candidatesCompare.sidebars.filterSidebarOpen}));return console.log(l),console.log(l&&l.includes(1)),console.log("suggestion",n),n?c.a.createElement("div",{className:"flex flex-col flex-auto flex-shrink-0"},c.a.createElement(Be.a,{className:"h-full absolute z-30",variant:"temporary",anchor:"left",open:o,onClose:function(){return a(ca())},classes:{paper:Object(U.default)(t.drawerPaper,"absolute left-0")},style:{position:"absolute"},ModalProps:{keepMounted:!1,disablePortal:!0,BackdropProps:{classes:{root:"absolute"}}}},c.a.createElement(ma,null)),c.a.createElement(ze.a,{enter:{animation:"transition.slideUpBigIn"},className:"flex flex-wrap m-5"},n.slice(r.page*r.size,r.page*r.size+r.size).map((function(e){return c.a.createElement("div",{className:"w-full pb-24 sm:p-16",key:e.id},c.a.createElement(Me.a,{elevation:1,className:(l&&l.includes(parseInt(e.id))?t.cardBorder:"")+" flex flex-col rounded-8 border-blue-900 ",onClick:function(){return function(e){var t=[];t=l&&l.indexOf(parseInt(e))>-1?l.filter((function(a){return a!==parseInt(e)})):[e],a(He({id:t.toString()}))}(e.id)}},c.a.createElement(Ae.a,{avatar:c.a.createElement(Y.a,{"aria-label":"Recipe",src:e.applicant.avatar}),action:c.a.createElement(ba,{data:e}),title:c.a.createElement("span",{className:"flex"},c.a.createElement(g.a,{className:"font-medium",color:"primary",paragraph:!1},e.applicant.firstName," ",e.applicant.lastName)),subheader:e.applicant.position}),c.a.createElement(Fe.a,{className:"justify-center"},c.a.createElement("div",{className:"flex flex-shrink-0 justify-between w-full px-16"},c.a.createElement("div",{className:"flex"},c.a.createElement(b.a,{className:"text-20 mx-8",color:"inherit"},"access_time"),c.a.createElement(g.a,{className:"font-medium truncate",color:"inherit"},e.applicant.noOfMonths/12<1?"Less than 1 yr":e.applicant.noOfMonths/12+" yrs")),c.a.createElement("div",{className:"flex items-center"},c.a.createElement("div",{className:"text-16 whitespace-no-wrap"},e.applicant.level))))))})))):null},ga=["Add All to Comparison"];var va=function(e){var a=c.a.useState(null),t=Object(u.a)(a,2),n=t[0],r=t[1],l=Object(i.c)(),o=Object(i.d)((function(e){return e.candidatesCompare.candidates.compare})),s=Object(i.d)((function(e){return e.candidatesCompare.candidateSuggestions.selected}));var d=function(){r(null)};e.data;return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{onClick:function(e){e.preventDefault(),e.stopPropagation(),r(e.currentTarget)},color:"primary"},c.a.createElement(b.a,null,"more_vert")),c.a.createElement(te.a,{id:"card-actions-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(e){e.preventDefault(),e.stopPropagation(),d(e)}},ga.map((function(e,a){return c.a.createElement($.a,{onClick:function(e){e.preventDefault(),e.stopPropagation(),l(M({id:o.toString()+","+s.toString()})),l(S()),d()}},e)}))))},ha=function(e){var a=Object(i.c)(),t=Object(l.useState)(!1),n=Object(u.a)(t,2),r=n[0],o=n[1],s=Object(i.d)((function(e){return e.candidatesCompare.candidateSuggestions.data})),d=Object(i.d)((function(e){return e.candidatesCompare.candidates.leftPagination})),m=(Object(i.d)((function(e){return e.candidatesCompare.candidates.compare})),Object(i.d)((function(e){return e.candidatesCompare.candidateSuggestions.selected})));return Object(l.useEffect)((function(){m&&s&&m.length===s.length?o(!0):o(!1)}),[m]),c.a.createElement("div",{className:"flex items-center flex-wrap justify-evenly"},c.a.createElement("div",{className:"flex item-center justify-left"},c.a.createElement(f.a,{lgUp:!0},c.a.createElement(E.a,{color:"primary",onClick:function(a){e.pageLayout.current.toggleLeftSidebar()},"aria-label":"open left sidebar"},c.a.createElement(b.a,null,"close"))),c.a.createElement(K,null)),c.a.createElement("div",{className:"flex  items-center justify-end"},c.a.createElement(E.a,{color:"primary",onClick:function(){if(d.page>0){var e={size:d.size,page:d.page-1,pageNumber:d.pageNumber-1};a(D(e))}}},c.a.createElement(b.a,null,"chevron_left")),c.a.createElement("span",null,c.a.createElement(g.a,null,d.pageNumber," / ",s&&s.length/d.size)),c.a.createElement(E.a,{color:"primary",onClick:function(){if(d.pageNumber<(s&&s.length/d.size)){var e={size:d.size,page:d.page+1,pageNumber:d.pageNumber+1};a(D(e))}}},c.a.createElement(b.a,null,"chevron_right"))),c.a.createElement("div",{className:"flex  items-center justify-end"},r?c.a.createElement(va,null):null,c.a.createElement(E.a,{onClick:function(){return a(la())}},c.a.createElement(b.a,{color:"primary"},"filter_alt")),c.a.createElement("div",{color:"primary"},c.a.createElement(ie.a,{checked:r,onChange:function(e){if(e.target.checked){var t=s.map((function(e){return e.id}));a(He({id:t.toString()})),o(!0)}else a(He({id:""})),o(!1)},iconStyle:{fill:"#192d3e"},labelStyle:{color:"#192d3e"}}))))},xa=t(107),Oa=Object(j.b)("candidatesApp/candidates/skills",function(){var e=Object(C.a)(O.a.mark((function e(a,t){var n,r,l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.getState,a=a||n().candidatesApp.candidates.routeParams,e.next=4,y.a.get("/api/skills/grouped",{params:a});case 4:return r=e.sent,e.next=7,r.data;case 7:return l=e.sent,e.abrupt("return",{data:l,routeParams:a});case 9:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()),Ca=Object(j.d)({name:"candidatesApp/candidates/skills",initialState:{},reducers:{},extraReducers:Object(h.a)({},Oa.fulfilled,(function(e,a){return a.payload}))}).reducer,ja=Object(xa.c)({candidates:H,candidateSuggestions:_e,skill:Ca,sidebars:ia}),Na=t(371),ya=t.n(Na);a.default=Object(r.a)("candidatesCompare",ja)((function(e){var a=Object(i.c)(),t=Object(l.useRef)(null),r=Object(o.j)(),u=ya.a.parse(e.location.search,{ignoreQueryPrefix:!0});return Object(i.d)(P),a(M(u)),Object(s.b)((function(){a(S(r)),a(De(r))}),[a,r]),c.a.createElement(c.a.Fragment,null,c.a.createElement(n.a,{classes:{contentWrapper:"p-0 sm:p-24 h-full",content:"flex flex-col h-full",leftSidebar:"w-400 border-0",rightSidebar:"w-512",header:"min-h-72 h-72 sm:h-72 sm:min-h-72",wrapper:"min-h-0"},header:c.a.createElement(Q,{pageLayout:t}),content:c.a.createElement(Te,null),leftSidebarHeader:c.a.createElement(ha,{pageLayout:t}),leftSidebarContent:c.a.createElement(Ea,null),sidebarInner:!0,ref:t}))}))}}]);