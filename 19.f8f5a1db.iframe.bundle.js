/*! For license information please see 19.f8f5a1db.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./dist/esm-es5/linking-92a2f5db.js":function(module,__webpack_exports__,__webpack_require__){"use strict";function getAkomaNtosoElement(t,e){if(e)return e instanceof HTMLElement?e:t.ownerDocument.querySelector(e);var o=t.closest("la-akoma-ntoso");return o||(o=t.ownerDocument.querySelector("la-akoma-ntoso")),o}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"A",(function(){return AkomaNtosoTarget})),__webpack_require__.d(__webpack_exports__,"g",(function(){return getAkomaNtosoElement}));var AkomaNtosoTarget=function(){function t(t,e,o){var n=this;this.component=t,this.selector=e,this.callback=o,this.target=this.findElement(),this.target&&window.MutationObserver?(this.observer=new MutationObserver((function(){n.targetDomChanged()})),this.observer.observe(this.target,{childList:!0})):this.observer=null}return t.prototype.getElement=function(){return this.target},t.prototype.findElement=function(){if(this.selector)return this.selector instanceof HTMLElement?this.selector:this.component.ownerDocument.querySelector(this.selector);var t=this.component.closest("la-akoma-ntoso");return t||(t=this.component.ownerDocument.querySelector("la-akoma-ntoso")),t},t.prototype.targetDomChanged=function(){this.callback&&this.callback()},t}()}}]);
//# sourceMappingURL=19.f8f5a1db.iframe.bundle.js.map