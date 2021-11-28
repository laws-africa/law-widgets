import { Component, Prop, Element, Watch } from '@stencil/core';
import { getAkomaNtosoElement } from '../../utils/linking';
import tippy, { Instance as Tippy } from 'tippy.js';

@Component({
  tag: 'la-decorate-internal-refs',
  styleUrl: 'decorate-internal-refs.scss'
})
export class DecorateInternalRefs {
  // The akn content element being decorated
  protected akomaNtosoElement?: HTMLElement | null;

  protected tippies: Tippy[] = [];
  protected tippyContainer?: HTMLElement;

  @Element() el!: HTMLElement;

  /**
   * CSS selector for the la-akoma-ntoso element that will be decorated. Defaults
   * to the containing la-akoma-ntoso element, if any, otherwise the first
   * `la-akoma-ntoso` element on the page.
   */
  // TODO: should we be watching this? What if it changes?
  @Prop() akomaNtoso?: string;

  /**
   * If `true`, the content of internal ref targets will be shown as popups.
   */
  @Prop() popups: boolean = false;

  /**
   * If `true`, internal refs will be flagged with in icon to be more visible.
   */
  @Prop() flag: boolean = false;

  componentWillLoad () {
    // TODO: watch for changes to the akn content?
    this.akomaNtosoElement = getAkomaNtosoElement(this.el, this.akomaNtoso);
    this.tippyContainer = document.createElement('div');
    this.tippyContainer.className = 'la-decorate-internal-refs__popup';
    document.body.appendChild(this.tippyContainer);
  }

  componentDidLoad () {
    this.changeFlag(this.flag);
    this.changePopups(this.popups);
  }

  @Watch('flag')
  changeFlag (flag: boolean) {
    if (this.akomaNtosoElement) {
      this.akomaNtosoElement.classList.toggle('flag-internal-refs', flag);
    }
  }

  @Watch('popups')
  changePopups (popups: boolean) {
    // remove existing popups
    for (const tippy of this.tippies) {
      tippy.destroy();
    }
    this.tippies = [];

    if (this.akomaNtosoElement && popups) {
      this.createPopups();
    }
  }

  createPopups () {
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

  onTrigger (tippy: Tippy) {
    if (this.akomaNtosoElement) {
      const href: string = tippy.reference.getAttribute('href') || '';
      const provision: HTMLElement | null = this.akomaNtosoElement.querySelector(href);

      if (provision) {
        tippy.setContent(`
        <div>
          <div class="tippy-content__body"><la-akoma-ntoso>${provision.outerHTML}</la-akoma-ntoso></div>
        </div>`
        );
      }
    }
  }
}
