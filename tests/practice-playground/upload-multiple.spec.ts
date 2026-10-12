import { expect, test } from '@playwright/test';

test.describe('File Handling', () => {
  test('Upload multiple files', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const file = page.locator('#upload-multiple');
    await expect(file).toHaveAttribute('multiple', '');
    await file.setInputFiles([
      { name: 'first.txt', mimeType: 'text/plain', buffer: Buffer.from('first') },
      { name: 'second.txt', mimeType: 'text/plain', buffer: Buffer.from('second') },
    ]);
    await expect(file).toHaveValue(/first\.txt$/);
    await expect.poll(() => file.evaluate(input => (input as HTMLInputElement).files?.length)).toBe(2);
    await page.getByTestId('btn-reset-multiple').click();
    await expect(file).toHaveValue('');
  });
});
