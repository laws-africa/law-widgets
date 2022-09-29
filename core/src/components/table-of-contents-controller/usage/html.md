### Vanilla HTML JS Implementation

THis example demos the following:

- Passing in data into `items` of `la-table-of-content-controller` via js
- Slot usage

```html
<la-table-of-contents titleFilter="Ch. 2">
  <span slot="expand-icon">⬇️</span>
  <span slot="collapse-icon">⬆️</span>
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

### Basic React example

```js
import React from 'react';
import { LaTableOfContentsController } from '@lawsafrica/law-widgets-react';

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
      <LaTableOfContentsController items={items} />
    </div>
  );
};

export default App;
```

### Basic Vue3 example

```vue
<template>
  <div>
    <LaTableOfContentsController :items="items" />
  </div>
</template>

<script>
import { LaTableOfContentsController } from '@lawsafrica/law-widgets-vue';

export default {
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
    ],
  }),
  components: {
    LaTableOfContentsController,
  },
};
</script>
```

### Component stories

Click [here](https://laws.africa/la-web-components/?path=/docs/library-la-table-of-contents-controller--basic-usage) for more interactive examples on Storybook JS
