"use strict";(self.webpackChunkpersonal_portfolio=self.webpackChunkpersonal_portfolio||[]).push([[330],{8749:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(2982),r=a(4217),l=a(7399),i=a(726),o=a(3889),c=a(632),d=(0,l.Z)({listRoot:{display:"flex",flexWrap:"wrap",margin:0,padding:0},separator:{margin:"0 8px",WebkitUserSelect:"none",userSelect:"none"}});function s(e){var t=e.data,a=d(),l=[],s=(0,r.useState)(!1),u=s[0],m=s[1];return u||t.length<=3?l.push.apply(l,(0,n.Z)(t)):(l.push(t[0]),l.push(null),l.push(t[t.length-2],t[t.length-1])),r.default.createElement(i.Z,{width:"wider",darker:!0,usePadding:!0},r.default.createElement("nav",{"aria-label":"Breadcrumbs"},r.default.createElement("ol",{className:a.listRoot},l.map((function(e,t){var n=t<l.length-1&&r.default.createElement("span",{className:a.separator,"aria-hidden":"true"},"/");return null===e?r.default.createElement("li",{key:"__ellipses__"},r.default.createElement(c.Z,{"aria-label":"Expand breadcrumbs","data-tooltip":!0,onClick:function(){return m(!0)}},"..."),n):r.default.createElement("li",{key:e.url},r.default.createElement(o.Z,{href:e.url,"aria-current":t===l.length-1?"page":void 0},e.t),n)})))),r.default.createElement("script",{type:"application/ld+json"},JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:t.map((function(e,t){return{"@type":"ListItem",position:t,item:{"@id":"https://davwheat.dev"+e.url,name:e.t}}}))})))}},632:function(e,t,a){var n=a(3366),r=a(4217),l=a(7399),i=a(2585),o=["children","className","onClick"],c=(0,l.Z)({linkButton:{appearance:"none",background:"none",border:"none",cursor:"pointer",textDecoration:"underline",fontFamily:"inherit",fontSize:"1em",fontWeight:700,display:"inline",margin:0,padding:0}});t.Z=function(e){var t=e.children,a=e.className,l=e.onClick,d=(0,n.Z)(e,o),s=c();return r.default.createElement("button",Object.assign({onClick:l,className:(0,i.Z)(s.linkButton,a)},d),t)}},6026:function(e,t,a){var n=a(4942),r=a(4217),l=a(7399),i=a(3889),o=a(2585),c=a(9880);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var s=(0,l.Z)({card:{display:"flex",flexDirection:"column",padding:16,position:"relative",flexGrow:1},header:{display:"flex",gap:8},heading:{flexGrow:1},link:{textDecoration:"none",display:"flex",border:"2px solid black",outline:"0px solid black","&:hover, &:focus, &:active":{outlineWidth:2,"& $arrow":{"&::after":{transform:"translateX(3px) scaleY(0.92) scaleX(1.05) rotate(45deg)"}}}},arrow:{display:"inline-flex",alignItems:"center",padding:"10px 18px",paddingRight:20,gap:8,transformOrigin:"center","&::after":function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({content:'""',display:"inline-block",width:"0.75em",height:"0.75em",borderTop:"2px solid currentColor",borderRight:"2px solid currentColor",transform:"rotate(45deg)"},(0,c.ZP)("transform"))},spring:{flexGrow:1},headingNoMargin:{marginBottom:0}});t.Z=function(e){var t=e.title,a=e.description,n=e.url,l=s();return r.default.createElement(i.Z,{className:l.link,href:n},r.default.createElement("article",{className:l.card},r.default.createElement("header",{className:l.header},r.default.createElement("h3",{className:(0,o.Z)("text-loud",l.heading,!a&&l.headingNoMargin)},t)),a&&r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{"aria-hidden":!0,className:l.spring}),r.default.createElement("p",{className:"text-speak"},a))),r.default.createElement("div",{"aria-hidden":"true",className:l.arrow}))}},5294:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(4217),r=a(726),l=a(2925),i=a(9392),o=a(6026),c=a(8749),d="a".codePointAt(0),s="🇦".codePointAt(0);function u(e){return String.fromCodePoint(e.codePointAt(0)-d+s)}function m(e){return"https://twemoji.maxcdn.com/2/svg/"+e+".svg"}function f(e){var t=e.toLowerCase().split("").map(u),a=t.map((function(e){return e.codePointAt(0).toString(16)})).join("-");return n.default.createElement("img",{src:m(a),alt:t.join(""),className:"emoji"})}var p,g=a(4236),h=a(1931),b=(0,a(2185).Z)({linkList:(p={marginTop:24,display:"grid",gridTemplateColumns:"repeat(var(--columns), minmax(0, 1fr))",gap:32,"--columns":1},p[h.Z.downTo.tablet]={"--columns":2},p["& img.emoji"]={display:"inline-block",height:"1em",width:"auto",verticalAlign:"-0.1em"},p)});var E=function(e){var t=e.location,a=b();return n.default.createElement(i.Z,{location:t,title:"Mobile networking",description:"Tools, datasets and various resources I have collected for mobile networking around the globe."},n.default.createElement(l.Z,{firstElement:!0,size:"huge",color:g.vB},n.default.createElement("h1",{className:"text-shout"},"Mobile networking"),n.default.createElement("p",{role:"doc-subtitle",className:"text-loud"},"Tools, datasets and various resources for mobile networking worldwide.")),n.default.createElement(c.Z,{data:[{t:"Home",url:"/"},{t:"Mobile networking",url:"/mobile-networking"}]}),n.default.createElement(r.Z,{width:"wider"},n.default.createElement("h2",{className:"text-louder"},"Countries"),n.default.createElement("p",{className:"text-speak"},"List of all countries which I have mobile networking related information and pages about on this website."),n.default.createElement("div",{className:a.linkList},n.default.createElement(o.Z,{title:n.default.createElement(n.default.Fragment,null,f("gb")," United Kingdom"),description:"United Kingdom",url:"uk"}),n.default.createElement(o.Z,{title:n.default.createElement(n.default.Fragment,null,f("dk")," Denmark"),description:"Danmark",url:"dk"}),n.default.createElement(o.Z,{title:n.default.createElement(n.default.Fragment,null,f("de")," Germany"),description:"Deutschland",url:"de"}))))}}}]);
//# sourceMappingURL=component---src-pages-mobile-networking-index-tsx-f764c38b1eac6b468d2a.js.map