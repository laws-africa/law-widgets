import { Component, Prop, h, State, Watch, Element } from '@stencil/core';
import sampleData from "./sample-toc.json";


//TODO: Incorporate types PROPERLY!!!
type ItemShape =  {
  title: string,
  selected: boolean,
  children?: [],
  index: number,
} & { [key: string]: unknown }


@Component({
  tag: 'la-table-of-contents-controller',
})
export class TableOfContentsController {
  @Prop() items: any[] = sampleData;
  @State() titleQuery: string = "";
  @State() itemsFromFilter: ItemShape[] = [];
  @Element() el!: HTMLElement;

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
        return nodes.map((node: ItemShape) => {
          if (cb(node)) return node;
          const children = filterTree(node.children || [], cb);
          return children.length && { ...node, children };
        }).filter(Boolean);
      };

      const filteredItems = [...filterTree(this.items, (node: ItemShape) =>
        node.title.toLowerCase().includes(newTitleQuery.toLowerCase()))];

      const flattenItems = this.flattenItems(filteredItems);

      this.itemsFromFilter = [...flattenItems];
    } else {
      this.itemsFromFilter = [];
    }
    this.expandAll();
  }

  flattenItems = (items: Array<ItemShape>) => {
    const flattenItems:Array<ItemShape> = [];
    const iterateFn = (item:ItemShape) => {
      flattenItems.push(item);
      if (item.children) item.children.forEach(iterateFn);
    };

    items.forEach(iterateFn);
    return flattenItems;
  }

  handleTitleChange = (e: Event) => { this.titleQuery = (e.target as HTMLInputElement).value;}

  expandAll = () => (async () => {
    await customElements.whenDefined('la-table-of-contents');
    const tocElement = this.el.querySelector('la-table-of-contents');
    // @ts-ignore
    await tocElement.expandAll();
  })()

  collapseAll = () => (async () => {
    await customElements.whenDefined('la-table-of-contents');
    const tocElement = this.el.querySelector('la-table-of-contents');
    // @ts-ignore
    await tocElement.collapseAll();
  })()

  render() {
    return (
      <div class="table-of-contents-controller">
        <input class="title-query-filter" onChange={this.handleTitleChange}/>
        <div class="table-of-contents-controller__toggle">
          <button type="button" onClick={this.expandAll}>Expand All</button>
          <button type="button" onClick={this.collapseAll}>Collapse All</button>
        </div>
        <div class="table-of-contents-controller__toc">
          <la-table-of-contents
            items={this.items}
            itemsFromFilter={this.itemsFromFilter}
          />
        </div>
      </div>
    );
  }
}
