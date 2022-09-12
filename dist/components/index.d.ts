/* LaWebComponents custom elements */
export { AkomaNtoso as LaAkomaNtoso } from '../types/components/akoma-ntoso/akoma-ntoso';
export { DecorateExternalRefs as LaDecorateExternalRefs } from '../types/components/decorate-external-refs/decorate-external-refs';
export { DecorateInternalRefs as LaDecorateInternalRefs } from '../types/components/decorate-internal-refs/decorate-internal-refs';
export { DecorateTerms as LaDecorateTerms } from '../types/components/decorate-terms/decorate-terms';
export { Gutter as LaGutter } from '../types/components/gutter/gutter.ts';
export { GutterItem as LaGutterItem } from '../types/components/gutter-item/gutter-item.ts';
export { TableOfContents as LaTableOfContents } from '../types/components/table-of-contents/table-of-contents';
export { TableOfContentsController as LaTableOfContentsController } from '../types/components/table-of-contents-controller/table-of-contents-controller';
export { TocItem as LaTocItem } from '../types/components/toc-item/toc-item';

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bundling, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;
export * from '../types';
