/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b12d0369.js');
const debounce = require('./debounce-0f492acf.js');
const services = require('./services-a5da64d3.js');

const tableOfContentsControllerCss = "la-table-of-contents-controller *{-webkit-box-sizing:border-box;box-sizing:border-box}la-table-of-contents-controller .search{width:100%;margin-bottom:5px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative}la-table-of-contents-controller .search__input{-ms-flex:1;flex:1}la-table-of-contents-controller .search__clear-btn{position:absolute;top:0;right:0;height:100%}la-table-of-contents-controller .toggle{margin-bottom:5px}la-table-of-contents-controller .toggle__expand-all-btn{margin-right:5px}";

const TableOfContentsController = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    this.provider = services.PROVIDER;
    this.titleFilter = '';
    this.handleTitleChange = debounce.debounce_1((e) => {
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
      return (index.h("button", { class: `search__clear-btn ${this.titleFilterClearBtnClasses}`, type: "button", onClick: () => this.clearTitleFilter(), disabled: !this.titleFilter }, index.h("slot", { name: "clear-title-filter-icon" }, "\u2715")));
    };
    return (index.h(index.Host, null, index.h("div", { class: "search" }, index.h("input", { class: `search__input ${this.titleFilterInputClasses}`, value: this.titleFilter, placeholder: this.titleFilterPlaceholder, onInput: (e) => this.handleTitleChange(e) }), renderHideClearFilterButton()), index.h("div", { class: "toggle" }, index.h("button", { type: "button", class: `toggle__expand-all-btn ${this.expandAllBtnClasses}`, onClick: () => this.expandAll() }, "Expand All"), index.h("button", { type: "button", class: `toggle__collapse-all-btn ${this.collapseAllBtnClasses}`, onClick: () => this.collapseAll() }, "Collapse All")), index.h("la-table-of-contents", { items: this.items, titleFilter: this.titleFilter, fetch: this.fetch, provider: this.provider, partner: this.partner, "frbr-expression-uri": this.frbrExpressionUri }, index.h("span", { slot: "expand-icon" }, index.h("slot", { name: "expand-icon" })), index.h("span", { slot: "collapse-icon" }, index.h("slot", { name: "collapse-icon" })))));
  }
  get el() { return index.getElement(this); }
};
TableOfContentsController.style = tableOfContentsControllerCss;

exports.la_table_of_contents_controller = TableOfContentsController;
