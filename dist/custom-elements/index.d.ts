/* LaWebComponents custom elements bundle */

import type { Components, JSX } from "../types/components";

interface LaAkomaNtoso extends Components.LaAkomaNtoso, HTMLElement {}
export const LaAkomaNtoso: {
  prototype: LaAkomaNtoso;
  new (): LaAkomaNtoso;
};

interface LaDecorateExternalRefs extends Components.LaDecorateExternalRefs, HTMLElement {}
export const LaDecorateExternalRefs: {
  prototype: LaDecorateExternalRefs;
  new (): LaDecorateExternalRefs;
};

interface LaDecorateInternalRefs extends Components.LaDecorateInternalRefs, HTMLElement {}
export const LaDecorateInternalRefs: {
  prototype: LaDecorateInternalRefs;
  new (): LaDecorateInternalRefs;
};

interface LaDecorateTerms extends Components.LaDecorateTerms, HTMLElement {}
export const LaDecorateTerms: {
  prototype: LaDecorateTerms;
  new (): LaDecorateTerms;
};

interface LaGutter extends Components.LaGutter, HTMLElement {}
export const LaGutter: {
  prototype: LaGutter;
  new (): LaGutter;
};

interface LaGutterItem extends Components.LaGutterItem, HTMLElement {}
export const LaGutterItem: {
  prototype: LaGutterItem;
  new (): LaGutterItem;
};

interface LaTableOfContents extends Components.LaTableOfContents, HTMLElement {}
export const LaTableOfContents: {
  prototype: LaTableOfContents;
  new (): LaTableOfContents;
};

interface LaTableOfContentsController extends Components.LaTableOfContentsController, HTMLElement {}
export const LaTableOfContentsController: {
  prototype: LaTableOfContentsController;
  new (): LaTableOfContentsController;
};

interface LaTocItem extends Components.LaTocItem, HTMLElement {}
export const LaTocItem: {
  prototype: LaTocItem;
  new (): LaTocItem;
};

/**
 * Utility to define all custom elements within this package using the tag name provided in the component's source. 
 * When defining each custom element, it will also check it's safe to define by:
 *
 * 1. Ensuring the "customElements" registry is available in the global context (window).
 * 2. The component tag name is not already defined.
 *
 * Use the standard [customElements.define()](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) 
 * method instead to define custom elements individually, or to provide a different tag name.
 */
export declare const defineCustomElements: (opts?: any) => void;

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bunding, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  ce?: (eventName: string, opts?: any) => CustomEvent;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;

export type { Components, JSX };

export * from '../types';
