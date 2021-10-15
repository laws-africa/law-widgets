import { Component, Prop, Element, Watch } from '@stencil/core';
import { getAkomaNtosoElement } from "../../utils/linking";
import tippy from "tippy.js";

/**
 * Decorates internal references within an Akoma Ntoso document by showing the contents of the target
 * of the internal reference in a popup.
 */
@Component({
  tag: 'la-decorate-internal-refs',
  styleUrl: 'decorate-internal-refs.scss'
})
export class DecorateInternalRefs {
  // The akn content element being decorated
  protected akomaNtosoElement: HTMLElement | null;

  // The wrapper element that ensures the tippy content is styled correctly
  protected wrapper: HTMLElement = document.createElement('la-akoma-ntoso');

  protected tippies = [];

  @Element() el: HTMLElement;

  /**
   * CSS selector for the la-akoma-ntoso element that will be decorated. Defaults
   * to the containing la-akoma-ntoso element, if any, otherwise the first
   * `la-akoma-ntoso` element on the page.
   */
    // TODO: should we be watching this? What if it changes?
  @Prop() akomaNtoso: string = 'la-akoma-ntoso';

  /**
   * Should internal ref targets be shown as popups?
   */
  @Prop() popups: boolean = false;

  /**
   * Should internal refs be flagged to be more visible?
   */
  @Prop() flag: boolean = false;

  componentWillLoad () {
    // TODO: watch for changes to the akn content?
    this.akomaNtosoElement = getAkomaNtosoElement(this.el, this.akomaNtoso);
    this.wrapper = document.createElement('la-akoma-ntoso');
  }

  componentDidLoad() {
    this.changeFlag(this.flag);
    this.changePopups(this.popups);
  }

  @Watch('flag')
  changeFlag(flag: boolean) {
    if (this.akomaNtosoElement) {
      this.akomaNtosoElement.classList.toggle('flag-internal-refs', flag);
    }
  }

  @Watch('popups')
  changePopups(popups: boolean) {
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
    this.tippies = tippy('a.akn-ref[href^="#"]', {
      appendTo: () => this.el.ownerDocument.body,
      hideOnClick: true,
      interactive: true,
      maxWidth: 450,
      onTrigger: this.onTrigger.bind(this),
      theme: 'light-border'
    });
  }

  onTrigger (tippy) {
    const provision: HTMLElement = this.akomaNtosoElement.querySelector(tippy.reference.getAttribute('href'));

    if (provision) {
      const wrapper = this.wrapper.cloneNode(true);
      wrapper.appendChild(provision.cloneNode(true));
      tippy.setContent(wrapper);
    }
  }
}
