import { newE2EPage } from '@stencil/core/testing';

describe('la-gutter', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<la-gutter></la-gutter>');
    const component = await page.find('la-gutter');
    expect(component).not.toBeNull();
  });

  it('first la-gutter-item should not have active as true but the second la-gutter-item should after activateNextItem is called', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <la-akoma-ntoso id="doc">
        <div id='#sect_1'>Lorem Ipsum</div>
        <div id='#sect_2'>Lorem Ipsum</div>
      </la-akoma-ntoso>
      <la-gutter akoma-ntoso="#doc">
        <la-gutter-item anchor="#sect_1" active>Comment</la-gutter-item>
        <la-gutter-item anchor="#sect_2">Comment</la-gutter-item>
      </la-gutter>
    `);

    const laGutter = await page.find('la-gutter');
    const firstItem = await page.find('la-gutter la-gutter-item:first-child');
    const secondItem = await page.find('la-gutter la-gutter-item:last-child');
    await laGutter.callMethod('activateNextItem');
    await page.waitForChanges();
    const firstItemActiveState = await firstItem.getProperty('active');
    expect(firstItemActiveState).toBe(false);
    const secondItemActiveState = await secondItem.getProperty('active');
    expect(secondItemActiveState).toBe(true);
  });

  it('if last la-gutter-item is active and activateNextItem is called, first la-gutter-item should be active and rest is not', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <la-akoma-ntoso id="doc">
        <div id='#sect_1'>Lorem Ipsum</div>
        <div id='#sect_2'>Lorem Ipsum</div>
      </la-akoma-ntoso>
      <la-gutter akoma-ntoso="#doc">
        <la-gutter-item anchor="#sect_1">Comment</la-gutter-item>
        <la-gutter-item anchor="#sect_2" active>Comment</la-gutter-item>
      </la-gutter>
    `);

    const laGutter = await page.find('la-gutter');
    await laGutter.callMethod('activateNextItem');
    const firstItem = await page.find('la-gutter la-gutter-item:first-child');
    const firstItemActiveState = await firstItem.getProperty('active');
    expect(firstItemActiveState).toBe(true);

    const lastItem = await page.find('la-gutter la-gutter-item:last-child');
    const lastItemActiveState = await lastItem.getProperty('active');
    expect(lastItemActiveState).toBe(false);
  });
  //
  it('if second la-gutter-item is active and prevToNextItem is called, first la-gutter-item should be active and the rest is not', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <la-akoma-ntoso id="doc">
        <div id='#sect_1'>Lorem Ipsum</div>
        <div id='#sect_2'>Lorem Ipsum</div>
      </la-akoma-ntoso>
      <la-gutter akoma-ntoso="#doc">
        <la-gutter-item anchor="#sect_1">Comment</la-gutter-item>
        <la-gutter-item anchor="#sect_2" active>Comment</la-gutter-item>
      </la-gutter>
    `);

    const laGutter = await page.find('la-gutter');
    await laGutter.callMethod('activatePrevItem');
    const firstItem = await page.find('la-gutter la-gutter-item:first-child');
    const firstItemActiveState = await firstItem.getProperty('active');
    expect(firstItemActiveState).toBe(true);

    const lastItem = await page.find('la-gutter la-gutter-item:last-child');
    const lastItemActiveState = await lastItem.getProperty('active');
    expect(lastItemActiveState).toBe(false);
  });
});
