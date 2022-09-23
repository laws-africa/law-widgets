# la-decorate-internal-refs

This is a behaviour element that decorates internal references within an `<la-akoma-ntoso>` element by marking the
references with a flag, and by showing the contents of the target of the internal reference in a popup.

<!-- Auto Generated Below -->


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
