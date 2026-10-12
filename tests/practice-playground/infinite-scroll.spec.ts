import { expect, test } from '@playwright/test';

test.describe('Dialogs & Interactions', () => {
  test('Open the infinite scroll playground', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const open = page.getByTestId('btn-open-infinite-scroll');
    await open.scrollIntoViewIfNeeded();
    await expect(open).toBeVisible();
    const popupPromise = page.waitForEvent('popup');
    await open.click();
    const popup = await popupPromise;
    await expect(popup).toHaveURL(/infinite-scroll\.html/);
  });
});
