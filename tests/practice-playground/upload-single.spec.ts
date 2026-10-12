import { expect, test } from '@playwright/test';

test.describe('File Handling', () => {
  test('Upload a single file and reset selection', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const file = page.locator('#upload-single');
    await file.setInputFiles({ name: 'sample.txt', mimeType: 'text/plain', buffer: Buffer.from('sample content') });
    await expect(file).toHaveValue(/sample\.txt$/);
    await page.getByTestId('btn-reset-single').click();
    await expect(file).toHaveValue('');
  });
});
