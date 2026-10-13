import { expect, test } from '../../fixtures/test';

test.describe('Dialogs & Interactions', () => {
  test('Operate the dynamic button', async ({ practicePage }) => {
    await practicePage.goto();
    const start = practicePage.interactions.startButton;
    await start.scrollIntoViewIfNeeded();
    await expect(start).toBeVisible();
    await start.click();
    const startUpper = practicePage.interactions.startedButton;
    await expect(startUpper).toBeVisible();
    await expect(startUpper).toBeEnabled();
  });
});
