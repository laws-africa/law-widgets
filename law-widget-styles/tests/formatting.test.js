const fs = require('fs');
const path = require('path');

beforeEach(async () => {
  await page.setContent(`<div class="akoma-ntoso">
    <table id="normal"><tr><td>Default</td></tr></table>
    <table id="table" class="akn--text-small akn--text-justify akn--no-padding"><tr>
      <td id="inherited"><p class="akn--text-small" id="same">Same tier</p></td>
      <td id="override" class="akn--text-right akn--text-xsmall"><p id="paragraph" class="akn--text-left akn--text-normal">Normal</p></td>
      <td class="akn--text-xxsmall" id="smallest">Smallest</td>
    </tr></table>
    <p id="outside" class="akn--text-center akn--text-xsmall">Outside table</p>
  </div>`);
  await page.addStyleTag({content: fs.readFileSync(path.join(__dirname, '../css/law-widget-styles.css'), 'utf8')});
});

test('size tiers use document size, not the reduced ancestor size', async () => {
  const sizes = await page.evaluate(() => ['table', 'inherited', 'same', 'override', 'paragraph', 'smallest', 'outside']
    .map(id => getComputedStyle(document.getElementById(id)).fontSize));
  expect(sizes).toEqual(['12px', '12px', '12px', '10.5px', '15px', '9px', '10.5px']);
});

test('table alignment propagates, specific descendants override, default stays left', async () => {
  const values = await page.evaluate(() => ['#normal td', '#inherited', '#override', '#paragraph']
    .map(selector => getComputedStyle(document.querySelector(selector)).textAlign));
  expect(values).toEqual(['left', 'justify', 'right', 'left']);
});

test('zero padding is opt-in and does not remove borders', async () => {
  const values = await page.evaluate(() => ['#normal td', '#inherited'].map(selector => {
    const style = getComputedStyle(document.querySelector(selector));
    return [style.paddingLeft, style.paddingTop, style.borderLeftWidth];
  }));
  expect(values).toEqual([['5px', '5px', '1px'], ['0px', '0px', '1px']]);
});

test('every utility works at table, cell and paragraph levels with exact tokens', async () => {
  const actual = await page.evaluate(() => {
    const host = document.querySelector('.akoma-ntoso');
    const sizes = ['normal', 'small', 'xsmall', 'xxsmall'];
    const alignments = ['left', 'center', 'right', 'justify'];
    return ['table', 'td', 'p'].map(level => {
      return [...sizes, ...alignments, 'right-other'].map(value => {
        const table = document.createElement('table');
        table.innerHTML = '<tr><td><p>Text</p></td></tr>';
        const element = level === 'table' ? table : table.querySelector(level);
        element.className = `custom akn--text-${value} another`;
        host.append(table);
        const computed = getComputedStyle(table.querySelector('p'));
        const result = sizes.includes(value) ? computed.fontSize : computed.textAlign;
        table.remove();
        return result;
      });
    });
  });
  expect(actual).toEqual(Array(3).fill(['15px', '12px', '10.5px', '9px', 'left', 'center', 'right', 'justify', 'left']));
});

test('no-border on the table removes all borders; a cell flag has no standalone styling', async () => {
  const widths = await page.evaluate(() => {
    const host = document.querySelector('.akoma-ntoso');
    return [true, false].map(tableFlag => {
      const table = document.createElement('table');
      table.className = tableFlag ? 'custom akn--no-border' : 'custom';
      table.innerHTML = '<tr><th>Heading</th><td>Cell</td></tr>';
      if (!tableFlag) table.querySelector('td').classList.add('akn--no-border');
      host.append(table);
      const result = [table, ...table.querySelectorAll('th, td')].map(el => getComputedStyle(el).borderTopWidth);
      table.remove();
      return result;
    });
  });
  expect(widths).toEqual([['0px', '0px', '0px'], ['1px', '1px', '1px']]);
});
