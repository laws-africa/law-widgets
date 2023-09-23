/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { t as tippy } from './tippy.esm.js';
import { A as AkomaNtosoTarget } from './linking.js';
import { P as PROVIDER, g as getPartner } from './services.js';

const decorateInternalRefsCss = ".la-decorate-internal-refs__popup .tippy-box[data-animation=fade][data-state=hidden]{opacity:0}.la-decorate-internal-refs__popup [data-tippy-root]{max-width:calc(100vw - 10px)}.la-decorate-internal-refs__popup .tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform}.la-decorate-internal-refs__popup .tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.la-decorate-internal-refs__popup .tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;-webkit-transform-origin:center top;transform-origin:center top}.la-decorate-internal-refs__popup .tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.la-decorate-internal-refs__popup .tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;-webkit-transform-origin:center bottom;transform-origin:center bottom}.la-decorate-internal-refs__popup .tippy-box[data-placement^=left]>.tippy-arrow{right:0}.la-decorate-internal-refs__popup .tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;-webkit-transform-origin:center left;transform-origin:center left}.la-decorate-internal-refs__popup .tippy-box[data-placement^=right]>.tippy-arrow{left:0}.la-decorate-internal-refs__popup .tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;-webkit-transform-origin:center right;transform-origin:center right}.la-decorate-internal-refs__popup .tippy-box[data-inertia][data-state=visible]{-webkit-transition-timing-function:cubic-bezier(0.54, 1.5, 0.38, 1.11);transition-timing-function:cubic-bezier(0.54, 1.5, 0.38, 1.11)}.la-decorate-internal-refs__popup .tippy-arrow{width:16px;height:16px;color:#333}.la-decorate-internal-refs__popup .tippy-arrow:before{content:\"\";position:absolute;border-color:transparent;border-style:solid}.la-decorate-internal-refs__popup .tippy-content{position:relative;padding:5px 9px;z-index:1}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]{background-color:#fff;background-clip:padding-box;border:1px solid rgba(0, 8, 16, 0.15);color:#333;-webkit-box-shadow:0 4px 14px -2px rgba(0, 8, 16, 0.08);box-shadow:0 4px 14px -2px rgba(0, 8, 16, 0.08)}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-backdrop{background-color:#fff}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-arrow:after,.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{content:\"\";position:absolute;z-index:-1}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-arrow:after{border-color:transparent;border-style:solid}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before{border-top-color:#fff}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after{border-top-color:rgba(0, 8, 16, 0.2);border-width:7px 7px 0;top:17px;left:1px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg{top:16px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after{top:17px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:#fff;bottom:16px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after{border-bottom-color:rgba(0, 8, 16, 0.2);border-width:0 7px 7px;bottom:17px;left:1px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after{bottom:17px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before{border-left-color:#fff}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after{border-left-color:rgba(0, 8, 16, 0.2);border-width:7px 0 7px 7px;left:17px;top:1px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg{left:11px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after{left:12px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before{border-right-color:#fff;right:16px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after{border-width:7px 7px 7px 0;right:17px;top:1px;border-right-color:rgba(0, 8, 16, 0.2)}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg{right:11px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after{right:12px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow{fill:#fff}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);background-size:16px 6px;width:16px;height:6px}.la-decorate-internal-refs__popup .tippy-content{padding:0}.la-decorate-internal-refs__popup .tippy-content__title{padding:0.5rem 0.75rem;margin-bottom:0;font-size:1rem;font-weight:bold;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px);background-color:#f7f7f7}.la-decorate-internal-refs__popup .tippy-content__body{padding:0.5rem 0.75rem;background-color:white}.la-decorate-internal-refs__popup .tippy-content la-akoma-ntoso{max-height:40vh;overflow-y:auto}la-akoma-ntoso.flag-internal-refs .akn-ref[href^=\"#\"]::after{display:inline-block;content:\"\";vertical-align:-0.125em;background-image:url(\"data:image/svg+xml,<svg viewBox='0 0 16 16' fill='%239c27b0' xmlns='http://www.w3.org/2000/svg'><path d='M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z'/></svg>\");background-repeat:no-repeat;width:0.8rem;height:0.8rem}";

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
const DecorateInternalRefs = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
    this.provider = PROVIDER;
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
      theme: 'light-border',
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
        try {
          const resp = await fetch(url);
          if (resp.ok) {
            return await resp.text();
          }
        }
        catch (error) {
          // ignore
        }
      }
    }
    return null;
  }
  ensurePartner() {
    if (!this.partner) {
      this.partner = getPartner();
    }
  }
  get el() { return this; }
  static get watchers() { return {
    "flag": ["changeFlag"],
    "popups": ["changePopups"]
  }; }
  static get style() { return decorateInternalRefsCss; }
}, [0, "la-decorate-internal-refs", {
    "akomaNtoso": [1, "akoma-ntoso"],
    "popups": [4],
    "flag": [4],
    "fetch": [1540],
    "partner": [1537],
    "provider": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["la-decorate-internal-refs"];
  components.forEach(tagName => { switch (tagName) {
    case "la-decorate-internal-refs":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DecorateInternalRefs);
      }
      break;
  } });
}

const LaDecorateInternalRefs = DecorateInternalRefs;
const defineCustomElement = defineCustomElement$1;

export { LaDecorateInternalRefs, defineCustomElement };
