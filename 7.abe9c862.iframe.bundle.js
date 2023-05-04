/*! For license information please see 7.abe9c862.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8,20],{"./dist/esm-es5/debounce-203d4308.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(global){__webpack_require__.d(__webpack_exports__,"d",(function(){return debounce_1}));__webpack_require__("./node_modules/core-js/modules/es.global-this.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js");var isObject_1=function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==global?global:"undefined"!=typeof self?self:{},_freeGlobal="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,_root=_freeGlobal||freeSelf||Function("return this")(),now_1=function now(){return _root.Date.now()},_Symbol=_root.Symbol,objectProto$1=Object.prototype,hasOwnProperty=objectProto$1.hasOwnProperty,nativeObjectToString$1=objectProto$1.toString,symToStringTag$1=_Symbol?_Symbol.toStringTag:void 0;var _getRawTag=function getRawTag(e){var t=hasOwnProperty.call(e,symToStringTag$1),n=e[symToStringTag$1];try{e[symToStringTag$1]=void 0;var r=!0}catch(e){}var o=nativeObjectToString$1.call(e);return r&&(t?e[symToStringTag$1]=n:delete e[symToStringTag$1]),o},nativeObjectToString=Object.prototype.toString;var _objectToString=function objectToString(e){return nativeObjectToString.call(e)},symToStringTag=_Symbol?_Symbol.toStringTag:void 0;var _baseGetTag=function baseGetTag(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":symToStringTag&&symToStringTag in Object(e)?_getRawTag(e):_objectToString(e)};var isObjectLike_1=function isObjectLike(e){return null!=e&&"object"==typeof e};var isSymbol_1=function isSymbol(e){return"symbol"==typeof e||isObjectLike_1(e)&&"[object Symbol]"==_baseGetTag(e)},reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;var toNumber_1=function toNumber(e){if("number"==typeof e)return e;if(isSymbol_1(e))return NaN;if(isObject_1(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject_1(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(reTrim,"");var n=reIsBinary.test(e);return n||reIsOctal.test(e)?freeParseInt(e.slice(2),n?2:8):reIsBadHex.test(e)?NaN:+e},nativeMax=Math.max,nativeMin=Math.min;var debounce_1=function debounce(e,t,n){var r,o,a,i,u,f,l=0,c=!1,b=!1,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,a=o;return r=o=void 0,l=t,i=e.apply(a,n)}function v(e){return l=e,u=setTimeout(d,t),c?g(e):i}function m(e){var n=e-f;return void 0===f||n>=t||n<0||b&&e-l>=a}function d(){var e=now_1();if(m(e))return y(e);u=setTimeout(d,function T(e){var o=t-(e-f);return b?nativeMin(o,a-(e-l)):o}(e))}function y(e){return u=void 0,s&&r?g(e):(r=o=void 0,i)}function S(){var e=now_1(),n=m(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return v(f);if(b)return clearTimeout(u),u=setTimeout(d,t),g(f)}return void 0===u&&(u=setTimeout(d,t)),i}return t=toNumber_1(t)||0,isObject_1(n)&&(c=!!n.leading,a=(b="maxWait"in n)?nativeMax(toNumber_1(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),S.cancel=function j(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},S.flush=function _(){return void 0===u?i:y(now_1())},S}}.call(this,__webpack_require__("./node_modules/webpack/buildin/global.js"))},"./dist/esm-es5/la-table-of-contents-controller.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"la_table_of_contents_controller",(function(){return TableOfContentsController}));__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/esm-es5/index-4ffc90d1.js"),_debounce_203d4308_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/esm-es5/debounce-203d4308.js"),_services_b5707fc1_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/esm-es5/services-b5707fc1.js"),TableOfContentsController=function(){function t(t){var e=this;Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_2__.r)(this,t),this.items=[],this.titleFilterPlaceholder="Search the table of contents",this.hideClearTitleFilterButton=!1,this.titleFilterClearBtnClasses="",this.expandAllBtnClasses="",this.collapseAllBtnClasses="",this.expandAllBtnText="Expand all",this.collapseAllBtnText="Collapse all",this.expanded=!0,this.titleFilterInputClasses="",this.fetch=!1,this.provider=_services_b5707fc1_js__WEBPACK_IMPORTED_MODULE_4__.P,this.titleFilter="",this.handleTitleChange=Object(_debounce_203d4308_js__WEBPACK_IMPORTED_MODULE_3__.d)((function(t){e.titleFilter=t.target.value}),300)}return t.prototype.clearTitleFilter=function(){this.titleFilter=""},t.prototype.expandAll=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_1__.a)(this,void 0,void 0,(function(){var t;return Object(tslib__WEBPACK_IMPORTED_MODULE_1__.c)(this,(function(e){return null==(t=this.el.querySelector("la-table-of-contents"))||t.expandAll(),[2]}))}))},t.prototype.collapseAll=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_1__.a)(this,void 0,void 0,(function(){var t;return Object(tslib__WEBPACK_IMPORTED_MODULE_1__.c)(this,(function(e){return null==(t=this.el.querySelector("la-table-of-contents"))||t.collapseAll(),[2]}))}))},t.prototype.render=function(){var t=this;return Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_2__.h)(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_2__.H,null,Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_2__.h)("div",{class:"search"},Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_2__.h)("input",{class:"search__input ".concat(this.titleFilterInputClasses),value:this.titleFilter,placeholder:this.titleFilterPlaceholder,onInput:function onInput(e){return t.handleTitleChange(e)}}),function e(){return t.hideClearTitleFilterButton?null:Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_2__.h)("button",{class:"search__clear-btn ".concat(t.titleFilterClearBtnClasses),type:"button",onClick:function onClick(){return t.clearTitleFilter()},disabled:!t.titleFilter},Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot",{name:"clear-title-filter-icon"},"✕"))}()),Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_2__.h)("div",{class:"toggle"},Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_2__.h)("button",{type:"button",class:"toggle__expand-all-btn ".concat(this.expandAllBtnClasses),onClick:function onClick(){return t.expandAll()}},this.expandAllBtnText),Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_2__.h)("button",{type:"button",class:"toggle__collapse-all-btn ".concat(this.collapseAllBtnClasses),onClick:function onClick(){return t.collapseAll()}},this.collapseAllBtnText)),Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_2__.h)("la-table-of-contents",{items:this.items,titleFilter:this.titleFilter,fetch:this.fetch,provider:this.provider,partner:this.partner,"frbr-expression-uri":this.frbrExpressionUri,expanded:this.expanded},Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_2__.h)("span",{slot:"expand-icon"},Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot",{name:"expand-icon"})),Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_2__.h)("span",{slot:"collapse-icon"},Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot",{name:"collapse-icon"}))))},Object.defineProperty(t.prototype,"el",{get:function get(){return Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_2__.g)(this)},enumerable:!1,configurable:!0}),t}();TableOfContentsController.style="la-table-of-contents-controller *{-webkit-box-sizing:border-box;box-sizing:border-box}la-table-of-contents-controller .search{width:100%;margin-bottom:5px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative}la-table-of-contents-controller .search__input{-ms-flex:1;flex:1}la-table-of-contents-controller .search__clear-btn{position:absolute;top:0;right:0;height:100%}la-table-of-contents-controller .toggle{margin-bottom:5px}la-table-of-contents-controller .toggle__expand-all-btn{margin-right:5px}"},"./dist/esm-es5/services-b5707fc1.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"P",(function(){return PROVIDER})),__webpack_require__.d(__webpack_exports__,"g",(function(){return getPartner}));__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js");function getPartner(){return document.location.hostname.replace(/^www\./,"")}var PROVIDER="https://services.lawsafrica.com/v1"},"./node_modules/core-js/internals/number-parse-int.js":function(module,exports,__webpack_require__){var global=__webpack_require__("./node_modules/core-js/internals/global.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),trim=__webpack_require__("./node_modules/core-js/internals/string-trim.js").trim,whitespaces=__webpack_require__("./node_modules/core-js/internals/whitespaces.js"),$parseInt=global.parseInt,Symbol=global.Symbol,ITERATOR=Symbol&&Symbol.iterator,hex=/^[+-]?0x/i,exec=uncurryThis(hex.exec),FORCED=8!==$parseInt(whitespaces+"08")||22!==$parseInt(whitespaces+"0x16")||ITERATOR&&!fails((function(){$parseInt(Object(ITERATOR))}));module.exports=FORCED?function parseInt(string,radix){var S=trim(toString(string));return $parseInt(S,radix>>>0||(exec(hex,S)?16:10))}:$parseInt},"./node_modules/core-js/modules/es.date.to-string.js":function(module,exports,__webpack_require__){var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js"),DatePrototype=Date.prototype,nativeDateToString=uncurryThis(DatePrototype.toString),thisTimeValue=uncurryThis(DatePrototype.getTime);"Invalid Date"!=String(new Date(NaN))&&defineBuiltIn(DatePrototype,"toString",(function toString(){var value=thisTimeValue(this);return value==value?nativeDateToString(this):"Invalid Date"}))},"./node_modules/core-js/modules/es.parse-int.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$parseInt=__webpack_require__("./node_modules/core-js/internals/number-parse-int.js");$({global:!0,forced:parseInt!=$parseInt},{parseInt:$parseInt})}}]);
//# sourceMappingURL=7.abe9c862.iframe.bundle.js.map