import { expect, test } from '@playwright/test';

test.describe('Dialogs & Interactions', () => {
  test('Perform the right-click mouse action', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const target = page.getByRole('button', { name: 'Right Click Me', exact: true });
    await target.scrollIntoViewIfNeeded();
    await expect(target).toBeVisible();
    await target.click({ button: 'right' });
    await expect(target).toBeVisible();
  });
});
