import { expect, test } from '@playwright/test';

test.describe('Calendars and Date Pickers', () => {
  test('Interact with multi-calendar and dual-calendar controls', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const multi = page.getByRole('heading', { name: 'Multi-Calendar' });
    const dual = page.getByRole('heading', { name: 'Dual Calendar' });
    await multi.scrollIntoViewIfNeeded();
    await expect(multi).toBeVisible();
    await expect(dual).toBeVisible();
    const clearSelection = page.getByRole('button', { name: 'Clear selection', exact: true });
    await clearSelection.click();
    await expect(clearSelection).toBeVisible();
  });
});
