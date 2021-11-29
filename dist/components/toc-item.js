import { createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const tocItemCss = "la-toc-item{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}la-toc-item *{-webkit-box-sizing:border-box;box-sizing:border-box}la-toc-item .indented{width:1.4em;height:1.4em}la-toc-item .content{-ms-flex:1;flex:1}la-toc-item .content__action{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}la-toc-item .content__action__title{-ms-flex-positive:1;flex-grow:1}la-toc-item .content__children{display:none}la-toc-item[expanded]>.content>.content__children{display:inherit}la-toc-item.excluded{display:none}la-toc-item .indented__toggle-btn{background-color:transparent;border:none;-webkit-box-shadow:none;box-shadow:none;cursor:pointer}";

let TocItem = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.itemRendered = createEvent(this, "itemRendered", 7);
    this.itemTitleClicked = createEvent(this, "itemTitleClicked", 7);
    /**
     * Item used to build the table of contents
     * */
    this.item = {};
    /**
     * Array of items filtered by titleQuery used in la-toc-item to determine with item is shown or not
     * */
    this.filteredItems = null;
    /**
     * HTML displayed before item title
     * */
    this.prependHtml = '';
    /**
     * HTML displayed after item title
     * */
    this.appendHtml = '';
    /**
     * HTML displayed in toggle button when item is expanded
     * */
    this.expandIconHtml = '';
    /**
     * HTML displayed in toggle button when item is not expanded
     * */
    this.collapseIconHtml = '';
    /**
     * If true, `item` `children`, and the collapsed icon are shown but expanded icon is hidden. If false, the `item`
     * `children` and collapsed icon are hidden but the expanded icon is show
     * */
    this.expanded = true;
    this.onItemTitleClick = (e) => {
      this.itemTitleClicked.emit(e);
    };
  }
  toggle() {
    this.expanded = !this.expanded;
  }
  componentDidRender() {
    this.itemRendered.emit();
  }
  render() {
    const isParent = !!(this.item.children && this.item.children.length);
    const showItem = !this.filteredItems || this.filteredItems.has(this.item);
    const renderToggleBtnInner = () => {
      if (this.expanded) {
        return this.collapseIconHtml ? h("span", { innerHTML: this.collapseIconHtml }) : h("span", null, "\u25BC");
      }
      return this.expandIconHtml ? h("span", { innerHTML: this.expandIconHtml }) : h("span", null, "\u25B6");
    };
    return (h(Host, Object.assign({}, (isParent ? { parent: isParent } : {}), { class: `${!showItem ? 'excluded' : ''}` }), h("div", { class: "indented" }, isParent
      ? (h("button", { class: "indented__toggle-btn", type: "button", onClick: () => this.toggle() }, renderToggleBtnInner()))
      : null), h("div", { class: "content" }, h("div", { class: "content__action" }, this.prependHtml ? h("div", { class: "content__action__prepend", innerHTML: this.prependHtml }) : null, h("a", { href: `#${this.item.id || ''}`, class: "content__action__title", onClick: this.onItemTitleClick }, this.item.title), this.appendHtml ? h("div", { class: "content__action__append", innerHTML: this.appendHtml }) : null), h("div", { class: "content__children" }, this.item.children && this.item.children.length
      ? this.item.children.map((item) => (h("la-toc-item", { item: item, filteredItems: this.filteredItems, prependHtml: this.prependHtml, appendHtml: this.appendHtml, expandIconHtml: this.expandIconHtml, collapseIconHtml: this.collapseIconHtml })))
      : null))));
  }
  static get style() { return tocItemCss; }
};
TocItem = /*@__PURE__*/ proxyCustomElement(TocItem, [0, "la-toc-item", {
    "item": [16],
    "filteredItems": [16],
    "prependHtml": [1, "prepend-html"],
    "appendHtml": [1, "append-html"],
    "expandIconHtml": [1, "expand-icon-html"],
    "collapseIconHtml": [1, "collapse-icon-html"],
    "expanded": [1540]
  }]);
function defineCustomElement() {
  const components = ["la-toc-item", "la-toc-item"];
  components.forEach(tagName => { switch (tagName) {
    case "la-toc-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TocItem);
      }
      break;
    case "la-toc-item":
      if (!customElements.get(tagName)) {
        defineCustomElement();
      }
      break;
  } });
}
defineCustomElement();

export { TocItem as T, defineCustomElement as d };
