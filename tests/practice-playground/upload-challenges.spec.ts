import { expect, test } from '../../fixtures/test';

test.describe('File Handling', () => {
  test('Use the hidden resume upload control', async ({ practicePage }) => {
    await practicePage.goto();
    await practicePage.files.uploadChallengesHeading.scrollIntoViewIfNeeded();
    const file = practicePage.files.uploadHidden;
    await file.setInputFiles({ name: 'resume.pdf', mimeType: 'application/pdf', buffer: Buffer.from('%PDF-1.4 sample') });
    await expect(file).toHaveValue(/resume\.pdf$/);
    await practicePage.files.resetHidden.click();
    await expect(file).toHaveValue('');
  });
});
