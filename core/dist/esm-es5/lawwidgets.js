var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function i(e){try{s(n.next(e))}catch(e){o(e)}}function l(e){try{s(n["throw"](e))}catch(e){o(e)}}function s(e){e.done?r(e.value):a(e.value).then(i,l)}s((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,a,o,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(e){return function(t){return s([e,t])}}function s(l){if(n)throw new TypeError("Generator is already executing.");while(i&&(i=0,l[0]&&(r=0)),r)try{if(n=1,a&&(o=l[0]&2?a["return"]:l[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,l[1])).done)return o;if(a=0,o)l=[l[0]&2,o.value];switch(l[0]){case 0:case 1:o=l;break;case 4:r.label++;return{value:l[1],done:false};case 5:r.label++;a=l[1];l=[0];continue;case 7:l=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(l[0]===6&&r.label<o[1]){r.label=o[1];o=l;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(l);break}if(o[2])r.ops.pop();r.trys.pop();continue}l=t.call(e,r)}catch(e){l=[6,e];a=0}finally{n=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};
/*!
 * (C) Law Widgets https://laws.africa - GNU Lesser General Public License 3
 */import{p as promiseResolve,b as bootstrapLazy}from"./index-8a774e85.js";export{s as setNonce}from"./index-8a774e85.js";import{g as globalScripts}from"./app-globals-d8f8ae8d.js";var patchBrowser=function(){var e=import.meta.url;var t={};if(e!==""){t.resourcesUrl=new URL(".",e).href}return promiseResolve(t)};patchBrowser().then((function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,globalScripts()];case 1:t.sent();return[2,bootstrapLazy([["la-table-of-contents-controller",[[4,"la-table-of-contents-controller",{items:[1],titleFilterPlaceholder:[1,"title-filter-placeholder"],hideClearTitleFilterButton:[4,"hide-clear-title-filter-button"],titleFilterClearBtnClasses:[1,"title-filter-clear-btn-classes"],expandAllBtnClasses:[1,"expand-all-btn-classes"],collapseAllBtnClasses:[1,"collapse-all-btn-classes"],expandAllBtnText:[1,"expand-all-btn-text"],collapseAllBtnText:[1,"collapse-all-btn-text"],expanded:[4],titleFilterInputClasses:[1,"title-filter-input-classes"],frbrExpressionUri:[1537,"frbr-expression-uri"],fetch:[1540],partner:[1537],provider:[1],titleFilter:[32]}]]],["la-akoma-ntoso",[[0,"la-akoma-ntoso",{frbrExpressionUri:[1537,"frbr-expression-uri"],frbrCountry:[1537,"frbr-country"],frbrType:[1537,"frbr-type"],frbrSubtype:[1537,"frbr-subtype"],frbrAuthor:[1537,"frbr-author"],frbrDate:[1537,"frbr-date"],frbrNumber:[1537,"frbr-number"],frbrExpressionDate:[1537,"frbr-expression-date"],frbrLanguage:[1537,"frbr-language"],fetch:[1540],partner:[1537],provider:[1]},null,{provider:["refetch"],fetch:["refetch"],frbrExpressionUri:["parseFrbrExpressionUri"]}]]],["la-decorate-external-refs",[[0,"la-decorate-external-refs",{akomaNtoso:[1,"akoma-ntoso"],popups:[4],partner:[1],provider:[1]},null,{popups:["changePopups"]}]]],["la-decorate-internal-refs",[[0,"la-decorate-internal-refs",{akomaNtoso:[1,"akoma-ntoso"],popups:[4],flag:[4],fetch:[1540],partner:[1537],provider:[1]},null,{flag:["changeFlag"],popups:["changePopups"]}]]],["la-decorate-terms",[[0,"la-decorate-terms",{akomaNtoso:[1,"akoma-ntoso"],popupDefinitions:[4,"popup-definitions"],linkTerms:[4,"link-terms"]},null,{popupDefinitions:["changePopupDefinitions"],linkTerms:["changeLinkTerms"]}]]],["la-gutter",[[0,"la-gutter",{akomaNtoso:[1,"akoma-ntoso"],layoutItems:[64],activateNextItem:[64],activatePrevItem:[64]},[[0,"laItemChanged","itemChanged"],[0,"click","clicked"]]]]],["la-gutter-item",[[0,"la-gutter-item",{anchor:[1],active:[1540]},[[0,"click","onClick"]],{active:["activeChanged"],anchor:["anchorChanged"]}]]],["la-toc-item",[[4,"la-toc-item",{item:[16],filteredItems:[16],prependHtml:[1,"prepend-html"],appendHtml:[1,"append-html"],expandIconHtml:[1,"expand-icon-html"],collapseIconHtml:[1,"collapse-icon-html"],expanded:[1540]}]]],["la-table-of-contents",[[4,"la-table-of-contents",{items:[1],titleFilter:[1,"title-filter"],expanded:[4],frbrExpressionUri:[1537,"frbr-expression-uri"],fetch:[1540],partner:[1537],provider:[1],filteredItems:[32],innerItems:[32],expandAll:[64],collapseAll:[64]},null,{items:["parseItemsProp"],provider:["refetch"],frbrExpressionUri:["refetch"],fetch:["refetch"],titleFilter:["titleFilterChanged"]}]]]],e)]}}))}))}));
//# sourceMappingURL=lawwidgets.js.map