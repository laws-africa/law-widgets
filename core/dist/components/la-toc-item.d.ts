import type { Components, JSX } from "../types/components";

interface LaTocItem extends Components.LaTocItem, HTMLElement {}
export const LaTocItem: {
    prototype: LaTocItem;
    new (): LaTocItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
