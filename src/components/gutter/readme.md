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



## Properties

| Property     | Attribute     | Description                                                                                                                                                                                             | Type                                 | Default     |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| `akomaNtoso` | `akoma-ntoso` | CSS selector or HTMLElement for the la-akoma-ntoso element that will be decorated. Defaults to the containing la-akoma-ntoso element, if any, otherwise the first `la-akoma-ntoso` element on the page. | `HTMLElement \| string \| undefined` | `undefined` |


## Events

| Event            | Description                                    | Type                |
| ---------------- | ---------------------------------------------- | ------------------- |
| `layoutComplete` | Event emitted when `this.layout` has finished. | `CustomEvent<void>` |


## Methods

### `activateNextItem() => Promise<HTMLLaGutterItemElement | undefined>`

Method that activates the next item of current active item. The next item's prop `active` will be true. Returns promise with
next active item. If there is no item active,the first item is active. If the current active item is
the last item in the gutter, then when activateNextItem is called, the last item will be active

#### Returns

Type: `Promise<HTMLLaGutterItemElement | undefined>`



### `activatePrevItem() => Promise<HTMLLaGutterItemElement | undefined>`

Method that activates the previous item of current active item. The next item's prop `active` will be true. Returns promise with
next active item. If there is no item active,the first item is active. If the current active item is
the first item in the gutter, then when activateNextItem is called, the last item will be active

#### Returns

Type: `Promise<HTMLLaGutterItemElement | undefined>`



### `layoutItems() => Promise<void>`

Layout the gutter items.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
