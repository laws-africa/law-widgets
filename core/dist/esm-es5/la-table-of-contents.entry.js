import{__awaiter,__generator,__spreadArray}from"tslib";
/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */import{r as registerInstance,h,H as Host,g as getElement}from"./index-4ffc90d1.js";import{P as PROVIDER,g as getPartner}from"./services-b5707fc1.js";var TableOfContents=function(){function e(e){registerInstance(this,e);this.items=[];this.titleFilter="";this.fetch=false;this.provider=PROVIDER;this.filteredItems=null;this.innerItems=[]}e.prototype.parseItemsProp=function(e){if(typeof e==="string"){this.innerItems=JSON.parse(e)}else if(Array.isArray(e)){this.innerItems=__spreadArray([],e,true)}};e.prototype.refetch=function(){this.fetchContent()};e.prototype.fetchContent=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r,n;return __generator(this,(function(i){switch(i.label){case 0:this.ensurePartner();if(!(this.fetch&&this.frbrExpressionUri&&this.provider))return[3,6];e=this.provider+"/p/"+this.partner+"/e/we/toc.json"+this.frbrExpressionUri;i.label=1;case 1:i.trys.push([1,5,,6]);return[4,fetch(e)];case 2:t=i.sent();if(!t.ok)return[3,4];r=this;return[4,t.json()];case 3:r.innerItems=i.sent().toc;i.label=4;case 4:return[3,6];case 5:n=i.sent();return[3,6];case 6:return[2]}}))}))};e.prototype.ensurePartner=function(){if(!this.partner){this.partner=getPartner()}};e.prototype.componentWillLoad=function(){this.parseItemsProp(this.items);this.titleFilterChanged(this.titleFilter);this.fetchContent()};e.prototype.expandAll=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){Array.from(this.el.querySelectorAll("la-toc-item")).forEach((function(e){e.expanded=true}));return[2]}))}))};e.prototype.collapseAll=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){Array.from(this.el.querySelectorAll("la-toc-item")).forEach((function(e){e.expanded=false}));return[2]}))}))};e.prototype.titleFilterChanged=function(e){if(e){var t=e.toLocaleLowerCase().trim();var r=new Set;function n(e){for(var t=0,i=e.children||[];t<i.length;t++){var o=i[t];r.add(o);n(o)}}function i(e){var o;var s=(((o=e.title)===null||o===void 0?void 0:o.toLocaleLowerCase())||"").includes(t);if(s){n(e)}else{if(e.children){for(var a=0,l=e.children;a<l.length;a++){var c=l[a];s=i(c)||s}}}if(s){r.add(e)}return s}for(var o=0,s=this.innerItems;o<s.length;o++){var a=s[o];i(a)}this.filteredItems=r}else{this.filteredItems=null}this.expandAll()};e.prototype.render=function(){var e=this;var t=function(t){var r=function(t){var r;var n=e.el.querySelector(t);if(n===null||n===void 0?void 0:n.querySelector(t)){return((r=n.querySelector(t))===null||r===void 0?void 0:r.innerHTML)||""}return(n===null||n===void 0?void 0:n.innerHTML)||""};var n=r("[slot='expand-icon']");var i=r("[slot='collapse-icon']");return h("la-toc-item",{item:t,filteredItems:e.filteredItems,expandIconHtml:n,collapseIconHtml:i})};return h(Host,null,h("div",{style:{display:"none"}},h("slot",{name:"expand-icon"}),h("slot",{name:"collapse-icon"})),h("div",{class:"toc-items"},this.innerItems.map((function(e){return t(e)}))))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{items:["parseItemsProp"],provider:["refetch"],frbrExpressionUri:["refetch"],fetch:["refetch"],titleFilter:["titleFilterChanged"]}},enumerable:false,configurable:true});return e}();export{TableOfContents as la_table_of_contents};