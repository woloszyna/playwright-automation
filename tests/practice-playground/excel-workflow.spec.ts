import { expect, test } from '@playwright/test';

test.describe('File Handling', () => {
  test('Open the Excel playground workflow', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const open = page.getByTestId('btn-open-excel-playground');
    await expect(open).toBeVisible();
    const popupPromise = page.waitForEvent('popup');
    await open.click();
    const popup = await popupPromise;
    await expect(popup).toHaveURL(/excel/i);
  });
});
