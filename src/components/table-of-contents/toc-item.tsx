import { Component, Prop, h, State, Event, EventEmitter, Method } from '@stencil/core';
import { TOCTreeNode } from '../table-of-contents-controller/table-of-contents-controller';

@Component({
  tag: 'la-toc-item',
})
export class TocItem {
  @Prop() item: TOCTreeNode = {} ;
  @Prop() itemsFromFilter: TOCTreeNode[] = []

  @State() expanded: boolean = false;
  @Event({
    eventName: 'title-clicked-bubble',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) titleClicked: EventEmitter<TOCTreeNode> | undefined;

  onTitleClick() {
    // @ts-ignore
    this.titleClicked.emit(this.item);
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
    const showItem = (() => {
      // Show everything because search field is empty
      if (!this.itemsFromFilter.length) {
        return true;
      }
      return this.itemsFromFilter.length && this.itemsFromFilter.some(item => item.title === this.item.title);
    })()

    return (
      <div class="toc-item" style={{
        display: showItem ? 'block' : 'none'
      }}>
        <div class="toc-item__indented">
          {isParent ?
            <button type="button" onClick={this.toggle.bind(this)}>
              {this.expanded ? "-" : "+"}
            </button> : null}
        </div>

        <div class="toc-item__content">
          <div class="toc-item__content__action">
            <a href={this.item.id}
                    class="toc-item__content__action__btn"
                    onClick={this.onTitleClick.bind(this)}
            >
              {this.item.title}
            </a>
            <div class="right-icon"></div>
          </div>
          <div class="toc-item__content__children" style={{
            display: this.expanded ? 'block' : 'none'
          }}>
            {this.item.children && this.item.children.length ?
              this.item.children
                .map((item: TOCTreeNode) =>
                  <la-toc-item
                    item={item}
                    itemsFromFilter={this.itemsFromFilter}
                  />
                )
              : null}
          </div>
        </div>
      </div>
    );
  }
}
