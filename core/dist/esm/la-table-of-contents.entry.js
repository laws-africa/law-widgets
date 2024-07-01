/*!
 * (C) Law Widgets https://laws.africa - GNU Lesser General Public License 3
 */
import { r as registerInstance, h, H as Host, g as getElement } from './index-8a774e85.js';
import { P as PROVIDER, g as getPartner } from './services-5bcf159d.js';

const TableOfContents = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.expandIconHtml = '';
        this.collapseIconHtml = '';
        this.items = [];
        this.titleFilter = '';
        this.expanded = true;
        this.frbrExpressionUri = undefined;
        this.fetch = false;
        this.partner = undefined;
        this.provider = PROVIDER;
        this.filteredItems = null;
        this.innerItems = [];
    }
    parseItemsProp(newValue) {
        if (typeof newValue === 'string') {
            this.innerItems = JSON.parse(newValue);
        }
        else if (Array.isArray(newValue)) {
            this.innerItems = [...newValue];
        }
    }
    refetch() {
        this.fetchContent();
    }
    async fetchContent() {
        this.ensurePartner();
        if (this.fetch && this.frbrExpressionUri && this.provider) {
            const url = this.provider + '/p/' + this.partner + '/e/we/toc.json' + this.frbrExpressionUri;
            try {
                const resp = await fetch(url);
                if (resp.ok) {
                    // @ts-ignore
                    this.innerItems = (await resp.json()).toc;
                }
            }
            catch (error) {
                // ignore
            }
        }
    }
    ensurePartner() {
        if (!this.partner) {
            this.partner = getPartner();
        }
    }
    getSlotHTML(selector) {
        var _a;
        const element = this.el.querySelector(selector);
        /**
         * If slots originate from `la-table-of-contents`, query for slot html is
         * `this.el.querySelector("[slot]").innerHTML`
         * If slot originate from `la-table-of-contents-controller` query for slot html is
         * `this.el.querySelector("[slot] [slot]").innerHTML`
         * */
        // Slots originating from la-table-of-content-controller
        if (element === null || element === void 0 ? void 0 : element.querySelector(selector)) {
            return ((_a = element.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.innerHTML) || '';
        }
        // Slots originating from la-table-of-content
        return (element === null || element === void 0 ? void 0 : element.innerHTML) || '';
    }
    componentWillLoad() {
        this.expandIconHtml = this.getSlotHTML("[slot='expand-icon']");
        this.collapseIconHtml = this.getSlotHTML("[slot='collapse-icon']");
        this.parseItemsProp(this.items);
        this.titleFilterChanged(this.titleFilter);
        this.fetchContent();
    }
    /**
     * Expands all items
     */
    async expandAll() {
        Array.from(this.el.querySelectorAll('la-toc-item')).forEach((item) => {
            // @ts-ignore
            item.expanded = true;
        });
    }
    /**
     * Collapses all items
     */
    async collapseAll() {
        Array.from(this.el.querySelectorAll('la-toc-item')).forEach((item) => {
            // @ts-ignore
            item.expanded = false;
        });
    }
    titleFilterChanged(filter) {
        if (filter) {
            const needle = filter.toLocaleLowerCase().trim();
            const filteredItems = new Set();
            // recursively include all children
            // eslint-disable-next-line no-inner-declarations
            function includeKids(item) {
                for (const child of item.children || []) {
                    filteredItems.add(child);
                    includeKids(child);
                }
            }
            // Recursive function that determines whether or not an item should be rendered.
            // An item is rendered if its title matches the filter, or any of its children should be rendered.
            // eslint-disable-next-line no-inner-declarations
            function shouldInclude(item) {
                var _a;
                // this will be true if this item matches the search, or any child does
                let include = (((_a = item.title) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) || '').includes(needle);
                if (include) {
                    // this item matches, show include all children automatically, no need to go any deeper
                    includeKids(item);
                }
                else {
                    // if any children match, then this node must be included
                    if (item.children) {
                        for (const child of item.children) {
                            include = shouldInclude(child) || include;
                        }
                    }
                }
                if (include) {
                    filteredItems.add(item);
                }
                return include;
            }
            for (const item of this.innerItems) {
                shouldInclude(item);
            }
            this.filteredItems = filteredItems;
        }
        else {
            this.filteredItems = null;
        }
        this.expandAll();
    }
    /**
     * Render items recursively. We render from the bottom up, allowing us to append children into their
     * parents. Rendering recursively here rather than inside la-toc-item means we can make use of global
     * configuration details without having to pass them down the tree.
     */
    renderItem(item) {
        // render the children first, so we can add them to the parent
        const kids = (item.children || []).map((child) => this.renderItem(child));
        // if the item has an explicit expanded value, use that, otherwise use the tree's default value
        const expanded = item.expanded === undefined ? this.expanded : item.expanded;
        return h("la-toc-item", { item: item, filteredItems: this.filteredItems, expandIconHtml: this.expandIconHtml, collapseIconHtml: this.collapseIconHtml, expanded: expanded }, kids);
    }
    render() {
        return (h(Host, { key: 'f8b5eaf0e2c359af4eea3b7d6ab3fcad94f393bb' }, h("div", { key: 'ddca6abce36c9be705a172c12e833a6f9d088b89', style: { display: 'none' } }, h("slot", { key: '6f55f20f2cb614bb7a7519c44a71f2f94ff60b14', name: "expand-icon" }), h("slot", { key: '9bc755de6658047c64c1c3f5e42a4b6342a883f8', name: "collapse-icon" })), this.innerItems.map((item) => this.renderItem(item))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "items": ["parseItemsProp"],
        "provider": ["refetch"],
        "frbrExpressionUri": ["refetch"],
        "fetch": ["refetch"],
        "titleFilter": ["titleFilterChanged"]
    }; }
};

export { TableOfContents as la_table_of_contents };

//# sourceMappingURL=la-table-of-contents.entry.js.map