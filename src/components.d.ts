/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TOCTreeNode } from "./components/table-of-contents-controller/table-of-contents-controller";
import { TOCTreeNode as TOCTreeNode1 } from "./components/table-of-contents-controller/table-of-contents-controller";
export namespace Components {
    interface LaAkomaNtoso {
    }
    interface LaDecorateInternalRefs {
        /**
          * CSS selector for the la-akoma-ntoso element that will be decorated. Defaults to the containing la-akoma-ntoso element, if any, otherwise the first `la-akoma-ntoso` element on the page.
         */
        "akomaNtoso"?: string;
        /**
          * If `true`, internal refs will be flagged with in icon to be more visible.
         */
        "flag": boolean;
        /**
          * If `true`, the content of internal ref targets will be shown as popups.
         */
        "popups": boolean;
    }
    interface LaDecorateTerms {
        /**
          * CSS selector for the la-akoma-ntoso element that will be decorated. Defaults to the containing la-akoma-ntoso element, if any, otherwise the first `la-akoma-ntoso` element on the page.
         */
        "akomaNtoso"?: string;
        /**
          * If `true`, terms will be changed to `<a>` elements that jump to the term definition.
         */
        "linkTerms": boolean;
        /**
          * If `true`, the definitions of terms will be shown as popups.
         */
        "popupDefinitions": boolean;
    }
    interface LaTableOfContents {
        "collapseAll": () => Promise<void>;
        "expandAll": () => Promise<void>;
        /**
          * An array of items used to build the table of contents
         */
        "items": TOCTreeNode[];
        /**
          * value to filter items by item title
         */
        "titleQuery": string;
    }
    interface LaTableOfContentsController {
        /**
          * An array of items used to build the table of contents
         */
        "items": TOCTreeNode[];
        /**
          * Placeholder for search title filter
         */
        "titleFilterPlaceholder": string;
    }
    interface LaTocItem {
        /**
          * HTML displayed after item title
         */
        "appendHTML": string;
        "collapse": () => Promise<void>;
        /**
          * HTML displayed in toggle button when item is not expanded
         */
        "collapseIconHTML": string;
        "expand": () => Promise<void>;
        /**
          * HTML displayed in toggle button when item is expanded
         */
        "expandIconHTML": string;
        /**
          * Item used to build the table of contents
         */
        "item": TOCTreeNode;
        /**
          * Array of items filtered by titleQuery used in la-toc-item to determine with item is shown or not
         */
        "itemsFromFilter": TOCTreeNode[];
        /**
          * HTML displayed before item title
         */
        "prependHTML": string;
    }
}
declare global {
    interface HTMLLaAkomaNtosoElement extends Components.LaAkomaNtoso, HTMLStencilElement {
    }
    var HTMLLaAkomaNtosoElement: {
        prototype: HTMLLaAkomaNtosoElement;
        new (): HTMLLaAkomaNtosoElement;
    };
    interface HTMLLaDecorateInternalRefsElement extends Components.LaDecorateInternalRefs, HTMLStencilElement {
    }
    var HTMLLaDecorateInternalRefsElement: {
        prototype: HTMLLaDecorateInternalRefsElement;
        new (): HTMLLaDecorateInternalRefsElement;
    };
    interface HTMLLaDecorateTermsElement extends Components.LaDecorateTerms, HTMLStencilElement {
    }
    var HTMLLaDecorateTermsElement: {
        prototype: HTMLLaDecorateTermsElement;
        new (): HTMLLaDecorateTermsElement;
    };
    interface HTMLLaTableOfContentsElement extends Components.LaTableOfContents, HTMLStencilElement {
    }
    var HTMLLaTableOfContentsElement: {
        prototype: HTMLLaTableOfContentsElement;
        new (): HTMLLaTableOfContentsElement;
    };
    interface HTMLLaTableOfContentsControllerElement extends Components.LaTableOfContentsController, HTMLStencilElement {
    }
    var HTMLLaTableOfContentsControllerElement: {
        prototype: HTMLLaTableOfContentsControllerElement;
        new (): HTMLLaTableOfContentsControllerElement;
    };
    interface HTMLLaTocItemElement extends Components.LaTocItem, HTMLStencilElement {
    }
    var HTMLLaTocItemElement: {
        prototype: HTMLLaTocItemElement;
        new (): HTMLLaTocItemElement;
    };
    interface HTMLElementTagNameMap {
        "la-akoma-ntoso": HTMLLaAkomaNtosoElement;
        "la-decorate-internal-refs": HTMLLaDecorateInternalRefsElement;
        "la-decorate-terms": HTMLLaDecorateTermsElement;
        "la-table-of-contents": HTMLLaTableOfContentsElement;
        "la-table-of-contents-controller": HTMLLaTableOfContentsControllerElement;
        "la-toc-item": HTMLLaTocItemElement;
    }
}
declare namespace LocalJSX {
    interface LaAkomaNtoso {
    }
    interface LaDecorateInternalRefs {
        /**
          * CSS selector for the la-akoma-ntoso element that will be decorated. Defaults to the containing la-akoma-ntoso element, if any, otherwise the first `la-akoma-ntoso` element on the page.
         */
        "akomaNtoso"?: string;
        /**
          * If `true`, internal refs will be flagged with in icon to be more visible.
         */
        "flag"?: boolean;
        /**
          * If `true`, the content of internal ref targets will be shown as popups.
         */
        "popups"?: boolean;
    }
    interface LaDecorateTerms {
        /**
          * CSS selector for the la-akoma-ntoso element that will be decorated. Defaults to the containing la-akoma-ntoso element, if any, otherwise the first `la-akoma-ntoso` element on the page.
         */
        "akomaNtoso"?: string;
        /**
          * If `true`, terms will be changed to `<a>` elements that jump to the term definition.
         */
        "linkTerms"?: boolean;
        /**
          * If `true`, the definitions of terms will be shown as popups.
         */
        "popupDefinitions"?: boolean;
    }
    interface LaTableOfContents {
        /**
          * An array of items used to build the table of contents
         */
        "items"?: TOCTreeNode[];
        "onTocTitleClicked"?: (event: CustomEvent<any>) => void;
        /**
          * value to filter items by item title
         */
        "titleQuery"?: string;
    }
    interface LaTableOfContentsController {
        /**
          * An array of items used to build the table of contents
         */
        "items"?: TOCTreeNode[];
        "onTitleClicked"?: (event: CustomEvent<any>) => void;
        "onTocControllerTitleClicked"?: (event: CustomEvent<any>) => void;
        /**
          * Placeholder for search title filter
         */
        "titleFilterPlaceholder"?: string;
    }
    interface LaTocItem {
        /**
          * HTML displayed after item title
         */
        "appendHTML"?: string;
        /**
          * HTML displayed in toggle button when item is not expanded
         */
        "collapseIconHTML"?: string;
        /**
          * HTML displayed in toggle button when item is expanded
         */
        "expandIconHTML"?: string;
        /**
          * Item used to build the table of contents
         */
        "item"?: TOCTreeNode;
        /**
          * Array of items filtered by titleQuery used in la-toc-item to determine with item is shown or not
         */
        "itemsFromFilter"?: TOCTreeNode[];
        "onTocItemTitleClicked"?: (event: CustomEvent<any>) => void;
        /**
          * HTML displayed before item title
         */
        "prependHTML"?: string;
    }
    interface IntrinsicElements {
        "la-akoma-ntoso": LaAkomaNtoso;
        "la-decorate-internal-refs": LaDecorateInternalRefs;
        "la-decorate-terms": LaDecorateTerms;
        "la-table-of-contents": LaTableOfContents;
        "la-table-of-contents-controller": LaTableOfContentsController;
        "la-toc-item": LaTocItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "la-akoma-ntoso": LocalJSX.LaAkomaNtoso & JSXBase.HTMLAttributes<HTMLLaAkomaNtosoElement>;
            "la-decorate-internal-refs": LocalJSX.LaDecorateInternalRefs & JSXBase.HTMLAttributes<HTMLLaDecorateInternalRefsElement>;
            "la-decorate-terms": LocalJSX.LaDecorateTerms & JSXBase.HTMLAttributes<HTMLLaDecorateTermsElement>;
            "la-table-of-contents": LocalJSX.LaTableOfContents & JSXBase.HTMLAttributes<HTMLLaTableOfContentsElement>;
            "la-table-of-contents-controller": LocalJSX.LaTableOfContentsController & JSXBase.HTMLAttributes<HTMLLaTableOfContentsControllerElement>;
            "la-toc-item": LocalJSX.LaTocItem & JSXBase.HTMLAttributes<HTMLLaTocItemElement>;
        }
    }
}
