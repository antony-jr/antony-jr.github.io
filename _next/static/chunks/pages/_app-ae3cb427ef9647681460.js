_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"+YzT":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),i=n("TSYQ"),o=n.n(i),c=(n("K9S6"),n("q1tI")),u=n.n(c),l=n("JCAc"),s=n("vUet"),f=n("qUpC"),d=u.a.createContext(null);d.displayName="CardContext";var p=d,v=Function.prototype.bind.call(Function.prototype.call,[].slice);var b=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var m=function(e,t){return Object(c.useMemo)((function(){return function(e,t){var n=b(e),r=b(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},h=u.a.createContext(null);h.displayName="NavContext";var y=h,x=n("ILyh"),g=u.a.createContext(null),E=function(){},O=u.a.forwardRef((function(e,t){var n,i,o=e.as,l=void 0===o?"ul":o,s=e.onSelect,f=e.activeKey,d=e.role,p=e.onKeyDown,b=Object(a.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),h=Object(c.useReducer)((function(e){return!e}),!1)[1],O=Object(c.useRef)(!1),j=Object(c.useContext)(x.a),w=Object(c.useContext)(g);w&&(d=d||"tablist",f=w.activeKey,n=w.getControlledId,i=w.getControllerId);var C=Object(c.useRef)(null),N=function(e){var t=C.current;if(!t)return null;var n,r=(n="[data-rb-event-key]:not(.disabled)",v(t.querySelectorAll(n))),a=t.querySelector(".active");if(!a)return null;var i=r.indexOf(a);if(-1===i)return null;var o=i+e;return o>=r.length&&(o=0),o<0&&(o=r.length-1),r[o]},S=function(e,t){null!=e&&(s&&s(e,t),j&&j(e,t))};Object(c.useEffect)((function(){if(C.current&&O.current){var e=C.current.querySelector("[data-rb-event-key].active");e&&e.focus()}O.current=!1}));var k=m(t,C);return u.a.createElement(x.a.Provider,{value:S},u.a.createElement(y.Provider,{value:{role:d,activeKey:Object(x.b)(f),getControlledId:n||E,getControllerId:i||E}},u.a.createElement(l,Object(r.a)({},b,{onKeyDown:function(e){var t;switch(p&&p(e),e.key){case"ArrowLeft":case"ArrowUp":t=N(-1);break;case"ArrowRight":case"ArrowDown":t=N(1);break;default:return}t&&(e.preventDefault(),S(t.dataset.rbEventKey,e),O.current=!0,h())},ref:k,role:d}))))})),j=u.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,c=e.children,l=e.as,f=void 0===l?"div":l,d=Object(a.a)(e,["bsPrefix","className","children","as"]);return n=Object(s.a)(n,"nav-item"),u.a.createElement(f,Object(r.a)({},d,{ref:t,className:o()(i,n)}),c)}));j.displayName="NavItem";var w=j,C=n("dbZe"),N=n("ZCiN"),S=(n("2W6z"),u.a.forwardRef((function(e,t){var n=e.active,i=e.className,l=e.eventKey,s=e.onSelect,f=e.onClick,d=e.as,p=Object(a.a)(e,["active","className","eventKey","onSelect","onClick","as"]),v=Object(x.b)(l,p.href),b=Object(c.useContext)(x.a),m=Object(c.useContext)(y),h=n;if(m){p.role||"tablist"!==m.role||(p.role="tab");var g=m.getControllerId(v),E=m.getControlledId(v);p["data-rb-event-key"]=v,p.id=g||p.id,p["aria-controls"]=E||p["aria-controls"],h=null==n&&null!=v?m.activeKey===v:n}"tab"===p.role&&(p.disabled&&(p.tabIndex=-1,p["aria-disabled"]=!0),p["aria-selected"]=h);var O=Object(N.a)((function(e){f&&f(e),null!=v&&(s&&s(v,e),b&&b(v,e))}));return u.a.createElement(d,Object(r.a)({},p,{ref:t,onClick:O,className:o()(i,h&&"active")}))})));S.defaultProps={disabled:!1};var k=S,P={disabled:!1,as:C.a},T=u.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.disabled,c=e.className,l=e.href,f=e.eventKey,d=e.onSelect,p=e.as,v=Object(a.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(s.a)(n,"nav-link"),u.a.createElement(k,Object(r.a)({},v,{href:l,ref:t,eventKey:f,as:p,disabled:i,onSelect:d,className:o()(c,n,i&&"disabled")}))}));T.displayName="NavLink",T.defaultProps=P;var I=T,L=u.a.forwardRef((function(e,t){var n,i,d,v=Object(l.a)(e,{activeKey:"onSelect"}),b=v.as,m=void 0===b?"div":b,h=v.bsPrefix,y=v.variant,x=v.fill,g=v.justify,E=v.navbar,j=v.className,w=v.children,C=v.activeKey,N=Object(a.a)(v,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),S=Object(s.a)(h,"nav"),k=!1,P=Object(c.useContext)(f.a),T=Object(c.useContext)(p);return P?(i=P.bsPrefix,k=null==E||E):T&&(d=T.cardHeaderBsPrefix),u.a.createElement(O,Object(r.a)({as:m,ref:t,activeKey:C,className:o()(j,(n={},n[S]=!k,n[i+"-nav"]=k,n[d+"-"+y]=!!d,n[S+"-"+y]=!!y,n[S+"-fill"]=x,n[S+"-justified"]=g,n))},N),w)}));L.displayName="Nav",L.defaultProps={justify:!1,fill:!1},L.Item=w,L.Link=I;t.a=L},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var r=n("ODXe"),a=n("h4VS"),i=n("nOHt"),o=n("8Kt/"),c=n.n(o),u=(n("7PFW"),n("d+i7"),n("KLQo"),n("NbJp"),n("q4sD"),n("q1tI")),l=n.n(u),s=n("vOnD"),f=n("qGas"),d=n.n(f),p=n("9M7Z"),v=n("wx14"),b=n("zLVn"),m=n("TSYQ"),h=n.n(m),y=n("vUet"),x=l.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.variant,a=e.animation,i=e.size,o=e.children,c=e.as,u=void 0===c?"div":c,s=e.className,f=Object(b.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),d=(n=Object(y.a)(n,"spinner"))+"-"+a;return l.a.createElement(u,Object(v.a)({ref:t},f,{className:h()(s,d,i&&d+"-"+i,r&&"text-"+r)}),o)}));x.displayName="Spinner";var g=x,E=l.a.createElement;function O(e){return E("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",overflow:"hidden",transition:"all 0.2s ease-out"}},E(g,{animation:"grow",variant:"dark"}))}var j=n("6ctO"),w=n("+YzT"),C=n("2mvg"),N=n("oN65"),S=l.a.createElement;function k(){var e=Object(a.a)(["\n  cursor: default;\n"]);return k=function(){return e},e}function P(){var e=Object(a.a)(["\n  cursor: pointer;\n  width: calc(100% + 10px);\n  height: ",";\n  background: white;\n  transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  text-align: center;\n"]);return P=function(){return e},e}var T=s.a.div(P(),(function(e){return e.height||0})),I=s.a.div(k());function L(e){var t=l.a.useState(1==e.active?"black":"#424242"),n=Object(r.a)(t,2),a=n[0],i=n[1],o=l.a.useState(1==e.active?"calc(100%)":"0"),c=Object(r.a)(o,2),u=c[0],s=c[1];return S(w.a.Item,null,S(T,{height:u,onClick:function(){"undefined"!=typeof e.url&&(window.location.href=e.url)},onMouseEnter:function(){e.active||(i("black"),s("calc(100%)"))},onMouseLeave:function(){e.active||(i("#424242"),s("0"))}},S(p.a,{type:"h5",color:a},e.children)))}function R(e){return S(w.a.Item,{style:{marginLeft:"14px",marginRight:"5px"}},S(I,null,S(p.a,{type:"h5"},"/")))}function _(e){return S(N.SocialIcon,{bgColor:"black",url:e.url,style:{width:30,height:30,margin:"10px"}})}function D(e){var t=e.Component,n=e.pageProps,a=Object(i.useRouter)(),o=l.a.useState(0),u=Object(r.a)(o,2),s=u[0],f=u[1],v=l.a.useState(!0),b=Object(r.a)(v,2),m=b[0],h=b[1];return l.a.useEffect((function(){h(!1)}),[]),m?S(O,null):S(l.a.Fragment,null,S(c.a,null,S("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),S("title",null,"/blog"==a.pathname?"antonyjr.in | Blog":"/projects"==a.pathname?"antonyjr.in | Projects":"antonyjr.in")),S(l.a.Fragment,null,S(j.a,null,S("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},S("a",{href:"/"},S(d.a,{spy:s},S(C.a,{fluid:!0,onMouseOver:function(){f(s+1)},src:"/ajr_logo.png",width:"140px",height:"140px",className:"d-inline-block align-top"}))))),S(j.a,null,S(j.a.Collapse,{className:"justify-content-center"},S(w.a,{variant:"pills",defaultActiveKey:"/"},S(L,{url:"/",active:"/"==a.pathname},"Home"),S(R,null),S(L,{url:"/blog",active:"/blog"==a.pathname},"Blog"),S(R,null),S(L,{url:"/projects",active:"/projects"==a.pathname},"Projects")))),S("div",{style:{minHeight:"100vh"}},S(t,n)),S("footer",{style:{padding:"2rem",textAlign:"center",width:"100%"}},S("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}},S(p.a,{type:"h6"},"\xa9 ","2021 Antony Jr."),S("div",null,S(_,{url:"https://twitter.com/antonyjr0"}),S(_,{url:"https://www.youtube.com/channel/UCdcXDHx3gvC0Q9TuOOb7YRw"}),S(_,{url:"https://github.com/antony-jr"}),S(_,{url:"mailto:antonyjr@protonmail.com"}))))))}},"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"6ctO":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),i=n("TSYQ"),o=n.n(i),c=n("q1tI"),u=n.n(c),l=n("JCAc"),s=/-(.)/g;var f=n("vUet"),d=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var p=u.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,c=e.as,l=Object(a.a)(e,["bsPrefix","className","as"]);n=Object(f.a)(n,"navbar-brand");var s=c||(l.href?"a":"span");return u.a.createElement(s,Object(r.a)({},l,{ref:t,className:o()(i,n)}))}));p.displayName="NavbarBrand";var v=p;function b(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var m=/([A-Z])/g;var h=/^ms-/;function y(e){return function(e){return e.replace(m,"-$1").toLowerCase()}(e).replace(h,"-ms-")}var x=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var g=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(y(t))||function(e,t){return b(e).getComputedStyle(e,t)}(e).getPropertyValue(y(t));Object.keys(t).forEach((function(a){var i=t[a];i||0===i?!function(e){return!(!e||!x.test(e))}(a)?n+=y(a)+": "+i+";":r+=a+"("+i+") ":e.style.removeProperty(y(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},E=!("undefined"===typeof window||!window.document||!window.document.createElement),O=!1,j=!1;try{var w={get passive(){return O=!0},get once(){return j=O=!0}};E&&(window.addEventListener("test",w,w),window.removeEventListener("test",w,!0))}catch(te){}var C=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!j){var a=r.once,i=r.capture,o=n;!j&&a&&(o=n.__once||function e(r){this.removeEventListener(t,e,i),n.call(this,r)},n.__once=o),e.addEventListener(t,o,O?r:i)}e.addEventListener(t,n,r)};var N=function(e,t,n,r){var a=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var S=function(e,t,n,r){return C(e,t,n,r),function(){N(e,t,n,r)}};function k(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=S(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),i()}}function P(e,t,n,r){null==n&&(n=function(e){var t=g(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var a=k(e,n,r),i=S(e,"transitionend",t);return function(){a(),i()}}var T=n("dI71"),I=(n("17x9"),n("i8i4")),L=n.n(I),R=!1,_=u.a.createContext(null),D=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(T.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[L.a.findDOMNode(this),r],i=a[0],o=a[1],c=this.getTimeouts(),u=r?c.appear:c.enter;!e&&!n||R?this.safeSetState({status:"entered"},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(i,o),t.onTransitionEnd(u,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:L.a.findDOMNode(this);t&&!R?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:L.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(a.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return u.a.createElement(_.Provider,{value:null},"function"===typeof n?n(e,r):u.a.cloneElement(u.a.Children.only(n),r))},t}(u.a.Component);function A(){}D.contextType=_,D.propTypes={},D.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:A,onEntering:A,onEntered:A,onExit:A,onExiting:A,onExited:A},D.UNMOUNTED="unmounted",D.EXITED="exited",D.ENTERING="entering",D.ENTERED="entered",D.EXITING="exiting";var K,M=D,q=n("Qg85");var U={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function z(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=U[e];return n+parseInt(g(t,r[0]),10)+parseInt(g(t,r[1]),10)}var V=((K={}).exited="collapse",K.exiting="collapsing",K.entering="collapsing",K.entered="collapse show",K),Q={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:z},X=u.a.forwardRef((function(e,t){var n=e.onEnter,i=e.onEntering,l=e.onEntered,s=e.onExit,f=e.onExiting,d=e.className,p=e.children,v=e.dimension,b=void 0===v?"height":v,m=e.getDimensionValue,h=void 0===m?z:m,y=Object(a.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),x="function"===typeof b?b():b,g=Object(c.useMemo)((function(){return Object(q.a)((function(e){e.style[x]="0"}),n)}),[x,n]),E=Object(c.useMemo)((function(){return Object(q.a)((function(e){var t="scroll"+x[0].toUpperCase()+x.slice(1);e.style[x]=e[t]+"px"}),i)}),[x,i]),O=Object(c.useMemo)((function(){return Object(q.a)((function(e){e.style[x]=null}),l)}),[x,l]),j=Object(c.useMemo)((function(){return Object(q.a)((function(e){e.style[x]=h(x,e)+"px",e.offsetHeight}),s)}),[s,h,x]),w=Object(c.useMemo)((function(){return Object(q.a)((function(e){e.style[x]=null}),f)}),[x,f]);return u.a.createElement(M,Object(r.a)({ref:t,addEndListener:P},y,{"aria-expanded":y.role?y.in:null,onEnter:g,onEntering:E,onEntered:O,onExit:j,onExiting:w}),(function(e,t){return u.a.cloneElement(p,Object(r.a)({},t,{className:o()(d,p.props.className,V[e],"width"===x&&"width")}))}))}));X.defaultProps=Q;var F=X,H=n("qUpC"),J=u.a.forwardRef((function(e,t){var n=e.children,i=e.bsPrefix,o=Object(a.a)(e,["children","bsPrefix"]);return i=Object(f.a)(i,"navbar-collapse"),u.a.createElement(H.a.Consumer,null,(function(e){return u.a.createElement(F,Object(r.a)({in:!(!e||!e.expanded)},o),u.a.createElement("div",{ref:t,className:i},n))}))}));J.displayName="NavbarCollapse";var Y=J,Z=n("ZCiN"),B=u.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,l=e.children,s=e.label,d=e.as,p=void 0===d?"button":d,v=e.onClick,b=Object(a.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(f.a)(n,"navbar-toggler");var m=Object(c.useContext)(H.a)||{},h=m.onToggle,y=m.expanded,x=Object(Z.a)((function(e){v&&v(e),h&&h()}));return"button"===p&&(b.type="button"),u.a.createElement(p,Object(r.a)({},b,{ref:t,onClick:x,"aria-label":s,className:o()(i,n,!y&&"collapsed")}),l||u.a.createElement("span",{className:n+"-icon"}))}));B.displayName="NavbarToggle",B.defaultProps={label:"Toggle navigation"};var G=B,W=n("ILyh"),$=function(e,t){var n=void 0===t?{}:t,i=n.displayName,c=void 0===i?d(e):i,l=n.Component,s=n.defaultProps,p=u.a.forwardRef((function(t,n){var i=t.className,c=t.bsPrefix,s=t.as,d=void 0===s?l||"div":s,p=Object(a.a)(t,["className","bsPrefix","as"]),v=Object(f.a)(c,e);return u.a.createElement(d,Object(r.a)({ref:n,className:o()(i,v)},p))}));return p.defaultProps=s,p.displayName=c,p}("navbar-text",{Component:"span"}),ee=u.a.forwardRef((function(e,t){var n=Object(l.a)(e,{expanded:"onToggle"}),i=n.bsPrefix,s=n.expand,d=n.variant,p=n.bg,v=n.fixed,b=n.sticky,m=n.className,h=n.children,y=n.as,x=void 0===y?"nav":y,g=n.expanded,E=n.onToggle,O=n.onSelect,j=n.collapseOnSelect,w=Object(a.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),C=Object(f.a)(i,"navbar"),N=Object(c.useCallback)((function(){O&&O.apply(void 0,arguments),j&&g&&E&&E(!1)}),[O,j,g,E]);void 0===w.role&&"nav"!==x&&(w.role="navigation");var S=C+"-expand";"string"===typeof s&&(S=S+"-"+s);var k=Object(c.useMemo)((function(){return{onToggle:function(){return E&&E(!g)},bsPrefix:C,expanded:!!g}}),[C,g,E]);return u.a.createElement(H.a.Provider,{value:k},u.a.createElement(W.a.Provider,{value:N},u.a.createElement(x,Object(r.a)({ref:t},w,{className:o()(m,C,s&&S,d&&C+"-"+d,p&&"bg-"+p,b&&"sticky-"+b,v&&"fixed-"+v)}),h)))}));ee.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},ee.displayName="Navbar",ee.Brand=v,ee.Toggle=G,ee.Collapse=Y,ee.Text=$;t.a=ee},"7PFW":function(e,t,n){},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},ILyh:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n("q1tI"),a=n.n(r).a.createContext(null),i=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.a=a},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("wx14"),a=n("zLVn"),i=n("q1tI");n("QLaP");function o(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function u(e,t){return Object.keys(t).reduce((function(n,u){var l,s=n,f=s[o(u)],d=s[u],p=Object(a.a)(s,[o(u),u].map(c)),v=t[u],b=function(e,t,n){var r=Object(i.useRef)(void 0!==e),a=Object(i.useState)(t),o=a[0],c=a[1],u=void 0!==e,l=r.current;return r.current=u,!u&&l&&o!==t&&c(t),[u?e:o,Object(i.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(d,f,e[v]),m=b[0],h=b[1];return Object(r.a)({},p,((l={})[u]=m,l[v]=h,l))}),e)}n("dI71"),n("VCL8")},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,i.default)(r)};var r,a=n("pvIh"),i=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},KLQo:function(e,t,n){},NbJp:function(e,t,n){},ODXe:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,i,o,c){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,i,o,c],s=0;(u=new Error(t.replace(/%s/g,(function(){return l[s++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},Qg85:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},"d+i7":function(e,t,n){},dI71:function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},dbZe:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),i=n("q1tI"),o=n.n(i),c=n("Qg85");function u(e){return!e||"#"===e.trim()}var l=o.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"a":n,l=e.disabled,s=e.onKeyDown,f=Object(a.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,n=f.onClick;(l||u(t))&&e.preventDefault(),l?e.stopPropagation():n&&n(e)};return u(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),l&&(f.tabIndex=-1,f["aria-disabled"]=!0),o.a.createElement(i,Object(r.a)({ref:t},f,{onClick:d,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),s)}))}));l.displayName="SafeAnchor",t.a=l},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,i,o){var c=a||"<<anonymous>>",u=o||r;if(null==n[r])return t?new Error("Required "+i+" `"+u+"` was not specified in `"+c+"`."):null;for(var l=arguments.length,s=Array(l>6?l-6:0),f=6;f<l;f++)s[f-6]=arguments[f];return e.apply(void 0,[n,r,c,i,u].concat(s))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},q4sD:function(e,t,n){},qUpC:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r).a.createContext(null);a.displayName="NavbarContext",t.a=a}},[[0,0,1,2,3,6,7,8]]]);