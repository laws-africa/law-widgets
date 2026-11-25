# @lawsafrica/law-widgets-react
<hr>

React wrapper component library built from [`@lawsafrica/law-widgets`](../../core/README.md)

## Installation
**npm**
```bash
npm install @lawsafrica/law-widgets-react
```

OR

**yarn**
```bash
yarn add @lawsafrica/law-widgets-react
```

## Getting started

Here is a basic example of how to use `LaTableOfContents` in React:

```js
import { LaTableOfContents } from "@lawsafrica/law-widgets-react";

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

## List of components
View more examples of our various components.

### Content components

* [la-akoma-ntoso](../../core/src/components/akoma-ntoso/readme.md#basic-react-example)
* [la-gutter](../../core/src/components/gutter/readme.md#basic-react-example)
* [la-table-of-contents](../../core/src/components/table-of-contents/readme.md#basic-react-example)
* [la-table-of-contents-controller](../../core/src/components/table-of-contents-controller/readme.md#basic-react-example)

### Behaviour components

* [la-decorate-internal-refs](../../core/src/components/decorate-internal-refs/readme.md#basic-react-example)
* [la-decorate-external-refs](../../core/src/components/decorate-external-refs/readme.md#basic-react-example)
* [la-decorate-terms](../../core/src/components/decorate-terms/readme.md#basic-react-example)





## Package output

The package root exports all generated components, with CommonJS and ES module
entrypoints and TypeScript declarations. The wrappers bundle their web-component
runtime; the application's React/ReactDOM or Vue instance remains external.
These are browser components. Build through the monorepo so Stencil generates
the proxies before compiling the wrappers.
