### Vanilla HTML JS Implementation

This example demos the following:

* Passing in data into `items` of `la-table-of-content` via js
* Slot usage

```html

<la-table-of-contents>
  <span slot='prepend'>🏆</span>
  <span slot='append'>🥙</span>
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
        },
      ],
    },
  ];
  laTocElement.items = items;
</script>
```

### Basic React example

```js
import React from 'react';
import {LaTableOfContents} from '@lawsafrica/law-widgets-react'

const App = () => {
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
        },
      ],
    },
  ];

  return (
    <div>
      <LaTableOfContents items={items}/>
    </div>
  );
};

export default App;
```

### Basic Vue3 example

```vue

<template>
  <div>
    <LaTableOfContent :items={items} />
  </div>
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
      },
    ]
  })
}
</script>
```