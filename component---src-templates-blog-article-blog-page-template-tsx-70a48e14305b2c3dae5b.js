(self.webpackChunkpersonal_portfolio=self.webpackChunkpersonal_portfolio||[]).push([[984],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),a=r(7067);function o(t,r,l){return a()?(e.exports=o=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=o=function(e,t,r){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return r&&n(o,r.prototype),o},e.exports.default=e.exports,e.exports.__esModule=!0),o.apply(null,arguments)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},7316:function(e){e.exports=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),l=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},9649:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var n=r(3366),a=r(4217),o=r(3497),l=r(8125),i=r(2185),c=r(2585),u=r(4317),s=(0,i.Z)({root:{marginTop:16,color:"#ccc",fontSize:16,"& > span:not(:last-child)::after":{content:'"•"',margin:"0 4px",display:"inline-block",fontSize:36,lineHeight:"16px",verticalAlign:"middle"}}});function f(e){var t=e.pageContext,r=s();if(!t)throw new Error("No `pageContext` was passed to the BlogHero component. If being used in MDX files, ensure your usage matches: `<BlogHero {...props} />`.");return a.default.createElement(u.Z,{firstElement:!0},a.default.createElement("h1",{className:"text-shout"},t.frontmatter.title),a.default.createElement("p",{role:"doc-subtitle",className:"text-speak"},t.frontmatter.description),a.default.createElement("aside",{className:r.root},a.default.createElement("span",null,"~",t.timeToRead," min",1!==t.timeToRead&&"s"," to read"),a.default.createElement("span",null,"Published ",t.frontmatter.created_at)))}var d=r(8175),p=r(6706),m=r(4213),h=r(4942),g=["variant","className","children","lookAlikeVariant","noAnchorButton"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var b=(0,i.Z)({common:{lineHeight:1.15,marginTop:"0.75em",fontWeight:600,"& .heading-link":{position:"absolute",left:-24,top:"0",display:"flex",alignItems:"center",height:"1em",paddingTop:"0.15em",opacity:0,"&:focus":{opacity:1}},"&:hover, &:focus-within":{"& .heading-link":{opacity:1}}},h1:{fontSize:"2.2rem"},h2:{fontSize:"1.8rem"},h3:{fontSize:"1.5rem"},h4:{fontSize:"1.35rem"}});function y(e){var t=e.variant,r=e.className,o=e.children,l=e.lookAlikeVariant,i=(e.noAnchorButton,(0,n.Z)(e,g)),u=b();return a.default.createElement(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,h.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({className:(0,c.Z)(u.common,u[l||t],r),children:[o]},i))}function x(e){return function(t){return a.default.createElement(y,Object.assign({variant:e},t))}}var E=(0,i.Z)({tocRoot:{marginLeft:8,marginBottom:16,borderLeft:"4px solid var(--orange)",padding:"20px 16px",paddingTop:0},tocHeading:{marginLeft:-24,marginTop:0},tocList:{listStyle:"none",margin:"0 !important",padding:0,"& &":{paddingLeft:16}},tocListOutermost:{}});function O(e){var t=e.data,r=E();return a.default.createElement("li",null,a.default.createElement(m.Z,{href:t.url},t.title),t.items&&a.default.createElement("ul",{className:r.tocList},t.items.map((function(e){return a.default.createElement(O,{key:e.url,data:e})}))))}var w=r(4578),_=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={hasError:!1},r}(0,w.Z)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}};var r=t.prototype;return r.componentDidCatch=function(e,t){console.error(e),console.error(t)},r.render=function(){return this.state.hasError?a.default.createElement("article",{role:"alert"},a.default.createElement(y,{variant:"h2"},"Oof."),a.default.createElement("p",null,"Something went wrong while loading this blog article. If this happens again, please email"," ",a.default.createElement("a",{href:"mailto:hi@davwheat.dev"},"hi@davwheat.dev")," with the URL of this page.")):this.props.children},t}(a.default.Component),j=r(175),P=r(6023),k=["children"],Z=["body"],N={a:m.Z,h1:x("h1"),h2:x("h2"),h3:x("h3"),h4:x("h4"),h5:x("h5"),h6:x("h6"),img:function(e){return a.default.createElement("img",Object.assign({draggable:"false"},e,{loading:"lazy"}))},TableOfContents:function(e){var t=e.pageContext,r=E();if(!t)throw new Error("No `pageContext` was passed to the TableOfContents component. If being used in MDX files, ensure your usage matches: `<TableOfContents {...props} />`.");var n=t.tableOfContents.items;return n?a.default.createElement("nav",{className:r.tocRoot},a.default.createElement(y,{variant:"h2",id:"table-of-contents",className:r.tocHeading},"Contents"),a.default.createElement("ul",{className:(0,c.Z)(r.tocList,r.tocListOutermost)},n.map((function(e){return a.default.createElement(O,{key:e.url,data:e})})))):null},div:function(e){var t,r;return null!==(t=e.className)&&void 0!==t&&null!==(r=t.includes)&&void 0!==r&&r.call(t,"math-display")?a.default.createElement(j.wA,e):a.default.createElement("div",e)},span:function(e){var t,r;if(null!==(t=e.className)&&void 0!==t&&null!==(r=t.includes)&&void 0!==r&&r.call(t,"math-inline")){var o=e.children,l=(0,n.Z)(e,k);return a.default.createElement(P.Z,Object.assign({math:o},l))}return a.default.createElement("span",e)}},C=(0,i.Z)({footerPara:{marginBottom:32},bottomNav:{marginTop:-16,marginBottom:24}});function D(e){var t,r,i,u=e.pageContext,s=e.location,h=e.data.mdx,g=h.body,v=(0,n.Z)(h,Z),b=C();return(t=v.frontmatter).updated_at||(t.updated_at=v.frontmatter.created_at),(r=v.frontmatter).archived||(r.archived=!1),a.default.createElement(p.Z,{location:s,title:v.frontmatter.title,description:v.frontmatter.description||v.excerpt},a.default.createElement("script",{type:"application/ld+json"},JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting",headline:v.frontmatter.title,publisher:{"@type":"Organization",name:"David Wheatley",url:"https://davwheat.dev"},url:"https://davwheat.dev/"+v.frontmatter.path,datePublished:v.frontmatter.created_at_iso,dateCreated:v.frontmatter.created_at_iso,dateModified:null!==(i=v.frontmatter.updated_at_iso)&&void 0!==i?i:v.frontmatter.created_at_iso,description:v.frontmatter.description,author:{"@type":"Person",name:"David Wheatley",url:"https://davwheat.dev"},mainEntityOfPage:{"@type":"WebPage","@id":"https://davwheat.dev/blog/"+u.page}})),a.default.createElement("article",{id:"blog-article"},a.default.createElement(_,null,a.default.createElement(f,{pageContext:v}),a.default.createElement(d.Z,null,a.default.createElement(m.Z,{href:"/blog/"+u.page},"Back to article list")),a.default.createElement("hr",null),a.default.createElement(d.Z,{id:"blog-article-content"},a.default.createElement(_,null,v.frontmatter.archived&&a.default.createElement(j.kz,{title:"Archived"},"This article has been archived. Information contained within it may be out-of-date or wholly incorrect. This article has been retained purely for historical and archival purposes only."),a.default.createElement(o.MDXProvider,{components:N},a.default.createElement(l.MDXRenderer,{pageContext:v},g)))),a.default.createElement("hr",null),a.default.createElement(d.Z,{component:"footer"},a.default.createElement("p",{className:(0,c.Z)("text-speak text-center",b.footerPara)},"Noticed something not quite right with this blog article? Give me a poke at"," ",a.default.createElement(m.Z,{href:"mailto:blog@davwheat.dev?subject="+encodeURIComponent(v.frontmatter.title)},"blog@davwheat.dev")," or"," ",a.default.createElement(m.Z,{href:"https://t.me/davwheat"},"t.me/davwheat")," and let me know.")),a.default.createElement("nav",{className:b.bottomNav},a.default.createElement(m.Z,{href:"/blog/"+u.page},"Back to article list")))))}},8125:function(e,t,r){var n=r(6899);e.exports={MDXRenderer:n}},6899:function(e,t,r){var n=r(9100),a=r(319),o=r(9713),l=r(7316),i=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(4217),f=r(3497).mdx,d=r(5862).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,o=l(e,i),c=d(t),p=s.useMemo((function(){if(!r)return null;var e=u({React:s,mdx:f},c),t=Object.keys(e),o=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(o)))}),[r,t]);return s.createElement(p,u({},o))}}}]);
//# sourceMappingURL=component---src-templates-blog-article-blog-page-template-tsx-70a48e14305b2c3dae5b.js.map