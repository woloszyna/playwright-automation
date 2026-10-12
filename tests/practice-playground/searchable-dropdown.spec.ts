import { expect, test } from '@playwright/test';

test.describe('Dropdowns', () => {
  test('Search choices in the custom dropdown', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const search = page.getByPlaceholder('Type to search skills…');
    await search.fill('playwright');
    await expect(search).toHaveValue('playwright');
    await expect(page.getByText(/playwright/i).last()).toBeVisible();
    await search.fill('no-match-987');
    await expect(search).toHaveValue('no-match-987');
    await search.press('Escape');
  });
});
