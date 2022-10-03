# la-decorate-terms

This is a behaviour element that decorates references to defined terms within an `<la-akoma-ntoso>` element by
making them clickable links, and by showing the definition of the term in a popup.



<!-- Auto Generated Below -->


## Usage

### Html

Place this element inside an `<la-akoma-ntoso>` element:

```html
<la-akoma-ntoso>
  <la-decorate-terms popup-definitions link-terms></la-decorate-terms>

  {{ html }}
</la-akoma-ntoso>
```

Alternatively place it elsewhere and provide a selector to identify the `<la-akoma-ntoso>` element:

```html
<la-decorate-terms popup-definitions link-terms akoma-ntoso="#doc"></la-decorate-terms>

<la-akoma-ntoso id="doc">
  {{ html }}
</la-akoma-ntosoi>
```



## Properties

| Property           | Attribute           | Description                                                                                                                                                                                              | Type                                 | Default     |
| ------------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| `akomaNtoso`       | `akoma-ntoso`       | CSS selector for the la-akoma-ntoso element and HTMLElement that will be decorated. Defaults to the containing la-akoma-ntoso element, if any, otherwise the first `la-akoma-ntoso` element on the page. | `HTMLElement \| string \| undefined` | `undefined` |
| `linkTerms`        | `link-terms`        | If `true`, terms will be changed to `<a>` elements that jump to the term definition.                                                                                                                     | `boolean`                            | `false`     |
| `popupDefinitions` | `popup-definitions` | If `true`, the definitions of terms will be shown as popups.                                                                                                                                             | `boolean`                            | `false`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
