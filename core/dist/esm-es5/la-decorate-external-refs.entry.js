import{__awaiter,__generator}from"tslib";
/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */import{r as registerInstance,g as getElement}from"./index-4ffc90d1.js";import{t as tippy}from"./tippy.esm-8c0320be.js";import{A as AkomaNtosoTarget}from"./linking-92a2f5db.js";import{P as PROVIDER,g as getPartner}from"./services-b5707fc1.js";var decorateExternalRefsCss='.la-decorate-external-refs__popup{position:relative}.la-decorate-external-refs__popup .tippy-box[data-animation=fade][data-state=hidden]{opacity:0}.la-decorate-external-refs__popup [data-tippy-root]{max-width:calc(100vw - 10px)}.la-decorate-external-refs__popup .tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform}.la-decorate-external-refs__popup .tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.la-decorate-external-refs__popup .tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;-webkit-transform-origin:center top;transform-origin:center top}.la-decorate-external-refs__popup .tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.la-decorate-external-refs__popup .tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;-webkit-transform-origin:center bottom;transform-origin:center bottom}.la-decorate-external-refs__popup .tippy-box[data-placement^=left]>.tippy-arrow{right:0}.la-decorate-external-refs__popup .tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;-webkit-transform-origin:center left;transform-origin:center left}.la-decorate-external-refs__popup .tippy-box[data-placement^=right]>.tippy-arrow{left:0}.la-decorate-external-refs__popup .tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;-webkit-transform-origin:center right;transform-origin:center right}.la-decorate-external-refs__popup .tippy-box[data-inertia][data-state=visible]{-webkit-transition-timing-function:cubic-bezier(0.54, 1.5, 0.38, 1.11);transition-timing-function:cubic-bezier(0.54, 1.5, 0.38, 1.11)}.la-decorate-external-refs__popup .tippy-arrow{width:16px;height:16px;color:#333}.la-decorate-external-refs__popup .tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.la-decorate-external-refs__popup .tippy-content{position:relative;padding:5px 9px;z-index:1}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]{background-color:#fff;background-clip:padding-box;border:1px solid rgba(0, 8, 16, 0.15);color:#333;-webkit-box-shadow:0 4px 14px -2px rgba(0, 8, 16, 0.08);box-shadow:0 4px 14px -2px rgba(0, 8, 16, 0.08)}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-backdrop{background-color:#fff}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-arrow:after,.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{content:"";position:absolute;z-index:-1}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-arrow:after{border-color:transparent;border-style:solid}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before{border-top-color:#fff}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after{border-top-color:rgba(0, 8, 16, 0.2);border-width:7px 7px 0;top:17px;left:1px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg{top:16px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after{top:17px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:#fff;bottom:16px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after{border-bottom-color:rgba(0, 8, 16, 0.2);border-width:0 7px 7px;bottom:17px;left:1px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after{bottom:17px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before{border-left-color:#fff}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after{border-left-color:rgba(0, 8, 16, 0.2);border-width:7px 0 7px 7px;left:17px;top:1px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg{left:11px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after{left:12px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before{border-right-color:#fff;right:16px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after{border-width:7px 7px 7px 0;right:17px;top:1px;border-right-color:rgba(0, 8, 16, 0.2)}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg{right:11px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after{right:12px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow{fill:#fff}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);background-size:16px 6px;width:16px;height:6px}.la-decorate-external-refs__popup .tippy-content{padding:0}.la-decorate-external-refs__popup .tippy-content__title{padding:0.5rem 0.75rem;margin-bottom:0;font-size:1rem;font-weight:bold;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px);background-color:#f7f7f7}.la-decorate-external-refs__popup .tippy-content__body{padding:0.5rem 0.75rem;background-color:white}.la-decorate-external-refs__popup .tippy-content la-akoma-ntoso{max-height:40vh;overflow-y:auto}';var DecorateExternalRefs=function(){function t(t){registerInstance(this,t);this.tippies=[];this.popups=false;this.provider=PROVIDER}t.prototype.componentWillLoad=function(){var t=this;var e=new AkomaNtosoTarget(this.el,this.akomaNtoso,(function(){t.componentDidLoad()}));this.akomaNtosoElement=e.getElement();this.tippyContainer=document.createElement("div");this.tippyContainer.className="la-decorate-external-refs__popup";document.body.appendChild(this.tippyContainer)};t.prototype.componentDidLoad=function(){this.changePopups(this.popups)};t.prototype.changePopups=function(t){for(var e=0,r=this.tippies;e<r.length;e++){var o=r[e];o.destroy()}this.tippies=[];if(this.akomaNtosoElement&&t){this.createPopups()}};t.prototype.createPopups=function(){var t=this;if(this.akomaNtosoElement){this.tippies=tippy(this.akomaNtosoElement.querySelectorAll('a.akn-ref[data-href^="/akn/"]'),{appendTo:function(){return t.tippyContainer},allowHTML:true,hideOnClick:true,interactive:true,maxWidth:450,onTrigger:this.onTrigger.bind(this),theme:"light-border"})}};t.prototype.onTrigger=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r;return __generator(this,(function(o){switch(o.label){case 0:e=t.reference.getAttribute("data-href")||"";return[4,this.fetchContent(e)];case 1:r=o.sent();if(r){t.setContent('\n        <div>\n          <div class="tippy-content__body">'.concat(r,"</div>\n        </div>"))}return[2]}}))}))};t.prototype.ensurePartner=function(){if(!this.partner){this.partner=getPartner()}};t.prototype.fetchContent=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r,o;return __generator(this,(function(a){switch(a.label){case 0:this.ensurePartner();if(!(t&&this.provider))return[3,6];e=this.provider+"/p/"+this.partner+"/e/popup"+t;a.label=1;case 1:a.trys.push([1,5,,6]);return[4,fetch(e)];case 2:r=a.sent();if(!r.ok)return[3,4];return[4,r.text()];case 3:return[2,a.sent()];case 4:return[3,6];case 5:o=a.sent();return[3,6];case 6:return[2,null]}}))}))};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{popups:["changePopups"]}},enumerable:false,configurable:true});return t}();DecorateExternalRefs.style=decorateExternalRefsCss;export{DecorateExternalRefs as la_decorate_external_refs};