import { Component, Prop, h, Host, State, Element, } from '@stencil/core';
import { TOCItem } from '../table-of-contents/table-of-contents';
import debounce from 'lodash/debounce';

@Component({
  tag: 'la-table-of-contents-controller',
})
export class TableOfContentsController {
  /**
   * An array of items used to build the table of contents. Each item must have a `title` attribute
   * (which may be `null`), and a `children` attribute (which may be `null`).
   * */
  @Prop() items: TOCItem[] = [];

  /**
   * Placeholder for search title filter
   * */
  @Prop() titleFilterPlaceholder: string = "Search by title";

  /**
   * Additional classes added to Expand all button
   * */
  @Prop() expandAllBtnClasses: string = "";

  /**
   * Additional classes added to Collapse all button
   * */
  @Prop() collapseAllBtnClasses: string = "";

  /**
   * Additional CSS classes added to the expand/collapse button of a `la-toc-item`
   * */
  @Prop() toggleButtonClasses: string = "";

  /**
   * Additional CSS classes added to the clear button
   * */
  @Prop() clearButtonClasses: string = "";

  @State() titleFilter: string = "";
  @Element() el!: HTMLElement;

  handleTitleChange = debounce((e: Event) => {
    this.titleFilter = (e.target as HTMLInputElement).value;
  }, 300)

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
                 onInput={e => this.handleTitleChange(e)}/>
          <button type="button"
                  class={`search__clear-button ${this.clearButtonClasses}`}
                  onClick={() => this.clearQuery()}>
            Clear
          </button>
        </div>
        <div class="toggle">
          <button type="button"
                  class={`toggle__expand-all-btn ${this.expandAllBtnClasses}`}
                  onClick={() => this.expandAll()}
          >
            Expand All
          </button>
          <button type="button"
                  class={`toggle__collapse-all-tbn ${this.collapseAllBtnClasses}`}
                  onClick={() => this.collapseAll()}
          >
            Collapse All
          </button>
        </div>

        <la-table-of-contents
          items={this.items}
          titleFilter={this.titleFilter}
          toggleButtonClasses={this.toggleButtonClasses}
        >
          <span slot="append"><slot name="append"></slot></span>
          <span slot="prepend"><slot name="prepend"></slot></span>
          <span slot="expand-icon"><slot name="expand-icon"></slot></span>
          <span slot="collapse-icon"><slot name="collapse-icon"></slot></span>
        </la-table-of-contents>
      </Host>
    );
  }
}
