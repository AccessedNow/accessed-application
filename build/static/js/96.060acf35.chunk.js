(this["webpackJsonpanymay-app"]=this["webpackJsonpanymay-app"]||[]).push([[96],{1302:function(e,t,r){"use strict";var n=r(648);Object.defineProperty(t,"__esModule",{value:!0});var a={createMuiTheme:!0,unstable_createMuiStrictModeTheme:!0,createStyles:!0,makeStyles:!0,responsiveFontSizes:!0,styled:!0,useTheme:!0,withStyles:!0,withTheme:!0,createGenerateClassName:!0,jssPreset:!0,ServerStyleSheets:!0,StylesProvider:!0,MuiThemeProvider:!0,ThemeProvider:!0};Object.defineProperty(t,"createMuiTheme",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"unstable_createMuiStrictModeTheme",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"createStyles",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"makeStyles",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"responsiveFontSizes",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"styled",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"useTheme",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"withStyles",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"withTheme",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"createGenerateClassName",{enumerable:!0,get:function(){return v.createGenerateClassName}}),Object.defineProperty(t,"jssPreset",{enumerable:!0,get:function(){return v.jssPreset}}),Object.defineProperty(t,"ServerStyleSheets",{enumerable:!0,get:function(){return v.ServerStyleSheets}}),Object.defineProperty(t,"StylesProvider",{enumerable:!0,get:function(){return v.StylesProvider}}),Object.defineProperty(t,"MuiThemeProvider",{enumerable:!0,get:function(){return v.ThemeProvider}}),Object.defineProperty(t,"ThemeProvider",{enumerable:!0,get:function(){return v.ThemeProvider}});var i=r(83);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}));var o=n(r(1329)),l=n(r(1352)),c=n(r(1353)),u=n(r(1354)),s=n(r(1355)),f=n(r(1357)),d=r(1413);Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}}))}));var m=n(r(1358)),p=n(r(1368)),b=n(r(1414)),v=r(156)},1352:function(e,t,r){"use strict";var n=r(648);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return i.default.apply(void 0,[(0,a.deepmerge)({unstable_strictMode:!0},e)].concat(r))};var a=r(26),i=n(r(1329))},1353:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.createStyles)(e)};var n=r(156)},1354:function(e,t,r){"use strict";var n=r(648);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(155)),i=r(156),o=n(r(1303));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,i.makeStyles)(e,(0,a.default)({defaultTheme:o.default},t))};t.default=l},1355:function(e,t,r){"use strict";var n=r(648);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.breakpoints,n=void 0===r?["sm","md","lg"]:r,l=t.disableAlign,c=void 0!==l&&l,u=t.factor,s=void 0===u?2:u,f=t.variants,d=void 0===f?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:f,m=(0,a.default)({},e);m.typography=(0,a.default)({},m.typography);var p=m.typography,b=(0,o.convertLength)(p.htmlFontSize),v=n.map((function(e){return m.breakpoints.values[e]}));return d.forEach((function(e){var t=p[e],r=parseFloat(b(t.fontSize,"rem"));if(!(r<=1)){var n=r,l=1+(n-1)/s,u=t.lineHeight;if(!(0,o.isUnitless)(u)&&!c)throw new Error((0,i.formatMuiErrorMessage)(6));(0,o.isUnitless)(u)||(u=parseFloat(b(u,"rem"))/parseFloat(r));var f=null;c||(f=function(e){return(0,o.alignProperty)({size:e,grid:(0,o.fontGrid)({pixels:4,lineHeight:u,htmlFontSize:p.htmlFontSize})})}),p[e]=(0,a.default)({},t,(0,o.responsiveProperty)({cssProperty:"fontSize",min:l,max:n,unit:"rem",breakpoints:v,transform:f}))}})),m};var a=n(r(155)),i=r(26),o=r(1356)},1356:function(e,t,r){"use strict";var n=r(648);Object.defineProperty(t,"__esModule",{value:!0}),t.isUnitless=function(e){return String(parseFloat(e)).length===String(e).length},t.getUnit=i,t.toUnitless=o,t.convertLength=function(e){return function(t,r){var n=i(t);if(n===r)return t;var a=o(t);if("px"!==n)if("em"===n)a=o(t)*o(e);else if("rem"===n)return a=o(t)*o(e),t;var l=a;if("px"!==r)if("em"===r)l=a/o(e);else{if("rem"!==r)return t;l=a/o(e)}return parseFloat(l.toFixed(5))+r}},t.alignProperty=function(e){var t=e.size,r=e.grid,n=t-t%r,a=n+r;return t-n<a-t?n:a},t.fontGrid=function(e){var t=e.lineHeight,r=e.pixels,n=e.htmlFontSize;return r/(t*n)},t.responsiveProperty=function(e){var t=e.cssProperty,r=e.min,n=e.max,i=e.unit,o=void 0===i?"rem":i,l=e.breakpoints,c=void 0===l?[600,960,1280]:l,u=e.transform,s=void 0===u?null:u,f=(0,a.default)({},t,"".concat(r).concat(o)),d=(n-r)/c[c.length-1];return c.forEach((function(e){var n=r+d*e;null!==s&&(n=s(n)),f["@media (min-width:".concat(e,"px)")]=(0,a.default)({},t,"".concat(Math.round(1e4*n)/1e4).concat(o))})),f};var a=n(r(45));function i(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function o(e){return parseFloat(e)}},1357:function(e,t,r){"use strict";var n=r(648);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(155)),i=r(156),o=n(r(1303)),l=function(e){var t=(0,i.styled)(e);return function(e,r){return t(e,(0,a.default)({defaultTheme:o.default},r))}};t.default=l},1358:function(e,t,r){"use strict";var n=r(648);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){0;return(0,a.useTheme)()||i.default};var a=r(156),i=(n(r(0)),n(r(1303)))},1572:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(275);function a(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i,o=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(l)throw i}}}}},1618:function(e,t,r){"use strict";var n=r(1),a=r(142),i=r(4),o=r(0),l=(r(104),r(3),r(2)),c=r(8),u=r(134),s=r(17),f=r(71),d=Object(f.a)(o.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=r(325);var p=Object(c.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(s.c)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,r=Object(i.a)(e,["classes"]);return o.createElement(m.a,Object(n.a)({component:"li",className:t.root,focusRipple:!0},r),o.createElement(d,{className:t.icon}))}));var b=o.forwardRef((function(e,t){var r=e.children,c=e.classes,s=e.className,f=e.component,d=void 0===f?"nav":f,m=e.expandText,b=void 0===m?"Show path":m,v=e.itemsAfterCollapse,y=void 0===v?1:v,h=e.itemsBeforeCollapse,g=void 0===h?1:h,j=e.maxItems,S=void 0===j?8:j,x=e.separator,O=void 0===x?"/":x,P=Object(i.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),E=o.useState(!1),w=E[0],M=E[1],k=o.Children.toArray(r).filter((function(e){return o.isValidElement(e)})).map((function(e,t){return o.createElement("li",{className:c.li,key:"child-".concat(t)},e)}));return o.createElement(u.a,Object(n.a)({ref:t,component:d,color:"textSecondary",className:Object(l.default)(c.root,s)},P),o.createElement("ol",{className:c.ol},function(e,t,r){return e.reduce((function(n,a,i){return i<e.length-1?n=n.concat(a,o.createElement("li",{"aria-hidden":!0,key:"separator-".concat(i),className:t},r)):n.push(a),n}),[])}(w||S&&k.length<=S?k:function(e){return g+y>=e.length?e:[].concat(Object(a.a)(e.slice(0,g)),[o.createElement(p,{"aria-label":b,key:"ellipsis",onClick:function(e){M(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(a.a)(e.slice(e.length-y,e.length)))}(k),c.separator,O)))}));t.a=Object(c.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(b)},2778:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(0),i=r.n(a),o=r(455),l=r(456),c=r(168),u=r(108),s={id:"settings",title:"Settings",type:"group",icon:"star",children:[{id:"changelog",title:"Changelog",type:"item",icon:"history",url:"/settings/changelog",badge:{title:"5.1.0",bg:"rgb(236, 12, 142)",fg:"#FFFFFF"}},{id:"profile",title:"Profile",subtitle:"Detail about your personal information",type:"item",icon:"person",url:"/talent/settings/my-account"},{id:"company",title:"Company",subtitle:"Detail about your company information",type:"item",icon:"work",url:"/talent/settings/company"},{id:"user-management",title:"User Management",subtitle:"Invite members to your company",type:"item",icon:"people",url:"/talent/settings/user-management"},{id:"labels",title:"Labels",subtitle:"Manage labels",type:"item",icon:"people",url:"/talent/settings/labels"}]},f=(r(1572),r(1618),r(134));r(42),r(27);var d=r(14),m=r(113),p=r(8),b=r(662),v=r(1237),y=r(153),h=r(283),g=r(245),j=r(670),S=r(674),x=r(643),O=r(5),P=Object(p.a)((function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}}))(x.a),E=Object(b.a)((function(e){return{margin:{margin:e.spacing(1)}}}));var w=function(e){Object(O.c)();var t=E(),r=Object(O.d)((function(e){var t=e.auth;return t&&t.user&&t.user})),n=r.companies,a=n.filter((function(e){return e.id==r.selectedCompany.id}))[0],o=i.a.useState(""),l=Object(d.a)(o,2),c=l[0],u=l[1],s=function(e){u(e.target.value)};return i.a.createElement("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24 relative"},i.a.createElement("div",{className:"flex flex-shrink items-center sm:w-224"},i.a.createElement(v.a,{lgUp:!0},i.a.createElement(h.a,{"aria-label":"open left sidebar"},i.a.createElement(y.a,null,"menu"))),i.a.createElement("div",{className:"flex items-center"},i.a.createElement(m.a,{animation:"transition.expandIn",delay:300},i.a.createElement(y.a,{className:"text-32"},"account_box")),i.a.createElement(m.a,{animation:"transition.slideLeftIn",delay:300},i.a.createElement(f.a,{variant:"h6",className:"mx-12 hidden sm:flex"},"Settings")))),i.a.createElement("div",{className:"flex flex-1 items-center justify-end"},i.a.createElement(j.a,{className:t.margin},i.a.createElement(S.a,{labelId:"demo-customized-select-label",id:"demo-customized-select",value:c,onChange:s,input:i.a.createElement(P,null)},i.a.createElement(g.a,null,i.a.createElement(y.a,{className:"mr-10",fontSize:"small"},a.avatar),a.name),n.map((function(e,t){return e.id!==a.id&&i.a.createElement(g.a,{key:e.id,onClick:function(e){e.preventDefault(),e.stopPropagation(),s(t)}},i.a.createElement(y.a,{className:"mr-10",fontSize:"small"},e.avatar),e.name)}))))))},M=r(1302),k=Object(M.makeStyles)((function(e){return{item:{height:70,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0"}}}));t.default=function(e){e.content;var t=e.route,r=Object(a.useRef)(null);return k(),i.a.createElement(l.a,{classes:{root:"h-full",contentWrapper:"p-0",content:"flex flex-col h-full",leftSidebar:"w-320 pt-8",header:"h-64 min-h-64",wrapper:"min-h-0"},header:i.a.createElement(w,null),content:i.a.createElement("div",{className:"max-w-2xl min-h-full flex flex-auto flex-col"},i.a.createElement("div",{className:"flex flex-col flex-1 relative"},i.a.createElement(c.a,null,Object(u.b)(t.routes)))),leftSidebarContent:i.a.createElement(o.a,{className:Object(n.default)("navigation"),navigation:s.children}),sidebarInner:!0,ref:r})}}}]);