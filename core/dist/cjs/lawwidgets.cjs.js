/*!
 * (C) Law Widgets https://laws.africa - GNU Lesser General Public License 3
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b4026e21.js');
const appGlobals = require('./app-globals-c79cfff0.js');

/*
 Stencil Client Patch Browser v4.19.1 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('lawwidgets.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["la-table-of-contents-controller.cjs",[[4,"la-table-of-contents-controller",{"items":[1],"titleFilterPlaceholder":[1,"title-filter-placeholder"],"hideClearTitleFilterButton":[4,"hide-clear-title-filter-button"],"titleFilterClearBtnClasses":[1,"title-filter-clear-btn-classes"],"expandAllBtnClasses":[1,"expand-all-btn-classes"],"collapseAllBtnClasses":[1,"collapse-all-btn-classes"],"expandAllBtnText":[1,"expand-all-btn-text"],"collapseAllBtnText":[1,"collapse-all-btn-text"],"expanded":[4],"titleFilterInputClasses":[1,"title-filter-input-classes"],"frbrExpressionUri":[1537,"frbr-expression-uri"],"fetch":[1540],"partner":[1537],"provider":[1],"titleFilter":[32]}]]],["la-akoma-ntoso.cjs",[[0,"la-akoma-ntoso",{"frbrExpressionUri":[1537,"frbr-expression-uri"],"frbrCountry":[1537,"frbr-country"],"frbrType":[1537,"frbr-type"],"frbrSubtype":[1537,"frbr-subtype"],"frbrAuthor":[1537,"frbr-author"],"frbrDate":[1537,"frbr-date"],"frbrNumber":[1537,"frbr-number"],"frbrExpressionDate":[1537,"frbr-expression-date"],"frbrLanguage":[1537,"frbr-language"],"fetch":[1540],"partner":[1537],"provider":[1]},null,{"provider":["refetch"],"fetch":["refetch"],"frbrExpressionUri":["parseFrbrExpressionUri"]}]]],["la-decorate-external-refs.cjs",[[0,"la-decorate-external-refs",{"akomaNtoso":[1,"akoma-ntoso"],"popups":[4],"partner":[1],"provider":[1]},null,{"popups":["changePopups"]}]]],["la-decorate-internal-refs.cjs",[[0,"la-decorate-internal-refs",{"akomaNtoso":[1,"akoma-ntoso"],"popups":[4],"flag":[4],"fetch":[1540],"partner":[1537],"provider":[1]},null,{"flag":["changeFlag"],"popups":["changePopups"]}]]],["la-decorate-terms.cjs",[[0,"la-decorate-terms",{"akomaNtoso":[1,"akoma-ntoso"],"popupDefinitions":[4,"popup-definitions"],"linkTerms":[4,"link-terms"]},null,{"popupDefinitions":["changePopupDefinitions"],"linkTerms":["changeLinkTerms"]}]]],["la-gutter.cjs",[[0,"la-gutter",{"akomaNtoso":[1,"akoma-ntoso"],"layoutItems":[64],"activateNextItem":[64],"activatePrevItem":[64]},[[0,"laItemChanged","itemChanged"],[0,"click","clicked"]]]]],["la-gutter-item.cjs",[[0,"la-gutter-item",{"anchor":[1],"active":[1540]},[[0,"click","onClick"]],{"active":["activeChanged"],"anchor":["anchorChanged"]}]]],["la-toc-item.cjs",[[4,"la-toc-item",{"item":[16],"filteredItems":[16],"prependHtml":[1,"prepend-html"],"appendHtml":[1,"append-html"],"expandIconHtml":[1,"expand-icon-html"],"collapseIconHtml":[1,"collapse-icon-html"],"expanded":[1540]}]]],["la-table-of-contents.cjs",[[4,"la-table-of-contents",{"items":[1],"titleFilter":[1,"title-filter"],"expanded":[4],"frbrExpressionUri":[1537,"frbr-expression-uri"],"fetch":[1540],"partner":[1537],"provider":[1],"filteredItems":[32],"innerItems":[32],"expandAll":[64],"collapseAll":[64]},null,{"items":["parseItemsProp"],"provider":["refetch"],"frbrExpressionUri":["refetch"],"fetch":["refetch"],"titleFilter":["titleFilterChanged"]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=lawwidgets.cjs.js.map