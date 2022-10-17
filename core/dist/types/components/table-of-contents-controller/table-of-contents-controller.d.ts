import type { TOCItem } from '../table-of-contents/table-of-contents';
export declare class TableOfContentsController {
  /**
   * JSON value of array of items or string value parsed to array of items used to build the table of contents. Each
   * item must have a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`).
   * */
  items: TOCItem[] | string;
  /**
   * Placeholder for search title filter
   * */
  titleFilterPlaceholder: string;
  /**
   * If true, hides clear title filter button
   */
  hideClearTitleFilterButton: boolean;
  /**
   * Additional classes added to title filter button
   */
  titleFilterClearBtnClasses: string;
  /**
   * Additional classes added to Expand all button
   * */
  expandAllBtnClasses: string;
  /**
   * Additional classes added to Collapse all button
   * */
  collapseAllBtnClasses: string;
  /**
   * Additional CSS classes added to the search filter input
   * */
  titleFilterInputClasses: string;
  /** Full Akoma Ntoso FRBR Expression URI to fetch TOC information for. Only used if `fetch` is set. */
  frbrExpressionUri?: string;
  /** Fetch content from Laws.Africa services? Requires a Laws.Africa partnership and the frbrExpressionUri property to be set. */
  fetch: boolean;
  /** Partner code to use when fetching content from Laws.Africa. Defaults to the `location.hostname`. */
  partner?: string;
  /** Provider URL for fetching content (advanced usage only). */
  provider: string;
  titleFilter: string;
  el: HTMLElement;
  handleTitleChange: import("lodash").DebouncedFunc<(e: Event) => void>;
  clearTitleFilter(): void;
  expandAll(): Promise<void>;
  collapseAll(): Promise<void>;
  render(): any;
}
