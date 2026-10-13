import { expect, test } from '../../fixtures/test';

test.describe('File Handling', () => {
  test('Open the Excel playground workflow', async ({ page, practicePage }) => {
    await practicePage.goto();
    const open = practicePage.files.openExcelPlayground;
    await expect(open).toBeVisible();
    const popupPromise = page.waitForEvent('popup');
    await open.click();
    const popup = await popupPromise;
    await expect(popup).toHaveURL(/excel/i);
  });
});
