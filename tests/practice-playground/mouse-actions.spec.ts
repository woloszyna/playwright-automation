import { expect, test } from '../../fixtures/test';

test.describe('Dialogs & Interactions', () => {
  test('Perform the right-click mouse action', async ({ practicePage }) => {
    await practicePage.goto();
    const target = practicePage.interactions.rightClickMeButton;
    await target.scrollIntoViewIfNeeded();
    await expect(target).toBeVisible();
    await target.click({ button: 'right' });
    await expect(target).toBeVisible();
  });
});
