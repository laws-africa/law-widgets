/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
System.register([],(function(e){"use strict";return{execute:function(){e("t",ur);var t="top";var r="bottom";var n="right";var i="left";var a="auto";var o=[t,r,n,i];var s="start";var f="end";var u="clippingParents";var c="viewport";var p="popper";var l="reference";var v=o.reduce((function(e,t){return e.concat([t+"-"+s,t+"-"+f])}),[]);var d=[].concat(o,[a]).reduce((function(e,t){return e.concat([t,t+"-"+s,t+"-"+f])}),[]);var m="beforeRead";var h="read";var g="afterRead";var b="beforeMain";var y="main";var w="afterMain";var x="beforeWrite";var O="write";var E="afterWrite";var A=[m,h,g,b,y,w,x,O,E];function T(e){return e?(e.nodeName||"").toLowerCase():null}function D(e){if(e==null){return window}if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t?t.defaultView||window:window}return e}function j(e){var t=D(e).Element;return e instanceof t||e instanceof Element}function L(e){var t=D(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function k(e){if(typeof ShadowRoot==="undefined"){return false}var t=D(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function C(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{};var n=t.attributes[e]||{};var i=t.elements[e];if(!L(i)||!T(i)){return}Object.assign(i.style,r);Object.keys(n).forEach((function(e){var t=n[e];if(t===false){i.removeAttribute(e)}else{i.setAttribute(e,t===true?"":t)}}))}))}function M(e){var t=e.state;var r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,r.popper);t.styles=r;if(t.elements.arrow){Object.assign(t.elements.arrow.style,r.arrow)}return function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e];var i=t.attributes[e]||{};var a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]);var o=a.reduce((function(e,t){e[t]="";return e}),{});if(!L(n)||!T(n)){return}Object.assign(n.style,o);Object.keys(i).forEach((function(e){n.removeAttribute(e)}))}))}}var V={name:"applyStyles",enabled:true,phase:"write",fn:C,effect:M,requires:["computeStyles"]};function S(e){return e.split("-")[0]}var W=Math.max;var H=Math.min;var P=Math.round;function B(){var e=navigator.userAgentData;if(e!=null&&e.brands){return e.brands.map((function(e){return e.brand+"/"+e.version})).join(" ")}return navigator.userAgent}function R(){return!/^((?!chrome|android).)*safari/i.test(B())}function N(e,t,r){if(t===void 0){t=false}if(r===void 0){r=false}var n=e.getBoundingClientRect();var i=1;var a=1;if(t&&L(e)){i=e.offsetWidth>0?P(n.width)/e.offsetWidth||1:1;a=e.offsetHeight>0?P(n.height)/e.offsetHeight||1:1}var o=j(e)?D(e):window,s=o.visualViewport;var f=!R()&&r;var u=(n.left+(f&&s?s.offsetLeft:0))/i;var c=(n.top+(f&&s?s.offsetTop:0))/a;var p=n.width/i;var l=n.height/a;return{width:p,height:l,top:c,right:u+p,bottom:c+l,left:u,x:u,y:c}}function I(e){var t=N(e);var r=e.offsetWidth;var n=e.offsetHeight;if(Math.abs(t.width-r)<=1){r=t.width}if(Math.abs(t.height-n)<=1){n=t.height}return{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function q(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t)){return true}else if(r&&k(r)){var n=t;do{if(n&&e.isSameNode(n)){return true}n=n.parentNode||n.host}while(n)}return false}function U(e){return D(e).getComputedStyle(e)}function _(e){return["table","td","th"].indexOf(T(e))>=0}function F(e){return((j(e)?e.ownerDocument:e.document)||window.document).documentElement}function z(e){if(T(e)==="html"){return e}return e.assignedSlot||e.parentNode||(k(e)?e.host:null)||F(e)}function $(e){if(!L(e)||U(e).position==="fixed"){return null}return e.offsetParent}function X(e){var t=/firefox/i.test(B());var r=/Trident/i.test(B());if(r&&L(e)){var n=U(e);if(n.position==="fixed"){return null}}var i=z(e);if(k(i)){i=i.host}while(L(i)&&["html","body"].indexOf(T(i))<0){var a=U(i);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none"){return i}else{i=i.parentNode}}return null}function Y(e){var t=D(e);var r=$(e);while(r&&_(r)&&U(r).position==="static"){r=$(r)}if(r&&(T(r)==="html"||T(r)==="body"&&U(r).position==="static")){return t}return r||X(e)||t}function J(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function G(e,t,r){return W(e,H(t,r))}function K(e,t,r){var n=G(e,t,r);return n>r?r:n}function Q(){return{top:0,right:0,bottom:0,left:0}}function Z(e){return Object.assign({},Q(),e)}function ee(e,t){return t.reduce((function(t,r){t[r]=e;return t}),{})}var te=function e(t,r){t=typeof t==="function"?t(Object.assign({},r.rects,{placement:r.placement})):t;return Z(typeof t!=="number"?t:ee(t,o))};function re(e){var a;var o=e.state,s=e.name,f=e.options;var u=o.elements.arrow;var c=o.modifiersData.popperOffsets;var p=S(o.placement);var l=J(p);var v=[i,n].indexOf(p)>=0;var d=v?"height":"width";if(!u||!c){return}var m=te(f.padding,o);var h=I(u);var g=l==="y"?t:i;var b=l==="y"?r:n;var y=o.rects.reference[d]+o.rects.reference[l]-c[l]-o.rects.popper[d];var w=c[l]-o.rects.reference[l];var x=Y(u);var O=x?l==="y"?x.clientHeight||0:x.clientWidth||0:0;var E=y/2-w/2;var A=m[g];var T=O-h[d]-m[b];var D=O/2-h[d]/2+E;var j=G(A,D,T);var L=l;o.modifiersData[s]=(a={},a[L]=j,a.centerOffset=j-D,a)}function ne(e){var t=e.state,r=e.options;var n=r.element,i=n===void 0?"[data-popper-arrow]":n;if(i==null){return}if(typeof i==="string"){i=t.elements.popper.querySelector(i);if(!i){return}}if(!q(t.elements.popper,i)){return}t.elements.arrow=i}var ie={name:"arrow",enabled:true,phase:"main",fn:re,effect:ne,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ae(e){return e.split("-")[1]}var oe={top:"auto",right:"auto",bottom:"auto",left:"auto"};function se(e){var t=e.x,r=e.y;var n=window;var i=n.devicePixelRatio||1;return{x:P(t*i)/i||0,y:P(r*i)/i||0}}function fe(e){var a;var o=e.popper,s=e.popperRect,u=e.placement,c=e.variation,p=e.offsets,l=e.position,v=e.gpuAcceleration,d=e.adaptive,m=e.roundOffsets,h=e.isFixed;var g=p.x,b=g===void 0?0:g,y=p.y,w=y===void 0?0:y;var x=typeof m==="function"?m({x:b,y:w}):{x:b,y:w};b=x.x;w=x.y;var O=p.hasOwnProperty("x");var E=p.hasOwnProperty("y");var A=i;var T=t;var j=window;if(d){var L=Y(o);var k="clientHeight";var C="clientWidth";if(L===D(o)){L=F(o);if(U(L).position!=="static"&&l==="absolute"){k="scrollHeight";C="scrollWidth"}}L=L;if(u===t||(u===i||u===n)&&c===f){T=r;var M=h&&L===j&&j.visualViewport?j.visualViewport.height:L[k];w-=M-s.height;w*=v?1:-1}if(u===i||(u===t||u===r)&&c===f){A=n;var V=h&&L===j&&j.visualViewport?j.visualViewport.width:L[C];b-=V-s.width;b*=v?1:-1}}var S=Object.assign({position:l},d&&oe);var W=m===true?se({x:b,y:w}):{x:b,y:w};b=W.x;w=W.y;if(v){var H;return Object.assign({},S,(H={},H[T]=E?"0":"",H[A]=O?"0":"",H.transform=(j.devicePixelRatio||1)<=1?"translate("+b+"px, "+w+"px)":"translate3d("+b+"px, "+w+"px, 0)",H))}return Object.assign({},S,(a={},a[T]=E?w+"px":"",a[A]=O?b+"px":"",a.transform="",a))}function ue(e){var t=e.state,r=e.options;var n=r.gpuAcceleration,i=n===void 0?true:n,a=r.adaptive,o=a===void 0?true:a,s=r.roundOffsets,f=s===void 0?true:s;var u={placement:S(t.placement),variation:ae(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};if(t.modifiersData.popperOffsets!=null){t.styles.popper=Object.assign({},t.styles.popper,fe(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:f})))}if(t.modifiersData.arrow!=null){t.styles.arrow=Object.assign({},t.styles.arrow,fe(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:false,roundOffsets:f})))}t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var ce={name:"computeStyles",enabled:true,phase:"beforeWrite",fn:ue,data:{}};var pe={passive:true};function le(e){var t=e.state,r=e.instance,n=e.options;var i=n.scroll,a=i===void 0?true:i,o=n.resize,s=o===void 0?true:o;var f=D(t.elements.popper);var u=[].concat(t.scrollParents.reference,t.scrollParents.popper);if(a){u.forEach((function(e){e.addEventListener("scroll",r.update,pe)}))}if(s){f.addEventListener("resize",r.update,pe)}return function(){if(a){u.forEach((function(e){e.removeEventListener("scroll",r.update,pe)}))}if(s){f.removeEventListener("resize",r.update,pe)}}}var ve={name:"eventListeners",enabled:true,phase:"write",fn:function e(){},effect:le,data:{}};var de={left:"right",right:"left",bottom:"top",top:"bottom"};function me(e){return e.replace(/left|right|bottom|top/g,(function(e){return de[e]}))}var he={start:"end",end:"start"};function ge(e){return e.replace(/start|end/g,(function(e){return he[e]}))}function be(e){var t=D(e);var r=t.pageXOffset;var n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function ye(e){return N(F(e)).left+be(e).scrollLeft}function we(e,t){var r=D(e);var n=F(e);var i=r.visualViewport;var a=n.clientWidth;var o=n.clientHeight;var s=0;var f=0;if(i){a=i.width;o=i.height;var u=R();if(u||!u&&t==="fixed"){s=i.offsetLeft;f=i.offsetTop}}return{width:a,height:o,x:s+ye(e),y:f}}function xe(e){var t;var r=F(e);var n=be(e);var i=(t=e.ownerDocument)==null?void 0:t.body;var a=W(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0);var o=W(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);var s=-n.scrollLeft+ye(e);var f=-n.scrollTop;if(U(i||r).direction==="rtl"){s+=W(r.clientWidth,i?i.clientWidth:0)-a}return{width:a,height:o,x:s,y:f}}function Oe(e){var t=U(e),r=t.overflow,n=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+i+n)}function Ee(e){if(["html","body","#document"].indexOf(T(e))>=0){return e.ownerDocument.body}if(L(e)&&Oe(e)){return e}return Ee(z(e))}function Ae(e,t){var r;if(t===void 0){t=[]}var n=Ee(e);var i=n===((r=e.ownerDocument)==null?void 0:r.body);var a=D(n);var o=i?[a].concat(a.visualViewport||[],Oe(n)?n:[]):n;var s=t.concat(o);return i?s:s.concat(Ae(z(o)))}function Te(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function De(e,t){var r=N(e,false,t==="fixed");r.top=r.top+e.clientTop;r.left=r.left+e.clientLeft;r.bottom=r.top+e.clientHeight;r.right=r.left+e.clientWidth;r.width=e.clientWidth;r.height=e.clientHeight;r.x=r.left;r.y=r.top;return r}function je(e,t,r){return t===c?Te(we(e,r)):j(t)?De(t,r):Te(xe(F(e)))}function Le(e){var t=Ae(z(e));var r=["absolute","fixed"].indexOf(U(e).position)>=0;var n=r&&L(e)?Y(e):e;if(!j(n)){return[]}return t.filter((function(e){return j(e)&&q(e,n)&&T(e)!=="body"}))}function ke(e,t,r,n){var i=t==="clippingParents"?Le(e):[].concat(t);var a=[].concat(i,[r]);var o=a[0];var s=a.reduce((function(t,r){var i=je(e,r,n);t.top=W(i.top,t.top);t.right=H(i.right,t.right);t.bottom=H(i.bottom,t.bottom);t.left=W(i.left,t.left);return t}),je(e,o,n));s.width=s.right-s.left;s.height=s.bottom-s.top;s.x=s.left;s.y=s.top;return s}function Ce(e){var a=e.reference,o=e.element,u=e.placement;var c=u?S(u):null;var p=u?ae(u):null;var l=a.x+a.width/2-o.width/2;var v=a.y+a.height/2-o.height/2;var d;switch(c){case t:d={x:l,y:a.y-o.height};break;case r:d={x:l,y:a.y+a.height};break;case n:d={x:a.x+a.width,y:v};break;case i:d={x:a.x-o.width,y:v};break;default:d={x:a.x,y:a.y}}var m=c?J(c):null;if(m!=null){var h=m==="y"?"height":"width";switch(p){case s:d[m]=d[m]-(a[h]/2-o[h]/2);break;case f:d[m]=d[m]+(a[h]/2-o[h]/2);break}}return d}function Me(e,i){if(i===void 0){i={}}var a=i,s=a.placement,f=s===void 0?e.placement:s,v=a.strategy,d=v===void 0?e.strategy:v,m=a.boundary,h=m===void 0?u:m,g=a.rootBoundary,b=g===void 0?c:g,y=a.elementContext,w=y===void 0?p:y,x=a.altBoundary,O=x===void 0?false:x,E=a.padding,A=E===void 0?0:E;var T=Z(typeof A!=="number"?A:ee(A,o));var D=w===p?l:p;var L=e.rects.popper;var k=e.elements[O?D:w];var C=ke(j(k)?k:k.contextElement||F(e.elements.popper),h,b,d);var M=N(e.elements.reference);var V=Ce({reference:M,element:L,strategy:"absolute",placement:f});var S=Te(Object.assign({},L,V));var W=w===p?S:M;var H={top:C.top-W.top+T.top,bottom:W.bottom-C.bottom+T.bottom,left:C.left-W.left+T.left,right:W.right-C.right+T.right};var P=e.modifiersData.offset;if(w===p&&P){var B=P[f];Object.keys(H).forEach((function(e){var i=[n,r].indexOf(e)>=0?1:-1;var a=[t,r].indexOf(e)>=0?"y":"x";H[e]+=B[a]*i}))}return H}function Ve(e,t){if(t===void 0){t={}}var r=t,n=r.placement,i=r.boundary,a=r.rootBoundary,s=r.padding,f=r.flipVariations,u=r.allowedAutoPlacements,c=u===void 0?d:u;var p=ae(n);var l=p?f?v:v.filter((function(e){return ae(e)===p})):o;var m=l.filter((function(e){return c.indexOf(e)>=0}));if(m.length===0){m=l}var h=m.reduce((function(t,r){t[r]=Me(e,{placement:r,boundary:i,rootBoundary:a,padding:s})[S(r)];return t}),{});return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}function Se(e){if(S(e)===a){return[]}var t=me(e);return[ge(e),t,ge(t)]}function We(e){var o=e.state,f=e.options,u=e.name;if(o.modifiersData[u]._skip){return}var c=f.mainAxis,p=c===void 0?true:c,l=f.altAxis,v=l===void 0?true:l,d=f.fallbackPlacements,m=f.padding,h=f.boundary,g=f.rootBoundary,b=f.altBoundary,y=f.flipVariations,w=y===void 0?true:y,x=f.allowedAutoPlacements;var O=o.options.placement;var E=S(O);var A=E===O;var T=d||(A||!w?[me(O)]:Se(O));var D=[O].concat(T).reduce((function(e,t){return e.concat(S(t)===a?Ve(o,{placement:t,boundary:h,rootBoundary:g,padding:m,flipVariations:w,allowedAutoPlacements:x}):t)}),[]);var j=o.rects.reference;var L=o.rects.popper;var k=new Map;var C=true;var M=D[0];for(var V=0;V<D.length;V++){var W=D[V];var H=S(W);var P=ae(W)===s;var B=[t,r].indexOf(H)>=0;var R=B?"width":"height";var N=Me(o,{placement:W,boundary:h,rootBoundary:g,altBoundary:b,padding:m});var I=B?P?n:i:P?r:t;if(j[R]>L[R]){I=me(I)}var q=me(I);var U=[];if(p){U.push(N[H]<=0)}if(v){U.push(N[I]<=0,N[q]<=0)}if(U.every((function(e){return e}))){M=W;C=false;break}k.set(W,U)}if(C){var _=w?3:1;var F=function e(t){var r=D.find((function(e){var r=k.get(e);if(r){return r.slice(0,t).every((function(e){return e}))}}));if(r){M=r;return"break"}};for(var z=_;z>0;z--){var $=F(z);if($==="break")break}}if(o.placement!==M){o.modifiersData[u]._skip=true;o.placement=M;o.reset=true}}var He={name:"flip",enabled:true,phase:"main",fn:We,requiresIfExists:["offset"],data:{_skip:false}};function Pe(e,t,r){if(r===void 0){r={x:0,y:0}}return{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Be(e){return[t,n,r,i].some((function(t){return e[t]>=0}))}function Re(e){var t=e.state,r=e.name;var n=t.rects.reference;var i=t.rects.popper;var a=t.modifiersData.preventOverflow;var o=Me(t,{elementContext:"reference"});var s=Me(t,{altBoundary:true});var f=Pe(o,n);var u=Pe(s,i,a);var c=Be(f);var p=Be(u);t.modifiersData[r]={referenceClippingOffsets:f,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:p};t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":p})}var Ne={name:"hide",enabled:true,phase:"main",requiresIfExists:["preventOverflow"],fn:Re};function Ie(e,r,a){var o=S(e);var s=[i,t].indexOf(o)>=0?-1:1;var f=typeof a==="function"?a(Object.assign({},r,{placement:e})):a,u=f[0],c=f[1];u=u||0;c=(c||0)*s;return[i,n].indexOf(o)>=0?{x:c,y:u}:{x:u,y:c}}function qe(e){var t=e.state,r=e.options,n=e.name;var i=r.offset,a=i===void 0?[0,0]:i;var o=d.reduce((function(e,r){e[r]=Ie(r,t.rects,a);return e}),{});var s=o[t.placement],f=s.x,u=s.y;if(t.modifiersData.popperOffsets!=null){t.modifiersData.popperOffsets.x+=f;t.modifiersData.popperOffsets.y+=u}t.modifiersData[n]=o}var Ue={name:"offset",enabled:true,phase:"main",requires:["popperOffsets"],fn:qe};function _e(e){var t=e.state,r=e.name;t.modifiersData[r]=Ce({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Fe={name:"popperOffsets",enabled:true,phase:"read",fn:_e,data:{}};function ze(e){return e==="x"?"y":"x"}function $e(e){var a=e.state,o=e.options,f=e.name;var u=o.mainAxis,c=u===void 0?true:u,p=o.altAxis,l=p===void 0?false:p,v=o.boundary,d=o.rootBoundary,m=o.altBoundary,h=o.padding,g=o.tether,b=g===void 0?true:g,y=o.tetherOffset,w=y===void 0?0:y;var x=Me(a,{boundary:v,rootBoundary:d,padding:h,altBoundary:m});var O=S(a.placement);var E=ae(a.placement);var A=!E;var T=J(O);var D=ze(T);var j=a.modifiersData.popperOffsets;var L=a.rects.reference;var k=a.rects.popper;var C=typeof w==="function"?w(Object.assign({},a.rects,{placement:a.placement})):w;var M=typeof C==="number"?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C);var V=a.modifiersData.offset?a.modifiersData.offset[a.placement]:null;var P={x:0,y:0};if(!j){return}if(c){var B;var R=T==="y"?t:i;var N=T==="y"?r:n;var q=T==="y"?"height":"width";var U=j[T];var _=U+x[R];var F=U-x[N];var z=b?-k[q]/2:0;var $=E===s?L[q]:k[q];var X=E===s?-k[q]:-L[q];var Z=a.elements.arrow;var ee=b&&Z?I(Z):{width:0,height:0};var te=a.modifiersData["arrow#persistent"]?a.modifiersData["arrow#persistent"].padding:Q();var re=te[R];var ne=te[N];var ie=G(0,L[q],ee[q]);var oe=A?L[q]/2-z-ie-re-M.mainAxis:$-ie-re-M.mainAxis;var se=A?-L[q]/2+z+ie+ne+M.mainAxis:X+ie+ne+M.mainAxis;var fe=a.elements.arrow&&Y(a.elements.arrow);var ue=fe?T==="y"?fe.clientTop||0:fe.clientLeft||0:0;var ce=(B=V==null?void 0:V[T])!=null?B:0;var pe=U+oe-ce-ue;var le=U+se-ce;var ve=G(b?H(_,pe):_,U,b?W(F,le):F);j[T]=ve;P[T]=ve-U}if(l){var de;var me=T==="x"?t:i;var he=T==="x"?r:n;var ge=j[D];var be=D==="y"?"height":"width";var ye=ge+x[me];var we=ge-x[he];var xe=[t,i].indexOf(O)!==-1;var Oe=(de=V==null?void 0:V[D])!=null?de:0;var Ee=xe?ye:ge-L[be]-k[be]-Oe+M.altAxis;var Ae=xe?ge+L[be]+k[be]-Oe-M.altAxis:we;var Te=b&&xe?K(Ee,ge,Ae):G(b?Ee:ye,ge,b?Ae:we);j[D]=Te;P[D]=Te-ge}a.modifiersData[f]=P}var Xe={name:"preventOverflow",enabled:true,phase:"main",fn:$e,requiresIfExists:["offset"]};function Ye(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Je(e){if(e===D(e)||!L(e)){return be(e)}else{return Ye(e)}}function Ge(e){var t=e.getBoundingClientRect();var r=P(t.width)/e.offsetWidth||1;var n=P(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Ke(e,t,r){if(r===void 0){r=false}var n=L(t);var i=L(t)&&Ge(t);var a=F(t);var o=N(e,i,r);var s={scrollLeft:0,scrollTop:0};var f={x:0,y:0};if(n||!n&&!r){if(T(t)!=="body"||Oe(a)){s=Je(t)}if(L(t)){f=N(t,true);f.x+=t.clientLeft;f.y+=t.clientTop}else if(a){f.x=ye(a)}}return{x:o.left+s.scrollLeft-f.x,y:o.top+s.scrollTop-f.y,width:o.width,height:o.height}}function Qe(e){var t=new Map;var r=new Set;var n=[];e.forEach((function(e){t.set(e.name,e)}));function i(e){r.add(e.name);var a=[].concat(e.requires||[],e.requiresIfExists||[]);a.forEach((function(e){if(!r.has(e)){var n=t.get(e);if(n){i(n)}}}));n.push(e)}e.forEach((function(e){if(!r.has(e.name)){i(e)}}));return n}function Ze(e){var t=Qe(e);return A.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}function et(e){var t;return function(){if(!t){t=new Promise((function(r){Promise.resolve().then((function(){t=undefined;r(e())}))}))}return t}}function tt(e){var t=e.reduce((function(e,t){var r=e[t.name];e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t;return e}),{});return Object.keys(t).map((function(e){return t[e]}))}var rt={placement:"bottom",modifiers:[],strategy:"absolute"};function nt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return!t.some((function(e){return!(e&&typeof e.getBoundingClientRect==="function")}))}function it(e){if(e===void 0){e={}}var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,i=t.defaultOptions,a=i===void 0?rt:i;return function e(t,r,i){if(i===void 0){i=a}var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},rt,a),modifiersData:{},elements:{reference:t,popper:r},attributes:{},styles:{}};var s=[];var f=false;var u={state:o,setOptions:function e(i){var s=typeof i==="function"?i(o.options):i;p();o.options=Object.assign({},a,o.options,s);o.scrollParents={reference:j(t)?Ae(t):t.contextElement?Ae(t.contextElement):[],popper:Ae(r)};var f=Ze(tt([].concat(n,o.options.modifiers)));o.orderedModifiers=f.filter((function(e){return e.enabled}));c();return u.update()},forceUpdate:function e(){if(f){return}var t=o.elements,r=t.reference,n=t.popper;if(!nt(r,n)){return}o.rects={reference:Ke(r,Y(n),o.options.strategy==="fixed"),popper:I(n)};o.reset=false;o.placement=o.options.placement;o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<o.orderedModifiers.length;i++){if(o.reset===true){o.reset=false;i=-1;continue}var a=o.orderedModifiers[i],s=a.fn,c=a.options,p=c===void 0?{}:c,l=a.name;if(typeof s==="function"){o=s({state:o,options:p,name:l,instance:u})||o}}},update:et((function(){return new Promise((function(e){u.forceUpdate();e(o)}))})),destroy:function e(){p();f=true}};if(!nt(t,r)){return u}u.setOptions(i).then((function(e){if(!f&&i.onFirstUpdate){i.onFirstUpdate(e)}}));function c(){o.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=r===void 0?{}:r,i=e.effect;if(typeof i==="function"){var a=i({state:o,name:t,instance:u,options:n});var f=function e(){};s.push(a||f)}}))}function p(){s.forEach((function(e){return e()}));s=[]}return u}}var at=[ve,Fe,ce,V,Ue,He,Xe,ie,Ne];var ot=it({defaultModifiers:at});
/**!
      * tippy.js v6.3.7
      * (c) 2017-2021 atomiks
      * MIT License
      */var st="tippy-box";var ft="tippy-content";var ut="tippy-backdrop";var ct="tippy-arrow";var pt="tippy-svg-arrow";var lt={passive:true,capture:true};var vt=function e(){return document.body};function dt(e,t,r){if(Array.isArray(e)){var n=e[t];return n==null?Array.isArray(r)?r[t]:r:n}return e}function mt(e,t){var r={}.toString.call(e);return r.indexOf("[object")===0&&r.indexOf(t+"]")>-1}function ht(e,t){return typeof e==="function"?e.apply(void 0,t):e}function gt(e,t){if(t===0){return e}var r;return function(n){clearTimeout(r);r=setTimeout((function(){e(n)}),t)}}function bt(e){return e.split(/\s+/).filter(Boolean)}function yt(e){return[].concat(e)}function wt(e,t){if(e.indexOf(t)===-1){e.push(t)}}function xt(e){return e.filter((function(t,r){return e.indexOf(t)===r}))}function Ot(e){return e.split("-")[0]}function Et(e){return[].slice.call(e)}function At(e){return Object.keys(e).reduce((function(t,r){if(e[r]!==undefined){t[r]=e[r]}return t}),{})}function Tt(){return document.createElement("div")}function Dt(e){return["Element","Fragment"].some((function(t){return mt(e,t)}))}function jt(e){return mt(e,"NodeList")}function Lt(e){return mt(e,"MouseEvent")}function kt(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function Ct(e){if(Dt(e)){return[e]}if(jt(e)){return Et(e)}if(Array.isArray(e)){return e}return Et(document.querySelectorAll(e))}function Mt(e,t){e.forEach((function(e){if(e){e.style.transitionDuration=t+"ms"}}))}function Vt(e,t){e.forEach((function(e){if(e){e.setAttribute("data-state",t)}}))}function St(e){var t;var r=yt(e),n=r[0];return n!=null&&(t=n.ownerDocument)!=null&&t.body?n.ownerDocument:document}function Wt(e,t){var r=t.clientX,n=t.clientY;return e.every((function(e){var t=e.popperRect,i=e.popperState,a=e.props;var o=a.interactiveBorder;var s=Ot(i.placement);var f=i.modifiersData.offset;if(!f){return true}var u=s==="bottom"?f.top.y:0;var c=s==="top"?f.bottom.y:0;var p=s==="right"?f.left.x:0;var l=s==="left"?f.right.x:0;var v=t.top-n+u>o;var d=n-t.bottom-c>o;var m=t.left-r+p>o;var h=r-t.right-l>o;return v||d||m||h}))}function Ht(e,t,r){var n=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[n](t,r)}))}function Pt(e,t){var r=t;while(r){var n;if(e.contains(r)){return true}r=r.getRootNode==null?void 0:(n=r.getRootNode())==null?void 0:n.host}return false}var Bt={isTouch:false};var Rt=0;function Nt(){if(Bt.isTouch){return}Bt.isTouch=true;if(window.performance){document.addEventListener("mousemove",It)}}function It(){var e=performance.now();if(e-Rt<20){Bt.isTouch=false;document.removeEventListener("mousemove",It)}Rt=e}function qt(){var e=document.activeElement;if(kt(e)){var t=e._tippy;if(e.blur&&!t.state.isVisible){e.blur()}}}function Ut(){document.addEventListener("touchstart",Nt,lt);window.addEventListener("blur",qt)}var _t=typeof window!=="undefined"&&typeof document!=="undefined";var Ft=_t?!!window.msCrypto:false;var zt={animateFill:false,followCursor:false,inlinePositioning:false,sticky:false};var $t={allowHTML:false,animation:"fade",arrow:true,content:"",inertia:false,maxWidth:350,role:"tooltip",theme:"",zIndex:9999};var Xt=Object.assign({appendTo:vt,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:true,ignoreAttributes:false,interactive:false,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function e(){},onBeforeUpdate:function e(){},onCreate:function e(){},onDestroy:function e(){},onHidden:function e(){},onHide:function e(){},onMount:function e(){},onShow:function e(){},onShown:function e(){},onTrigger:function e(){},onUntrigger:function e(){},onClickOutside:function e(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:false,touch:true,trigger:"mouseenter focus",triggerTarget:null},zt,$t);var Yt=Object.keys(Xt);var Jt=function e(t){var r=Object.keys(t);r.forEach((function(e){Xt[e]=t[e]}))};function Gt(e){var t=e.plugins||[];var r=t.reduce((function(t,r){var n=r.name,i=r.defaultValue;if(n){var a;t[n]=e[n]!==undefined?e[n]:(a=Xt[n])!=null?a:i}return t}),{});return Object.assign({},e,r)}function Kt(e,t){var r=t?Object.keys(Gt(Object.assign({},Xt,{plugins:t}))):Yt;var n=r.reduce((function(t,r){var n=(e.getAttribute("data-tippy-"+r)||"").trim();if(!n){return t}if(r==="content"){t[r]=n}else{try{t[r]=JSON.parse(n)}catch(e){t[r]=n}}return t}),{});return n}function Qt(e,t){var r=Object.assign({},t,{content:ht(t.content,[e])},t.ignoreAttributes?{}:Kt(e,t.plugins));r.aria=Object.assign({},Xt.aria,r.aria);r.aria={expanded:r.aria.expanded==="auto"?t.interactive:r.aria.expanded,content:r.aria.content==="auto"?t.interactive?null:"describedby":r.aria.content};return r}var Zt=function e(){return"innerHTML"};function er(e,t){e[Zt()]=t}function tr(e){var t=Tt();if(e===true){t.className=ct}else{t.className=pt;if(Dt(e)){t.appendChild(e)}else{er(t,e)}}return t}function rr(e,t){if(Dt(t.content)){er(e,"");e.appendChild(t.content)}else if(typeof t.content!=="function"){if(t.allowHTML){er(e,t.content)}else{e.textContent=t.content}}}function nr(e){var t=e.firstElementChild;var r=Et(t.children);return{box:t,content:r.find((function(e){return e.classList.contains(ft)})),arrow:r.find((function(e){return e.classList.contains(ct)||e.classList.contains(pt)})),backdrop:r.find((function(e){return e.classList.contains(ut)}))}}function ir(e){var t=Tt();var r=Tt();r.className=st;r.setAttribute("data-state","hidden");r.setAttribute("tabindex","-1");var n=Tt();n.className=ft;n.setAttribute("data-state","hidden");rr(n,e.props);t.appendChild(r);r.appendChild(n);i(e.props,e.props);function i(r,n){var i=nr(t),a=i.box,o=i.content,s=i.arrow;if(n.theme){a.setAttribute("data-theme",n.theme)}else{a.removeAttribute("data-theme")}if(typeof n.animation==="string"){a.setAttribute("data-animation",n.animation)}else{a.removeAttribute("data-animation")}if(n.inertia){a.setAttribute("data-inertia","")}else{a.removeAttribute("data-inertia")}a.style.maxWidth=typeof n.maxWidth==="number"?n.maxWidth+"px":n.maxWidth;if(n.role){a.setAttribute("role",n.role)}else{a.removeAttribute("role")}if(r.content!==n.content||r.allowHTML!==n.allowHTML){rr(o,e.props)}if(n.arrow){if(!s){a.appendChild(tr(n.arrow))}else if(r.arrow!==n.arrow){a.removeChild(s);a.appendChild(tr(n.arrow))}}else if(s){a.removeChild(s)}}return{popper:t,onUpdate:i}}ir.$$tippy=true;var ar=1;var or=[];var sr=[];function fr(e,t){var r=Qt(e,Object.assign({},Xt,Gt(At(t))));var n;var i;var a;var o=false;var s=false;var f=false;var u=false;var c;var p;var l;var v=[];var d=gt(G,r.interactiveDebounce);var m;var h=ar++;var g=null;var b=xt(r.plugins);var y={isEnabled:true,isVisible:false,isDestroyed:false,isMounted:false,isShown:false};var w={id:h,reference:e,popper:Tt(),popperInstance:g,props:r,state:y,plugins:b,clearDelayTimeouts:fe,setProps:ue,setContent:ce,show:pe,hide:le,hideWithInteractivity:ve,enable:oe,disable:se,unmount:de,destroy:me};if(!r.render){return w}var x=r.render(w),O=x.popper,E=x.onUpdate;O.setAttribute("data-tippy-root","");O.id="tippy-"+w.id;w.popper=O;e._tippy=w;O._tippy=w;var A=b.map((function(e){return e.fn(w)}));var T=e.hasAttribute("aria-expanded");X();P();S();W("onCreate",[w]);if(r.showOnCreate){ie()}O.addEventListener("mouseenter",(function(){if(w.props.interactive&&w.state.isVisible){w.clearDelayTimeouts()}}));O.addEventListener("mouseleave",(function(){if(w.props.interactive&&w.props.trigger.indexOf("mouseenter")>=0){C().addEventListener("mousemove",d)}}));return w;function D(){var e=w.props.touch;return Array.isArray(e)?e:[e,0]}function j(){return D()[0]==="hold"}function L(){var e;return!!((e=w.props.render)!=null&&e.$$tippy)}function k(){return m||e}function C(){var e=k().parentNode;return e?St(e):document}function M(){return nr(O)}function V(e){if(w.state.isMounted&&!w.state.isVisible||Bt.isTouch||c&&c.type==="focus"){return 0}return dt(w.props.delay,e?0:1,Xt.delay)}function S(e){if(e===void 0){e=false}O.style.pointerEvents=w.props.interactive&&!e?"":"none";O.style.zIndex=""+w.props.zIndex}function W(e,t,r){if(r===void 0){r=true}A.forEach((function(r){if(r[e]){r[e].apply(r,t)}}));if(r){var n;(n=w.props)[e].apply(n,t)}}function H(){var t=w.props.aria;if(!t.content){return}var r="aria-"+t.content;var n=O.id;var i=yt(w.props.triggerTarget||e);i.forEach((function(e){var t=e.getAttribute(r);if(w.state.isVisible){e.setAttribute(r,t?t+" "+n:n)}else{var i=t&&t.replace(n,"").trim();if(i){e.setAttribute(r,i)}else{e.removeAttribute(r)}}}))}function P(){if(T||!w.props.aria.expanded){return}var t=yt(w.props.triggerTarget||e);t.forEach((function(e){if(w.props.interactive){e.setAttribute("aria-expanded",w.state.isVisible&&e===k()?"true":"false")}else{e.removeAttribute("aria-expanded")}}))}function B(){C().removeEventListener("mousemove",d);or=or.filter((function(e){return e!==d}))}function R(t){if(Bt.isTouch){if(f||t.type==="mousedown"){return}}var r=t.composedPath&&t.composedPath()[0]||t.target;if(w.props.interactive&&Pt(O,r)){return}if(yt(w.props.triggerTarget||e).some((function(e){return Pt(e,r)}))){if(Bt.isTouch){return}if(w.state.isVisible&&w.props.trigger.indexOf("click")>=0){return}}else{W("onClickOutside",[w,t])}if(w.props.hideOnClick===true){w.clearDelayTimeouts();w.hide();s=true;setTimeout((function(){s=false}));if(!w.state.isMounted){U()}}}function N(){f=true}function I(){f=false}function q(){var e=C();e.addEventListener("mousedown",R,true);e.addEventListener("touchend",R,lt);e.addEventListener("touchstart",I,lt);e.addEventListener("touchmove",N,lt)}function U(){var e=C();e.removeEventListener("mousedown",R,true);e.removeEventListener("touchend",R,lt);e.removeEventListener("touchstart",I,lt);e.removeEventListener("touchmove",N,lt)}function _(e,t){z(e,(function(){if(!w.state.isVisible&&O.parentNode&&O.parentNode.contains(O)){t()}}))}function F(e,t){z(e,t)}function z(e,t){var r=M().box;function n(e){if(e.target===r){Ht(r,"remove",n);t()}}if(e===0){return t()}Ht(r,"remove",p);Ht(r,"add",n);p=n}function $(t,r,n){if(n===void 0){n=false}var i=yt(w.props.triggerTarget||e);i.forEach((function(e){e.addEventListener(t,r,n);v.push({node:e,eventType:t,handler:r,options:n})}))}function X(){if(j()){$("touchstart",J,{passive:true});$("touchend",K,{passive:true})}bt(w.props.trigger).forEach((function(e){if(e==="manual"){return}$(e,J);switch(e){case"mouseenter":$("mouseleave",K);break;case"focus":$(Ft?"focusout":"blur",Q);break;case"focusin":$("focusout",Q);break}}))}function Y(){v.forEach((function(e){var t=e.node,r=e.eventType,n=e.handler,i=e.options;t.removeEventListener(r,n,i)}));v=[]}function J(e){var t;var r=false;if(!w.state.isEnabled||Z(e)||s){return}var n=((t=c)==null?void 0:t.type)==="focus";c=e;m=e.currentTarget;P();if(!w.state.isVisible&&Lt(e)){or.forEach((function(t){return t(e)}))}if(e.type==="click"&&(w.props.trigger.indexOf("mouseenter")<0||o)&&w.props.hideOnClick!==false&&w.state.isVisible){r=true}else{ie(e)}if(e.type==="click"){o=!r}if(r&&!n){ae(e)}}function G(e){var t=e.target;var n=k().contains(t)||O.contains(t);if(e.type==="mousemove"&&n){return}var i=ne().concat(O).map((function(e){var t;var n=e._tippy;var i=(t=n.popperInstance)==null?void 0:t.state;if(i){return{popperRect:e.getBoundingClientRect(),popperState:i,props:r}}return null})).filter(Boolean);if(Wt(i,e)){B();ae(e)}}function K(e){var t=Z(e)||w.props.trigger.indexOf("click")>=0&&o;if(t){return}if(w.props.interactive){w.hideWithInteractivity(e);return}ae(e)}function Q(e){if(w.props.trigger.indexOf("focusin")<0&&e.target!==k()){return}if(w.props.interactive&&e.relatedTarget&&O.contains(e.relatedTarget)){return}ae(e)}function Z(e){return Bt.isTouch?j()!==e.type.indexOf("touch")>=0:false}function ee(){te();var t=w.props,r=t.popperOptions,n=t.placement,i=t.offset,a=t.getReferenceClientRect,o=t.moveTransition;var s=L()?nr(O).arrow:null;var f=a?{getBoundingClientRect:a,contextElement:a.contextElement||k()}:e;var u={name:"$$tippy",enabled:true,phase:"beforeWrite",requires:["computeStyles"],fn:function e(t){var r=t.state;if(L()){var n=M(),i=n.box;["placement","reference-hidden","escaped"].forEach((function(e){if(e==="placement"){i.setAttribute("data-placement",r.placement)}else{if(r.attributes.popper["data-popper-"+e]){i.setAttribute("data-"+e,"")}else{i.removeAttribute("data-"+e)}}}));r.attributes.popper={}}}};var c=[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!o}},u];if(L()&&s){c.push({name:"arrow",options:{element:s,padding:3}})}c.push.apply(c,(r==null?void 0:r.modifiers)||[]);w.popperInstance=ot(f,O,Object.assign({},r,{placement:n,onFirstUpdate:l,modifiers:c}))}function te(){if(w.popperInstance){w.popperInstance.destroy();w.popperInstance=null}}function re(){var e=w.props.appendTo;var t;var r=k();if(w.props.interactive&&e===vt||e==="parent"){t=r.parentNode}else{t=ht(e,[r])}if(!t.contains(O)){t.appendChild(O)}w.state.isMounted=true;ee()}function ne(){return Et(O.querySelectorAll("[data-tippy-root]"))}function ie(e){w.clearDelayTimeouts();if(e){W("onTrigger",[w,e])}q();var t=V(true);var r=D(),i=r[0],a=r[1];if(Bt.isTouch&&i==="hold"&&a){t=a}if(t){n=setTimeout((function(){w.show()}),t)}else{w.show()}}function ae(e){w.clearDelayTimeouts();W("onUntrigger",[w,e]);if(!w.state.isVisible){U();return}if(w.props.trigger.indexOf("mouseenter")>=0&&w.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&o){return}var t=V(false);if(t){i=setTimeout((function(){if(w.state.isVisible){w.hide()}}),t)}else{a=requestAnimationFrame((function(){w.hide()}))}}function oe(){w.state.isEnabled=true}function se(){w.hide();w.state.isEnabled=false}function fe(){clearTimeout(n);clearTimeout(i);cancelAnimationFrame(a)}function ue(t){if(w.state.isDestroyed){return}W("onBeforeUpdate",[w,t]);Y();var r=w.props;var n=Qt(e,Object.assign({},r,At(t),{ignoreAttributes:true}));w.props=n;X();if(r.interactiveDebounce!==n.interactiveDebounce){B();d=gt(G,n.interactiveDebounce)}if(r.triggerTarget&&!n.triggerTarget){yt(r.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")}))}else if(n.triggerTarget){e.removeAttribute("aria-expanded")}P();S();if(E){E(r,n)}if(w.popperInstance){ee();ne().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)}))}W("onAfterUpdate",[w,t])}function ce(e){w.setProps({content:e})}function pe(){var e=w.state.isVisible;var t=w.state.isDestroyed;var r=!w.state.isEnabled;var n=Bt.isTouch&&!w.props.touch;var i=dt(w.props.duration,0,Xt.duration);if(e||t||r||n){return}if(k().hasAttribute("disabled")){return}W("onShow",[w],false);if(w.props.onShow(w)===false){return}w.state.isVisible=true;if(L()){O.style.visibility="visible"}S();q();if(!w.state.isMounted){O.style.transition="none"}if(L()){var a=M(),o=a.box,s=a.content;Mt([o,s],0)}l=function e(){var t;if(!w.state.isVisible||u){return}u=true;O.style.transition=w.props.moveTransition;if(L()&&w.props.animation){var r=M(),n=r.box,a=r.content;Mt([n,a],i);Vt([n,a],"visible")}H();P();wt(sr,w);(t=w.popperInstance)==null?void 0:t.forceUpdate();W("onMount",[w]);if(w.props.animation&&L()){F(i,(function(){w.state.isShown=true;W("onShown",[w])}))}};re()}function le(){var e=!w.state.isVisible;var t=w.state.isDestroyed;var r=!w.state.isEnabled;var n=dt(w.props.duration,1,Xt.duration);if(e||t||r){return}W("onHide",[w],false);if(w.props.onHide(w)===false){return}w.state.isVisible=false;w.state.isShown=false;u=false;o=false;if(L()){O.style.visibility="hidden"}B();U();S(true);if(L()){var i=M(),a=i.box,s=i.content;if(w.props.animation){Mt([a,s],n);Vt([a,s],"hidden")}}H();P();if(w.props.animation){if(L()){_(n,w.unmount)}}else{w.unmount()}}function ve(e){C().addEventListener("mousemove",d);wt(or,d);d(e)}function de(){if(w.state.isVisible){w.hide()}if(!w.state.isMounted){return}te();ne().forEach((function(e){e._tippy.unmount()}));if(O.parentNode){O.parentNode.removeChild(O)}sr=sr.filter((function(e){return e!==w}));w.state.isMounted=false;W("onHidden",[w])}function me(){if(w.state.isDestroyed){return}w.clearDelayTimeouts();w.unmount();Y();delete e._tippy;w.state.isDestroyed=true;W("onDestroy",[w])}}function ur(e,t){if(t===void 0){t={}}var r=Xt.plugins.concat(t.plugins||[]);Ut();var n=Object.assign({},t,{plugins:r});var i=Ct(e);var a=i.reduce((function(e,t){var r=t&&fr(t,n);if(r){e.push(r)}return e}),[]);return Dt(e)?a[0]:a}ur.defaultProps=Xt;ur.setDefaultProps=Jt;ur.currentInput=Bt;Object.assign({},V,{effect:function e(t){var r=t.state;var n={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(r.elements.popper.style,n.popper);r.styles=n;if(r.elements.arrow){Object.assign(r.elements.arrow.style,n.arrow)}}});ur.setDefaultProps({render:ir})}}}));