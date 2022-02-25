import { HTMLElement, createEvent, proxyCustomElement } from '@stencil/core/internal/client';

const gutterItemCss = "la-gutter-item{display:block}";

let GutterItem = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.laItemChanged = createEvent(this, "laItemChanged", 7);
    /**
     * Indicates that this is the active item in the gutter. Only one item can be active at a time.
     */
    this.active = false;
  }
  activeChanged() {
    this.laItemChanged.emit();
  }
  anchorChanged() {
    this.laItemChanged.emit();
  }
  onClick() {
    this.active = true;
  }
  static get watchers() { return {
    "active": ["activeChanged"],
    "anchor": ["anchorChanged"]
  }; }
  static get style() { return gutterItemCss; }
};
GutterItem = /*@__PURE__*/ proxyCustomElement(GutterItem, [0, "la-gutter-item", {
    "anchor": [1],
    "active": [1540]
  }, [[0, "click", "onClick"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["la-gutter-item"];
  components.forEach(tagName => { switch (tagName) {
    case "la-gutter-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GutterItem);
      }
      break;
  } });
}
defineCustomElement$1();

const LaGutterItem = GutterItem;
const defineCustomElement = defineCustomElement$1;

export { LaGutterItem, defineCustomElement };
