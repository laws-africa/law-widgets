import { TableOfContentsController } from './table-of-contents-controller';
import { newSpecPage } from '@stencil/core/testing';
import { TableOfContents } from '../table-of-contents/table-of-contents';
import { TocItem } from '../toc-item/toc-item';
import { h } from '@stencil/core';

const sampleItems = [
  {
    id: 'item-one',
    title: 'Item One',
  },
  {
    id: 'item-two',
    title: 'Item Two',
  },
  {
    id: 'item-three',
    title: 'Item Three',
  },
];

export interface Props {
  [key: string]: any; // type for unknown keys.
}

const createPage = async (props: Props = {}) => {
  return await newSpecPage({
    components: [TableOfContentsController, TableOfContents, TocItem],
    template: () => <la-table-of-contents-controller {...props}></la-table-of-contents-controller>,
  });
}

describe('la-table-of-contents', () => {
  it('builds', () => {
    expect(new TableOfContentsController()).toBeTruthy();
  });
  describe('search input', () => {
    it('renders', async () => {
      const page = await createPage();
      expect(page.root?.querySelector('.search__input')).toBeTruthy();
    });
    it('input changed', async () => {
      const page = await newSpecPage({
        components: [TableOfContentsController],
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
      // expect(jest.fn()).toHaveBeenCalled();
    });
  })

  it('custom title filter placeholder is set', async () => {
    const placeholder = "Custom placeholder text";
    const page = await createPage({ titleFilterPlaceholder: placeholder });
    await page.waitForChanges();
    const input: HTMLInputElement | undefined | null = page.root?.querySelector('.search__input');
    expect(input && input.placeholder).toBe(placeholder)
  })

  it('custom css classes applied to expand all button with expandAllBtnClasses prop set', async () => {
    const cssClass = "custom-button-class"
    const page = await createPage({ expandAllBtnClasses: cssClass })
    await page.waitForChanges();
    const expandAllBtn: HTMLButtonElement | undefined | null = page.root?.querySelector('.toggle__expand-all-btn');
    expect(expandAllBtn && expandAllBtn.classList.contains(cssClass)).toBe(true);
  })

  it('custom css classes applied to collapse all button with collapseAllBtnClasses prop set', async () => {
    const cssClass = "custom-button-class"
    const page = await createPage({ collapseAllBtnClasses: cssClass })
    await page.waitForChanges();
    const collapseAllBtn: HTMLButtonElement | undefined | null = page.root?.querySelector('.toggle__collapse-all-btn');
    expect(collapseAllBtn && collapseAllBtn.classList.contains(cssClass)).toBe(true);
  });

  it('custom css classes applied to title filter search with searchFilterInputClasses prop set', async () => {
    const cssClass = "custom-button-class"
    const page = await createPage({ searchFilterInputClasses: cssClass })
    await page.waitForChanges();
    const input: HTMLInputElement | undefined | null = page.root?.querySelector('.search__input');
    expect(input && input.classList.contains(cssClass)).toBe(true);
  });
});
