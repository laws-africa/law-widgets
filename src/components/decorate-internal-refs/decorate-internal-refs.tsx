import { Component, Prop, Element, Watch } from '@stencil/core';
import { AkomaNtosoTarget } from '../../utils/linking';
import { PROVIDER, getPartner } from '../../utils/services';
import tippy, { Instance as Tippy } from 'tippy.js';

/**
 * Remove the existing portion (if any) of frbrUri, and add the new portion to it.
 */
function addPortion (frbrUri: string, portion: string) {
  const ix = frbrUri.indexOf('~');
  if (ix > -1) {
    frbrUri = frbrUri.slice(0, ix);
  }

  if (!frbrUri.endsWith('/')) frbrUri = frbrUri + '/';

  return frbrUri + portion;
}

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
   * CSS selector for the la-akoma-ntoso element or HTMLELement that will be decorated. Defaults
   * to the containing la-akoma-ntoso element, if any, otherwise the first
   * `la-akoma-ntoso` element on the page.
   */
  @Prop() akomaNtoso?: string | HTMLElement;

  /**
   * If `true`, the content of internal ref targets will be shown as popups.
   */
  @Prop() popups: boolean = false;

  /**
   * If `true`, internal refs will be flagged with in icon to be more visible.
   */
  @Prop() flag: boolean = false;

  /** Fetch content from Laws.Africa services? Requires a Laws.Africa partnership and the frbrExpressionUri property to be set. */
  @Prop({ reflect: true, mutable: true }) fetch: boolean = false;
  /** Partner code to use when fetching content from Laws.Africa. Defaults to the `location.hostname`. */
  @Prop({ reflect: true, mutable: true }) partner?: string;

  /** Provider URL for fetching content (advanced usage only). */
  @Prop() provider = PROVIDER;

  componentWillLoad () {
    const target = new AkomaNtosoTarget(this.el, this.akomaNtoso, () => {
      this.componentDidLoad();
    });
    this.akomaNtosoElement = target.getElement();
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

  async onTrigger (tippy: Tippy) {
    if (this.akomaNtosoElement) {
      const href: string = tippy.reference.getAttribute('href') || '';
      let html: string | undefined = '';
      const provision: HTMLElement | null = this.akomaNtosoElement.querySelector(href);

      if (provision) {
        html = provision.outerHTML;
      } else if (this.fetch) {
        // try fetching it remotely
        html = await this.fetchContent(href.slice(1));
      }

      if (html) {
        tippy.setContent(`
        <div>
          <div class="tippy-content__body"><la-akoma-ntoso>${html}</la-akoma-ntoso></div>
        </div>`
        );
      }
    }
  }

  async fetchContent (elementId: string) {
    this.ensurePartner();

    if (this.provider && this.akomaNtosoElement) {
      const frbrUri = this.akomaNtosoElement.getAttribute('frbr-expression-uri');
      if (frbrUri) {
        const url = this.provider + '/p/' + this.partner + '/e/portion' + addPortion(frbrUri, '~' + elementId);
        const resp = await fetch(url);
        if (resp.ok) {
          return await resp.text();
        }
      }
    }
  }

  ensurePartner () {
    if (!this.partner) {
      this.partner = getPartner();
    }
  }
}
