(self.webpackChunksleepybee_dev_log=self.webpackChunksleepybee_dev_log||[]).push([[126],{5144:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return P}});var n=r(1333),o=r.n(n),i=r(5497),a=r.n(i),u=r(854),s=r.n(u),c=r(2093),l=r.n(c),f=r(8821),p=r.n(f),d=r(9899),h=r.n(d),v=r(6540),g=r(2568),y=r(5482),m=r(6288),x=r(2912),b=r(3472),_=r.n(b),A=r(7350),w=r.n(A),j=r(4794),W=r(3173);const I=g.default.div.withConfig({displayName:"SeriesList__SeriesListWrapper",componentId:"sc-vi9kby-0"})(["margin-bottom:60px;@media (max-width:768px){padding:0 10px;}"]),E=g.default.div.withConfig({displayName:"SeriesList__SeriesWrapper",componentId:"sc-vi9kby-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),O=g.default.div.withConfig({displayName:"SeriesList__SeriesInform",componentId:"sc-vi9kby-2"})(["display:flex;align-items:center;color:",";& > span{margin:0 5px;}"],(t=>t.theme.colors.tertiaryText)),k=g.default.p.withConfig({displayName:"SeriesList__Date",componentId:"sc-vi9kby-3"})(["font-size:14.4px;"]),R=g.default.p.withConfig({displayName:"SeriesList__PostCount",componentId:"sc-vi9kby-4"})(["font-size:14.4px;"]);var B=t=>{let{seriesList:e}=t;const{0:r,1:n}=(0,v.useState)(10),o=w()((()=>{document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&r<e.length&&setTimeout((()=>n(r+10)),300)}),250);return(0,v.useEffect)((()=>(window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)})),[r,e]),(0,v.useEffect)((()=>{n(10)}),[e]),v.createElement(I,null,e.slice(0,r).map(((t,n)=>v.createElement(v.Fragment,null,v.createElement(E,null,v.createElement(x.A,{size:"bg"},v.createElement(j.Link,{to:`/series/${_()(t.name,/\s/g,"-")}`},t.name)),v.createElement(O,null,v.createElement(R,null,t.posts.length," Posts"),v.createElement("span",null,"·"),v.createElement(k,null,"Last updated on ",t.lastUpdated))),r-1!==n&&e.length-1!==n&&v.createElement(W.A,{mt:"48px",mb:"32px"})))))},S=r(698);const F=g.default.div.withConfig({displayName:"NoContent__Wrapper",componentId:"sc-xptc8t-0"})(["display:flex;align-items:center;justify-content:center;flex-direction:column;height:150px;font-size:24px;font-weight:bold;color:",";"],(t=>t.theme.colors.tertiaryText));var L=t=>{let{name:e}=t;return v.createElement(F,null,"There is no ",e,".")},M=r(1960);const C=g.default.div.withConfig({displayName:"series__TagListWrapper",componentId:"sc-17404vk-0"})(["margin-top:20px;@media (max-width:768px){padding:0 15px;}"]);var P=t=>{let{data:e}=t;const r=e.allMarkdownRemark.nodes,n=h()(p()((t=>({...t.frontmatter,slug:t.fields.slug}))),l()("series"),p()((t=>({name:t[0].series,posts:t,lastUpdated:t[0].date}))),s()((t=>new Date(t.lastUpdated))),a()((t=>t.name)),o())(r);return v.createElement(m.A,null,v.createElement(y.A,{title:M.title,description:M.description,url:M.siteUrl}),v.createElement(C,null,n.length>0&&v.createElement(x.A,{size:"sm"},"There are ",n.length," series.")),0===n.length&&v.createElement(L,{name:"series"}),v.createElement(S.A,{size:32}),v.createElement(B,{seriesList:n}))}},980:function(t,e,r){var n=r(9344),o=r(4033);function i(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}i.prototype=n(o.prototype),i.prototype.constructor=i,t.exports=i},8398:function(t,e,r){var n=r(9344),o=r(4033);function i(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=void 0}i.prototype=n(o.prototype),i.prototype.constructor=i,t.exports=i},3945:function(t){t.exports=function(t,e,r,n){for(var o=-1,i=null==t?0:t.length;++o<i;){var a=t[o];e(n,a,r(a),t)}return n}},8491:function(t){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t}},5325:function(t,e,r){var n=r(6131);t.exports=function(t,e){return!!(null==t?0:t.length)&&n(t,e,0)>-1}},6547:function(t,e,r){var n=r(3360),o=r(5288),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,r){var a=t[e];i.call(t,e)&&o(a,r)&&(void 0!==r||e in t)||n(t,e,r)}},2429:function(t,e,r){var n=r(909);t.exports=function(t,e,r,o){return n(t,(function(t,n,i){e(o,t,r(t),i)})),o}},4733:function(t,e,r){var n=r(1791),o=r(5950);t.exports=function(t,e){return t&&n(e,o(e),t)}},3838:function(t,e,r){var n=r(1791),o=r(7241);t.exports=function(t,e){return t&&n(e,o(e),t)}},3360:function(t,e,r){var n=r(3243);t.exports=function(t,e,r){"__proto__"==e&&n?n(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}},9999:function(t,e,r){var n=r(7217),o=r(8491),i=r(6547),a=r(4733),u=r(3838),s=r(3290),c=r(3007),l=r(2271),f=r(8948),p=r(2),d=r(3349),h=r(5861),v=r(6189),g=r(7199),y=r(5529),m=r(6449),x=r(3656),b=r(7730),_=r(3805),A=r(8440),w=r(5950),j=r(7241),W="[object Arguments]",I="[object Function]",E="[object Object]",O={};O[W]=O["[object Array]"]=O["[object ArrayBuffer]"]=O["[object DataView]"]=O["[object Boolean]"]=O["[object Date]"]=O["[object Float32Array]"]=O["[object Float64Array]"]=O["[object Int8Array]"]=O["[object Int16Array]"]=O["[object Int32Array]"]=O["[object Map]"]=O["[object Number]"]=O[E]=O["[object RegExp]"]=O["[object Set]"]=O["[object String]"]=O["[object Symbol]"]=O["[object Uint8Array]"]=O["[object Uint8ClampedArray]"]=O["[object Uint16Array]"]=O["[object Uint32Array]"]=!0,O["[object Error]"]=O[I]=O["[object WeakMap]"]=!1,t.exports=function t(e,r,k,R,B,S){var F,L=1&r,M=2&r,C=4&r;if(k&&(F=B?k(e,R,B,S):k(e)),void 0!==F)return F;if(!_(e))return e;var P=m(e);if(P){if(F=v(e),!L)return c(e,F)}else{var D=h(e),T=D==I||"[object GeneratorFunction]"==D;if(x(e))return s(e,L);if(D==E||D==W||T&&!B){if(F=M||T?{}:y(e),!L)return M?f(e,u(F,e)):l(e,a(F,e))}else{if(!O[D])return B?e:{};F=g(e,D,L)}}S||(S=new n);var z=S.get(e);if(z)return z;S.set(e,F),A(e)?e.forEach((function(n){F.add(t(n,r,k,n,e,S))})):b(e)&&e.forEach((function(n,o){F.set(o,t(n,r,k,o,e,S))}));var q=P?void 0:(C?M?d:p:M?j:w)(e);return o(q||e,(function(n,o){q&&(n=e[o=n]),i(F,o,t(n,r,k,o,e,S))})),F}},9344:function(t,e,r){var n=r(3805),o=Object.create,i=function(){function t(){}return function(e){if(!n(e))return{};if(o)return o(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();t.exports=i},6574:function(t,e,r){var n=r(909);t.exports=function(t,e){var r=[];return n(t,(function(t,n,o){e(t,n,o)&&r.push(t)})),r}},2523:function(t){t.exports=function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}},6131:function(t,e,r){var n=r(2523),o=r(5463),i=r(6959);t.exports=function(t,e,r){return e==e?i(t,e,r):n(t,o,r)}},9172:function(t,e,r){var n=r(5861),o=r(346);t.exports=function(t){return o(t)&&"[object Map]"==n(t)}},5463:function(t){t.exports=function(t){return t!=t}},6038:function(t,e,r){var n=r(5861),o=r(346);t.exports=function(t){return o(t)&&"[object Set]"==n(t)}},2903:function(t,e,r){var n=r(3805),o=r(5527),i=r(181),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return i(t);var e=o(t),r=[];for(var u in t)("constructor"!=u||!e&&a.call(t,u))&&r.push(u);return r}},4033:function(t){t.exports=function(){}},8882:function(t,e,r){var n=r(3488),o=r(8152),i=o?function(t,e){return o.set(t,e),t}:n;t.exports=i},9653:function(t,e,r){var n=r(7828);t.exports=function(t){var e=new t.constructor(t.byteLength);return new n(e).set(new n(t)),e}},3290:function(t,e,r){t=r.nmd(t);var n=r(9325),o=e&&!e.nodeType&&e,i=o&&t&&!t.nodeType&&t,a=i&&i.exports===o?n.Buffer:void 0,u=a?a.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,n=u?u(r):new t.constructor(r);return t.copy(n),n}},6169:function(t,e,r){var n=r(9653);t.exports=function(t,e){var r=e?n(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}},3201:function(t){var e=/\w*$/;t.exports=function(t){var r=new t.constructor(t.source,e.exec(t));return r.lastIndex=t.lastIndex,r}},3736:function(t,e,r){var n=r(1873),o=n?n.prototype:void 0,i=o?o.valueOf:void 0;t.exports=function(t){return i?Object(i.call(t)):{}}},1961:function(t,e,r){var n=r(9653);t.exports=function(t,e){var r=e?n(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}},1596:function(t){var e=Math.max;t.exports=function(t,r,n,o){for(var i=-1,a=t.length,u=n.length,s=-1,c=r.length,l=e(a-u,0),f=Array(c+l),p=!o;++s<c;)f[s]=r[s];for(;++i<u;)(p||i<a)&&(f[n[i]]=t[i]);for(;l--;)f[s++]=t[i++];return f}},3320:function(t){var e=Math.max;t.exports=function(t,r,n,o){for(var i=-1,a=t.length,u=-1,s=n.length,c=-1,l=r.length,f=e(a-s,0),p=Array(f+l),d=!o;++i<f;)p[i]=t[i];for(var h=i;++c<l;)p[h+c]=r[c];for(;++u<s;)(d||i<a)&&(p[h+n[u]]=t[i++]);return p}},3007:function(t){t.exports=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}},1791:function(t,e,r){var n=r(6547),o=r(3360);t.exports=function(t,e,r,i){var a=!r;r||(r={});for(var u=-1,s=e.length;++u<s;){var c=e[u],l=i?i(r[c],t[c],c,r,t):void 0;void 0===l&&(l=t[c]),a?o(r,c,l):n(r,c,l)}return r}},2271:function(t,e,r){var n=r(1791),o=r(4664);t.exports=function(t,e){return n(t,o(t),e)}},8948:function(t,e,r){var n=r(1791),o=r(6375);t.exports=function(t,e){return n(t,o(t),e)}},8523:function(t){t.exports=function(t,e){for(var r=t.length,n=0;r--;)t[r]===e&&++n;return n}},2e3:function(t,e,r){var n=r(3945),o=r(2429),i=r(5389),a=r(6449);t.exports=function(t,e){return function(r,u){var s=a(r)?n:o,c=e?e():{};return s(r,t,i(u,2),c)}}},1842:function(t,e,r){var n=r(2819),o=r(9325);t.exports=function(t,e,r){var i=1&e,a=n(t);return function e(){return(this&&this!==o&&this instanceof e?a:t).apply(i?r:this,arguments)}}},2819:function(t,e,r){var n=r(9344),o=r(3805);t.exports=function(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var r=n(t.prototype),i=t.apply(r,e);return o(i)?i:r}}},4697:function(t,e,r){var n=r(1033),o=r(2819),i=r(7471),a=r(8073),u=r(1287),s=r(6306),c=r(9325);t.exports=function(t,e,r){var l=o(t);return function o(){for(var f=arguments.length,p=Array(f),d=f,h=u(o);d--;)p[d]=arguments[d];var v=f<3&&p[0]!==h&&p[f-1]!==h?[]:s(p,h);return(f-=v.length)<r?a(t,e,i,o.placeholder,void 0,p,v,void 0,void 0,r-f):n(this&&this!==c&&this instanceof o?l:t,this,p)}}},6929:function(t,e,r){var n=r(8398),o=r(8816),i=r(7381),a=r(2284),u=r(6449),s=r(5087);t.exports=function(t){return o((function(e){var r=e.length,o=r,c=n.prototype.thru;for(t&&e.reverse();o--;){var l=e[o];if("function"!=typeof l)throw new TypeError("Expected a function");if(c&&!f&&"wrapper"==a(l))var f=new n([],!0)}for(o=f?o:r;++o<r;){l=e[o];var p=a(l),d="wrapper"==p?i(l):void 0;f=d&&s(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?f[a(d[0])].apply(f,d[3]):1==l.length&&s(l)?f[p]():f.thru(l)}return function(){var t=arguments,n=t[0];if(f&&1==t.length&&u(n))return f.plant(n).value();for(var o=0,i=r?e[o].apply(this,t):n;++o<r;)i=e[o].call(this,i);return i}}))}},7471:function(t,e,r){var n=r(1596),o=r(3320),i=r(8523),a=r(2819),u=r(8073),s=r(1287),c=r(8294),l=r(6306),f=r(9325);t.exports=function t(e,r,p,d,h,v,g,y,m,x){var b=128&r,_=1&r,A=2&r,w=24&r,j=512&r,W=A?void 0:a(e);return function I(){for(var E=arguments.length,O=Array(E),k=E;k--;)O[k]=arguments[k];if(w)var R=s(I),B=i(O,R);if(d&&(O=n(O,d,h,w)),v&&(O=o(O,v,g,w)),E-=B,w&&E<x){var S=l(O,R);return u(e,r,t,I.placeholder,p,O,S,y,m,x-E)}var F=_?p:this,L=A?F[e]:e;return E=O.length,y?O=c(O,y):j&&E>1&&O.reverse(),b&&m<E&&(O.length=m),this&&this!==f&&this instanceof I&&(L=W||a(L)),L.apply(F,O)}}},4168:function(t,e,r){var n=r(1033),o=r(2819),i=r(9325);t.exports=function(t,e,r,a){var u=1&e,s=o(t);return function e(){for(var o=-1,c=arguments.length,l=-1,f=a.length,p=Array(f+c),d=this&&this!==i&&this instanceof e?s:t;++l<f;)p[l]=a[l];for(;c--;)p[l++]=arguments[++o];return n(d,u?r:this,p)}}},8073:function(t,e,r){var n=r(5087),o=r(4641),i=r(981);t.exports=function(t,e,r,a,u,s,c,l,f,p){var d=8&e;e|=d?32:64,4&(e&=~(d?64:32))||(e&=-4);var h=[t,e,u,d?s:void 0,d?c:void 0,d?void 0:s,d?void 0:c,l,f,p],v=r.apply(void 0,h);return n(t)&&o(v,h),v.placeholder=a,i(v,t,e)}},6977:function(t,e,r){var n=r(8882),o=r(1842),i=r(4697),a=r(7471),u=r(4168),s=r(7381),c=r(3209),l=r(4641),f=r(981),p=r(1489),d=Math.max;t.exports=function(t,e,r,h,v,g,y,m){var x=2&e;if(!x&&"function"!=typeof t)throw new TypeError("Expected a function");var b=h?h.length:0;if(b||(e&=-97,h=v=void 0),y=void 0===y?y:d(p(y),0),m=void 0===m?m:p(m),b-=v?v.length:0,64&e){var _=h,A=v;h=v=void 0}var w=x?void 0:s(t),j=[t,e,r,h,v,_,A,g,y,m];if(w&&c(j,w),t=j[0],e=j[1],r=j[2],h=j[3],v=j[4],!(m=j[9]=void 0===j[9]?x?0:t.length:d(j[9]-b,0))&&24&e&&(e&=-25),e&&1!=e)W=8==e||16==e?i(t,e,m):32!=e&&33!=e||v.length?a.apply(void 0,j):u(t,e,r,h);else var W=o(t,e,r);return f((w?n:l)(W,j),t,e)}},8816:function(t,e,r){var n=r(5970),o=r(6757),i=r(2865);t.exports=function(t){return i(o(t,void 0,n),t+"")}},3349:function(t,e,r){var n=r(2199),o=r(6375),i=r(7241);t.exports=function(t){return n(t,i,o)}},7381:function(t,e,r){var n=r(8152),o=r(3950),i=n?function(t){return n.get(t)}:o;t.exports=i},2284:function(t,e,r){var n=r(4629),o=Object.prototype.hasOwnProperty;t.exports=function(t){for(var e=t.name+"",r=n[e],i=o.call(n,e)?r.length:0;i--;){var a=r[i],u=a.func;if(null==u||u==t)return a.name}return e}},1287:function(t){t.exports=function(t){return t.placeholder}},8879:function(t,e,r){var n=r(4335)(Object.getPrototypeOf,Object);t.exports=n},6375:function(t,e,r){var n=r(4528),o=r(8879),i=r(4664),a=r(3345),u=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)n(e,i(t)),t=o(t);return e}:a;t.exports=u},5251:function(t){var e=/\{\n\/\* \[wrapped with (.+)\] \*/,r=/,? & /;t.exports=function(t){var n=t.match(e);return n?n[1].split(r):[]}},6189:function(t){var e=Object.prototype.hasOwnProperty;t.exports=function(t){var r=t.length,n=new t.constructor(r);return r&&"string"==typeof t[0]&&e.call(t,"index")&&(n.index=t.index,n.input=t.input),n}},7199:function(t,e,r){var n=r(9653),o=r(6169),i=r(3201),a=r(3736),u=r(1961);t.exports=function(t,e,r){var s=t.constructor;switch(e){case"[object ArrayBuffer]":return n(t);case"[object Boolean]":case"[object Date]":return new s(+t);case"[object DataView]":return o(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return u(t,r);case"[object Map]":case"[object Set]":return new s;case"[object Number]":case"[object String]":return new s(t);case"[object RegExp]":return i(t);case"[object Symbol]":return a(t)}}},5529:function(t,e,r){var n=r(9344),o=r(8879),i=r(5527);t.exports=function(t){return"function"!=typeof t.constructor||i(t)?{}:n(o(t))}},2060:function(t){var e=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;t.exports=function(t,r){var n=r.length;if(!n)return t;var o=n-1;return r[o]=(n>1?"& ":"")+r[o],r=r.join(n>2?", ":" "),t.replace(e,"{\n/* [wrapped with "+r+"] */\n")}},5087:function(t,e,r){var n=r(980),o=r(7381),i=r(2284),a=r(3758);t.exports=function(t){var e=i(t),r=a[e];if("function"!=typeof r||!(e in n.prototype))return!1;if(t===r)return!0;var u=o(r);return!!u&&t===u[0]}},3209:function(t,e,r){var n=r(1596),o=r(3320),i=r(6306),a="__lodash_placeholder__",u=128,s=Math.min;t.exports=function(t,e){var r=t[1],c=e[1],l=r|c,f=l<131,p=c==u&&8==r||c==u&&256==r&&t[7].length<=e[8]||384==c&&e[7].length<=e[8]&&8==r;if(!f&&!p)return t;1&c&&(t[2]=e[2],l|=1&r?0:4);var d=e[3];if(d){var h=t[3];t[3]=h?n(h,d,e[4]):d,t[4]=h?i(t[3],a):e[4]}return(d=e[5])&&(h=t[5],t[5]=h?o(h,d,e[6]):d,t[6]=h?i(t[5],a):e[6]),(d=e[7])&&(t[7]=d),c&u&&(t[8]=null==t[8]?e[8]:s(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=l,t}},8152:function(t,e,r){var n=r(8303),o=n&&new n;t.exports=o},181:function(t){t.exports=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}},4629:function(t){t.exports={}},8294:function(t,e,r){var n=r(3007),o=r(361),i=Math.min;t.exports=function(t,e){for(var r=t.length,a=i(e.length,r),u=n(t);a--;){var s=e[a];t[a]=o(s,r)?u[s]:void 0}return t}},6306:function(t){var e="__lodash_placeholder__";t.exports=function(t,r){for(var n=-1,o=t.length,i=0,a=[];++n<o;){var u=t[n];u!==r&&u!==e||(t[n]=e,a[i++]=n)}return a}},4641:function(t,e,r){var n=r(8882),o=r(1811)(n);t.exports=o},981:function(t,e,r){var n=r(5251),o=r(2060),i=r(2865),a=r(5948);t.exports=function(t,e,r){var u=e+"";return i(t,o(u,a(n(u),r)))}},6959:function(t){t.exports=function(t,e,r){for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}},5948:function(t,e,r){var n=r(8491),o=r(5325),i=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]];t.exports=function(t,e){return n(i,(function(r){var n="_."+r[0];e&r[1]&&!o(t,n)&&t.push(n)})),t.sort()}},257:function(t,e,r){var n=r(980),o=r(8398),i=r(3007);t.exports=function(t){if(t instanceof n)return t.clone();var e=new o(t.__wrapped__,t.__chain__);return e.__actions__=i(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}},4626:function(t,e,r){var n=r(6977);t.exports=function(t,e,r){return e=r?void 0:e,e=t&&null==e?t.length:e,n(t,128,void 0,void 0,void 0,void 0,e)}},2629:function(t,e,r){var n=r(9999);t.exports=function(t){return n(t,4)}},9747:function(t,e,r){var n=r(6977);function o(t,e,r){var i=n(t,8,void 0,void 0,void 0,void 0,void 0,e=r?void 0:e);return i.placeholder=o.placeholder,i}o.placeholder={},t.exports=o},7612:function(t,e,r){var n=r(9770),o=r(6574),i=r(5389),a=r(6449);t.exports=function(t,e){return(a(t)?n:o)(t,i(e,3))}},5970:function(t,e,r){var n=r(3120);t.exports=function(t){return(null==t?0:t.length)?n(t,1):[]}},9870:function(t,e,r){var n=r(6929)();t.exports=n},3424:function(t,e,r){var n=r(6962),o=r(2874),i=Array.prototype.push;function a(t,e){return 2==e?function(e,r){return t(e,r)}:function(e){return t(e)}}function u(t){for(var e=t?t.length:0,r=Array(e);e--;)r[e]=t[e];return r}function s(t,e){return function(){var r=arguments.length;if(r){for(var n=Array(r);r--;)n[r]=arguments[r];var o=n[0]=e.apply(void 0,n);return t.apply(void 0,n),o}}}t.exports=function t(e,r,c,l){var f="function"==typeof r,p=r===Object(r);if(p&&(l=c,c=r,r=void 0),null==c)throw new TypeError;l||(l={});var d={cap:!("cap"in l)||l.cap,curry:!("curry"in l)||l.curry,fixed:!("fixed"in l)||l.fixed,immutable:!("immutable"in l)||l.immutable,rearg:!("rearg"in l)||l.rearg},h=f?c:o,v="curry"in l&&l.curry,g="fixed"in l&&l.fixed,y="rearg"in l&&l.rearg,m=f?c.runInContext():void 0,x=f?c:{ary:e.ary,assign:e.assign,clone:e.clone,curry:e.curry,forEach:e.forEach,isArray:e.isArray,isError:e.isError,isFunction:e.isFunction,isWeakMap:e.isWeakMap,iteratee:e.iteratee,keys:e.keys,rearg:e.rearg,toInteger:e.toInteger,toPath:e.toPath},b=x.ary,_=x.assign,A=x.clone,w=x.curry,j=x.forEach,W=x.isArray,I=x.isError,E=x.isFunction,O=x.isWeakMap,k=x.keys,R=x.rearg,B=x.toInteger,S=x.toPath,F=k(n.aryMethod),L={castArray:function(t){return function(){var e=arguments[0];return W(e)?t(u(e)):t.apply(void 0,arguments)}},iteratee:function(t){return function(){var e=arguments[1],r=t(arguments[0],e),n=r.length;return d.cap&&"number"==typeof e?(e=e>2?e-2:1,n&&n<=e?r:a(r,e)):r}},mixin:function(t){return function(e){var r=this;if(!E(r))return t(r,Object(e));var n=[];return j(k(e),(function(t){E(e[t])&&n.push([t,r.prototype[t]])})),t(r,Object(e)),j(n,(function(t){var e=t[1];E(e)?r.prototype[t[0]]=e:delete r.prototype[t[0]]})),r}},nthArg:function(t){return function(e){var r=e<0?1:B(e)+1;return w(t(e),r)}},rearg:function(t){return function(e,r){var n=r?r.length:0;return w(t(e,r),n)}},runInContext:function(r){return function(n){return t(e,r(n),l)}}};function M(t,e){if(d.cap){var r=n.iterateeRearg[t];if(r)return function(t,e){return z(t,(function(t){var r=e.length;return function(t,e){return 2==e?function(e,r){return t.apply(void 0,arguments)}:function(e){return t.apply(void 0,arguments)}}(R(a(t,r),e),r)}))}(e,r);var o=!f&&n.iterateeAry[t];if(o)return function(t,e){return z(t,(function(t){return"function"==typeof t?a(t,e):t}))}(e,o)}return e}function C(t,e,r){if(d.fixed&&(g||!n.skipFixed[t])){var o=n.methodSpread[t],a=o&&o.start;return void 0===a?b(e,r):function(t,e){return function(){for(var r=arguments.length,n=r-1,o=Array(r);r--;)o[r]=arguments[r];var a=o[e],u=o.slice(0,e);return a&&i.apply(u,a),e!=n&&i.apply(u,o.slice(e+1)),t.apply(this,u)}}(e,a)}return e}function P(t,e,r){return d.rearg&&r>1&&(y||!n.skipRearg[t])?R(e,n.methodRearg[t]||n.aryRearg[r]):e}function D(t,e){for(var r=-1,n=(e=S(e)).length,o=n-1,i=A(Object(t)),a=i;null!=a&&++r<n;){var u=e[r],s=a[u];null==s||E(s)||I(s)||O(s)||(a[u]=A(r==o?s:Object(s))),a=a[u]}return i}function T(e,r){var o=n.aliasToReal[e]||e,i=n.remap[o]||o,a=l;return function(e){var n=f?m:x,u=f?m[i]:r,s=_(_({},a),e);return t(n,o,u,s)}}function z(t,e){return function(){var r=arguments.length;if(!r)return t();for(var n=Array(r);r--;)n[r]=arguments[r];var o=d.rearg?0:r-1;return n[o]=e(n[o]),t.apply(void 0,n)}}function q(t,e,r){var o,i=n.aliasToReal[t]||t,a=e,c=L[i];return c?a=c(e):d.immutable&&(n.mutate.array[i]?a=s(e,u):n.mutate.object[i]?a=s(e,function(t){return function(e){return t({},e)}}(e)):n.mutate.set[i]&&(a=s(e,D))),j(F,(function(t){return j(n.aryMethod[t],(function(e){if(i==e){var r=n.methodSpread[i],u=r&&r.afterRearg;return o=u?C(i,P(i,a,t),t):P(i,C(i,a,t),t),o=function(t,e,r){return v||d.curry&&r>1?w(e,r):e}(0,o=M(i,o),t),!1}})),!o})),o||(o=a),o==e&&(o=v?w(o,1):function(){return e.apply(this,arguments)}),o.convert=T(i,e),o.placeholder=e.placeholder=r,o}if(!p)return q(r,c,h);var N=c,U=[];return j(F,(function(t){j(n.aryMethod[t],(function(t){var e=N[n.remap[t]||t];e&&U.push([t,q(t,e,N)])}))})),j(k(N),(function(t){var e=N[t];if("function"==typeof e){for(var r=U.length;r--;)if(U[r][0]==t)return;e.convert=T(t,e),U.push([t,e])}})),j(U,(function(t){N[t[0]]=t[1]})),N.convert=function(t){return N.runInContext.convert(t)(void 0)},N.placeholder=N,j(k(N),(function(t){j(n.realToAlias[t]||[],(function(e){N[e]=N[t]}))})),N}},6962:function(t,e){e.aliasToReal={each:"forEach",eachRight:"forEachRight",entries:"toPairs",entriesIn:"toPairsIn",extend:"assignIn",extendAll:"assignInAll",extendAllWith:"assignInAllWith",extendWith:"assignInWith",first:"head",conforms:"conformsTo",matches:"isMatch",property:"get",__:"placeholder",F:"stubFalse",T:"stubTrue",all:"every",allPass:"overEvery",always:"constant",any:"some",anyPass:"overSome",apply:"spread",assoc:"set",assocPath:"set",complement:"negate",compose:"flowRight",contains:"includes",dissoc:"unset",dissocPath:"unset",dropLast:"dropRight",dropLastWhile:"dropRightWhile",equals:"isEqual",identical:"eq",indexBy:"keyBy",init:"initial",invertObj:"invert",juxt:"over",omitAll:"omit",nAry:"ary",path:"get",pathEq:"matchesProperty",pathOr:"getOr",paths:"at",pickAll:"pick",pipe:"flow",pluck:"map",prop:"get",propEq:"matchesProperty",propOr:"getOr",props:"at",symmetricDifference:"xor",symmetricDifferenceBy:"xorBy",symmetricDifferenceWith:"xorWith",takeLast:"takeRight",takeLastWhile:"takeRightWhile",unapply:"rest",unnest:"flatten",useWith:"overArgs",where:"conformsTo",whereEq:"isMatch",zipObj:"zipObject"},e.aryMethod={1:["assignAll","assignInAll","attempt","castArray","ceil","create","curry","curryRight","defaultsAll","defaultsDeepAll","floor","flow","flowRight","fromPairs","invert","iteratee","memoize","method","mergeAll","methodOf","mixin","nthArg","over","overEvery","overSome","rest","reverse","round","runInContext","spread","template","trim","trimEnd","trimStart","uniqueId","words","zipAll"],2:["add","after","ary","assign","assignAllWith","assignIn","assignInAllWith","at","before","bind","bindAll","bindKey","chunk","cloneDeepWith","cloneWith","concat","conformsTo","countBy","curryN","curryRightN","debounce","defaults","defaultsDeep","defaultTo","delay","difference","divide","drop","dropRight","dropRightWhile","dropWhile","endsWith","eq","every","filter","find","findIndex","findKey","findLast","findLastIndex","findLastKey","flatMap","flatMapDeep","flattenDepth","forEach","forEachRight","forIn","forInRight","forOwn","forOwnRight","get","groupBy","gt","gte","has","hasIn","includes","indexOf","intersection","invertBy","invoke","invokeMap","isEqual","isMatch","join","keyBy","lastIndexOf","lt","lte","map","mapKeys","mapValues","matchesProperty","maxBy","meanBy","merge","mergeAllWith","minBy","multiply","nth","omit","omitBy","overArgs","pad","padEnd","padStart","parseInt","partial","partialRight","partition","pick","pickBy","propertyOf","pull","pullAll","pullAt","random","range","rangeRight","rearg","reject","remove","repeat","restFrom","result","sampleSize","some","sortBy","sortedIndex","sortedIndexOf","sortedLastIndex","sortedLastIndexOf","sortedUniqBy","split","spreadFrom","startsWith","subtract","sumBy","take","takeRight","takeRightWhile","takeWhile","tap","throttle","thru","times","trimChars","trimCharsEnd","trimCharsStart","truncate","union","uniqBy","uniqWith","unset","unzipWith","without","wrap","xor","zip","zipObject","zipObjectDeep"],3:["assignInWith","assignWith","clamp","differenceBy","differenceWith","findFrom","findIndexFrom","findLastFrom","findLastIndexFrom","getOr","includesFrom","indexOfFrom","inRange","intersectionBy","intersectionWith","invokeArgs","invokeArgsMap","isEqualWith","isMatchWith","flatMapDepth","lastIndexOfFrom","mergeWith","orderBy","padChars","padCharsEnd","padCharsStart","pullAllBy","pullAllWith","rangeStep","rangeStepRight","reduce","reduceRight","replace","set","slice","sortedIndexBy","sortedLastIndexBy","transform","unionBy","unionWith","update","xorBy","xorWith","zipWith"],4:["fill","setWith","updateWith"]},e.aryRearg={2:[1,0],3:[2,0,1],4:[3,2,0,1]},e.iterateeAry={dropRightWhile:1,dropWhile:1,every:1,filter:1,find:1,findFrom:1,findIndex:1,findIndexFrom:1,findKey:1,findLast:1,findLastFrom:1,findLastIndex:1,findLastIndexFrom:1,findLastKey:1,flatMap:1,flatMapDeep:1,flatMapDepth:1,forEach:1,forEachRight:1,forIn:1,forInRight:1,forOwn:1,forOwnRight:1,map:1,mapKeys:1,mapValues:1,partition:1,reduce:2,reduceRight:2,reject:1,remove:1,some:1,takeRightWhile:1,takeWhile:1,times:1,transform:2},e.iterateeRearg={mapKeys:[1],reduceRight:[1,0]},e.methodRearg={assignInAllWith:[1,0],assignInWith:[1,2,0],assignAllWith:[1,0],assignWith:[1,2,0],differenceBy:[1,2,0],differenceWith:[1,2,0],getOr:[2,1,0],intersectionBy:[1,2,0],intersectionWith:[1,2,0],isEqualWith:[1,2,0],isMatchWith:[2,1,0],mergeAllWith:[1,0],mergeWith:[1,2,0],padChars:[2,1,0],padCharsEnd:[2,1,0],padCharsStart:[2,1,0],pullAllBy:[2,1,0],pullAllWith:[2,1,0],rangeStep:[1,2,0],rangeStepRight:[1,2,0],setWith:[3,1,2,0],sortedIndexBy:[2,1,0],sortedLastIndexBy:[2,1,0],unionBy:[1,2,0],unionWith:[1,2,0],updateWith:[3,1,2,0],xorBy:[1,2,0],xorWith:[1,2,0],zipWith:[1,2,0]},e.methodSpread={assignAll:{start:0},assignAllWith:{start:0},assignInAll:{start:0},assignInAllWith:{start:0},defaultsAll:{start:0},defaultsDeepAll:{start:0},invokeArgs:{start:2},invokeArgsMap:{start:2},mergeAll:{start:0},mergeAllWith:{start:0},partial:{start:1},partialRight:{start:1},without:{start:1},zipAll:{start:0}},e.mutate={array:{fill:!0,pull:!0,pullAll:!0,pullAllBy:!0,pullAllWith:!0,pullAt:!0,remove:!0,reverse:!0},object:{assign:!0,assignAll:!0,assignAllWith:!0,assignIn:!0,assignInAll:!0,assignInAllWith:!0,assignInWith:!0,assignWith:!0,defaults:!0,defaultsAll:!0,defaultsDeep:!0,defaultsDeepAll:!0,merge:!0,mergeAll:!0,mergeAllWith:!0,mergeWith:!0},set:{set:!0,setWith:!0,unset:!0,update:!0,updateWith:!0}},e.realToAlias=function(){var t=Object.prototype.hasOwnProperty,r=e.aliasToReal,n={};for(var o in r){var i=r[o];t.call(n,i)?n[i].push(o):n[i]=[o]}return n}(),e.remap={assignAll:"assign",assignAllWith:"assignWith",assignInAll:"assignIn",assignInAllWith:"assignInWith",curryN:"curry",curryRightN:"curryRight",defaultsAll:"defaults",defaultsDeepAll:"defaultsDeep",findFrom:"find",findIndexFrom:"findIndex",findLastFrom:"findLast",findLastIndexFrom:"findLastIndex",getOr:"get",includesFrom:"includes",indexOfFrom:"indexOf",invokeArgs:"invoke",invokeArgsMap:"invokeMap",lastIndexOfFrom:"lastIndexOf",mergeAll:"merge",mergeAllWith:"mergeWith",padChars:"pad",padCharsEnd:"padEnd",padCharsStart:"padStart",propertyOf:"get",rangeStep:"range",rangeStepRight:"rangeRight",restFrom:"rest",spreadFrom:"spread",trimChars:"trim",trimCharsEnd:"trimEnd",trimCharsStart:"trimStart",zipAll:"zip"},e.skipFixed={castArray:!0,flow:!0,flowRight:!0,iteratee:!0,mixin:!0,rearg:!0,runInContext:!0},e.skipRearg={add:!0,assign:!0,assignIn:!0,bind:!0,bindKey:!0,concat:!0,difference:!0,divide:!0,eq:!0,gt:!0,gte:!0,isEqual:!0,lt:!0,lte:!0,matchesProperty:!0,merge:!0,multiply:!0,overArgs:!0,partial:!0,partialRight:!0,propertyOf:!0,random:!0,range:!0,rangeRight:!0,subtract:!0,zip:!0,zipObject:!0,zipObjectDeep:!0}},7934:function(t,e,r){t.exports={ary:r(4626),assign:r(4733),clone:r(2629),curry:r(9747),forEach:r(8491),isArray:r(6449),isError:r(3546),isFunction:r(1882),isWeakMap:r(7886),iteratee:r(3855),keys:r(8984),rearg:r(4195),toInteger:r(1489),toPath:r(2072)}},9920:function(t,e,r){var n=r(3424),o=r(7934);t.exports=function(t,e,r){return n(o,t,e,r)}},5497:function(t,e,r){var n=r(9920)("filter",r(7612));n.placeholder=r(2874),t.exports=n},9899:function(t,e,r){var n=r(9920)("flow",r(9870));n.placeholder=r(2874),t.exports=n},2093:function(t,e,r){var n=r(9920)("groupBy",r(2013));n.placeholder=r(2874),t.exports=n},8821:function(t,e,r){var n=r(9920)("map",r(5378));n.placeholder=r(2874),t.exports=n},2874:function(t){t.exports={}},1333:function(t,e,r){var n=r(9920)("reverse",r(7126));n.placeholder=r(2874),t.exports=n},854:function(t,e,r){var n=r(9920)("sortBy",r(3031));n.placeholder=r(2874),t.exports=n},2013:function(t,e,r){var n=r(3360),o=r(2e3),i=Object.prototype.hasOwnProperty,a=o((function(t,e,r){i.call(t,r)?t[r].push(e):n(t,r,[e])}));t.exports=a},3546:function(t,e,r){var n=r(2552),o=r(346),i=r(1331);t.exports=function(t){if(!o(t))return!1;var e=n(t);return"[object Error]"==e||"[object DOMException]"==e||"string"==typeof t.message&&"string"==typeof t.name&&!i(t)}},7730:function(t,e,r){var n=r(9172),o=r(7301),i=r(6009),a=i&&i.isMap,u=a?o(a):n;t.exports=u},1331:function(t,e,r){var n=r(2552),o=r(8879),i=r(346),a=Function.prototype,u=Object.prototype,s=a.toString,c=u.hasOwnProperty,l=s.call(Object);t.exports=function(t){if(!i(t)||"[object Object]"!=n(t))return!1;var e=o(t);if(null===e)return!0;var r=c.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&s.call(r)==l}},8440:function(t,e,r){var n=r(6038),o=r(7301),i=r(6009),a=i&&i.isSet,u=a?o(a):n;t.exports=u},7886:function(t,e,r){var n=r(5861),o=r(346);t.exports=function(t){return o(t)&&"[object WeakMap]"==n(t)}},3855:function(t,e,r){var n=r(9999),o=r(5389);t.exports=function(t){return o("function"==typeof t?t:n(t,1))}},7241:function(t,e,r){var n=r(695),o=r(2903),i=r(4894);t.exports=function(t){return i(t)?n(t,!0):o(t)}},5378:function(t,e,r){var n=r(4932),o=r(5389),i=r(5128),a=r(6449);t.exports=function(t,e){return(a(t)?n:i)(t,o(e,3))}},3950:function(t){t.exports=function(){}},4195:function(t,e,r){var n=r(6977),o=r(8816),i=o((function(t,e){return n(t,256,void 0,void 0,void 0,e)}));t.exports=i},3472:function(t,e,r){var n=r(3222);t.exports=function(){var t=arguments,e=n(t[0]);return t.length<3?e:e.replace(t[1],t[2])}},7126:function(t){var e=Array.prototype.reverse;t.exports=function(t){return null==t?t:e.call(t)}},7400:function(t,e,r){var n=r(9374),o=1/0;t.exports=function(t){return t?(t=n(t))===o||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},1489:function(t,e,r){var n=r(7400);t.exports=function(t){var e=n(t),r=e%1;return e==e?r?e-r:e:0}},2072:function(t,e,r){var n=r(4932),o=r(3007),i=r(6449),a=r(4394),u=r(1802),s=r(7797),c=r(3222);t.exports=function(t){return i(t)?n(t,s):a(t)?[t]:o(u(c(t)))}},3758:function(t,e,r){var n=r(980),o=r(8398),i=r(4033),a=r(6449),u=r(346),s=r(257),c=Object.prototype.hasOwnProperty;function l(t){if(u(t)&&!a(t)&&!(t instanceof n)){if(t instanceof o)return t;if(c.call(t,"__wrapped__"))return s(t)}return new o(t)}l.prototype=i.prototype,l.prototype.constructor=l,t.exports=l}}]);
//# sourceMappingURL=component---src-pages-series-jsx-6eaadf59195cbf16df69.js.map