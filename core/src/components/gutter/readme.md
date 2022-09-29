# la-gutter

This elements provides a gutter alongside an `<la-akoma-ntoso>` element. The gutter contains `<la-gutter-item>` elements
which are linked to a reference element inside the `<la-akoma-ntoso>` element using the `anchor` attribute. The gutter
item is positioned horizontally alongside its anchor element.

For correct alignment, wrap `<la-gutter>` and `<la-akoma-ntoso>` inside a `<div class="la-akoma-ntoso-with-gutter">` element.

<!-- Auto Generated Below -->


## Usage

### Html

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



## Properties

| Property     | Attribute     | Description                                                                                                                                                                                             | Type                                 | Default     |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| `akomaNtoso` | `akoma-ntoso` | CSS selector or HTMLElement for the la-akoma-ntoso element that will be decorated. Defaults to the containing la-akoma-ntoso element, if any, otherwise the first `la-akoma-ntoso` element on the page. | `HTMLElement \| string \| undefined` | `undefined` |


## Events

| Event            | Description                                    | Type                |
| ---------------- | ---------------------------------------------- | ------------------- |
| `layoutComplete` | Event emitted when `this.layout` has finished. | `CustomEvent<void>` |


## Methods

### `activateNextItem() => Promise<HTMLLaGutterItemElement | null>`

Activates the item logically after the currently active item. The activated item's `active` property will be set to
true. Returns the activated item. Or returns null if there are no items. If there is no item currently
active, the top-most item is activated. If the currently active item is the bottom-most item in the gutter,
then the top-most item will be activated. If there is one item in the gutter that is not active, then that item will be activated.

#### Returns

Type: `Promise<HTMLLaGutterItemElement | null>`



### `activatePrevItem() => Promise<HTMLLaGutterItemElement | null>`

Activates the item logically before the currently active item. The activated item's `active` property will be set to
true. Returns the activated item. Or returns null if there are no items. If there is no item currently
active, the bottom-most item is activated. If the currently active item is the top-most item in the gutter,
then the bottom-most item will be activated. If there is one item in the gutter that is not active, then that item will be activated.

#### Returns

Type: `Promise<HTMLLaGutterItemElement | null>`



### `layoutItems() => Promise<void>`

Layout the gutter items.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
