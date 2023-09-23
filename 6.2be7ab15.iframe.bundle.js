/*! For license information please see 6.2be7ab15.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6,8,19],{"./dist/esm-es5/debounce-203d4308.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(global){__webpack_require__.d(__webpack_exports__,"d",(function(){return debounce_1}));__webpack_require__("./node_modules/core-js/modules/es.global-this.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js");var isObject_1=function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==global?global:"undefined"!=typeof self?self:{},_freeGlobal="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,_root=_freeGlobal||freeSelf||Function("return this")(),now_1=function now(){return _root.Date.now()},_Symbol=_root.Symbol,objectProto$1=Object.prototype,hasOwnProperty=objectProto$1.hasOwnProperty,nativeObjectToString$1=objectProto$1.toString,symToStringTag$1=_Symbol?_Symbol.toStringTag:void 0;var _getRawTag=function getRawTag(e){var t=hasOwnProperty.call(e,symToStringTag$1),n=e[symToStringTag$1];try{e[symToStringTag$1]=void 0;var r=!0}catch(e){}var o=nativeObjectToString$1.call(e);return r&&(t?e[symToStringTag$1]=n:delete e[symToStringTag$1]),o},nativeObjectToString=Object.prototype.toString;var _objectToString=function objectToString(e){return nativeObjectToString.call(e)},symToStringTag=_Symbol?_Symbol.toStringTag:void 0;var _baseGetTag=function baseGetTag(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":symToStringTag&&symToStringTag in Object(e)?_getRawTag(e):_objectToString(e)};var isObjectLike_1=function isObjectLike(e){return null!=e&&"object"==typeof e};var isSymbol_1=function isSymbol(e){return"symbol"==typeof e||isObjectLike_1(e)&&"[object Symbol]"==_baseGetTag(e)},reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;var toNumber_1=function toNumber(e){if("number"==typeof e)return e;if(isSymbol_1(e))return NaN;if(isObject_1(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject_1(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(reTrim,"");var n=reIsBinary.test(e);return n||reIsOctal.test(e)?freeParseInt(e.slice(2),n?2:8):reIsBadHex.test(e)?NaN:+e},nativeMax=Math.max,nativeMin=Math.min;var debounce_1=function debounce(e,t,n){var r,o,a,i,u,f,l=0,c=!1,b=!1,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,a=o;return r=o=void 0,l=t,i=e.apply(a,n)}function v(e){return l=e,u=setTimeout(d,t),c?g(e):i}function m(e){var n=e-f;return void 0===f||n>=t||n<0||b&&e-l>=a}function d(){var e=now_1();if(m(e))return y(e);u=setTimeout(d,function T(e){var o=t-(e-f);return b?nativeMin(o,a-(e-l)):o}(e))}function y(e){return u=void 0,s&&r?g(e):(r=o=void 0,i)}function S(){var e=now_1(),n=m(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return v(f);if(b)return clearTimeout(u),u=setTimeout(d,t),g(f)}return void 0===u&&(u=setTimeout(d,t)),i}return t=toNumber_1(t)||0,isObject_1(n)&&(c=!!n.leading,a=(b="maxWait"in n)?nativeMax(toNumber_1(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),S.cancel=function j(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},S.flush=function _(){return void 0===u?i:y(now_1())},S}}.call(this,__webpack_require__("./node_modules/webpack/buildin/global.js"))},"./dist/esm-es5/la-gutter.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"la_gutter",(function(){return Gutter}));__webpack_require__("./node_modules/core-js/modules/es.weak-map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.sort.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.string.anchor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var tslib__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./dist/esm-es5/index-4ffc90d1.js"),_debounce_203d4308_js__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./dist/esm-es5/debounce-203d4308.js"),_linking_92a2f5db_js__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./dist/esm-es5/linking-92a2f5db.js"),GutterLayout=function(){function t(t){this.root=t,this.buffer=10,this.tops=new WeakMap,this.anchors=new WeakMap}return t.prototype.layout=function(t){this.updateAnchorsAndItems(t),this.updateTops(t);var e=(t=this.sortItems(t)).find((function(t){return t.active}));if(e){var r=t.indexOf(e);if(r>-1){var o=this.anchors.get(e);if(o){var i=this.tops.get(o);if(i)return e.style.top="".concat(i,"px"),this.layoutUpwards(t,r-1,i-this.buffer),void this.layoutDownwards(t,r+1,i+e.clientHeight+this.buffer)}}}this.layoutDownwards(t,0,0)},t.prototype.sortItems=function(t){return Object(tslib__WEBPACK_IMPORTED_MODULE_16__.d)([],t,!0).sort(this.compareItems.bind(this))},t.prototype.compareItems=function(t,e){var r=this.anchors.get(t),o=this.anchors.get(e);if(r){if(o){var i=this.tops.get(r),s=this.tops.get(o);return i?s?i-s:1:-1}return 1}return-1},t.prototype.layoutUpwards=function(t,e,r){for(var o=e;o>=0;o--){var i=t[o],s=this.anchors.get(i);if(s){var n=this.tops.get(s);n&&(n+i.clientHeight>=r&&(n=r-i.clientHeight),i.style.top="".concat(n,"px"),r=n-this.buffer)}}},t.prototype.layoutDownwards=function(t,e,r){for(var o=e;o<t.length;o++){var i=t[o],s=this.anchors.get(i);if(s){var n=this.tops.get(s);n&&(n=Math.max(r,n),i.style.top="".concat(n,"px"),r=n+i.clientHeight+this.buffer)}}},t.prototype.updateAnchorsAndItems=function(t){this.anchors=new WeakMap;for(var e=0,r=t;e<r.length;e++){var o=r[e],i=this.getItemAnchor(o);i&&this.anchors.set(o,i),o.style.display=i?"":"none"}},t.prototype.getItemAnchor=function(t){return t.anchor?t.anchor instanceof HTMLElement?this.root.contains(t.anchor)?t.anchor:null:this.root.querySelector(t.anchor):null},t.prototype.updateTops=function(t){this.tops=new WeakMap;for(var e=0,r=t;e<r.length;e++){var o=r[e],i=this.anchors.get(o);i&&!this.tops.has(i)&&this.tops.set(i,this.calculateTop(i))}},t.prototype.calculateTop=function(t){for(var e=0,r=t;r&&r!==this.root;)e+=r.offsetTop,r=r.offsetParent;return e},t}(),Gutter=function(){function t(t){Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_17__.r)(this,t),this.layoutComplete=Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_17__.c)(this,"layoutComplete",7),this.debounceDelay=100}return t.prototype.componentWillLoad=function(){this.akomaNtosoElement=Object(_linking_92a2f5db_js__WEBPACK_IMPORTED_MODULE_19__.g)(this.el,this.akomaNtoso),this.queueLayout=Object(_debounce_203d4308_js__WEBPACK_IMPORTED_MODULE_18__.d)(this.layoutItems.bind(this),this.debounceDelay),this.mutationObserver=new MutationObserver(this.queueLayout),this.mutationObserver.observe(this.el,{childList:!0})},t.prototype.componentDidLoad=function(){this.setupLayout(),this.layoutItems()},t.prototype.disconnectedCallback=function(){this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect()},t.prototype.itemChanged=function(t){var e=t.target;(null==e?void 0:e.active)&&this.setOtherItemsInactive(e),this.queueLayout()},t.prototype.clicked=function(t){var e=t.target;e&&!e.closest("la-gutter-item")&&Array.from(this.items()).forEach((function(t){t.active=!1}))},t.prototype.setOtherItemsInactive=function(t){Array.from(this.items()).forEach((function(e){e!=t&&(e.active=!1)}))},t.prototype.setupLayout=function(){this.akomaNtosoElement&&(this.layout=new GutterLayout(this.akomaNtosoElement),window.ResizeObserver&&(this.resizeObserver&&this.resizeObserver.disconnect(),this.resizeObserver=new ResizeObserver(this.queueLayout),this.resizeObserver.observe(this.akomaNtosoElement)))},t.prototype.layoutItems=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_16__.a)(this,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_16__.c)(this,(function(t){return this.layout&&(this.layout.layout(Object(tslib__WEBPACK_IMPORTED_MODULE_16__.d)([],this.items(),!0)),this.layoutComplete.emit()),[2]}))}))},t.prototype.activateNextItem=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_16__.a)(this,void 0,void 0,(function(){var t,e,r;return Object(tslib__WEBPACK_IMPORTED_MODULE_16__.c)(this,(function(o){return 1===(t=this.layout?this.layout.sortItems(this.getVisibleItems()):[]).length?(t[0].active=!0,[2,t[0]]):t.length>1?(e=t.findIndex((function(t){return t.active})),(r=-1===e||e===t.length-1?t[0]:t[e+1]).active=!0,[2,r]):[2,null]}))}))},t.prototype.activatePrevItem=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_16__.a)(this,void 0,void 0,(function(){var t,e,r;return Object(tslib__WEBPACK_IMPORTED_MODULE_16__.c)(this,(function(o){return 1===(t=this.layout?this.layout.sortItems(this.getVisibleItems()):[]).length?(t[0].active=!0,[2,t[0]]):t.length>1?(e=t.findIndex((function(t){return t.active})),(r=-1===e||0===e?t[t.length-1]:t[e-1]).active=!0,[2,r]):[2,null]}))}))},t.prototype.items=function(){return this.el.querySelectorAll("la-gutter-item")},t.prototype.getVisibleItems=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_16__.d)([],this.items(),!0).filter((function(t){return"none"!==t.style.display}))},Object.defineProperty(t.prototype,"el",{get:function get(){return Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_17__.g)(this)},enumerable:!1,configurable:!0}),t}();Gutter.style=".la-akoma-ntoso-with-gutter{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.la-akoma-ntoso-with-gutter>la-akoma-ntoso{-ms-flex:80%;flex:80%;max-width:80%;position:relative;padding-right:0.5rem}.la-akoma-ntoso-with-gutter>la-gutter{-ms-flex:20%;flex:20%;max-width:20%;position:relative;overflow-y:hidden;background-color:rgba(0, 0, 0, 0.05);padding-left:0.5rem;padding-right:0.5rem}la-gutter>la-gutter-item{position:absolute;left:1rem;width:calc(100% - 1.5rem);-webkit-transition:top ease-out 100ms, left ease-out 100ms;transition:top ease-out 100ms, left ease-out 100ms;z-index:2}la-gutter>la-gutter-item[active]{left:0.5rem}"},"./dist/esm-es5/linking-92a2f5db.js":function(module,__webpack_exports__,__webpack_require__){"use strict";function getAkomaNtosoElement(t,e){if(e)return e instanceof HTMLElement?e:t.ownerDocument.querySelector(e);var o=t.closest("la-akoma-ntoso");return o||(o=t.ownerDocument.querySelector("la-akoma-ntoso")),o}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"A",(function(){return AkomaNtosoTarget})),__webpack_require__.d(__webpack_exports__,"g",(function(){return getAkomaNtosoElement}));var AkomaNtosoTarget=function(){function t(t,e,o){var n=this;this.component=t,this.selector=e,this.callback=o,this.target=this.findElement(),this.target&&window.MutationObserver?(this.observer=new MutationObserver((function(){n.targetDomChanged()})),this.observer.observe(this.target,{childList:!0})):this.observer=null}return t.prototype.getElement=function(){return this.target},t.prototype.findElement=function(){if(this.selector)return this.selector instanceof HTMLElement?this.selector:this.component.ownerDocument.querySelector(this.selector);var t=this.component.closest("la-akoma-ntoso");return t||(t=this.component.ownerDocument.querySelector("la-akoma-ntoso")),t},t.prototype.targetDomChanged=function(){this.callback&&this.callback()},t}()},"./node_modules/core-js/internals/number-parse-int.js":function(module,exports,__webpack_require__){var global=__webpack_require__("./node_modules/core-js/internals/global.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),trim=__webpack_require__("./node_modules/core-js/internals/string-trim.js").trim,whitespaces=__webpack_require__("./node_modules/core-js/internals/whitespaces.js"),$parseInt=global.parseInt,Symbol=global.Symbol,ITERATOR=Symbol&&Symbol.iterator,hex=/^[+-]?0x/i,exec=uncurryThis(hex.exec),FORCED=8!==$parseInt(whitespaces+"08")||22!==$parseInt(whitespaces+"0x16")||ITERATOR&&!fails((function(){$parseInt(Object(ITERATOR))}));module.exports=FORCED?function parseInt(string,radix){var S=trim(toString(string));return $parseInt(S,radix>>>0||(exec(hex,S)?16:10))}:$parseInt},"./node_modules/core-js/modules/es.date.to-string.js":function(module,exports,__webpack_require__){var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js"),DatePrototype=Date.prototype,nativeDateToString=uncurryThis(DatePrototype.toString),thisTimeValue=uncurryThis(DatePrototype.getTime);"Invalid Date"!=String(new Date(NaN))&&defineBuiltIn(DatePrototype,"toString",(function toString(){var value=thisTimeValue(this);return value==value?nativeDateToString(this):"Invalid Date"}))},"./node_modules/core-js/modules/es.parse-int.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$parseInt=__webpack_require__("./node_modules/core-js/internals/number-parse-int.js");$({global:!0,forced:parseInt!=$parseInt},{parseInt:$parseInt})}}]);
//# sourceMappingURL=6.2be7ab15.iframe.bundle.js.map