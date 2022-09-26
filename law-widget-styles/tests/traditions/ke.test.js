const {toMatchImageSnapshot} = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

const config = {
  comparisonMethod: 'pixelmatch',
  failureThreshold: 0.0,
};

describe('judgment', function () {
  test('judgment tables', async function () {
    await page.goto(`file://${__dirname}/ke-judgment-tables.html`, {waitUntil: 'networkidle0'});
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(config);
  });

  test('judgment header', async function () {
    await page.goto(`file://${__dirname}/ke-judgment-header.html`, {waitUntil: 'networkidle0'});
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(config);
  });

  test('inlines', async function () {
    await page.goto(`file://${__dirname}/ke-judgment-inlines.html`, {waitUntil: 'networkidle0'});
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot(config);
  });
});
