/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
import { Component, Prop, h, Host, Event } from '@stencil/core';
export class TocItem {
  constructor() {
    /**
     * Item used to build the table of contents
     * */
    this.item = {};
    /**
     * Array of items filtered by titleQuery used in la-toc-item to determine with item is shown or not
     * */
    this.filteredItems = null;
    /**
     * HTML displayed before item title
     * */
    this.prependHtml = '';
    /**
     * HTML displayed after item title
     * */
    this.appendHtml = '';
    /**
     * HTML displayed in toggle button when item is expanded
     * */
    this.expandIconHtml = '';
    /**
     * HTML displayed in toggle button when item is not expanded
     * */
    this.collapseIconHtml = '';
    /**
     * If true, `item` `children`, and the collapsed icon are shown but expanded icon is hidden. If false, the `item`
     * `children` and collapsed icon are hidden but the expanded icon is show
     * */
    this.expanded = true;
    this.onItemTitleClick = (e) => {
      this.itemTitleClicked.emit(e);
    };
  }
  toggle() {
    this.expanded = !this.expanded;
  }
  componentDidRender() {
    this.itemRendered.emit();
  }
  render() {
    var _a, _b;
    const isParent = !!((_a = this.item.children) === null || _a === void 0 ? void 0 : _a.length);
    const showItem = !this.filteredItems || this.filteredItems.has(this.item);
    const url = this.item.url || `#${this.item.id || ''}`;
    const renderToggleBtnInner = () => {
      if (this.expanded) {
        return this.collapseIconHtml ? h("span", { innerHTML: this.collapseIconHtml }) : h("span", null, "\u25BC");
      }
      return this.expandIconHtml ? h("span", { innerHTML: this.expandIconHtml }) : h("span", null, "\u25BA");
    };
    return (h(Host, Object.assign({}, (isParent ? { parent: isParent } : {}), { class: `${!showItem ? 'excluded' : ''}` }),
      h("div", { class: "indented" }, isParent ? (h("div", { class: "indented__toggle-btn", role: "button", onClick: () => this.toggle() }, renderToggleBtnInner())) : null),
      h("div", { class: "content" },
        h("div", { class: "content__action" },
          this.prependHtml ? h("div", { class: "content__action__prepend", innerHTML: this.prependHtml }) : null,
          h("a", { href: url, class: "content__action__title", onClick: this.onItemTitleClick }, this.item.title),
          this.appendHtml ? h("div", { class: "content__action__append", innerHTML: this.appendHtml }) : null),
        h("div", { class: "content__children" }, ((_b = this.item.children) === null || _b === void 0 ? void 0 : _b.length)
          ? this.item.children.map((item) => (h("la-toc-item", { item: item, filteredItems: this.filteredItems, expandIconHtml: this.expandIconHtml, collapseIconHtml: this.collapseIconHtml })))
          : null))));
  }
  static get is() { return "la-toc-item"; }
  static get originalStyleUrls() { return {
    "$": ["toc-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["toc-item.css"]
  }; }
  static get properties() { return {
    "item": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "TOCItem",
        "resolved": "TOCItem",
        "references": {
          "TOCItem": {
            "location": "import",
            "path": "../table-of-contents/table-of-contents"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Item used to build the table of contents"
      },
      "defaultValue": "{}"
    },
    "filteredItems": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Set<TOCItem> | null",
        "resolved": "Set<TOCItem> | null",
        "references": {
          "Set": {
            "location": "global"
          },
          "TOCItem": {
            "location": "import",
            "path": "../table-of-contents/table-of-contents"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Array of items filtered by titleQuery used in la-toc-item to determine with item is shown or not"
      },
      "defaultValue": "null"
    },
    "prependHtml": {
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
        "text": "HTML displayed before item title"
      },
      "attribute": "prepend-html",
      "reflect": false,
      "defaultValue": "''"
    },
    "appendHtml": {
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
        "text": "HTML displayed after item title"
      },
      "attribute": "append-html",
      "reflect": false,
      "defaultValue": "''"
    },
    "expandIconHtml": {
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
        "text": "HTML displayed in toggle button when item is expanded"
      },
      "attribute": "expand-icon-html",
      "reflect": false,
      "defaultValue": "''"
    },
    "collapseIconHtml": {
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
        "text": "HTML displayed in toggle button when item is not expanded"
      },
      "attribute": "collapse-icon-html",
      "reflect": false,
      "defaultValue": "''"
    },
    "expanded": {
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
        "text": "If true, `item` `children`, and the collapsed icon are shown but expanded icon is hidden. If false, the `item`\n`children` and collapsed icon are hidden but the expanded icon is show"
      },
      "attribute": "expanded",
      "reflect": true,
      "defaultValue": "true"
    }
  }; }
  static get events() { return [{
      "method": "itemRendered",
      "name": "itemRendered",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "itemTitleClicked",
      "name": "itemTitleClicked",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
