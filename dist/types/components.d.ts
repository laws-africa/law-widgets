/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { TOCItem } from "./components/table-of-contents/table-of-contents";
import { TOCItem as TOCItem1 } from "./components/table-of-contents/table-of-contents";
export namespace Components {
    interface LaAkomaNtoso {
        /**
          * The emanating actor, unless implicitly deducible by the document type (e.g., acts and bills do not usually require actor, while ministerial decrees and European legislation do)
         */
        "frbrAuthor"?: string;
        /**
          * Country (a two-letter or code according to ISO 3166-1 [ISO3166] or a short and unique alphanumeric codes according to ISO 3166-2 [ISO3166-2]).
         */
        "frbrCountry"?: string;
        /**
          * Original creation date (expressed in `YYYY-MM-DD` format or just `YYYY` if the year is sufficient for identification purposes
         */
        "frbrDate"?: string;
        /**
          * Any content-specification date
         */
        "frbrExpressionDate"?: string;
        /**
          * Full Akoma Ntoso FRBR Expression URI used to populate the other `frbr` fields if they are unset. Setting this is the preferred mechanism for ensuring tradition-specific styling.
         */
        "frbrExpressionUri"?: string;
        /**
          * The human language code in which the Expression is drafted
         */
        "frbrLanguage"?: string;
        /**
          * Number or title or other disambiguating feature of the Work (when appropriate, otherwise optionally the string nn)
         */
        "frbrNumber"?: string;
        /**
          * Subtype used if the document is anything other an `act` / `statement` / `judgment` / `doc`
         */
        "frbrSubtype"?: string;
        /**
          * Type of document  - For legislation – Acts, Regulations, Statutory Instruments, and the like – use `act`.  - For case law, use `judgment`.  - For other documents – Policies, Memoranda of Understanding, Yearbooks, Press Releases, and the like – use `doc`.
         */
        "frbrType"?: string;
    }
    interface LaDecorateInternalRefs {
        /**
          * CSS selector for the la-akoma-ntoso element or HTMLELement that will be decorated. Defaults to the containing la-akoma-ntoso element, if any, otherwise the first `la-akoma-ntoso` element on the page.
         */
        "akomaNtoso"?: string | HTMLElement;
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
          * CSS selector for the la-akoma-ntoso element and HTMLElement that will be decorated. Defaults to the containing la-akoma-ntoso element, if any, otherwise the first `la-akoma-ntoso` element on the page.
         */
        "akomaNtoso"?: string | HTMLElement;
        /**
          * If `true`, terms will be changed to `<a>` elements that jump to the term definition.
         */
        "linkTerms": boolean;
        /**
          * If `true`, the definitions of terms will be shown as popups.
         */
        "popupDefinitions": boolean;
    }
    interface LaGutter {
        /**
          * CSS selector or HTMLElement for the la-akoma-ntoso element that will be decorated. Defaults to the containing la-akoma-ntoso element, if any, otherwise the first `la-akoma-ntoso` element on the page.
         */
        "akomaNtoso"?: string | HTMLElement;
        /**
          * Layout the gutter items.
         */
        "layoutItems": () => Promise<void>;
    }
    interface LaGutterItem {
        /**
          * Indicates that this is the active item in the gutter. Only one item can be active at a time.
         */
        "active": boolean;
        /**
          * CSS selector for the anchor element or HTMLElement in the enclosing gutter's `<la-akoma-ntoso>` element.
         */
        "anchor"?: string | HTMLElement;
    }
    interface LaTableOfContents {
        /**
          * Collapses all items
         */
        "collapseAll": () => Promise<void>;
        /**
          * Expands all items
         */
        "expandAll": () => Promise<void>;
        /**
          * JSON value or string value parsed to array of items used to build the table of contents. Each item must have a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`).
         */
        "items": TOCItem[] | string;
        /**
          * value to filter items by item title
         */
        "titleFilter": string;
    }
    interface LaTableOfContentsController {
        /**
          * Additional classes added to Collapse all button
         */
        "collapseAllBtnClasses": string;
        /**
          * Additional classes added to Expand all button
         */
        "expandAllBtnClasses": string;
        /**
          * If true, hides clear title filter button
         */
        "hideClearTitleFilterButton": boolean;
        /**
          * JSON value of array of items or string value parsed to array of items used to build the table of contents. Each item must have a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`).
         */
        "items": TOCItem[] | string;
        /**
          * Additional classes added to title filter button
         */
        "titleFilterClearBtnClasses": string;
        /**
          * Additional CSS classes added to the search filter input
         */
        "titleFilterInputClasses": string;
        /**
          * Placeholder for search title filter
         */
        "titleFilterPlaceholder": string;
    }
    interface LaTocItem {
        /**
          * HTML displayed after item title
         */
        "appendHtml": string;
        /**
          * HTML displayed in toggle button when item is not expanded
         */
        "collapseIconHtml": string;
        /**
          * HTML displayed in toggle button when item is expanded
         */
        "expandIconHtml": string;
        /**
          * If true, `item` `children`, and the collapsed icon are shown but expanded icon is hidden. If false, the `item` `children` and collapsed icon are hidden but the expanded icon is show
         */
        "expanded": boolean;
        /**
          * Array of items filtered by titleQuery used in la-toc-item to determine with item is shown or not
         */
        "filteredItems": Set<TOCItem> | null;
        /**
          * Item used to build the table of contents
         */
        "item": TOCItem;
        /**
          * HTML displayed before item title
         */
        "prependHtml": string;
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
    interface HTMLLaGutterElement extends Components.LaGutter, HTMLStencilElement {
    }
    var HTMLLaGutterElement: {
        prototype: HTMLLaGutterElement;
        new (): HTMLLaGutterElement;
    };
    interface HTMLLaGutterItemElement extends Components.LaGutterItem, HTMLStencilElement {
    }
    var HTMLLaGutterItemElement: {
        prototype: HTMLLaGutterItemElement;
        new (): HTMLLaGutterItemElement;
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
        "la-gutter": HTMLLaGutterElement;
        "la-gutter-item": HTMLLaGutterItemElement;
        "la-table-of-contents": HTMLLaTableOfContentsElement;
        "la-table-of-contents-controller": HTMLLaTableOfContentsControllerElement;
        "la-toc-item": HTMLLaTocItemElement;
    }
}
declare namespace LocalJSX {
    interface LaAkomaNtoso {
        /**
          * The emanating actor, unless implicitly deducible by the document type (e.g., acts and bills do not usually require actor, while ministerial decrees and European legislation do)
         */
        "frbrAuthor"?: string;
        /**
          * Country (a two-letter or code according to ISO 3166-1 [ISO3166] or a short and unique alphanumeric codes according to ISO 3166-2 [ISO3166-2]).
         */
        "frbrCountry"?: string;
        /**
          * Original creation date (expressed in `YYYY-MM-DD` format or just `YYYY` if the year is sufficient for identification purposes
         */
        "frbrDate"?: string;
        /**
          * Any content-specification date
         */
        "frbrExpressionDate"?: string;
        /**
          * Full Akoma Ntoso FRBR Expression URI used to populate the other `frbr` fields if they are unset. Setting this is the preferred mechanism for ensuring tradition-specific styling.
         */
        "frbrExpressionUri"?: string;
        /**
          * The human language code in which the Expression is drafted
         */
        "frbrLanguage"?: string;
        /**
          * Number or title or other disambiguating feature of the Work (when appropriate, otherwise optionally the string nn)
         */
        "frbrNumber"?: string;
        /**
          * Subtype used if the document is anything other an `act` / `statement` / `judgment` / `doc`
         */
        "frbrSubtype"?: string;
        /**
          * Type of document  - For legislation – Acts, Regulations, Statutory Instruments, and the like – use `act`.  - For case law, use `judgment`.  - For other documents – Policies, Memoranda of Understanding, Yearbooks, Press Releases, and the like – use `doc`.
         */
        "frbrType"?: string;
    }
    interface LaDecorateInternalRefs {
        /**
          * CSS selector for the la-akoma-ntoso element or HTMLELement that will be decorated. Defaults to the containing la-akoma-ntoso element, if any, otherwise the first `la-akoma-ntoso` element on the page.
         */
        "akomaNtoso"?: string | HTMLElement;
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
          * CSS selector for the la-akoma-ntoso element and HTMLElement that will be decorated. Defaults to the containing la-akoma-ntoso element, if any, otherwise the first `la-akoma-ntoso` element on the page.
         */
        "akomaNtoso"?: string | HTMLElement;
        /**
          * If `true`, terms will be changed to `<a>` elements that jump to the term definition.
         */
        "linkTerms"?: boolean;
        /**
          * If `true`, the definitions of terms will be shown as popups.
         */
        "popupDefinitions"?: boolean;
    }
    interface LaGutter {
        /**
          * CSS selector or HTMLElement for the la-akoma-ntoso element that will be decorated. Defaults to the containing la-akoma-ntoso element, if any, otherwise the first `la-akoma-ntoso` element on the page.
         */
        "akomaNtoso"?: string | HTMLElement;
    }
    interface LaGutterItem {
        /**
          * Indicates that this is the active item in the gutter. Only one item can be active at a time.
         */
        "active"?: boolean;
        /**
          * CSS selector for the anchor element or HTMLElement in the enclosing gutter's `<la-akoma-ntoso>` element.
         */
        "anchor"?: string | HTMLElement;
        /**
          * Event emitted when the state (`active`) of the item changes. Used by `la-gutter` to re-layout its items.
         */
        "onLaItemChanged"?: (event: CustomEvent<void>) => void;
    }
    interface LaTableOfContents {
        /**
          * JSON value or string value parsed to array of items used to build the table of contents. Each item must have a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`).
         */
        "items"?: TOCItem[] | string;
        /**
          * value to filter items by item title
         */
        "titleFilter"?: string;
    }
    interface LaTableOfContentsController {
        /**
          * Additional classes added to Collapse all button
         */
        "collapseAllBtnClasses"?: string;
        /**
          * Additional classes added to Expand all button
         */
        "expandAllBtnClasses"?: string;
        /**
          * If true, hides clear title filter button
         */
        "hideClearTitleFilterButton"?: boolean;
        /**
          * JSON value of array of items or string value parsed to array of items used to build the table of contents. Each item must have a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`).
         */
        "items"?: TOCItem[] | string;
        /**
          * Additional classes added to title filter button
         */
        "titleFilterClearBtnClasses"?: string;
        /**
          * Additional CSS classes added to the search filter input
         */
        "titleFilterInputClasses"?: string;
        /**
          * Placeholder for search title filter
         */
        "titleFilterPlaceholder"?: string;
    }
    interface LaTocItem {
        /**
          * HTML displayed after item title
         */
        "appendHtml"?: string;
        /**
          * HTML displayed in toggle button when item is not expanded
         */
        "collapseIconHtml"?: string;
        /**
          * HTML displayed in toggle button when item is expanded
         */
        "expandIconHtml"?: string;
        /**
          * If true, `item` `children`, and the collapsed icon are shown but expanded icon is hidden. If false, the `item` `children` and collapsed icon are hidden but the expanded icon is show
         */
        "expanded"?: boolean;
        /**
          * Array of items filtered by titleQuery used in la-toc-item to determine with item is shown or not
         */
        "filteredItems"?: Set<TOCItem> | null;
        /**
          * Item used to build the table of contents
         */
        "item"?: TOCItem;
        "onItemRendered"?: (event: CustomEvent<any>) => void;
        "onItemTitleClicked"?: (event: CustomEvent<any>) => void;
        /**
          * HTML displayed before item title
         */
        "prependHtml"?: string;
    }
    interface IntrinsicElements {
        "la-akoma-ntoso": LaAkomaNtoso;
        "la-decorate-internal-refs": LaDecorateInternalRefs;
        "la-decorate-terms": LaDecorateTerms;
        "la-gutter": LaGutter;
        "la-gutter-item": LaGutterItem;
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
            "la-gutter": LocalJSX.LaGutter & JSXBase.HTMLAttributes<HTMLLaGutterElement>;
            "la-gutter-item": LocalJSX.LaGutterItem & JSXBase.HTMLAttributes<HTMLLaGutterItemElement>;
            "la-table-of-contents": LocalJSX.LaTableOfContents & JSXBase.HTMLAttributes<HTMLLaTableOfContentsElement>;
            "la-table-of-contents-controller": LocalJSX.LaTableOfContentsController & JSXBase.HTMLAttributes<HTMLLaTableOfContentsControllerElement>;
            "la-toc-item": LocalJSX.LaTocItem & JSXBase.HTMLAttributes<HTMLLaTocItemElement>;
        }
    }
}
