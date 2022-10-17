import { newE2EPage } from '@stencil/core/testing';

import data from '../table-of-contents/fixtures.json';

describe('la-table-of-contents-controller', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<la-table-of-contents-controller></la-table-of-contents-controller>');
    const component = await page.find('la-table-of-contents-controller');
    expect(component).not.toBeNull();
  });

  it('should render title filter search', async () => {
    const page = await newE2EPage();
    await page.setContent('<la-table-of-contents-controller></la-table-of-contents-controller>');
    const titleFilter = await page.find('la-table-of-contents-controller .search__input');
    expect(titleFilter).not.toBeNull();
  });

  it('should append css classes to title filter search based on titleFilterInputClasses prop set', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<la-table-of-contents-controller title-filter-input-classes="input-class"></la-table-of-contents-controller>'
    );
    const titleFilter = await page.find('la-table-of-contents-controller .search__input');
    expect(titleFilter.classList.contains('input-class')).toBe(true);
  });

  it('should set custom placeholder to title filter search based on titleFilterPlaceholder prop set', async () => {
    const page = await newE2EPage();
    const customPlaceholder = 'custom-placeholder';
    await page.setContent(
      `<la-table-of-contents-controller title-filter-placeholder='${customPlaceholder}'></la-table-of-contents-controller>`
    );
    const titleFilter = await page.find('la-table-of-contents-controller .search__input');
    const placeholder = await titleFilter.getProperty('placeholder');
    expect(placeholder).toBe(customPlaceholder);
  });

  it('should render correct items on change of title filter search', async () => {
    const page = await newE2EPage();
    await page.setContent(`
            <la-table-of-contents-controller
              items='${JSON.stringify(data.simple_toc_list)}'>
            </la-table-of-contents-controller>`);
    const titleFilter = await page.find('la-table-of-contents-controller .search__input');
    await titleFilter.type('Item One');

    // Input debounces
    await page.waitForTimeout(300);

    const items = await page.findAll('la-table-of-contents-controller la-table-of-contents la-toc-item');
    expect(items[0].className.includes('excluded')).toBe(false);
    expect(items[1].className.includes('excluded')).toBe(true);
    expect(items[2].className.includes('excluded')).toBe(true);
  });

  it('should render expand all button and collapse all buttons', async () => {
    const page = await newE2EPage();
    await page.setContent(`
            <la-table-of-contents-controller></la-table-of-contents-controller>`);
    const expandAllBtn = await page.find('.toggle__expand-all-btn');
    const collapseAllBtn = await page.find('.toggle__collapse-all-btn');
    expect(expandAllBtn).not.toBeNull();
    expect(collapseAllBtn).not.toBeNull();
  });

  it('should append correct css class to expand all and collapse all buttons based on props set', async () => {
    const page = await newE2EPage();
    const customExpandAllBtnClass = 'expand-all-btn';
    const customCollapseAllBtnClass = 'collapse-all-btn';
    await page.setContent(`
              <la-table-of-contents-controller
                  expand-all-btn-classes='${customExpandAllBtnClass}'
                  collapse-all-btn-classes='${customCollapseAllBtnClass}'>
              </la-table-of-contents-controller>`);
    const expandAllBtn = await page.find('.toggle__expand-all-btn');
    const collapseAllBtn = await page.find('.toggle__collapse-all-btn');
    expect(expandAllBtn.classList.contains(customExpandAllBtnClass)).toBe(true);
    expect(collapseAllBtn.classList.contains(customCollapseAllBtnClass)).toBe(true);
  });

  it('should collapse and expand all rendered items on click of collapse all and expand all', async () => {
    const page = await newE2EPage();
    await page.setContent(`
            <la-table-of-contents-controller
              items='${JSON.stringify(data.simple_toc_list)}'>
            </la-table-of-contents-controller>`);
    const expandAllBtn = await page.find('.toggle__expand-all-btn');
    const collapseAllBtn = await page.find('.toggle__collapse-all-btn');

    await collapseAllBtn.click();
    const collapsedItems = await page.findAll('la-toc-item');
    for (const item of collapsedItems) {
      const expanded = await item.getProperty('expanded');
      expect(expanded).toBe(false);
    }

    await expandAllBtn.click();
    const expandedItems = await page.findAll('la-toc-item');
    for (const item of expandedItems) {
      const expanded = await item.getProperty('expanded');
      expect(expanded).toBe(true);
    }
  });

  it('should not render clear filter button if prop `hideClearTitleFilterButton` is set to true', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<la-table-of-contents-controller hide-clear-title-filter-button></la-table-of-contents-controller>'
    );
    const input = await page.find('la-table-of-contents-controller .search__clear-btn');
    expect(input).toBe(null);
  });

  it('should clear title filter input on click of clear filter button', async () => {
    const page = await newE2EPage();
    await page.setContent(`
            <la-table-of-contents-controller></la-table-of-contents-controller>`);
    const input = await page.find('la-table-of-contents-controller .search__input');
    await input.type('Foo');
    const inputValue = await input.getProperty('value');
    await page.waitForTimeout(300);
    expect(inputValue).toBe('Foo');
    const clearButton = await page.find('la-table-of-contents-controller button.search__clear-btn');
    await clearButton.click();
    const updatedInput = await page.find('la-table-of-contents-controller .search__input');
    const updatedInputValue = await updatedInput.getProperty('value');

    expect(updatedInputValue).toBe('');
  });
});
