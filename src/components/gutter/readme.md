# la-gutter

This elements provides a gutter to show items alongside an `<la-akoma-ntoso>` element. A gutter item must be linked
to a reference element inside the `<la-akoma-ntoso>` element. The gutter item is positioned horizontally alongside
its reference element.



<!-- Auto Generated Below -->


## Usage

### Html

Use this element in conjunction with an `<la-akoma-ntoso>` element, usually as a sibling.

```html
<div class="content-with-gutter">
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

| Property     | Attribute     | Description                                                                                                                                                                              | Type                  | Default     |
| ------------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `akomaNtoso` | `akoma-ntoso` | CSS selector for the la-akoma-ntoso element that will be decorated. Defaults to the containing la-akoma-ntoso element, if any, otherwise the first `la-akoma-ntoso` element on the page. | `string \| undefined` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
