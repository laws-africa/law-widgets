/**
 * An item in the table of contents. Each item must have a `title` attribute (which may be `null`),
 * and a `children` attribute (which may be `null`).
 */
export interface TOCItem {
  [key: string]: any;
  title?: string;
  id?: string;
  url?: string;
  children?: TOCItem[];
}
export declare class TableOfContents {
  /**
   * JSON value or string value parsed to array of items used to build the table of contents. Each item must have
   * a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`).
   *
   * Items may optionally have an id attribute and a url attribute, which are used to build the links for each item.
   * */
  items: TOCItem[] | string;
  /**
   * value to filter items by item title
   * */
  titleFilter: string;
  /** Should the table of contents be expanded when first created? */
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
  parseItemsProp(newValue: any): void;
  refetch(): void;
  fetchContent(): Promise<void>;
  ensurePartner(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  /**
   * Expands all items
   */
  expandAll(): Promise<void>;
  /**
   * Collapses all items
   */
  collapseAll(): Promise<void>;
  titleFilterChanged(filter: string): void;
  render(): any;
}
