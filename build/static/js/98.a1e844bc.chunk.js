(this["webpackJsonpanymay-app"]=this["webpackJsonpanymay-app"]||[]).push([[98],{1286:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(25),r=a(32),l=a(662),c=a(2),i=a(0),o=a.n(i),s=a(46),m=a(1245),u=a(29),d=a(5);var p=function(e){var t=Object(s.a)(),a=Object(d.d)(Object(u.c)(t.palette.primary.main));return o.a.createElement("div",{className:e.classes.header},e.header&&o.a.createElement(m.a,{theme:a},e.header))},f=a(14),b=a(1225),g=a(1237);var h=function(e){var t=Object(s.a)(),a=Object(d.d)(Object(u.c)(t.palette.primary.main)),n=e.classes;return o.a.createElement(o.a.Fragment,null,e.header&&o.a.createElement(m.a,{theme:a},o.a.createElement("div",{className:Object(c.default)(n.sidebarHeader,e.variant)},e.header)),e.content&&o.a.createElement(r.a,{className:n.sidebarContent,enable:e.innerScroll},e.content))};var v=o.a.forwardRef((function(e,t){var a=Object(i.useState)(!1),n=Object(f.a)(a,2),r=n[0],l=n[1],s=e.classes;Object(i.useImperativeHandle)(t,(function(){return{toggleSidebar:m}}));var m=function(){l(!r)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{lgUp:"permanent"===e.variant},o.a.createElement(b.a,{variant:"temporary",anchor:e.position,open:r,onClose:function(e){return m()},classes:{root:Object(c.default)(s.sidebarWrapper,e.variant),paper:Object(c.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},o.a.createElement(h,e))),"permanent"===e.variant&&o.a.createElement(g.a,{mdDown:!0},o.a.createElement(b.a,{variant:"permanent",className:Object(c.default)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(c.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},o.a.createElement(h,e))))})),E=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to left, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),x=o.a.forwardRef((function(e,t){var a=Object(i.useRef)(null),n=Object(i.useRef)(null),l=Object(i.useRef)(null),s=E(e),m=e.rightSidebarHeader||e.rightSidebarContent,u=e.leftSidebarHeader||e.leftSidebarContent;return o.a.useImperativeHandle(t,(function(){return{rootRef:l,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),o.a.createElement("div",{className:Object(c.default)(s.root,e.innerScroll&&s.innerScroll),ref:l},o.a.createElement("div",{className:s.topBg}),o.a.createElement("div",{className:"flex container w-full"},u&&o.a.createElement(v,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:a,rootRef:l}),o.a.createElement("div",{className:Object(c.default)(s.contentWrapper,u&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",m&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},o.a.createElement(p,{header:e.header,classes:s}),o.a.createElement("div",{className:Object(c.default)(s.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&o.a.createElement("div",{className:s.toolbar},e.contentToolbar),e.content&&o.a.createElement(r.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),m&&o.a.createElement(v,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:n,rootRef:l})))}));x.defaultProps={};var j=o.a.memo(x)},1396:function(e,t){e.exports=m,e.exports.match=function(e,t){var a=[];return r(m(e,a,t),a)},e.exports.regexpToFunction=r,e.exports.parse=n,e.exports.compile=function(e,t){return l(n(e,t),t)},e.exports.tokensToFunction=l,e.exports.tokensToRegExp=s;var a=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function n(e,t){for(var n,r=[],l=0,o=0,s="",m=t&&t.delimiter||"/",u=t&&t.whitelist||void 0,d=!1;null!==(n=a.exec(e));){var p=n[0],f=n[1],b=n.index;if(s+=e.slice(o,b),o=b+p.length,f)s+=f[1],d=!0;else{var g="",h=n[2],v=n[3],E=n[4],x=n[5];if(!d&&s.length){var j=s.length-1,y=s[j];(!u||u.indexOf(y)>-1)&&(g=y,s=s.slice(0,j))}s&&(r.push(s),s="",d=!1);var O="+"===x||"*"===x,S="?"===x||"*"===x,N=v||E,w=g||m;r.push({name:h||l++,prefix:g,delimiter:w,optional:S,repeat:O,pattern:N?i(N):"[^"+c(w===m?w:w+m)+"]+?"})}}return(s||o<e.length)&&r.push(s+e.substr(o)),r}function r(e,t){return function(a,n){var r=e.exec(a);if(!r)return!1;for(var l=r[0],c=r.index,i={},o=n&&n.decode||decodeURIComponent,s=1;s<r.length;s++)if(void 0!==r[s]){var m=t[s-1];m.repeat?i[m.name]=r[s].split(m.delimiter).map((function(e){return o(e,m)})):i[m.name]=o(r[s],m)}return{path:l,index:c,params:i}}}function l(e,t){for(var a=new Array(e.length),n=0;n<e.length;n++)"object"===typeof e[n]&&(a[n]=new RegExp("^(?:"+e[n].pattern+")$",o(t)));return function(t,n){for(var r="",l=n&&n.encode||encodeURIComponent,c=!n||!1!==n.validate,i=0;i<e.length;i++){var o=e[i];if("string"!==typeof o){var s,m=t?t[o.name]:void 0;if(Array.isArray(m)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but got array');if(0===m.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var u=0;u<m.length;u++){if(s=l(m[u],o),c&&!a[i].test(s))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'"');r+=(0===u?o.prefix:o.delimiter)+s}}else if("string"!==typeof m&&"number"!==typeof m&&"boolean"!==typeof m){if(!o.optional)throw new TypeError('Expected "'+o.name+'" to be '+(o.repeat?"an array":"a string"))}else{if(s=l(String(m),o),c&&!a[i].test(s))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but got "'+s+'"');r+=o.prefix+s}}else r+=o}return r}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function i(e){return e.replace(/([=!:$/()])/g,"\\$1")}function o(e){return e&&e.sensitive?"":"i"}function s(e,t,a){for(var n=(a=a||{}).strict,r=!1!==a.start,l=!1!==a.end,i=a.delimiter||"/",s=[].concat(a.endsWith||[]).map(c).concat("$").join("|"),m=r?"^":"",u=0;u<e.length;u++){var d=e[u];if("string"===typeof d)m+=c(d);else{var p=d.repeat?"(?:"+d.pattern+")(?:"+c(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;t&&t.push(d),d.optional?d.prefix?m+="(?:"+c(d.prefix)+"("+p+"))?":m+="("+p+")?":m+=c(d.prefix)+"("+p+")"}}if(l)n||(m+="(?:"+c(i)+")?"),m+="$"===s?"$":"(?="+s+")";else{var f=e[e.length-1],b="string"===typeof f?f[f.length-1]===i:void 0===f;n||(m+="(?:"+c(i)+"(?="+s+"))?"),b||(m+="(?="+c(i)+"|"+s+")")}return new RegExp(m,o(a))}function m(e,t,a){return e instanceof RegExp?function(e,t){if(!t)return e;var a=e.source.match(/\((?!\?)/g);if(a)for(var n=0;n<a.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,a){for(var n=[],r=0;r<e.length;r++)n.push(m(e[r],t,a).source);return new RegExp("(?:"+n.join("|")+")",o(a))}(e,t,a):function(e,t,a){return s(n(e,a),t,a)}(e,t,a)}},1397:function(e,t,a){var n=a(1444),r=a(1445),l=a(1430),c=a(1446);e.exports=function(e,t){return n(e)||r(e,t)||l(e,t)||c()}},1430:function(e,t,a){var n=a(1431);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},1431:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},1444:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},1445:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(o){r=!0,l=o}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}}},1446:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},1683:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(1397),r=a.n(n),l=a(45),c=a.n(l),i=a(0),o=a(664);function s(){if(console&&console.warn){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];"string"===typeof a[0]&&(a[0]="react-i18next:: ".concat(a[0])),(e=console).warn.apply(e,a)}}var m={};function u(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];"string"===typeof t[0]&&m[t[0]]||("string"===typeof t[0]&&(m[t[0]]=new Date),s.apply(void 0,t))}function d(e,t,a){e.loadNamespaces(t,(function(){if(e.isInitialized)a();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),a()}))}}))}function p(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return u("i18n.languages were undefined or empty",t.languages),!0;var n=t.languages[0],r=!!t.options&&t.options.fallbackLng,l=t.languages[t.languages.length-1];if("cimode"===n.toLowerCase())return!0;var c=function(e,a){var n=t.services.backendConnector.state["".concat(e,"|").concat(a)];return-1===n||2===n};return!(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(n,e)||(!t.services.backendConnector.backend||!(!c(n,e)||r&&!c(l,e))))}function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.i18n,n=Object(i.useContext)(o.a)||{},l=n.i18n,c=n.defaultNS,s=a||l||Object(o.d)();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new o.b),!s){u("You will need to pass in an i18next instance by using initReactI18next");var m=function(e){return Array.isArray(e)?e[e.length-1]:e},f=[m,{},!1];return f.t=m,f.i18n={},f.ready=!1,f}var g=b(b(b({},Object(o.c)()),s.options.react),t),h=g.useSuspense,v=e||c||s.options&&s.options.defaultNS;v="string"===typeof v?[v]:v||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(v);var E=(s.isInitialized||s.initializedStoreOnce)&&v.every((function(e){return p(e,s,g)}));function x(){return{t:s.getFixedT(null,"fallback"===g.nsMode?v:v[0])}}var j=Object(i.useState)(x()),y=r()(j,2),O=y[0],S=y[1],N=Object(i.useRef)(!0);Object(i.useEffect)((function(){var e=g.bindI18n,t=g.bindI18nStore;function a(){N.current&&S(x())}return N.current=!0,E||h||d(s,v,(function(){N.current&&S(x())})),e&&s&&s.on(e,a),t&&s&&s.store.on(t,a),function(){N.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,a)})),t&&s&&t.split(" ").forEach((function(e){return s.store.off(e,a)}))}}),[v.join()]);var w=[O.t,s,E];if(w.t=O.t,w.i18n=s,w.ready=E,E)return w;if(!E&&!h)return w;throw new Promise((function(e){d(s,v,(function(){e()}))}))}},2758:function(e,t,a){"use strict";a.r(t);var n=a(1286),r=a(255),l=a(0),c=a.n(l),i=a(5),o=a(42),s=a(14),m=a(113),u=a(7),d=a(647),p=a(1252),f=a(153),b=a(283),g=a(134),h=a(79),v=a(662),E=a(2),x=Object(v.a)((function(e){return{root:{display:"flex",alignItems:"center",height:21,borderRadius:2,padding:"0 6px",fontSize:11,backgroundColor:"rgba(0,0,0,.08);"},color:{width:8,height:8,marginRight:4,borderRadius:"50%"}}}));var j,y=function(e){var t=x();return c.a.createElement("div",{className:Object(E.default)(t.root,e.className)},c.a.createElement("div",{className:t.color,style:{backgroundColor:e.color}}),c.a.createElement("div",null,e.title))},O=a(25),S=a(20),N=a.n(S),w=a(40),k=a(18),C=a(39),I=a.n(C),A=Object(k.b)("mailApp/labels/getLabels",Object(w.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/api/mail-app/labels");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),M=Object(k.c)({}),R=M.getSelectors((function(e){return e.mailApp.labels})),T=R.selectAll,P=R.selectEntities,L=(R.selectById,Object(k.d)({name:"mailApp/labels",initialState:M.getInitialState(null),reducers:{},extraReducers:Object(O.a)({},A.fulfilled,M.setAll)}).reducer),B=a(9),D=a(49),H=Object(k.b)("mailApp/mail/getMail",function(){var e=Object(w.a)(N.a.mark((function e(t){var a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/api/mail-app/mail",{params:t});case 2:return a=e.sent,e.next=5,a.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z=Object(k.b)("mailApp/mail/updateMail",function(){var e=Object(w.a)(N.a.mark((function e(t,a){var n,r,l,c,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.getState,r=a.dispatch,l=n().mailApp.mail.id,e.next=4,I.a.post("/api/mail-app/update-mail",Object(B.a)({id:l},t));case 4:return c=e.sent,e.next=7,c.data;case 7:return i=e.sent,r(Object(D.c)({message:"Mail Saved"})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),W=Object(k.d)({name:"mailApp/mail",initialState:null,reducers:{},extraReducers:(j={},Object(O.a)(j,H.fulfilled,(function(e,t){return t.payload})),Object(O.a)(j,z.fulfilled,(function(e,t){return Object(B.a)(Object(B.a)({},e),t.payload)})),j)}).reducer;var U=Object(o.k)((function(e){var t=Object(i.c)(),a=Object(i.d)((function(e){return e.mailApp.mail})),n=Object(i.d)(P),r=Object(o.j)(),v=Object(l.useState)(!1),E=Object(s.a)(v,2),x=E[0],j=E[1];return Object(h.b)((function(){t(H(r))}),[t,r]),a?c.a.createElement("div",{className:"p-16 sm:p-24"},c.a.createElement("div",{className:"flex items-center justify-between overflow-hidden"},c.a.createElement("div",{className:"flex flex-col"},c.a.createElement(m.a,{delay:100},c.a.createElement(g.a,{variant:"subtitle1",className:"flex"},a.subject)),!u.a.isEmpty(n)&&a.labels.length>0&&c.a.createElement("div",{className:"flex flex-wrap mt-8 -mx-2"},a.labels.map((function(e){return c.a.createElement(y,{className:"mt-4 mx-2",title:n[e].title,color:n[e].color,key:e})}))))),c.a.createElement(p.a,{className:"my-16"}),c.a.createElement(m.a,{animation:"transition.slideUpIn",delay:200},c.a.createElement("div",null,c.a.createElement("div",{className:"flex items-start justify-between"},c.a.createElement("div",{className:"flex items-center justify-start"},a.from.avatar?c.a.createElement(d.a,{alt:a.from.name,src:a.from.avatar}):c.a.createElement(d.a,null,a.from.name[0]),c.a.createElement("div",{className:"flex flex-col mx-8"},c.a.createElement("span",null,a.from.name),c.a.createElement(g.a,{component:"div",color:"textSecondary",variant:"body1",className:"flex items-center justify-start"},c.a.createElement("div",null,"to"),c.a.createElement("div",{className:"mx-4"},a.to[0].name)))),c.a.createElement(b.a,null,c.a.createElement(f.a,null,"more_vert"))),c.a.createElement("div",{className:"my-16"},c.a.createElement(g.a,{color:"primary",className:"cursor-pointer underline mb-8",onClick:function(){j(!x)}},x?c.a.createElement("span",null,"Hide Details"):c.a.createElement("span",null,"Show Details")),x&&c.a.createElement("div",{className:"flex"},c.a.createElement(g.a,{variant:"body2",className:"flex flex-col"},c.a.createElement("span",null,"From:"),c.a.createElement("span",null,"To:"),c.a.createElement("span",null,"Date:")),c.a.createElement(g.a,{variant:"body2",color:"textSecondary",className:"px-4 flex flex-col"},c.a.createElement("span",null,a.from.email),c.a.createElement("span",null,a.to[0].email),c.a.createElement("span",null,a.time)))),c.a.createElement(g.a,{variant:"body2",dangerouslySetInnerHTML:{__html:a.message}}),c.a.createElement(p.a,{className:"my-16"}),a.attachments&&c.a.createElement("div",null,c.a.createElement(g.a,{variant:"subtitle1",className:"mb-16"},c.a.createElement("span",{className:"mx-4"},"Attachments"),c.a.createElement("span",null,"(",a.attachments.length,")")),c.a.createElement("div",{className:"flex flex-wrap -mx-8"},a.attachments.map((function(e){return c.a.createElement("div",{className:"w-192 px-8 pb-16",key:e.fileName},c.a.createElement("img",{className:"w-full rounded-4",src:e.preview,alt:e.fileName}),c.a.createElement("div",{className:"flex flex-col"},c.a.createElement(g.a,{color:"primary",className:"underline cursor-pointer",onClick:function(e){return e.preventDefault()}},"View"),c.a.createElement(g.a,{color:"primary",className:"underline cursor-pointer",onClick:function(e){return e.preventDefault()}},"Download"),c.a.createElement(g.a,null,"(",e.size,")")))}))))))):null})),F=a(46),_=a(1396);var $=Object(o.k)((function(e){var t=Object(i.c)(),a=Object(i.d)((function(e){return e.mailApp.mail})),n=Object(F.a)(),r=_.compile(e.match.path),l=Object(o.j)(),s=Object(B.a)({},l);delete s.mailId;var u=r(s);return a?c.a.createElement("div",{className:"flex flex-1 items-center justify-between overflow-hidden sm:px-16"},c.a.createElement(b.a,{onClick:function(){return e.history.push(u)}},c.a.createElement(f.a,null,"ltr"===n.direction?"arrow_back":"arrow_forward")),c.a.createElement("div",{className:"flex items-center justify-start","aria-label":"Toggle star"},c.a.createElement(m.a,{animation:"transition.expandIn",delay:100},c.a.createElement(b.a,{onClick:function(){return t(z({starred:!a.starred}))}},a.starred?c.a.createElement(f.a,null,"star"):c.a.createElement(f.a,null,"star_border"))),c.a.createElement(m.a,{animation:"transition.expandIn",delay:100},c.a.createElement(b.a,{onClick:function(){return t(z({important:!a.important}))}},a.important?c.a.createElement(f.a,null,"label"):c.a.createElement(f.a,null,"label_off"))))):null})),V=a(1237),J=a(608),q=a(213),G=a(1245),Y=a(1683),K=a(29),Q=a(11),X=Object(k.b)("mailApp/mails/getMails",function(){var e=Object(w.a)(N.a.mark((function e(t,a){var n,r,l;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.getState,t=t||n().mailApp.mails.routeParams,e.next=4,I.a.get("/api/mail-app/mails",{params:t});case 4:return r=e.sent,e.next=7,r.data;case 7:return l=e.sent,e.abrupt("return",{data:l,routeParams:t});case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),Z=Object(k.b)("mailApp/mails/setFolderOnSelectedMails",function(){var e=Object(w.a)(N.a.mark((function e(t,a){var n,r,l,c,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,l=r().mailApp.mails.selectedMailIds,e.next=4,I.a.post("/api/mail-app/set-folder",{selectedMailIds:l,folderId:t});case 4:return c=e.sent,e.next=7,c.data;case 7:return i=e.sent,n(X()),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),ee=Object(k.b)("mailApp/mails/toggleLabelOnSelectedMails",function(){var e=Object(w.a)(N.a.mark((function e(t,a){var n,r,l,c,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,l=r().mailApp.mails.selectedMailIds,e.next=4,I.a.post("/api/mail-app/toggle-label",{selectedMailIds:l,labelId:t});case 4:return c=e.sent,e.next=7,c.data;case 7:return i=e.sent,n(X()),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),te=Object(k.c)({}),ae=te.getSelectors((function(e){return e.mailApp.mails})),ne=ae.selectAll,re=(ae.selectById,Object(k.d)({name:"mailApp/mails",initialState:te.getInitialState({searchText:"",routeParams:{},selectedMailIds:[]}),reducers:{setMailsSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}},selectAllMails:function(e,t){e.selectedMailIds=e.ids},deselectAllMails:function(e,t){e.selectedMailIds=[]},selectMailsByParameter:function(e,t){var a=Object(s.a)(t.payload,2),n=a[0],r=a[1];e.selectedMailIds=e.ids.filter((function(t){return e.entities[t][n]===r}))},toggleInSelectedMails:function(e,t){var a=t.payload;e.selectedMailIds=e.selectedMailIds.includes(a)?e.selectedMailIds.filter((function(e){return e!==a})):[].concat(Object(Q.a)(e.selectedMailIds),[a])}},extraReducers:Object(O.a)({},X.fulfilled,(function(e,t){var a=t.payload,n=a.data,r=a.routeParams;te.setAll(e,n),e.routeParams=r,e.selectedMailIds=[]}))})),le=re.actions,ce=le.setMailsSearchText,ie=le.selectAllMails,oe=le.deselectAllMails,se=le.selectMailsByParameter,me=le.toggleInSelectedMails,ue=re.reducer;var de=function(e){var t=Object(i.c)(),a=Object(i.d)((function(e){return e.mailApp.mails.searchText})),n=Object(i.d)(K.e),r=Object(Y.a)("mailApp").t;return c.a.createElement(G.a,{theme:n},c.a.createElement("div",{className:"flex flex-1"},c.a.createElement(q.a,{className:"flex items-center w-full h-48 sm:h-56 p-16 ltr:pl-4 lg:ltr:pl-16 rtl:pr-4 lg:rtl:pr-16 rounded-8",elevation:1},c.a.createElement(V.a,{lgUp:!0},c.a.createElement(b.a,{onClick:function(t){return e.pageLayout.current.toggleLeftSidebar()},"aria-label":"open left sidebar"},c.a.createElement(f.a,null,"menu"))),c.a.createElement(f.a,{color:"action"},"search"),c.a.createElement(J.a,{placeholder:r("SEARCH_PLACEHOLDER"),className:"px-16",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:function(e){return t(ce(e))}}))))},pe=a(95),fe=a(642),be=a(324),ge=a(152),he=a(1251),ve=a(1246),Ee=a(413),xe=a(1181),je=a(1187),ye=a(1186),Oe=a(1234),Se=a(1233),Ne=Object(v.a)({root:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.08)",border:"1px solid rgba(0, 0, 0, 0.16)",paddingLeft:16,marginBottom:8,borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center"},filename:{fontWeight:600},size:{marginLeft:8,fontWeight:300}});var we=function(e){var t=Ne();return c.a.createElement("div",{className:Object(E.default)(t.root,e.className)},c.a.createElement("div",{className:"flex"},c.a.createElement(g.a,{variant:"caption",className:t.filename},e.fileName),c.a.createElement(g.a,{variant:"caption",className:t.size},"(",e.size,")")),c.a.createElement(b.a,null,c.a.createElement(f.a,{className:"text-16"},"close")))};var ke=function(){var e=Object(l.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(h.c)({from:"johndoe@creapond.com",to:"",cc:"",bcc:"",subject:"",message:""}),i=r.form,o=r.handleChange,m=Object(Y.a)("mailApp").t;return c.a.createElement("div",{className:"p-24"},c.a.createElement(Ee.a,{variant:"contained",color:"primary",className:"w-full",onClick:function(){n(!0)}},m("COMPOSE")),c.a.createElement(xe.a,{open:a,onClose:function(){n(!1)},"aria-labelledby":"form-dialog-title",classes:{paper:"rounded-8"}},c.a.createElement(ve.a,{position:"static"},c.a.createElement(Se.a,{className:"flex w-full"},c.a.createElement(g.a,{variant:"subtitle1",color:"inherit"},"New Message"))),c.a.createElement("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),n(!1)},className:"flex flex-col"},c.a.createElement(ye.a,{classes:{root:"p-16 pb-0 sm:p-24 sm:pb-0"}},c.a.createElement(Oe.a,{className:"mt-8 mb-16",label:"From",id:"from",name:"from",value:i.from,onChange:o,variant:"outlined",fullWidth:!0,disabled:!0}),c.a.createElement(Oe.a,{className:"mt-8 mb-16",label:"To",autoFocus:!0,id:"to",name:"to",value:i.to,onChange:o,variant:"outlined",fullWidth:!0,required:!0}),c.a.createElement(Oe.a,{className:"mt-8 mb-16",label:"Cc",id:"cc",name:"cc",value:i.cc,onChange:o,variant:"outlined",fullWidth:!0}),c.a.createElement(Oe.a,{className:"mt-8 mb-16",label:"Bcc",id:"bcc",name:"bcc",value:i.bcc,onChange:o,variant:"outlined",fullWidth:!0}),c.a.createElement(Oe.a,{className:"mt-8 mb-16",label:"Subject",id:"subject",name:"subject",value:i.subject,onChange:o,variant:"outlined",fullWidth:!0}),c.a.createElement(Oe.a,{className:"mt-8 mb-16",id:"message",name:"message",onChange:o,value:i.message,label:"Message",type:"text",multiline:!0,rows:5,variant:"outlined",fullWidth:!0}),c.a.createElement("div",{className:"pt-8"},c.a.createElement(we,{fileName:"attachment-2.doc",size:"12 kb"}),c.a.createElement(we,{fileName:"attachment-1.jpg",size:"350 kb"}))),c.a.createElement(je.a,{className:"justify-between p-8"},c.a.createElement("div",{className:"px-16"},c.a.createElement(Ee.a,{variant:"contained",color:"primary",type:"submit"},"Send"),c.a.createElement(b.a,null,c.a.createElement(f.a,null,"attach_file"))),c.a.createElement(b.a,{onClick:function(){n(!1)}},c.a.createElement(f.a,null,"delete"))))))},Ce=Object(k.b)("mailApp/filters/getFilters",Object(w.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/api/mail-app/filters");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),Ie=Object(k.c)({}),Ae=Ie.getSelectors((function(e){return e.mailApp.filters})),Me=Ae.selectAll,Re=(Ae.selectById,Object(k.d)({name:"mailApp/filters",initialState:Ie.getInitialState({}),reducers:{},extraReducers:Object(O.a)({},Ce.fulfilled,Ie.setAll)}).reducer),Te=Object(k.b)("mailApp/folders/getFolders",Object(w.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/api/mail-app/folders");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),Pe=Object(k.c)({}),Le=Pe.getSelectors((function(e){return e.mailApp.folders})),Be=Le.selectAll,De=(Le.selectById,Object(k.d)({name:"mailApp/folders",initialState:Pe.getInitialState({}),reducers:{},extraReducers:Object(O.a)({},Te.fulfilled,Pe.setAll)}).reducer),He=Object(v.a)((function(e){return{listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:"".concat(e.palette.secondary.contrastText,"!important"),pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{fontSize:16,width:16,height:16,marginRight:16}},listSubheader:{paddingLeft:24}}}));var ze=function(e){var t=Object(i.d)(Be),a=Object(i.d)(T),n=Object(i.d)(Me),r=He(),l=Object(Y.a)("mailApp").t;return c.a.createElement(m.a,{animation:"transition.slideUpIn",delay:400},c.a.createElement("div",{className:"flex-auto border-l-1"},c.a.createElement(ke,null),c.a.createElement("div",null,c.a.createElement(fe.a,null,c.a.createElement(he.a,{className:r.listSubheader,disableSticky:!0},l("FOLDERS")),t.length>0&&t.map((function(e){return c.a.createElement(be.a,{button:!0,component:pe.a,to:"/apps/mail/".concat(e.handle),key:e.id,activeClassName:"active",className:r.listItem},c.a.createElement(f.a,{className:"list-item-icon",color:"action"},e.icon),c.a.createElement(ge.a,{primary:e.translate?l(e.translate):e.title,disableTypography:!0}))}))),c.a.createElement(fe.a,null,c.a.createElement(he.a,{className:r.listSubheader,disableSticky:!0},l("FILTERS")),n.length>0&&n.map((function(e){return c.a.createElement(be.a,{button:!0,component:pe.a,to:"/apps/mail/filter/".concat(e.handle),activeClassName:"active",className:r.listItem,key:e.id},c.a.createElement(f.a,{className:"list-item-icon",color:"action"},e.icon),c.a.createElement(ge.a,{primary:e.translate?l(e.translate):e.title,disableTypography:!0}))}))),c.a.createElement(fe.a,null,c.a.createElement(he.a,{className:r.listSubheader,disableSticky:!0},l("LABELS")),a&&a.map((function(e){return c.a.createElement(be.a,{button:!0,component:pe.a,to:"/apps/mail/label/".concat(e.handle),key:e.id,className:r.listItem},c.a.createElement(f.a,{className:"list-item-icon",style:{color:e.color},color:"action"},"label"),c.a.createElement(ge.a,{primary:e.title,disableTypography:!0}))}))))))},We=a(245),Ue={creapond:"johndoe@creapond.com",withinpixels:"johndoe@withinpixels.com"};var Fe=function(e){var t=Object(l.useState)("creapond"),a=Object(s.a)(t,2),n=a[0],r=a[1],i=Object(Y.a)("mailApp").t;return c.a.createElement("div",{className:"flex flex-col justify-center h-full p-24"},c.a.createElement("div",{className:"flex items-center flex-1"},c.a.createElement(m.a,{animation:"transition.expandIn",delay:300},c.a.createElement(f.a,{className:"text-32"},"mail")),c.a.createElement(m.a,{animation:"transition.slideLeftIn",delay:300},c.a.createElement("span",{className:"text-24 mx-16"},i("APP_TITLE")))),c.a.createElement(m.a,{animation:"transition.slideUpIn",delay:300},c.a.createElement(Oe.a,{id:"account-selection",select:!0,label:n,value:n,onChange:function(e){r(e.target.value)},placeholder:"Select Account",margin:"normal"},Object.keys(Ue).map((function(e,t){return c.a.createElement(We.a,{key:e,value:e},Ue[e])})))))},_e=a(176),$e=a(24),Ve=a(1236),Je=a(1396),qe=Object(v.a)((function(e){return{mailItem:{borderBottom:"1px solid  ".concat(e.palette.divider),"&.unread":{background:"rgba(0,0,0,0.03)"},"&.selected":{"&::after":{content:'""',position:"absolute",left:0,display:"block",height:"100%",width:3,backgroundColor:e.palette.primary.main}}},avatar:{backgroundColor:e.palette.primary[500]}}})),Ge=Object(o.k)((function(e){var t=Object(i.c)(),a=Object(i.d)((function(e){return e.mailApp.mails.selectedMailIds})),n=Object(i.d)(P),r=Object(o.j)(),l=qe(e),s=Je.compile(e.match.path),m=a.length>0&&void 0!==a.find((function(t){return t===e.mail.id}));return c.a.createElement(be.a,{dense:!0,button:!0,onClick:function(){return e.history.push(s(Object(B.a)(Object(B.a)({},r),{},{mailId:e.mail.id})))},className:Object(E.default)(l.mailItem,m&&"selected",!e.mail.read&&"unread","py-16 px-0 md:px-8")},c.a.createElement(Ve.a,{tabIndex:-1,disableRipple:!0,checked:m,onChange:function(){return t(me(e.mail.id))},onClick:function(e){return e.stopPropagation()}}),c.a.createElement("div",{className:"flex flex-1 flex-col relative overflow-hidden"},c.a.createElement("div",{className:"flex items-center justify-between px-16 pb-8"},c.a.createElement("div",{className:"flex items-center"},e.mail.from.avatar?c.a.createElement(d.a,{alt:e.mail.from.name,src:e.mail.from.avatar}):c.a.createElement(d.a,{className:l.avatar},e.mail.from.name[0]),c.a.createElement(g.a,{variant:"subtitle1",className:"mx-8"},e.mail.from.name)),c.a.createElement(g.a,{variant:"subtitle1"},e.mail.time)),c.a.createElement("div",{className:"flex flex-col px-16 py-0"},c.a.createElement(g.a,{className:"truncate"},e.mail.subject),c.a.createElement(g.a,{color:"textSecondary",className:"truncate"},u.a.truncate(e.mail.message.replace(/<(?:.|\n)*?>/gm,""),{length:180}))),c.a.createElement("div",{className:"flex justify-end px-12"},!u.a.isEmpty(n)&&e.mail.labels.map((function(e){return c.a.createElement(y,{className:"mx-2 mt-4",title:n[e].title,color:n[e].color,key:e})})))))}));var Ye=Object(o.k)((function(e){var t=Object(i.c)(),a=Object(i.d)(ne),n=Object(i.d)((function(e){return e.mailApp.mails.searchText})),r=Object(o.j)(),u=Object(l.useState)(null),d=Object(s.a)(u,2),p=d[0],f=d[1],b=Object(Y.a)("mailApp").t;return Object(h.b)((function(){t(X(r))}),[t,r]),Object(l.useEffect)((function(){a&&f(0===n.length?a:$e.a.filterArrayByString(a,n))}),[a,n]),p?0===p.length?c.a.createElement(m.a,{delay:100},c.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},c.a.createElement(g.a,{color:"textSecondary",variant:"h5"},b("NO_MESSAGES")))):c.a.createElement(fe.a,{className:"p-0"},c.a.createElement(_e.a,{enter:{animation:"transition.slideUpBigIn"}},p.map((function(e){return c.a.createElement(Ge,{mail:e,key:e.id})})))):null})),Ke=a(461);var Qe=function(e){var t=Object(i.c)(),a=Object(i.d)((function(e){return e.mailApp.mails.selectedMailIds})),n=Object(i.d)(ne),r=Object(i.d)(T),o=Object(i.d)(Be),m=Object(l.useState)({selectMenu:null,foldersMenu:null,labelsMenu:null}),u=Object(s.a)(m,2),d=u[0],p=u[1];function g(e,t){p(Object(B.a)(Object(B.a)({},t),{},Object(O.a)({},t,e.currentTarget)))}function h(e,t){p(Object(B.a)(Object(B.a)({},t),{},Object(O.a)({},t,null)))}return c.a.createElement("div",{className:"flex flex-1 items-center sm:px-8"},c.a.createElement(Ve.a,{onChange:function(e){return e.target.checked?t(ie()):t(oe())},checked:a.length===Object.keys(n).length&&a.length>0,indeterminate:a.length!==Object.keys(n).length&&a.length>0}),c.a.createElement(b.a,{className:"",size:"small","aria-label":"More","aria-owns":d.select?"select-menu":null,"aria-haspopup":"true",onClick:function(e){return g(e,"select")}},c.a.createElement(f.a,null,"arrow_drop_down")),c.a.createElement(Ke.a,{id:"select-menu",anchorEl:d.select,open:Boolean(d.select),onClose:function(e){return h(0,"select")}},c.a.createElement(We.a,{onClick:function(e){t(ie()),h(0,"select")}},"All"),c.a.createElement(We.a,{onClick:function(e){t(oe()),h(0,"select")}},"None"),c.a.createElement(We.a,{onClick:function(e){t(se(["read",!0])),h(0,"select")}},"Read"),c.a.createElement(We.a,{onClick:function(e){t(se(["read",!1])),h(0,"select")}},"Unread"),c.a.createElement(We.a,{onClick:function(e){t(se(["starred",!0])),h(0,"select")}},"Starred"),c.a.createElement(We.a,{onClick:function(e){t(se(["starred",!1])),h(0,"select")}},"Unstarred"),c.a.createElement(We.a,{onClick:function(e){t(se(["important",!0])),h(0,"select")}},"Important"),c.a.createElement(We.a,{onClick:function(e){t(se(["important",!1])),h(0,"select")}},"Unimportant")),a.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"border-r-1 h-48 w-1 mx-12 my-0"}),c.a.createElement(b.a,{onClick:function(e){return t(Z(4))},"aria-label":"Delete"},c.a.createElement(f.a,null,"delete")),c.a.createElement(b.a,{"aria-label":"More","aria-owns":d.folders?"folders-menu":null,"aria-haspopup":"true",onClick:function(e){return g(e,"folders")}},c.a.createElement(f.a,null,"folder")),c.a.createElement(Ke.a,{id:"folders-menu",anchorEl:d.folders,open:Boolean(d.folders),onClose:function(e){return h(0,"folders")}},o.length>0&&o.map((function(e){return c.a.createElement(We.a,{onClick:function(a){t(Z(e.id)),h(0,"folders")},key:e.id},e.title)}))),c.a.createElement(b.a,{"aria-label":"More","aria-owns":d.labels?"labels-menu":null,"aria-haspopup":"true",onClick:function(e){return g(e,"labels")}},c.a.createElement(f.a,null,"label")),c.a.createElement(Ke.a,{id:"folders-menu",anchorEl:d.labels,open:Boolean(d.labels),onClose:function(e){return h(0,"labels")}},r.length>0&&r.map((function(e){return c.a.createElement(We.a,{onClick:function(a){t(ee(e.id)),h(0,"labels")},key:e.id},e.title)})))))},Xe=a(107),Ze=Object(Xe.c)({mails:ue,mail:W,folders:De,labels:L,filters:Re});t.default=Object(r.a)("mailApp",Ze)((function(e){var t=Object(i.c)(),a=Object(l.useRef)(null),r=Object(o.j)();return Object(l.useEffect)((function(){t(Ce()),t(Te()),t(A())}),[t]),c.a.createElement(n.a,{classes:{root:"w-full",content:"flex flex-col",header:"items-center min-h-72 h-72 sm:h-136 sm:min-h-136"},header:c.a.createElement(de,{pageLayout:a}),contentToolbar:r.mailId?c.a.createElement($,null):c.a.createElement(Qe,null),content:r.mailId?c.a.createElement(U,null):c.a.createElement(Ye,null),leftSidebarHeader:c.a.createElement(Fe,null),leftSidebarContent:c.a.createElement(ze,null),ref:a,innerScroll:!0})}))}}]);