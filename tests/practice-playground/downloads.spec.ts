import { expect, test } from '@playwright/test';

test.describe('File Handling', () => {
  test('Download the course PDF', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const downloadLink = page.getByRole('link', { name: 'Download PDF', exact: true });
    await expect(downloadLink).toHaveAttribute('href', /\.pdf$/);
    const downloadPromise = page.waitForEvent('download');
    await downloadLink.click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/\.pdf$/i);
  });
});
