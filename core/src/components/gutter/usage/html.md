Use this element in conjunction with an `<la-akoma-ntoso>` element, usually as a sibling.

```html
<div class="la-content-with-gutter">
  <la-akoma-ntoso id="akn">
    <div id="sec_1">section 1 content</div>
    <div id="sec_2">section 2 content</div>
  </la-akoma-ntoso>

  <la-gutter akoma-ntoso="#akn">
    <la-gutter-item anchor="#sec_1">comment on section 1</la-gutter-item>
    <la-gutter-item anchor="#sec_2">comment on section 2</la-gutter-item>
  </la-gutter>
</div>
```

### Basic React example

```js
import React from 'react';
import { LaGutter, LaGutterItem, LaAkomaNtoso } from '@lawsafrica/law-widgets-react';

const App = () => {
  return (
    <div className="la-content-with-gutter">
      <LaAkomaNtoso id="akn"></LaAkomaNtoso>
      <LaGutter akoma-ntoso="#akn">
        <LaGutterItem>comment on section 1</LaGutterItem>
        <LaGutterItem>comment on section 2</LaGutterItem>
      </LaGutter>
    </div>
  );
};

export default App;
```

### Basic Vue3 example

```vue
<template>
  <div class="la-content-with-gutter">
    <div id="sec_1">section 1 content</div>
    <div id="sec_2">section 2 content</div>
  </div>
</template>

<script>
import { LaAkomaNtoso, LaGutter, LaGutterItem } from '@lawsafrica/law-widgets-vue';
export default {
  components: {
    LaAkomaNtoso,
    LaGutter,
    LaGutterItem,
  },
};
</script>
```

### Component stories

Click [here](https://laws.africa/la-web-components/?path=/docs/library-la-gutter--basic-usage) for more interactive examples on Storybook JS
