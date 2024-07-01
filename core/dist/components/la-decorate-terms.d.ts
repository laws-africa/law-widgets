import type { Components, JSX } from "../types/components";

interface LaDecorateTerms extends Components.LaDecorateTerms, HTMLElement {}
export const LaDecorateTerms: {
    prototype: LaDecorateTerms;
    new (): LaDecorateTerms;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
