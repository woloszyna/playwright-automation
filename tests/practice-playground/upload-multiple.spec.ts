import { expect, test } from '../../fixtures/test';

test.describe('File Handling', () => {
  test('Upload multiple files', async ({ practicePage }) => {
    await practicePage.goto();
    const file = practicePage.files.uploadMultiple;
    await expect(file).toHaveAttribute('multiple', '');
    await file.setInputFiles([
      { name: 'first.txt', mimeType: 'text/plain', buffer: Buffer.from('first') },
      { name: 'second.txt', mimeType: 'text/plain', buffer: Buffer.from('second') },
    ]);
    await expect(file).toHaveValue(/first\.txt$/);
    await expect.poll(() => file.evaluate(input => (input as HTMLInputElement).files?.length)).toBe(2);
    await practicePage.files.resetMultiple.click();
    await expect(file).toHaveValue('');
  });
});
