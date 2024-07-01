import type { Components, JSX } from "../types/components";

interface LaDecorateInternalRefs extends Components.LaDecorateInternalRefs, HTMLElement {}
export const LaDecorateInternalRefs: {
    prototype: LaDecorateInternalRefs;
    new (): LaDecorateInternalRefs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
