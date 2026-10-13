import { expect, test } from '../../fixtures/test';

test.describe('Advanced UI Elements and linked labs', () => {
  test('Render interactive SVG charts', async ({ practicePage }) => {
    await practicePage.goto();
    const bar = practicePage.advanced.interactiveSVGBarChartHeading;
    const pie = practicePage.advanced.interactiveSVGPieChartHeading;
    await bar.scrollIntoViewIfNeeded();
    await expect(bar).toBeVisible();
    await expect(pie).toBeVisible();
    const svg = practicePage.advanced.charts;
    expect(await svg.count()).toBeGreaterThan(0);
    await svg.last().hover();
  });
});
