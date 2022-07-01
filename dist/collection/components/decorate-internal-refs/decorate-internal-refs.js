import { Component, Prop, Element, Watch } from '@stencil/core';
import { AkomaNtosoTarget } from '../../utils/linking';
import tippy from 'tippy.js';
/**
 * Remove the existing portion (if any) of frbrUri, and add the new portion to it.
 */
function addPortion(frbrUri, portion) {
  const ix = frbrUri.indexOf('~');
  if (ix > -1) {
    frbrUri = frbrUri.slice(0, ix);
  }
  if (!frbrUri.endsWith('/'))
    frbrUri = frbrUri + '/';
  return frbrUri + portion;
}
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
    /** Fetch content from Laws.Africa services? Requires a Laws.Africa partnership and the frbrExpressionUri property to be set. */
    this.fetch = false;
    /** Provider URL for fetching content (advanced usage only). */
    this.provider = 'https://services.lawsafrica.com/v1';
  }
  componentWillLoad() {
    const target = new AkomaNtosoTarget(this.el, this.akomaNtoso, () => {
      this.componentDidLoad();
    });
    this.akomaNtosoElement = target.getElement();
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
  async onTrigger(tippy) {
    if (this.akomaNtosoElement) {
      const href = tippy.reference.getAttribute('href') || '';
      let html = '';
      const provision = this.akomaNtosoElement.querySelector(href);
      if (provision) {
        html = provision.outerHTML;
      }
      else if (this.fetch) {
        // try fetching it remotely
        html = await this.fetchContent(href.slice(1));
      }
      if (html) {
        tippy.setContent(`
        <div>
          <div class="tippy-content__body"><la-akoma-ntoso>${html}</la-akoma-ntoso></div>
        </div>`);
      }
    }
  }
  async fetchContent(elementId) {
    this.ensurePartner();
    if (this.provider && this.akomaNtosoElement) {
      const frbrUri = this.akomaNtosoElement.getAttribute('frbr-expression-uri');
      if (frbrUri) {
        const url = this.provider + '/p/' + this.partner + '/e/portion' + addPortion(frbrUri, '~' + elementId);
        const resp = await fetch(url);
        if (resp.ok) {
          return await resp.text();
        }
      }
    }
  }
  ensurePartner() {
    if (!this.partner) {
      this.partner = document.location.hostname.replace(/^www\./, '');
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
      "defaultValue": "'https://services.lawsafrica.com/v1'"
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
