import { expect, test } from '@playwright/test';

test.describe('Advanced UI Elements and linked labs', () => {
  test('Render interactive SVG charts', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const bar = page.getByRole('heading', { name: 'Interactive SVG Bar Chart' });
    const pie = page.getByRole('heading', { name: 'Interactive SVG Pie Chart' });
    await bar.scrollIntoViewIfNeeded();
    await expect(bar).toBeVisible();
    await expect(pie).toBeVisible();
    const svg = page.locator('svg');
    expect(await svg.count()).toBeGreaterThan(0);
    await svg.last().hover();
  });
});
