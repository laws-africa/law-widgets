import { newE2EPage } from '@stencil/core/testing';

describe('la-gutter', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<la-gutter></la-gutter>');
    const component = await page.find('la-gutter');
    expect(component).not.toBeNull();
  });

  it('next first la-gutter-item should not have active as true but the second la-gutter-item should after navigateToNextItem is called', async () => {
    const page = await newE2EPage();
    await page.setContent(`
        <la-gutter>
          <la-gutter-item active id='first-item'>Item One</la-gutter-item>
          <la-gutter-item id='second-item'>Item Two</la-gutter-item>
          <la-gutter-item>Item Three</la-gutter-item>
        </la-gutter>
    `);

    const laGutter = await page.find('la-gutter');
    const firstItem = await page.find('#first-item');
    const secondItem = await page.find('#second-item');
    await laGutter.callMethod('navigateToNextItem');
    await page.waitForChanges();
    const firstItemActiveState = await firstItem.getProperty('active');
    expect(firstItemActiveState).toBe(false);
    const secondItemActiveState = await secondItem.getProperty('active');
    expect(secondItemActiveState).toBe(true);
  });

  it('if last la-gutter-item is active and navigateToNextItem is called, first la-gutter-item should be active and rest is not', async () => {
    const page = await newE2EPage();
    await page.setContent(`
        <la-gutter>
          <la-gutter-item>Item One</la-gutter-item>
          <la-gutter-item>Item Two</la-gutter-item>
          <la-gutter-item active>Item Three</la-gutter-item>
        </la-gutter>
    `);

    const laGutter = await page.find('la-gutter');
    await laGutter.callMethod('navigateToNextItem');
    const firstItem = await page.find('la-gutter la-gutter-item:first-child');
    const firstItemActiveState = await firstItem.getProperty('active');
    expect(firstItemActiveState).toBe(true);

    const lastItem = await page.find('la-gutter la-gutter-item:last-child');
    const lastItemActiveState = await lastItem.getProperty('active');
    expect(lastItemActiveState).toBe(false);
  });

  it('if second la-gutter-item is active and prevToNextItem is called, first la-gutter-item should be active and the rest is not', async () => {
    const page = await newE2EPage();
    await page.setContent(`
        <la-gutter>
          <la-gutter-item>Item One</la-gutter-item>
          <la-gutter-item active>Item Three</la-gutter-item>
        </la-gutter>
    `);

    const laGutter = await page.find('la-gutter');
    await laGutter.callMethod('navigateToPrevItem');
    const firstItem = await page.find('la-gutter la-gutter-item:first-child');
    const firstItemActiveState = await firstItem.getProperty('active');
    expect(firstItemActiveState).toBe(true);

    const lastItem = await page.find('la-gutter la-gutter-item:last-child');
    const lastItemActiveState = await lastItem.getProperty('active');
    expect(lastItemActiveState).toBe(false);
  });
});
