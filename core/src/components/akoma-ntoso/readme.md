# la-akoma-ntoso

Formats [Akoma Ntoso content](http://www.akomantoso.org/), optionally fetching it from Laws.Africa.



<!-- Auto Generated Below -->


## Usage

### Html

## Vanilla HTML

Use `<la-akoma-ntoso>` to wrap Akoma Ntoso content.

```html
<la-akoma-ntoso>
  {{ your_akoma_ntoso_html }}
</la-akoma-ntoso>
```

Specify the expression FRBR URI to include tradition-specific formatting, or set
`frbr-country` or other `frbr-*` attributes accordingly.

```html
<la-akoma-ntoso expression-frbr-uri="/akn/za/act/1996/constitution/eng@">
  {{ your_akoma_ntoso_html }}
</la-akoma-ntoso>
```

```html
<la-akoma-ntoso frbr-country="ke" frbr-language="swa">
  {{ your_akoma_ntoso_html }}
</la-akoma-ntoso>
```

Laws.Africa partners can fetch content from Laws.Africa using the `fetch` attribute.
If your partner code is not the same as your website's domain name, then also specify
your partner code in `partner`.

```html
<la-akoma-ntoso fetch partner="example.com" expression-frbr-uri="/akn/za/act/1996/constitution/eng@">
  {{ your_akoma_ntoso_html }}
</la-akoma-ntoso>
```



## React
```js
import { LaAkomaNtoso } from '@laws-africa/law-widgets-react'
const Component = () => (
    <div>
      <LaAkomaNtoso expression-frbr-uri="/akn/za/act/1996/constitution/eng@">
        // Akoma ntoso html
      </LaAkomaNtoso>
    </div>
)
```

## Vue
```vue
<template>
  <LaAkomaNtoso expression-frbr-uri="/akn/za/act/1996/constitution/eng@">
    // Akoma ntoso html
  </LaAkomaNtoso>
</template>
<script>
import { LaAkomaNtoso } from '@laws-africa/law-widgets-vue'
export default {
  name: 'Component',
  components: {
    LaAkomaNtoso
  }
}
</script>
```



## Properties

| Property             | Attribute              | Description                                                                                                                                                                                                                                                    | Type                  | Default     |
| -------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `fetch`              | `fetch`                | Fetch content from Laws.Africa services? Requires a Laws.Africa partnership and the frbrExpressionUri property to be set.                                                                                                                                      | `boolean`             | `false`     |
| `frbrAuthor`         | `frbr-author`          | The emanating actor, unless implicitly deducible by the document type (e.g., acts and bills do not usually require actor, while ministerial decrees and European legislation do)                                                                               | `string \| undefined` | `undefined` |
| `frbrCountry`        | `frbr-country`         | Country (a two-letter or code according to ISO 3166-1 [ISO3166] or a short and unique alphanumeric codes according to ISO 3166-2 [ISO3166-2]).                                                                                                                 | `string \| undefined` | `undefined` |
| `frbrDate`           | `frbr-date`            | Original creation date (expressed in `YYYY-MM-DD` format or just `YYYY` if the year is sufficient for identification purposes                                                                                                                                  | `string \| undefined` | `undefined` |
| `frbrExpressionDate` | `frbr-expression-date` | Any content-specification date                                                                                                                                                                                                                                 | `string \| undefined` | `undefined` |
| `frbrExpressionUri`  | `frbr-expression-uri`  | Full Akoma Ntoso FRBR Expression URI used to populate the other `frbr` fields if they are unset. Setting this is the preferred mechanism for ensuring tradition-specific styling.                                                                              | `string \| undefined` | `undefined` |
| `frbrLanguage`       | `frbr-language`        | The human language code in which the Expression is drafted                                                                                                                                                                                                     | `string \| undefined` | `undefined` |
| `frbrNumber`         | `frbr-number`          | Number or title or other disambiguating feature of the Work (when appropriate, otherwise optionally the string nn)                                                                                                                                             | `string \| undefined` | `undefined` |
| `frbrSubtype`        | `frbr-subtype`         | Subtype used if the document is anything other an `act` / `statement` / `judgment` / `doc`                                                                                                                                                                     | `string \| undefined` | `undefined` |
| `frbrType`           | `frbr-type`            | Type of document  - For legislation – Acts, Regulations, Statutory Instruments, and the like – use `act`.  - For case law, use `judgment`.  - For other documents – Policies, Memoranda of Understanding, Yearbooks, Press Releases, and the like – use `doc`. | `string \| undefined` | `undefined` |
| `partner`            | `partner`              | Partner code to use when fetching content from Laws.Africa. Defaults to the `location.hostname`.                                                                                                                                                               | `string \| undefined` | `undefined` |
| `provider`           | `provider`             | Provider URL for fetching content (advanced usage only).                                                                                                                                                                                                       | `string`              | `PROVIDER`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
