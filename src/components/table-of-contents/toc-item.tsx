import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';

//TODO: Integrate type item

// interface ItemShape {
//   title?: string,
//   selected?: boolean,
//   children?: Array<ItemShape>,
//   index?: number
// }

@Component({
  tag: 'la-toc-item',
})
export class TocItem {
  @Prop() item: any = {} ;
  @Prop() itemsFromFilter: [] = []

  @State() expanded: boolean = false;
  @Event({
    eventName: 'todoCompleted',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) todoCompleted: EventEmitter<any> | undefined;

  todoCompletedHandler() {
    // @ts-ignore
    this.todoCompleted.emit(this.item);
  }

  private toggle = () => this.expanded = !this.expanded;

  render() {
    const isParent = this.item.children && this.item.children.length;
    const showItem = (() => {
      // Show everything because search field is empty
      if (!this.itemsFromFilter.length) {
        return true;
      }
      // @ts-ignore
      return this.itemsFromFilter.length && this.itemsFromFilter.some(item => item.title === this.item.title);
    })()

    return (
      <div class="toc-item" style={{
        display: showItem ? 'block' : 'none'
      }}>
        <div class="toc-item__indented">
          {isParent ?
            <button type="button" onClick={this.toggle}>
              {this.expanded ? "+" : "-"}
            </button> : null}
        </div>

        <div class="toc-item__content">
          <div class="toc-item__content__action">
            <button type="button"
                    class="toc-item__content__action__btn"
                    onClick={() => this.todoCompletedHandler()}
            >
              {this.item.title}
            </button>
            <div class="right-icon"></div>
          </div>
          <div class="toc-item__content__children" style={{
            display: this.expanded ? 'none' : 'block'
          }}>
            {this.item.children && this.item.children.length ?
              this.item.children.map((item: Object) => <la-toc-item item={item} />)
              : null}
          </div>
        </div>
      </div>
    );
  }
}
