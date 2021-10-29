import { Prop, h, Element, Method, Watch, State, Component, Host } from '@stencil/core';

/**
 * An item in the table of contents. Each item must have a `title` attribute (which may be `null`),
 * and a `children` attribute (which may be `null`).
 */
export interface TOCItem {
  [key: string]: any; // type for unknown keys.
  title?: string;
  children?: TOCItem[];
}

@Component({
  tag: 'la-table-of-contents'
})
export class TableOfContents {
  /**
   * JSON value or string value parsed to array of items used to build the table of contents. Each item must have
   * a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`).
   * */
  @Prop() items: TOCItem[] | string = [];

  /**
   * value to filter items by item title
   * */
  @Prop() titleFilter: string = '';


  @State() filteredItems: Set<TOCItem> | null = null;

  @State() innerItems: TOCItem[] = []

  @Element() el!: HTMLElement;

  @Watch('items')
  parseItemsProp(newValue: any) {
    if(typeof newValue === 'string') {
      this.innerItems = JSON.parse(newValue);
    } else if (Array.isArray(newValue)) {
      this.innerItems = [...newValue];
    }
  }

  componentWillLoad() {
    this.parseItemsProp(this.items);
  }

  /**
   * Expands all items
   */
  @Method()
  async expandAll() {
    for (const item of this.el.querySelectorAll('la-toc-item')) {
      item.expanded = true;
    }
  }

  /**
   * Collapses all items
   */
  @Method()
  async collapseAll() {
    for (const item of this.el.querySelectorAll('la-toc-item')) {
      item.expanded = false;
    }
  }

  @Watch('titleFilter')
  titleFilterChanged(filter: string) {
    if (filter) {
      const needle = filter.toLocaleLowerCase();
      const filteredItems: Set<TOCItem> = new Set<TOCItem>();

      // recursively include all children
      function includeKids(item: TOCItem) {
        for (const child of item.children || []) {
          filteredItems.add(child);
          includeKids(child);
        }
      }

      // Recursive function that determines whether or not an item should be rendered.
      // An item is rendered if its title matches the filter, or any of its children should be rendered.
      function shouldInclude(item: TOCItem): boolean {
        // this will be true if this item matches the search, or any child does
        let include: boolean = (item.title?.toLocaleLowerCase() || '').includes(needle);

        if (include) {
          // this item matches, show include all children automatically, no need to go any deeper
          includeKids(item);
        } else {
          // if any children match, then this node must be included
          if (item.children) {
            for (const child of item.children) {
              include = shouldInclude(child) || include;
            }
          }
        }

        if (include) {
          filteredItems.add(item);
        }

        return include;
      }

      for (const item of this.innerItems) {
        shouldInclude(item);
      }

      this.filteredItems = filteredItems;
    } else {
      this.filteredItems = null;
    }
    this.expandAll();
  }

  render() {
    const renderTOCItem = (item: TOCItem) => {
      const getSlotHTML = (selector: string) => {
        const element = this.el.querySelector(selector);
        /**
         * If slots originate from `la-table-of-contents`, query for slot html is
         * `this.el.querySelector("[slot]").innerHTML`
         * If slot originate from `la-table-of-contents-controller` query for slot html is
         * `this.el.querySelector("[slot] [slot]").innerHTML`
         * */
        if(element?.querySelector(selector)) {
          return element.querySelector(selector)?.innerHTML || "";
        }
        return element?.innerHTML || "";
      }

      // TODO: Investigate better to render dynamic slots
      const prepend = getSlotHTML("[slot='prepend']");
      const append = getSlotHTML("[slot='append']");

      const expandIcon = getSlotHTML("[slot='expand-icon']");
      const collapseIcon = getSlotHTML("[slot='collapse-icon']");
      return (
        <la-toc-item
          item={item}
          filteredItems={this.filteredItems}
          prependHtml={prepend}
          appendHtml={append}
          expandIconHtml={expandIcon}
          collapseIconHtml={collapseIcon}
        ></la-toc-item>
      );
    };

    return (
      <Host>
        <div style={{ display: 'none' }}>
          <slot name="append"></slot>
          <slot name="prepend"></slot>
          <slot name="expand-icon"></slot>
          <slot name="collapse-icon"></slot>
        </div>
        <div class="toc-items">{this.innerItems.map(item => renderTOCItem(item))}</div>
      </Host>
    );
  }
}
