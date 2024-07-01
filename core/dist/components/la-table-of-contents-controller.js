/*!
 * (C) Law Widgets https://laws.africa - GNU Lesser General Public License 3
 */
import { p as proxyCustomElement, H, h, d as Host } from './p-1883ce7c.js';
import { d as debounce_1 } from './p-721c7be8.js';
import { P as PROVIDER } from './p-ea1a9a1f.js';
import { d as defineCustomElement$3 } from './p-ce694acf.js';
import { d as defineCustomElement$2 } from './p-3cd8d744.js';

const tableOfContentsControllerCss = "la-table-of-contents-controller *{-webkit-box-sizing:border-box;box-sizing:border-box}la-table-of-contents-controller .search{width:100%;margin-bottom:5px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative}la-table-of-contents-controller .search__input{-ms-flex:1;flex:1}la-table-of-contents-controller .search__clear-btn{position:absolute;top:0;right:0;height:100%}la-table-of-contents-controller .toggle{margin-bottom:5px}la-table-of-contents-controller .toggle__expand-all-btn{margin-right:5px}";
const LaTableOfContentsControllerStyle0 = tableOfContentsControllerCss;

const TableOfContentsController = /*@__PURE__*/ proxyCustomElement(class TableOfContentsController extends H {
    constructor() {
        super();
        this.__registerHost();
        this.handleTitleChange = debounce_1((e) => {
            this.titleFilter = e.target.value;
        }, 300);
        this.items = [];
        this.titleFilterPlaceholder = 'Search the table of contents';
        this.hideClearTitleFilterButton = false;
        this.titleFilterClearBtnClasses = '';
        this.expandAllBtnClasses = '';
        this.collapseAllBtnClasses = '';
        this.expandAllBtnText = 'Expand all';
        this.collapseAllBtnText = 'Collapse all';
        this.expanded = true;
        this.titleFilterInputClasses = '';
        this.frbrExpressionUri = undefined;
        this.fetch = false;
        this.partner = undefined;
        this.provider = PROVIDER;
        this.titleFilter = '';
    }
    clearTitleFilter() {
        this.titleFilter = '';
    }
    async expandAll() {
        const tocElement = this.el.querySelector('la-table-of-contents');
        tocElement === null || tocElement === void 0 ? void 0 : tocElement.expandAll();
    }
    async collapseAll() {
        const tocElement = this.el.querySelector('la-table-of-contents');
        tocElement === null || tocElement === void 0 ? void 0 : tocElement.collapseAll();
    }
    render() {
        const renderHideClearFilterButton = () => {
            if (this.hideClearTitleFilterButton) {
                return null;
            }
            return (h("button", { class: `search__clear-btn ${this.titleFilterClearBtnClasses}`, type: "button", onClick: () => this.clearTitleFilter(), disabled: !this.titleFilter }, h("slot", { name: "clear-title-filter-icon" }, "\u2715")));
        };
        return (h(Host, null, h("div", { class: "search" }, h("input", { class: `search__input ${this.titleFilterInputClasses}`, value: this.titleFilter, placeholder: this.titleFilterPlaceholder, onInput: (e) => this.handleTitleChange(e) }), renderHideClearFilterButton()), h("div", { class: "toggle" }, h("button", { type: "button", class: `toggle__expand-all-btn ${this.expandAllBtnClasses}`, onClick: () => this.expandAll() }, this.expandAllBtnText), h("button", { type: "button", class: `toggle__collapse-all-btn ${this.collapseAllBtnClasses}`, onClick: () => this.collapseAll() }, this.collapseAllBtnText)), h("la-table-of-contents", { items: this.items, titleFilter: this.titleFilter, fetch: this.fetch, provider: this.provider, partner: this.partner, "frbr-expression-uri": this.frbrExpressionUri, expanded: this.expanded }, h("span", { slot: "expand-icon" }, h("slot", { name: "expand-icon" })), h("span", { slot: "collapse-icon" }, h("slot", { name: "collapse-icon" })))));
    }
    get el() { return this; }
    static get style() { return LaTableOfContentsControllerStyle0; }
}, [4, "la-table-of-contents-controller", {
        "items": [1],
        "titleFilterPlaceholder": [1, "title-filter-placeholder"],
        "hideClearTitleFilterButton": [4, "hide-clear-title-filter-button"],
        "titleFilterClearBtnClasses": [1, "title-filter-clear-btn-classes"],
        "expandAllBtnClasses": [1, "expand-all-btn-classes"],
        "collapseAllBtnClasses": [1, "collapse-all-btn-classes"],
        "expandAllBtnText": [1, "expand-all-btn-text"],
        "collapseAllBtnText": [1, "collapse-all-btn-text"],
        "expanded": [4],
        "titleFilterInputClasses": [1, "title-filter-input-classes"],
        "frbrExpressionUri": [1537, "frbr-expression-uri"],
        "fetch": [1540],
        "partner": [1537],
        "provider": [1],
        "titleFilter": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["la-table-of-contents-controller", "la-table-of-contents", "la-toc-item"];
    components.forEach(tagName => { switch (tagName) {
        case "la-table-of-contents-controller":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TableOfContentsController);
            }
            break;
        case "la-table-of-contents":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "la-toc-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const LaTableOfContentsController = TableOfContentsController;
const defineCustomElement = defineCustomElement$1;

export { LaTableOfContentsController, defineCustomElement };

//# sourceMappingURL=la-table-of-contents-controller.js.map