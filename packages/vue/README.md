# @lawsafrica/law-widgets-vue

Vue3 component wrapper library built from [`@lawsafrica/law-widgets`](../../core/README.md)

## Installation

**npm**
```bash
npm install @lawsafrica/law-widgets-vue
```

OR

**yarn**
```bash
yarn add @lawsafrica/law-widgets-vue
```

In the root of your vue project, create a file called `vue.config.js` and add the following code:
```js
module.exports = {
  chainWebpack: config => config.resolve.symlinks(false)
}
```

## Getting started

Here is a basic example of how to use `LaTableOfContents` in Vue3:

```vue
<template>
  <LaTableOfContents :items="items" />
</template>

<script>
import { LaTableOfContents } from "@lawsafrica/law-widgets-vue";
export default {
  components: {
    LaTableOfContents
  },
  data: () => ({
    items: [
      {
        title: 'Entire document',
        children: [
          {
            title: 'Ch. 1 – ',
            children: [
              {
                title: 'Part B',
              },
            ],
          },
          {
            title: 'Ch. 2 – ',
          },
        ],
      }
    ]
  })
}
</script>
```

## List of components
View more examples of our various components.

### Content components

* [la-akoma-ntoso](../../core/src/components/akoma-ntoso/readme.md#basic-vue3-example)
* [la-gutter](../../core/src/components/gutter/readme.md#basic-vue3-example)
* [la-table-of-contents](../../core/src/components/table-of-contents/readme.md#basic-vue3-example)
* [la-table-of-contents-controller](../../core/src/components/table-of-contents-controller/readme.md#basic-vue3-example)

### Behaviour components

* [la-decorate-internal-refs](../../core/src/components/decorate-internal-refs/readme.md#basic-vue3-example)
* [la-decorate-external-refs](../../core/src/components/decorate-external-refs/readme.md#basic-vue3-example)
* [la-decorate-terms](../../core/src/components/decorate-terms/readme.md#basic-vue3-example)