import type { Components, JSX } from "../types/components";

interface LaDecorateExternalRefs extends Components.LaDecorateExternalRefs, HTMLElement {}
export const LaDecorateExternalRefs: {
    prototype: LaDecorateExternalRefs;
    new (): LaDecorateExternalRefs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
