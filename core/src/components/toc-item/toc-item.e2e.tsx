import { newE2EPage } from '@stencil/core/testing';
import data from '../table-of-contents/fixtures.json';

const props = {
  item: data.simple_toc_list[0]
};

describe('la-toc-item', () => {
  it('should trigger event itemTitleClicked on click of item title', async () => {
    const page = await newE2EPage();
    await page.setContent('<la-toc-item></la-toc-item>');
    const itemTitleClicked = await page.spyOnEvent('itemTitleClicked');
    await page.$eval('la-toc-item', (component: any, { item }: any) => {
      component.item = item;
    }, props);
    await page.waitForChanges();
    const tocItemTitle = await page.find('.content__action__title');
    await tocItemTitle.click();
    expect(itemTitleClicked).toHaveReceivedEvent();
  });
});
