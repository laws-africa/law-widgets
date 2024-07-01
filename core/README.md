![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Law Widgets web component library

This is a collection of web components for formatting and adding interactivity to Akoma Ntoso documents.

These are web components, so they work in any major Javascript framework, or with no framework at all.

## Components

### Content components

- [la-akoma-ntoso](src/components/akoma-ntoso/readme.md)
- [la-gutter](src/components/gutter/readme.md)
- [la-table-of-contents](src/components/table-of-contents/readme.md)
- [la-table-of-contents-controller](src/components/table-of-contents-controller/readme.md)

### Behaviour components

- [la-decorate-internal-refs](src/components/decorate-internal-refs/readme.md)
- [la-decorate-external-refs](src/components/decorate-external-refs/readme.md)
- [la-decorate-terms](src/components/decorate-terms/readme.md)

## Using these component

There are three methods for using these web components:

### Script tag

- Put a script tag similar to this `<script type="module" src="https://cdn.jsdelivr.net/npm/@lawsafrica/law-widgets@latest/dist/lawwidgets/lawwidgets.esm.js"></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules

- Run `npm install @lawsafrica/law-widgets --save`
- Put a script tag similar to this `<script type="module" src="node_modules/@lawsafrica/law-widgets/dist/lawwidgets/lawwidgets.esm.js"></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Webpack or similar

- Run `npm install @lawsafrica/law-widgets --save`
- Import the required modules in your app. They will automatically be registered as custom elements.

Example:

```javascript
import '@lawsafrica/law-widgets/dist/components/la-akoma-ntoso';
import '@lawsafrica/law-widgets/dist/components/la-table-of-contents';
```

# Development

Clone this repository and run:

```bash
npm install
```

Need help? Check out the [Stencil docs](https://stenciljs.com/docs/my-first-component).

## Using Storybook

Development is easiest using Storybook for testing.

Run these commands in separate terminals:

```bash
npm run build.watch
```

```bash
npm run storybook
```

## Building for production

To build the component for production, run:

```bash
npm run build
```

## Running tests

To run the unit tests for the components, run:

```bash
npm run test
```

# Copyright and license

Copyright 2022 Laws.Africa.

Licensed under [GNU LGPLv3](LICENSE).
