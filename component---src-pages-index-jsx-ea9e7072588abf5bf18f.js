(self.webpackChunksleepybee_dev_log=self.webpackChunksleepybee_dev_log||[]).push([[279],{3416:function(e,t,n){"use strict";var l=n(6540),o=n(2568),i=n(1612),a=n(7008),r=n(1960);const c=o.default.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-1r6qy4p-0"})(["display:flex;align-items:center;@media (max-width:768px){padding:0 15px;}"]),s="undefined"!=typeof window&&"localhost:8000"===window.location.host?"http://localhost:8000":r.siteUrl,m=o.default.div.withConfig({displayName:"Bio__Profile",componentId:"sc-1r6qy4p-1"})(["flex:0 0 auto;margin-right:16px;width:128px;height:128px;border-radius:999px;background-image:url(","/profile.png);background-size:cover;background-position:center;"],s),d=o.default.div.withConfig({displayName:"Bio__Author",componentId:"sc-1r6qy4p-2"})(["margin-bottom:4.8px;font-size:24px;font-weight:700;color:",";"],(e=>e.theme.colors.text)),p=o.default.div.withConfig({displayName:"Bio__Description",componentId:"sc-1r6qy4p-3"})(["margin-bottom:11.2px;line-height:1.5;font-size:16px;color:",";"],(e=>e.theme.colors.secondaryText)),u=o.default.div.withConfig({displayName:"Bio__LinksWrapper",componentId:"sc-1r6qy4p-4"})(["& a{margin-right:9.6px;}& svg{width:25.6px;height:25.6px;cursor:pointer;}& svg path{fill:",";transition:fill 0.3s;}& a:hover svg path{fill:",";}"],(e=>e.theme.colors.icon),(e=>e.theme.colors.text)),g=e=>{let{link:t,children:n}=e;return t?l.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},n):null};t.A=()=>{const{github:e,kaggle:t,instagram:n,facebook:o,twitter:s,x:h,blogger:f,medium:E,linkedIn:x,email:k,resume:y,link:b}=r.links;return l.createElement(c,{id:"bio"},l.createElement(m,null),l.createElement("div",null,l.createElement(d,null,"@",r.author),l.createElement(p,null,r.description),l.createElement(u,null,l.createElement(g,{link:e},l.createElement(i.hL4,null)),l.createElement(g,{link:t},l.createElement(i.jJF,null)),l.createElement(g,{link:n},l.createElement(i.ao$,null)),l.createElement(g,{link:o},l.createElement(i.iYk,null)),l.createElement(g,{link:s},l.createElement(i.feZ,null)),l.createElement(g,{link:h},l.createElement(a.TCj,null)),l.createElement(g,{link:E},l.createElement(a.DC0,null)),l.createElement(g,{link:f},l.createElement(a.KRq,null)),l.createElement(g,{link:x},l.createElement(i.QEs,null)),l.createElement(g,{link:k},l.createElement(a.Wjb,null)),l.createElement(g,{link:y},l.createElement(a.HkI,null)),l.createElement(g,{link:b},l.createElement(a.AnD,null)))))}},5608:function(e,t,n){"use strict";var l=n(7350),o=n.n(l),i=n(6540),a=n(2568),r=n(4794),c=n(2912),s=n(3173),m=n(786);const d=a.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-y0z9e2-0"})(["@media (max-width:768px){padding:0 10px;}"]),p=a.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-y0z9e2-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),u=a.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-y0z9e2-2"})(["margin-bottom:16px;font-size:14.4px;color:",";"],(e=>e.theme.colors.tertiaryText)),g=a.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-y0z9e2-3"})(["margin-bottom:32px;line-height:1.7;font-size:15px;color:",";word-break:break-all;"],(e=>e.theme.colors.secondaryText));t.A=e=>{let{postList:t}=e;const{0:n,1:l}=(0,i.useState)(10),a=o()((()=>{document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&n<t.length&&setTimeout((()=>l(n+10)),300)}),250);return(0,i.useEffect)((()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)})),[n,t]),(0,i.useEffect)((()=>{l(10)}),[t]),i.createElement(d,null,t.slice(0,n).map(((e,l)=>{const{title:o,date:a,tags:d}=e.frontmatter,{excerpt:h}=e,{slug:f}=e.fields;return i.createElement(i.Fragment,null,i.createElement(p,null,i.createElement(c.A,{size:"bg"},i.createElement(r.Link,{to:f},o)),i.createElement(u,null,a),i.createElement(g,null,h),i.createElement(m.A,{tagList:d})),n-1!==l&&t.length-1!==l&&i.createElement(s.A,{mt:"48px",mb:"32px"}))})))}},786:function(e,t,n){"use strict";var l=n(6540),o=n(2568),i=n(4794);const a=o.default.div.withConfig({displayName:"TagList__TagListWrapper",componentId:"sc-1hb4zou-0"})(["margin-bottom:16px;word-break:break-all;"]),r=o.default.div.withConfig({displayName:"TagList__TagLink",componentId:"sc-1hb4zou-1"})(["display:inline-block;padding:9.6px 11.2px;margin-right:8px;margin-bottom:8px;border-radius:50px;background-color:",";color:",";text-decoration:none;font-size:14.4px;transition:all 0.2s;&:hover{background-color:",";}"],(e=>e.selected?e.theme.colors.selectedTagBackground:e.theme.colors.tagBackground),(e=>e.selected?e.theme.colors.selectedTagText:e.theme.colors.tagText),(e=>e.selected?e.theme.colors.hoveredSelectedTagBackground:e.theme.colors.hoveredTagBackground)),c=e=>e.replace(/\s+/g,"-");t.A=e=>{let{tagList:t,count:n,selected:o}=e;return t?n?l.createElement(a,null,t.map(((e,t)=>l.createElement(i.Link,{key:JSON.stringify({tag:e,i:t}),to:o===e.fieldValue?"/tags":`/tags?q=${e.fieldValue}`},l.createElement(r,{selected:e.fieldValue===o},c(e.fieldValue)," (",e.totalCount,")"))))):l.createElement(a,null,t.map(((e,t)=>l.createElement(i.Link,{key:JSON.stringify({tag:e,i:t}),to:`/tags?q=${e}`},l.createElement(r,null,c(e)))))):null}},7352:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var l=n(3031),o=n.n(l),i=n(6540),a=n(6288),r=n(5482),c=n(3416),s=n(5608),m=n(5378),d=n.n(m),p=n(2568),u=n(4794);const g=p.default.div.withConfig({displayName:"SideTagList__RelativeWrapper",componentId:"sc-sn0u4s-0"})(["position:relative;"]),h=p.default.aside.withConfig({displayName:"SideTagList__Wrapper",componentId:"sc-sn0u4s-1"})(["position:absolute;left:112%;top:0px;width:200px;height:100px;font-size:16px;@media (max-width:1300px){display:none;}"]),f=p.default.div.withConfig({displayName:"SideTagList__Title",componentId:"sc-sn0u4s-2"})(["margin-bottom:25px;font-weight:bold;color:",";"],(e=>e.theme.colors.secondaryText)),E=p.default.li.withConfig({displayName:"SideTagList__Tag",componentId:"sc-sn0u4s-3"})(["margin-bottom:16px;color:",";cursor:pointer;transition:color 0.3s;&:hover{color:",";}& > a{color:inherit;text-decoration:none;}"],(e=>e.theme.colors.tertiaryText),(e=>e.theme.colors.text));var x=e=>{let{tags:t,postCount:n}=e;return i.createElement(g,null,i.createElement(h,null,i.createElement(f,null,"TAG LIST"),i.createElement("ul",null,i.createElement(E,null,i.createElement(u.Link,{to:"/tags"},"all (",n,")")),d()(t,(e=>i.createElement(E,null,i.createElement(u.Link,{to:`/tags?q=${e.fieldValue}`},e.fieldValue," (",e.totalCount,")")))))))},k=n(3173),y=n(698),b=n(1960);var w=e=>{let{data:t}=e;const n=t.allMarkdownRemark.nodes,l=o()(t.allMarkdownRemark.group,["totalCount"]).reverse();return 0===n.length?i.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'):i.createElement(a.A,null,i.createElement(r.A,{title:b.title,description:b.description,url:b.siteUrl}),i.createElement(y.A,{size:48}),i.createElement(c.A,null),i.createElement(k.A,null),i.createElement(x,{tags:l,postCount:n.length}),i.createElement(s.A,{postList:n}))}},5378:function(e,t,n){var l=n(4932),o=n(5389),i=n(5128),a=n(6449);e.exports=function(e,t){return(a(e)?l:i)(e,o(t,3))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-ea9e7072588abf5bf18f.js.map