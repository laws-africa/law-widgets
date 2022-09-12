import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { P as PROVIDER, g as getPartner } from './services.js';
import { d as defineCustomElement$1 } from './toc-item.js';

const TableOfContents = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * JSON value or string value parsed to array of items used to build the table of contents. Each item must have
     * a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`).
     * */
    this.items = [];
    /**
     * value to filter items by item title
     * */
    this.titleFilter = '';
    /** Fetch content from Laws.Africa services? Requires a Laws.Africa partnership and the frbrExpressionUri property to be set. */
    this.fetch = false;
    /** Provider URL for fetching content (advanced usage only). */
    this.provider = PROVIDER;
    this.filteredItems = null;
    this.innerItems = [];
  }
  parseItemsProp(newValue) {
    if (typeof newValue === 'string') {
      this.innerItems = JSON.parse(newValue);
    }
    else if (Array.isArray(newValue)) {
      this.innerItems = [...newValue];
    }
  }
  refetch() {
    this.fetchContent();
  }
  async fetchContent() {
    this.ensurePartner();
    if (this.fetch && this.frbrExpressionUri && this.provider) {
      const url = this.provider + '/p/' + this.partner + '/e/we/toc.json' + this.frbrExpressionUri;
      const resp = await fetch(url);
      if (resp.ok) {
        // @ts-ignore
        this.innerItems = (await resp.json()).toc;
      }
    }
  }
  ensurePartner() {
    if (!this.partner) {
      this.partner = getPartner();
    }
  }
  componentWillLoad() {
    this.parseItemsProp(this.items);
    this.titleFilterChanged(this.titleFilter);
    this.fetchContent();
  }
  /**
   * Expands all items
   */
  async expandAll() {
    for (const item of this.el.querySelectorAll('la-toc-item')) {
      item.expanded = true;
    }
  }
  /**
   * Collapses all items
   */
  async collapseAll() {
    for (const item of this.el.querySelectorAll('la-toc-item')) {
      item.expanded = false;
    }
  }
  titleFilterChanged(filter) {
    if (filter) {
      const needle = filter.toLocaleLowerCase().trim();
      const filteredItems = new Set();
      // recursively include all children
      function includeKids(item) {
        for (const child of item.children || []) {
          filteredItems.add(child);
          includeKids(child);
        }
      }
      // Recursive function that determines whether or not an item should be rendered.
      // An item is rendered if its title matches the filter, or any of its children should be rendered.
      function shouldInclude(item) {
        var _a;
        // this will be true if this item matches the search, or any child does
        let include = (((_a = item.title) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) || '').includes(needle);
        if (include) {
          // this item matches, show include all children automatically, no need to go any deeper
          includeKids(item);
        }
        else {
          // if any children match, then this node must be included
          if (item.children) {
            for (const child of item.children) {
              include = shouldInclude(child) || include;
            }
          }
        }
        if (include) {
          filteredItems.add(item);
        }
        return include;
      }
      for (const item of this.innerItems) {
        shouldInclude(item);
      }
      this.filteredItems = filteredItems;
    }
    else {
      this.filteredItems = null;
    }
    this.expandAll();
  }
  render() {
    const renderTOCItem = (item) => {
      const getSlotHTML = (selector) => {
        var _a;
        const element = this.el.querySelector(selector);
        /**
         * If slots originate from `la-table-of-contents`, query for slot html is
         * `this.el.querySelector("[slot]").innerHTML`
         * If slot originate from `la-table-of-contents-controller` query for slot html is
         * `this.el.querySelector("[slot] [slot]").innerHTML`
         * */
        if (element === null || element === void 0 ? void 0 : element.querySelector(selector)) {
          return ((_a = element.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.innerHTML) || '';
        }
        return (element === null || element === void 0 ? void 0 : element.innerHTML) || '';
      };
      const prepend = getSlotHTML("[slot='prepend']");
      const append = getSlotHTML("[slot='append']");
      const expandIcon = getSlotHTML("[slot='expand-icon']");
      const collapseIcon = getSlotHTML("[slot='collapse-icon']");
      return (h("la-toc-item", { item: item, filteredItems: this.filteredItems, prependHtml: prepend, appendHtml: append, expandIconHtml: expandIcon, collapseIconHtml: collapseIcon }));
    };
    return (h(Host, null, h("div", { style: { display: 'none' } }, h("slot", { name: "append" }), h("slot", { name: "prepend" }), h("slot", { name: "expand-icon" }), h("slot", { name: "collapse-icon" })), h("div", { class: "toc-items" }, this.innerItems.map(item => renderTOCItem(item)))));
  }
  get el() { return this; }
  static get watchers() { return {
    "items": ["parseItemsProp"],
    "provider": ["refetch"],
    "frbrExpressionUri": ["refetch"],
    "fetch": ["refetch"],
    "titleFilter": ["titleFilterChanged"]
  }; }
}, [4, "la-table-of-contents", {
    "items": [1],
    "titleFilter": [1, "title-filter"],
    "frbrExpressionUri": [1537, "frbr-expression-uri"],
    "fetch": [1540],
    "partner": [1537],
    "provider": [1],
    "filteredItems": [32],
    "innerItems": [32],
    "expandAll": [64],
    "collapseAll": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["la-table-of-contents", "la-toc-item"];
  components.forEach(tagName => { switch (tagName) {
    case "la-table-of-contents":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TableOfContents);
      }
      break;
    case "la-toc-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement();

export { TableOfContents as T, defineCustomElement as d };
