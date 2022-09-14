const {toMatchImageSnapshot} = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

const config = {
  comparisonMethod: 'pixelmatch',
  failureThreshold: 0.0,
  failureThresholdType: 'percent',
};

test('primary styling', async function () {
  await page.goto(`file://${__dirname}/primary-styling.html`, { waitUntil: 'networkidle0' });
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot(config);
});

test('attachments', async function () {
  await page.goto(`file://${__dirname}/attachments.html`, { waitUntil: 'networkidle0' });
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot(config);
});

test('tables', async function () {
  await page.goto(`file://${__dirname}/tables.html`, { waitUntil: 'networkidle0' });
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot(config);
});

test('footnotes', async function () {
  await page.goto(`file://${__dirname}/footnotes.html`, { waitUntil: 'networkidle0' });
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot(config);
});

test('quotes', async function () {
  await page.goto(`file://${__dirname}/quotes.html`, { waitUntil: 'networkidle0' });
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot(config);
});

test('lists', async function () {
  await page.goto(`file://${__dirname}/lists.html`, { waitUntil: 'networkidle0' });
  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot(config);
});
