/*!
 * (C) Law Widgets https://laws.africa - GNU Lesser General Public License 3
 */
import { r as registerInstance, h, H as Host, g as getElement } from './index-8a774e85.js';
import { d as debounce_1 } from './debounce-d858ad92.js';
import { P as PROVIDER } from './services-5bcf159d.js';

const tableOfContentsControllerCss = "la-table-of-contents-controller *{-webkit-box-sizing:border-box;box-sizing:border-box}la-table-of-contents-controller .search{width:100%;margin-bottom:5px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative}la-table-of-contents-controller .search__input{-ms-flex:1;flex:1}la-table-of-contents-controller .search__clear-btn{position:absolute;top:0;right:0;height:100%}la-table-of-contents-controller .toggle{margin-bottom:5px}la-table-of-contents-controller .toggle__expand-all-btn{margin-right:5px}";
const LaTableOfContentsControllerStyle0 = tableOfContentsControllerCss;

const TableOfContentsController = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
};
TableOfContentsController.style = LaTableOfContentsControllerStyle0;

export { TableOfContentsController as la_table_of_contents_controller };

//# sourceMappingURL=la-table-of-contents-controller.entry.js.map