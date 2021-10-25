import { Component, Prop, h, State, Element } from '@stencil/core';
import sampleData from "./sample-toc.json";

export interface TOCTreeNode {
  [key: string]: any // type for unknown keys.
  children?: TOCTreeNode[] // type for a known property.
}


@Component({
  tag: 'la-table-of-contents-controller',
})
export class TableOfContentsController {
  @Prop() items: TOCTreeNode[] = sampleData;
  @State() titleQuery: string = "";
  @Element() el!: HTMLElement;

  handleTitleChange (e: Event) { this.titleQuery = (e.target as HTMLInputElement).value;}

  async expandAll () {
    const tocElement = this.el.querySelector('la-table-of-contents');
    tocElement?.expandAll();
  }

  async collapseAll () {
    const tocElement = this.el.querySelector('la-table-of-contents');
    tocElement?.collapseAll();
  }

  render() {
    return (
      <div class="table-of-contents-controller">
        <input class="title-query-filter" onChange={this.handleTitleChange.bind(this)}/>
        <div class="table-of-contents-controller__toggle">
          <button type="button" onClick={this.expandAll.bind(this)}>Expand All</button>
          <button type="button" onClick={this.collapseAll.bind(this)}>Collapse All</button>
        </div>
        <div class="table-of-contents-controller__toc">
          <la-table-of-contents items={this.items} titleQuery={this.titleQuery}/>
        </div>
      </div>
    );
  }
}
