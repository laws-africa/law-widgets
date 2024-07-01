var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,s){function a(t){try{f(i.next(t))}catch(t){s(t)}}function o(t){try{f(i["throw"](t))}catch(t){s(t)}}function f(t){t.done?n(t.value):r(t.value).then(a,o)}f((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,a;return a={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(t){return function(e){return f([t,e])}}function f(o){if(i)throw new TypeError("Generator is already executing.");while(a&&(a=0,o[0]&&(n=0)),n)try{if(i=1,r&&(s=o[0]&2?r["return"]:o[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,o[1])).done)return s;if(r=0,s)o=[o[0]&2,s.value];switch(o[0]){case 0:case 1:s=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;r=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(s=n.trys,s=s.length>0&&s[s.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!s||o[1]>s[0]&&o[1]<s[3])){n.label=o[1];break}if(o[0]===6&&n.label<s[1]){n.label=s[1];s=o;break}if(s&&n.label<s[2]){n.label=s[2];n.ops.push(o);break}if(s[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t];r=0}finally{i=s=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++){if(s||!(i in e)){if(!s)s=Array.prototype.slice.call(e,0,i);s[i]=e[i]}}return t.concat(s||Array.prototype.slice.call(e))};
/*!
 * (C) Law Widgets https://laws.africa - GNU Lesser General Public License 3
 */import{r as registerInstance,h,H as Host,g as getElement}from"./index-8a774e85.js";import{P as PROVIDER,g as getPartner}from"./services-5bcf159d.js";var TableOfContents=function(){function t(t){registerInstance(this,t);this.expandIconHtml="";this.collapseIconHtml="";this.items=[];this.titleFilter="";this.expanded=true;this.frbrExpressionUri=undefined;this.fetch=false;this.partner=undefined;this.provider=PROVIDER;this.filteredItems=null;this.innerItems=[]}t.prototype.parseItemsProp=function(t){if(typeof t==="string"){this.innerItems=JSON.parse(t)}else if(Array.isArray(t)){this.innerItems=__spreadArray([],t,true)}};t.prototype.refetch=function(){this.fetchContent()};t.prototype.fetchContent=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n,i;return __generator(this,(function(r){switch(r.label){case 0:this.ensurePartner();if(!(this.fetch&&this.frbrExpressionUri&&this.provider))return[3,6];t=this.provider+"/p/"+this.partner+"/e/we/toc.json"+this.frbrExpressionUri;r.label=1;case 1:r.trys.push([1,5,,6]);return[4,fetch(t)];case 2:e=r.sent();if(!e.ok)return[3,4];n=this;return[4,e.json()];case 3:n.innerItems=r.sent().toc;r.label=4;case 4:return[3,6];case 5:i=r.sent();return[3,6];case 6:return[2]}}))}))};t.prototype.ensurePartner=function(){if(!this.partner){this.partner=getPartner()}};t.prototype.getSlotHTML=function(t){var e;var n=this.el.querySelector(t);if(n===null||n===void 0?void 0:n.querySelector(t)){return((e=n.querySelector(t))===null||e===void 0?void 0:e.innerHTML)||""}return(n===null||n===void 0?void 0:n.innerHTML)||""};t.prototype.componentWillLoad=function(){this.expandIconHtml=this.getSlotHTML("[slot='expand-icon']");this.collapseIconHtml=this.getSlotHTML("[slot='collapse-icon']");this.parseItemsProp(this.items);this.titleFilterChanged(this.titleFilter);this.fetchContent()};t.prototype.expandAll=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){Array.from(this.el.querySelectorAll("la-toc-item")).forEach((function(t){t.expanded=true}));return[2]}))}))};t.prototype.collapseAll=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){Array.from(this.el.querySelectorAll("la-toc-item")).forEach((function(t){t.expanded=false}));return[2]}))}))};t.prototype.titleFilterChanged=function(t){if(t){var e=t.toLocaleLowerCase().trim();var n=new Set;function i(t){for(var e=0,r=t.children||[];e<r.length;e++){var s=r[e];n.add(s);i(s)}}function r(t){var s;var a=(((s=t.title)===null||s===void 0?void 0:s.toLocaleLowerCase())||"").includes(e);if(a){i(t)}else{if(t.children){for(var o=0,f=t.children;o<f.length;o++){var c=f[o];a=r(c)||a}}}if(a){n.add(t)}return a}for(var s=0,a=this.innerItems;s<a.length;s++){var o=a[s];r(o)}this.filteredItems=n}else{this.filteredItems=null}this.expandAll()};t.prototype.renderItem=function(t){var e=this;var n=(t.children||[]).map((function(t){return e.renderItem(t)}));var i=t.expanded===undefined?this.expanded:t.expanded;return h("la-toc-item",{item:t,filteredItems:this.filteredItems,expandIconHtml:this.expandIconHtml,collapseIconHtml:this.collapseIconHtml,expanded:i},n)};t.prototype.render=function(){var t=this;return h(Host,{key:"f8b5eaf0e2c359af4eea3b7d6ab3fcad94f393bb"},h("div",{key:"ddca6abce36c9be705a172c12e833a6f9d088b89",style:{display:"none"}},h("slot",{key:"6f55f20f2cb614bb7a7519c44a71f2f94ff60b14",name:"expand-icon"}),h("slot",{key:"9bc755de6658047c64c1c3f5e42a4b6342a883f8",name:"collapse-icon"})),this.innerItems.map((function(e){return t.renderItem(e)})))};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{items:["parseItemsProp"],provider:["refetch"],frbrExpressionUri:["refetch"],fetch:["refetch"],titleFilter:["titleFilterChanged"]}},enumerable:false,configurable:true});return t}();export{TableOfContents as la_table_of_contents};
//# sourceMappingURL=la-table-of-contents.entry.js.map