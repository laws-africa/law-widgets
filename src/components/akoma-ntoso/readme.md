# la-akoma-ntoso

Formats Akoma Ntoso content, optionally fetching it from Laws.Africa.



<!-- Auto Generated Below -->


## Usage

### Html

Fo this element inside an `<la-akoma-ntoso>` element:

```html
<la-akoma-ntoso>
  <la-decorate-internal-refs flag popups></la-decorate-internal-refs>

  {{ html }}
</la-akoma-ntoso>
```

Alternatively place it elsewhere and provide a selector to identify the `<la-akoma-ntoso>` element:

```html
<la-decorate-internal-refs flag popups akoma-ntoso="#doc"></la-decorate-internal-refs>

<la-akoma-ntoso id="doc">
  {{ html }}
</la-akoma-ntosoi>
```



## Properties

| Property             | Attribute              | Description                                                                                                                                                                                                                                                    | Type                  | Default                                |
| -------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | -------------------------------------- |
| `fetch`              | `fetch`                | Fetch content from Laws.Africa services? Requires a Laws.Africa partnership and the frbrExpressionUri property to be set.                                                                                                                                      | `boolean`             | `false`                                |
| `frbrAuthor`         | `frbr-author`          | The emanating actor, unless implicitly deducible by the document type (e.g., acts and bills do not usually require actor, while ministerial decrees and European legislation do)                                                                               | `string \| undefined` | `undefined`                            |
| `frbrCountry`        | `frbr-country`         | Country (a two-letter or code according to ISO 3166-1 [ISO3166] or a short and unique alphanumeric codes according to ISO 3166-2 [ISO3166-2]).                                                                                                                 | `string \| undefined` | `undefined`                            |
| `frbrDate`           | `frbr-date`            | Original creation date (expressed in `YYYY-MM-DD` format or just `YYYY` if the year is sufficient for identification purposes                                                                                                                                  | `string \| undefined` | `undefined`                            |
| `frbrExpressionDate` | `frbr-expression-date` | Any content-specification date                                                                                                                                                                                                                                 | `string \| undefined` | `undefined`                            |
| `frbrExpressionUri`  | `frbr-expression-uri`  | Full Akoma Ntoso FRBR Expression URI used to populate the other `frbr` fields if they are unset. Setting this is the preferred mechanism for ensuring tradition-specific styling.                                                                              | `string \| undefined` | `undefined`                            |
| `frbrLanguage`       | `frbr-language`        | The human language code in which the Expression is drafted                                                                                                                                                                                                     | `string \| undefined` | `undefined`                            |
| `frbrNumber`         | `frbr-number`          | Number or title or other disambiguating feature of the Work (when appropriate, otherwise optionally the string nn)                                                                                                                                             | `string \| undefined` | `undefined`                            |
| `frbrSubtype`        | `frbr-subtype`         | Subtype used if the document is anything other an `act` / `statement` / `judgment` / `doc`                                                                                                                                                                     | `string \| undefined` | `undefined`                            |
| `frbrType`           | `frbr-type`            | Type of document  - For legislation – Acts, Regulations, Statutory Instruments, and the like – use `act`.  - For case law, use `judgment`.  - For other documents – Policies, Memoranda of Understanding, Yearbooks, Press Releases, and the like – use `doc`. | `string \| undefined` | `undefined`                            |
| `partner`            | `partner`              | Partner code to use when fetching content from Laws.Africa. Defaults to the `location.hostname`.                                                                                                                                                               | `string \| undefined` | `undefined`                            |
| `provider`           | `provider`             | Provider URL for fetching content (advanced usage only).                                                                                                                                                                                                       | `string`              | `'https://services.lawsafrica.com/v1'` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
