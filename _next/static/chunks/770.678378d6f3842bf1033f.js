(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[770],{775:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var n=r(5893),o=r(2026),i=r(8448),a=r(5063),c=r(8017),l=r(8482),s=r(63),u=r(4915),f=r(5284),d=r(3105),p=r(4461),g=r(3808),h=r(7294);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var m=(0,s.G)(((e,t)=>{var r=(0,u.m)("Badge",e),n=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}((0,f.Lr)(e),["className"]);return h.createElement(d.m$.span,v({ref:t,className:(0,p.cx)("chakra-badge",e.className)},n,{__css:v({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},r)}))}));g.Ts&&(m.displayName="Badge");var x=r(336),y=r(4115),j=r(3750),b=r(8367);function w(e){var t=e.cover,r=void 0===t?"":t,i=e.badge,s=void 0===i?"":i,u=e.title,f=e.description,d=e.tag,p=void 0===d?"":d,g=e.date,h=void 0===g?"":g,v=e.copyright,w=void 0===v?"":v,O=e.to,E=void 0===O?"#":O;return(0,n.jsx)(c.xu,{w:"100%",maxW:"100%",children:(0,n.jsx)(b.ZP,{children:(0,n.jsx)(a.default,{href:E,children:(0,n.jsxs)(c.xu,{w:"100%",maxW:["100%","100%","xs","md","md"],boxShadow:"lg",_hover:{boxShadow:"xl",cursor:"pointer",transform:"scale(1.04)",transition:"all 0.34s ease-in"},borderWidth:"xs",style:{backgroundColor:"transparent"},children:[""!=r&&(0,n.jsx)(l.E,{w:"100%",src:r,alt:u+" cover image"}),(0,n.jsxs)(c.xu,{p:"6",children:[""!=s&&(0,n.jsx)(c.xu,{d:"flex",alignItems:"baseline",children:(0,n.jsx)(m,{borderRadius:"full",px:"2",bg:"black",color:"white",children:s})}),(0,n.jsx)(c.xu,{mt:"1",textAlign:"left",lineHeight:"tight",children:(0,n.jsx)(x.X,{as:"h4",size:"md",children:u})}),(0,n.jsx)(c.xu,{mt:"1",textAlign:"left",fontSize:"sm",as:"p",lineHeight:"tight",children:f}),(0,n.jsxs)(o.Kq,{pt:"4",spacing:"4",direction:"row",wrap:"wrap",children:[""!=h&&(0,n.jsxs)(o.Kq,{align:"center",justify:"center",direction:"row",children:[(0,n.jsx)(j.zlR,{}),(0,n.jsx)(y.x,{color:"gray.500",fontSize:"xs",children:h})]}),""==s&&""!=p&&(0,n.jsxs)(o.Kq,{align:"center",justify:"center",direction:"row",children:[(0,n.jsx)(j.nZl,{}),(0,n.jsx)(y.x,{color:"gray.500",fontSize:"xs",children:p})]})]}),""!=w&&(0,n.jsxs)(y.x,{color:"gray.500",align:"left",fontSize:"xs",children:[(0,n.jsx)("br",{}),"Image (c) ",w]})]})]})})})})}function O(e){return(0,n.jsxs)(o.Kq,{direction:["column","column","row","row","row"],spacing:"6",children:[(0,n.jsx)(o.Kq,{direction:"column",spacing:"6",children:e.posts.slice1.map((function(e,t){return(0,n.jsx)(i.M,{children:(0,n.jsx)(w,{to:"/blog/post/"+e.slug,cover:e.image,title:e.title,description:e.description,date:e.date,copyright:e.imageCopyright,tag:e.tag})},e.slug)}))}),(0,n.jsx)(o.Kq,{direction:"column",spacing:"6",children:e.posts.slice2.map((function(e,t){return(0,n.jsx)(i.M,{children:(0,n.jsx)(w,{to:"/blog/post/"+e.slug,cover:e.image,title:e.title,description:e.description,date:e.date,copyright:e.imageCopyright,tag:e.tag})},e.slug)}))}),(0,n.jsx)(o.Kq,{direction:"column",spacing:"6",children:e.posts.slice3.map((function(e,t){return(0,n.jsx)(i.M,{children:(0,n.jsx)(w,{to:"/blog/post/"+e.slug,cover:e.image,title:e.title,description:e.description,date:e.date,copyright:e.imageCopyright,tag:e.tag})},e.slug)}))})]})}},2167:function(e,t,r){"use strict";var n=r(3848);t.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},a=r(1063),c=r(4651),l=r(7426);var s={};function u(e,t,r,n){if(e&&a.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,o=c.useRouter(),f=i.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),r=n(t,2),i=r[0],c=r[1];return{href:i,as:e.as?a.resolveHref(o,e.as):c||i}}),[o,e.href,e.as]),d=f.href,p=f.as,g=e.children,h=e.replace,v=e.shallow,m=e.scroll,x=e.locale;"string"===typeof g&&(g=i.default.createElement("a",null,g));var y=(t=i.default.Children.only(g))&&"object"===typeof t&&t.ref,j=l.useIntersection({rootMargin:"200px"}),b=n(j,2),w=b[0],O=b[1],E=i.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);i.default.useEffect((function(){var e=O&&r&&a.isLocalURL(d),t="undefined"!==typeof x?x:o&&o.locale,n=s[d+"%"+p+(t?"%"+t:"")];e&&!n&&u(o,d,p,{locale:t})}),[p,d,O,x,r,o]);var k={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](r,n,{shallow:i,locale:l,scroll:c}))}(e,o,d,p,h,v,m,x)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof x?x:o&&o.locale,M=o&&o.isLocaleDomain&&a.getDomainLocale(p,C,o&&o.locales,o&&o.domainLocales);k.href=M||a.addBasePath(a.addLocale(p,C,o&&o.defaultLocale))}return i.default.cloneElement(t,k)};t.default=f},7426:function(e,t,r){"use strict";var n=r(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,l=o.useRef(),s=o.useState(!1),u=n(s,2),f=u[0],d=u[1],p=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||f||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return o.useEffect((function(){if(!a&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=r(7294),i=r(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},5063:function(e,t,r){e.exports=r(2167)},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function s(e){return function(t){return n.createElement(u,a({attr:a({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var r,o=e.attr,i=e.size,l=e.title,s=c(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}}}]);