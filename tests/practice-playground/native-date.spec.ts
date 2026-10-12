import { expect, test } from '@playwright/test';

test.describe('Calendars and Date Pickers', () => {
  test('Enter a valid native date', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const date = page.locator('input[type="date"]').first();
    await date.scrollIntoViewIfNeeded();
    await date.fill('2025-06-15');
    await expect(date).toHaveValue('2025-06-15');
    await date.fill('');
    await expect(date).toHaveValue('');
  });
});
