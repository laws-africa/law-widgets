/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
import { d as doc, N as NAMESPACE, w as win, p as promiseResolve, b as bootstrapLazy } from './index-4ffc90d1.js';

/*
 Stencil Client Patch Browser v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // @ts-ignore
    const scriptElm = Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        ;
    const importMeta = "";
    const opts = scriptElm['data-opts'] || {} ;
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (!win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-296881a3.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};

patchBrowser().then(options => {
  return bootstrapLazy([["la-table-of-contents-controller",[[4,"la-table-of-contents-controller",{"items":[1],"titleFilterPlaceholder":[1,"title-filter-placeholder"],"hideClearTitleFilterButton":[4,"hide-clear-title-filter-button"],"titleFilterClearBtnClasses":[1,"title-filter-clear-btn-classes"],"expandAllBtnClasses":[1,"expand-all-btn-classes"],"collapseAllBtnClasses":[1,"collapse-all-btn-classes"],"expandAllBtnText":[1,"expand-all-btn-text"],"collapseAllBtnText":[1,"collapse-all-btn-text"],"expanded":[4],"titleFilterInputClasses":[1,"title-filter-input-classes"],"frbrExpressionUri":[1537,"frbr-expression-uri"],"fetch":[1540],"partner":[1537],"provider":[1],"titleFilter":[32]}]]],["la-akoma-ntoso",[[0,"la-akoma-ntoso",{"frbrExpressionUri":[1537,"frbr-expression-uri"],"frbrCountry":[1537,"frbr-country"],"frbrType":[1537,"frbr-type"],"frbrSubtype":[1537,"frbr-subtype"],"frbrAuthor":[1537,"frbr-author"],"frbrDate":[1537,"frbr-date"],"frbrNumber":[1537,"frbr-number"],"frbrExpressionDate":[1537,"frbr-expression-date"],"frbrLanguage":[1537,"frbr-language"],"fetch":[1540],"partner":[1537],"provider":[1]}]]],["la-decorate-external-refs",[[0,"la-decorate-external-refs",{"akomaNtoso":[1,"akoma-ntoso"],"popups":[4],"partner":[1],"provider":[1]}]]],["la-decorate-internal-refs",[[0,"la-decorate-internal-refs",{"akomaNtoso":[1,"akoma-ntoso"],"popups":[4],"flag":[4],"fetch":[1540],"partner":[1537],"provider":[1]}]]],["la-decorate-terms",[[0,"la-decorate-terms",{"akomaNtoso":[1,"akoma-ntoso"],"popupDefinitions":[4,"popup-definitions"],"linkTerms":[4,"link-terms"]}]]],["la-gutter",[[0,"la-gutter",{"akomaNtoso":[1,"akoma-ntoso"],"layoutItems":[64],"activateNextItem":[64],"activatePrevItem":[64]},[[0,"laItemChanged","itemChanged"],[0,"click","clicked"]]]]],["la-gutter-item",[[0,"la-gutter-item",{"anchor":[1],"active":[1540]},[[0,"click","onClick"]]]]],["la-toc-item",[[4,"la-toc-item",{"item":[16],"filteredItems":[16],"prependHtml":[1,"prepend-html"],"appendHtml":[1,"append-html"],"expandIconHtml":[1,"expand-icon-html"],"collapseIconHtml":[1,"collapse-icon-html"],"expanded":[1540]}]]],["la-table-of-contents",[[4,"la-table-of-contents",{"items":[1],"titleFilter":[1,"title-filter"],"expanded":[4],"frbrExpressionUri":[1537,"frbr-expression-uri"],"fetch":[1540],"partner":[1537],"provider":[1],"filteredItems":[32],"innerItems":[32],"expandAll":[64],"collapseAll":[64]}]]]], options);
});
