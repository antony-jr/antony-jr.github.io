(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[727],{7390:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),o=r(5063),c=r(2026),a=r(8017),i=r(4115),l=r(3750),s=r(8193);function u(e){return(0,n.jsxs)(c.Kq,{direction:"row",align:"center",justify:"center",spacing:4,children:[(0,n.jsx)(a.xu,{p:"2",fontSize:["xs","sm"],style:{fontFamily:"serif",whiteSpace:"nowrap"},children:e.date}),(0,n.jsx)(o.default,{href:e.url,children:(0,n.jsxs)(c.Kq,{align:"flex-start",direction:"column",cursor:"pointer",children:[(0,n.jsx)(i.x,{fontSize:["xs","sm","md","lg","xl"],children:(0,n.jsx)("b",{children:e.title})}),(0,n.jsxs)(c.Kq,{align:"center",justify:"center",direction:"row",children:[(0,n.jsxs)(c.Kq,{align:"center",justify:"center",direction:"row",children:[(0,n.jsx)(s.QRz,{}),(0,n.jsx)(i.x,{color:"gray.500",fontSize:"xs",children:e.read})]}),(0,n.jsxs)(c.Kq,{align:"center",justify:"center",direction:"row",children:[(0,n.jsx)(l.nZl,{}),(0,n.jsx)(i.x,{color:"gray.500",fontSize:"xs",children:e.tag})]})]})]})})]})}},2167:function(e,t,r){"use strict";var n=r(3848);t.default=void 0;var o,c=(o=r(7294))&&o.__esModule?o:{default:o},a=r(1063),i=r(4651),l=r(7426);var s={};function u(e,t,r,n){if(e&&a.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,o=i.useRouter(),f=c.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),r=n(t,2),c=r[0],i=r[1];return{href:c,as:e.as?a.resolveHref(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,y=e.shallow,g=e.scroll,m=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var x=(t=c.default.Children.only(v))&&"object"===typeof t&&t.ref,b=l.useIntersection({rootMargin:"200px"}),j=n(b,2),w=j[0],E=j[1],O=c.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);c.default.useEffect((function(){var e=E&&r&&a.isLocalURL(d),t="undefined"!==typeof m?m:o&&o.locale,n=s[d+"%"+p+(t?"%"+t:"")];e&&!n&&u(o,d,p,{locale:t})}),[p,d,E,m,r,o]);var C={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,c,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](r,n,{shallow:c,locale:l,scroll:i}))}(e,o,d,p,h,y,g,m)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof m?m:o&&o.locale,L=o&&o.isLocaleDomain&&a.getDomainLocale(p,k,o&&o.locales,o&&o.domainLocales);C.href=L||a.addBasePath(a.addLocale(p,k,o&&o.defaultLocale))}return c.default.cloneElement(t,C)};t.default=f},7426:function(e,t,r){"use strict";var n=r(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,l=o.useRef(),s=o.useState(!1),u=n(s,2),f=u[0],d=u[1],p=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||f||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,c=n.observer,a=n.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return o.useEffect((function(){if(!a&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=r(7294),c=r(3447),a="undefined"!==typeof IntersectionObserver;var i=new Map},5063:function(e,t,r){e.exports=r(2167)},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=n.createContext&&n.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function s(e){return function(t){return n.createElement(u,a({attr:a({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var r,o=e.attr,c=e.size,l=e.title,s=i(e,["attr","size","title"]),u=c||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==c?n.createElement(c.Consumer,null,(function(e){return t(e)})):t(o)}}}]);