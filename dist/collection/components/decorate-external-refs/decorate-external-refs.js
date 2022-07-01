import { Component, Prop, Element, Watch } from '@stencil/core';
import { AkomaNtosoTarget } from '../../utils/linking';
import tippy from 'tippy.js';
export class DecorateExternalRefs {
  constructor() {
    this.tippies = [];
    /**
     * If `true`, the content of external ref targets will be shown as popups.
     */
    this.popups = false;
    /**
     * Provider URL (advanced usage only).
     */
    this.provider = 'https://services.lawsafrica.com/v1';
  }
  componentWillLoad() {
    const target = new AkomaNtosoTarget(this.el, this.akomaNtoso, () => {
      this.componentDidLoad();
    });
    this.akomaNtosoElement = target.getElement();
    this.tippyContainer = document.createElement('div');
    this.tippyContainer.className = 'la-decorate-external-refs__popup';
    document.body.appendChild(this.tippyContainer);
  }
  componentDidLoad() {
    this.changePopups(this.popups);
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
    if (this.akomaNtosoElement) {
      // @ts-ignore
      this.tippies = tippy(this.akomaNtosoElement.querySelectorAll('a.akn-ref[data-href^="/akn/"]'), {
        appendTo: () => this.tippyContainer,
        allowHTML: true,
        hideOnClick: true,
        interactive: true,
        maxWidth: 450,
        onTrigger: this.onTrigger.bind(this),
        theme: 'light-border'
      });
    }
  }
  async onTrigger(tippy) {
    const frbrUri = tippy.reference.getAttribute('data-href') || '';
    // TODO: if there's nothing, don't show the popup
    // TODO: delay showing until we have content
    const content = await this.fetchContent(frbrUri);
    if (content) {
      tippy.setContent(`
        <div>
          <div class="tippy-content__body">${content}</div>
        </div>`);
    }
  }
  ensurePartner() {
    if (!this.partner) {
      this.partner = document.location.hostname.replace(/^www\./, '');
    }
  }
  async fetchContent(frbrUri) {
    this.ensurePartner();
    if (frbrUri && this.provider) {
      const url = this.provider + '/p/' + this.partner + '/e/popup' + frbrUri;
      const resp = await fetch(url);
      if (resp.ok) {
        return await resp.text();
      }
    }
  }
  static get is() { return "la-decorate-external-refs"; }
  static get originalStyleUrls() { return {
    "$": ["decorate-external-refs.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["decorate-external-refs.css"]
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
        "text": "If `true`, the content of external ref targets will be shown as popups."
      },
      "attribute": "popups",
      "reflect": false,
      "defaultValue": "false"
    },
    "partner": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Partner code provided by Laws.Africa. Defaults to the hostname of your website."
      },
      "attribute": "partner",
      "reflect": false
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
        "text": "Provider URL (advanced usage only)."
      },
      "attribute": "provider",
      "reflect": false,
      "defaultValue": "'https://services.lawsafrica.com/v1'"
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "popups",
      "methodName": "changePopups"
    }]; }
}
