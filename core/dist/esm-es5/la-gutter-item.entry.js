/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
import{r as registerInstance,c as createEvent}from"./index-4ffc90d1.js";var gutterItemCss="la-gutter-item{display:block}";var GutterItem=function(){function t(t){registerInstance(this,t);this.laItemChanged=createEvent(this,"laItemChanged",7);this.active=false}t.prototype.activeChanged=function(){this.laItemChanged.emit()};t.prototype.anchorChanged=function(){this.laItemChanged.emit()};t.prototype.onClick=function(){this.active=true};Object.defineProperty(t,"watchers",{get:function(){return{active:["activeChanged"],anchor:["anchorChanged"]}},enumerable:false,configurable:true});return t}();GutterItem.style=gutterItemCss;export{GutterItem as la_gutter_item};