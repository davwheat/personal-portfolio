"use strict";(self.webpackChunkpersonal_portfolio=self.webpackChunkpersonal_portfolio||[]).push([[200],{1140:function(e,t,a){var r,l=(r=a(4217))&&"object"==typeof r&&"default"in r?r.default:r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o=function(e){var t=e.color,a=void 0===t?"currentColor":t,r=e.size,o=void 0===r?24:r,c=(e.children,function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["color","size","children"])),i="mdi-icon "+(c.className||"");return l.createElement("svg",n({},c,{className:i,width:o,height:o,fill:a,viewBox:"0 0 24 24"}),l.createElement("path",{d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}))},c=l.memo?l.memo(o):o;e.exports=c},8386:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var r=a(4217),l=a(4942),n=a(2585),o=a(2185),c=a(3889),i=a(9880),s=a(2580),d=a.n(s),u=a(9174),f=a.n(u);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){(0,l.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}d().extend(f());var g=(0,o.Z)({root:p(p({position:"relative",padding:16,border:"2px solid #000"},(0,i.ZP)("box-shadow","short")),{},{"&:hover, &:focus-within":{boxShadow:"0 0 0 2px black"}}),subtitle:{textTransform:"uppercase",marginBottom:12,lineHeight:1.2,color:"#666"},title:{marginBottom:4,"& a::after":{content:'""',display:"block",position:"absolute",top:0,left:0,right:0,bottom:0}}}),h=function(e){var t=e.title,a=e.date,l=e.description,o=e.slug,i=g();return r.default.createElement("li",{className:i.root},r.default.createElement("h2",{className:(0,n.Z)(i.title,"text-loud")},r.default.createElement(c.Z,{href:o},t)),r.default.createElement("p",{className:(0,n.Z)(i.subtitle,"text-whisper-loud")},d()(a).format("LL")),r.default.createElement("p",null,l))},b=(0,o.Z)({root:{margin:"auto",display:"grid",width:"max-content",gap:4,"& > *":{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32}},noSelect:{userSelect:"none"},box:{border:"2px solid #000",textDecoration:"none",fontWeight:"bold","&[data-selected]":{background:"#000",color:"#fff"}}});function E(e){var t=e.currentPage,a=e.maxPage,l=b(),o=new Set;o.add(1),o.add(a),o.add(t),o.add(t+1),o.add(t-1);var i=Array.from(o).filter((function(e){return e>=1&&e<=a})),s=1,d=[];return d.push(1!==t?r.default.createElement(c.Z,{key:"prev_a",className:l.noSelect,"aria-label":"Previous page",href:"/blog/"+(t-1)},"<"):r.default.createElement("span",{key:"prev_t",className:l.noSelect,"aria-hidden":!0},"<")),i.forEach((function(e){var a=e-s>1;s=e,a&&d.push(r.default.createElement("span",null,"...")),e===t?d.push(r.default.createElement("span",{key:e+"_sel","aria-label":"Page "+e+" (selected)",className:(0,n.Z)(l.box,l.noSelect),"data-selected":!0},e)):d.push(r.default.createElement(c.Z,{key:e+"_desel","aria-label":"Page "+e,className:l.box,href:"/blog/"+e},e))})),d.push(t!==a?r.default.createElement(c.Z,{key:"next_a",className:l.noSelect,"aria-label":"Next page",href:"/blog/"+(t+1)},">"):r.default.createElement("span",{key:"next_t",className:l.noSelect,"aria-hidden":!0},">")),r.default.createElement("nav",{className:l.root,style:{gridTemplateColumns:"repeat("+d.length+", 1fr)"}},d)}var v,y=a(9392),x=a(2925),O=a(726),P=a(4236),w=a(1931),Z=a(1140),k=a.n(Z),N=(0,o.Z)({list:(v={margin:0,padding:0,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:24},v[w.Z.between.desktopSmall.and.phone]={gridTemplateColumns:"repeat(2, 1fr)"},v[w.Z.upTo.tablet]={gridTemplateColumns:"1fr"},v),searchLink:{textAlign:"right",marginBottom:32,marginTop:-12,marginRight:8},searchIcon:{marginRight:4,verticalAlign:"bottom"}});function j(e){var t=e.location,a=e.data.allMdx.nodes,l=e.pageContext,n=l.numPages,o=l.currentPage,i=N(),s=a.map((function(e){return r.default.createElement(h,{key:e.id,title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt,date:e.frontmatter.created_at,slug:"/blog/"+e.frontmatter.path})}));return r.default.createElement(y.Z,{location:t,title:"Blog | Page "+o,description:"Page "+o+" of blog articles from David Wheatley."},r.default.createElement(x.Z,{firstElement:!0,color:P.tE},r.default.createElement("h1",{className:"text-shout"},"Blog articles"),r.default.createElement("p",{role:"doc-subtitle",className:"text-loud"},"Page ",o," of ",n)),r.default.createElement(O.Z,{width:"wider"},r.default.createElement("p",{className:i.searchLink},r.default.createElement(c.Z,{href:"/blog/search"},r.default.createElement(k(),{className:i.searchIcon}),"Search blog")),r.default.createElement("ul",{className:i.list},s)),r.default.createElement(O.Z,null,r.default.createElement(E,{currentPage:o,maxPage:n})))}}}]);
//# sourceMappingURL=component---src-templates-blog-article-blog-articles-list-tsx-17003a65c9852be71d78.js.map