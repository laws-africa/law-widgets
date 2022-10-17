/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
import { Component, Element, Prop, Listen, Method, Event } from '@stencil/core';
import debounce from 'lodash/debounce';
import { getAkomaNtosoElement } from '../../utils/linking';
import { GutterLayout } from './layout';
export class Gutter {
  constructor() {
    // Delay in msecs to debounce updates
    this.debounceDelay = 100;
  }
  componentWillLoad() {
    // TODO: watch for changes to the akn content?
    this.akomaNtosoElement = getAkomaNtosoElement(this.el, this.akomaNtoso);
    // setup a debounced function to trigger a layout run.
    this.queueLayout = debounce(this.layoutItems.bind(this), this.debounceDelay);
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
  static get is() { return "la-gutter"; }
  static get originalStyleUrls() { return {
    "$": ["gutter.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gutter.css"]
  }; }
  static get properties() { return {
    "akomaNtoso": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | HTMLElement",
        "resolved": "HTMLElement | string | undefined",
        "references": {
          "HTMLElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "CSS selector or HTMLElement for the la-akoma-ntoso element that will be decorated. Defaults\nto the containing la-akoma-ntoso element, if any, otherwise the first\n`la-akoma-ntoso` element on the page."
      },
      "attribute": "akoma-ntoso",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "layoutComplete",
      "name": "layoutComplete",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when `this.layout` has finished."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "layoutItems": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Layout the gutter items.",
        "tags": []
      }
    },
    "activateNextItem": {
      "complexType": {
        "signature": "() => Promise<HTMLLaGutterItemElement | null>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLLaGutterItemElement": {
            "location": "global"
          }
        },
        "return": "Promise<HTMLLaGutterItemElement | null>"
      },
      "docs": {
        "text": "Activates the item logically after the currently active item. The activated item's `active` property will be set to\ntrue. Returns the activated item. Or returns null if there are no items. If there is no item currently\nactive, the top-most item is activated. If the currently active item is the bottom-most item in the gutter,\nthen the top-most item will be activated. If there is one item in the gutter that is not active, then that item will be activated.",
        "tags": []
      }
    },
    "activatePrevItem": {
      "complexType": {
        "signature": "() => Promise<HTMLLaGutterItemElement | null>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLLaGutterItemElement": {
            "location": "global"
          }
        },
        "return": "Promise<HTMLLaGutterItemElement | null>"
      },
      "docs": {
        "text": "Activates the item logically before the currently active item. The activated item's `active` property will be set to\ntrue. Returns the activated item. Or returns null if there are no items. If there is no item currently\nactive, the bottom-most item is activated. If the currently active item is the top-most item in the gutter,\nthen the bottom-most item will be activated. If there is one item in the gutter that is not active, then that item will be activated.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "laItemChanged",
      "method": "itemChanged",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "click",
      "method": "clicked",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
