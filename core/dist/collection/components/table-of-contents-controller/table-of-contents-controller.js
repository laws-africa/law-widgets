/*!
 * (C) Law Widgets https://laws.africa - GNU Lesser General Public License 3
 */
// eslint-disable-next-line no-unused-vars
import { h, Host } from "@stencil/core";
import debounce from "lodash/debounce";
import { PROVIDER } from "../../utils/services";
export class TableOfContentsController {
    constructor() {
        this.handleTitleChange = debounce((e) => {
            this.titleFilter = e.target.value;
        }, 300);
        this.items = [];
        this.titleFilterPlaceholder = 'Search the table of contents';
        this.hideClearTitleFilterButton = false;
        this.titleFilterClearBtnClasses = '';
        this.expandAllBtnClasses = '';
        this.collapseAllBtnClasses = '';
        this.expandAllBtnText = 'Expand all';
        this.collapseAllBtnText = 'Collapse all';
        this.expanded = true;
        this.titleFilterInputClasses = '';
        this.frbrExpressionUri = undefined;
        this.fetch = false;
        this.partner = undefined;
        this.provider = PROVIDER;
        this.titleFilter = '';
    }
    clearTitleFilter() {
        this.titleFilter = '';
    }
    async expandAll() {
        const tocElement = this.el.querySelector('la-table-of-contents');
        tocElement === null || tocElement === void 0 ? void 0 : tocElement.expandAll();
    }
    async collapseAll() {
        const tocElement = this.el.querySelector('la-table-of-contents');
        tocElement === null || tocElement === void 0 ? void 0 : tocElement.collapseAll();
    }
    render() {
        const renderHideClearFilterButton = () => {
            if (this.hideClearTitleFilterButton) {
                return null;
            }
            return (h("button", { class: `search__clear-btn ${this.titleFilterClearBtnClasses}`, type: "button", onClick: () => this.clearTitleFilter(), disabled: !this.titleFilter }, h("slot", { name: "clear-title-filter-icon" }, "\u2715")));
        };
        return (h(Host, null, h("div", { class: "search" }, h("input", { class: `search__input ${this.titleFilterInputClasses}`, value: this.titleFilter, placeholder: this.titleFilterPlaceholder, onInput: (e) => this.handleTitleChange(e) }), renderHideClearFilterButton()), h("div", { class: "toggle" }, h("button", { type: "button", class: `toggle__expand-all-btn ${this.expandAllBtnClasses}`, onClick: () => this.expandAll() }, this.expandAllBtnText), h("button", { type: "button", class: `toggle__collapse-all-btn ${this.collapseAllBtnClasses}`, onClick: () => this.collapseAll() }, this.collapseAllBtnText)), h("la-table-of-contents", { items: this.items, titleFilter: this.titleFilter, fetch: this.fetch, provider: this.provider, partner: this.partner, "frbr-expression-uri": this.frbrExpressionUri, expanded: this.expanded }, h("span", { slot: "expand-icon" }, h("slot", { name: "expand-icon" })), h("span", { slot: "collapse-icon" }, h("slot", { name: "collapse-icon" })))));
    }
    static get is() { return "la-table-of-contents-controller"; }
    static get originalStyleUrls() {
        return {
            "$": ["table-of-contents-controller.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["table-of-contents-controller.css"]
        };
    }
    static get properties() {
        return {
            "items": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TOCItem[] | string",
                    "resolved": "TOCItem[] | string",
                    "references": {
                        "TOCItem": {
                            "location": "import",
                            "path": "../table-of-contents/table-of-contents",
                            "id": "src/components/table-of-contents/table-of-contents.tsx::TOCItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "JSON value of array of items or string value parsed to array of items used to build the table of contents. Each\nitem must have a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`)."
                },
                "attribute": "items",
                "reflect": false,
                "defaultValue": "[]"
            },
            "titleFilterPlaceholder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Placeholder for search title filter"
                },
                "attribute": "title-filter-placeholder",
                "reflect": false,
                "defaultValue": "'Search the table of contents'"
            },
            "hideClearTitleFilterButton": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, hides clear title filter button"
                },
                "attribute": "hide-clear-title-filter-button",
                "reflect": false,
                "defaultValue": "false"
            },
            "titleFilterClearBtnClasses": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Additional classes added to title filter button"
                },
                "attribute": "title-filter-clear-btn-classes",
                "reflect": false,
                "defaultValue": "''"
            },
            "expandAllBtnClasses": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Additional classes added to Expand all button"
                },
                "attribute": "expand-all-btn-classes",
                "reflect": false,
                "defaultValue": "''"
            },
            "collapseAllBtnClasses": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Additional classes added to Collapse all button"
                },
                "attribute": "collapse-all-btn-classes",
                "reflect": false,
                "defaultValue": "''"
            },
            "expandAllBtnText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Button text for expand all button"
                },
                "attribute": "expand-all-btn-text",
                "reflect": false,
                "defaultValue": "'Expand all'"
            },
            "collapseAllBtnText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Button text for collapse all button"
                },
                "attribute": "collapse-all-btn-text",
                "reflect": false,
                "defaultValue": "'Collapse all'"
            },
            "expanded": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Should the table of contents be expanded when first created?"
                },
                "attribute": "expanded",
                "reflect": false,
                "defaultValue": "true"
            },
            "titleFilterInputClasses": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Additional CSS classes added to the search filter input"
                },
                "attribute": "title-filter-input-classes",
                "reflect": false,
                "defaultValue": "''"
            },
            "frbrExpressionUri": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Full Akoma Ntoso FRBR Expression URI to fetch TOC information for. Only used if `fetch` is set."
                },
                "attribute": "frbr-expression-uri",
                "reflect": true
            },
            "fetch": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Fetch content from Laws.Africa services? Requires a Laws.Africa partnership and the frbrExpressionUri property to be set."
                },
                "attribute": "fetch",
                "reflect": true,
                "defaultValue": "false"
            },
            "partner": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Partner code to use when fetching content from Laws.Africa. Defaults to the `location.hostname`."
                },
                "attribute": "partner",
                "reflect": true
            },
            "provider": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Provider URL for fetching content (advanced usage only)."
                },
                "attribute": "provider",
                "reflect": false,
                "defaultValue": "PROVIDER"
            }
        };
    }
    static get states() {
        return {
            "titleFilter": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=table-of-contents-controller.js.map
