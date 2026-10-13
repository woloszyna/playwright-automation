import { expect, test } from '../../fixtures/test';

test.describe('File Handling', () => {
  test('Upload a single file and reset selection', async ({ practicePage }) => {
    await practicePage.goto();
    const file = practicePage.files.uploadSingle;
    await file.setInputFiles({ name: 'sample.txt', mimeType: 'text/plain', buffer: Buffer.from('sample content') });
    await expect(file).toHaveValue(/sample\.txt$/);
    await practicePage.files.resetSingle.click();
    await expect(file).toHaveValue('');
  });
});
