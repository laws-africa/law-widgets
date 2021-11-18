import { TableOfContentsController } from './table-of-contents-controller';
import { newSpecPage } from '@stencil/core/testing';
import { TableOfContents } from '../table-of-contents/table-of-contents';
import { TocItem } from '../toc-item/toc-item';
import { h } from '@stencil/core';

const sampleItems  = [
  {
    id: "item-one",
    title: "Item One",
  },
  {
    id: "item-two",
    title: "Item Two"
  },
  {
    id: "item-three",
    title: "Item Three"
  }
]

describe('la-table-of-contents', () => {
  it('builds', () => {
    expect(new TableOfContentsController()).toBeTruthy();
  });
  describe('search input', () => {
    it('renders', async () => {
      const page = await newSpecPage({
        components: [TableOfContentsController, TableOfContents, TocItem],
        template: () => (<la-table-of-contents-controller items={sampleItems}></la-table-of-contents-controller>)
      });
      expect(page.root?.querySelector('.search__input')).toBeTruthy();
    });
    it('input changed', async () => {
      const page = await newSpecPage({
        components: [TableOfContentsController, TableOfContents, TocItem],
        template: () => (<la-table-of-contents-controller items={sampleItems}></la-table-of-contents-controller>)
      });
      await page.waitForChanges();
      page.rootInstance.handleTitleChange = jest.fn();
      const input: HTMLInputElement | undefined | null = page.root?.querySelector('.search__input');
      if(input) {
        input.value = "Item Two"
        input.dispatchEvent(new Event('input' ));
      }
      await page.waitForChanges();
      console.log(page.root?.outerHTML)
      expect(jest.fn()).toHaveBeenCalled();
    })
  })
});
