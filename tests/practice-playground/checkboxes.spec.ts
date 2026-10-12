import { expect, test } from '@playwright/test';

test.describe('Form Controls', () => {
  test('Select weekdays and toggle Select All', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const sunday = page.getByLabel('Sunday', { exact: true });
    const monday = page.getByLabel('Monday', { exact: true });
    await sunday.check();
    await monday.check();
    await expect(sunday).toBeChecked();
    await page.getByRole('checkbox', { name: 'Select all days' }).check();
    for (const day of ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']) {
      await expect(page.getByLabel(day, { exact: true })).toBeChecked();
    }
    await monday.uncheck();
    await expect(monday).not.toBeChecked();
    await expect(sunday).toBeChecked();
  });
});
