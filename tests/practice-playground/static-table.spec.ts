import { expect, test } from '@playwright/test';

test.describe('Tables', () => {
  test('Read static web table values', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const heading = page.getByRole('heading', { name: 'Static Web Table' });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    const table = page.getByRole('table').first();
    await expect(table).toBeVisible();
    await expect(table.getByRole('row')).toHaveCount(7);
    await expect(table.getByRole('row').first()).toBeVisible();
  });
});
