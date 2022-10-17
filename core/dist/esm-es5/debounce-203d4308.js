/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
function isObject(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var isObject_1=isObject;var commonjsGlobal=typeof globalThis!=="undefined"?globalThis:typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};var freeGlobal=typeof commonjsGlobal=="object"&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal;var _freeGlobal=freeGlobal;var freeSelf=typeof self=="object"&&self&&self.Object===Object&&self;var root=_freeGlobal||freeSelf||Function("return this")();var _root=root;var now=function(){return _root.Date.now()};var now_1=now;var Symbol=_root.Symbol;var _Symbol=Symbol;var objectProto$1=Object.prototype;var hasOwnProperty=objectProto$1.hasOwnProperty;var nativeObjectToString$1=objectProto$1.toString;var symToStringTag$1=_Symbol?_Symbol.toStringTag:undefined;function getRawTag(e){var t=hasOwnProperty.call(e,symToStringTag$1),n=e[symToStringTag$1];try{e[symToStringTag$1]=undefined;var r=true}catch(e){}var o=nativeObjectToString$1.call(e);if(r){if(t){e[symToStringTag$1]=n}else{delete e[symToStringTag$1]}}return o}var _getRawTag=getRawTag;var objectProto=Object.prototype;var nativeObjectToString=objectProto.toString;function objectToString(e){return nativeObjectToString.call(e)}var _objectToString=objectToString;var nullTag="[object Null]",undefinedTag="[object Undefined]";var symToStringTag=_Symbol?_Symbol.toStringTag:undefined;function baseGetTag(e){if(e==null){return e===undefined?undefinedTag:nullTag}return symToStringTag&&symToStringTag in Object(e)?_getRawTag(e):_objectToString(e)}var _baseGetTag=baseGetTag;function isObjectLike(e){return e!=null&&typeof e=="object"}var isObjectLike_1=isObjectLike;var symbolTag="[object Symbol]";function isSymbol(e){return typeof e=="symbol"||isObjectLike_1(e)&&_baseGetTag(e)==symbolTag}var isSymbol_1=isSymbol;var NAN=0/0;var reTrim=/^\s+|\s+$/g;var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;var reIsBinary=/^0b[01]+$/i;var reIsOctal=/^0o[0-7]+$/i;var freeParseInt=parseInt;function toNumber(e){if(typeof e=="number"){return e}if(isSymbol_1(e)){return NAN}if(isObject_1(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=isObject_1(t)?t+"":t}if(typeof e!="string"){return e===0?e:+e}e=e.replace(reTrim,"");var n=reIsBinary.test(e);return n||reIsOctal.test(e)?freeParseInt(e.slice(2),n?2:8):reIsBadHex.test(e)?NAN:+e}var toNumber_1=toNumber;var FUNC_ERROR_TEXT="Expected a function";var nativeMax=Math.max,nativeMin=Math.min;function debounce(e,t,n){var r,o,a,i,u,f,l=0,c=false,b=false,s=true;if(typeof e!="function"){throw new TypeError(FUNC_ERROR_TEXT)}t=toNumber_1(t)||0;if(isObject_1(n)){c=!!n.leading;b="maxWait"in n;a=b?nativeMax(toNumber_1(n.maxWait)||0,t):a;s="trailing"in n?!!n.trailing:s}function g(t){var n=r,a=o;r=o=undefined;l=t;i=e.apply(a,n);return i}function v(e){l=e;u=setTimeout(d,t);return c?g(e):i}function T(e){var n=e-f,r=e-l,o=t-n;return b?nativeMin(o,a-r):o}function m(e){var n=e-f,r=e-l;return f===undefined||n>=t||n<0||b&&r>=a}function d(){var e=now_1();if(m(e)){return y(e)}u=setTimeout(d,T(e))}function y(e){u=undefined;if(s&&r){return g(e)}r=o=undefined;return i}function j(){if(u!==undefined){clearTimeout(u)}l=0;r=f=o=u=undefined}function _(){return u===undefined?i:y(now_1())}function S(){var e=now_1(),n=m(e);r=arguments;o=this;f=e;if(n){if(u===undefined){return v(f)}if(b){clearTimeout(u);u=setTimeout(d,t);return g(f)}}if(u===undefined){u=setTimeout(d,t)}return i}S.cancel=j;S.flush=_;return S}var debounce_1=debounce;export{debounce_1 as d};