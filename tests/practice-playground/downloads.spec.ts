import { expect, test } from '../../fixtures/test';

test.describe('File Handling', () => {
  test('Download the course PDF', async ({ page, practicePage }) => {
    await practicePage.goto();
    const downloadLink = practicePage.files.downloadPDFLink;
    await expect(downloadLink).toHaveAttribute('href', /\.pdf$/);
    const downloadPromise = page.waitForEvent('download');
    await downloadLink.click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/\.pdf$/i);
  });
});
