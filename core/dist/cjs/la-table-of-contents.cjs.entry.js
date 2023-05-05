/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b12d0369.js');
const services = require('./services-a5da64d3.js');

const TableOfContents = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * JSON value or string value parsed to array of items used to build the table of contents. Each item must have
     * a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`).
     *
     * Items may optionally have an id attribute and an href attribute, which are used to build the links for each item.
     * */
    this.items = [];
    /**
     * value to filter items by item title
     * */
    this.titleFilter = '';
    /**
     * Should items be expanded by default? This can be overridden by setting the expanded property for individual items.
     * */
    this.expanded = true;
    /** Fetch content from Laws.Africa services? Requires a Laws.Africa partnership and the frbrExpressionUri property to be set. */
    this.fetch = false;
    /** Provider URL for fetching content (advanced usage only). */
    this.provider = services.PROVIDER;
    this.filteredItems = null;
    this.innerItems = [];
    this.expandIconHtml = '';
    this.collapseIconHtml = '';
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
      try {
        const resp = await fetch(url);
        if (resp.ok) {
          // @ts-ignore
          this.innerItems = (await resp.json()).toc;
        }
      }
      catch (error) {
        // ignore
      }
    }
  }
  ensurePartner() {
    if (!this.partner) {
      this.partner = services.getPartner();
    }
  }
  getSlotHTML(selector) {
    var _a;
    const element = this.el.querySelector(selector);
    /**
     * If slots originate from `la-table-of-contents`, query for slot html is
     * `this.el.querySelector("[slot]").innerHTML`
     * If slot originate from `la-table-of-contents-controller` query for slot html is
     * `this.el.querySelector("[slot] [slot]").innerHTML`
     * */
    // Slots originating from la-table-of-content-controller
    if (element === null || element === void 0 ? void 0 : element.querySelector(selector)) {
      return ((_a = element.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.innerHTML) || '';
    }
    // Slots originating from la-table-of-content
    return (element === null || element === void 0 ? void 0 : element.innerHTML) || '';
  }
  componentWillLoad() {
    this.expandIconHtml = this.getSlotHTML("[slot='expand-icon']");
    this.collapseIconHtml = this.getSlotHTML("[slot='collapse-icon']");
    this.parseItemsProp(this.items);
    this.titleFilterChanged(this.titleFilter);
    this.fetchContent();
  }
  /**
   * Expands all items
   */
  async expandAll() {
    Array.from(this.el.querySelectorAll('la-toc-item')).forEach((item) => {
      // @ts-ignore
      item.expanded = true;
    });
  }
  /**
   * Collapses all items
   */
  async collapseAll() {
    Array.from(this.el.querySelectorAll('la-toc-item')).forEach((item) => {
      // @ts-ignore
      item.expanded = false;
    });
  }
  titleFilterChanged(filter) {
    if (filter) {
      const needle = filter.toLocaleLowerCase().trim();
      const filteredItems = new Set();
      // recursively include all children
      // eslint-disable-next-line no-inner-declarations
      function includeKids(item) {
        for (const child of item.children || []) {
          filteredItems.add(child);
          includeKids(child);
        }
      }
      // Recursive function that determines whether or not an item should be rendered.
      // An item is rendered if its title matches the filter, or any of its children should be rendered.
      // eslint-disable-next-line no-inner-declarations
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
  /**
   * Render items recursively. We render from the bottom up, allowing us to append children into their
   * parents. Rendering recursively here rather than inside la-toc-item means we can make use of global
   * configuration details without having to pass them down the tree.
   */
  renderItem(item) {
    // render the children first, so we can add them to the parent
    const kids = (item.children || []).map((child) => this.renderItem(child));
    // if the item has an explicit expanded value, use that, otherwise use the tree's default value
    const expanded = item.expanded === undefined ? this.expanded : item.expanded;
    return index.h("la-toc-item", { item: item, filteredItems: this.filteredItems, expandIconHtml: this.expandIconHtml, collapseIconHtml: this.collapseIconHtml, expanded: expanded }, kids);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { style: { display: 'none' } }, index.h("slot", { name: "expand-icon" }), index.h("slot", { name: "collapse-icon" })), this.innerItems.map((item) => this.renderItem(item))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "items": ["parseItemsProp"],
    "provider": ["refetch"],
    "frbrExpressionUri": ["refetch"],
    "fetch": ["refetch"],
    "titleFilter": ["titleFilterChanged"]
  }; }
};

exports.la_table_of_contents = TableOfContents;
