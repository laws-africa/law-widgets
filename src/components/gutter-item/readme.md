# la-gutter-item

A gutter item inside an `<la-gutter>`.

A gutter item must be linked to an anchor element inside the `<la-akoma-ntoso>` element
using the `anchor` attribute. The gutter item is positioned horizontally alongside its anchor element.



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description                                                                                              | Type                                 | Default     |
| --------------- | ----------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| `active`        | `active`          | Indicates that this is the active item in the gutter. Only one item can be active at a time.             | `boolean`                            | `false`     |
| `anchor`        | `anchor`          | CSS selector for the anchor element or HTMLElement in the enclosing gutter's `<la-akoma-ntoso>` element. | `HTMLElement \| string \| undefined` | `undefined` |
| `noAnchorFound` | `no-anchor-found` | Indicates if item has corresponding anchor element in akoma-ntoso.                                       | `boolean`                            | `false`     |


## Events

| Event           | Description                                                                                              | Type                |
| --------------- | -------------------------------------------------------------------------------------------------------- | ------------------- |
| `laItemChanged` | Event emitted when the state (`active`) of the item changes. Used by `la-gutter` to re-layout its items. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
