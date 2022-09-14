## Vanilla HTML JS Implementation
THis example demos the following:
* Passing in data into `items` of `la-table-of-content-controller` via js
* Slot usage
* Filtering via titleQuery

```html
<la-table-of-contents titleFilter='Ch. 2'>
  <span slot='prepend'>🏆</span>
  <span slot='append'>🥙</span>
  <span slot='expand-icon'>⬇️</span>
  <span slot='collapse-icon'>⬆️</span>
</la-table-of-contents>
<script>
  const laTocElement = document.querySelector('la-table-of-contents');
  const items = [
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
          index: 9,
        },
      ],
    },
  ];
  laTocElement.items = items;
</script>
```