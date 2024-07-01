/*!
 * (C) Law Widgets https://laws.africa - GNU Lesser General Public License 3
 */
var r="top";var n="bottom";var e="right";var t="left";var a="auto";var i=[r,n,e,t];var o="start";var u="end";var f="clippingParents";var v="viewport";var c="popper";var s="reference";var l=i.reduce((function(r,n){return r.concat([n+"-"+o,n+"-"+u])}),[]);var d=[].concat(i,[a]).reduce((function(r,n){return r.concat([n,n+"-"+o,n+"-"+u])}),[]);var p="beforeRead";var m="read";var b="afterRead";var h="beforeMain";var y="main";var w="afterMain";var g="beforeWrite";var O="write";var x="afterWrite";var j=[p,m,b,h,y,w,g,O,x];function k(r){return r?(r.nodeName||"").toLowerCase():null}function T(r){if(r==null){return window}if(r.toString()!=="[object Window]"){var n=r.ownerDocument;return n?n.defaultView||window:window}return r}function A(r){var n=T(r).Element;return r instanceof n||r instanceof Element}function M(r){var n=T(r).HTMLElement;return r instanceof n||r instanceof HTMLElement}function S(r){if(typeof ShadowRoot==="undefined"){return false}var n=T(r).ShadowRoot;return r instanceof n||r instanceof ShadowRoot}function E(r){var n=r.state;Object.keys(n.elements).forEach((function(r){var e=n.styles[r]||{};var t=n.attributes[r]||{};var a=n.elements[r];if(!M(a)||!k(a)){return}Object.assign(a.style,e);Object.keys(t).forEach((function(r){var n=t[r];if(n===false){a.removeAttribute(r)}else{a.setAttribute(r,n===true?"":n)}}))}))}function B(r){var n=r.state;var e={popper:{position:n.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(n.elements.popper.style,e.popper);n.styles=e;if(n.elements.arrow){Object.assign(n.elements.arrow.style,e.arrow)}return function(){Object.keys(n.elements).forEach((function(r){var t=n.elements[r];var a=n.attributes[r]||{};var i=Object.keys(n.styles.hasOwnProperty(r)?n.styles[r]:e[r]);var o=i.reduce((function(r,n){r[n]="";return r}),{});if(!M(t)||!k(t)){return}Object.assign(t.style,o);Object.keys(a).forEach((function(r){t.removeAttribute(r)}))}))}}const C={name:"applyStyles",enabled:true,phase:"write",fn:E,effect:B,requires:["computeStyles"]};function q(r){return r.split("-")[0]}var H=Math.max;var R=Math.min;var L=Math.round;function P(){var r=navigator.userAgentData;if(r!=null&&r.brands&&Array.isArray(r.brands)){return r.brands.map((function(r){return r.brand+"/"+r.version})).join(" ")}return navigator.userAgent}function U(){return!/^((?!chrome|android).)*safari/i.test(P())}function W(r,n,e){if(n===void 0){n=false}if(e===void 0){e=false}var t=r.getBoundingClientRect();var a=1;var i=1;if(n&&M(r)){a=r.offsetWidth>0?L(t.width)/r.offsetWidth||1:1;i=r.offsetHeight>0?L(t.height)/r.offsetHeight||1:1}var o=A(r)?T(r):window,u=o.visualViewport;var f=!U()&&e;var v=(t.left+(f&&u?u.offsetLeft:0))/a;var c=(t.top+(f&&u?u.offsetTop:0))/i;var s=t.width/a;var l=t.height/i;return{width:s,height:l,top:c,right:v+s,bottom:c+l,left:v,x:v,y:c}}function F(r){var n=W(r);var e=r.offsetWidth;var t=r.offsetHeight;if(Math.abs(n.width-e)<=1){e=n.width}if(Math.abs(n.height-t)<=1){t=n.height}return{x:r.offsetLeft,y:r.offsetTop,width:e,height:t}}function I(r,n){var e=n.getRootNode&&n.getRootNode();if(r.contains(n)){return true}else if(e&&S(e)){var t=n;do{if(t&&r.isSameNode(t)){return true}t=t.parentNode||t.host}while(t)}return false}function D(r){return T(r).getComputedStyle(r)}function z(r){return["table","td","th"].indexOf(k(r))>=0}function N(r){return((A(r)?r.ownerDocument:r.document)||window.document).documentElement}function V(r){if(k(r)==="html"){return r}return r.assignedSlot||r.parentNode||(S(r)?r.host:null)||N(r)}function $(r){if(!M(r)||D(r).position==="fixed"){return null}return r.offsetParent}function J(r){var n=/firefox/i.test(P());var e=/Trident/i.test(P());if(e&&M(r)){var t=D(r);if(t.position==="fixed"){return null}}var a=V(r);if(S(a)){a=a.host}while(M(a)&&["html","body"].indexOf(k(a))<0){var i=D(a);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||n&&i.willChange==="filter"||n&&i.filter&&i.filter!=="none"){return a}else{a=a.parentNode}}return null}function _(r){var n=T(r);var e=$(r);while(e&&z(e)&&D(e).position==="static"){e=$(e)}if(e&&(k(e)==="html"||k(e)==="body"&&D(e).position==="static")){return n}return e||J(r)||n}function G(r){return["top","bottom"].indexOf(r)>=0?"x":"y"}function K(r,n,e){return H(r,R(n,e))}function Q(r,n,e){var t=K(r,n,e);return t>e?e:t}function X(){return{top:0,right:0,bottom:0,left:0}}function Y(r){return Object.assign({},X(),r)}function Z(r,n){return n.reduce((function(n,e){n[e]=r;return n}),{})}var rr=function r(n,e){n=typeof n==="function"?n(Object.assign({},e.rects,{placement:e.placement})):n;return Y(typeof n!=="number"?n:Z(n,i))};function nr(a){var i;var o=a.state,u=a.name,f=a.options;var v=o.elements.arrow;var c=o.modifiersData.popperOffsets;var s=q(o.placement);var l=G(s);var d=[t,e].indexOf(s)>=0;var p=d?"height":"width";if(!v||!c){return}var m=rr(f.padding,o);var b=F(v);var h=l==="y"?r:t;var y=l==="y"?n:e;var w=o.rects.reference[p]+o.rects.reference[l]-c[l]-o.rects.popper[p];var g=c[l]-o.rects.reference[l];var O=_(v);var x=O?l==="y"?O.clientHeight||0:O.clientWidth||0:0;var j=w/2-g/2;var k=m[h];var T=x-b[p]-m[y];var A=x/2-b[p]/2+j;var M=K(k,A,T);var S=l;o.modifiersData[u]=(i={},i[S]=M,i.centerOffset=M-A,i)}function er(r){var n=r.state,e=r.options;var t=e.element,a=t===void 0?"[data-popper-arrow]":t;if(a==null){return}if(typeof a==="string"){a=n.elements.popper.querySelector(a);if(!a){return}}if(!I(n.elements.popper,a)){return}n.elements.arrow=a}const tr={name:"arrow",enabled:true,phase:"main",fn:nr,effect:er,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ar(r){return r.split("-")[1]}var ir={top:"auto",right:"auto",bottom:"auto",left:"auto"};function or(r,n){var e=r.x,t=r.y;var a=n.devicePixelRatio||1;return{x:L(e*a)/a||0,y:L(t*a)/a||0}}function ur(a){var i;var o=a.popper,f=a.popperRect,v=a.placement,c=a.variation,s=a.offsets,l=a.position,d=a.gpuAcceleration,p=a.adaptive,m=a.roundOffsets,b=a.isFixed;var h=s.x,y=h===void 0?0:h,w=s.y,g=w===void 0?0:w;var O=typeof m==="function"?m({x:y,y:g}):{x:y,y:g};y=O.x;g=O.y;var x=s.hasOwnProperty("x");var j=s.hasOwnProperty("y");var k=t;var A=r;var M=window;if(p){var S=_(o);var E="clientHeight";var B="clientWidth";if(S===T(o)){S=N(o);if(D(S).position!=="static"&&l==="absolute"){E="scrollHeight";B="scrollWidth"}}S=S;if(v===r||(v===t||v===e)&&c===u){A=n;var C=b&&S===M&&M.visualViewport?M.visualViewport.height:S[E];g-=C-f.height;g*=d?1:-1}if(v===t||(v===r||v===n)&&c===u){k=e;var q=b&&S===M&&M.visualViewport?M.visualViewport.width:S[B];y-=q-f.width;y*=d?1:-1}}var H=Object.assign({position:l},p&&ir);var R=m===true?or({x:y,y:g},T(o)):{x:y,y:g};y=R.x;g=R.y;if(d){var L;return Object.assign({},H,(L={},L[A]=j?"0":"",L[k]=x?"0":"",L.transform=(M.devicePixelRatio||1)<=1?"translate("+y+"px, "+g+"px)":"translate3d("+y+"px, "+g+"px, 0)",L))}return Object.assign({},H,(i={},i[A]=j?g+"px":"",i[k]=x?y+"px":"",i.transform="",i))}function fr(r){var n=r.state,e=r.options;var t=e.gpuAcceleration,a=t===void 0?true:t,i=e.adaptive,o=i===void 0?true:i,u=e.roundOffsets,f=u===void 0?true:u;var v={placement:q(n.placement),variation:ar(n.placement),popper:n.elements.popper,popperRect:n.rects.popper,gpuAcceleration:a,isFixed:n.options.strategy==="fixed"};if(n.modifiersData.popperOffsets!=null){n.styles.popper=Object.assign({},n.styles.popper,ur(Object.assign({},v,{offsets:n.modifiersData.popperOffsets,position:n.options.strategy,adaptive:o,roundOffsets:f})))}if(n.modifiersData.arrow!=null){n.styles.arrow=Object.assign({},n.styles.arrow,ur(Object.assign({},v,{offsets:n.modifiersData.arrow,position:"absolute",adaptive:false,roundOffsets:f})))}n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-placement":n.placement})}const vr={name:"computeStyles",enabled:true,phase:"beforeWrite",fn:fr,data:{}};var cr={passive:true};function sr(r){var n=r.state,e=r.instance,t=r.options;var a=t.scroll,i=a===void 0?true:a,o=t.resize,u=o===void 0?true:o;var f=T(n.elements.popper);var v=[].concat(n.scrollParents.reference,n.scrollParents.popper);if(i){v.forEach((function(r){r.addEventListener("scroll",e.update,cr)}))}if(u){f.addEventListener("resize",e.update,cr)}return function(){if(i){v.forEach((function(r){r.removeEventListener("scroll",e.update,cr)}))}if(u){f.removeEventListener("resize",e.update,cr)}}}const lr={name:"eventListeners",enabled:true,phase:"write",fn:function r(){},effect:sr,data:{}};var dr={left:"right",right:"left",bottom:"top",top:"bottom"};function pr(r){return r.replace(/left|right|bottom|top/g,(function(r){return dr[r]}))}var mr={start:"end",end:"start"};function br(r){return r.replace(/start|end/g,(function(r){return mr[r]}))}function hr(r){var n=T(r);var e=n.pageXOffset;var t=n.pageYOffset;return{scrollLeft:e,scrollTop:t}}function yr(r){return W(N(r)).left+hr(r).scrollLeft}function wr(r,n){var e=T(r);var t=N(r);var a=e.visualViewport;var i=t.clientWidth;var o=t.clientHeight;var u=0;var f=0;if(a){i=a.width;o=a.height;var v=U();if(v||!v&&n==="fixed"){u=a.offsetLeft;f=a.offsetTop}}return{width:i,height:o,x:u+yr(r),y:f}}function gr(r){var n;var e=N(r);var t=hr(r);var a=(n=r.ownerDocument)==null?void 0:n.body;var i=H(e.scrollWidth,e.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0);var o=H(e.scrollHeight,e.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0);var u=-t.scrollLeft+yr(r);var f=-t.scrollTop;if(D(a||e).direction==="rtl"){u+=H(e.clientWidth,a?a.clientWidth:0)-i}return{width:i,height:o,x:u,y:f}}function Or(r){var n=D(r),e=n.overflow,t=n.overflowX,a=n.overflowY;return/auto|scroll|overlay|hidden/.test(e+a+t)}function xr(r){if(["html","body","#document"].indexOf(k(r))>=0){return r.ownerDocument.body}if(M(r)&&Or(r)){return r}return xr(V(r))}function jr(r,n){var e;if(n===void 0){n=[]}var t=xr(r);var a=t===((e=r.ownerDocument)==null?void 0:e.body);var i=T(t);var o=a?[i].concat(i.visualViewport||[],Or(t)?t:[]):t;var u=n.concat(o);return a?u:u.concat(jr(V(o)))}function kr(r){return Object.assign({},r,{left:r.x,top:r.y,right:r.x+r.width,bottom:r.y+r.height})}function Tr(r,n){var e=W(r,false,n==="fixed");e.top=e.top+r.clientTop;e.left=e.left+r.clientLeft;e.bottom=e.top+r.clientHeight;e.right=e.left+r.clientWidth;e.width=r.clientWidth;e.height=r.clientHeight;e.x=e.left;e.y=e.top;return e}function Ar(r,n,e){return n===v?kr(wr(r,e)):A(n)?Tr(n,e):kr(gr(N(r)))}function Mr(r){var n=jr(V(r));var e=["absolute","fixed"].indexOf(D(r).position)>=0;var t=e&&M(r)?_(r):r;if(!A(t)){return[]}return n.filter((function(r){return A(r)&&I(r,t)&&k(r)!=="body"}))}function Sr(r,n,e,t){var a=n==="clippingParents"?Mr(r):[].concat(n);var i=[].concat(a,[e]);var o=i[0];var u=i.reduce((function(n,e){var a=Ar(r,e,t);n.top=H(a.top,n.top);n.right=R(a.right,n.right);n.bottom=R(a.bottom,n.bottom);n.left=H(a.left,n.left);return n}),Ar(r,o,t));u.width=u.right-u.left;u.height=u.bottom-u.top;u.x=u.left;u.y=u.top;return u}function Er(a){var i=a.reference,f=a.element,v=a.placement;var c=v?q(v):null;var s=v?ar(v):null;var l=i.x+i.width/2-f.width/2;var d=i.y+i.height/2-f.height/2;var p;switch(c){case r:p={x:l,y:i.y-f.height};break;case n:p={x:l,y:i.y+i.height};break;case e:p={x:i.x+i.width,y:d};break;case t:p={x:i.x-f.width,y:d};break;default:p={x:i.x,y:i.y}}var m=c?G(c):null;if(m!=null){var b=m==="y"?"height":"width";switch(s){case o:p[m]=p[m]-(i[b]/2-f[b]/2);break;case u:p[m]=p[m]+(i[b]/2-f[b]/2);break}}return p}function Br(t,a){if(a===void 0){a={}}var o=a,u=o.placement,l=u===void 0?t.placement:u,d=o.strategy,p=d===void 0?t.strategy:d,m=o.boundary,b=m===void 0?f:m,h=o.rootBoundary,y=h===void 0?v:h,w=o.elementContext,g=w===void 0?c:w,O=o.altBoundary,x=O===void 0?false:O,j=o.padding,k=j===void 0?0:j;var T=Y(typeof k!=="number"?k:Z(k,i));var M=g===c?s:c;var S=t.rects.popper;var E=t.elements[x?M:g];var B=Sr(A(E)?E:E.contextElement||N(t.elements.popper),b,y,p);var C=W(t.elements.reference);var q=Er({reference:C,element:S,strategy:"absolute",placement:l});var H=kr(Object.assign({},S,q));var R=g===c?H:C;var L={top:B.top-R.top+T.top,bottom:R.bottom-B.bottom+T.bottom,left:B.left-R.left+T.left,right:R.right-B.right+T.right};var P=t.modifiersData.offset;if(g===c&&P){var U=P[l];Object.keys(L).forEach((function(t){var a=[e,n].indexOf(t)>=0?1:-1;var i=[r,n].indexOf(t)>=0?"y":"x";L[t]+=U[i]*a}))}return L}function Cr(r,n){if(n===void 0){n={}}var e=n,t=e.placement,a=e.boundary,o=e.rootBoundary,u=e.padding,f=e.flipVariations,v=e.allowedAutoPlacements,c=v===void 0?d:v;var s=ar(t);var p=s?f?l:l.filter((function(r){return ar(r)===s})):i;var m=p.filter((function(r){return c.indexOf(r)>=0}));if(m.length===0){m=p}var b=m.reduce((function(n,e){n[e]=Br(r,{placement:e,boundary:a,rootBoundary:o,padding:u})[q(e)];return n}),{});return Object.keys(b).sort((function(r,n){return b[r]-b[n]}))}function qr(r){if(q(r)===a){return[]}var n=pr(r);return[br(r),n,br(n)]}function Hr(i){var u=i.state,f=i.options,v=i.name;if(u.modifiersData[v]._skip){return}var c=f.mainAxis,s=c===void 0?true:c,l=f.altAxis,d=l===void 0?true:l,p=f.fallbackPlacements,m=f.padding,b=f.boundary,h=f.rootBoundary,y=f.altBoundary,w=f.flipVariations,g=w===void 0?true:w,O=f.allowedAutoPlacements;var x=u.options.placement;var j=q(x);var k=j===x;var T=p||(k||!g?[pr(x)]:qr(x));var A=[x].concat(T).reduce((function(r,n){return r.concat(q(n)===a?Cr(u,{placement:n,boundary:b,rootBoundary:h,padding:m,flipVariations:g,allowedAutoPlacements:O}):n)}),[]);var M=u.rects.reference;var S=u.rects.popper;var E=new Map;var B=true;var C=A[0];for(var H=0;H<A.length;H++){var R=A[H];var L=q(R);var P=ar(R)===o;var U=[r,n].indexOf(L)>=0;var W=U?"width":"height";var F=Br(u,{placement:R,boundary:b,rootBoundary:h,altBoundary:y,padding:m});var I=U?P?e:t:P?n:r;if(M[W]>S[W]){I=pr(I)}var D=pr(I);var z=[];if(s){z.push(F[L]<=0)}if(d){z.push(F[I]<=0,F[D]<=0)}if(z.every((function(r){return r}))){C=R;B=false;break}E.set(R,z)}if(B){var N=g?3:1;var V=function r(n){var e=A.find((function(r){var e=E.get(r);if(e){return e.slice(0,n).every((function(r){return r}))}}));if(e){C=e;return"break"}};for(var $=N;$>0;$--){var J=V($);if(J==="break")break}}if(u.placement!==C){u.modifiersData[v]._skip=true;u.placement=C;u.reset=true}}const Rr={name:"flip",enabled:true,phase:"main",fn:Hr,requiresIfExists:["offset"],data:{_skip:false}};function Lr(r,n,e){if(e===void 0){e={x:0,y:0}}return{top:r.top-n.height-e.y,right:r.right-n.width+e.x,bottom:r.bottom-n.height+e.y,left:r.left-n.width-e.x}}function Pr(a){return[r,e,n,t].some((function(r){return a[r]>=0}))}function Ur(r){var n=r.state,e=r.name;var t=n.rects.reference;var a=n.rects.popper;var i=n.modifiersData.preventOverflow;var o=Br(n,{elementContext:"reference"});var u=Br(n,{altBoundary:true});var f=Lr(o,t);var v=Lr(u,a,i);var c=Pr(f);var s=Pr(v);n.modifiersData[e]={referenceClippingOffsets:f,popperEscapeOffsets:v,isReferenceHidden:c,hasPopperEscaped:s};n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":s})}const Wr={name:"hide",enabled:true,phase:"main",requiresIfExists:["preventOverflow"],fn:Ur};function Fr(n,a,i){var o=q(n);var u=[t,r].indexOf(o)>=0?-1:1;var f=typeof i==="function"?i(Object.assign({},a,{placement:n})):i,v=f[0],c=f[1];v=v||0;c=(c||0)*u;return[t,e].indexOf(o)>=0?{x:c,y:v}:{x:v,y:c}}function Ir(r){var n=r.state,e=r.options,t=r.name;var a=e.offset,i=a===void 0?[0,0]:a;var o=d.reduce((function(r,e){r[e]=Fr(e,n.rects,i);return r}),{});var u=o[n.placement],f=u.x,v=u.y;if(n.modifiersData.popperOffsets!=null){n.modifiersData.popperOffsets.x+=f;n.modifiersData.popperOffsets.y+=v}n.modifiersData[t]=o}const Dr={name:"offset",enabled:true,phase:"main",requires:["popperOffsets"],fn:Ir};function zr(r){var n=r.state,e=r.name;n.modifiersData[e]=Er({reference:n.rects.reference,element:n.rects.popper,strategy:"absolute",placement:n.placement})}const Nr={name:"popperOffsets",enabled:true,phase:"read",fn:zr,data:{}};function Vr(r){return r==="x"?"y":"x"}function $r(a){var i=a.state,u=a.options,f=a.name;var v=u.mainAxis,c=v===void 0?true:v,s=u.altAxis,l=s===void 0?false:s,d=u.boundary,p=u.rootBoundary,m=u.altBoundary,b=u.padding,h=u.tether,y=h===void 0?true:h,w=u.tetherOffset,g=w===void 0?0:w;var O=Br(i,{boundary:d,rootBoundary:p,padding:b,altBoundary:m});var x=q(i.placement);var j=ar(i.placement);var k=!j;var T=G(x);var A=Vr(T);var M=i.modifiersData.popperOffsets;var S=i.rects.reference;var E=i.rects.popper;var B=typeof g==="function"?g(Object.assign({},i.rects,{placement:i.placement})):g;var C=typeof B==="number"?{mainAxis:B,altAxis:B}:Object.assign({mainAxis:0,altAxis:0},B);var L=i.modifiersData.offset?i.modifiersData.offset[i.placement]:null;var P={x:0,y:0};if(!M){return}if(c){var U;var W=T==="y"?r:t;var I=T==="y"?n:e;var D=T==="y"?"height":"width";var z=M[T];var N=z+O[W];var V=z-O[I];var $=y?-E[D]/2:0;var J=j===o?S[D]:E[D];var Y=j===o?-E[D]:-S[D];var Z=i.elements.arrow;var rr=y&&Z?F(Z):{width:0,height:0};var nr=i.modifiersData["arrow#persistent"]?i.modifiersData["arrow#persistent"].padding:X();var er=nr[W];var tr=nr[I];var ir=K(0,S[D],rr[D]);var or=k?S[D]/2-$-ir-er-C.mainAxis:J-ir-er-C.mainAxis;var ur=k?-S[D]/2+$+ir+tr+C.mainAxis:Y+ir+tr+C.mainAxis;var fr=i.elements.arrow&&_(i.elements.arrow);var vr=fr?T==="y"?fr.clientTop||0:fr.clientLeft||0:0;var cr=(U=L==null?void 0:L[T])!=null?U:0;var sr=z+or-cr-vr;var lr=z+ur-cr;var dr=K(y?R(N,sr):N,z,y?H(V,lr):V);M[T]=dr;P[T]=dr-z}if(l){var pr;var mr=T==="x"?r:t;var br=T==="x"?n:e;var hr=M[A];var yr=A==="y"?"height":"width";var wr=hr+O[mr];var gr=hr-O[br];var Or=[r,t].indexOf(x)!==-1;var xr=(pr=L==null?void 0:L[A])!=null?pr:0;var jr=Or?wr:hr-S[yr]-E[yr]-xr+C.altAxis;var kr=Or?hr+S[yr]+E[yr]-xr-C.altAxis:gr;var Tr=y&&Or?Q(jr,hr,kr):K(y?jr:wr,hr,y?kr:gr);M[A]=Tr;P[A]=Tr-hr}i.modifiersData[f]=P}const Jr={name:"preventOverflow",enabled:true,phase:"main",fn:$r,requiresIfExists:["offset"]};function _r(r){return{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}}function Gr(r){if(r===T(r)||!M(r)){return hr(r)}else{return _r(r)}}function Kr(r){var n=r.getBoundingClientRect();var e=L(n.width)/r.offsetWidth||1;var t=L(n.height)/r.offsetHeight||1;return e!==1||t!==1}function Qr(r,n,e){if(e===void 0){e=false}var t=M(n);var a=M(n)&&Kr(n);var i=N(n);var o=W(r,a,e);var u={scrollLeft:0,scrollTop:0};var f={x:0,y:0};if(t||!t&&!e){if(k(n)!=="body"||Or(i)){u=Gr(n)}if(M(n)){f=W(n,true);f.x+=n.clientLeft;f.y+=n.clientTop}else if(i){f.x=yr(i)}}return{x:o.left+u.scrollLeft-f.x,y:o.top+u.scrollTop-f.y,width:o.width,height:o.height}}function Xr(r){var n=new Map;var e=new Set;var t=[];r.forEach((function(r){n.set(r.name,r)}));function a(r){e.add(r.name);var i=[].concat(r.requires||[],r.requiresIfExists||[]);i.forEach((function(r){if(!e.has(r)){var t=n.get(r);if(t){a(t)}}}));t.push(r)}r.forEach((function(r){if(!e.has(r.name)){a(r)}}));return t}function Yr(r){var n=Xr(r);return j.reduce((function(r,e){return r.concat(n.filter((function(r){return r.phase===e})))}),[])}function Zr(r){var n;return function(){if(!n){n=new Promise((function(e){Promise.resolve().then((function(){n=undefined;e(r())}))}))}return n}}function rn(r){var n=r.reduce((function(r,n){var e=r[n.name];r[n.name]=e?Object.assign({},e,n,{options:Object.assign({},e.options,n.options),data:Object.assign({},e.data,n.data)}):n;return r}),{});return Object.keys(n).map((function(r){return n[r]}))}var nn={placement:"bottom",modifiers:[],strategy:"absolute"};function en(){for(var r=arguments.length,n=new Array(r),e=0;e<r;e++){n[e]=arguments[e]}return!n.some((function(r){return!(r&&typeof r.getBoundingClientRect==="function")}))}function tn(r){if(r===void 0){r={}}var n=r,e=n.defaultModifiers,t=e===void 0?[]:e,a=n.defaultOptions,i=a===void 0?nn:a;return function r(n,e,a){if(a===void 0){a=i}var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},nn,i),modifiersData:{},elements:{reference:n,popper:e},attributes:{},styles:{}};var u=[];var f=false;var v={state:o,setOptions:function r(a){var u=typeof a==="function"?a(o.options):a;s();o.options=Object.assign({},i,o.options,u);o.scrollParents={reference:A(n)?jr(n):n.contextElement?jr(n.contextElement):[],popper:jr(e)};var f=Yr(rn([].concat(t,o.options.modifiers)));o.orderedModifiers=f.filter((function(r){return r.enabled}));c();return v.update()},forceUpdate:function r(){if(f){return}var n=o.elements,e=n.reference,t=n.popper;if(!en(e,t)){return}o.rects={reference:Qr(e,_(t),o.options.strategy==="fixed"),popper:F(t)};o.reset=false;o.placement=o.options.placement;o.orderedModifiers.forEach((function(r){return o.modifiersData[r.name]=Object.assign({},r.data)}));for(var a=0;a<o.orderedModifiers.length;a++){if(o.reset===true){o.reset=false;a=-1;continue}var i=o.orderedModifiers[a],u=i.fn,c=i.options,s=c===void 0?{}:c,l=i.name;if(typeof u==="function"){o=u({state:o,options:s,name:l,instance:v})||o}}},update:Zr((function(){return new Promise((function(r){v.forceUpdate();r(o)}))})),destroy:function r(){s();f=true}};if(!en(n,e)){return v}v.setOptions(a).then((function(r){if(!f&&a.onFirstUpdate){a.onFirstUpdate(r)}}));function c(){o.orderedModifiers.forEach((function(r){var n=r.name,e=r.options,t=e===void 0?{}:e,a=r.effect;if(typeof a==="function"){var i=a({state:o,name:n,instance:v,options:t});var f=function r(){};u.push(i||f)}}))}function s(){u.forEach((function(r){return r()}));u=[]}return v}}var an=[lr,Nr,vr,C,Dr,Rr,Jr,tr,Wr];var on=tn({defaultModifiers:an});
/**!
* tippy.js v6.3.7
* (c) 2017-2021 atomiks
* MIT License
*/var un="tippy-box";var fn="tippy-content";var vn="tippy-backdrop";var cn="tippy-arrow";var sn="tippy-svg-arrow";var ln={passive:true,capture:true};var dn=function r(){return document.body};function pn(r,n,e){if(Array.isArray(r)){var t=r[n];return t==null?Array.isArray(e)?e[n]:e:t}return r}function mn(r,n){var e={}.toString.call(r);return e.indexOf("[object")===0&&e.indexOf(n+"]")>-1}function bn(r,n){return typeof r==="function"?r.apply(void 0,n):r}function hn(r,n){if(n===0){return r}var e;return function(t){clearTimeout(e);e=setTimeout((function(){r(t)}),n)}}function yn(r){return r.split(/\s+/).filter(Boolean)}function wn(r){return[].concat(r)}function gn(r,n){if(r.indexOf(n)===-1){r.push(n)}}function On(r){return r.filter((function(n,e){return r.indexOf(n)===e}))}function xn(r){return r.split("-")[0]}function jn(r){return[].slice.call(r)}function kn(r){return Object.keys(r).reduce((function(n,e){if(r[e]!==undefined){n[e]=r[e]}return n}),{})}function Tn(){return document.createElement("div")}function An(r){return["Element","Fragment"].some((function(n){return mn(r,n)}))}function Mn(r){return mn(r,"NodeList")}function Sn(r){return mn(r,"MouseEvent")}function En(r){return!!(r&&r._tippy&&r._tippy.reference===r)}function Bn(r){if(An(r)){return[r]}if(Mn(r)){return jn(r)}if(Array.isArray(r)){return r}return jn(document.querySelectorAll(r))}function Cn(r,n){r.forEach((function(r){if(r){r.style.transitionDuration=n+"ms"}}))}function qn(r,n){r.forEach((function(r){if(r){r.setAttribute("data-state",n)}}))}function Hn(r){var n;var e=wn(r),t=e[0];return t!=null&&(n=t.ownerDocument)!=null&&n.body?t.ownerDocument:document}function Rn(r,n){var e=n.clientX,t=n.clientY;return r.every((function(r){var n=r.popperRect,a=r.popperState,i=r.props;var o=i.interactiveBorder;var u=xn(a.placement);var f=a.modifiersData.offset;if(!f){return true}var v=u==="bottom"?f.top.y:0;var c=u==="top"?f.bottom.y:0;var s=u==="right"?f.left.x:0;var l=u==="left"?f.right.x:0;var d=n.top-t+v>o;var p=t-n.bottom-c>o;var m=n.left-e+s>o;var b=e-n.right-l>o;return d||p||m||b}))}function Ln(r,n,e){var t=n+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(n){r[t](n,e)}))}function Pn(r,n){var e=n;while(e){var t;if(r.contains(e)){return true}e=e.getRootNode==null?void 0:(t=e.getRootNode())==null?void 0:t.host}return false}var Un={isTouch:false};var Wn=0;function Fn(){if(Un.isTouch){return}Un.isTouch=true;if(window.performance){document.addEventListener("mousemove",In)}}function In(){var r=performance.now();if(r-Wn<20){Un.isTouch=false;document.removeEventListener("mousemove",In)}Wn=r}function Dn(){var r=document.activeElement;if(En(r)){var n=r._tippy;if(r.blur&&!n.state.isVisible){r.blur()}}}function zn(){document.addEventListener("touchstart",Fn,ln);window.addEventListener("blur",Dn)}var Nn=typeof window!=="undefined"&&typeof document!=="undefined";var Vn=Nn?!!window.msCrypto:false;var $n={animateFill:false,followCursor:false,inlinePositioning:false,sticky:false};var Jn={allowHTML:false,animation:"fade",arrow:true,content:"",inertia:false,maxWidth:350,role:"tooltip",theme:"",zIndex:9999};var _n=Object.assign({appendTo:dn,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:true,ignoreAttributes:false,interactive:false,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function r(){},onBeforeUpdate:function r(){},onCreate:function r(){},onDestroy:function r(){},onHidden:function r(){},onHide:function r(){},onMount:function r(){},onShow:function r(){},onShown:function r(){},onTrigger:function r(){},onUntrigger:function r(){},onClickOutside:function r(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:false,touch:true,trigger:"mouseenter focus",triggerTarget:null},$n,Jn);var Gn=Object.keys(_n);var Kn=function r(n){var e=Object.keys(n);e.forEach((function(r){_n[r]=n[r]}))};function Qn(r){var n=r.plugins||[];var e=n.reduce((function(n,e){var t=e.name,a=e.defaultValue;if(t){var i;n[t]=r[t]!==undefined?r[t]:(i=_n[t])!=null?i:a}return n}),{});return Object.assign({},r,e)}function Xn(r,n){var e=n?Object.keys(Qn(Object.assign({},_n,{plugins:n}))):Gn;var t=e.reduce((function(n,e){var t=(r.getAttribute("data-tippy-"+e)||"").trim();if(!t){return n}if(e==="content"){n[e]=t}else{try{n[e]=JSON.parse(t)}catch(r){n[e]=t}}return n}),{});return t}function Yn(r,n){var e=Object.assign({},n,{content:bn(n.content,[r])},n.ignoreAttributes?{}:Xn(r,n.plugins));e.aria=Object.assign({},_n.aria,e.aria);e.aria={expanded:e.aria.expanded==="auto"?n.interactive:e.aria.expanded,content:e.aria.content==="auto"?n.interactive?null:"describedby":e.aria.content};return e}var Zn=function r(){return"innerHTML"};function re(r,n){r[Zn()]=n}function ne(r){var n=Tn();if(r===true){n.className=cn}else{n.className=sn;if(An(r)){n.appendChild(r)}else{re(n,r)}}return n}function ee(r,n){if(An(n.content)){re(r,"");r.appendChild(n.content)}else if(typeof n.content!=="function"){if(n.allowHTML){re(r,n.content)}else{r.textContent=n.content}}}function te(r){var n=r.firstElementChild;var e=jn(n.children);return{box:n,content:e.find((function(r){return r.classList.contains(fn)})),arrow:e.find((function(r){return r.classList.contains(cn)||r.classList.contains(sn)})),backdrop:e.find((function(r){return r.classList.contains(vn)}))}}function ae(r){var n=Tn();var e=Tn();e.className=un;e.setAttribute("data-state","hidden");e.setAttribute("tabindex","-1");var t=Tn();t.className=fn;t.setAttribute("data-state","hidden");ee(t,r.props);n.appendChild(e);e.appendChild(t);a(r.props,r.props);function a(e,t){var a=te(n),i=a.box,o=a.content,u=a.arrow;if(t.theme){i.setAttribute("data-theme",t.theme)}else{i.removeAttribute("data-theme")}if(typeof t.animation==="string"){i.setAttribute("data-animation",t.animation)}else{i.removeAttribute("data-animation")}if(t.inertia){i.setAttribute("data-inertia","")}else{i.removeAttribute("data-inertia")}i.style.maxWidth=typeof t.maxWidth==="number"?t.maxWidth+"px":t.maxWidth;if(t.role){i.setAttribute("role",t.role)}else{i.removeAttribute("role")}if(e.content!==t.content||e.allowHTML!==t.allowHTML){ee(o,r.props)}if(t.arrow){if(!u){i.appendChild(ne(t.arrow))}else if(e.arrow!==t.arrow){i.removeChild(u);i.appendChild(ne(t.arrow))}}else if(u){i.removeChild(u)}}return{popper:n,onUpdate:a}}ae.$$tippy=true;var ie=1;var oe=[];var ue=[];function fe(r,n){var e=Yn(r,Object.assign({},_n,Qn(kn(n))));var t;var a;var i;var o=false;var u=false;var f=false;var v=false;var c;var s;var l;var d=[];var p=hn(Q,e.interactiveDebounce);var m;var b=ie++;var h=null;var y=On(e.plugins);var w={isEnabled:true,isVisible:false,isDestroyed:false,isMounted:false,isShown:false};var g={id:b,reference:r,popper:Tn(),popperInstance:h,props:e,state:w,plugins:y,clearDelayTimeouts:fr,setProps:vr,setContent:cr,show:sr,hide:lr,hideWithInteractivity:dr,enable:or,disable:ur,unmount:pr,destroy:mr};if(!e.render){return g}var O=e.render(g),x=O.popper,j=O.onUpdate;x.setAttribute("data-tippy-root","");x.id="tippy-"+g.id;g.popper=x;r._tippy=g;x._tippy=g;var k=y.map((function(r){return r.fn(g)}));var T=r.hasAttribute("aria-expanded");_();P();H();R("onCreate",[g]);if(e.showOnCreate){ar()}x.addEventListener("mouseenter",(function(){if(g.props.interactive&&g.state.isVisible){g.clearDelayTimeouts()}}));x.addEventListener("mouseleave",(function(){if(g.props.interactive&&g.props.trigger.indexOf("mouseenter")>=0){B().addEventListener("mousemove",p)}}));return g;function A(){var r=g.props.touch;return Array.isArray(r)?r:[r,0]}function M(){return A()[0]==="hold"}function S(){var r;return!!((r=g.props.render)!=null&&r.$$tippy)}function E(){return m||r}function B(){var r=E().parentNode;return r?Hn(r):document}function C(){return te(x)}function q(r){if(g.state.isMounted&&!g.state.isVisible||Un.isTouch||c&&c.type==="focus"){return 0}return pn(g.props.delay,r?0:1,_n.delay)}function H(r){if(r===void 0){r=false}x.style.pointerEvents=g.props.interactive&&!r?"":"none";x.style.zIndex=""+g.props.zIndex}function R(r,n,e){if(e===void 0){e=true}k.forEach((function(e){if(e[r]){e[r].apply(e,n)}}));if(e){var t;(t=g.props)[r].apply(t,n)}}function L(){var n=g.props.aria;if(!n.content){return}var e="aria-"+n.content;var t=x.id;var a=wn(g.props.triggerTarget||r);a.forEach((function(r){var n=r.getAttribute(e);if(g.state.isVisible){r.setAttribute(e,n?n+" "+t:t)}else{var a=n&&n.replace(t,"").trim();if(a){r.setAttribute(e,a)}else{r.removeAttribute(e)}}}))}function P(){if(T||!g.props.aria.expanded){return}var n=wn(g.props.triggerTarget||r);n.forEach((function(r){if(g.props.interactive){r.setAttribute("aria-expanded",g.state.isVisible&&r===E()?"true":"false")}else{r.removeAttribute("aria-expanded")}}))}function U(){B().removeEventListener("mousemove",p);oe=oe.filter((function(r){return r!==p}))}function W(n){if(Un.isTouch){if(f||n.type==="mousedown"){return}}var e=n.composedPath&&n.composedPath()[0]||n.target;if(g.props.interactive&&Pn(x,e)){return}if(wn(g.props.triggerTarget||r).some((function(r){return Pn(r,e)}))){if(Un.isTouch){return}if(g.state.isVisible&&g.props.trigger.indexOf("click")>=0){return}}else{R("onClickOutside",[g,n])}if(g.props.hideOnClick===true){g.clearDelayTimeouts();g.hide();u=true;setTimeout((function(){u=false}));if(!g.state.isMounted){z()}}}function F(){f=true}function I(){f=false}function D(){var r=B();r.addEventListener("mousedown",W,true);r.addEventListener("touchend",W,ln);r.addEventListener("touchstart",I,ln);r.addEventListener("touchmove",F,ln)}function z(){var r=B();r.removeEventListener("mousedown",W,true);r.removeEventListener("touchend",W,ln);r.removeEventListener("touchstart",I,ln);r.removeEventListener("touchmove",F,ln)}function N(r,n){$(r,(function(){if(!g.state.isVisible&&x.parentNode&&x.parentNode.contains(x)){n()}}))}function V(r,n){$(r,n)}function $(r,n){var e=C().box;function t(r){if(r.target===e){Ln(e,"remove",t);n()}}if(r===0){return n()}Ln(e,"remove",s);Ln(e,"add",t);s=t}function J(n,e,t){if(t===void 0){t=false}var a=wn(g.props.triggerTarget||r);a.forEach((function(r){r.addEventListener(n,e,t);d.push({node:r,eventType:n,handler:e,options:t})}))}function _(){if(M()){J("touchstart",K,{passive:true});J("touchend",X,{passive:true})}yn(g.props.trigger).forEach((function(r){if(r==="manual"){return}J(r,K);switch(r){case"mouseenter":J("mouseleave",X);break;case"focus":J(Vn?"focusout":"blur",Y);break;case"focusin":J("focusout",Y);break}}))}function G(){d.forEach((function(r){var n=r.node,e=r.eventType,t=r.handler,a=r.options;n.removeEventListener(e,t,a)}));d=[]}function K(r){var n;var e=false;if(!g.state.isEnabled||Z(r)||u){return}var t=((n=c)==null?void 0:n.type)==="focus";c=r;m=r.currentTarget;P();if(!g.state.isVisible&&Sn(r)){oe.forEach((function(n){return n(r)}))}if(r.type==="click"&&(g.props.trigger.indexOf("mouseenter")<0||o)&&g.props.hideOnClick!==false&&g.state.isVisible){e=true}else{ar(r)}if(r.type==="click"){o=!e}if(e&&!t){ir(r)}}function Q(r){var n=r.target;var t=E().contains(n)||x.contains(n);if(r.type==="mousemove"&&t){return}var a=tr().concat(x).map((function(r){var n;var t=r._tippy;var a=(n=t.popperInstance)==null?void 0:n.state;if(a){return{popperRect:r.getBoundingClientRect(),popperState:a,props:e}}return null})).filter(Boolean);if(Rn(a,r)){U();ir(r)}}function X(r){var n=Z(r)||g.props.trigger.indexOf("click")>=0&&o;if(n){return}if(g.props.interactive){g.hideWithInteractivity(r);return}ir(r)}function Y(r){if(g.props.trigger.indexOf("focusin")<0&&r.target!==E()){return}if(g.props.interactive&&r.relatedTarget&&x.contains(r.relatedTarget)){return}ir(r)}function Z(r){return Un.isTouch?M()!==r.type.indexOf("touch")>=0:false}function rr(){nr();var n=g.props,e=n.popperOptions,t=n.placement,a=n.offset,i=n.getReferenceClientRect,o=n.moveTransition;var u=S()?te(x).arrow:null;var f=i?{getBoundingClientRect:i,contextElement:i.contextElement||E()}:r;var v={name:"$$tippy",enabled:true,phase:"beforeWrite",requires:["computeStyles"],fn:function r(n){var e=n.state;if(S()){var t=C(),a=t.box;["placement","reference-hidden","escaped"].forEach((function(r){if(r==="placement"){a.setAttribute("data-placement",e.placement)}else{if(e.attributes.popper["data-popper-"+r]){a.setAttribute("data-"+r,"")}else{a.removeAttribute("data-"+r)}}}));e.attributes.popper={}}}};var c=[{name:"offset",options:{offset:a}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!o}},v];if(S()&&u){c.push({name:"arrow",options:{element:u,padding:3}})}c.push.apply(c,(e==null?void 0:e.modifiers)||[]);g.popperInstance=on(f,x,Object.assign({},e,{placement:t,onFirstUpdate:l,modifiers:c}))}function nr(){if(g.popperInstance){g.popperInstance.destroy();g.popperInstance=null}}function er(){var r=g.props.appendTo;var n;var e=E();if(g.props.interactive&&r===dn||r==="parent"){n=e.parentNode}else{n=bn(r,[e])}if(!n.contains(x)){n.appendChild(x)}g.state.isMounted=true;rr()}function tr(){return jn(x.querySelectorAll("[data-tippy-root]"))}function ar(r){g.clearDelayTimeouts();if(r){R("onTrigger",[g,r])}D();var n=q(true);var e=A(),a=e[0],i=e[1];if(Un.isTouch&&a==="hold"&&i){n=i}if(n){t=setTimeout((function(){g.show()}),n)}else{g.show()}}function ir(r){g.clearDelayTimeouts();R("onUntrigger",[g,r]);if(!g.state.isVisible){z();return}if(g.props.trigger.indexOf("mouseenter")>=0&&g.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(r.type)>=0&&o){return}var n=q(false);if(n){a=setTimeout((function(){if(g.state.isVisible){g.hide()}}),n)}else{i=requestAnimationFrame((function(){g.hide()}))}}function or(){g.state.isEnabled=true}function ur(){g.hide();g.state.isEnabled=false}function fr(){clearTimeout(t);clearTimeout(a);cancelAnimationFrame(i)}function vr(n){if(g.state.isDestroyed){return}R("onBeforeUpdate",[g,n]);G();var e=g.props;var t=Yn(r,Object.assign({},e,kn(n),{ignoreAttributes:true}));g.props=t;_();if(e.interactiveDebounce!==t.interactiveDebounce){U();p=hn(Q,t.interactiveDebounce)}if(e.triggerTarget&&!t.triggerTarget){wn(e.triggerTarget).forEach((function(r){r.removeAttribute("aria-expanded")}))}else if(t.triggerTarget){r.removeAttribute("aria-expanded")}P();H();if(j){j(e,t)}if(g.popperInstance){rr();tr().forEach((function(r){requestAnimationFrame(r._tippy.popperInstance.forceUpdate)}))}R("onAfterUpdate",[g,n])}function cr(r){g.setProps({content:r})}function sr(){var r=g.state.isVisible;var n=g.state.isDestroyed;var e=!g.state.isEnabled;var t=Un.isTouch&&!g.props.touch;var a=pn(g.props.duration,0,_n.duration);if(r||n||e||t){return}if(E().hasAttribute("disabled")){return}R("onShow",[g],false);if(g.props.onShow(g)===false){return}g.state.isVisible=true;if(S()){x.style.visibility="visible"}H();D();if(!g.state.isMounted){x.style.transition="none"}if(S()){var i=C(),o=i.box,u=i.content;Cn([o,u],0)}l=function r(){var n;if(!g.state.isVisible||v){return}v=true;x.style.transition=g.props.moveTransition;if(S()&&g.props.animation){var e=C(),t=e.box,i=e.content;Cn([t,i],a);qn([t,i],"visible")}L();P();gn(ue,g);(n=g.popperInstance)==null?void 0:n.forceUpdate();R("onMount",[g]);if(g.props.animation&&S()){V(a,(function(){g.state.isShown=true;R("onShown",[g])}))}};er()}function lr(){var r=!g.state.isVisible;var n=g.state.isDestroyed;var e=!g.state.isEnabled;var t=pn(g.props.duration,1,_n.duration);if(r||n||e){return}R("onHide",[g],false);if(g.props.onHide(g)===false){return}g.state.isVisible=false;g.state.isShown=false;v=false;o=false;if(S()){x.style.visibility="hidden"}U();z();H(true);if(S()){var a=C(),i=a.box,u=a.content;if(g.props.animation){Cn([i,u],t);qn([i,u],"hidden")}}L();P();if(g.props.animation){if(S()){N(t,g.unmount)}}else{g.unmount()}}function dr(r){B().addEventListener("mousemove",p);gn(oe,p);p(r)}function pr(){if(g.state.isVisible){g.hide()}if(!g.state.isMounted){return}nr();tr().forEach((function(r){r._tippy.unmount()}));if(x.parentNode){x.parentNode.removeChild(x)}ue=ue.filter((function(r){return r!==g}));g.state.isMounted=false;R("onHidden",[g])}function mr(){if(g.state.isDestroyed){return}g.clearDelayTimeouts();g.unmount();G();delete r._tippy;g.state.isDestroyed=true;R("onDestroy",[g])}}function ve(r,n){if(n===void 0){n={}}var e=_n.plugins.concat(n.plugins||[]);zn();var t=Object.assign({},n,{plugins:e});var a=Bn(r);var i=a.reduce((function(r,n){var e=n&&fe(n,t);if(e){r.push(e)}return r}),[]);return An(r)?i[0]:i}ve.defaultProps=_n;ve.setDefaultProps=Kn;ve.currentInput=Un;Object.assign({},C,{effect:function r(n){var e=n.state;var t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(e.elements.popper.style,t.popper);e.styles=t;if(e.elements.arrow){Object.assign(e.elements.arrow.style,t.arrow)}}});ve.setDefaultProps({render:ae});export{ve as t};
//# sourceMappingURL=p-a45db3c9.js.map