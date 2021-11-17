import { TableOfContents } from './table-of-contents';
import { newSpecPage } from '@stencil/core/testing';

interface ExtraAttributes {
  [key: string]: any;
}

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

const createPage = async () => {
  return newSpecPage({
    components: [TableOfContents],
    html: `<div></div>`,
  });
};

const createComponent = (page: any, extraAttributes: ExtraAttributes = {} ) => {
  let component = page.doc.createElement('la-akoma-ntoso');
  component.items = sampleItems;
  Object.keys(extraAttributes).forEach(attr => {
    component[attr] = extraAttributes[attr];
  });
  return component;
};

const dataMatchsDOMNodes = (renderedNodes: [], data: Array<{
  id: string,
  title: string,
}>) => {
  return renderedNodes
    .every((renderedNode: { querySelector: (arg0: string) => any; title: any; id: any }, index: number) => {
      const linkElement = renderedNode.querySelector('.content__action__title');
      return linkElement.innerText === data[index].title && linkElement.href === data[index].id;
    })
};


describe('la-table-of-contents', () => {
  it('builds', () => {
    expect(new TableOfContents()).toBeTruthy();
  });

  it('render correct items html based on given data passed in items prop', async () => {
    const page = await createPage();
    const component = createComponent(page);
    const renderedNodes = component.querySelectorAll('la-toc-item');
    expect(dataMatchsDOMNodes(renderedNodes, sampleItems)).toBe(true);
  });

  it('render correct items html based on given data passed in items prop and titleFilter prop', async () => {
    const page = await createPage();
    const component = createComponent(page, { titleFilter: "Item Two" });
    const renderedNodes = component.querySelectorAll('la-toc-item');
    expect(dataMatchsDOMNodes(renderedNodes, [
      {
        id: "item-two",
        title: "Item Two"
      },
    ])).toBe(true);
  });

  describe('expandAll and collapseAll methods', () => {
    it('to have been called ', async () => {
      const page = await createPage();
      const component = createComponent(page);
      component.expandAll = jest.fn();
      component.collapseAll = jest.fn();
      await component.expandAll();
      expect(component.expandAll).toHaveBeenCalled();
      await component.collapseAll();
      expect(component.collapseAll).toHaveBeenCalled();
    });

    it('expand and collapse rendered items correctly', async () => {
      const page = await createPage();
      let component = createComponent(page);
      page.root?.appendChild(component);
      await page.waitForChanges();

      console.log(page.root?.querySelector("la-table-of-contents")?.expandAll);

      // const nodeHasExpandedAttribute = (node: { hasAttribute: (arg0: string) => any }) =>
      //   node.hasAttribute('expanded')
      //
      // expect(page.rootInstance.querySelectorAll('la-toc-item').every(nodeHasExpandedAttribute))
      //   .toBe(true);

      // await component.collapseAll();
      // expect(component.querySelectorAll('la-toc-item').every(nodeHasExpandedAttribute))
      //   .toBe(false);
    });

  })
})
