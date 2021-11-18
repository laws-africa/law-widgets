import { TableOfContents } from './table-of-contents';
import { TocItem } from '../toc-item/toc-item';
import { newSpecPage } from '@stencil/core/testing';
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
const dataMatchsDOMNodes = (
  nodes: any[],
  data: Array<{
    id: string;
    title: string;
  }>,
) => {
  return nodes.every((node: { innerText: string; href: string }, index: number) => {
    return node.innerText === data[index].title && node.href.includes(data[index].id);
  });
};

describe('la-table-of-contents', () => {
  it('builds', () => {
    expect(new TableOfContents()).toBeTruthy();
  });
//
  it('render correct items html based on given data passed in items prop', async () => {
    const page = await newSpecPage({
      components: [TableOfContents, TocItem],
      template: () => (<la-table-of-contents items={sampleItems}></la-table-of-contents>)
    });
    const linkElements = page.root? [...page.root.querySelectorAll('la-toc-item .content__action__title')] : [];
    expect(dataMatchsDOMNodes(linkElements, sampleItems)).toBe(true);
  });

  it('expand and collapse rendered items correctly', async () => {
    const page = await newSpecPage({
      components: [TableOfContents, TocItem],
      template: () => (<la-table-of-contents items={sampleItems}></la-table-of-contents>)
    });
    await page.waitForChanges();
    await page.root?.expandAll();
    await page.waitForChanges();
    const nodeHasExpandedAttribute = (node: {
      expanded: any;
      hasAttribute: (arg0: string) => any }) => node.expanded;
    const expandedNodes = page.root ? [...page.root.querySelectorAll('la-toc-item')] : [];
    expect(expandedNodes.every(nodeHasExpandedAttribute))
      .toBe(true);
    await page.root?.collapseAll();
    await page.waitForChanges();
    const collapsedNodes = page.root ? [...page.root.querySelectorAll('la-toc-item')] : [];
    expect(collapsedNodes.every(nodeHasExpandedAttribute))
      .toBe(false);
  });
})
