'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eeecb6ea.js');

/*
 Stencil Client Patch Esm v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["la-akoma-ntoso_8.cjs",[[4,"la-table-of-contents-controller",{"items":[1],"titleFilterPlaceholder":[1,"title-filter-placeholder"],"expandAllBtnClasses":[1,"expand-all-btn-classes"],"collapseAllBtnClasses":[1,"collapse-all-btn-classes"],"searchFilterInputClasses":[1,"search-filter-input-classes"],"titleFilter":[32]}],[4,"la-akoma-ntoso"],[0,"la-decorate-internal-refs",{"akomaNtoso":[1,"akoma-ntoso"],"popups":[4],"flag":[4]}],[0,"la-decorate-terms",{"akomaNtoso":[1,"akoma-ntoso"],"popupDefinitions":[4,"popup-definitions"],"linkTerms":[4,"link-terms"]}],[0,"la-gutter",{"akomaNtoso":[1,"akoma-ntoso"],"layoutItems":[64]},[[0,"laItemChanged","itemChanged"],[0,"click","clicked"]]],[0,"la-gutter-item",{"anchor":[1],"active":[1540]},[[0,"click","onClick"]]],[4,"la-table-of-contents",{"items":[1],"titleFilter":[1,"title-filter"],"filteredItems":[32],"innerItems":[32],"expandAll":[64],"collapseAll":[64]}],[0,"la-toc-item",{"item":[16],"filteredItems":[16],"prependHtml":[1,"prepend-html"],"appendHtml":[1,"append-html"],"expandIconHtml":[1,"expand-icon-html"],"collapseIconHtml":[1,"collapse-icon-html"],"expanded":[1540]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
