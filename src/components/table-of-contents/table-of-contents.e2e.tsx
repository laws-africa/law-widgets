import { newE2EPage } from '@stencil/core/testing';

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
];

describe('la-table-of-contents', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent(`<la-table-of-contents></la-table-of-contents>`);
    const component = await page.find('la-table-of-contents');
    expect(component).not.toBeNull();
  });

  it('should render correct table of contents html for the given set items prop', async () => {
    const page = await newE2EPage();
    await page.setContent(`<la-table-of-contents items='${JSON.stringify(sampleItems)}'></la-table-of-contents>`);
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

    expect(dataMatchesDOMNodes(renderedItems, sampleItems)).toBe(true);
  });

  it('should filter on mount', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<la-table-of-contents items='${JSON.stringify(sampleItems)}' title-filter='Item One'></la-table-of-contents>`
    );

    const renderedItems = await page.findAll('la-table-of-contents la-toc-item');
    expect(renderedItems[0].className.includes('excluded')).toBe(false);
    expect(renderedItems[1].className.includes('excluded')).toBe(true);
    expect(renderedItems[2].className.includes('excluded')).toBe(true);
  });

  it('should filter items on change of titleFilter prop', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<la-table-of-contents items='${JSON.stringify(sampleItems)}'></la-table-of-contents>`
    );

    await page.$eval('la-table-of-contents', (component: any) => {
      component.titleFilter = "Item Two";
    });
    await page.waitForChanges();

    const firstTestItems = await page.findAll('la-table-of-contents la-toc-item');
    expect(firstTestItems[0].className.includes('excluded')).toBe(true);
    expect(firstTestItems[1].className.includes('excluded')).toBe(false);
    expect(firstTestItems[2].className.includes('excluded')).toBe(true);

    await page.$eval('la-table-of-contents', (component: any) => {
      component.titleFilter = "Item Three";
    });
    await page.waitForChanges();
    expect(firstTestItems[0].className.includes('excluded')).toBe(true);
    expect(firstTestItems[1].className.includes('excluded')).toBe(true);
    expect(firstTestItems[2].className.includes('excluded')).toBe(false);
  });

  it('should render expanded items on mount', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<la-table-of-contents items='${JSON.stringify(sampleItems)}'></la-table-of-contents>`
    );
    const items = await page.findAll('la-table-of-contents la-toc-item');
    for (const item of items) {
      const expanded = await item.getProperty('expanded');
      expect(expanded).toBe(true);
    }
  });

  it('should rendered items when collapseAll method is called', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<la-table-of-contents items='${JSON.stringify(sampleItems)}'></la-table-of-contents>`
    );

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
        `<la-table-of-contents items='${JSON.stringify(sampleItems)}'>
                <span slot="prepend">Prepend</span>
                <span slot="append">Append</span>
              </la-table-of-contents>`
      );
    const expandedItems = await page.findAll('la-table-of-contents la-toc-item');
    for(const item of expandedItems) {
      const prependHtmlProp = await item.getProperty('prependHtml');
      await expect(prependHtmlProp).toBe("Prepend");
      const appendHtmlProp =  await item.getProperty('appendHtml');
      await expect(appendHtmlProp).toBe("Append");
      const prependContainer = await item.find(".content__action__prepend");
      expect(prependContainer.innerText).toBe("Prepend");
      const appendContainer = await item.find(".content__action__append");
      expect(appendContainer.innerText).toBe("Append");
    }
  })


})



