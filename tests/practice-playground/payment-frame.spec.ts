import { expect, test } from '@playwright/test';

test.describe('Browser Contexts, Tabs, Windows, and Frames', () => {
  test('Render payment gateway iframe', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const heading = page.getByRole('heading', { name: 'Payment Gateway Frame' });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    expect(await page.locator('iframe').count()).toBeGreaterThan(0);
  });
});
