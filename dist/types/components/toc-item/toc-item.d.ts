import { TOCItem } from '../table-of-contents/table-of-contents';
export declare class TocItem {
  /**
   * Item used to build the table of contents
   * */
  item: TOCItem;
  /**
   * Array of items filtered by titleQuery used in la-toc-item to determine with item is shown or not
   * */
  filteredItems: Set<TOCItem> | null;
  /**
   * HTML displayed before item title
   * */
  prependHtml: string;
  /**
   * HTML displayed after item title
   * */
  appendHtml: string;
  /**
   * HTML displayed in toggle button when item is expanded
   * */
  expandIconHtml: string;
  /**
   * HTML displayed in toggle button when item is not expanded
   * */
  collapseIconHtml: string;
  /**
   * If true, `item` `children`, and the collapsed icon are shown but expanded icon is hidden. If false, the `item`
   * `children` and collapsed icon are hidden but the expanded icon is show
   * */
  expanded: boolean;
  toggle(): void;
  render(): any;
}
