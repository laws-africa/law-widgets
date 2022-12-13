import type { EventEmitter } from '../../stencil-public-runtime';
/**
 * An item in the table of contents. Each item must have a `title` attribute (which may be `null`),
 * and a `children` attribute (which may be `null`).
 */
export interface TOCItem {
  [key: string]: any;
  title?: string;
  children?: TOCItem[];
}
export declare class TableOfContents {
  /**
   * JSON value or string value parsed to array of items used to build the table of contents. Each item must have
   * a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`).
   * */
  items: TOCItem[] | string;
  /**
   * value to filter items by item title
   * */
  titleFilter: string;
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
  /**
   * Event emitted when items have changed.
   */
  itemsChanged: EventEmitter<void>;
  parseItemsProp(newValue: any): void;
  refetch(): void;
  fetchContent(): Promise<void>;
  ensurePartner(): void;
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
  render(): any;
}
