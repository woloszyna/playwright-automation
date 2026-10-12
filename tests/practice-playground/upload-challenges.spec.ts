import { expect, test } from '@playwright/test';

test.describe('File Handling', () => {
  test('Use the hidden resume upload control', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    await page.getByRole('heading', { name: 'Upload Challenges' }).scrollIntoViewIfNeeded();
    const file = page.locator('#upload-hidden');
    await file.setInputFiles({ name: 'resume.pdf', mimeType: 'application/pdf', buffer: Buffer.from('%PDF-1.4 sample') });
    await expect(file).toHaveValue(/resume\.pdf$/);
    await page.getByTestId('btn-reset-hidden').click();
    await expect(file).toHaveValue('');
  });
});
