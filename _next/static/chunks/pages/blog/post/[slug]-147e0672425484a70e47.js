(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{38448:function(e,t,n){"use strict";n.d(t,{M:function(){return i}});var r=n(93105),o=n(73808);n(67294);var i=(0,r.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});o.Ts&&(i.displayName="Center")},53850:function(e,t,n){"use strict";n.d(t,{W:function(){return f}});var r=n(90063),o=n(55284),i=n(94915),c=n(93105),a=n(84461),s=n(73808),l=n(67294);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=(0,r.G)(((e,t)=>{var n=(0,o.Lr)(e),{className:r,centerContent:s}=n,f=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["className","centerContent"]),d=(0,i.m)("Container",e);return l.createElement(c.m$.div,u({ref:t,className:(0,a.cx)("chakra-container",r)},f,{__css:u({},d,s&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));s.Ts&&(f.displayName="Container")},336:function(e,t,n){"use strict";n.d(t,{X:function(){return f}});var r=n(90063),o=n(94915),i=n(55284),c=n(93105),a=n(84461),s=n(73808),l=n(67294);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=(0,r.G)(((e,t)=>{var n=(0,o.m)("Heading",e),r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}((0,i.Lr)(e),["className"]);return l.createElement(c.m$.h2,u({ref:t,className:(0,a.cx)("chakra-heading",e.className)},r,{__css:n}))}));s.Ts&&(f.displayName="Heading")},46674:function(e,t,n){"use strict";var r=n(85893),o=(n(67294),n(2962));t.Z=function(e){var t=e.title,n=e.description;return(0,r.jsx)(o.PB,{title:t,description:n,openGraph:{title:t,description:n},titleTemplate:"%s - antonyjr.in"})}},92167:function(e,t,n){"use strict";var r=n(53848),o=n(69448);t.default=void 0;var i=o(n(67294)),c=n(29414),a=n(34651),s=n(7426),l={};function u(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=(0,a.useRouter)(),f=i.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],a=n[1];return{href:i,as:e.as?(0,c.resolveHref)(o,e.as):a||i}}),[o,e.href,e.as]),d=f.href,p=f.as,x=e.children,h=e.replace,v=e.shallow,m=e.scroll,g=e.locale;"string"===typeof x&&(x=i.default.createElement("a",null,x));var j=(t=i.Children.only(x))&&"object"===typeof t&&t.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),b=r(y,2),w=b[0],O=b[1],N=i.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);(0,i.useEffect)((function(){var e=O&&n&&(0,c.isLocalURL)(d),t="undefined"!==typeof g?g:o&&o.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,d,p,{locale:t})}),[p,d,O,g,n,o]);var _={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:a}))}(e,o,d,p,h,v,m,g)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof g?g:o&&o.locale,k=o&&o.isLocaleDomain&&(0,c.getDomainLocale)(p,E,o&&o.locales,o&&o.domainLocales);_.href=k||(0,c.addBasePath)((0,c.addLocale)(p,E,o&&o.defaultLocale))}return i.default.cloneElement(t,_)};t.default=f},7426:function(e,t,n){"use strict";var r=n(53848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,s=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,c=r.elements;return c.set(e,t),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n(67294),i=n(73447),c="undefined"!==typeof IntersectionObserver;var a=new Map},43310:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return j}});var r=n(85893),o=n(35063),i=n(9008),c=n(5152),a=n(48017),s=n(53850),l=n(72026),u=n(336),f=n(64115),d=n(38448),p=n(78482),x=n(46674),h=n(63750),v=n(8193),m=(0,c.default)((function(){return Promise.all([n.e(456),n.e(768),n.e(487)]).then(n.bind(n,95487))}),{loadableGenerated:{webpack:function(){return[95487]},modules:["blog/post/[slug].tsx -> ../../../components/ChakraReactMarkdown"]}}),g=!0;function j(e){var t=["xs","xs","md","lg"];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:e.frontmatter.title})}),(0,r.jsx)(x.Z,{title:e.frontmatter.title,description:e.frontmatter.description}),(0,r.jsx)(a.xu,{mb:6,children:(0,r.jsx)(s.W,{maxW:"container.lg",children:(0,r.jsxs)(l.Kq,{direction:"column",align:"center",justify:"center",children:[(0,r.jsx)(a.xu,{pb:"4",textAlign:"center",children:(0,r.jsx)(u.X,{as:"h1",size:"xl",children:e.frontmatter.title})}),(0,r.jsx)(a.xu,{p:"4",textAlign:"center",children:(0,r.jsxs)(l.Kq,{spacing:6,align:"center",justify:"center",direction:"row",wrap:"wrap",children:[(0,r.jsxs)(l.Kq,{align:"center",justify:"center",direction:"row",fontSize:t,color:"gray.500",children:[(0,r.jsx)(h.nZl,{}),(0,r.jsx)(f.x,{children:e.frontmatter.tag})]}),(0,r.jsxs)(l.Kq,{align:"center",justify:"center",direction:"row",fontSize:t,color:"gray.500",children:[(0,r.jsx)(h.zlR,{}),(0,r.jsx)(f.x,{children:e.date})]}),(0,r.jsxs)(l.Kq,{align:"center",justify:"center",direction:"row",fontSize:t,color:"gray.500",children:[(0,r.jsx)(v.Gtc,{}),(0,r.jsxs)(f.x,{children:[e.frontmatter.read," mins"]})]})]})}),(0,r.jsx)(d.M,{children:(0,r.jsx)(a.xu,{textAlign:"left",children:(0,r.jsx)(m,{children:e.markdownBody})})})]})})}),(0,r.jsx)(a.xu,{pt:2,pb:4,children:(0,r.jsx)(d.M,{children:(0,r.jsx)(p.E,{w:"auto",height:"150px",src:"/vline.png"})})}),(0,r.jsxs)(s.W,{maxW:"container.xl",children:[(0,r.jsxs)(l.Kq,{align:"space-between",justify:"space-between",direction:["column","column","column","row"],spacing:6,pt:4,children:[e.prevPost?(0,r.jsx)(o.default,{href:"/blog/post/"+e.prevPost.slugName,children:(0,r.jsxs)(a.xu,{_hover:{textDecoration:"underline",textDecorationStyle:"dotted"},textAlign:"left",cursor:"pointer",children:[(0,r.jsx)(u.X,{pb:"2",as:"h4",size:"xl",children:"Previous"}),(0,r.jsx)(f.x,{fontSize:"md",children:e.prevPost.title}),(0,r.jsx)(f.x,{fontSize:"sm",children:e.prevPost.date})]})}):(0,r.jsx)(a.xu,{}),e.nextPost&&(0,r.jsx)(o.default,{href:"/blog/post/"+e.nextPost.slugName,children:(0,r.jsxs)(a.xu,{_hover:{textDecoration:"underline",textDecorationStyle:"dotted"},textAlign:"right",cursor:"pointer",children:[(0,r.jsx)(u.X,{pb:"2",as:"h4",size:"xl",children:"Next"}),(0,r.jsx)(f.x,{fontSize:"md",children:e.nextPost.title}),(0,r.jsx)(f.x,{fontSize:"sm",children:e.nextPost.date})]})})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})]})}},61912:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/post/[slug]",function(){return n(43310)}])},35063:function(e,t,n){e.exports=n(92167)},44405:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var r=n(67294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function s(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),s(e.child))}))}function l(e){return function(t){return r.createElement(u,c({attr:c({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var n,o=e.attr,i=e.size,s=e.title,l=a(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}}},function(e){e.O(0,[617,13,774,888,179],(function(){return t=61912,e(e.s=t);var t}));var t=e.O();_N_E=t}]);