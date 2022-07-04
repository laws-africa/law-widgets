import { r as registerInstance, g as getElement } from './index-769d63d0.js';
import { A as AkomaNtosoTarget } from './linking-a1950f50.js';
import { t as tippy } from './tippy.esm-dbc92b9b.js';

/**
 * Rename element to a different HTML element, copying attributes and children.
 * @param el
 * @param name
 */
function renameElement(el, name) {
  const newEl = document.createElement(name);
  for (let i = 0; i < el.attributes.length; i++) {
    // @ts-ignore
    newEl.setAttribute(el.attributes.item(i).nodeName, el.attributes.item(i).nodeValue);
  }
  while (el.childNodes.length) {
    newEl.appendChild(el.childNodes[0]);
  }
  if (el.parentNode) {
    el.parentNode.replaceChild(newEl, el);
  }
  return newEl;
}

const decorateTermsCss = ".la-decorate-terms__popup .tippy-box[data-animation=fade][data-state=hidden]{opacity:0}.la-decorate-terms__popup [data-tippy-root]{max-width:calc(100vw - 10px)}.la-decorate-terms__popup .tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform}.la-decorate-terms__popup .tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.la-decorate-terms__popup .tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;-webkit-transform-origin:center top;transform-origin:center top}.la-decorate-terms__popup .tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.la-decorate-terms__popup .tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;-webkit-transform-origin:center bottom;transform-origin:center bottom}.la-decorate-terms__popup .tippy-box[data-placement^=left]>.tippy-arrow{right:0}.la-decorate-terms__popup .tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;-webkit-transform-origin:center left;transform-origin:center left}.la-decorate-terms__popup .tippy-box[data-placement^=right]>.tippy-arrow{left:0}.la-decorate-terms__popup .tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;-webkit-transform-origin:center right;transform-origin:center right}.la-decorate-terms__popup .tippy-box[data-inertia][data-state=visible]{-webkit-transition-timing-function:cubic-bezier(0.54, 1.5, 0.38, 1.11);transition-timing-function:cubic-bezier(0.54, 1.5, 0.38, 1.11)}.la-decorate-terms__popup .tippy-arrow{width:16px;height:16px;color:#333}.la-decorate-terms__popup .tippy-arrow:before{content:\"\";position:absolute;border-color:transparent;border-style:solid}.la-decorate-terms__popup .tippy-content{position:relative;padding:5px 9px;z-index:1}.la-decorate-terms__popup .tippy-box[data-theme~=light-border]{background-color:#fff;background-clip:padding-box;border:1px solid rgba(0, 8, 16, 0.15);color:#333;-webkit-box-shadow:0 4px 14px -2px rgba(0, 8, 16, 0.08);box-shadow:0 4px 14px -2px rgba(0, 8, 16, 0.08)}.la-decorate-terms__popup .tippy-box[data-theme~=light-border]>.tippy-backdrop{background-color:#fff}.la-decorate-terms__popup .tippy-box[data-theme~=light-border]>.tippy-arrow:after,.la-decorate-terms__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{content:\"\";position:absolute;z-index:-1}.la-decorate-terms__popup .tippy-box[data-theme~=light-border]>.tippy-arrow:after{border-color:transparent;border-style:solid}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before{border-top-color:#fff}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after{border-top-color:rgba(0, 8, 16, 0.2);border-width:7px 7px 0;top:17px;left:1px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg{top:16px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after{top:17px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:#fff;bottom:16px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after{border-bottom-color:rgba(0, 8, 16, 0.2);border-width:0 7px 7px;bottom:17px;left:1px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after{bottom:17px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before{border-left-color:#fff}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after{border-left-color:rgba(0, 8, 16, 0.2);border-width:7px 0 7px 7px;left:17px;top:1px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg{left:11px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after{left:12px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before{border-right-color:#fff;right:16px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after{border-width:7px 7px 7px 0;right:17px;top:1px;border-right-color:rgba(0, 8, 16, 0.2)}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg{right:11px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after{right:12px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow{fill:#fff}.la-decorate-terms__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);background-size:16px 6px;width:16px;height:6px}.la-decorate-terms__popup .tippy-content{padding:0}.la-decorate-terms__popup .tippy-content__title{padding:0.5rem 0.75rem;margin-bottom:0;font-size:1rem;font-weight:bold;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px);background-color:#f7f7f7}.la-decorate-terms__popup .tippy-content__body{padding:0.5rem 0.75rem;background-color:white}.la-decorate-terms__popup .tippy-content la-akoma-ntoso{max-height:40vh;overflow-y:auto}";

let DecorateTerms = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "popupDefinitions": ["changePopupDefinitions"]
  }; }
};
DecorateTerms.style = decorateTermsCss;

export { DecorateTerms as la_decorate_terms };
