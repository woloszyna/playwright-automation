import { expect, test } from '@playwright/test';

test.describe('Form Controls', () => {
  test('Reset form values and select one radio option', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const name = page.getByLabel('Name', { exact: true });
    await name.fill('Reset me');
    await page.getByRole('button', { name: 'Reset', exact: true }).first().click();
    await expect(name).toHaveValue('');
    const female = page.getByLabel('Female', { exact: true });
    await female.check();
    await expect(female).toBeChecked();
    await expect(page.getByLabel('Male', { exact: true })).not.toBeChecked();
  });
});
