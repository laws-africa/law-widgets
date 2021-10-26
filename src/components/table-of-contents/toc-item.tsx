import { Component, Prop, h, State, Event, EventEmitter, Method, Host } from '@stencil/core';
import { TOCTreeNode } from '../table-of-contents-controller/table-of-contents-controller';

@Component({
  tag: 'la-toc-item',
  styleUrl: 'toc-item.scss'
})
export class TocItem {
  @Prop() item: TOCTreeNode = {} ;
  @Prop() itemsFromFilter: TOCTreeNode[] = []
  @Prop() prependHTML: string = ""
  @Prop() appendHTML: string = ""
  @Prop() expandIconHTML: string = ""
  @Prop() collapseIconHTML: string = ""

  @State() expanded: boolean = false;
  @Event({
    eventName: 'tocItemTitleClicked',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) tocItemTitleClicked: EventEmitter<TOCTreeNode> | undefined;

  onTitleClick() {
    this.tocItemTitleClicked?.emit(this.item);
  }

  @Method()
  async expand() {
    this.expanded = true;
  }

  @Method()
  async collapse() {
    this.expanded = false;
  }

  toggle () {
    this.expanded = !this.expanded;
  }

  render() {
    const isParent = this.item.children && this.item.children.length;
    const excludeItem = !(() => {
      // Show everything because search field is empty
      if (!this.itemsFromFilter.length) {
        return true;
      }
      return this.itemsFromFilter.length && this.itemsFromFilter.some(item => item.title === this.item.title);
    })();

    const renderToggleBtnInner = () => {
      if(this.expanded) {
        return this.collapseIconHTML ? <span innerHTML={this.collapseIconHTML}></span> : "-";
      }
      return this.expandIconHTML ? <span innerHTML={this.expandIconHTML}></span> : "+";
    }

    return (
      <Host class={`${this.expanded ? 'expanded' : ''} ${ excludeItem ? 'excluded' : ''}`}>
        <div class="indented">
          {isParent ?
            <button type="button" onClick={this.toggle.bind(this)}>
              {renderToggleBtnInner()}
            </button>
            : null}
        </div>

        <div class="content">
          <div class="content__action">
            {this.prependHTML ? <div class="content__action__prepend" innerHTML={this.prependHTML}></div> : null }
            <a href={`#${this.item.id}`}
                    class="content__action__title"
                    onClick={this.onTitleClick.bind(this)}
            >
              {this.item.title}
            </a>
            {this.appendHTML ? <div class="content__action__append" innerHTML={this.appendHTML}></div> : null }
          </div>
          <div class="content__children">
            {this.item.children && this.item.children.length ?
              this.item.children
                .map((item: TOCTreeNode) =>
                  <la-toc-item
                    item={item}
                    itemsFromFilter={this.itemsFromFilter}
                    prependHTML={this.prependHTML}
                    appendHTML={this.appendHTML}
                    expandIconHTML={this.expandIconHTML}
                    collapseIconHTML={this.collapseIconHTML}
                  >
                  </la-toc-item>
                )
              : null}
          </div>
        </div>
      </Host>
    );
  }
}
