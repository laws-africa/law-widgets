import { Component, Prop, Element, Watch } from '@stencil/core';
import type { Instance as Tippy } from 'tippy.js';
import tippy from 'tippy.js';

import { AkomaNtosoTarget } from '../../utils/linking';

@Component({
  tag: 'la-decorate-terms',
  styleUrl: 'decorate-terms.scss',
})
export class DecorateTerms {
  // The akn content element being decorated
  protected akomaNtosoElement?: HTMLElement | null;
  protected defnContainers = '.akn-p, .akn-subsection, .akn-section, .akn-blockList, .akn-blockContainer';

  protected tippies: Tippy[] = [];
  protected tippyContainer?: HTMLElement;

  @Element() el!: HTMLElement;

  /**
   * CSS selector for the la-akoma-ntoso element and HTMLElement that will be decorated. Defaults
   * to the containing la-akoma-ntoso element, if any, otherwise the first
   * `la-akoma-ntoso` element on the page.
   */
  @Prop() akomaNtoso?: string | HTMLElement;

  /**
   * If `true`, the definitions of terms will be shown as popups.
   */
  @Prop() popupDefinitions = false;

  /**
   * If `true`, terms will be changed to `<a>` elements that jump to the term definition.
   */
  @Prop() linkTerms = false;

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

  @Watch('popupDefinitions')
  changePopupDefinitions(popup: boolean) {
    // remove existing popups
    for (const tippy of this.tippies) {
      tippy.destroy();
    }
    this.tippies = [];

    if (this.akomaNtosoElement && popup) {
      this.createPopups();
    }

    this.toggleCssClasses();
  }

  @Watch('linkTerms')
  changeLinkTerms() {
    this.toggleCssClasses();
  }

  toggleCssClasses() {
    if (this.akomaNtosoElement) {
      this.akomaNtosoElement.classList.toggle('show-terms', this.linkTerms || this.popupDefinitions);
      this.akomaNtosoElement.classList.toggle('link-terms', this.linkTerms);
    }
  }

  // tag term definition containers
  setupDefinitions() {
    if (this.akomaNtosoElement) {
      Array.from(this.akomaNtosoElement.querySelectorAll<HTMLElement>('.akn-def[data-refersto]')).forEach((def) => {
        const term = def.getAttribute('data-refersto')?.replace('#', '');
        const closest: HTMLElement | null = def.closest(this.defnContainers);
        if (closest && term) {
          closest.dataset.defines = def.dataset.refersto;
          closest.setAttribute('id', `defn-${term}`);
        }
      });
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
      theme: 'light-border',
    });
  }

  onTrigger(tippy: Tippy) {
    const ref: HTMLElement = tippy.reference as HTMLElement;
    const defn: HTMLElement | null = this.getDefinition(ref);

    if (defn) {
      tippy.setContent(`
        <div>
          <div class="tippy-content__title">${ref.innerText}</div>
          <div class="tippy-content__body"><la-akoma-ntoso>${defn.outerHTML}</la-akoma-ntoso></div>
        </div>`);
    }
  }

  getDefinition(reference: Element): HTMLElement | null {
    const term = reference.getAttribute('data-refersto');
    // find where the term is defined
    if (this.akomaNtosoElement) {
      try {
        return this.akomaNtosoElement.querySelector(`[data-defines="${term}"]`);
      } catch (e) {
        // ignore query selector errors
        console.log(e);
      }
    }
    return null;
  }

  makeTermLinks() {
    if (this.akomaNtosoElement) {
      this.akomaNtosoElement.addEventListener('click', (e) => {
        if (e.target && e.target instanceof HTMLElement) {
          const el= e.target as HTMLElement;
          if (el.classList.contains('akn-term')) {
            const termId: string = (el.dataset.refersto || '').replace('#', '');
            if (termId) {
              window.location.hash = `#defn-${termId}`;
            }
          }
        }
      });
    }
  }
}
