(this["webpackJsonpanymay-app"]=this["webpackJsonpanymay-app"]||[]).push([[82],{1258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,o=n(0),r=(a=o)&&a.__esModule?a:{default:a};var l=void 0,i=void 0;"undefined"!==typeof document&&(l=document),"undefined"!==typeof window&&(i=window);var s=t.FrameContext=r.default.createContext({document:l,window:i}),c=s.Provider,d=s.Consumer;t.FrameContextProvider=c,t.FrameContextConsumer=d},1259:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var a=n(14),o=n(127),r=n(1246),l=n(1254),i=n(153),s=n(2624),c=n(2773),d=n(0),m=n.n(d),u=n(11),p=n(9),f=n(63),h=n(64),b=n(137),y=n(136),g=n(1183),v=n(645),E=n(1223),w=n(1245),x=n(8),C=n(58),k=n(429),M=n(1263),O=n.n(M),j=Object(g.a)({productionPrefix:"iframe-"}),S=function(e){Object(b.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(C.c)(Object(p.a)(Object(p.a)({},Object(v.a)()),{},{plugins:[].concat(Object(u.a)(Object(v.a)().plugins),[Object(k.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),m.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return m.a.createElement(O.a,{head:this.renderHead(),ref:this.handleRef,className:n.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?m.a.createElement(E.b,{jss:this.state.jss,generateClassName:j,sheetsManager:this.state.sheetsManager},m.a.createElement(w.a,{theme:a},m.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(m.a.Component),N=Object(x.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(S);function T(e){var t=Object(d.useState)(e.currentTabIndex),n=Object(a.a)(t,2),u=n[0],p=n[1],f=e.component,h=e.raw,b=e.iframe,y=e.className;return m.a.createElement(l.a,{className:y},m.a.createElement(r.a,{position:"static",color:"default",elevation:0},m.a.createElement(c.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:u,onChange:function(e,t){p(t)}},f&&m.a.createElement(s.a,{classes:{root:"min-w-64"},icon:m.a.createElement(i.a,null,"remove_red_eye")}),h&&m.a.createElement(s.a,{classes:{root:"min-w-64"},icon:m.a.createElement(i.a,null,"code")}))),m.a.createElement("div",{className:"flex justify-center max-w-full"},m.a.createElement("div",{className:0===u?"flex flex-1 max-w-full":"hidden"},f&&(b?m.a.createElement(N,null,m.a.createElement(f,null)):m.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},m.a.createElement(f,null)))),m.a.createElement("div",{className:1===u?"flex flex-1":"hidden"},h&&m.a.createElement("div",{className:"flex flex-1"},m.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},h.default)))))}T.defaultProps={currentTabIndex:0};var _=T},1263:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1258);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var o,r=n(1264),l=(o=r)&&o.__esModule?o:{default:o};t.default=l.default},1264:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),l=m(r),i=m(n(19)),s=m(n(3)),c=n(1258),d=m(n(1265));function m(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,o=l.default.createElement(d.default,{contentDidMount:t,contentDidUpdate:n},l.default.createElement(c.FrameContextProvider,{value:{document:e,window:a}},l.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var r=this.getMountTarget();return[i.default.createPortal(this.props.head,this.getDoc().head),i.default.createPortal(o,r)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,l.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(r.Component);u.propTypes={style:s.default.object,head:s.default.node,initialContent:s.default.string,mountTarget:s.default.string,contentDidMount:s.default.func,contentDidUpdate:s.default.func,children:s.default.oneOfType([s.default.element,s.default.arrayOf(s.default.element)])},u.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=u},1265:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),r=(l(o),l(n(3)));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var c=function(e){function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return o.Children.only(this.props.children)}}]),t}(o.Component);c.propTypes={children:r.default.element.isRequired,contentDidMount:r.default.func.isRequired,contentDidUpdate:r.default.func.isRequired},t.default=c},2171:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(14),o=n(0),r=n.n(o),l=n(662),i=n(418);function s(){return Math.round(20*Math.random())-10}function c(){var e=50+s(),t=50+s();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var d=Object(l.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function m(){var e=d(),t=r.a.useState(c),n=Object(a.a)(t,1)[0],o=r.a.useState(!1),l=Object(a.a)(o,2),s=l[0],u=l[1],p=r.a.createElement("div",{style:n,className:e.paper},r.a.createElement("h2",{id:"simple-modal-title"},"Text in a modal"),r.a.createElement("p",{id:"simple-modal-description"},"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."),r.a.createElement(m,null));return r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){u(!0)}},"Open Modal"),r.a.createElement(i.a,{open:s,onClose:function(){u(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},p))}},2172:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Modal from '@material-ui/core/Modal';\n\nfunction rand() {\n  return Math.round(Math.random() * 20) - 10;\n}\n\nfunction getModalStyle() {\n  const top = 50 + rand();\n  const left = 50 + rand();\n\n  return {\n    top: `${top}%`,\n    left: `${left}%`,\n    transform: `translate(-${top}%, -${left}%)`,\n  };\n}\n\nconst useStyles = makeStyles((theme) => ({\n  paper: {\n    position: 'absolute',\n    width: 400,\n    backgroundColor: theme.palette.background.paper,\n    border: '2px solid #000',\n    boxShadow: theme.shadows[5],\n    padding: theme.spacing(2, 4, 3),\n  },\n}));\n\nexport default function SimpleModal() {\n  const classes = useStyles();\n  // getModalStyle is not a pure function, we roll the style only on the first render\n  const [modalStyle] = React.useState(getModalStyle);\n  const [open, setOpen] = React.useState(false);\n\n  const handleOpen = () => {\n    setOpen(true);\n  };\n\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  const body = (\n    <div style={modalStyle} className={classes.paper}>\n      <h2 id=\"simple-modal-title\">Text in a modal</h2>\n      <p id=\"simple-modal-description\">\n        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\n      </p>\n      <SimpleModal />\n    </div>\n  );\n\n  return (\n    <div>\n      <button type=\"button\" onClick={handleOpen}>\n        Open Modal\n      </button>\n      <Modal\n        open={open}\n        onClose={handleClose}\n        aria-labelledby=\"simple-modal-title\"\n        aria-describedby=\"simple-modal-description\"\n      >\n        {body}\n      </Modal>\n    </div>\n  );\n}\n"},2173:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(14),o=n(0),r=n.n(o),l=n(662),i=n(418),s=n(641),c=n(550),d=Object(l.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function m(){var e=d(),t=r.a.useState(!1),n=Object(a.a)(t,2),o=n[0],l=n[1];return r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){l(!0)}},"react-transition-group"),r.a.createElement(i.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:o,onClose:function(){l(!1)},closeAfterTransition:!0,BackdropComponent:s.a,BackdropProps:{timeout:500}},r.a.createElement(c.a,{in:o},r.a.createElement("div",{className:e.paper},r.a.createElement("h2",{id:"transition-modal-title"},"Transition modal"),r.a.createElement("p",{id:"transition-modal-description"},"react-transition-group animates me.")))))}},2174:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Modal from '@material-ui/core/Modal';\nimport Backdrop from '@material-ui/core/Backdrop';\nimport Fade from '@material-ui/core/Fade';\n\nconst useStyles = makeStyles((theme) => ({\n  modal: {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  paper: {\n    backgroundColor: theme.palette.background.paper,\n    border: '2px solid #000',\n    boxShadow: theme.shadows[5],\n    padding: theme.spacing(2, 4, 3),\n  },\n}));\n\nexport default function TransitionsModal() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n\n  const handleOpen = () => {\n    setOpen(true);\n  };\n\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  return (\n    <div>\n      <button type=\"button\" onClick={handleOpen}>\n        react-transition-group\n      </button>\n      <Modal\n        aria-labelledby=\"transition-modal-title\"\n        aria-describedby=\"transition-modal-description\"\n        className={classes.modal}\n        open={open}\n        onClose={handleClose}\n        closeAfterTransition\n        BackdropComponent={Backdrop}\n        BackdropProps={{\n          timeout: 500,\n        }}\n      >\n        <Fade in={open}>\n          <div className={classes.paper}>\n            <h2 id=\"transition-modal-title\">Transition modal</h2>\n            <p id=\"transition-modal-description\">react-transition-group animates me.</p>\n          </div>\n        </Fade>\n      </Modal>\n    </div>\n  );\n}\n"},2175:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(14),o=n(139),r=n(0),l=n.n(r),i=n(662),s=n(418),c=n(641),d=n(1666),m=Object(i.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),u=l.a.forwardRef((function(e,t){var n=e.in,a=e.children,r=e.onEnter,i=e.onExited,s=Object(o.a)(e,["in","children","onEnter","onExited"]),c=Object(d.useSpring)({from:{opacity:0},to:{opacity:n?1:0},onStart:function(){n&&r&&r()},onRest:function(){!n&&i&&i()}});return l.a.createElement(d.animated.div,Object.assign({ref:t,style:c},s),a)}));function p(){var e=m(),t=l.a.useState(!1),n=Object(a.a)(t,2),o=n[0],r=n[1];return l.a.createElement("div",null,l.a.createElement("button",{type:"button",onClick:function(){r(!0)}},"react-spring"),l.a.createElement(s.a,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",className:e.modal,open:o,onClose:function(){r(!1)},closeAfterTransition:!0,BackdropComponent:c.a,BackdropProps:{timeout:500}},l.a.createElement(u,{in:o},l.a.createElement("div",{className:e.paper},l.a.createElement("h2",{id:"spring-modal-title"},"Spring modal"),l.a.createElement("p",{id:"spring-modal-description"},"react-spring animates me.")))))}},2176:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Modal from '@material-ui/core/Modal';\nimport Backdrop from '@material-ui/core/Backdrop';\nimport { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support\n\nconst useStyles = makeStyles((theme) => ({\n  modal: {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  paper: {\n    backgroundColor: theme.palette.background.paper,\n    border: '2px solid #000',\n    boxShadow: theme.shadows[5],\n    padding: theme.spacing(2, 4, 3),\n  },\n}));\n\nconst Fade = React.forwardRef(function Fade(props, ref) {\n  const { in: open, children, onEnter, onExited, ...other } = props;\n  const style = useSpring({\n    from: { opacity: 0 },\n    to: { opacity: open ? 1 : 0 },\n    onStart: () => {\n      if (open && onEnter) {\n        onEnter();\n      }\n    },\n    onRest: () => {\n      if (!open && onExited) {\n        onExited();\n      }\n    },\n  });\n\n  return (\n    <animated.div ref={ref} style={style} {...other}>\n      {children}\n    </animated.div>\n  );\n});\n\nFade.propTypes = {\n  children: PropTypes.element,\n  in: PropTypes.bool.isRequired,\n  onEnter: PropTypes.func,\n  onExited: PropTypes.func,\n};\n\nexport default function SpringModal() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n\n  const handleOpen = () => {\n    setOpen(true);\n  };\n\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  return (\n    <div>\n      <button type=\"button\" onClick={handleOpen}>\n        react-spring\n      </button>\n      <Modal\n        aria-labelledby=\"spring-modal-title\"\n        aria-describedby=\"spring-modal-description\"\n        className={classes.modal}\n        open={open}\n        onClose={handleClose}\n        closeAfterTransition\n        BackdropComponent={Backdrop}\n        BackdropProps={{\n          timeout: 500,\n        }}\n      >\n        <Fade in={open}>\n          <div className={classes.paper}>\n            <h2 id=\"spring-modal-title\">Spring modal</h2>\n            <p id=\"spring-modal-description\">react-spring animates me.</p>\n          </div>\n        </Fade>\n      </Modal>\n    </div>\n  );\n}\n"},2177:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(0),o=n.n(a),r=n(662),l=n(418),i=Object(r.a)((function(e){return{root:{height:300,flexGrow:1,minWidth:300,transform:"translateZ(0)","@media all and (-ms-high-contrast: none)":{display:"none"}},modal:{display:"flex",padding:e.spacing(1),alignItems:"center",justifyContent:"center"},paper:{width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function s(){var e=i(),t=o.a.useRef(null);return o.a.createElement("div",{className:e.root,ref:t},o.a.createElement(l.a,{disablePortal:!0,disableEnforceFocus:!0,disableAutoFocus:!0,open:!0,"aria-labelledby":"server-modal-title","aria-describedby":"server-modal-description",className:e.modal,container:function(){return t.current}},o.a.createElement("div",{className:e.paper},o.a.createElement("h2",{id:"server-modal-title"},"Server-side modal"),o.a.createElement("p",{id:"server-modal-description"},"If you disable JavaScript, you will still see me."))))}},2178:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Modal from '@material-ui/core/Modal';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    height: 300,\n    flexGrow: 1,\n    minWidth: 300,\n    transform: 'translateZ(0)',\n    // The position fixed scoping doesn't work in IE 11.\n    // Disable this demo to preserve the others.\n    '@media all and (-ms-high-contrast: none)': {\n      display: 'none',\n    },\n  },\n  modal: {\n    display: 'flex',\n    padding: theme.spacing(1),\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  paper: {\n    width: 400,\n    backgroundColor: theme.palette.background.paper,\n    border: '2px solid #000',\n    boxShadow: theme.shadows[5],\n    padding: theme.spacing(2, 4, 3),\n  },\n}));\n\nexport default function ServerModal() {\n  const classes = useStyles();\n  const rootRef = React.useRef(null);\n\n  return (\n    <div className={classes.root} ref={rootRef}>\n      <Modal\n        disablePortal\n        disableEnforceFocus\n        disableAutoFocus\n        open\n        aria-labelledby=\"server-modal-title\"\n        aria-describedby=\"server-modal-description\"\n        className={classes.modal}\n        container={() => rootRef.current}\n      >\n        <div className={classes.paper}>\n          <h2 id=\"server-modal-title\">Server-side modal</h2>\n          <p id=\"server-modal-description\">If you disable JavaScript, you will still see me.</p>\n        </div>\n      </Modal>\n    </div>\n  );\n}\n"},2685:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1259),l=n(127),i=n(413),s=n(153),c=n(134),d=n(662),m=Object(d.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return m(),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},o.a.createElement(i.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/modal",target:"_blank",role:"button"},o.a.createElement(s.a,null,"link"),o.a.createElement("span",{className:"mx-4"},"Reference"))),o.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Modal"),o.a.createElement(c.a,{className:"description"},"The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else."),o.a.createElement(c.a,{className:"mb-16",component:"div"},"The component renders its ",o.a.createElement("code",null,"children")," node in front of a backdrop component. The ",o.a.createElement("code",null,"Modal")," offers important features:"),o.a.createElement("ul",null,o.a.createElement("li",null,"\ud83d\udc84 Manages modal stacking when one-at-a-time just isn't enough."),o.a.createElement("li",null,"\ud83d\udd10 Creates a backdrop, for disabling interaction below the modal."),o.a.createElement("li",null,"\ud83d\udd10 It disables scrolling of the page content while open."),o.a.createElement("li",null,"\u267f\ufe0f It properly manages focus; moving to the modal content, and keeping it there until the modal is closed."),o.a.createElement("li",null,"\u267f\ufe0f Adds the appropriate ARIA roles automatically."),o.a.createElement("li",null,"\ud83d\udce6 ",o.a.createElement("a",{href:"/size-snapshot"},"5 kB gzipped"),".")),o.a.createElement("blockquote",null,o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement("strong",null,"Terminology note"),'. The term "modal" is sometimes used to mean "dialog", but this is a misnomer. A modal window describes parts of a UI. An element is considered modal if ',o.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Modal_window"},"it blocks interaction with the rest of the application"),".")),o.a.createElement(c.a,{className:"mb-16",component:"div"},"If you are creating a modal dialog, you probably want to use the ",o.a.createElement("a",{href:"/components/dialogs/"},"Dialog")," component rather than directly using Modal. Modal is a lower-level construct that is leveraged by the following components:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"/components/dialogs/"},"Dialog")),o.a.createElement("li",null,o.a.createElement("a",{href:"/components/drawers/"},"Drawer")),o.a.createElement("li",null,o.a.createElement("a",{href:"/components/menus/"},"Menu")),o.a.createElement("li",null,o.a.createElement("a",{href:"/components/popover/"},"Popover"))),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Simple modal"),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2171).default,raw:n(2172)})),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Notice that you can disable the outline (often blue or gold) with the ",o.a.createElement("code",null,"outline: 0")," CSS property."),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Transitions"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"The open/close state of the modal can be animated with a transition component. This component should respect the following conditions:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Be a direct child descendent of the modal."),o.a.createElement("li",null,"Have an ",o.a.createElement("code",null,"in")," prop. This corresponds to the open / close state."),o.a.createElement("li",null,"Call the ",o.a.createElement("code",null,"onEnter")," callback prop when the enter transition starts."),o.a.createElement("li",null,"Call the ",o.a.createElement("code",null,"onExited")," callback prop when the exit transition is completed. These two callbacks allow the modal to unmount the child content when closed and fully transitioned.")),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Modal has built-in support for ",o.a.createElement("a",{href:"https://github.com/reactjs/react-transition-group"},"react-transition-group"),"."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2173).default,raw:n(2174)})),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Alternatively, you can use ",o.a.createElement("a",{href:"https://github.com/react-spring/react-spring"},"react-spring"),"."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2175).default,raw:n(2176)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Server-side modal"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"React ",o.a.createElement("a",{href:"https://github.com/facebook/react/issues/13097"},"doesn't support")," the ",o.a.createElement("a",{href:"https://reactjs.org/docs/portals.html"},o.a.createElement("code",null,"createPortal()"))," API on the server. In order to display the modal, you need to disable the portal feature with the ",o.a.createElement("code",null,"disablePortal")," prop:"),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2177).default,raw:n(2178)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Limitations"),o.a.createElement(c.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Focus trap"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"The modal moves the focus back to the body of the component if the focus tries to escape it."),o.a.createElement(c.a,{className:"mb-16",component:"div"},"This is done for accessibility purposes, however, it might create issues. In the event the users need to interact with another part of the page, e.g. with a chatbot window, you can disable the behavior:"),o.a.createElement(l.a,{component:"pre",className:"language-jsx"}," \n<Modal disableEnforceFocus />\n"),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Accessibility"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"(WAI-ARIA: ",o.a.createElement("a",{href:"https://www.w3.org/TR/wai-aria-practices/#dialog_modal"},"https://www.w3.org/TR/wai-aria-practices/#dialog_modal"),")"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.a,{className:"mb-16",component:"div"},"Be sure to add ",o.a.createElement("code",null,'aria-labelledby="id..."'),", referencing the modal title, to the ",o.a.createElement("code",null,"Modal"),". Additionally, you may give a description of your modal with the ",o.a.createElement("code",null,'aria-describedby="id..."')," prop on the ",o.a.createElement("code",null,"Modal"),"."),o.a.createElement(l.a,{component:"pre",className:"language-jsx"},' \n<Modal\n  aria-labelledby="modal-title"\n  aria-describedby="modal-description"\n>\n  <h2 id="modal-title">\n    My Title\n  </h2>\n  <Typography id="modal-description">\n    My Description\n  </Typography>\n</Modal>\n')),o.a.createElement("li",null,o.a.createElement(c.a,{className:"mb-16",component:"div"},"The ",o.a.createElement("a",{href:"https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html"},"WAI-ARIA authoring practices")," can help you set the initial focus on the most relevant element, based on your modal content.")),o.a.createElement("li",null,o.a.createElement(c.a,{className:"mb-16",component:"div"},'Keep in mind that a "modal window" overlays on either the primary window or another modal window. Windows under a modal are ',o.a.createElement("strong",null,"inert"),". That is, users cannot interact with content outside an active modal window. This might create ",o.a.createElement("a",{href:"#focus-trap"},"conflicting behaviors"),"."))))}}}]);