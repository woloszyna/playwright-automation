import { expect, test } from '@playwright/test';

test.describe('Calendars and Date Pickers', () => {
  test('Choose month and year for a dropdown datepicker', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const heading = page.getByRole('heading', { name: 'Dropdown-Based Datepicker' });
    await heading.scrollIntoViewIfNeeded();
    const selects = page.locator('select');
    const month = selects.nth(await selects.count() - 2);
    const year = selects.nth(await selects.count() - 1);
    await expect(month).toBeVisible();
    await expect(year).toBeVisible();
    await month.selectOption({ label: 'February' });
    await expect(month).toHaveValue('1');
    await expect(heading).toBeVisible();
  });
});
