export declare class AkomaNtoso {
  /**
   * Full Akoma Ntoso FRBR Expression URI used to populate the other `frbr` fields if they are unset.
   * Setting this is the preferred mechanism for ensuring tradition-specific styling.
   * */
  frbrExpressionUri?: string;
  /**
   * Country (a two-letter or code according to ISO 3166-1 [ISO3166] or a short and unique alphanumeric codes
   * according to ISO 3166-2 [ISO3166-2]).
   * */
  frbrCountry?: string;
  /**
   * Type of document
   *
   * - For legislation – Acts, Regulations, Statutory Instruments, and the like – use `act`.
   *
   * - For case law, use `judgment`.
   *
   * - For other documents – Policies, Memoranda of Understanding, Yearbooks, Press Releases, and the like – use `doc`.
   * */
  frbrType?: string;
  /** Subtype used if the document is anything other an `act` / `statement` / `judgment` / `doc` */
  frbrSubtype?: string;
  /** The emanating actor, unless implicitly deducible by the document type (e.g., acts and bills do not usually
   *  require actor, while ministerial decrees and European legislation do)
   *  */
  frbrAuthor?: string;
  /** Original creation date (expressed in `YYYY-MM-DD` format or just `YYYY` if the year is sufficient for
   * identification purposes
   * */
  frbrDate?: string;
  /**
   * Number or title or other disambiguating feature of the Work (when appropriate, otherwise optionally the string nn)
   * */
  frbrNumber?: string;
  /** Any content-specification date */
  frbrExpressionDate?: string;
  /** The human language code in which the Expression is drafted */
  frbrLanguage?: string;
  parseFrbrExpressionUri(newValue: string): void;
  componentWillLoad(): void;
}
