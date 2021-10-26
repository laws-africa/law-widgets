import { Component, Prop, h, Host, State, Element, Listen, Event, EventEmitter } from '@stencil/core';
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
  @Prop() titleFilterPlaceholder: string = "Search by title";
  @State() titleQuery: string = "";
  @Element() el!: HTMLElement;

  @Event({
    eventName: 'titleClicked',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) titleClicked: EventEmitter<TOCTreeNode> | undefined;

  handleTitleChange (e: Event) { this.titleQuery = (e.target as HTMLInputElement).value;}
  clearQuery () { this.titleQuery  = "" }

  async expandAll () {
    const tocElement = this.el.querySelector('la-table-of-contents');
    tocElement?.expandAll();
  }

  async collapseAll () {
    const tocElement = this.el.querySelector('la-table-of-contents');
    tocElement?.collapseAll();
  }

  @Event({
    eventName: 'tocControllerTitleClicked',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) tocControllerTitleClicked: EventEmitter<TOCTreeNode> | undefined;

  @Listen('tocTitleClicked')
  handleTitleClicked (event: CustomEvent) {
    this.tocControllerTitleClicked?.emit(event)
  }

  render() {
    return (
      <Host>
        <div class="search">
          <input class="search__input"
                 value={this.titleQuery}
                 placeholder={this.titleFilterPlaceholder}
                 onChange={this.handleTitleChange.bind(this)}/>
          <button type="button"
                  class="search__clear-button"
                  onClick={this.clearQuery.bind(this)}>
            Clear
          </button>
        </div>
        <div class="toggle">
          <button type="button"
                  class="toggle__expand-all-btn"
                  onClick={this.expandAll.bind(this)}
          >
            Expand All
          </button>
          <button type="button"
                  class="toggle__collapse-all-tbn"
                  onClick={this.collapseAll.bind(this)}
          >
            Collapse All
          </button>
        </div>

        <la-table-of-contents items={this.items} titleQuery={this.titleQuery}>
          <span slot="append"><slot name="append"></slot></span>
          <span slot="prepend"><slot name="prepend"></slot></span>
          <span slot="expand-icon"><slot name="expand-icon"></slot></span>
          <span slot="collapse-icon"><slot name="collapse-icon"></slot></span>
        </la-table-of-contents>
      </Host>
    );
  }
}
