## Law Widgets

Law Widgets is a monorepo that houses components libraries for formatting and adding interactivity to Akoma Ntoso documents.

Law Widgets is based on Web Components, which enables significant performance, usability, and feature improvements 
alongside support for React, and Vue.

### Packages

| Project               | Documentation                              | Package                                                                                         | Description                                                                                                    |
|-----------------------|--------------------------------------------|-------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| **Core**              | [`README.md`](core/README.md)              | [`@lawsafrica/law-widgets`](https://www.npmjs.com/package/@lawsafrica/law-widgets)              | Web components library built for Akoma Ntoso documents                                                         |
| **Law Widget Styles** | [`README.md`](law-widget-styles/README.md) | [`@lawsafrica/law-widget-styles`](https://www.npmjs.com/package/@lawsafrica/law-widget-styles)  | Stylesheets for use with HTML documents published using the [Indigo platform](https://indigo.readthedocs.org). |
| **Vue**               | [`README.md`](packages/vue/README.md)      | [`@lawsafrica/law-widgets-vue`](https://www.npmjs.com/package/@lawsafrica/law-widgets-vue)      | Vue wrapper component library of `@lawsafrica/law-widgets`                                                     |
| **React**             | [`README.md`](packages/react/README.md)    | [`@lawsafrica/law-widgets-react`](https://www.npmjs.com/package/@lawsafrica//law-widgets-react) | React wrapper component library of `@lawsafrica/law-widgets`                                                   |

## Getting started
Click [here](core/README.md#components) to learn how to use our components.


## Local development
At the root of project in your terminal, run `npm install`

[Lerna](https://lerna.js.org/) is used for managing and publishing packages in this repo.

**Installing and symlinking dependencies via Lerna**

Run `npx lerna bootstrap` in the terminal. This will npm install all the packages (`core`, `law-widget-styles`, `react`, `vue`), 
and provide the necessary symlinking between packages. (i.e `core` has `law-widget-styles` as a dependency, hence Lerna will
symlink `law-widget-styles`).

## Running tests 
In the terminal, run `npx lerna run test`.

## Building packages
In the terminal, run `npx lerna run build`.

## Releasing and publishing packages

- Once you have merged your feature into main, run `npx lerna version VERSION_NUMBER --conventional-commits` (
  e.g `npx lerna version 1.0.1 --conventional-commits`) in the terminal.
- An automatic tagged commit will occur and the changelog for the packages will be updated.
- Create a new release [here](https://github.com/laws-africa/law-widgets/releases/new). Use the tag that was pushed for your release.
- Upon creating a release, a new version of the packages will be published on `npm`.
