/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
System.register(["./p-15bc3e28.system.js"],(function(t){"use strict";var e,i,n,l;return{setters:[function(t){e=t.r;i=t.c;n=t.h;l=t.H}],execute:function(){var o="la-toc-item{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}la-toc-item *{-webkit-box-sizing:border-box;box-sizing:border-box}la-toc-item .indented{width:1.4em;height:1.4em}la-toc-item .content{-ms-flex:1;flex:1}la-toc-item .content__action{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}la-toc-item .content__action__title{-ms-flex-positive:1;flex-grow:1}la-toc-item .content__children{display:none}la-toc-item[expanded]>.content>.content__children{display:inherit}la-toc-item.excluded{display:none}la-toc-item .indented__toggle-btn{cursor:pointer;display:inline-block;font-size:smaller;text-align:center;padding:1px 6px}";var s=t("la_toc_item",function(){function t(t){var n=this;e(this,t);this.itemRendered=i(this,"itemRendered",7);this.itemTitleClicked=i(this,"itemTitleClicked",7);this.item={};this.filteredItems=null;this.prependHtml="";this.appendHtml="";this.expandIconHtml="";this.collapseIconHtml="";this.expanded=true;this.onItemTitleClick=function(t){n.itemTitleClicked.emit(t)}}t.prototype.toggle=function(){this.expanded=!this.expanded};t.prototype.componentDidRender=function(){this.itemRendered.emit()};t.prototype.render=function(){var t=this;var e;var i=!!((e=this.item.children)===null||e===void 0?void 0:e.length);var o=!this.filteredItems||this.filteredItems.has(this.item);var s=this.item.href||"#".concat(this.item.id||"");var c=function(){if(t.expanded){return t.collapseIconHtml?n("span",{innerHTML:t.collapseIconHtml}):n("span",null,"▼")}return t.expandIconHtml?n("span",{innerHTML:t.expandIconHtml}):n("span",null,"►")};return n(l,Object.assign({},i?{parent:i}:{},{class:"".concat(!o?"excluded":"")}),n("div",{class:"indented"},i?n("div",{class:"indented__toggle-btn",role:"button",onClick:function(){return t.toggle()}},c()):null),n("div",{class:"content"},n("div",{class:"content__action"},this.prependHtml?n("div",{class:"content__action__prepend",innerHTML:this.prependHtml}):null,n("a",{href:s,class:"content__action__title",onClick:this.onItemTitleClick},this.item.title),this.appendHtml?n("div",{class:"content__action__append",innerHTML:this.appendHtml}):null),n("div",{class:"content__children"},n("slot",null))))};return t}());s.style=o}}}));