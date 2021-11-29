import type { Components, JSX } from "../types/components";

interface LaAkomaNtoso extends Components.LaAkomaNtoso, HTMLElement {}
export const LaAkomaNtoso: {
  prototype: LaAkomaNtoso;
  new (): LaAkomaNtoso;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
