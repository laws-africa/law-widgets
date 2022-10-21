import type { Components, JSX } from "../types/components";

interface LaTableOfContents extends Components.LaTableOfContents, HTMLElement {}
export const LaTableOfContents: {
  prototype: LaTableOfContents;
  new (): LaTableOfContents;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
