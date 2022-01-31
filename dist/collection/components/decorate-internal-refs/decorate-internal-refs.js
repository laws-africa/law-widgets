import { Component, Prop, Element, Watch } from '@stencil/core';
import { getAkomaNtosoElement } from '../../utils/linking';
import tippy from 'tippy.js';
export class DecorateInternalRefs {
  constructor() {
    this.tippies = [];
    /**
     * If `true`, the content of internal ref targets will be shown as popups.
     */
    this.popups = false;
    /**
     * If `true`, internal refs will be flagged with in icon to be more visible.
     */
    this.flag = false;
  }
  componentWillLoad() {
    // TODO: watch for changes to the akn content?
    this.akomaNtosoElement = getAkomaNtosoElement(this.el, this.akomaNtoso);
    this.tippyContainer = document.createElement('div');
    this.tippyContainer.className = 'la-decorate-internal-refs__popup';
    document.body.appendChild(this.tippyContainer);
  }
  componentDidLoad() {
    this.changeFlag(this.flag);
    this.changePopups(this.popups);
  }
  changeFlag(flag) {
    if (this.akomaNtosoElement) {
      this.akomaNtosoElement.classList.toggle('flag-internal-refs', flag);
    }
  }
  changePopups(popups) {
    // remove existing popups
    for (const tippy of this.tippies) {
      tippy.destroy();
    }
    this.tippies = [];
    if (this.akomaNtosoElement && popups) {
      this.createPopups();
    }
  }
  createPopups() {
    // @ts-ignore
    this.tippies = tippy('a.akn-ref[href^="#"]', {
      appendTo: () => this.tippyContainer,
      allowHTML: true,
      hideOnClick: true,
      interactive: true,
      maxWidth: 450,
      onTrigger: this.onTrigger.bind(this),
      theme: 'light-border'
    });
  }
  onTrigger(tippy) {
    if (this.akomaNtosoElement) {
      const href = tippy.reference.getAttribute('href') || '';
      const provision = this.akomaNtosoElement.querySelector(href);
      if (provision) {
        tippy.setContent(`
        <div>
          <div class="tippy-content__body"><la-akoma-ntoso>${provision.outerHTML}</la-akoma-ntoso></div>
        </div>`);
      }
    }
  }
  static get is() { return "la-decorate-internal-refs"; }
  static get originalStyleUrls() { return {
    "$": ["decorate-internal-refs.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["decorate-internal-refs.css"]
  }; }
  static get properties() { return {
    "akomaNtoso": {
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
        "text": "CSS selector for the la-akoma-ntoso element or HTMLELement that will be decorated. Defaults\nto the containing la-akoma-ntoso element, if any, otherwise the first\n`la-akoma-ntoso` element on the page."
      },
      "attribute": "akoma-ntoso",
      "reflect": false
    },
    "popups": {
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
        "text": "If `true`, the content of internal ref targets will be shown as popups."
      },
      "attribute": "popups",
      "reflect": false,
      "defaultValue": "false"
    },
    "flag": {
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
        "text": "If `true`, internal refs will be flagged with in icon to be more visible."
      },
      "attribute": "flag",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "flag",
      "methodName": "changeFlag"
    }, {
      "propName": "popups",
      "methodName": "changePopups"
    }]; }
}
