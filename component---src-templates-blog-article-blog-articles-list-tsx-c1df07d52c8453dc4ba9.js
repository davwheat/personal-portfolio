"use strict";(self.webpackChunkpersonal_portfolio=self.webpackChunkpersonal_portfolio||[]).push([[200],{3151:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var r=a(1766),l=a(4942),n=a(2585),o=a(2185),c=a(4821),i=a(5752),s=a(2580),d=a.n(s),u=a(9174),f=a.n(u);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){(0,l.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}d().extend(f());var g=(0,o.Z)({root:m(m({position:"relative",padding:16,border:"2px solid #000"},(0,i.ZP)("box-shadow","short")),{},{"&:hover, &:focus-within":{boxShadow:"0 0 0 2px black"}}),subtitle:{textTransform:"uppercase",marginBottom:12,lineHeight:1.2,color:"#666"},title:{marginBottom:4,"& a::after":{content:'""',display:"block",position:"absolute",top:0,left:0,right:0,bottom:0}}}),b=function(e){var t=e.title,a=e.date,l=e.description,o=e.slug,i=g();return r.default.createElement("li",{className:i.root},r.default.createElement("h2",{className:(0,n.Z)(i.title,"text-loud")},r.default.createElement(c.Z,{href:o},t)),r.default.createElement("p",{className:(0,n.Z)(i.subtitle,"text-whisper-loud")},d()(a).format("LL")),r.default.createElement("p",null,l))},h=(0,o.Z)({root:{margin:"auto",display:"grid",width:"max-content",gap:4,"& > *":{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32}},noSelect:{userSelect:"none"},box:{border:"2px solid #000",textDecoration:"none",fontWeight:"bold","&[data-selected]":{background:"#000",color:"#fff"}}});function E(e){var t=e.currentPage,a=e.maxPage,l=h(),o=new Set;o.add(1),o.add(a),o.add(t),o.add(t+1),o.add(t-1);var i=Array.from(o).filter((function(e){return e>=1&&e<=a})),s=1,d=[];return d.push(1!==t?r.default.createElement(c.Z,{key:"prev_a",className:l.noSelect,"aria-label":"Previous page",href:"/blog/"+(t-1)},"<"):r.default.createElement("span",{key:"prev_t",className:l.noSelect,"aria-hidden":!0},"<")),i.forEach((function(e){var a=e-s>1;s=e,a&&d.push(r.default.createElement("span",null,"...")),e===t?d.push(r.default.createElement("span",{key:e+"_sel","aria-label":"Page "+e+" (selected)",className:(0,n.Z)(l.box,l.noSelect),"data-selected":!0},e)):d.push(r.default.createElement(c.Z,{key:e+"_desel","aria-label":"Page "+e,className:l.box,href:"/blog/"+e},e))})),d.push(t!==a?r.default.createElement(c.Z,{key:"next_a",className:l.noSelect,"aria-label":"Next page",href:"/blog/"+(t+1)},">"):r.default.createElement("span",{key:"next_t",className:l.noSelect,"aria-hidden":!0},">")),r.default.createElement("nav",{className:l.root,style:{gridTemplateColumns:"repeat("+d.length+", 1fr)"}},d)}var y,x=a(4410),P=a(4430),v=a(1523),w=a(4236),Z=a(3113),O=(0,o.Z)({list:(y={margin:0,padding:0,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:24},y[Z.Z.between.desktopSmall.and.phone]={gridTemplateColumns:"repeat(2, 1fr)"},y[Z.Z.upTo.tablet]={gridTemplateColumns:"1fr"},y)});function k(e){var t=e.location,a=e.data.allMdx.nodes,l=e.pageContext,n=l.numPages,o=l.currentPage,c=O(),i=a.map((function(e){return r.default.createElement(b,{key:e.id,title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt,date:e.frontmatter.created_at,slug:"/blog/"+e.frontmatter.path})}));return r.default.createElement(x.Z,{location:t,title:"Blog | Page "+o,description:"Page "+o+" of blog articles from David Wheatley."},r.default.createElement(P.Z,{firstElement:!0,color:w.tE},r.default.createElement("h1",{className:"text-shout"},"Blog articles"),r.default.createElement("p",{role:"doc-subtitle",className:"text-loud"},"Page ",o," of ",n)),r.default.createElement(v.Z,{width:"wider"},r.default.createElement("ul",{className:c.list},i)),r.default.createElement(v.Z,null,r.default.createElement(E,{currentPage:o,maxPage:n})))}}}]);
//# sourceMappingURL=component---src-templates-blog-article-blog-articles-list-tsx-c1df07d52c8453dc4ba9.js.map