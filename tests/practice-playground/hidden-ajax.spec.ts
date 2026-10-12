import { expect, test } from '@playwright/test';

test.describe('Form Controls', () => {
  test('Toggle hidden controls and load asynchronous content', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    await page.getByRole('button', { name: 'Toggle Input Box 2' }).click();
    await expect(page.getByLabel('Input Box 2', { exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Toggle Checkbox 2' }).click();
    await expect(page.getByLabel('Checkbox 2', { exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Load AJAX Content' }).click();
    await expect(page.getByRole('button', { name: 'Load AJAX Content' })).toBeEnabled();
    await expect(page.getByRole('heading', { name: 'Hidden Elements & AJAX' })).toBeVisible();
  });
});
