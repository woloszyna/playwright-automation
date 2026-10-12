import { expect, test } from '@playwright/test';

test.describe('Form Controls', () => {
  test('Submit valid text input values', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    await page.getByLabel('Name', { exact: true }).fill('Taylor Example');
    await page.getByLabel('Email', { exact: true }).fill('taylor@example.com');
    await page.getByLabel('Address', { exact: true }).fill('42 Example Street');
    await page.getByRole('button', { name: 'Submit', exact: true }).first().click();
    await expect(page.getByLabel('Name', { exact: true })).toHaveValue('Taylor Example');
    await expect(page.getByLabel('Email', { exact: true })).toHaveValue('taylor@example.com');
  });
});
