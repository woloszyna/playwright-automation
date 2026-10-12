import { expect, test } from '@playwright/test';

test.describe('Browser Contexts, Tabs, Windows, and Frames', () => {
  test('Inspect embedded frames', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const heading = page.getByRole('heading', { name: 'Frame Counting' });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    await expect(page.locator('iframe').first()).toBeAttached();
    expect(await page.locator('iframe').count()).toBeGreaterThan(0);
  });
});
