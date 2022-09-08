import { p as promiseResolve, b as bootstrapLazy } from './index-cb6a05df.js';

/*
 Stencil Client Patch Esm v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["la-decorate-terms",[[0,"la-decorate-terms",{"akomaNtoso":[1,"akoma-ntoso"],"popupDefinitions":[4,"popup-definitions"],"linkTerms":[4,"link-terms"]}]]],["la-gutter",[[0,"la-gutter",{"akomaNtoso":[1,"akoma-ntoso"],"layoutItems":[64],"activateNextItem":[64],"activatePrevItem":[64]},[[0,"laItemChanged","itemChanged"],[0,"click","clicked"]]]]],["la-gutter-item",[[0,"la-gutter-item",{"anchor":[1],"active":[1540]},[[0,"click","onClick"]]]]],["la-akoma-ntoso_6",[[4,"la-table-of-contents-controller",{"items":[1],"titleFilterPlaceholder":[1,"title-filter-placeholder"],"hideClearTitleFilterButton":[4,"hide-clear-title-filter-button"],"titleFilterClearBtnClasses":[1,"title-filter-clear-btn-classes"],"expandAllBtnClasses":[1,"expand-all-btn-classes"],"collapseAllBtnClasses":[1,"collapse-all-btn-classes"],"titleFilterInputClasses":[1,"title-filter-input-classes"],"frbrExpressionUri":[1537,"frbr-expression-uri"],"fetch":[1540],"partner":[1537],"provider":[1],"titleFilter":[32]}],[0,"la-akoma-ntoso",{"frbrExpressionUri":[1537,"frbr-expression-uri"],"frbrCountry":[1537,"frbr-country"],"frbrType":[1537,"frbr-type"],"frbrSubtype":[1537,"frbr-subtype"],"frbrAuthor":[1537,"frbr-author"],"frbrDate":[1537,"frbr-date"],"frbrNumber":[1537,"frbr-number"],"frbrExpressionDate":[1537,"frbr-expression-date"],"frbrLanguage":[1537,"frbr-language"],"fetch":[1540],"partner":[1537],"provider":[1]}],[0,"la-decorate-external-refs",{"akomaNtoso":[1,"akoma-ntoso"],"popups":[4],"partner":[1],"provider":[1]}],[0,"la-decorate-internal-refs",{"akomaNtoso":[1,"akoma-ntoso"],"popups":[4],"flag":[4],"fetch":[1540],"partner":[1537],"provider":[1]}],[4,"la-table-of-contents",{"items":[1],"titleFilter":[1,"title-filter"],"frbrExpressionUri":[1537,"frbr-expression-uri"],"fetch":[1540],"partner":[1537],"provider":[1],"filteredItems":[32],"innerItems":[32],"expandAll":[64],"collapseAll":[64]}],[0,"la-toc-item",{"item":[16],"filteredItems":[16],"prependHtml":[1,"prepend-html"],"appendHtml":[1,"append-html"],"expandIconHtml":[1,"expand-icon-html"],"collapseIconHtml":[1,"collapse-icon-html"],"expanded":[1540]}]]]], options);
  });
};

export { defineCustomElements };
