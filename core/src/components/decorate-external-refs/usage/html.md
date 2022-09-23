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

### Basic React example
```js
import { LaDecorateExternalRefs, LaAkomaNtoso } from '@lawsafrica/law-widgets-react'

const App = () => (
  <div>
    <LaAkomaNtoso>
      <LaDecorateExternalRefs popups />
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
import { LaAkomaNtoso, LaDecorateExternalRefs } from '@lawsafrica/law-widgets-vue'
export default {
  components: {
    LaAkomaNtoso,
    LaDecorateExternalRefs
    
  }
}
</script>
```