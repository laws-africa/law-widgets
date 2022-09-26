# la-decorate-internal-refs

This is a behaviour element that decorates internal references within an `<la-akoma-ntoso>` element by marking the
references with a flag, and by showing the contents of the target of the internal reference in a popup.

<!-- Auto Generated Below -->


## Usage

### Html

Place this element inside an `<la-akoma-ntoso>` element:

```html
<la-akoma-ntoso>
  <la-decorate-internal-refs popups flags></la-decorate-internal-refs>

  {{ html }}
</la-akoma-ntoso>
```

Alternatively place it elsewhere and provide a selector to identify the `<la-akoma-ntoso>` element:

```html
<la-decorate-internal-refs popups flags akoma-ntoso="#doc"></la-decorate-internal-refs>
<la-akoma-ntoso id="doc">
  {{ html }}
</la-akoma-ntosoi>
```

### Basic React example
```js
import { LaDecorateInternalRefs, LaAkomaNtoso } from '@lawsafrica/law-widgets-react'

const App = () => (
  <div>
    <LaAkomaNtoso>
      <LaDecorateInternalRefs popups flags />
      // Akoma ntoso html
    </LaAkomaNtoso>
  </div>
)
```

### Basic Vue3 example

```vue

<template>
  <div>
    <LaAkomaNtoso>
      <LaDecorateExternalRefs popups />
      // Akoma ntoso html
    </LaAkomaNtoso>
  </div>
</template>

<script>
import { LaAkomaNtoso, LaDecorateInternalRefs } from '@lawsafrica/law-widgets-vue'
export default {
  components: {
    LaAkomaNtoso,
    LaDecorateInternalRefs
    
  }
}
</script>
```

### Component stories
Click [here](https://laws.africa/la-web-components/?path=/docs/library-la-decorate-internal-refs--basic-usage) for more interactive examples on Storybook JS



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
