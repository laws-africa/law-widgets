# la-akoma-ntoso-portion

Embeds a portion of a document into the page.


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

| Property   | Attribute  | Description                                                                     | Type                  | Default                                |
| ---------- | ---------- | ------------------------------------------------------------------------------- | --------------------- | -------------------------------------- |
| `frbrUri`  | `frbr-uri` | Full Akoma Ntoso FRBR Expression and portion URI of the portion to fetch.       | `string \| undefined` | `undefined`                            |
| `partner`  | `partner`  | Partner code provided by Laws.Africa. Defaults to the hostname of your website. | `string \| undefined` | `undefined`                            |
| `provider` | `provider` | Provider URL (advanced usage only).                                             | `string`              | `'https://services.lawsafrica.com/v1'` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
