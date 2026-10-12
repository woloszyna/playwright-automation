import { expect, test } from '@playwright/test';

test.describe('Tables', () => {
  test('Regenerate the dynamic table', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const heading = page.getByRole('heading', { name: 'Dynamic Table' });
    await heading.scrollIntoViewIfNeeded();
    const table = page.getByRole('table').nth(1);
    await expect(table).toBeVisible();
    const initialRows = await table.getByRole('row').count();
    expect(initialRows).toBeGreaterThan(1);
    await page.getByRole('button', { name: /Regenerate/ }).click();
    await expect(table.getByRole('row')).toHaveCount(initialRows);
    await expect(table.getByRole('row').first()).toBeVisible();
  });
});
