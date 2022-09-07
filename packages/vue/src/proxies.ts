/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';

import type { JSX } from '@laws-africa/law-widgets/components';

import { defineCustomElement as defineLaTableOfContents } from '@laws-africa/law-widgets/components/la-table-of-contents.js';
import { defineCustomElement as defineLaTocItem } from '@laws-africa/law-widgets/components/la-toc-item.js';


export const LaTableOfContents = /*@__PURE__*/ defineContainer<JSX.LaTableOfContents>('la-table-of-contents', defineLaTableOfContents, [
  'items',
  'titleFilter',
  'frbrExpressionUri',
  'fetch',
  'partner',
  'provider'
]);


export const LaTocItem = /*@__PURE__*/ defineContainer<JSX.LaTocItem>('la-toc-item', defineLaTocItem, [
  'item',
  'filteredItems',
  'prependHtml',
  'appendHtml',
  'expandIconHtml',
  'collapseIconHtml',
  'expanded',
  'itemRendered',
  'itemTitleClicked'
]);

