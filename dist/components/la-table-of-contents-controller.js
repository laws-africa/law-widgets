import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { P as PROVIDER } from './services.js';
import { d as debounce_1 } from './debounce.js';
import { d as defineCustomElement$3 } from './table-of-contents.js';
import { d as defineCustomElement$2 } from './toc-item.js';

const tableOfContentsControllerCss = "la-table-of-contents-controller *{-webkit-box-sizing:border-box;box-sizing:border-box}la-table-of-contents-controller .search{width:100%;margin-bottom:5px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative}la-table-of-contents-controller .search__input{-ms-flex:1;flex:1}la-table-of-contents-controller .search__clear-btn{position:absolute;top:0;right:0;height:100%}la-table-of-contents-controller .toggle{margin-bottom:5px}la-table-of-contents-controller .toggle__expand-all-btn{margin-right:5px}";

const TableOfContentsController = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * JSON value of array of items or string value parsed to array of items used to build the table of contents. Each
     * item must have a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`).
     * */
    this.items = [];
    /**
     * Placeholder for search title filter
     * */
    this.titleFilterPlaceholder = 'Search the table of contents';
    /**
     * If true, hides clear title filter button
     */
    this.hideClearTitleFilterButton = false;
    /**
     * Additional classes added to title filter button
     */
    this.titleFilterClearBtnClasses = '';
    /**
     * Additional classes added to Expand all button
     * */
    this.expandAllBtnClasses = '';
    /**
     * Additional classes added to Collapse all button
     * */
    this.collapseAllBtnClasses = '';
    /**
     * Additional CSS classes added to the search filter input
     * */
    this.titleFilterInputClasses = '';
    /** Fetch content from Laws.Africa services? Requires a Laws.Africa partnership and the frbrExpressionUri property to be set. */
    this.fetch = false;
    /** Provider URL for fetching content (advanced usage only). */
    this.provider = PROVIDER;
    this.titleFilter = '';
    this.handleTitleChange = debounce_1((e) => {
      this.titleFilter = e.target.value;
    }, 300);
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
    return (h(Host, null, h("div", { class: "search" }, h("input", { class: `search__input ${this.titleFilterInputClasses}`, value: this.titleFilter, placeholder: this.titleFilterPlaceholder, onInput: e => this.handleTitleChange(e) }), renderHideClearFilterButton()), h("div", { class: "toggle" }, h("button", { type: "button", class: `toggle__expand-all-btn ${this.expandAllBtnClasses}`, onClick: () => this.expandAll() }, "Expand All"), h("button", { type: "button", class: `toggle__collapse-all-btn ${this.collapseAllBtnClasses}`, onClick: () => this.collapseAll() }, "Collapse All")), h("la-table-of-contents", { items: this.items, titleFilter: this.titleFilter, fetch: this.fetch, provider: this.provider, partner: this.partner, "frbr-expression-uri": this.frbrExpressionUri }, h("span", { slot: "append" }, h("slot", { name: "append" })), h("span", { slot: "prepend" }, h("slot", { name: "prepend" })), h("span", { slot: "expand-icon" }, h("slot", { name: "expand-icon" })), h("span", { slot: "collapse-icon" }, h("slot", { name: "collapse-icon" })))));
  }
  get el() { return this; }
  static get style() { return tableOfContentsControllerCss; }
}, [4, "la-table-of-contents-controller", {
    "items": [1],
    "titleFilterPlaceholder": [1, "title-filter-placeholder"],
    "hideClearTitleFilterButton": [4, "hide-clear-title-filter-button"],
    "titleFilterClearBtnClasses": [1, "title-filter-clear-btn-classes"],
    "expandAllBtnClasses": [1, "expand-all-btn-classes"],
    "collapseAllBtnClasses": [1, "collapse-all-btn-classes"],
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
