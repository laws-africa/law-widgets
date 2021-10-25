import { Prop, h, Listen, Element, Method, Watch, State, Component, Event, EventEmitter } from '@stencil/core';
import { TOCTreeNode } from '../table-of-contents-controller/table-of-contents-controller';

@Component({
  tag: 'la-table-of-contents',
})

export class TableOfContents {
  @Prop() items: TOCTreeNode[] = [];
  @Prop() titleQuery: string = "";
  @State() itemsFromFilter: TOCTreeNode[] = [];

  @Element() el!: HTMLElement;

  @Event({
    eventName: 'title-clicked',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) titleClicked: EventEmitter<TOCTreeNode> | undefined;


  @Listen('title-clicked-bubble')
  handleTitleClicked(event: CustomEvent) { this.titleClicked?.emit(event) }

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
    const flattenItems:TOCTreeNode[] = [];
    const iterateFn = (item:TOCTreeNode) => {
      flattenItems.push(item);
      if (item.children) item.children.forEach(iterateFn);
    };

    items.forEach(iterateFn);
    return flattenItems;
  }

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
          return nodes.map((node: TOCTreeNode) => {
            if (cb(node)) return node;
            const children = filterTree(node.children || [], cb);
            return children.length && { ...node, children };
          }).filter(Boolean);
        };

      const filteredItems = [...filterTree(this.items, (node: TOCTreeNode) =>
        node.title.toLowerCase().includes(newTitleQuery.toLowerCase()))];

      const flattenItems = this.flattenItems(filteredItems);

      this.itemsFromFilter = [...flattenItems];
    } else {
      this.itemsFromFilter = [];
    }
    this.expandAll();
  }

  render() {
    return (
      <div class="la-table-of-content">
        <div class="la-table-of-content__items">
          {this.items.map((item) =>
            <la-toc-item
              item={item}
              itemsFromFilter={this.itemsFromFilter}
            />
          )}
        </div>
      </div>
    );
  }
}
