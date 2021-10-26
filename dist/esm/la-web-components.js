import { p as promiseResolve, b as bootstrapLazy } from './index-11dd5b7a.js';

/*
 Stencil Client Patch Browser v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["la-akoma-ntoso_5",[[4,"la-akoma-ntoso"],[0,"la-decorate-internal-refs",{"akomaNtoso":[1,"akoma-ntoso"],"popups":[4],"flag":[4]}],[0,"la-decorate-terms",{"akomaNtoso":[1,"akoma-ntoso"],"popupDefinitions":[4,"popup-definitions"],"linkTerms":[4,"link-terms"]}],[0,"la-gutter",{"akomaNtoso":[1,"akoma-ntoso"],"layoutItems":[64]},[[0,"laItemChanged","itemChanged"],[0,"click","clicked"]]],[0,"la-gutter-item",{"anchor":[1],"active":[1540]},[[0,"click","onClick"]]]]]], options);
});
