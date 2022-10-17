/**
 * Helper class to determine the vertical layout of a collection of gutter content elements, such that they are aligned
 * vertically with their anchor elements, but don't overlap each other.
 */
export class GutterLayout {
  protected root: HTMLElement;
  protected buffer: number;
  protected tops: WeakMap<HTMLElement, number>;
  protected anchors: WeakMap<HTMLElement, HTMLElement>;

  /**
   * @param root root element for determining heights against. This MUST have a position style attribute,
   *             such as position: relative;
   */
  constructor(root: HTMLElement) {
    this.root = root;
    // vertical buffer between elements
    this.buffer = 10;
    this.tops = new WeakMap();
    this.anchors = new WeakMap();
  }

  layout(items: HTMLLaGutterItemElement[]) {
    this.updateAnchorsAndItems(items);

    // pre-calculate tops
    this.updateTops(items);

    // sort items by ascending anchorElement top
    items = this.sortItems(items);

    // find the first item that is active
    const activeItem: HTMLLaGutterItemElement | undefined = items.find((x) => x.active);

    if (activeItem) {
      const ix = items.indexOf(activeItem);
      if (ix > -1) {
        // layout the primary item first
        const anchor: HTMLElement | undefined = this.anchors.get(activeItem);
        if (anchor) {
          const top = this.tops.get(anchor);
          if (top) {
            activeItem.style.top = `${top}px`;
            // layout the ones going upwards from here
            this.layoutUpwards(items, ix - 1, top - this.buffer);
            // layout the ones going downwards from here
            this.layoutDownwards(items, ix + 1, top + activeItem.clientHeight + this.buffer);
            return;
          }
        }
      }
    }

    // nothing is primary, go top downwards
    this.layoutDownwards(items, 0, 0);
  }

  sortItems(items: HTMLLaGutterItemElement[]) {
    return [...items].sort(this.compareItems.bind(this));
  }

  /**
   * Comparator that sorts items be ascending top value.
   */
  compareItems(a: HTMLLaGutterItemElement, b: HTMLLaGutterItemElement): number {
    const anchorA: HTMLElement | undefined = this.anchors.get(a);
    const anchorB: HTMLElement | undefined = this.anchors.get(b);

    if (anchorA) {
      if (anchorB) {
        const topA: number | undefined = this.tops.get(anchorA);
        const topB: number | undefined = this.tops.get(anchorB);

        if (topA) {
          if (topB) {
            return topA - topB;
          } else {
            // a has an top, b doesn't, so a comes after b
            return 1;
          }
        } else {
          // a has no top, best if b comes after a
          return -1;
        }
      } else {
        // a has an anchor, b doesn't, so a comes after b
        return 1;
      }
    } else {
      // a has no anchor, best if b comes after a
      return -1;
    }
  }

  layoutUpwards(items: HTMLLaGutterItemElement[], start: number, watermark: number) {
    // layout the items from index start, going bottom to top
    for (let i = start; i >= 0; i--) {
      const item = items[i];
      const anchor: HTMLElement | undefined = this.anchors.get(item);
      if (anchor) {
        let top = this.tops.get(anchor);
        if (top) {
          if (top + item.clientHeight >= watermark) {
            top = watermark - item.clientHeight;
          }
          item.style.top = `${top}px`;
          watermark = top - this.buffer;
        }
      }
    }
  }

  layoutDownwards(items: HTMLLaGutterItemElement[], start: number, watermark: number) {
    // layout the items from index start, going top to bottom
    for (let i = start; i < items.length; i++) {
      const item = items[i];
      const anchor: HTMLElement | undefined = this.anchors.get(item);
      if (anchor) {
        let top = this.tops.get(anchor);
        if (top) {
          top = Math.max(watermark, top);
          item.style.top = `${top}px`;
          watermark = top + item.clientHeight + this.buffer;
        }
      }
    }
  }

  updateAnchorsAndItems(items: HTMLLaGutterItemElement[]) {
    this.anchors = new WeakMap();

    for (const item of items) {
      const anchor: HTMLElement | null = this.getItemAnchor(item);
      if (anchor) {
        this.anchors.set(item, anchor);
      }
      item.style.display = anchor ? '' : 'none';
    }
  }

  getItemAnchor(item: HTMLLaGutterItemElement): HTMLElement | null {
    if (item.anchor) {
      if (item.anchor instanceof HTMLElement) {
        return this.root.contains(item.anchor) ? item.anchor : null;
      } else {
        return this.root.querySelector(item.anchor);
      }
    }
    return null;
  }

  updateTops(items: HTMLLaGutterItemElement[]) {
    this.tops = new WeakMap();

    for (const item of items) {
      const anchor: HTMLElement | undefined = this.anchors.get(item);
      if (anchor && !this.tops.has(anchor)) {
        this.tops.set(anchor, this.calculateTop(anchor));
      }
    }
  }

  /**
   * Find the top of an element, relative to this.root.
   * @param element
   * @returns {number}
   */
  calculateTop(element: HTMLElement) {
    let top = 0;
    let el: HTMLElement | null = element;

    while (el && el !== this.root) {
      top += el.offsetTop;
      el = el.offsetParent as HTMLElement;
    }

    return top;
  }
}
