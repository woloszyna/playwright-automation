import { expect, test } from '@playwright/test';

test.describe('Advanced UI Elements and linked labs', () => {
  test('Render the interactive SVG world map', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const heading = page.getByRole('heading', { name: 'Interactive SVG World Map' });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    const section = page.locator('section').filter({ has: heading }).first();
    await expect(section).toBeVisible();
    expect(await section.locator('svg').count()).toBeGreaterThan(0);
  });
});
