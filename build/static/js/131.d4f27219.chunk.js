(this["webpackJsonpanymay-app"]=this["webpackJsonpanymay-app"]||[]).push([[131],{1376:function(e,a,t){"use strict";var n=t(113),r=t(1254),l=t(134),c=t(2),i=t(0),o=t.n(i),s=t(5),m=t(11),d={1:{fontSize:14,lineHeight:19},2:{fontSize:18,lineHeight:28},3:{fontSize:24,lineHeight:36},4:{fontSize:36,lineHeight:48},5:{fontSize:48,lineHeight:60}};var u=function(e,a,t){if(a){a.style.fontSize=null,a.style.lineHeight=null;var n=a.clientWidth;if(0!==n&&t){var r,l=document.createElement("div");l.style.display="inline-block",l.style.fontSize="10px",l.style.fontWeight="200",l.style.lineHeight="10px",l.style.position="absolute",l.style.whiteSpace="pre-wrap",l.style.wordWrap="break-word",l.style.pointerEvents="none",l.style.visibility="hidden",document.body.appendChild(l);var c=e.split(" ").map((function(e){return l.textContent=e.toString(),l.clientWidth})),i=Math.max.apply(Math,Object(m.a)(c)),o=Math.floor(10*n/i);o<18?r=1:o>=18&&o<24?r=2:o>=24&&o<36?r=3:o>=36&&o<48?r=4:o>=48&&(r=5);var s=d[r],u=s.lineHeight,p=s.fontSize;l.textContent=e,l.style.width="".concat(n,"px"),l.style.fontSize="".concat(p,"px"),l.style.lineHeight="".concat(u,"px");var f=l.clientHeight/u;f>4&&f<6?r=4:f>=6&&f<9?r=3:f>=9&&f<11?r=2:f>=11&&(r=1),document.body.removeChild(l),u=d[r].lineHeight,p=d[r].fontSize,a.style.fontSize="".concat(p,"px"),a.style.lineHeight="".concat(u,"px")}}};a.a=function(e){Object(s.c)();var a={id:"5739d1fb4d27bc5341fd33b3",title:"Cabos San Lucas",description:"Best vacation destination",archive:!1,image:"assets/images/notes/beach.jpeg",time:"2018-05-10T04:01:06.587Z"};return o.a.createElement(n.a,{animation:"transition.fadeIn",duration:100,delay:0},o.a.createElement(r.a,{className:Object(c.default)("cursor-pointer",a.className)},a.image&&""!==a.image&&o.a.createElement("img",{src:a.image,className:"w-full block",alt:"note"}),a.title&&""!==a.title&&o.a.createElement(l.a,{className:"p-16 pb-8 text-14 font-bold"},a.title),a.description&&""!==a.description&&o.a.createElement(l.a,{className:"py-8 px-16",component:"div"},o.a.createElement("div",{className:Object(c.default)("w-full break-words",e.variateDescSize?"font-200":"text-14"),ref:function(e){setTimeout((function(){return u(a.description,e,a.variateDescSize)}))}},a.description))))}},1473:function(e,a,t){"use strict";var n,r=t(25),l=t(20),c=t.n(l),i=t(40),o=t(18),s=t(39),m=t.n(s),d=t(24),u=Object(o.b)("eCommerceApp/product/getProduct",function(){var e=Object(i.a)(c.a.mark((function e(a){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/e-commerce-app/product",{params:a});case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),p=Object(o.b)("eCommerceApp/product/saveProduct",function(){var e=Object(i.a)(c.a.mark((function e(a){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/api/e-commerce-app/product/save",a);case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),f=Object(o.d)({name:"eCommerceApp/product",initialState:null,reducers:{newProduct:{reducer:function(e,a){return a.payload},prepare:function(e){return{payload:{id:d.a.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0}}}}},extraReducers:(n={},Object(r.a)(n,u.fulfilled,(function(e,a){return a.payload})),Object(r.a)(n,p.fulfilled,(function(e,a){return a.payload})),n)});f.actions.newProduct,f.reducer},1493:function(e,a,t){"use strict";var n=t(25),r=t(14),l=(t(176),t(95),t(1246)),c=t(1349),i=t(1250),o=t(1233),s=t(642),m=t(324),d=t(152),u=t(1253),p=t(647),f=t(1254),E=t(1255),v=t(1459),x=t.n(v),b=t(1289),h=t.n(b),y=t(662),g=t(2),N=t(134),w=t(0),O=t.n(w),j=t(5),S=t(430),k=Object(y.a)((function(e){return{listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:"".concat(e.palette.secondary.contrastText,"!important"),pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{marginRight:16}},avatar:{},addButton:{border:"1px solid ".concat(e.palette.secondary.dark),padding:"4px"},expand:{width:"100%",textAlign:"center"},expandOpen:{}}}));var P=function(e){Object(j.c)();var a=k(e),t=O.a.useState(!1),v=Object(r.a)(t,2),b=v[0],y=v[1];return e.items?O.a.createElement(f.a,{className:"rounded-4"},O.a.createElement(l.a,{position:"static",elevation:0,className:"bg-transparent"},O.a.createElement(o.a,{className:"px-8"},O.a.createElement(N.a,{variant:"subtitle1",color:"primary",className:"flex-1 px-12"},"People Also Viewed"))),O.a.createElement(E.a,{className:"p-0"},O.a.createElement(s.a,{className:"p-0"},e.items.map((function(e,t){return O.a.createElement("div",{key:e.id},t<=4&&O.a.createElement(m.a,{key:e.id,className:"px-12"},O.a.createElement("a",{href:"/".concat("PERSON"==e.partyType?"user":e.partyType.toLowerCase(),"/").concat(e.id)},e.avatar?O.a.createElement(p.a,{variant:"PERSON"==e.partyType?"circle":"rounded",className:a.avatar+" w-48 h-48 mr-12 border",src:Object(S.a)(e)}):O.a.createElement(p.a,{variant:"PERSON"==e.partyType?"circle":"rounded",className:a.avatar+" w-48 h-48 mr-12 border",src:""})),O.a.createElement(d.a,{className:"pr-48"},O.a.createElement("div",{className:""},O.a.createElement(N.a,{className:"font-medium text-15 font-700",display:"block",color:"primary",paragraph:!1,variant:"h6"},O.a.createElement("a",{href:"/".concat("PERSON"==e.partyType?"user":e.partyType.toLowerCase(),"/").concat(e.id)},e.name)),"PERSON"==e.partyType&&O.a.createElement(N.a,{paragraph:!0,display:"block",className:""},e.headLine?e.headLine:e.currentPosition.employmentTitle+" at "+e.currentPosition.employer),"COMPANY"==e.partyType&&O.a.createElement(N.a,{paragraph:!0,display:"block",className:""},e.industry?e.industry[0].name:""))),O.a.createElement(u.a,null,O.a.createElement("a",null,"PERSON"==e.partyType&&O.a.createElement(x.a,{className:a.addButton+" rounded-full text-32"}),"COMPANY"==e.partyType&&O.a.createElement(h.a,{className:a.addButton+" rounded-full text-32"})))))})),O.a.createElement(i.a,{in:b,timeout:"auto",unmountOnExit:!0},e.items.map((function(e,t){return O.a.createElement("div",{key:e.id},t>4&&O.a.createElement(m.a,{key:e.id,className:"px-12"},O.a.createElement("a",{href:"/".concat("PERSON"==e.partyType?"user":e.partyType.toLowerCase(),"/").concat(e.id)},e.avatar?O.a.createElement(p.a,{variant:"PERSON"==e.partyType?"circle":"rounded",className:a.avatar+" w-48 h-48 mr-12 border",src:Object(S.a)(e)}):O.a.createElement(p.a,{variant:"PERSON"==e.partyType?"circle":"rounded",className:a.avatar+" w-48 h-48 mr-12 border",src:""})),O.a.createElement(d.a,{className:"pr-48"},O.a.createElement("div",{className:""},O.a.createElement(N.a,{className:"font-medium text-15 font-700",display:"block",color:"primary",paragraph:!1,variant:"h6"},O.a.createElement("a",{href:"/".concat("PERSON"==e.partyType?"user":e.partyType.toLowerCase(),"/").concat(e.id)},e.name)),"PERSON"==e.partyType&&O.a.createElement(N.a,{paragraph:!0,display:"block",className:""},e.headLine?e.headLine:e.currentPosition.employmentTitle+" at "+e.currentPosition.employer),"COMPANY"==e.partyType&&O.a.createElement(N.a,{paragraph:!0,display:"block",className:""},e.industry?e.industry[0].name:""))),O.a.createElement(u.a,null,O.a.createElement("a",null,"PERSON"==e.partyType&&O.a.createElement(x.a,{className:a.addButton+" rounded-full text-32"}),"COMPANY"==e.partyType&&O.a.createElement(h.a,{className:a.addButton+" rounded-full text-32"})))))}))))),e.items.length>5&&O.a.createElement(c.a,{disableSpacing:!0},O.a.createElement(N.a,{className:Object(g.default)(a.expand,Object(n.a)({},a.expandOpen,b)),color:"primary",paragraph:!0,onClick:function(){y(!b)},"aria-expanded":b,"aria-label":"show more"},b?"Show Less":"Show More"))):null};a.a=P},2757:function(e,a,t){"use strict";t.r(a);var n=t(14),r=t(25),l=t(113),c=t(177),i=t(445),o=t(1246),s=t(413),m=t(1254),d=t(1255),u=t(1349),p=t(1252),f=t(134),E=(t(176),t(647)),v=(t(153),t(283),t(642)),x=t(324),b=t(1253),h=t(152),y=t(1233),g=(t(39),t(0)),N=t.n(g);t(1546),t(1547),t(1548),t(1251);t(1350),t(608);var w=t(213);var O=t(5),j=t(79),S=t(42),k=t(20),P=t.n(k),R=t(40),C=t(18),T=t(24),z=t(63),L=t(64),A=t(137),D=t(136),I=t(257),B=(t(260),t(440)),H=new(function(e){Object(A.a)(t,e);var a=Object(D.a)(t);function t(){var e;Object(z.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).getProfile=function(e){return new Promise((function(a,t){B.a.get("/user/".concat(e)).then((function(e){e.data.data?a(e.data.data):t(e.data.error)}))}))},e.getRelationship=function(e){return new Promise((function(a,t){B.a.get("/user/".concat(e,"/relationship")).then((function(e){e.data.data?a(e.data.data):t(e.data.error)}))}))},e.getProfileDetail=function(e){return new Promise((function(a,t){B.a.get("/user/".concat(e,"/detail")).then((function(e){e.data.data?a(e.data.data):t(e.data.error)}))}))},e.getPeopleAlsoViewed=function(e){return new Promise((function(a,t){B.a.get("/user/".concat(e,"/peopleAlsoViewed")).then((function(e){e.data.data?a(e.data.data):t(e.data.error)}))}))},e.getPeopleYouMayKnow=function(e){return new Promise((function(a,t){B.a.get("/user/".concat(e,"/peopleYouMayKnow")).then((function(e){e.data.data?a(e.data.data):t(e.data.error)}))}))},e.getExperiences=function(e){return new Promise((function(a,t){B.a.get("/user/".concat(e,"/experiences")).then((function(e){e.data.data?a(e.data.data):t(e.data.error)}))}))},e.getEducations=function(e){return new Promise((function(a,t){B.a.get("/user/".concat(e,"/educations")).then((function(e){e.data.data?a(e.data.data):t(e.data.error)}))}))},e.getCompanyFollowers=function(e,a,t){return new Promise((function(n,r){B.a.get("/company/".concat(e,"/followers?size=").concat(t,"&page=").concat(a)).then((function(e){e.data.data?n(e.data.data):r(e.data.error)}))}))},e}return Object(L.a)(t,[{key:"init",value:function(){this.setInterceptors(),this.handleAuthentication()}}]),t}(I.a.EventEmitter)),M=Object(C.b)("user/getProfile",function(){var e=Object(R.a)(P.a.mark((function e(a){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getProfile(a.id);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),K=Object(C.d)({name:"user/profile",initialState:null,reducers:{newUser:{reducer:function(e,a){return a.payload},prepare:function(e){return{payload:{id:T.a.generateGUID(),partyType:"PERSON",name:"",headline:"",avatar:"",cover:"",industry:[],active:!0}}}}},extraReducers:Object(r.a)({},M.fulfilled,(function(e,a){return a.payload}))}).reducer,V=Object(C.b)("user/getRelationship",function(){var e=Object(R.a)(P.a.mark((function e(a){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getRelationship(a.id);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),Y=Object(C.d)({name:"user/relationship",initialState:null,extraReducers:Object(r.a)({},V.fulfilled,(function(e,a){return a.payload}))}).reducer,F=Object(C.b)("user/peopleAlsoViewed",function(){var e=Object(R.a)(P.a.mark((function e(a){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getPeopleAlsoViewed(a.id);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),W=Object(C.d)({name:"user/peopleAlsoViewed",initialState:null,extraReducers:Object(r.a)({},F.fulfilled,(function(e,a){return a.payload}))}).reducer,q=Object(C.b)("user/experiences",function(){var e=Object(R.a)(P.a.mark((function e(a){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getExperiences(a.id);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),G=Object(C.d)({name:"user/experiences",initialState:null,extraReducers:Object(r.a)({},q.fulfilled,(function(e,a){return a.payload}))}).reducer,U=Object(C.b)("user/educations",function(){var e=Object(R.a)(P.a.mark((function e(a){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getEducations(a.id);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),J=Object(C.d)({name:"user/educations",initialState:null,extraReducers:Object(r.a)({},U.fulfilled,(function(e,a){return a.payload}))}).reducer,Z=t(107),Q=Object(Z.c)({user:K,relationship:Y,peopleAlsoViewed:W,experiences:G,educations:J}),X=t(662),$=t(255),_=t(430),ee=t(1376),ae=t(1289),te=t.n(ae),ne=t(1474),re=t(1475),le=t(1302),ce=t(2),ie=(t(1440),t(454),t(29),t(1473),Object(le.makeStyles)((function(e){return{avatar:{borderColor:e.palette.divider},media:{height:195}}})));var oe=function(e){var a=e.profile,t=ie({profile:a});return a?N.a.createElement(m.a,{className:t.root+" w-full"},N.a.createElement(ne.a,null,N.a.createElement(re.a,{className:t.media+" md:h-150",image:Object(_.b)(a),title:"Contemplative Reptile"})),N.a.createElement(u.a,{align:"right"},N.a.createElement("div",{className:"flex flex-1 flex-col items-center justify-center md:flex-row md:items-end"},N.a.createElement("div",{className:"flex flex-1 flex-col w-full items-center md:flex-row md:justify-start"},N.a.createElement("div",{className:"flex w-full items-center"},N.a.createElement(l.a,{animation:"transition.expandIn",delay:300},a.avatar?N.a.createElement(E.a,{variant:"circle",className:t.avatar+" w-72 h-72 mr-12 border",src:Object(_.a)(a)}):N.a.createElement(E.a,{variant:"circle",className:t.avatar+" w-72 h-72 mr-12 border",src:""})),N.a.createElement("div",{className:"flex flex-col min-w-0 mx-8 sm:mc-16"},N.a.createElement(l.a,{animation:"transition.slideLeftIn",delay:300},N.a.createElement(f.a,{color:"inherit",className:"text-16 text-24 md:text-32 truncate",align:"left"},a.name)),N.a.createElement(l.a,{animation:"transition.slideLeftIn",delay:300},N.a.createElement(f.a,{variant:"caption",align:"left"},a.noOfFollowers," followers")),N.a.createElement(l.a,{animation:"transition.slideLeftIn",delay:300,align:"left"},N.a.createElement(f.a,{variant:"caption",align:"left"},a.headline))))),N.a.createElement(l.a,{animation:"transition.slideRightIn",delay:300},N.a.createElement("div",{className:"flex items-center justify-end"},N.a.createElement(s.a,{className:" mr-12",variant:"contained",color:"primary",disabled:!a.hasFollowed,startIcon:N.a.createElement(te.a,null)},"Follow"),N.a.createElement(s.a,{className:"whitespace-no-wrap normal-case",variant:"outlined",color:"primary"},"Visit Website")))))):null};t(95),Object(X.a)((function(e){return{listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:"".concat(e.palette.secondary.contrastText,"!important"),pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{marginRight:16}}}}));var se=t(1730),me=t(1731),de=t(1732),ue=t(1734),pe=t(1735),fe=t(1733),Ee=Object(X.a)((function(e){return{paper:{padding:"6px 16px"},secondaryTail:{backgroundColor:e.palette.secondary.main},timelineDot:{background:"none",boxShadow:"none",borderRadius:"4px",padding:0},timeline:{},timelineItem:{"&::before":{content:"none"}},timelineContent:{},timelineConnector:{width:1}}}));function ve(e){var a=Ee();return!e.experiences||e.experiences&&0==e.experiences.length?null:N.a.createElement(se.a,{className:a.timeline},e.experiences.map((function(t,n){return N.a.createElement(me.a,{key:t.id,className:a.timelineItem},N.a.createElement(de.a,null,N.a.createElement(fe.a,{className:a.timelineDot},N.a.createElement("a",{href:"/company/".concat(t.employer.id)},N.a.createElement(E.a,{variant:"rounded",className:a.avatar+" w-64 h-64 border",src:Object(_.a)(t.employer)}))),n<e.experiences.length-1&&N.a.createElement(ue.a,{className:a.timelineConnector})),N.a.createElement(pe.a,{className:a.timelineContent+(n<e.experiences.length-1?" mb-28":"")},N.a.createElement(w.a,{elevation:3,className:a.paper+" shadow-0"},N.a.createElement(f.a,{variant:"h6",component:"h1"},t.employmentTitle),N.a.createElement(f.a,null,t.employer.name),N.a.createElement(f.a,null,t.fromDate," - ",t.thruDate),N.a.createElement(f.a,null,t.description))))})))}var xe=Object(X.a)((function(e){return{paper:{padding:"6px 16px"},secondaryTail:{backgroundColor:e.palette.secondary.main},timelineDot:{background:"none",boxShadow:"none",borderRadius:"4px",padding:0},timeline:{marginBottom:"30px"},timelineItem:{"&::before":{content:"none"}},timelineContent:{marginBottom:"30px"},timelineConnector:{width:1}}}));function be(e){var a=xe();return e.educations?N.a.createElement(se.a,{className:a.timeline},e.educations.map((function(t,n){return N.a.createElement(me.a,{key:t.id,className:a.timelineItem},N.a.createElement(de.a,null,N.a.createElement(fe.a,{className:a.timelineDot},N.a.createElement("a",{href:"/institute/".concat(t.institute.id)},N.a.createElement(E.a,{variant:"rounded",className:a.avatar+" w-64 h-64 border",src:Object(_.a)(t.institute)}))),n<e.educations.length-1&&N.a.createElement(ue.a,{className:a.timelineConnector})),N.a.createElement(pe.a,{className:a.timelineContent},N.a.createElement(w.a,{elevation:3,className:a.paper+" shadow-0"},N.a.createElement(f.a,{variant:"h6",component:"h1"},t.institute.name),N.a.createElement(f.a,null,"PHD"==t.degree?"PHD's degree, ":"MASTER"==t.degree?"Master's degree, ":"BACHELOR"==t.degree?"Bachelor's degree, ":"",t.fieldOfStudy?t.fieldOfStudy.name:""),N.a.createElement(f.a,null,t.fromDate," - ",t.thruDate),N.a.createElement(f.a,null,t.description))))}))):null}var he=t(1321),ye=Object(X.a)((function(e){return{paper:{padding:"6px 16px"},secondaryTail:{backgroundColor:e.palette.secondary.main},cardMedia:{maxHeight:140}}}));function ge(e){var a=ye();return e.activities?N.a.createElement(he.a,{container:!0,spacing:3,className:a.form},N.a.createElement(he.a,{item:!0,xs:12,sm:4},N.a.createElement(m.a,{className:a.root},N.a.createElement(ne.a,null,N.a.createElement(re.a,{className:a.cardMedia,component:"img",alt:"Contemplative Reptile",height:"140",image:"/material-ui-static/images/cards/contemplative-reptile.jpg",title:"Contemplative Reptile"}),N.a.createElement(d.a,null,N.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2",className:"text-15 font-600"},"Lizard"),N.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"))),N.a.createElement(u.a,null,N.a.createElement(s.a,{size:"small",color:"primary"},"129K views"),N.a.createElement(s.a,{size:"small",color:"primary"},"3.4K likes"),N.a.createElement(s.a,{size:"small",color:"primary"},"872 comments")))),N.a.createElement(he.a,{item:!0,xs:12,sm:4},N.a.createElement(m.a,{className:a.root},N.a.createElement(ne.a,null,N.a.createElement(re.a,{className:a.cardMedia,component:"img",alt:"Contemplative Reptile",height:"140",image:"/material-ui-static/images/cards/paella.jpg",title:"Contemplative Reptile"}),N.a.createElement(d.a,null,N.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2",className:"text-15 font-600"},"Best Paella in town"),N.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"))),N.a.createElement(u.a,null,N.a.createElement(s.a,{size:"small",color:"primary"},"129K views"),N.a.createElement(s.a,{size:"small",color:"primary"},"3.4K likes"),N.a.createElement(s.a,{size:"small",color:"primary"},"872 comments")))),N.a.createElement(he.a,{item:!0,xs:12,sm:4},N.a.createElement(m.a,{className:a.root},N.a.createElement(ne.a,null,N.a.createElement(re.a,{className:a.cardMedia,component:"img",alt:"Contemplative Reptile",height:"140",image:"/material-ui-static/images/cards/live-from-space.jpg",title:"Contemplative Reptile"}),N.a.createElement(d.a,null,N.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2",className:"text-15 font-600"},"Live from space"),N.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"))),N.a.createElement(u.a,null,N.a.createElement(s.a,{size:"small",color:"primary"},"129K views"),N.a.createElement(s.a,{size:"small",color:"primary"},"3.4K likes"),N.a.createElement(s.a,{size:"small",color:"primary"},"872 comments"))))):null}var Ne=t(139),we=t(458),Oe=t.n(we),je=t(1457),Se=t.n(je),ke=t(46),Pe=t(2773),Re=t(2624),Ce=t(1322);function Te(e){var a=e.children,t=e.value,n=e.index,r=Object(Ne.a)(e,["children","value","index"]);return N.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},r),t===n&&N.a.createElement(Ce.a,{p:3},N.a.createElement(f.a,null,a)))}function ze(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var Le=Object(X.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:500},divider:{margin:"20px 0"}}}));function Ae(e){var a=Le(),t=Object(ke.a)(),r=N.a.useState(0),l=Object(n.a)(r,2),c=l[0],i=l[1],b=e.recommendations,h=e.reviews,g=e.givens;return console.log("reviews",h),b||h||g?N.a.createElement(m.a,{className:"w-full mb-16 rounded-8"},N.a.createElement(o.a,{position:"static",elevation:0,className:"bg-transparent"},N.a.createElement(y.a,{className:"px-8"},N.a.createElement(f.a,{variant:"subtitle1",color:"primary",className:"flex-1 px-12"},"Recommendations"))),N.a.createElement(d.a,null,N.a.createElement(Pe.a,{value:c,onChange:function(e,a){i(a)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example"},N.a.createElement(Re.a,Object.assign({label:"Recommendations"},ze(0))),N.a.createElement(Re.a,Object.assign({label:"Reviews"},ze(1))),N.a.createElement(Re.a,Object.assign({label:"Given"},ze(2)))),N.a.createElement(Se.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:c,onChangeIndex:function(e){i(e)}},N.a.createElement(Te,{value:c,index:0,dir:t.direction},b&&N.a.createElement(v.a,{className:"p-0"},b.recommendations.map((function(e,t){return N.a.createElement("div",{key:e.id},N.a.createElement(x.a,{dense:!0,button:!0},N.a.createElement("div",{className:"flex flex-1 flex-col relative overflow-hidden"},N.a.createElement("div",{className:"flex items-center justify-between px-16 pb-8"},N.a.createElement("div",{className:"flex items-center"},e.reviewer.avatar?N.a.createElement(E.a,{className:"w-64 h-64",alt:e.reviewer.name,src:Object(_.a)(e.reviewer)}):N.a.createElement(E.a,{className:a.avatar+" w-64 h-64"},e.reviewer.name[0]),N.a.createElement("div",null,N.a.createElement(f.a,{variant:"subtitle1",className:"mx-8"},e.reviewer.name),N.a.createElement(f.a,{className:"truncate mx-8"},e.reviewer.headline))),N.a.createElement(f.a,{variant:"subtitle1"},e.createdDate)),N.a.createElement("div",{className:"flex flex-col px-16 py-0"},N.a.createElement(f.a,{color:"textSecondary",className:"my-10 font-15"},e.comment)))),N.a.createElement(p.a,{className:a.divider}))})))),N.a.createElement(Te,{value:c,index:1,dir:t.direction},h&&N.a.createElement(v.a,{className:"p-0"},h.map((function(e,t){return N.a.createElement(x.a,{key:e.id,dense:!0,button:!0},N.a.createElement("div",{className:"flex flex-1 flex-col relative overflow-hidden"},N.a.createElement("div",{className:"flex items-center justify-between px-16 pb-8"},N.a.createElement("div",{className:"flex items-center"},e.reviewer.avatar?N.a.createElement(E.a,{className:"w-64 h-64",alt:e.reviewer.name,src:Object(_.a)(e.reviewer)}):N.a.createElement(E.a,{className:a.avatar+" w-64 h-64"},e.reviewer.name[0]),N.a.createElement("div",null,N.a.createElement(f.a,{variant:"subtitle1",className:"mx-8"},e.reviewer.name),N.a.createElement(f.a,{className:"truncate mx-8"},e.reviewer.headline))),N.a.createElement(f.a,{variant:"subtitle1"},e.createdDate)),N.a.createElement("div",{className:"flex flex-col px-16 py-0"},N.a.createElement(f.a,{color:"textSecondary",className:"my-10 font-15"},e.comment)),N.a.createElement(p.a,{className:a.divider})))})))),N.a.createElement(Te,{value:c,index:2,dir:t.direction},g&&N.a.createElement(v.a,{className:"p-0"},g.recommendations.map((function(e,t){return N.a.createElement("div",{key:e.id},N.a.createElement(x.a,{dense:!0,button:!0},N.a.createElement("div",{className:"flex flex-1 flex-col relative overflow-hidden"},N.a.createElement("div",{className:"flex items-center justify-between px-16 pb-8"},N.a.createElement("div",{className:"flex items-center"},e.receiver.avatar?N.a.createElement(E.a,{className:"w-64 h-64",alt:e.receiver.name,src:Object(_.a)(e.receiver)}):N.a.createElement(E.a,{className:a.avatar+" w-64 h-64"},e.receiver.name[0]),N.a.createElement("div",null,N.a.createElement(f.a,{variant:"subtitle1",className:"mx-8"},e.receiver.name),N.a.createElement(f.a,{className:"truncate mx-8"},e.receiver.headline))),N.a.createElement(f.a,{variant:"subtitle1"},e.createdDate)),N.a.createElement("div",{className:"flex flex-col px-16 py-0"},N.a.createElement(f.a,{color:"textSecondary",className:"truncate"},Oe.a.truncate(e.comment.replace(/<(?:.|\n)*?>/gm,""),{length:180}))),N.a.createElement(p.a,{className:a.divider}))))})))))),N.a.createElement(u.a,null,N.a.createElement(s.a,{size:"small",color:"primary"},"See more"))):null}var De=Object(X.a)((function(e){return{paper:{padding:"6px 16px"},secondaryTail:{backgroundColor:e.palette.secondary.main},timelineDot:{background:"none",boxShadow:"none",borderRadius:"4px",padding:0},timeline:{marginBottom:"30px","li::before:":{content:"none"}},timelineContent:{marginBottom:"30px"}}}));function Ie(e){var a=De();return e.interests?N.a.createElement(se.a,{className:a.timeline},N.a.createElement(he.a,{container:!0,spacing:3},e.interests.map((function(e){return N.a.createElement(he.a,{key:e.id,item:!0,xs:6},N.a.createElement("div",{className:"flex w-full items-center"},e.avatar?N.a.createElement(E.a,{variant:"PERSON"==e.partyType?"circle":"rounded",className:a.avatar+" w-48 h-48 mr-12 border",src:Object(_.a)(e)}):N.a.createElement(E.a,{variant:"PERSON"==e.partyType?"circle":"rounded",className:a.avatar+" w-48 h-48 mr-12 border",src:""}),N.a.createElement("div",{className:"flex flex-col min-w-0 mx-8 sm:mc-16"},N.a.createElement(f.a,{color:"inherit",className:"truncate",align:"left"},e.name),N.a.createElement(f.a,{variant:"caption",align:"left"},e.noOfFollowers," followers"))))})))):null}var Be=t(1493),He=t(1250),Me=t(1459),Ke=t.n(Me),Ve=Object(X.a)((function(e){return{listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:"".concat(e.palette.secondary.contrastText,"!important"),pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{marginRight:16}},avatar:{},addButton:{border:"1px solid ".concat(e.palette.primary.dark),padding:"4px"},expand:{width:"100%",textAlign:"center"},expandOpen:{}}}));var Ye=function(e){var a=Object(S.j)(),t=Ve(e),l=Object(g.useState)(null),c=Object(n.a)(l,2),i=c[0],s=c[1],p=N.a.useState(!1),w=Object(n.a)(p,2),O=w[0],j=w[1];return Object(g.useEffect)((function(a){console.log("params",e),H.getPeopleYouMayKnow(e.id).then((function(e){s(e)}))}),[a]),!i||i&&0==i.length?null:N.a.createElement(m.a,{className:"rounded-4"},N.a.createElement(o.a,{position:"static",elevation:0,className:"bg-transparent"},N.a.createElement(y.a,{className:"px-8"},N.a.createElement(f.a,{variant:"subtitle1",color:"primary",className:"flex-1 px-12"},"People You May Know"))),N.a.createElement(d.a,{className:"p-0"},N.a.createElement(v.a,{className:"p-0"},i.map((function(e,a){return N.a.createElement("div",{key:e.id},a<=4&&N.a.createElement(x.a,{key:e.id,className:"px-12"},N.a.createElement("a",{href:"/user/".concat(e.id)},e.avatar?N.a.createElement(E.a,{variant:"circle",className:t.avatar+" w-48 h-48 mr-12 border",src:Object(_.a)(e)}):N.a.createElement(E.a,{variant:"circle",className:t.avatar+" w-48 h-48 mr-12 border",src:""})),N.a.createElement(h.a,{className:"pr-48"},N.a.createElement("div",{className:""},N.a.createElement(f.a,{className:"font-medium text-15 font-700",display:"block",color:"primary",paragraph:!1,variant:"h6"},N.a.createElement("a",{href:"/user/".concat(e.id)},e.name)),N.a.createElement(f.a,{paragraph:!0,display:"block",className:""},e.headLine?e.headLine:e.currentPosition.employmentTitle+" at "+e.currentPosition.employer))),N.a.createElement(b.a,null,N.a.createElement(Ke.a,{className:t.addButton+" rounded-full text-32"}))))})),N.a.createElement(He.a,{in:O,timeout:"auto",unmountOnExit:!0},i.map((function(e,a){return N.a.createElement("div",{key:e.id},a>4&&N.a.createElement(x.a,{key:e.id,className:"px-12"},N.a.createElement("a",{href:"/user/".concat(e.id)},e.avatar?N.a.createElement(E.a,{variant:"circle",className:t.avatar+" w-48 h-48 mr-12 border",src:Object(_.a)(e)}):N.a.createElement(E.a,{variant:"circle",className:t.avatar+" w-48 h-48 mr-12 border",src:""})),N.a.createElement(h.a,{className:"pr-48"},N.a.createElement("div",{className:""},N.a.createElement(f.a,{className:"font-medium text-15 font-700",display:"block",color:"primary",paragraph:!1,variant:"h6"},N.a.createElement("a",{href:"/user/".concat(e.id)},e.name)),N.a.createElement(f.a,{paragraph:!0,display:"block",className:""},e.headLine?e.headLine:e.currentPosition.employmentTitle+" at "+e.currentPosition.employer))),N.a.createElement(b.a,null,N.a.createElement(Ke.a,{className:t.addButton+" rounded-full text-32"}))))}))))),N.a.createElement(u.a,{disableSpacing:!0},N.a.createElement(f.a,{className:Object(ce.default)(t.expand,Object(r.a)({},t.expandOpen,O)),color:"primary",paragraph:!0,onClick:function(){j(!O)},"aria-expanded":O,"aria-label":"show more"},O?"Show Less":"Show More")))},Fe=Object(X.a)((function(e){return{layoutHeader:Object(r.a)({height:320,minHeight:320},e.breakpoints.down("md"),{height:240,minHeight:240})}}));a.default=Object($.a)("profilePage",Q)((function(){var e=Object(S.j)(),a=Object(O.c)(),t=Fe(),r=Object(g.useState)(0),l=Object(n.a)(r,2),E=(l[0],l[1],Object(O.d)((function(e){return e.profilePage.user}))),v=Object(O.d)((function(e){return e.profilePage.peopleAlsoViewed})),x=Object(O.d)((function(e){return e.profilePage.experiences})),b=Object(O.d)((function(e){return e.profilePage.educations})),h=Object(O.d)((function(e){return e.profilePage.relationship}));return Object(j.b)((function(){a(M(e)),a(V(e)),a(F(e)),a(q(e)),a(U(e))}),[a,e]),console.log("relationship",h),E?N.a.createElement(c.a,{classes:{content:"p-0 sm:px-24"},content:N.a.createElement("div",{className:"w-full"},N.a.createElement("div",{className:"flex flex-col md:flex-row container"},N.a.createElement("div",{className:"flex flex-1 flex-col min-w-0"},N.a.createElement("div",{className:"mb-20 px-10"},N.a.createElement(m.a,null,N.a.createElement(u.a,{className:"items-right p-0"},N.a.createElement("div",{className:"w-full flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start"},N.a.createElement(oe,{profile:E}))))),N.a.createElement("div",{className:t.root},N.a.createElement("div",{className:"w-full px-10"})),N.a.createElement("div",{className:"w-full py-10"},E.about&&N.a.createElement(m.a,{className:"w-full mb-16 rounded-8"},N.a.createElement(o.a,{position:"static",elevation:0,className:"bg-transparent"},N.a.createElement(y.a,{className:"px-8"},N.a.createElement(f.a,{variant:"subtitle1",color:"primary",className:"flex-1 px-12"},"About"))),N.a.createElement(d.a,{className:"pt-0"},E.about)),h&&N.a.createElement(m.a,{className:"w-full mb-16 rounded-8"},N.a.createElement(o.a,{position:"static",elevation:0,className:"bg-transparent"},N.a.createElement(y.a,{className:"px-8"},N.a.createElement(f.a,{variant:"subtitle1",color:"primary",className:"flex-1 px-12"},"Activity"))),N.a.createElement(d.a,null,N.a.createElement(ge,{activities:h.activities})),N.a.createElement(u.a,null,N.a.createElement(s.a,{size:"small",color:"primary"},"See more"))),N.a.createElement(m.a,{className:"w-full mb-16 rounded-8"},N.a.createElement(o.a,{position:"static",elevation:0,className:"bg-transparent"},N.a.createElement(y.a,{className:"px-8"},N.a.createElement(f.a,{variant:"subtitle1",color:"primary",className:"flex-1 px-12"},"Experiences"))),N.a.createElement(d.a,null,N.a.createElement(ve,{experiences:x}),N.a.createElement(p.a,{className:"mb-20 "}),N.a.createElement(f.a,{variant:"subtitle1",color:"primary",className:"flex-1 px-12"},"Educations"),N.a.createElement(be,{educations:b})),N.a.createElement(u.a,null,N.a.createElement(s.a,{size:"small",color:"primary"},"See more"))),h&&h.interests&&N.a.createElement(m.a,{className:"w-full mb-16 rounded-8"},N.a.createElement(o.a,{position:"static",elevation:0,className:"bg-transparent"},N.a.createElement(y.a,{className:"px-8"},N.a.createElement(f.a,{variant:"subtitle1",color:"primary",className:"flex-1 px-12"},"Interests"))),N.a.createElement(d.a,null,N.a.createElement(Ie,{interests:h.interests})),N.a.createElement(u.a,null,N.a.createElement(s.a,{size:"small",color:"primary"},"See more"))),h&&(h.recommendations||h.reviews||h.givens)&&N.a.createElement(Ae,{recommendations:h.recommendations,reviews:h.reviews,given:h.givens}))),N.a.createElement("div",{className:"flex flex-col md:w-320 px-10"},N.a.createElement("div",{className:"widget w-full pb-32"},N.a.createElement(ee.a,null)),N.a.createElement("div",{className:"widget w-full pb-32"},N.a.createElement(Be.a,{items:v})),N.a.createElement("div",{className:"widget w-full pb-32"},N.a.createElement(Ye,{id:e.id})))))}):N.a.createElement(i.a,null)}))}}]);