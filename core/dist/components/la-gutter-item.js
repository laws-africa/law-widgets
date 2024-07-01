/*!
 * (C) Law Widgets https://laws.africa - GNU Lesser General Public License 3
 */
import { p as proxyCustomElement, H, c as createEvent } from './p-1883ce7c.js';

const gutterItemCss = "la-gutter-item{display:block}";
const LaGutterItemStyle0 = gutterItemCss;

const GutterItem = /*@__PURE__*/ proxyCustomElement(class GutterItem extends H {
    constructor() {
        super();
        this.__registerHost();
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
    static get style() { return LaGutterItemStyle0; }
}, [0, "la-gutter-item", {
        "anchor": [1],
        "active": [1540]
    }, [[0, "click", "onClick"]], {
        "active": ["activeChanged"],
        "anchor": ["anchorChanged"]
    }]);
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

//# sourceMappingURL=la-gutter-item.js.map