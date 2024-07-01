/**
 * An item in the table of contents. Each item must have a `title` attribute (which may be `null`),
 * and a `children` attribute (which may be `null`).
 */
export interface TOCItem {
    title?: string;
    id?: string;
    href?: string;
    expanded?: boolean;
    children?: TOCItem[];
}
export declare class TableOfContents {
    /**
     * JSON value or string value parsed to array of items used to build the table of contents. Each item must have
     * a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`).
     *
     * Items may optionally have an id attribute and an href attribute, which are used to build the links for each item.
     * */
    items: TOCItem[] | string;
    /**
     * value to filter items by item title
     * */
    titleFilter: string;
    /**
     * Should items be expanded by default? This can be overridden by setting the expanded property for individual items.
     * */
    expanded: boolean;
    /** Full Akoma Ntoso FRBR Expression URI to fetch TOC information for. Only used if `fetch` is set. */
    frbrExpressionUri?: string;
    /** Fetch content from Laws.Africa services? Requires a Laws.Africa partnership and the frbrExpressionUri property to be set. */
    fetch: boolean;
    /** Partner code to use when fetching content from Laws.Africa. Defaults to the `location.hostname`. */
    partner?: string;
    /** Provider URL for fetching content (advanced usage only). */
    provider: string;
    filteredItems: Set<TOCItem> | null;
    innerItems: TOCItem[];
    el: HTMLElement;
    protected expandIconHtml: string;
    protected collapseIconHtml: string;
    parseItemsProp(newValue: any): void;
    refetch(): void;
    fetchContent(): Promise<void>;
    ensurePartner(): void;
    getSlotHTML(selector: string): string;
    componentWillLoad(): void;
    /**
     * Expands all items
     */
    expandAll(): Promise<void>;
    /**
     * Collapses all items
     */
    collapseAll(): Promise<void>;
    titleFilterChanged(filter: string): void;
    /**
     * Render items recursively. We render from the bottom up, allowing us to append children into their
     * parents. Rendering recursively here rather than inside la-toc-item means we can make use of global
     * configuration details without having to pass them down the tree.
     */
    renderItem(item: TOCItem): any;
    render(): any;
}
