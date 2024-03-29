// eslint-disable-next-line no-unused-vars
import type { EventEmitter } from '@stencil/core';
import { Component, Prop, h, Host, Event } from '@stencil/core';

import type { TOCItem } from '../table-of-contents/table-of-contents';

@Component({
  tag: 'la-toc-item',
  styleUrl: 'toc-item.scss',
})
export class TocItem {
  /**
   * Item used to build the table of contents
   * */
  @Prop() item: TOCItem = {};

  /**
   * Array of items filtered by titleQuery used in la-toc-item to determine with item is shown or not
   * */
  @Prop() filteredItems: Set<TOCItem> | null = null;

  /**
   * HTML displayed before item title
   * */
  @Prop() prependHtml = '';

  /**
   * HTML displayed after item title
   * */
  @Prop() appendHtml = '';

  /**
   * HTML displayed in toggle button when item is expanded
   * */
  @Prop() expandIconHtml = '';

  /**
   * HTML displayed in toggle button when item is not expanded
   * */
  @Prop() collapseIconHtml = '';

  /**
   * If true, `item` `children`, and the collapsed icon are shown but expanded icon is hidden. If false, the `item`
   * `children` and collapsed icon are hidden but the expanded icon is show
   * */
  @Prop({ reflect: true, mutable: true }) expanded = true;

  root: HTMLElement | undefined;

  toggle() {
    this.expanded = !this.expanded;
  }

  @Event({
    eventName: 'itemRendered',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  itemRendered!: EventEmitter;

  @Event({
    eventName: 'itemTitleClicked',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  itemTitleClicked!: EventEmitter;

  componentDidRender() {
    this.itemRendered.emit();
  }

  onItemTitleClick = (e: any) => {
    this.itemTitleClicked.emit(e);
  };

  render() {
    const isParent = !!this.item.children?.length;
    const showItem = !this.filteredItems || this.filteredItems.has(this.item);
    const href = this.item.href || `#${this.item.id || ''}`;

    const renderToggleBtnInner = () => {
      if (this.expanded) {
        return this.collapseIconHtml ? <span innerHTML={this.collapseIconHtml}></span> : <span>▼</span>;
      }
      return this.expandIconHtml ? <span innerHTML={this.expandIconHtml}></span> : <span>►</span>;
    };

    return (
      <Host {...(isParent ? { parent: isParent } : {})} class={`${!showItem ? 'excluded' : ''}`}>
        <div class="indented">
          {isParent ? (
            <div class="indented__toggle-btn" role="button" onClick={() => this.toggle()}>
              {renderToggleBtnInner()}
            </div>
          ) : null}
        </div>

        <div class="content">
          <div class="content__action">
            {this.prependHtml ? <div class="content__action__prepend" innerHTML={this.prependHtml}></div> : null}
            <a href={href} class="content__action__title" onClick={this.onItemTitleClick}>
              {this.item.title}
            </a>
            {this.appendHtml ? <div class="content__action__append" innerHTML={this.appendHtml}></div> : null}
          </div>
          <div class="content__children">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
