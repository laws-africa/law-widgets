# la-decorate-external-refs

This is a behaviour element that decorates external references within an `<la-akoma-ntoso>` element by
showing a summary of the reference in a popup.

<!-- Auto Generated Below -->


## Usage

### Html

Place this element inside an `<la-akoma-ntoso>` element:

```html
<la-akoma-ntoso>
  <la-decorate-external-refs popups></la-decorate-external-refs>

  {{ html }}
</la-akoma-ntoso>
```

Alternatively place it elsewhere and provide a selector to identify the `<la-akoma-ntoso>` element:

```html
<la-decorate-external-refs popups akoma-ntoso="#doc"></la-decorate-external-refs>

<la-akoma-ntoso id="doc">
  {{ html }}
</la-akoma-ntosoi>
```



## Properties

| Property     | Attribute     | Description                                                                                                                                                                                             | Type                                 | Default     |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| `akomaNtoso` | `akoma-ntoso` | CSS selector for the la-akoma-ntoso element or HTMLELement that will be decorated. Defaults to the containing la-akoma-ntoso element, if any, otherwise the first `la-akoma-ntoso` element on the page. | `HTMLElement \| string \| undefined` | `undefined` |
| `partner`    | `partner`     | Partner code provided by Laws.Africa. Defaults to the hostname of your website.                                                                                                                         | `string \| undefined`                | `undefined` |
| `popups`     | `popups`      | If `true`, the content of external ref targets will be shown as popups.                                                                                                                                 | `boolean`                            | `false`     |
| `provider`   | `provider`    | Provider URL (advanced usage only).                                                                                                                                                                     | `string`                             | `PROVIDER`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
