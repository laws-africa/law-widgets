import { Component, Prop, h, Listen } from '@stencil/core';
import sampleData from './sample-toc.json';

@Component({
  tag: 'la-table-of-contents',
})
export class TableOfContents {
  // @ts-ignore
  @Prop() items: [] = sampleData;
  @Prop() itemsRenderFromFilter: [] = []

  @Listen('titleClick')
  titleClick(event: CustomEvent) {
    console.log(event.detail)
  }
  render() {
    return (
      <div class="la-table-of-content">
        <div class="la-table-of-content__items">
          {this.items.map(item =>
            <la-toc-item
              item={item}
              items-from-filter={this.itemsRenderFromFilter}
            />
          )}
        </div>
      </div>
    );
  }
}
