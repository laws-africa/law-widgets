import { Component, Prop, h, Listen, Element, Method } from '@stencil/core';

@Component({
  tag: 'la-table-of-contents',
})
export class TableOfContents {
  @Prop() items: any[] = [];
  @Prop() itemsFromFilter: any[] = []
  @Element() el!: HTMLElement;

  @Listen('titleClicked')
  titleClick(event: CustomEvent) {
    console.log(event.detail)
  }

  @Method()
  async expandAll() {
    customElements.whenDefined('la-toc-item')
      .then(() => {
        Promise.all([...this.el.querySelectorAll('la-toc-item')]
          .map(node => node.expand()))
      });
  }
  @Method()
  async collapseAll() {
    customElements.whenDefined('la-toc-item')
      .then(() => {
        Promise.all([...this.el.querySelectorAll('la-toc-item')]
          .map(node => node.collapse()))
      });
  }

  render() {
    return (
      <div class="la-table-of-content">
        <div class="la-table-of-content__items">
          {this.items.map((item) =>
            <la-toc-item
              item={item}
              itemsFromFilter={this.itemsFromFilter}
            />
          )}
        </div>
      </div>
    );
  }
}
