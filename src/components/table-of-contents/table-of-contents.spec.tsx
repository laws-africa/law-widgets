import { TableOfContents } from './table-of-contents';
import { newSpecPage } from '@stencil/core/testing';

const items  = [
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

const createComponent = (page: any) => {
  let component = page.doc.createElement('la-akoma-ntoso');
  component.items = items;
  return component;
};

describe('la-table-of-contents', () => {
  it('builds', () => {
    expect(new TableOfContents()).toBeTruthy();
  });

  it('render correct items html based on given data passed in items prop', async () => {
    const page = await createPage();
    const component = createComponent(page);
    const renderedNodes = component.querySelectorAll('la-toc-item');
    const rendersCorrectly = renderedNodes
      .every((renderedNode: { querySelector: (arg0: string) => any; title: any; id: any }, index: number) => {
        const linkElement = renderedNode.querySelector('.content__action__title');
        return linkElement.innerText === items[index].title && linkElement.href === items[index].id;
    });
    expect(rendersCorrectly).toBe(true);
  })
})
