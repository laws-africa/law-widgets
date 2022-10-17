/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
import{d as doc,N as NAMESPACE,w as win,p as promiseResolve,b as bootstrapLazy}from"./index-4ffc90d1.js";var getDynamicImportFunction=function(e){return"__sc_import_".concat(e.replace(/\s|-/g,"_"))};var patchBrowser=function(){var e=Array.from(doc.querySelectorAll("script")).find((function(e){return new RegExp("/".concat(NAMESPACE,"(\\.esm)?\\.js($|\\?|#)")).test(e.src)||e.getAttribute("data-stencil-namespace")===NAMESPACE}));var t="";var r=e["data-opts"]||{};if(t!==""){r.resourcesUrl=new URL(".",t).href}else{r.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,win.location.href)).href;{patchDynamicImport(r.resourcesUrl,e)}if(!win.customElements){return import("./dom-296881a3.js").then((function(){return r}))}}return promiseResolve(r)};var patchDynamicImport=function(e,t){var r=getDynamicImportFunction(NAMESPACE);try{win[r]=new Function("w","return import(w);//".concat(Math.random()))}catch(o){var a=new Map;win[r]=function(o){var n=new URL(o,e).href;var l=a.get(n);if(!l){var s=doc.createElement("script");s.type="module";s.crossOrigin=t.crossOrigin;s.src=URL.createObjectURL(new Blob(["import * as m from '".concat(n,"'; window.").concat(r,".m = m;")],{type:"application/javascript"}));l=new Promise((function(e){s.onload=function(){e(win[r].m);s.remove()}}));a.set(n,l);doc.head.appendChild(s)}return l}}};patchBrowser().then((function(e){return bootstrapLazy([["la-table-of-contents-controller",[[4,"la-table-of-contents-controller",{items:[1],titleFilterPlaceholder:[1,"title-filter-placeholder"],hideClearTitleFilterButton:[4,"hide-clear-title-filter-button"],titleFilterClearBtnClasses:[1,"title-filter-clear-btn-classes"],expandAllBtnClasses:[1,"expand-all-btn-classes"],collapseAllBtnClasses:[1,"collapse-all-btn-classes"],titleFilterInputClasses:[1,"title-filter-input-classes"],frbrExpressionUri:[1537,"frbr-expression-uri"],fetch:[1540],partner:[1537],provider:[1],titleFilter:[32]}]]],["la-akoma-ntoso",[[0,"la-akoma-ntoso",{frbrExpressionUri:[1537,"frbr-expression-uri"],frbrCountry:[1537,"frbr-country"],frbrType:[1537,"frbr-type"],frbrSubtype:[1537,"frbr-subtype"],frbrAuthor:[1537,"frbr-author"],frbrDate:[1537,"frbr-date"],frbrNumber:[1537,"frbr-number"],frbrExpressionDate:[1537,"frbr-expression-date"],frbrLanguage:[1537,"frbr-language"],fetch:[1540],partner:[1537],provider:[1]}]]],["la-decorate-external-refs",[[0,"la-decorate-external-refs",{akomaNtoso:[1,"akoma-ntoso"],popups:[4],partner:[1],provider:[1]}]]],["la-decorate-internal-refs",[[0,"la-decorate-internal-refs",{akomaNtoso:[1,"akoma-ntoso"],popups:[4],flag:[4],fetch:[1540],partner:[1537],provider:[1]}]]],["la-decorate-terms",[[0,"la-decorate-terms",{akomaNtoso:[1,"akoma-ntoso"],popupDefinitions:[4,"popup-definitions"],linkTerms:[4,"link-terms"]}]]],["la-gutter",[[0,"la-gutter",{akomaNtoso:[1,"akoma-ntoso"],layoutItems:[64],activateNextItem:[64],activatePrevItem:[64]},[[0,"laItemChanged","itemChanged"],[0,"click","clicked"]]]]],["la-gutter-item",[[0,"la-gutter-item",{anchor:[1],active:[1540]},[[0,"click","onClick"]]]]],["la-toc-item",[[0,"la-toc-item",{item:[16],filteredItems:[16],prependHtml:[1,"prepend-html"],appendHtml:[1,"append-html"],expandIconHtml:[1,"expand-icon-html"],collapseIconHtml:[1,"collapse-icon-html"],expanded:[1540]}]]],["la-table-of-contents",[[4,"la-table-of-contents",{items:[1],titleFilter:[1,"title-filter"],frbrExpressionUri:[1537,"frbr-expression-uri"],fetch:[1540],partner:[1537],provider:[1],filteredItems:[32],innerItems:[32],expandAll:[64],collapseAll:[64]}]]]],e)}));