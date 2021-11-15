# la-akoma-ntoso



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute              | Description                                                                                                                                                                                                                                                    | Type                  | Default     |
| -------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `frbrAuthor`         | `frbr-author`          | The emanating actor, unless implicitly deducible by the document type (e.g., acts and bills do not usually require actor, while ministerial decrees and European legislation do)                                                                               | `string \| undefined` | `undefined` |
| `frbrCountry`        | `frbr-country`         | Country (a two-letter or code according to ISO 3166-1 [ISO3166] or a short and unique alphanumeric codes according to ISO 3166-2 [ISO3166-2]).                                                                                                                 | `string \| undefined` | `undefined` |
| `frbrDate`           | `frbr-date`            | Original creation date (expressed in `YYYY-MM-DD` format or just `YYYY` if the year is sufficient for identification purposes                                                                                                                                  | `string \| undefined` | `undefined` |
| `frbrExpressionDate` | `frbr-expression-date` | Any content-specification date                                                                                                                                                                                                                                 | `string \| undefined` | `undefined` |
| `frbrExpressionUri`  | `frbr-expression-uri`  | Full Akoma Ntoso FRBR Expression URI used to populate the other `frbr` fields if they are unset. Setting this is the preferred mechanism for ensuring tradition-specific styling.                                                                              | `string \| undefined` | `undefined` |
| `frbrLanguage`       | `frbr-language`        | The human language code in which the Expression is drafted                                                                                                                                                                                                     | `string \| undefined` | `undefined` |
| `frbrNumber`         | `frbr-number`          | Number or title or other disambiguating feature of the Work (when appropriate, otherwise optionally the string nn)                                                                                                                                             | `string \| undefined` | `undefined` |
| `frbrSubtype`        | `frbr-subtype`         | Subtype used if the document is anything other an `act` / `statement` / `judgment` / `doc`                                                                                                                                                                     | `string \| undefined` | `undefined` |
| `frbrType`           | `frbr-type`            | Type of document  - For legislation – Acts, Regulations, Statutory Instruments, and the like – use `act`.  - For case law, use `judgment`.  - For other documents – Policies, Memoranda of Understanding, Yearbooks, Press Releases, and the like – use `doc`. | `string \| undefined` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
