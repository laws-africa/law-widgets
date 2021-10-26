import { Component, Prop, h, Host, State, Element, } from '@stencil/core';
import sampleData from "./sample-toc.json";
import { TOCTreeNode } from '../table-of-contents/table-of-contents';

@Component({
  tag: 'la-table-of-contents-controller',
})
export class TableOfContentsController {
  /**
   * An array of items used to build the table of contents
   * */
  @Prop() items: TOCTreeNode[] = sampleData;

  /**
   * Placeholder for search title filter
   * */
  @Prop() titleFilterPlaceholder: string = "Search by title";

  @State() titleFilter: string = "";
  @Element() el!: HTMLElement;

  handleTitleChange (e: Event) {
    this.titleFilter = (e.target as HTMLInputElement).value;
  }

  clearQuery () {
    this.titleFilter = "";
  }

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
      <Host>
        <div class="search">
          <input class="search__input"
                 value={this.titleFilter}
                 placeholder={this.titleFilterPlaceholder}
                 onChange={e => this.handleTitleChange(e)}/>
          <button type="button"
                  class="search__clear-button"
                  onClick={() => this.clearQuery()}>
            Clear
          </button>
        </div>
        <div class="toggle">
          <button type="button"
                  class="toggle__expand-all-btn"
                  onClick={() => this.expandAll()}
          >
            Expand All
          </button>
          <button type="button"
                  class="toggle__collapse-all-tbn"
                  onClick={() => this.collapseAll()}
          >
            Collapse All
          </button>
        </div>

        <la-table-of-contents items={this.items} titleFilter={this.titleFilter}>
          <span slot="append"><slot name="append"></slot></span>
          <span slot="prepend"><slot name="prepend"></slot></span>
          <span slot="expand-icon"><slot name="expand-icon"></slot></span>
          <span slot="collapse-icon"><slot name="collapse-icon"></slot></span>
        </la-table-of-contents>
      </Host>
    );
  }
}
