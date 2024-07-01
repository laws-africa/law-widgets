import type { Components, JSX } from "../types/components";

interface LaGutter extends Components.LaGutter, HTMLElement {}
export const LaGutter: {
    prototype: LaGutter;
    new (): LaGutter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
