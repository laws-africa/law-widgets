import { Component, Prop, Watch, Element } from '@stencil/core';

@Component({
  tag: 'la-akoma-ntoso-portion'
})
export class AkomaNtosoPortion {
  /**
   * Full Akoma Ntoso FRBR Expression and portion URI of the portion to fetch.
   **/
  @Prop() frbrUri?: string;

  /**
   * Partner code provided by Laws.Africa. Defaults to the hostname of your website.
   */
  @Prop() partner?: string;

  /**
   * Provider URL (advanced usage only).
   */
  @Prop() provider = 'https://services.lawsafrica.com/v1';

  @Element() el!: HTMLElement;

  @Watch('partner')
  partnerChanged () {
    this.loadContent();
  }

  @Watch('provider')
  providerChanged () {
    this.loadContent();
  }

  @Watch('frbrUri')
  frbrUriChanged () {
    this.loadContent();
  }

  async loadContent () {
    this.ensurePartner();

    if (this.frbrUri && this.provider) {
      const url = this.provider + '/p/' + this.partner + '/e/portion' + this.frbrUri;
      const resp = await fetch(url);
      if (resp.ok) {
        this.el.innerHTML = await resp.text();
      }
    }
  }

  ensurePartner () {
    if (!this.partner) {
      this.partner = document.location.hostname.replace(/^www\./, '');
    }
  }

  componentWillLoad () {
    this.loadContent();
  }
}
