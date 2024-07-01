/*!
 * (C) Law Widgets https://laws.africa - GNU Lesser General Public License 3
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b4026e21.js');

const tocItemCss = "la-toc-item{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}la-toc-item *{-webkit-box-sizing:border-box;box-sizing:border-box}la-toc-item .indented{width:1.4em;height:1.4em}la-toc-item .content{-ms-flex:1;flex:1}la-toc-item .content__action{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}la-toc-item .content__action__title{-ms-flex-positive:1;flex-grow:1}la-toc-item .content__children{display:none}la-toc-item[expanded]>.content>.content__children{display:inherit}la-toc-item.excluded{display:none}la-toc-item .indented__toggle-btn{cursor:pointer;display:inline-block;font-size:smaller;text-align:center;padding:1px 6px}";
const LaTocItemStyle0 = tocItemCss;

const TocItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.itemRendered = index.createEvent(this, "itemRendered", 7);
        this.itemTitleClicked = index.createEvent(this, "itemTitleClicked", 7);
        this.onItemTitleClick = (e) => {
            this.itemTitleClicked.emit(e);
        };
        this.item = {};
        this.filteredItems = null;
        this.prependHtml = '';
        this.appendHtml = '';
        this.expandIconHtml = '';
        this.collapseIconHtml = '';
        this.expanded = true;
    }
    toggle() {
        this.expanded = !this.expanded;
    }
    componentDidRender() {
        this.itemRendered.emit();
    }
    render() {
        var _a;
        const isParent = !!((_a = this.item.children) === null || _a === void 0 ? void 0 : _a.length);
        const showItem = !this.filteredItems || this.filteredItems.has(this.item);
        const href = this.item.href || `#${this.item.id || ''}`;
        const renderToggleBtnInner = () => {
            if (this.expanded) {
                return this.collapseIconHtml ? index.h("span", { innerHTML: this.collapseIconHtml }) : index.h("span", null, "\u25BC");
            }
            return this.expandIconHtml ? index.h("span", { innerHTML: this.expandIconHtml }) : index.h("span", null, "\u25BA");
        };
        return (index.h(index.Host, Object.assign({}, (isParent ? { parent: isParent } : {}), { class: `${!showItem ? 'excluded' : ''}` }), index.h("div", { class: "indented" }, isParent ? (index.h("div", { class: "indented__toggle-btn", role: "button", onClick: () => this.toggle() }, renderToggleBtnInner())) : null), index.h("div", { class: "content" }, index.h("div", { class: "content__action" }, this.prependHtml ? index.h("div", { class: "content__action__prepend", innerHTML: this.prependHtml }) : null, index.h("a", { href: href, class: "content__action__title", onClick: this.onItemTitleClick }, this.item.title), this.appendHtml ? index.h("div", { class: "content__action__append", innerHTML: this.appendHtml }) : null), index.h("div", { class: "content__children" }, index.h("slot", null)))));
    }
};
TocItem.style = LaTocItemStyle0;

exports.la_toc_item = TocItem;

//# sourceMappingURL=la-toc-item.cjs.entry.js.map