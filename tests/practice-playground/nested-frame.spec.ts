import { expect, test } from '@playwright/test';

test.describe('Browser Contexts, Tabs, Windows, and Frames', () => {
  test('Load the complaint form in its frame', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const frame = page.locator('#frame-support');
    await expect(frame).toBeHidden();
    await page.getByTestId('btn-load-support').click();
    await expect(frame).toBeVisible();
  });
});
