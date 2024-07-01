/*!
 * (C) Law Widgets https://laws.africa - GNU Lesser General Public License 3
 */
import { r as registerInstance, c as createEvent } from './index-8a774e85.js';

const gutterItemCss = "la-gutter-item{display:block}";
const LaGutterItemStyle0 = gutterItemCss;

const GutterItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.laItemChanged = createEvent(this, "laItemChanged", 7);
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

export { GutterItem as la_gutter_item };

//# sourceMappingURL=la-gutter-item.entry.js.map