import { Component, Prop, Element, Watch } from '@stencil/core';
import { renameElement } from '../../utils/utils';
import { getAkomaNtosoElement } from '../../utils/linking';
import tippy, { Instance as Tippy } from 'tippy.js';

@Component({
  tag: 'la-decorate-terms',
  styleUrl: 'decorate-terms.scss'
})
export class DecorateTerms {
  // The akn content element being decorated
  protected akomaNtosoElement?: HTMLElement | null;
  protected defnContainers: string = '.akn-p, .akn-subsection, .akn-section, .akn-blockList';

  protected tippies: Tippy[] = [];
  protected tippyContainer?: HTMLElement;

  @Element() el!: HTMLElement;

  /**
   * CSS selector for the la-akoma-ntoso element and HTMLElement that will be decorated. Defaults
   * to the containing la-akoma-ntoso element, if any, otherwise the first
   * `la-akoma-ntoso` element on the page.
   */
  // TODO: should  we be watching this? What if it changes?
  @Prop() akomaNtoso?: string | HTMLElement;

  /**
   * If `true`, the definitions of terms will be shown as popups.
   */
  @Prop() popupDefinitions: boolean = false;

  /**
   * If `true`, terms will be changed to `<a>` elements that jump to the term definition.
   */
  @Prop() linkTerms: boolean = false;

  componentWillLoad () {
    // TODO: watch for changes to the akn content?
    this.akomaNtosoElement = getAkomaNtosoElement(this.el, this.akomaNtoso);
    this.tippyContainer = document.createElement('div');
    this.tippyContainer.className = 'la-decorate-terms__popup';
    document.body.appendChild(this.tippyContainer);
  }

  componentDidLoad () {
    if (this.akomaNtosoElement) {
      this.setupDefinitions();

      if (this.linkTerms) {
        this.makeTermLinks();
      }

      this.changePopupDefinitions(this.popupDefinitions);
    }
  }

  @Watch('popupDefinitions')
  changePopupDefinitions (popup: boolean) {
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
    if (this.akomaNtosoElement) {
      for (const def of this.akomaNtosoElement.querySelectorAll<HTMLElement>('.akn-def[data-refersto]')) {
        const term = def.getAttribute('data-refersto')?.replace('#', '');
        const closest: HTMLElement | null = def.closest(this.defnContainers);
        if (closest && term) {
          closest.dataset.defines = def.dataset.refersto;
          closest.setAttribute('id', `defn-${term}`);
        }
      }
    }
  }

  createPopups () {
    // @ts-ignore
    this.tippies = tippy('.akn-term', {
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

  onTrigger (tippy: Tippy) {
    const ref: HTMLElement = tippy.reference as HTMLElement;
    const defn: HTMLElement | null = this.getDefinition(ref);

    if (defn) {
      tippy.setContent(`
        <div>
          <div class="tippy-content__title">${ref.innerText}</div>
          <div class="tippy-content__body"><la-akoma-ntoso>${defn.outerHTML}</la-akoma-ntoso></div>
        </div>`
      );
    }
  }

  getDefinition (reference: Element): HTMLElement | null {
    const term = reference.getAttribute('data-refersto');
    // find where the term is defined
    if (this.akomaNtosoElement) {
      return this.akomaNtosoElement.querySelector(`[data-defines="${term}"]`);
    }
    return null;
  }

  makeTermLinks () {
    if (this.akomaNtosoElement) {
      this.akomaNtosoElement.classList.add('link-terms');
      for (let term of this.akomaNtosoElement.querySelectorAll<HTMLElement>('.akn-term[data-refersto]')) {
        term = renameElement(term, 'a') as HTMLElement;
        const termId: string = (term.dataset.refersto || '').replace('#', '');
        term.setAttribute('href', `#defn-${termId}`);
      }
    }
  }
}
