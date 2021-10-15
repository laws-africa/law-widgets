import { Component, Prop, Element, } from '@stencil/core';
import tippy from "tippy.js";

@Component({
  tag: 'la-decorate-terms',
  styleUrl: 'decorate-terms.scss'
})
export class DecorateTerms {

  // The akn content element being decorated
  protected akomaNtosoElement: HTMLElement = null;
  protected defnContainers: string = '.akn-p, .akn-subsection, .akn-section, .akn-blockList';

  @Element() el: HTMLElement;

  /**
   * CSS selector for the la-akoma-ntoso element that will be decorated. Defaults
   * to the first `la-akoma-ntoso` element on the page.
   */
    // TODO: should  we be watching this? What if it changes?
  @Prop() akomaNtoso: string = 'la-akoma-ntoso';

  /**
   * Should term definitions be shown as popups?
   */
  @Prop() popupDefinitions: boolean = true;

  /**
   * Should term references be clickable?
   */
  @Prop() linkTerms: boolean = true;

  componentDidLoad() {
    // TODO: attach to the akomaNtoso element
    if (this.akomaNtoso) {
      this.akomaNtosoElement = document.querySelector(this.akomaNtoso);
    }

    this.setupDefinitions();

    // TODO: listen to changes
    if (this.popupDefinitions) {
      this.setupPopups();
    }

    if (this.linkTerms) {
      this.makeTermLinks();
    }
  }

  // tag term definition containers
  setupDefinitions () {
    this.akomaNtosoElement.querySelectorAll('.akn-def[data-refersto]').forEach((def: HTMLElement) => {
      const term = def.getAttribute('data-refersto').replace('#', '');
      const closest: HTMLElement = def.closest(this.defnContainers);
      closest.dataset.defines = def.dataset.refersto;
      closest.setAttribute('id', `defn-${term}`);
    });
  }

  // show definition popups
  setupPopups () {
    // TODO: is creating a container necessary? tippy should do that already
    const toolTipsContainer = document.createElement('div');
    toolTipsContainer.classList.add('la-akn-tooltip-container');
    document.body.appendChild(toolTipsContainer);

    this.akomaNtosoElement.querySelectorAll('.akn-term').forEach((termElement: HTMLElement) => {
      tippy(termElement, {
        allowHTML: true,
        content: this.getPopupContent(termElement),
        appendTo: toolTipsContainer,
      });
    });
  }

  getPopupContent (termElement: HTMLElement): string {
    const termId: string = termElement.dataset.refersto;
    const element = this.akomaNtosoElement.querySelector(`[data-defines="${termId}"]`);
    return `<div>
      <div class="tippy-content__header">${termElement.innerText}</div>
      <div class="tippy-content__body">
        <la-akoma-ntoso>${element.outerHTML}</la-akoma-ntoso>
      </div>
    </div>`;
  }

  makeTermLinks () {
    this.akomaNtosoElement.classList.add('link-terms');
    this.akomaNtosoElement.querySelectorAll('.akn-term[data-refersto]').forEach((term: HTMLElement) => {
      term.classList.add('term-link');
      term.addEventListener('click', () => this.termClicked(term));
    });
  }

  termClicked (term) {
    // jump to term definition
    window.location.hash = `#defn-${term.dataset.refersto.replace('#', '')}`;
  }
}
