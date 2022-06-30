Fo this element inside an `<la-akoma-ntoso>` element:

```html
<la-akoma-ntoso>
  <la-decorate-internal-refs flag popups></la-decorate-internal-refs>

  {{ html }}
</la-akoma-ntoso>
```

Alternatively place it elsewhere and provide a selector to identify the `<la-akoma-ntoso>` element:

```html
<la-decorate-internal-refs flag popups akoma-ntoso="#doc"></la-decorate-internal-refs>

<la-akoma-ntoso id="doc">
  {{ html }}
</la-akoma-ntosoi>
```
