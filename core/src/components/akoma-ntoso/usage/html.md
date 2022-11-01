```html
<la-akoma-ntoso> {{ your_akoma_ntoso_html }} </la-akoma-ntoso>
```

Specify the expression FRBR URI to include tradition-specific formatting, or set
`frbr-country` or other `frbr-*` attributes accordingly.

```html
<la-akoma-ntoso frbr-expression-uri="/akn/za/act/1996/constitution/eng@"> {{ your_akoma_ntoso_html }} </la-akoma-ntoso>
```

```html
<la-akoma-ntoso frbr-country="ke" frbr-language="swa"> {{ your_akoma_ntoso_html }} </la-akoma-ntoso>
```

Laws.Africa partners can fetch content from Laws.Africa using the `fetch` attribute.
If your partner code is not the same as your website's domain name, then also specify
your partner code in `partner`.

```html
<la-akoma-ntoso fetch partner="example.com" frbr-expression-uri="/akn/za/act/1996/constitution/eng@"></la-akoma-ntoso>
```

### Basic React example

```js
import { LaAkomaNtoso } from '@lawsafrica/law-widgets-react';
const Component = () => {
  const akomaNtosoHTML = '...';
  return (
    <div>
      <LaAkomaNtoso frbr-expression-uri="/akn/za/act/1996/constitution/eng@">{akomaNtosoHTML}</LaAkomaNtoso>
    </div>
  );
};
```

### Basic Vue3 example

```vue
<template>
  <LaAkomaNtoso frbr-expression-uri="/akn/za/act/1996/constitution/eng@">
    {{ akomaNtosoHTML }}
  </LaAkomaNtoso>
</template>
<script>
import { LaAkomaNtoso } from '@lawsafrica/law-widgets-vue';
export default {
  name: 'Component',
  components: {
    LaAkomaNtoso,
  },
  data: () => ({
    akomaNtosoHTML: '...',
  }),
};
</script>
```

### Component stories

Click [here](https://laws.africa/la-web-components/?path=/docs/library-la-akoma-ntoso--basic-usage) for more interactive examples on Storybook JS
