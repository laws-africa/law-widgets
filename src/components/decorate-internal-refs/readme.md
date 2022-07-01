# la-decorate-internal-refs

This is a behaviour element that decorates internal references within an `<la-akoma-ntoso>` element by marking the
references with a flag, and by showing the contents of the target of the internal reference in a popup.

<!-- Auto Generated Below -->


## Usage

### Html

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



## Properties

| Property     | Attribute     | Description                                                                                                                                                                                             | Type                                 | Default     |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| `akomaNtoso` | `akoma-ntoso` | CSS selector for the la-akoma-ntoso element or HTMLELement that will be decorated. Defaults to the containing la-akoma-ntoso element, if any, otherwise the first `la-akoma-ntoso` element on the page. | `HTMLElement \| string \| undefined` | `undefined` |
| `fetch`      | `fetch`       | Fetch content from Laws.Africa services? Requires a Laws.Africa partnership and the frbrExpressionUri property to be set.                                                                               | `boolean`                            | `false`     |
| `flag`       | `flag`        | If `true`, internal refs will be flagged with in icon to be more visible.                                                                                                                               | `boolean`                            | `false`     |
| `partner`    | `partner`     | Partner code to use when fetching content from Laws.Africa. Defaults to the `location.hostname`.                                                                                                        | `string \| undefined`                | `undefined` |
| `popups`     | `popups`      | If `true`, the content of internal ref targets will be shown as popups.                                                                                                                                 | `boolean`                            | `false`     |
| `provider`   | `provider`    | Provider URL for fetching content (advanced usage only).                                                                                                                                                | `string`                             | `PROVIDER`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
