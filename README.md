
## Law Widgets

Law Widgets is a monorepo that houses components libraries for formatting and adding interactivity to Akoma Ntoso documents.

Law Widgets is based on Web Components, which enables significant performance, usability, and feature improvements 
alongside support for React, and Vue.

### Packages `v1.0.0`

| Project | Package                                                                        | Documentation                           |
| ------- |--------------------------------------------------------------------------------|-----------------------------------------|
| **Core** | [`@laws-africa/law-widgets`](https://www.npmjs.com/package/@ionic/core)        | [`README.md`](core/README.md)           
| **Vue** | [`@laws-africa/law-widgets-vue`](https://www.npmjs.com/package/@ionic/vue)     | [`README.md`](packages/vue/README.md)   
| **React** | [`@laws-africa/law-widgets-react`](https://www.npmjs.com/package/@ionic/react) | [`README.md`](packages/react/README.md) 


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
- To build packages run `lerna publish`

