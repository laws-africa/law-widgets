import { Component, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'la-akoma-ntoso',
  styleUrl: 'akoma-ntoso.scss',
})
export class AkomaNtoso {
  /**
   * Full Akoma Ntoso FRBR Expression URI used to populate the other `frbr` fields if they are unset.
   * Setting this is the preferred mechanism for ensuring tradition-specific styling.
   * */
  @Prop({ reflect: true, mutable: true}) frbrExpressionUri?: string;
  /**
   * Country (a two-letter or code according to ISO 3166-1 [ISO3166] or a short and unique alphanumeric codes
   * according to ISO 3166-2 [ISO3166-2]).
   * */
  @Prop({ reflect: true, mutable: true}) frbrCountry?: string;
  /**
   * Type of document
   *
   * - For legislation – Acts, Regulations, Statutory Instruments, and the like – use `act`.
   *
   * - For case law, use `judgment`.
   *
   * - For other documents – Policies, Memoranda of Understanding, Yearbooks, Press Releases, and the like – use `doc`.
   * */
  @Prop({ reflect: true, mutable: true}) frbrType?: string;
  /** Subtype used if the document is anything other an `act` / `statement` / `judgment` / `doc` */
  @Prop({ reflect: true, mutable: true}) frbrSubtype?: string;
  /** The emanating actor, unless implicitly deducible by the document type (e.g., acts and bills do not usually
   *  require actor, while ministerial decrees and European legislation do)
   *  */
  @Prop({ reflect: true, mutable: true}) frbrAuthor?: string;
  /** Original creation date (expressed in `YYYY-MM-DD` format or just `YYYY` if the year is sufficient for
   * identification purposes
   * */
  @Prop({ reflect: true, mutable: true}) frbrDate?: string;
  /**
   * Number or title or other disambiguating feature of the Work (when appropriate, otherwise optionally the string nn)
   * */
  @Prop({ reflect: true, mutable: true}) frbrNumber?: string;
  /** Any content-specification date */
  @Prop({ reflect: true, mutable: true}) frbrExpressionDate?: string;
  /** The human language code in which the Expression is drafted */
  @Prop({ reflect: true, mutable: true}) frbrLanguage?: string;

  @Watch('frbrExpressionUri')
  parseFrbrExpressionUri(newValue: string) {
    const ex = "^(/(?<prefix>akn))/(?<country>[a-z]{2})(-(?<locality>[^/]+))?/(?<doctype>[^/]+)(/(?<subtype>[^0-9][^/]*))?(/(?<actor>[^0-9][^/]*))?/(?<date>[0-9]{4}(-[0-9]{2}(-[0-9]{2})?)?)/(?<number>[^/]+)(/(((?<language>[a-z]{3})(?<expression_date>[@:][^/]*)?(/!?(?<expression_component>[^/]+?)?(/(?<expression_subcomponent>[^.]+))?)?(\.(?<format>[a-z0-9]+))?)|!?(?<work_component>[^/]+)))?$";
    const regExp = new RegExp(ex, "g")
    const output = regExp.exec(newValue);
    if(output?.groups) {
      Object.keys(output.groups).forEach(key => {
        if(output.groups?.[key]) {
          switch (key) {
            case 'country':
              if(!this.frbrCountry) this.frbrCountry = output.groups[key];
              break;
            case 'doctype':
              if(!this.frbrType) this.frbrType = output.groups[key];
              break;
            case 'subtype':
              if(!this.frbrSubtype) this.frbrSubtype = output.groups[key];
              break;
            case 'actor':
              if(!this.frbrAuthor) this.frbrAuthor = output.groups[key];
              break;
            case 'date':
              if(!this.frbrDate) this.frbrDate = output.groups[key];
              break;
            case 'number':
              if(!this.frbrNumber) this.frbrNumber = output.groups[key];
              break;
            case 'expression_date':
              if(!this.frbrExpressionDate) this.frbrExpressionDate = output.groups[key];
              break;
            case 'language':
              if(!this.frbrLanguage) this.frbrLanguage = output.groups[key];
              break;
          }
        }
      })
    }
  }

  componentWillLoad() {
    if(this.frbrExpressionUri )this.parseFrbrExpressionUri(this.frbrExpressionUri);
  }
}
