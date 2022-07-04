Place this element inside an `<la-akoma-ntoso>` element:

```html
<la-akoma-ntoso>
  <la-decorate-external-refs popups></la-decorate-external-refs>

  {{ html }}
</la-akoma-ntoso>
```

Alternatively place it elsewhere and provide a selector to identify the `<la-akoma-ntoso>` element:

```html
<la-decorate-external-refs popups akoma-ntoso="#doc"></la-decorate-external-refs>

<la-akoma-ntoso id="doc">
  {{ html }}
</la-akoma-ntosoi>
```
