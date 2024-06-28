/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';

import type { JSX } from '@lawsafrica/law-widgets/components';

import { defineCustomElement as defineLaAkomaNtoso } from '@lawsafrica/law-widgets/components/la-akoma-ntoso.js';
import { defineCustomElement as defineLaDecorateExternalRefs } from '@lawsafrica/law-widgets/components/la-decorate-external-refs.js';
import { defineCustomElement as defineLaDecorateInternalRefs } from '@lawsafrica/law-widgets/components/la-decorate-internal-refs.js';
import { defineCustomElement as defineLaDecorateTerms } from '@lawsafrica/law-widgets/components/la-decorate-terms.js';
import { defineCustomElement as defineLaGutter } from '@lawsafrica/law-widgets/components/la-gutter.js';
import { defineCustomElement as defineLaGutterItem } from '@lawsafrica/law-widgets/components/la-gutter-item.js';
import { defineCustomElement as defineLaTableOfContents } from '@lawsafrica/law-widgets/components/la-table-of-contents.js';
import { defineCustomElement as defineLaTableOfContentsController } from '@lawsafrica/law-widgets/components/la-table-of-contents-controller.js';
import { defineCustomElement as defineLaTocItem } from '@lawsafrica/law-widgets/components/la-toc-item.js';


export const LaAkomaNtoso = /*@__PURE__*/ defineContainer<JSX.LaAkomaNtoso>('la-akoma-ntoso', defineLaAkomaNtoso, [
  'frbrExpressionUri',
  'frbrCountry',
  'frbrType',
  'frbrSubtype',
  'frbrAuthor',
  'frbrDate',
  'frbrNumber',
  'frbrExpressionDate',
  'frbrLanguage',
  'fetch',
  'partner',
  'provider'
]);


export const LaDecorateExternalRefs = /*@__PURE__*/ defineContainer<JSX.LaDecorateExternalRefs>('la-decorate-external-refs', defineLaDecorateExternalRefs, [
  'akomaNtoso',
  'popups',
  'partner',
  'provider'
]);


export const LaDecorateInternalRefs = /*@__PURE__*/ defineContainer<JSX.LaDecorateInternalRefs>('la-decorate-internal-refs', defineLaDecorateInternalRefs, [
  'akomaNtoso',
  'popups',
  'flag',
  'fetch',
  'partner',
  'provider'
]);


export const LaDecorateTerms = /*@__PURE__*/ defineContainer<JSX.LaDecorateTerms>('la-decorate-terms', defineLaDecorateTerms, [
  'akomaNtoso',
  'popupDefinitions',
  'linkTerms'
]);


export const LaGutter = /*@__PURE__*/ defineContainer<JSX.LaGutter>('la-gutter', defineLaGutter, [
  'akomaNtoso',
  'layoutComplete'
]);


export const LaGutterItem = /*@__PURE__*/ defineContainer<JSX.LaGutterItem>('la-gutter-item', defineLaGutterItem, [
  'anchor',
  'active',
  'laItemChanged'
]);


export const LaTableOfContents = /*@__PURE__*/ defineContainer<JSX.LaTableOfContents>('la-table-of-contents', defineLaTableOfContents, [
  'items',
  'titleFilter',
  'expanded',
  'frbrExpressionUri',
  'fetch',
  'partner',
  'provider'
]);


export const LaTableOfContentsController = /*@__PURE__*/ defineContainer<JSX.LaTableOfContentsController>('la-table-of-contents-controller', defineLaTableOfContentsController, [
  'items',
  'titleFilterPlaceholder',
  'hideClearTitleFilterButton',
  'titleFilterClearBtnClasses',
  'expandAllBtnClasses',
  'collapseAllBtnClasses',
  'expandAllBtnText',
  'collapseAllBtnText',
  'expanded',
  'titleFilterInputClasses',
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

