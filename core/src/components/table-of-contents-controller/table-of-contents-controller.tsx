// eslint-disable-next-line no-unused-vars
import { Component, Prop, h, Host, State, Element } from '@stencil/core';
import debounce from 'lodash/debounce';

import { PROVIDER } from '../../utils/services';
import type { TOCItem } from '../table-of-contents/table-of-contents';

@Component({
  tag: 'la-table-of-contents-controller',
  styleUrl: 'table-of-contents-controller.scss',
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
  @Prop() titleFilterPlaceholder = 'Search the table of contents';

  /**
   * If true, hides clear title filter button
   */
  @Prop() hideClearTitleFilterButton = false;

  /**
   * Additional classes added to title filter button
   */
  @Prop() titleFilterClearBtnClasses = '';

  /**
   * Additional classes added to Expand all button
   * */
  @Prop() expandAllBtnClasses = '';

  /**
   * Additional classes added to Collapse all button
   * */
  @Prop() collapseAllBtnClasses = '';

  /**
   * Button text for expand all button
   * */
  @Prop() expandAllBtnText = 'Expand all';

  /**
   * Button text for collapse all button
   * */
  @Prop() collapseAllBtnText = 'Collapse all';

  /** Should the table of contents be expanded when first created? */
  @Prop() expanded = true;

  /**
   * Additional CSS classes added to the search filter input
   * */
  @Prop() titleFilterInputClasses = '';

  /** Full Akoma Ntoso FRBR Expression URI to fetch TOC information for. Only used if `fetch` is set. */
  @Prop({ reflect: true, mutable: true }) frbrExpressionUri?: string;
  /** Fetch content from Laws.Africa services? Requires a Laws.Africa partnership and the frbrExpressionUri property to be set. */
  @Prop({ reflect: true, mutable: true }) fetch = false;
  /** Partner code to use when fetching content from Laws.Africa. Defaults to the `location.hostname`. */
  @Prop({ reflect: true, mutable: true }) partner?: string;
  /** Provider URL for fetching content (advanced usage only). */
  @Prop() provider = PROVIDER;

  @State() titleFilter = '';
  @Element() el!: HTMLElement;

  handleTitleChange = debounce((e: Event) => {
    this.titleFilter = (e.target as HTMLInputElement).value;
  }, 300);

  clearTitleFilter() {
    this.titleFilter = '';
  }

  async expandAll() {
    const tocElement = this.el.querySelector('la-table-of-contents');
    tocElement?.expandAll();
  }

  async collapseAll() {
    const tocElement = this.el.querySelector('la-table-of-contents');
    tocElement?.collapseAll();
  }

  render() {
    const renderHideClearFilterButton = () => {
      if (this.hideClearTitleFilterButton) {
        return null;
      }
      return (
        <button
          class={`search__clear-btn ${this.titleFilterClearBtnClasses}`}
          type="button"
          onClick={() => this.clearTitleFilter()}
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
            onInput={(e) => this.handleTitleChange(e)}
          />
          {renderHideClearFilterButton()}
        </div>
        <div class="toggle">
          <button
            type="button"
            class={`toggle__expand-all-btn ${this.expandAllBtnClasses}`}
            onClick={() => this.expandAll()}
          >
            {this.expandAllBtnText}
          </button>
          <button
            type="button"
            class={`toggle__collapse-all-btn ${this.collapseAllBtnClasses}`}
            onClick={() => this.collapseAll()}
          >
            {this.collapseAllBtnText}
          </button>
        </div>

        <la-table-of-contents
          items={this.items}
          titleFilter={this.titleFilter}
          fetch={this.fetch}
          provider={this.provider}
          partner={this.partner}
          frbr-expression-uri={this.frbrExpressionUri}
          expanded={this.expanded}
        >
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
