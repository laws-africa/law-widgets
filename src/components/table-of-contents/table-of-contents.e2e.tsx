import { newE2EPage } from '@stencil/core/testing';
import data from './fixtures.json';

const onlyShowsCertainItem = (items: any[], itemToShowIndex: number) => {
  const itemToShow = items[itemToShowIndex];
  const excludedItems = items.filter((_, index) => index !== itemToShowIndex);
  return !itemToShow.className.includes('excluded') && excludedItems.every(item => item.className.includes('excluded'));
};

describe('la-table-of-contents', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent(`<la-table-of-contents></la-table-of-contents>`);
    const component = await page.find('la-table-of-contents');
    expect(component).not.toBeNull();
  });

  it('should render correct table of contents html for the given set items prop', async () => {
    const page = await newE2EPage();
    await page.setContent(`<la-table-of-contents items='${JSON.stringify(data.simple_toc_list)}'></la-table-of-contents>`);
    const renderedItems = await page.findAll('la-table-of-contents la-toc-item .content__action__title');

    const dataMatchesDOMNodes = (
      items: any[],
      data: Array<{
        id: string;
        title: string;
      }>,
    ) => {
      return items.every((item: { innerText: string; href: string }, index: number) => {
        return item.innerText === data[index].title;
      });
    };

    expect(dataMatchesDOMNodes(renderedItems, data.simple_toc_list)).toBe(true);
  });

  it('should filter on mount', async () => {
    const page = await newE2EPage();
    await page.setContent(`<la-table-of-contents items='${JSON.stringify(data.simple_toc_list)}' title-filter='Item One'></la-table-of-contents>`);

    const renderedItems = await page.findAll('la-table-of-contents la-toc-item');
    expect(onlyShowsCertainItem(renderedItems, 0)).toBe(true);
  });

  it('should filter items on change of titleFilter prop', async () => {
    const page = await newE2EPage();
    await page.setContent(`<la-table-of-contents items='${JSON.stringify(data.simple_toc_list)}'></la-table-of-contents>`);

    await page.$eval('la-table-of-contents', (component: any) => {
      component.titleFilter = 'Item Two';
    });
    await page.waitForChanges();

    const firstTestItems = await page.findAll('la-table-of-contents la-toc-item');
    expect(onlyShowsCertainItem(firstTestItems, 1)).toBe(true);

    await page.$eval('la-table-of-contents', (component: any) => {
      component.titleFilter = 'Item Three';
    });
    await page.waitForChanges();
    const secondTestItems = await page.findAll('la-table-of-contents la-toc-item');
    expect(onlyShowsCertainItem(secondTestItems, 2)).toBe(true);
  });

  it('should show all items when clearing titleFilter prop', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <la-table-of-contents items='${JSON.stringify(data.simple_toc_list)}'
                            titleFilter='Item One'>
      </la-table-of-contents>
    `);
    await page.$eval('la-table-of-contents', (component: any) => {
      component.titleFilter = "";
    });
    await page.waitForChanges();
    const items = await page.findAll('la-table-of-contents la-toc-item');
    expect(items.every(node => node.classList.contains('excluded'))).toBe(false);
  });

  it('should have filtering that is case insensitive', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <la-table-of-contents items='${JSON.stringify(data.simple_toc_list)}'
                            titleFilter='Item One'>
      </la-table-of-contents>
    `);

    await page.$eval('la-table-of-contents', (component: any) => {
      component.titleFilter = "ITEM ONE";
    });
    await page.waitForChanges();
    const itemsFromUppercase = await page.findAll('la-table-of-contents la-toc-item');
    expect(onlyShowsCertainItem(itemsFromUppercase, 0)).toBe(true);

    await page.$eval('la-table-of-contents', (component: any) => {
      component.titleFilter = "ITEm ONe";
    });
    await page.waitForChanges();
    const itemsFromMixedCase = await page.findAll('la-table-of-contents la-toc-item');
    expect(onlyShowsCertainItem(itemsFromMixedCase, 0)).toBe(true);
  });

  it('should filter items correctly when titleFilter prop has leading or trailing spaces', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <la-table-of-contents items='${JSON.stringify(data.simple_toc_list)}'
                            title-filter='Item One   '>
      </la-table-of-contents>
    `);
    const itemsFromTrailingSpace = await page.findAll('la-table-of-contents la-toc-item');
    expect(onlyShowsCertainItem(itemsFromTrailingSpace, 0)).toBe(true);

    await page.$eval('la-table-of-contents', (component: any) => {
      component.titleFilter = '   Item One'
    });

    const itemsFromLeadingSpaces = await page.findAll('la-table-of-contents la-toc-item');
    expect(onlyShowsCertainItem(itemsFromLeadingSpaces, 0)).toBe(true);
  })


  it('should render expanded items on mount', async () => {
    const page = await newE2EPage();
    await page.setContent(`<la-table-of-contents items='${JSON.stringify(data.simple_toc_list)}'></la-table-of-contents>`);
    const items = await page.findAll('la-table-of-contents la-toc-item');
    for (const item of items) {
      const expanded = await item.getProperty('expanded');
      expect(expanded).toBe(true);
    }
  });

  it('should have all items without expanded attribute when collapseAll method is called', async () => {
    const page = await newE2EPage();
    await page.setContent(`<la-table-of-contents items='${JSON.stringify(data.simple_toc_list)}'></la-table-of-contents>`);

    const component = await page.find('la-table-of-contents');
    await component.callMethod('collapseAll');
    await page.waitForChanges();
    const collapsedItems = await page.findAll('la-table-of-contents la-toc-item');
    for (const item of collapsedItems) {
      const expanded = await item.getProperty('expanded');
      expect(expanded).toBe(false);
    }
  });

  it('should correctly render prepend and append content based on slots set', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<la-table-of-contents items='${JSON.stringify(data.simple_toc_list)}'>
                <span slot='prepend'>Prepend</span>
                <span slot='append'>Append</span>
              </la-table-of-contents>`,
    );
    const expandedItems = await page.findAll('la-table-of-contents la-toc-item');
    for (const item of expandedItems) {
      const prependHtmlProp = await item.getProperty('prependHtml');
      await expect(prependHtmlProp).toBe('Prepend');
      const appendHtmlProp = await item.getProperty('appendHtml');
      await expect(appendHtmlProp).toBe('Append');
      const prependContainer = await item.find('.content__action__prepend');
      expect(prependContainer.innerText).toBe('Prepend');
      const appendContainer = await item.find('.content__action__append');
      expect(appendContainer.innerText).toBe('Append');
    }
  });
});
