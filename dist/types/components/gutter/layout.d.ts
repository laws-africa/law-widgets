/**
 * Helper class to determine the vertical layout of a collection of gutter content elements, such that they are aligned
 * vertically with their anchor elements, but don't overlap each other.
 */
export declare class GutterLayout {
  protected root: HTMLElement;
  protected buffer: number;
  protected tops: WeakMap<HTMLElement, number>;
  protected anchors: WeakMap<HTMLElement, HTMLElement>;
  /**
   * @param root root element for determining heights against. This MUST have a position style attribute,
   *             such as position: relative;
   */
  constructor(root: HTMLElement);
  layout(items: HTMLLaGutterItemElement[]): void;
  /**
   * Comparator that sorts items be ascending top value.
   */
  compareItems(a: HTMLLaGutterItemElement, b: HTMLLaGutterItemElement): number;
  layoutUpwards(items: HTMLLaGutterItemElement[], start: number, watermark: number): void;
  layoutDownwards(items: HTMLLaGutterItemElement[], start: number, watermark: number): void;
  updateAnchors(items: HTMLLaGutterItemElement[]): void;
  getItemAnchor(item: HTMLLaGutterItemElement): HTMLElement | null;
  updateTops(items: HTMLLaGutterItemElement[]): void;
  /**
   * Find the top of an element, relative to this.root.
   * @param element
   * @returns {number}
   */
  calculateTop(element: HTMLElement): number;
}
