"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[840],{3123:function(e,t,n){n.d(t,{z:function(){return I}});var r=n(2947),a=n(63),l=n(4915),i=n(5284),o=n(3105),s=n(8554),c=n.n(s),u=n(4461),p=n(3808),d=n(7294),f=n(8500);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var[h,v]=(0,f.k)({strict:!1,name:"ButtonGroupContext"}),b=(0,a.G)(((e,t)=>{var{size:n,colorScheme:r,variant:a,className:l,spacing:i="0.5rem",isAttached:s,isDisabled:c}=e,p=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),f=(0,u.cx)("chakra-button__group",l),v=d.useMemo((()=>({size:n,colorScheme:r,variant:a,isDisabled:c})),[n,r,a,c]),b={display:"inline-flex"};return b=m({},b,s?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:i}}),d.createElement(h,{value:v},d.createElement(o.m$.div,m({ref:t,role:"group",__css:b,className:f},p)))}));p.Ts&&(b.displayName="ButtonGroup");var y=n(917),g={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},O=(0,o.m$)("span",{baseStyle:g});p.Ts&&(O.displayName="VisuallyHidden");var x=(0,o.m$)("input",{baseStyle:g});p.Ts&&(x.displayName="VisuallyHiddenInput");function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var E=(0,y.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),_=(0,a.G)(((e,t)=>{var n=(0,l.m)("Spinner",e),r=(0,i.Lr)(e),{label:a="Loading...",thickness:s="2px",speed:c="0.45s",emptyColor:p="transparent",className:f}=r,m=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(r,["label","thickness","speed","emptyColor","className"]),h=(0,u.cx)("chakra-spinner",f),v=N({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:s,borderBottomColor:p,borderLeftColor:p,animation:E+" "+c+" linear infinite"},n);return d.createElement(o.m$.div,N({ref:t,__css:v,className:h},m),a&&d.createElement(O,null,a))}));function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}p.Ts&&(_.displayName="Spinner");var k=e=>{var{label:t,placement:n,children:r=d.createElement(_,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:l}=e,i=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["label","placement","spacing","children","className","__css"]),s=(0,u.cx)("chakra-button__spinner",a),c="start"===n?"marginEnd":"marginStart",p=d.useMemo((()=>w({display:"flex",alignItems:"center",position:t?"relative":"absolute",[c]:t?"0.5rem":0,fontSize:"1em",lineHeight:"normal"},l)),[l,t,c]);return d.createElement(o.m$.div,w({className:s},i,{__css:p}),r)};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}p.Ts&&(k.displayName="ButtonSpinner");var j=e=>{var{children:t,className:n}=e,r=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","className"]),a=d.isValidElement(t)?d.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,l=(0,u.cx)("chakra-button__icon",n);return d.createElement(o.m$.span,S({display:"inline-flex",alignSelf:"center",flexShrink:0},r,{className:l}),a)};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}p.Ts&&(j.displayName="ButtonIcon");var I=(0,a.G)(((e,t)=>{var n=v(),a=(0,l.m)("Button",C({},n,e)),s=(0,i.Lr)(e),{isDisabled:p=(null==n?void 0:n.isDisabled),isLoading:f,isActive:m,isFullWidth:h,children:b,leftIcon:y,rightIcon:g,loadingText:O,iconSpacing:x="0.5rem",type:N,spinner:E,spinnerPlacement:_="start",className:w,as:S}=s,j=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(s,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"]),I=d.useMemo((()=>{var e,t=c()({},null!=(e=null==a?void 0:a._focus)?e:{},{zIndex:1});return C({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:h?"100%":"auto"},a,!!n&&{_focus:t})}),[a,n,h]),{ref:z,type:T}=function(e){var[t,n]=d.useState(!e);return{ref:d.useCallback((e=>{e&&n("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(S),B={rightIcon:g,leftIcon:y,iconSpacing:x,children:b};return d.createElement(o.m$.button,C({disabled:p||f,ref:(0,r.l)(t,z),as:S,type:null!=N?N:T,"data-active":(0,u.PB)(m),"data-loading":(0,u.PB)(f),__css:I,className:(0,u.cx)("chakra-button",w)},j),f&&"start"===_&&d.createElement(k,{className:"chakra-button__spinner--start",label:O,placement:"start"},E),f?O||d.createElement(o.m$.span,{opacity:0},d.createElement(P,B)):d.createElement(P,B),f&&"end"===_&&d.createElement(k,{className:"chakra-button__spinner--end",label:O,placement:"end"},E))}));function P(e){var{leftIcon:t,rightIcon:n,children:r,iconSpacing:a}=e;return d.createElement(d.Fragment,null,t&&d.createElement(j,{marginEnd:a},t),r,n&&d.createElement(j,{marginStart:a},n))}p.Ts&&(I.displayName="Button")},2947:function(e,t,n){n.d(t,{l:function(){return l}});var r=n(3808);function a(e,t){if(null!=e)if((0,r.mf)(e))e(t);else try{e.current=t}catch(n){throw new Error("Cannot assign value '"+t+"' to ref '"+e+"'")}}function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>a(t,e)))}}},714:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),a=n(63),l=n(3808),i=n(7294),o=n(3123);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=(0,a.G)(((e,t)=>{var{icon:n,children:r,isRound:a,"aria-label":l}=e,c=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["icon","children","isRound","aria-label"]),u=n||r,p=i.isValidElement(u)?i.cloneElement(u,{"aria-hidden":!0,focusable:!1}):null;return i.createElement(o.z,s({padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":l},c),p)}));l.Ts&&(c.displayName="IconButton");var u=n(980),p=n(9583);function d(e){var t=(0,u.useColorMode)().toggleColorMode;return(0,r.jsx)(c,{_focus:{boxShadow:"0 0 1px 2px rgba(255, 255, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)"},_hover:{borderColor:"black"},size:"md",fontSize:"lg","aria-label":"Toggle Dark/Light Mode",variant:"ghost",color:"current",ml:{base:"0",md:"3"},onClick:t,icon:(0,r.jsx)(p.UZO,{})})}},4405:function(e,t,n){n.d(t,{w_:function(){return c}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function s(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return r.createElement(u,i({attr:i({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var n,a=e.attr,l=e.size,s=e.title,c=o(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(a)}}}]);