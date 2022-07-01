import { Component, Prop, Element, Watch } from '@stencil/core';
import { renameElement } from '../../utils/utils';
import { AkomaNtosoTarget } from '../../utils/linking';
import tippy from 'tippy.js';
export class DecorateTerms {
  constructor() {
    this.defnContainers = '.akn-p, .akn-subsection, .akn-section, .akn-blockList';
    this.tippies = [];
    /**
     * If `true`, the definitions of terms will be shown as popups.
     */
    this.popupDefinitions = false;
    /**
     * If `true`, terms will be changed to `<a>` elements that jump to the term definition.
     */
    this.linkTerms = false;
  }
  componentWillLoad() {
    const target = new AkomaNtosoTarget(this.el, this.akomaNtoso, () => {
      this.componentDidLoad();
    });
    this.akomaNtosoElement = target.getElement();
    this.tippyContainer = document.createElement('div');
    this.tippyContainer.className = 'la-decorate-terms__popup';
    document.body.appendChild(this.tippyContainer);
  }
  componentDidLoad() {
    if (this.akomaNtosoElement) {
      this.setupDefinitions();
      if (this.linkTerms) {
        this.makeTermLinks();
      }
      this.changePopupDefinitions(this.popupDefinitions);
    }
  }
  changePopupDefinitions(popup) {
    // remove existing popups
    for (const tippy of this.tippies) {
      tippy.destroy();
    }
    this.tippies = [];
    if (this.akomaNtosoElement && popup) {
      this.createPopups();
    }
  }
  // tag term definition containers
  setupDefinitions() {
    var _a;
    if (this.akomaNtosoElement) {
      for (const def of this.akomaNtosoElement.querySelectorAll('.akn-def[data-refersto]')) {
        const term = (_a = def.getAttribute('data-refersto')) === null || _a === void 0 ? void 0 : _a.replace('#', '');
        const closest = def.closest(this.defnContainers);
        if (closest && term) {
          closest.dataset.defines = def.dataset.refersto;
          closest.setAttribute('id', `defn-${term}`);
        }
      }
    }
  }
  createPopups() {
    // @ts-ignore
    this.tippies = tippy(this.akomaNtosoElement.querySelectorAll('.akn-term'), {
      appendTo: () => this.tippyContainer,
      allowHTML: true,
      content: '',
      hideOnClick: true,
      interactive: true,
      maxWidth: 450,
      onTrigger: this.onTrigger.bind(this),
      theme: 'light-border'
    });
  }
  onTrigger(tippy) {
    const ref = tippy.reference;
    const defn = this.getDefinition(ref);
    if (defn) {
      tippy.setContent(`
        <div>
          <div class="tippy-content__title">${ref.innerText}</div>
          <div class="tippy-content__body"><la-akoma-ntoso>${defn.outerHTML}</la-akoma-ntoso></div>
        </div>`);
    }
  }
  getDefinition(reference) {
    const term = reference.getAttribute('data-refersto');
    // find where the term is defined
    if (this.akomaNtosoElement) {
      return this.akomaNtosoElement.querySelector(`[data-defines="${term}"]`);
    }
    return null;
  }
  makeTermLinks() {
    if (this.akomaNtosoElement) {
      this.akomaNtosoElement.classList.add('link-terms');
      for (let term of this.akomaNtosoElement.querySelectorAll('.akn-term[data-refersto]')) {
        term = renameElement(term, 'a');
        const termId = (term.dataset.refersto || '').replace('#', '');
        term.setAttribute('href', `#defn-${termId}`);
      }
    }
  }
  static get is() { return "la-decorate-terms"; }
  static get originalStyleUrls() { return {
    "$": ["decorate-terms.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["decorate-terms.css"]
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
        "text": "CSS selector for the la-akoma-ntoso element and HTMLElement that will be decorated. Defaults\nto the containing la-akoma-ntoso element, if any, otherwise the first\n`la-akoma-ntoso` element on the page."
      },
      "attribute": "akoma-ntoso",
      "reflect": false
    },
    "popupDefinitions": {
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
        "text": "If `true`, the definitions of terms will be shown as popups."
      },
      "attribute": "popup-definitions",
      "reflect": false,
      "defaultValue": "false"
    },
    "linkTerms": {
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
        "text": "If `true`, terms will be changed to `<a>` elements that jump to the term definition."
      },
      "attribute": "link-terms",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "popupDefinitions",
      "methodName": "changePopupDefinitions"
    }]; }
}
