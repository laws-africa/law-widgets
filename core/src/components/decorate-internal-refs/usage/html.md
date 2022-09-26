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