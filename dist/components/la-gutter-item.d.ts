import type { Components, JSX } from "../types/components";

interface LaGutterItem extends Components.LaGutterItem, HTMLElement {}
export const LaGutterItem: {
  prototype: LaGutterItem;
  new (): LaGutterItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
