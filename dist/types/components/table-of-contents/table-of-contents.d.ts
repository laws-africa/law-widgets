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
  filteredItems: Set<TOCItem> | null;
  innerItems: TOCItem[];
  el: HTMLElement;
  parseItemsProp(newValue: any): void;
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
