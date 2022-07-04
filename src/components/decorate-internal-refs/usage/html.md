Use `<la-akoma-ntoso>` to wrap Akoma Ntoso content.

```html
<la-akoma-ntoso>
  {{ your_akoma_ntoso_html }}
</la-akoma-ntoso>
```

Specify the expression FRBR URI to include tradition-specific formatting, or set
`frbr-country` or other `frbr-*` attributes accordingly.

```html
<la-akoma-ntoso expression-frbr-uri="/akn/za/act/1996/constitution/eng@">
  {{ your_akoma_ntoso_html }}
</la-akoma-ntoso>
```

```html
<la-akoma-ntoso frbr-country="ke" frbr-language="swa">
  {{ your_akoma_ntoso_html }}
</la-akoma-ntoso>
```

Laws.Africa partners can fetch content from Laws.Africa using the `fetch` attribute.
If your partner code is not the same as your website's domain name, then also specify
your partner code in `partner`.

```html
<la-akoma-ntoso fetch partner="example.com" expression-frbr-uri="/akn/za/act/1996/constitution/eng@">
  {{ your_akoma_ntoso_html }}
</la-akoma-ntoso>
```
