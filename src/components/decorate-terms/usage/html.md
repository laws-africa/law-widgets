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
