/// <reference types="lodash" />
import { TOCItem } from '../table-of-contents/table-of-contents';
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
  searchFilterInputClasses: string;
  titleFilter: string;
  el: HTMLElement;
  handleTitleChange: import("lodash").DebouncedFunc<(e: Event) => void>;
  expandAll(): Promise<void>;
  collapseAll(): Promise<void>;
  render(): any;
}
