/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b12d0369.js');
const debounce = require('./debounce-0f492acf.js');
const linking = require('./linking-3cd81fb2.js');

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
    items = this.sortItems(items);
    // find the first item that is active
    const activeItem = items.find((x) => x.active);
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
  sortItems(items) {
    return [...items].sort(this.compareItems.bind(this));
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
      item.style.display = anchor ? '' : 'none';
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

const gutterCss = ".la-akoma-ntoso-with-gutter{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.la-akoma-ntoso-with-gutter>la-akoma-ntoso{-ms-flex:80%;flex:80%;max-width:80%;position:relative;padding-right:0.5rem}.la-akoma-ntoso-with-gutter>la-gutter{-ms-flex:20%;flex:20%;max-width:20%;position:relative;overflow-y:hidden;background-color:rgba(0, 0, 0, 0.05);padding-left:0.5rem;padding-right:0.5rem}la-gutter>la-gutter-item{position:absolute;left:1rem;width:calc(100% - 1.5rem);-webkit-transition:top ease-out 100ms, left ease-out 100ms;transition:top ease-out 100ms, left ease-out 100ms;z-index:2}la-gutter>la-gutter-item[active]{left:0.5rem}";

const Gutter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.layoutComplete = index.createEvent(this, "layoutComplete", 7);
    // Delay in msecs to debounce updates
    this.debounceDelay = 100;
  }
  componentWillLoad() {
    // TODO: watch for changes to the akn content?
    this.akomaNtosoElement = linking.getAkomaNtosoElement(this.el, this.akomaNtoso);
    // setup a debounced function to trigger a layout run.
    this.queueLayout = debounce.debounce_1(this.layoutItems.bind(this), this.debounceDelay);
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
    if (target === null || target === void 0 ? void 0 : target.active) {
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
      Array.from(this.items()).forEach((item) => {
        item.active = false;
      });
    }
  }
  /**
   * Ensure all items except this one are set as inactive.
   */
  setOtherItemsInactive(activeItem) {
    Array.from(this.items()).forEach((item) => {
      if (item != activeItem) {
        item.active = false;
      }
    });
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
      // @ts-ignore
      this.layout.layout([...this.items()]);
      this.layoutComplete.emit();
    }
  }
  /**
   * Activates the item logically after the currently active item. The activated item's `active` property will be set to
   * true. Returns the activated item. Or returns null if there are no items. If there is no item currently
   * active, the top-most item is activated. If the currently active item is the bottom-most item in the gutter,
   * then the top-most item will be activated. If there is one item in the gutter that is not active, then that item will be activated.
   */
  async activateNextItem() {
    const items = this.layout ? this.layout.sortItems(this.getVisibleItems()) : [];
    if (items.length === 1) {
      items[0].active = true;
      return items[0];
    }
    else if (items.length > 1) {
      const activeItemIndex = items.findIndex((item) => item.active);
      const nextActiveItem = activeItemIndex === -1 || activeItemIndex === items.length - 1 ? items[0] : items[activeItemIndex + 1];
      nextActiveItem.active = true;
      return nextActiveItem;
    }
    else {
      return null;
    }
  }
  /**
   * Activates the item logically before the currently active item. The activated item's `active` property will be set to
   * true. Returns the activated item. Or returns null if there are no items. If there is no item currently
   * active, the bottom-most item is activated. If the currently active item is the top-most item in the gutter,
   * then the bottom-most item will be activated. If there is one item in the gutter that is not active, then that item will be activated.
   */
  async activatePrevItem() {
    const items = this.layout ? this.layout.sortItems(this.getVisibleItems()) : [];
    if (items.length === 1) {
      items[0].active = true;
      return items[0];
    }
    else if (items.length > 1) {
      const activeItemIndex = items.findIndex((item) => item.active);
      const nextActiveItem = activeItemIndex === -1 || activeItemIndex === 0 ? items[items.length - 1] : items[activeItemIndex - 1];
      nextActiveItem.active = true;
      return nextActiveItem;
    }
    else {
      return null;
    }
  }
  items() {
    return this.el.querySelectorAll('la-gutter-item');
  }
  getVisibleItems() {
    // @ts-ignore
    return [...this.items()].filter((i) => i.style.display !== 'none');
  }
  get el() { return index.getElement(this); }
};
Gutter.style = gutterCss;

exports.la_gutter = Gutter;
