import { Component, Prop, Element, Watch } from '@stencil/core';
import { AkomaNtosoTarget } from '../../utils/linking';
import tippy, { Instance as Tippy } from 'tippy.js';

@Component({
  tag: 'la-decorate-external-refs',
  styleUrl: 'decorate-external-refs.scss'
})
export class DecorateExternalRefs {
  // The akn content element being decorated
  protected akomaNtosoElement?: HTMLElement | null;

  protected tippies: Tippy[] = [];
  protected tippyContainer?: HTMLElement;

  @Element() el!: HTMLElement;

  /**
   * CSS selector for the la-akoma-ntoso element or HTMLELement that will be decorated. Defaults
   * to the containing la-akoma-ntoso element, if any, otherwise the first
   * `la-akoma-ntoso` element on the page.
   */
  @Prop() akomaNtoso?: string | HTMLElement;

  /**
   * If `true`, the content of external ref targets will be shown as popups.
   */
  @Prop() popups: boolean = false;

  /**
   * Partner code provided by Laws.Africa. Defaults to the hostname of your website.
   */
  @Prop() partner?: string;

  /**
   * Provider URL (advanced usage only).
   */
  @Prop() provider = 'https://services.lawsafrica.com/v1';

  componentWillLoad () {
    const target = new AkomaNtosoTarget(this.el, this.akomaNtoso, () => {
      this.componentDidLoad();
    });
    this.akomaNtosoElement = target.getElement();
    this.tippyContainer = document.createElement('div');
    this.tippyContainer.className = 'la-decorate-external-refs__popup';
    document.body.appendChild(this.tippyContainer);
  }

  componentDidLoad () {
    this.changePopups(this.popups);
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
    if (this.akomaNtosoElement) {
      // @ts-ignore
      this.tippies = tippy(this.akomaNtosoElement.querySelectorAll('a.akn-ref[data-href^="/akn/"]'), {
        appendTo: () => this.tippyContainer,
        allowHTML: true,
        hideOnClick: true,
        interactive: true,
        maxWidth: 450,
        onTrigger: this.onTrigger.bind(this),
        theme: 'light-border'
      });
    }
  }

  async onTrigger (tippy: Tippy) {
    const frbrUri: string = tippy.reference.getAttribute('data-href') || '';

    // TODO: if there's nothing, don't show the popup
    // TODO: delay showing until we have content

    const content = await this.loadContent(frbrUri);
    if (content) {
      tippy.setContent(`
        <div>
          <div class="tippy-content__body">${content}</div>
        </div>`
      );
    }
  }

  ensurePartner () {
    if (!this.partner) {
      this.partner = document.location.hostname.replace(/^www\./, '');
    }
  }

  async loadContent (frbrUri: string) {
    this.ensurePartner();

    if (frbrUri && this.provider) {
      const url = this.provider + '/p/' + this.partner + '/e/popup' + frbrUri;
      const resp = await fetch(url);
      if (resp.ok) {
        return await resp.text();
      }
    }
  }
}
