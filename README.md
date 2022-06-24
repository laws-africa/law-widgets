![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Laws.Africa web component library (beta)

This is a collection of web components for formatting and adding interactivity to Akoma Ntoso documents.

These are web components, so they work in any major framework or with no framework at all.

## Components

### Content components

* [la-akoma-ntoso](src/components/akoma-ntoso/)
* [la-akoma-ntoso-portion](src/components/akoma-ntoso-portion/)
* [la-gutter](src/components/gutter/)

### Behaviour components

* [la-decorate-internal-refs](src/components/decorate-internal-refs)
* [la-decorate-terms](src/components/decorate-terms)

## Using these component

There are three methods for using these web components:

### Script tag

- Put a script tag similar to this `<script type="module" src="https://cdn.jsdelivr.net/npm/@lawsafrica/web-components@0.7.2-beta/dist/la-web-components/la-web-components.esm.js"></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install @lawsafrica/web-components --save`
- Put a script tag similar to this `<script type="module" src="node_modules/@laws-africa/web-components/dist/la-web-components/la-web-components.esm.js"></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

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
npm run storybook
```

```bash
npm run stencil-for-storybook
```

To build Storybook for static use (not yet tested):

```bash
npm run build-storybook
```

## Without Storybook

```bash
npm run start
```

## Building for production

To build the component for production, run:

```bash
npm run build
```

## Running tests

To run the unit tests for the components, run:

```bash
npm test
```

# Releasing a new version

1. Update the version number: `npm version --no-git-tag-version <version>`
2. Commit and push to GitHub using a Pull Request onto the master branch
3. GitHub will build the package and update the `dist` directory
4. [Tag and release using GitHub](https://github.com/laws-africa/la-web-components/releases/new) off of the `master` branch
5. GitHub will release a new version of the built package to GitHub packages

# Copyright and license

Copyright 2021 Laws.Africa.

Licensed under [GNU LGPLv3](LICENSE).
