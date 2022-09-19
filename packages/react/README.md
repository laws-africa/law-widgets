# @laws-africa/law-widgets-react
<hr>

React wrapper component library build from [`@law-africa/law-widgets`](../../core/README.md)

## Installation
**npm**
```bash
npm install @laws-africa/law-widgets-react
```

**yarn**
```bash
yarn add @laws-africa/law-widgets-react
```

## Getting started

Here is a basic example of how to use `LaTableOfContents` in React:

```js
import { LaTableOfContents } from "@laws-africa/law-widgets-react";

function App() {
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
    }
  ]
  return (
    <div>
      <LaTableOfContents items={items}/>
    </div>
  );
}

export default App;
```

Click [here](../../core/README.md#Components) to view more examples



