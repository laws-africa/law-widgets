import { r as registerInstance, c as createEvent } from './index-cb6a05df.js';

const gutterItemCss = "la-gutter-item{display:block}";

const GutterItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
GutterItem.style = gutterItemCss;

export { GutterItem as la_gutter_item };
