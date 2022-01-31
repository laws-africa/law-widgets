import { proxyCustomElement } from '@stencil/core/internal/client';
import { g as getAkomaNtosoElement } from './linking.js';
import { d as debounce_1 } from './debounce.js';

/**
 * Helper class to determine the vertical layout of a collection of gutter content elements, such that they are aligned
 * vertically with their anchor elements, but don't overlap each other.
 */
class GutterLayout {
  /**
   * @param root root element for determining heights against. This MUST have a position style attribute,
   *             such as position: relative;
   */
  constructor(root) {
    this.root = root;
    // vertical buffer between elements
    this.buffer = 10;
    this.tops = new WeakMap();
    this.anchors = new WeakMap();
  }
  layout(items) {
    this.updateAnchorsAndItems(items);
    // pre-calculate tops
    this.updateTops(items);
    // sort items by ascending anchorElement top
    items = [...items].sort(this.compareItems.bind(this));
    // find the first item that is active
    const activeItem = items.find(x => x.active);
    if (activeItem) {
      const ix = items.indexOf(activeItem);
      if (ix > -1) {
        // layout the primary item first
        const anchor = this.anchors.get(activeItem);
        if (anchor) {
          const top = this.tops.get(anchor);
          if (top) {
            activeItem.style.top = `${top}px`;
            // layout the ones going upwards from here
            this.layoutUpwards(items, ix - 1, top - this.buffer);
            // layout the ones going downwards from here
            this.layoutDownwards(items, ix + 1, top + activeItem.clientHeight + this.buffer);
            return;
          }
        }
      }
    }
    // nothing is primary, go top downwards
    this.layoutDownwards(items, 0, 0);
  }
  /**
   * Comparator that sorts items be ascending top value.
   */
  compareItems(a, b) {
    const anchorA = this.anchors.get(a);
    const anchorB = this.anchors.get(b);
    if (anchorA) {
      if (anchorB) {
        const topA = this.tops.get(anchorA);
        const topB = this.tops.get(anchorB);
        if (topA) {
          if (topB) {
            return topA - topB;
          }
          else {
            // a has an top, b doesn't, so a comes after b
            return 1;
          }
        }
        else {
          // a has no top, best if b comes after a
          return -1;
        }
      }
      else {
        // a has an anchor, b doesn't, so a comes after b
        return 1;
      }
    }
    else {
      // a has no anchor, best if b comes after a
      return -1;
    }
  }
  layoutUpwards(items, start, watermark) {
    // layout the items from index start, going bottom to top
    for (let i = start; i >= 0; i--) {
      const item = items[i];
      const anchor = this.anchors.get(item);
      if (anchor) {
        let top = this.tops.get(anchor);
        if (top) {
          if (top + item.clientHeight >= watermark) {
            top = watermark - item.clientHeight;
          }
          item.style.top = `${top}px`;
          watermark = top - this.buffer;
        }
      }
    }
  }
  layoutDownwards(items, start, watermark) {
    // layout the items from index start, going top to bottom
    for (let i = start; i < items.length; i++) {
      const item = items[i];
      const anchor = this.anchors.get(item);
      if (anchor) {
        let top = this.tops.get(anchor);
        if (top) {
          top = Math.max(watermark, top);
          item.style.top = `${top}px`;
          watermark = top + item.clientHeight + this.buffer;
        }
      }
    }
  }
  updateAnchorsAndItems(items) {
    this.anchors = new WeakMap();
    for (const item of items) {
      const anchor = this.getItemAnchor(item);
      if (anchor) {
        this.anchors.set(item, anchor);
      }
      item.style.display = anchor ? 'block' : 'none';
    }
  }
  getItemAnchor(item) {
    if (item.anchor) {
      if (item.anchor instanceof HTMLElement) {
        return this.root.contains(item.anchor) ? item.anchor : null;
      }
      else {
        return this.root.querySelector(item.anchor);
      }
    }
    return null;
  }
  updateTops(items) {
    this.tops = new WeakMap();
    for (const item of items) {
      const anchor = this.anchors.get(item);
      if (anchor && !this.tops.has(anchor)) {
        this.tops.set(anchor, this.calculateTop(anchor));
      }
    }
  }
  /**
   * Find the top of an element, relative to this.root.
   * @param element
   * @returns {number}
   */
  calculateTop(element) {
    let top = 0;
    let el = element;
    while (el && el !== this.root) {
      top += el.offsetTop;
      el = el.offsetParent;
    }
    return top;
  }
}

const gutterCss = ".la-akoma-ntoso-with-gutter{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.la-akoma-ntoso-with-gutter la-akoma-ntoso{-ms-flex:80%;flex:80%;max-width:80%;position:relative;padding-right:0.5rem}.la-akoma-ntoso-with-gutter la-gutter{-ms-flex:20%;flex:20%;max-width:20%;position:relative;overflow-y:hidden;background-color:rgba(0, 0, 0, 0.05);padding-left:0.5rem;padding-right:0.5rem}la-gutter>la-gutter-item{position:absolute;left:1rem;max-width:calc(100% - 1.5rem);-webkit-transition:top ease-out 100ms, left ease-out 100ms;transition:top ease-out 100ms, left ease-out 100ms;z-index:2}la-gutter>la-gutter-item[active]{left:0.5rem}";

let Gutter = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    // Delay in msecs to debounce updates
    this.debounceDelay = 100;
  }
  componentWillLoad() {
    // TODO: watch for changes to the akn content?
    this.akomaNtosoElement = getAkomaNtosoElement(this.el, this.akomaNtoso);
    // setup a debounced function to trigger a layout run.
    this.queueLayout = debounce_1(this.layoutItems.bind(this), this.debounceDelay);
    // re-run layout when child elements change
    this.mutationObserver = new MutationObserver(this.queueLayout);
    this.mutationObserver.observe(this.el, { childList: true });
  }
  componentDidLoad() {
    this.setupLayout();
    this.layoutItems();
  }
  disconnectedCallback() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
  itemChanged(event) {
    const target = event.target;
    if (target && target.active) {
      // set all other items inactive. if there was a previously active item, this change will
      // trigger a new event, but the debounce will prevent an unnecessary layout.
      this.setOtherItemsInactive(target);
    }
    this.queueLayout();
  }
  clicked(event) {
    // a click in the gutter, outside of an item, deactivates all items
    const target = event.target;
    if (target && !target.closest('la-gutter-item')) {
      for (const item of this.items()) {
        item.active = false;
      }
    }
  }
  /**
   * Ensure all items except this one are set as inactive.
   */
  setOtherItemsInactive(activeItem) {
    for (const item of this.items()) {
      if (item != activeItem) {
        item.active = false;
      }
    }
  }
  setupLayout() {
    if (this.akomaNtosoElement) {
      this.layout = new GutterLayout(this.akomaNtosoElement);
      if (window.ResizeObserver) {
        if (this.resizeObserver)
          this.resizeObserver.disconnect();
        // add observer to re-layout when the containing document changes size, which implies marker positions will change
        this.resizeObserver = new ResizeObserver(this.queueLayout);
        this.resizeObserver.observe(this.akomaNtosoElement);
      }
    }
  }
  /**
   * Layout the gutter items.
   */
  async layoutItems() {
    if (this.layout) {
      this.layout.layout([...this.items()]);
    }
  }
  items() {
    return this.el.querySelectorAll('la-gutter-item');
  }
  get el() { return this; }
  static get style() { return gutterCss; }
};
Gutter = /*@__PURE__*/ proxyCustomElement(Gutter, [0, "la-gutter", {
    "akomaNtoso": [1, "akoma-ntoso"],
    "layoutItems": [64]
  }, [[0, "laItemChanged", "itemChanged"], [0, "click", "clicked"]]]);
function defineCustomElement$1() {
  const components = ["la-gutter"];
  components.forEach(tagName => { switch (tagName) {
    case "la-gutter":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Gutter);
      }
      break;
  } });
}
defineCustomElement$1();

const LaGutter = Gutter;
const defineCustomElement = defineCustomElement$1;

export { LaGutter, defineCustomElement };
