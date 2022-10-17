/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
import { Component, Prop, Watch, Event, Listen } from '@stencil/core';
export class GutterItem {
  constructor() {
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
  static get is() { return "la-gutter-item"; }
  static get originalStyleUrls() { return {
    "$": ["gutter-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gutter-item.css"]
  }; }
  static get properties() { return {
    "anchor": {
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
        "text": "CSS selector for the anchor element or HTMLElement in the enclosing gutter's `<la-akoma-ntoso>` element."
      },
      "attribute": "anchor",
      "reflect": false
    },
    "active": {
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
        "text": "Indicates that this is the active item in the gutter. Only one item can be active at a time."
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "laItemChanged",
      "name": "laItemChanged",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when the state (`active`) of the item changes. Used by `la-gutter` to re-layout its items."
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "active",
      "methodName": "activeChanged"
    }, {
      "propName": "anchor",
      "methodName": "anchorChanged"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "onClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
