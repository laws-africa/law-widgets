'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f97f231d.js');

const gutterItemCss = "la-gutter-item{display:block}";

const GutterItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.laItemChanged = index.createEvent(this, "laItemChanged", 7);
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
};
GutterItem.style = gutterItemCss;

exports.la_gutter_item = GutterItem;
