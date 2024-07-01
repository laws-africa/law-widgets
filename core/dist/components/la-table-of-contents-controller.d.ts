import type { Components, JSX } from "../types/components";

interface LaTableOfContentsController extends Components.LaTableOfContentsController, HTMLElement {}
export const LaTableOfContentsController: {
    prototype: LaTableOfContentsController;
    new (): LaTableOfContentsController;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
