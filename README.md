## Monorepo starter template

This is a work in progress monorepo adapted from [ionic](https://github.com/musangowope/stencil-monoropo-starter-framework). 
It is template that contains a sample to component libraries. Stencil being the core library,
and react and vue generated libraries being generated from that core library through [stencil-ds-output-targets](https://github.com/ionic-team/stencil-ds-output-targets)

Lerna is used to manage monorepo.

This repo is a template starter created to act as starting point for those wishing to 
create a component libraries with `stencil` as the core library, and `react`
and `vue`generated from that core library

## Getting started
**Installing and symlinking dependencies**
- In the terminal run `npm install`
- Run `lerna bootstrap`. This will `npm install` `core`, `packages/*` (`react`, `vue`), and automatically symlink them

**Running storybook**
- `cd core` then run `npm run build` and then `npm run storybook`.
- For more information on how to use storybook refer to the [docs](https://storybook.js.org/)

## Running tests and testing libraries in Apps
TODO..

## Building libraries and publishing:
- Run `lerna run build`
- Run `lerna publish --no-private`
TODO: Improve description

PS: Fork it, take it apart, improve on this