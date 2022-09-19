
## Law Widgets

Law Widgets is a monorepo that houses components libraries for formatting and adding interactivity to Akoma Ntoso documents.

Law Widgets is based on Web Components, which enables significant performance, usability, and feature improvements 
alongside support for React, and Vue.

### Packages `v1.0.0`

| Project        | Package                                                                                           | Description                                                                                                    | Documentation                           |
|----------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|-----------------------------------------|
| **Indigo Web** | [`@laws-africa/indigo-web`](https://www.npmjs.com/package/@laws-africa/indigo-web)                | Stylesheets for use with HTML documents published using the [Indigo platform](https://indigo.readthedocs.org). | [`README.md`](indigo-web/README.md)     
| **Core**       | [`@laws-africa/law-widgets`](https://www.npmjs.com/package/@laws-africa/law-widgets)              | Web components library built for Akoma Ntoso documents                                                         | [`README.md`](core/README.md)                                                                                   
| **Vue**        | [`@laws-africa/law-widgets-vue`](https://www.npmjs.com/package/@laws-africa/law-widgets-vue)      | Vue wrapper component library of `@laws-africa/law-widgets`                                                    | [`README.md`](packages/vue/README.md)                                                                          
| **React**      | [`@laws-africa/law-widgets-react`](https://www.npmjs.com/package/@laws-africa//law-widgets-react) | React wrapper component library of `@laws-africa/law-widgets`                                                  | [`README.md`](packages/react/README.md)                                                                        


## Getting started
At the root of project in your terminal, run `npm install`

[Lerna](https://lerna.js.org/) is used to managing and publishing packages in this repo.

**Installing and symlinking dependencies via Lerna**

Run `lerna bootstrap` in the terminal. This will npm install all the packages (`core`, `indigo-web`, `react`, `vue`), 
and provide the necessary symlinking between packages. (i.e `core` has `indigo-web` as a dependency, hence Lerna will
symlink `indigo-web`).

## Running tests 
In the terminal, run `lerna run test`.

## Building packages and publishing
- To build packages run `lerna run build`
- To publish packages run `lerna publish --conventional-commits`

