import { Prop, h, Listen, Element, Method, Watch, State, Component, Event, EventEmitter, Host } from '@stencil/core';
import { TOCTreeNode } from '../table-of-contents-controller/table-of-contents-controller';

@Component({
  tag: 'la-table-of-contents'
})
export class TableOfContents {
  /**
   * An array of items used to build the table of contents
   * */
  @Prop() items: TOCTreeNode[] = [];

  /**
   * value to filter items by item title
   * */
  @Prop() titleQuery: string = '';

  @State() itemsFromFilter: TOCTreeNode[] = [];

  @Element() el!: HTMLElement;

  @Event({
    eventName: 'tocTitleClicked',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  tocTitleClicked: EventEmitter<TOCTreeNode> | undefined;

  @Listen('tocItemTitleClicked')
  handleTitleClicked(event: CustomEvent) {
    this.tocTitleClicked?.emit(event);
  }

  @Method()
  async expandAll() {
    for (const item of this.el.querySelectorAll('la-toc-item')) {
      item.expand();
    }
  }
  @Method()
  async collapseAll() {
    for (const item of this.el.querySelectorAll('la-toc-item')) {
      item.collapse();
    }
  }

  flattenItems = (items: TOCTreeNode[]) => {
    const flattenItems: TOCTreeNode[] = [];
    const iterateFn = (item: TOCTreeNode) => {
      flattenItems.push(item);
      if (item.children) item.children.forEach(iterateFn);
    };

    items.forEach(iterateFn);
    return flattenItems;
  };

  @Watch('titleQuery')
  watchStateHandler(newTitleQuery: string) {
    if (newTitleQuery) {
      /***
       * A recursive function that copies the tree, but only retaining children that have a deeper match
       * When a node matches, no deeper recursion is needed, as then the whole subtree below that node remains
       * included.
       * The map will map nodes to false when there is no match somewhere in the subtree rooted by that node.
       * These false values are then eliminated by filter(Boolean)
       * */

      // @ts-ignore
      const filterTree = (nodes, cb) => {
        return nodes
          .map((node: TOCTreeNode) => {
            if (cb(node)) return node;
            const children = filterTree(node.children || [], cb);
            return children.length && { ...node, children };
          })
          .filter(Boolean);
      };

      const filteredItems = [...filterTree(this.items, (node: TOCTreeNode) => node.title.toLowerCase().includes(newTitleQuery.toLowerCase()))];

      const flattenItems = this.flattenItems(filteredItems);

      this.itemsFromFilter = [...flattenItems];
    } else {
      this.itemsFromFilter = [];
    }
    this.expandAll();
  }

  render() {
    const renderTOCItem = (item: TOCTreeNode) => {
      // TODO: Investigate better to render dynamic slots
      const prepend = this.el.querySelector("[slot='prepend'] [slot='prepend']");
      const append = this.el.querySelector("[slot='append'] [slot='append']");

      const expandIcon = this.el.querySelector("[slot='expand-icon'] [slot='expand-icon']");
      const collapseIcon = this.el.querySelector("[slot='collapse-icon'] [slot='collapse-icon']");
      return (
        <la-toc-item
          item={item}
          itemsFromFilter={this.itemsFromFilter}
          prependHTML={prepend?.innerHTML}
          appendHTML={append?.innerHTML}
          expandIconHTML={expandIcon?.innerHTML}
          collapseIconHTML={collapseIcon?.innerHTML}
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
        <div class="toc-items">{this.items.map(item => renderTOCItem(item))}</div>
      </Host>
    );
  }
}
