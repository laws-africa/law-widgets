import { Component, Prop, Element, Watch } from '@stencil/core';
import { renameElement } from "../../utils/utils";
import { getAkomaNtosoElement } from "../../utils/linking";
import tippy from "tippy.js";

@Component({
  tag: 'la-decorate-terms',
  styleUrl: 'decorate-terms.scss'
})
export class DecorateTerms {
  // The akn content element being decorated
  protected akomaNtosoElement: HTMLElement | null;
  protected defnContainers: string = '.akn-p, .akn-subsection, .akn-section, .akn-blockList';

  protected tippies = [];
  // The wrapper element that ensures the tippy content is styled correctly
  protected wrapper: HTMLElement = document.createElement('la-akoma-ntoso');

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
  @Prop() popupDefinitions: boolean = false;

  /**
   * Should term references be clickable?
   */
  @Prop() linkTerms: boolean = false;

  componentWillLoad () {
    // TODO: watch for changes to the akn content?
    this.akomaNtosoElement = getAkomaNtosoElement(this.el, this.akomaNtoso);
    this.wrapper = document.createElement('la-akoma-ntoso');
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

  @Watch('popupDefinitions')
  changePopupDefinitions (popup) {
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
  setupDefinitions () {
    this.akomaNtosoElement.querySelectorAll('.akn-def[data-refersto]').forEach((def: HTMLElement) => {
      const term = def.getAttribute('data-refersto').replace('#', '');
      const closest: HTMLElement = def.closest(this.defnContainers);
      closest.dataset.defines = def.dataset.refersto;
      closest.setAttribute('id', `defn-${term}`);
    });
  }

  createPopups () {
    this.tippies = tippy('.akn-term', {
      appendTo: () => this.el.ownerDocument.body,
      content: '',
      hideOnClick: true,
      interactive: true,
      maxWidth: 450,
      onTrigger: this.onTrigger.bind(this),
      theme: 'light-border'
    });
  }

  onTrigger (tippy) {
    const defn: HTMLElement = this.getDefinition(tippy.reference);

    if (defn) {
      const wrapper = this.wrapper.cloneNode(true);
      wrapper.appendChild(defn.cloneNode(true));
      tippy.setContent(wrapper);
    }
  }

  getDefinition (reference: HTMLElement): HTMLElement {
    const term = reference.getAttribute('data-refersto');
    // find where the term is defined
    return this.akomaNtosoElement.querySelector(`[data-defines="${term}"]`);
  }

  makeTermLinks () {
    this.akomaNtosoElement.classList.add('link-terms');
    this.akomaNtosoElement.querySelectorAll('.akn-term[data-refersto]').forEach((term: HTMLElement) => {
      term = renameElement(term, 'a');
      term.setAttribute('href', `#defn-${term.dataset.refersto.replace('#', '')}`);
    });
  }
}
