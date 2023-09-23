/*! For license information please see 9.50481234.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9,19,20],{"./dist/esm-es5/la-decorate-external-refs.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"la_decorate_external_refs",(function(){return DecorateExternalRefs}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/esm-es5/index-4ffc90d1.js"),_tippy_esm_8c0320be_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./dist/esm-es5/tippy.esm-8c0320be.js"),_linking_92a2f5db_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm-es5/linking-92a2f5db.js"),_services_b5707fc1_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm-es5/services-b5707fc1.js"),DecorateExternalRefs=function(){function t(t){Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_5__.r)(this,t),this.tippies=[],this.popups=!1,this.provider=_services_b5707fc1_js__WEBPACK_IMPORTED_MODULE_8__.P}return t.prototype.componentWillLoad=function(){var t=this,e=new _linking_92a2f5db_js__WEBPACK_IMPORTED_MODULE_7__.A(this.el,this.akomaNtoso,(function(){t.componentDidLoad()}));this.akomaNtosoElement=e.getElement(),this.tippyContainer=document.createElement("div"),this.tippyContainer.className="la-decorate-external-refs__popup",document.body.appendChild(this.tippyContainer)},t.prototype.componentDidLoad=function(){this.changePopups(this.popups)},t.prototype.changePopups=function(t){for(var e=0,r=this.tippies;e<r.length;e++){r[e].destroy()}this.tippies=[],this.akomaNtosoElement&&t&&this.createPopups()},t.prototype.createPopups=function(){var t=this;this.akomaNtosoElement&&(this.tippies=Object(_tippy_esm_8c0320be_js__WEBPACK_IMPORTED_MODULE_6__.t)(this.akomaNtosoElement.querySelectorAll('a.akn-ref[data-href^="/akn/"]'),{appendTo:function appendTo(){return t.tippyContainer},allowHTML:!0,hideOnClick:!0,interactive:!0,maxWidth:450,onTrigger:this.onTrigger.bind(this),theme:"light-border"}))},t.prototype.onTrigger=function(t){return Object(tslib__WEBPACK_IMPORTED_MODULE_4__.a)(this,void 0,void 0,(function(){var e,r;return Object(tslib__WEBPACK_IMPORTED_MODULE_4__.c)(this,(function(o){switch(o.label){case 0:return e=t.reference.getAttribute("data-href")||"",[4,this.fetchContent(e)];case 1:return(r=o.sent())&&t.setContent('\n        <div>\n          <div class="tippy-content__body">'.concat(r,"</div>\n        </div>")),[2]}}))}))},t.prototype.ensurePartner=function(){this.partner||(this.partner=Object(_services_b5707fc1_js__WEBPACK_IMPORTED_MODULE_8__.g)())},t.prototype.fetchContent=function(t){return Object(tslib__WEBPACK_IMPORTED_MODULE_4__.a)(this,void 0,void 0,(function(){var e,r;return Object(tslib__WEBPACK_IMPORTED_MODULE_4__.c)(this,(function(a){switch(a.label){case 0:if(this.ensurePartner(),!t||!this.provider)return[3,6];e=this.provider+"/p/"+this.partner+"/e/popup"+t,a.label=1;case 1:return a.trys.push([1,5,,6]),[4,fetch(e)];case 2:return(r=a.sent()).ok?[4,r.text()]:[3,4];case 3:return[2,a.sent()];case 4:return[3,6];case 5:return a.sent(),[3,6];case 6:return[2,null]}}))}))},Object.defineProperty(t.prototype,"el",{get:function get(){return Object(_index_4ffc90d1_js__WEBPACK_IMPORTED_MODULE_5__.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function get(){return{popups:["changePopups"]}},enumerable:!1,configurable:!0}),t}();DecorateExternalRefs.style='.la-decorate-external-refs__popup .tippy-box[data-animation=fade][data-state=hidden]{opacity:0}.la-decorate-external-refs__popup [data-tippy-root]{max-width:calc(100vw - 10px)}.la-decorate-external-refs__popup .tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform}.la-decorate-external-refs__popup .tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.la-decorate-external-refs__popup .tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;-webkit-transform-origin:center top;transform-origin:center top}.la-decorate-external-refs__popup .tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.la-decorate-external-refs__popup .tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;-webkit-transform-origin:center bottom;transform-origin:center bottom}.la-decorate-external-refs__popup .tippy-box[data-placement^=left]>.tippy-arrow{right:0}.la-decorate-external-refs__popup .tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;-webkit-transform-origin:center left;transform-origin:center left}.la-decorate-external-refs__popup .tippy-box[data-placement^=right]>.tippy-arrow{left:0}.la-decorate-external-refs__popup .tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;-webkit-transform-origin:center right;transform-origin:center right}.la-decorate-external-refs__popup .tippy-box[data-inertia][data-state=visible]{-webkit-transition-timing-function:cubic-bezier(0.54, 1.5, 0.38, 1.11);transition-timing-function:cubic-bezier(0.54, 1.5, 0.38, 1.11)}.la-decorate-external-refs__popup .tippy-arrow{width:16px;height:16px;color:#333}.la-decorate-external-refs__popup .tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.la-decorate-external-refs__popup .tippy-content{position:relative;padding:5px 9px;z-index:1}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]{background-color:#fff;background-clip:padding-box;border:1px solid rgba(0, 8, 16, 0.15);color:#333;-webkit-box-shadow:0 4px 14px -2px rgba(0, 8, 16, 0.08);box-shadow:0 4px 14px -2px rgba(0, 8, 16, 0.08)}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-backdrop{background-color:#fff}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-arrow:after,.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{content:"";position:absolute;z-index:-1}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-arrow:after{border-color:transparent;border-style:solid}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before{border-top-color:#fff}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after{border-top-color:rgba(0, 8, 16, 0.2);border-width:7px 7px 0;top:17px;left:1px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg{top:16px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after{top:17px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:#fff;bottom:16px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after{border-bottom-color:rgba(0, 8, 16, 0.2);border-width:0 7px 7px;bottom:17px;left:1px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after{bottom:17px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before{border-left-color:#fff}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after{border-left-color:rgba(0, 8, 16, 0.2);border-width:7px 0 7px 7px;left:17px;top:1px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg{left:11px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after{left:12px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before{border-right-color:#fff;right:16px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after{border-width:7px 7px 7px 0;right:17px;top:1px;border-right-color:rgba(0, 8, 16, 0.2)}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg{right:11px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after{right:12px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow{fill:#fff}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);background-size:16px 6px;width:16px;height:6px}.la-decorate-external-refs__popup .tippy-content{padding:0}.la-decorate-external-refs__popup .tippy-content__title{padding:0.5rem 0.75rem;margin-bottom:0;font-size:1rem;font-weight:bold;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px);background-color:#f7f7f7}.la-decorate-external-refs__popup .tippy-content__body{padding:0.5rem 0.75rem;background-color:white}.la-decorate-external-refs__popup .tippy-content la-akoma-ntoso{max-height:40vh;overflow-y:auto}'},"./dist/esm-es5/linking-92a2f5db.js":function(module,__webpack_exports__,__webpack_require__){"use strict";function getAkomaNtosoElement(t,e){if(e)return e instanceof HTMLElement?e:t.ownerDocument.querySelector(e);var o=t.closest("la-akoma-ntoso");return o||(o=t.ownerDocument.querySelector("la-akoma-ntoso")),o}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"A",(function(){return AkomaNtosoTarget})),__webpack_require__.d(__webpack_exports__,"g",(function(){return getAkomaNtosoElement}));var AkomaNtosoTarget=function(){function t(t,e,o){var n=this;this.component=t,this.selector=e,this.callback=o,this.target=this.findElement(),this.target&&window.MutationObserver?(this.observer=new MutationObserver((function(){n.targetDomChanged()})),this.observer.observe(this.target,{childList:!0})):this.observer=null}return t.prototype.getElement=function(){return this.target},t.prototype.findElement=function(){if(this.selector)return this.selector instanceof HTMLElement?this.selector:this.component.ownerDocument.querySelector(this.selector);var t=this.component.closest("la-akoma-ntoso");return t||(t=this.component.ownerDocument.querySelector("la-akoma-ntoso")),t},t.prototype.targetDomChanged=function(){this.callback&&this.callback()},t}()},"./dist/esm-es5/services-b5707fc1.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"P",(function(){return PROVIDER})),__webpack_require__.d(__webpack_exports__,"g",(function(){return getPartner}));__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js");function getPartner(){return document.location.hostname.replace(/^www\./,"")}var PROVIDER="https://services.lawsafrica.com/v1"}}]);
//# sourceMappingURL=9.50481234.iframe.bundle.js.map