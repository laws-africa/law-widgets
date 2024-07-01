var __awaiter=this&&this.__awaiter||function(t,i,e,r){function n(t){return t instanceof e?t:new e((function(i){i(t)}))}return new(e||(e=Promise))((function(e,s){function u(t){try{o(r.next(t))}catch(t){s(t)}}function a(t){try{o(r["throw"](t))}catch(t){s(t)}}function o(t){t.done?e(t.value):n(t.value).then(u,a)}o((r=r.apply(t,i||[])).next())}))};var __generator=this&&this.__generator||function(t,i){var e={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,n,s,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(t){return function(i){return o([t,i])}}function o(a){if(r)throw new TypeError("Generator is already executing.");while(u&&(u=0,a[0]&&(e=0)),e)try{if(r=1,n&&(s=a[0]&2?n["return"]:a[0]?n["throw"]||((s=n["return"])&&s.call(n),0):n.next)&&!(s=s.call(n,a[1])).done)return s;if(n=0,s)a=[a[0]&2,s.value];switch(a[0]){case 0:case 1:s=a;break;case 4:e.label++;return{value:a[1],done:false};case 5:e.label++;n=a[1];a=[0];continue;case 7:a=e.ops.pop();e.trys.pop();continue;default:if(!(s=e.trys,s=s.length>0&&s[s.length-1])&&(a[0]===6||a[0]===2)){e=0;continue}if(a[0]===3&&(!s||a[1]>s[0]&&a[1]<s[3])){e.label=a[1];break}if(a[0]===6&&e.label<s[1]){e.label=s[1];s=a;break}if(s&&e.label<s[2]){e.label=s[2];e.ops.push(a);break}if(s[2])e.ops.pop();e.trys.pop();continue}a=i.call(t,e)}catch(t){a=[6,t];n=0}finally{r=s=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(t,i,e){if(e||arguments.length===2)for(var r=0,n=i.length,s;r<n;r++){if(s||!(r in i)){if(!s)s=Array.prototype.slice.call(i,0,r);s[r]=i[r]}}return t.concat(s||Array.prototype.slice.call(i))};
/*!
 * (C) Law Widgets https://laws.africa - GNU Lesser General Public License 3
 */import{r as registerInstance,c as createEvent,g as getElement}from"./index-8a774e85.js";import{d as debounce_1}from"./debounce-d858ad92.js";import{g as getAkomaNtosoElement}from"./linking-1350d515.js";var GutterLayout=function(){function t(t){this.root=t;this.buffer=10;this.tops=new WeakMap;this.anchors=new WeakMap}t.prototype.layout=function(t){this.updateAnchorsAndItems(t);this.updateTops(t);t=this.sortItems(t);var i=t.find((function(t){return t.active}));if(i){var e=t.indexOf(i);if(e>-1){var r=this.anchors.get(i);if(r){var n=this.tops.get(r);if(n){i.style.top="".concat(n,"px");this.layoutUpwards(t,e-1,n-this.buffer);this.layoutDownwards(t,e+1,n+i.clientHeight+this.buffer);return}}}}this.layoutDownwards(t,0,0)};t.prototype.sortItems=function(t){return __spreadArray([],t,true).sort(this.compareItems.bind(this))};t.prototype.compareItems=function(t,i){var e=this.anchors.get(t);var r=this.anchors.get(i);if(e){if(r){var n=this.tops.get(e);var s=this.tops.get(r);if(n){if(s){return n-s}else{return 1}}else{return-1}}else{return 1}}else{return-1}};t.prototype.layoutUpwards=function(t,i,e){for(var r=i;r>=0;r--){var n=t[r];var s=this.anchors.get(n);if(s){var u=this.tops.get(s);if(u){if(u+n.clientHeight>=e){u=e-n.clientHeight}n.style.top="".concat(u,"px");e=u-this.buffer}}}};t.prototype.layoutDownwards=function(t,i,e){for(var r=i;r<t.length;r++){var n=t[r];var s=this.anchors.get(n);if(s){var u=this.tops.get(s);if(u){u=Math.max(e,u);n.style.top="".concat(u,"px");e=u+n.clientHeight+this.buffer}}}};t.prototype.updateAnchorsAndItems=function(t){this.anchors=new WeakMap;for(var i=0,e=t;i<e.length;i++){var r=e[i];var n=this.getItemAnchor(r);if(n){this.anchors.set(r,n)}r.style.display=n?"":"none"}};t.prototype.getItemAnchor=function(t){if(t.anchor){if(t.anchor instanceof HTMLElement){return this.root.contains(t.anchor)?t.anchor:null}else{return this.root.querySelector(t.anchor)}}return null};t.prototype.updateTops=function(t){this.tops=new WeakMap;for(var i=0,e=t;i<e.length;i++){var r=e[i];var n=this.anchors.get(r);if(n&&!this.tops.has(n)){this.tops.set(n,this.calculateTop(n))}}};t.prototype.calculateTop=function(t){var i=0;var e=t;while(e&&e!==this.root){i+=e.offsetTop;e=e.offsetParent}return i};return t}();var gutterCss=".la-akoma-ntoso-with-gutter{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.la-akoma-ntoso-with-gutter>la-akoma-ntoso{-ms-flex:80%;flex:80%;max-width:80%;position:relative;padding-right:0.5rem}.la-akoma-ntoso-with-gutter>la-gutter{-ms-flex:20%;flex:20%;max-width:20%;position:relative;overflow-y:hidden;background-color:rgba(0, 0, 0, 0.05);padding-left:0.5rem;padding-right:0.5rem}la-gutter>la-gutter-item{position:absolute;left:1rem;width:calc(100% - 1.5rem);-webkit-transition:top ease-out 100ms, left ease-out 100ms;transition:top ease-out 100ms, left ease-out 100ms;z-index:2}la-gutter>la-gutter-item[active]{left:0.5rem;z-index:3}";var LaGutterStyle0=gutterCss;var Gutter=function(){function t(t){registerInstance(this,t);this.layoutComplete=createEvent(this,"layoutComplete",7);this.debounceDelay=100;this.akomaNtoso=undefined}t.prototype.componentWillLoad=function(){this.akomaNtosoElement=getAkomaNtosoElement(this.el,this.akomaNtoso);this.queueLayout=debounce_1(this.layoutItems.bind(this),this.debounceDelay);this.mutationObserver=new MutationObserver(this.queueLayout);this.mutationObserver.observe(this.el,{childList:true})};t.prototype.componentDidLoad=function(){this.setupLayout();this.layoutItems()};t.prototype.disconnectedCallback=function(){if(this.mutationObserver){this.mutationObserver.disconnect()}if(this.resizeObserver){this.resizeObserver.disconnect()}};t.prototype.itemChanged=function(t){var i=t.target;if(i===null||i===void 0?void 0:i.active){this.setOtherItemsInactive(i)}this.queueLayout()};t.prototype.clicked=function(t){var i=t.target;if(i&&!i.closest("la-gutter-item")){Array.from(this.items()).forEach((function(t){t.active=false}))}};t.prototype.setOtherItemsInactive=function(t){Array.from(this.items()).forEach((function(i){if(i!=t){i.active=false}}))};t.prototype.setupLayout=function(){if(this.akomaNtosoElement){this.layout=new GutterLayout(this.akomaNtosoElement);if(window.ResizeObserver){if(this.resizeObserver)this.resizeObserver.disconnect();this.resizeObserver=new ResizeObserver(this.queueLayout);this.resizeObserver.observe(this.akomaNtosoElement)}}};t.prototype.layoutItems=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.layout){this.layout.layout(__spreadArray([],this.items(),true));this.layoutComplete.emit()}return[2]}))}))};t.prototype.activateNextItem=function(){return __awaiter(this,void 0,void 0,(function(){var t,i,e;return __generator(this,(function(r){t=this.layout?this.layout.sortItems(this.getVisibleItems()):[];if(t.length===1){t[0].active=true;return[2,t[0]]}else if(t.length>1){i=t.findIndex((function(t){return t.active}));e=i===-1||i===t.length-1?t[0]:t[i+1];e.active=true;return[2,e]}else{return[2,null]}return[2]}))}))};t.prototype.activatePrevItem=function(){return __awaiter(this,void 0,void 0,(function(){var t,i,e;return __generator(this,(function(r){t=this.layout?this.layout.sortItems(this.getVisibleItems()):[];if(t.length===1){t[0].active=true;return[2,t[0]]}else if(t.length>1){i=t.findIndex((function(t){return t.active}));e=i===-1||i===0?t[t.length-1]:t[i-1];e.active=true;return[2,e]}else{return[2,null]}return[2]}))}))};t.prototype.items=function(){return this.el.querySelectorAll("la-gutter-item")};t.prototype.getVisibleItems=function(){return __spreadArray([],this.items(),true).filter((function(t){return t.style.display!=="none"}))};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();Gutter.style=LaGutterStyle0;export{Gutter as la_gutter};
//# sourceMappingURL=la-gutter.entry.js.map