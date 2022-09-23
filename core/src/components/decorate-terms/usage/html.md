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

### Basic React example

```js
import { LaAkomaNtoso, LaDecorateTerms } from '@lawsafrica/law-widgets-react'

const App = () => {
  const akomaNtosoHTML = "..."  
  return (
    <div>
      <LaDecorateTerms popup-definitions link-terms akoma-ntoso="#doc" />
      <LaAkomaNtoso>
        {akomaNtosoHTML}
      </LaAkomaNtoso>
    </div>
  )
  
}
```
### Basic Vue3 example
```vue

<template>
  <div>
    <LaDecorateTerms popup-definitions link-terms akoma-ntoso="#doc" />
    <LaAkomaNtoso>
      {akomaNtosoHTML}
    </LaAkomaNtoso>
  </div>
</template>

<script>
import { LaAkomaNtoso, LaDecorateTerms } from '@lawsafrica/law-widgets-vue'
export default {
  components: {
    LaAkomaNtoso,
    LaDecorateTerms
  },
  data: () => ({
    akomaNtosoHTML: '...'
  })
}
</script>
```