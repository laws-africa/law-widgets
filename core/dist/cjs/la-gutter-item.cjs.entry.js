/*!
 * (C) Law Widgets https://laws.africa - GNU Lesser General Public License 3
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b4026e21.js');

const gutterItemCss = "la-gutter-item{display:block}";
const LaGutterItemStyle0 = gutterItemCss;

const GutterItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.laItemChanged = index.createEvent(this, "laItemChanged", 7);
        this.anchor = undefined;
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
GutterItem.style = LaGutterItemStyle0;

exports.la_gutter_item = GutterItem;

//# sourceMappingURL=la-gutter-item.cjs.entry.js.map