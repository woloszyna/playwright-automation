import { expect, test } from '@playwright/test';

test.describe('Form Controls', () => {
  test('Show and hide the target field', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const target = page.getByLabel('Target field', { exact: true });
    await expect(target).toBeVisible();
    await page.getByRole('button', { name: 'Hide Element' }).click();
    await expect(target).toBeHidden();
    await page.getByRole('button', { name: 'Show Element' }).click();
    await expect(target).toBeVisible();
  });
});
