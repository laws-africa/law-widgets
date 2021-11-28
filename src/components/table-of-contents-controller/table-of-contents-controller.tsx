// eslint-disable-next-line no-unused-vars
import { Component, Prop, h, Host, State, Element } from '@stencil/core';
import { TOCItem } from '../table-of-contents/table-of-contents';
import debounce from 'lodash/debounce';

@Component({
  tag: 'la-table-of-contents-controller',
  styleUrl: 'table-of-contents-controller.scss'
})
export class TableOfContentsController {
  /**
   * JSON value of array of items or string value parsed to array of items used to build the table of contents. Each
   * item must have a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`).
   * */
  @Prop() items: TOCItem[] | string = [];

  /**
   * Placeholder for search title filter
   * */
  @Prop() titleFilterPlaceholder: string = 'Search the table of contents';

  /**
   * If true, hides clear title filter button
   */
  @Prop() hideClearTitleFilterButton: boolean = false;

  /**
   * Additional classes added to title filter button
   */
  @Prop() titleFilterClearBtnClasses: string = '';

  /**
   * Additional classes added to Expand all button
   * */
  @Prop() expandAllBtnClasses: string = '';

  /**
   * Additional classes added to Collapse all button
   * */
  @Prop() collapseAllBtnClasses: string = '';

  /**
   * Additional CSS classes added to the search filter input
   * */
  @Prop() titleFilterInputClasses: string = '';

  @State() titleFilter: string = '';
  @Element() el!: HTMLElement;

  handleTitleChange = debounce((e: Event) => {
    this.titleFilter = (e.target as HTMLInputElement).value;
  }, 300);

  clearTitleFilter () {
    this.titleFilter = '';
  }

  async expandAll () {
    const tocElement = this.el.querySelector('la-table-of-contents');
    tocElement?.expandAll();
  }

  async collapseAll () {
    const tocElement = this.el.querySelector('la-table-of-contents');
    tocElement?.collapseAll();
  }

  render () {
    const renderHideClearFilterButton = () => {
      if (this.hideClearTitleFilterButton) {
        return null;
      }
      return (
        <button class={`search__clear-btn ${this.titleFilterClearBtnClasses}`}
                type="button" onClick={() => this.clearTitleFilter()}
                disabled={!this.titleFilter}
        >
          <slot name="clear-title-filter-icon">✕</slot>
        </button>
      );
    };

    return (
      <Host>
        <div class="search">
          <input
            class={`search__input ${this.titleFilterInputClasses}`}
            value={this.titleFilter}
            placeholder={this.titleFilterPlaceholder}
            onInput={e => this.handleTitleChange(e)}
          />
          {renderHideClearFilterButton()}
        </div>
        <div class="toggle">
          <button type="button" class={`toggle__expand-all-btn ${this.expandAllBtnClasses}`} onClick={() => this.expandAll()}>
            Expand All
          </button>
          <button type="button" class={`toggle__collapse-all-btn ${this.collapseAllBtnClasses}`} onClick={() => this.collapseAll()}>
            Collapse All
          </button>
        </div>

        <la-table-of-contents items={this.items} titleFilter={this.titleFilter}>
          <span slot="append">
            <slot name="append"></slot>
          </span>
          <span slot="prepend">
            <slot name="prepend"></slot>
          </span>
          <span slot="expand-icon">
            <slot name="expand-icon"></slot>
          </span>
          <span slot="collapse-icon">
            <slot name="collapse-icon"></slot>
          </span>
        </la-table-of-contents>
      </Host>
    );
  }
}
