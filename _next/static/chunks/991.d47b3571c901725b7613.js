(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991],{47093:function(e,t,r){"use strict";r.d(t,{z:function(){return j}});var n=r(72947),a=r(70917),o=r(90063),i=r(94915),l=r(55284),s=r(93105),c=r(84461),u=r(73808),f={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},p=(0,s.m$)("span",{baseStyle:f});u.Ts&&(p.displayName="VisuallyHidden");var d=(0,s.m$)("input",{baseStyle:f});u.Ts&&(d.displayName="VisuallyHiddenInput");var m=r(67294);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var h=(0,a.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),b=(0,o.G)(((e,t)=>{var r=(0,i.m)("Spinner",e),n=(0,l.Lr)(e),{label:a="Loading...",thickness:o="2px",speed:u="0.45s",emptyColor:f="transparent",className:d}=n,b=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(n,["label","thickness","speed","emptyColor","className"]),y=(0,c.cx)("chakra-spinner",d),g=v({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:o,borderBottomColor:f,borderLeftColor:f,animation:h+" "+u+" linear infinite"},r);return m.createElement(s.m$.div,v({ref:t,__css:g,className:y},b),a&&m.createElement(p,null,a))}));u.Ts&&(b.displayName="Spinner");var y=r(38554),g=r.n(y),x=r(28500);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var[E,_]=(0,x.k)({strict:!1,name:"ButtonGroupContext"}),k=(0,o.G)(((e,t)=>{var{size:r,colorScheme:n,variant:a,className:o,spacing:i="0.5rem",isAttached:l,isDisabled:u}=e,f=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),p=(0,c.cx)("chakra-button__group",o),d=m.useMemo((()=>({size:r,colorScheme:n,variant:a,isDisabled:u})),[r,n,a,u]),v={display:"inline-flex"};return v=O({},v,l?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:i}}),m.createElement(E,{value:d},m.createElement(s.m$.div,O({ref:t,role:"group",__css:v,className:p},f)))}));function w(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}u.Ts&&(k.displayName="ButtonGroup");var j=(0,o.G)(((e,t)=>{var r,a=_(),o=(0,i.m)("Button",N({},a,e)),u=(0,l.Lr)(e),{isDisabled:f=(null==a?void 0:a.isDisabled),isLoading:p,isActive:d,isFullWidth:v,children:h,leftIcon:b,rightIcon:y,loadingText:x,iconSpacing:O="0.5rem",type:E,spinner:k,spinnerPlacement:j="start",className:L,as:P}=u,I=w(u,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"]),D=g()({},null!=(r=null==o?void 0:o._focus)?r:{},{zIndex:1}),T=N({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:v?"100%":"auto"},o,!!a&&{_focus:D}),{ref:M,type:R}=function(e){var[t,r]=m.useState(!e),n=m.useCallback((e=>{e&&r("BUTTON"===e.tagName)}),[]),a=t?"button":void 0;return{ref:n,type:a}}(P);return m.createElement(s.m$.button,N({disabled:f||p,ref:(0,n.l)(t,M),as:P,type:null!=E?E:R,"data-active":(0,c.PB)(d),"data-loading":(0,c.PB)(p),__css:T,className:(0,c.cx)("chakra-button",L)},I),b&&!p&&m.createElement(S,{marginEnd:O},b),p&&"start"===j&&m.createElement(C,{className:"chakra-button__spinner--start",label:x,placement:"start"},k),p?x||m.createElement(s.m$.span,{opacity:0},h):h,p&&"end"===j&&m.createElement(C,{className:"chakra-button__spinner--end",label:x,placement:"end"},k),y&&!p&&m.createElement(S,{marginStart:O},y))}));u.Ts&&(j.displayName="Button");var S=e=>{var{children:t,className:r}=e,n=w(e,["children","className"]),a=m.isValidElement(t)?m.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,o=(0,c.cx)("chakra-button__icon",r);return m.createElement(s.m$.span,N({display:"inline-flex",alignSelf:"center",flexShrink:0},n,{className:o}),a)};u.Ts&&(S.displayName="ButtonIcon");var C=e=>{var{label:t,placement:r,children:n=m.createElement(b,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:o}=e,i=w(e,["label","placement","spacing","children","className","__css"]),l=(0,c.cx)("chakra-button__spinner",a),u=N({display:"flex",alignItems:"center",position:t?"relative":"absolute",["start"===r?"marginEnd":"marginStart"]:t?"0.5rem":0,fontSize:"1em",lineHeight:"normal"},o);return m.createElement(s.m$.div,N({className:l},i,{__css:u}),n)};u.Ts&&(C.displayName="ButtonSpinner")},72947:function(e,t,r){"use strict";r.d(t,{l:function(){return o}});var n=r(73808);function a(e,t){if(null!=e)if((0,n.mf)(e))e(t);else try{e.current=t}catch(r){throw new Error("Cannot assign value '"+t+"' to ref '"+e+"'")}}function o(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>{t.forEach((t=>a(t,e)))}}},71991:function(e,t,r){"use strict";r.r(t);var n=r(26265),a=r(85893),o=r(38347),i=r(35063),l=r(47093),s=r(98367);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.children,r=(e.isLast,e.to),n=void 0===r?"/":r,c=(0,o.Z)(e,["children","isLast","to"]);return(0,a.jsx)(s.ZP,{children:(0,a.jsx)(i.default,{href:n,children:(0,a.jsx)(l.z,u(u({cursor:"pointer",as:"div",size:"sm",borderRadius:"0px",_focus:{boxShadow:"0 0 1px 2px rgba(255, 255, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)"},_hover:{backgroundColor:"black"},_active:{backgroundColor:"black",borderColor:"black"},bg:"#515151",color:"white"},c),{},{children:t}))})})}},92167:function(e,t,r){"use strict";var n=r(53848),a=r(69448);t.default=void 0;var o=a(r(67294)),i=r(29414),l=r(34651),s=r(7426),c={};function u(e,t,r,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,a=(0,l.useRouter)(),f=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),r=n(t,2),o=r[0],l=r[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):l||o}}),[a,e.href,e.as]),p=f.href,d=f.as,m=e.children,v=e.replace,h=e.shallow,b=e.scroll,y=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var g=(t=o.Children.only(m))&&"object"===typeof t&&t.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),O=n(x,2),E=O[0],_=O[1],k=o.default.useCallback((function(e){E(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,E]);(0,o.useEffect)((function(){var e=_&&r&&(0,i.isLocalURL)(p),t="undefined"!==typeof y?y:a&&a.locale,n=c[p+"%"+d+(t?"%"+t:"")];e&&!n&&u(a,p,d,{locale:t})}),[d,p,_,y,r,a]);var w={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,l,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:s,scroll:l}))}(e,a,p,d,v,h,b,y)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof y?y:a&&a.locale,j=a&&a.isLocaleDomain&&(0,i.getDomainLocale)(d,N,a&&a.locales,a&&a.domainLocales);w.href=j||(0,i.addBasePath)((0,i.addLocale)(d,N,a&&a.defaultLocale))}return o.default.cloneElement(t,w)};t.default=f},7426:function(e,t,r){"use strict";var n=r(53848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,s=(0,a.useRef)(),c=(0,a.useState)(!1),u=n(c,2),f=u[0],p=u[1],d=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[r,t,f]);return(0,a.useEffect)((function(){if(!i&&!f){var e=(0,o.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[d,f]};var a=r(67294),o=r(73447),i="undefined"!==typeof IntersectionObserver;var l=new Map},35063:function(e,t,r){e.exports=r(92167)}}]);