import { expect, test } from '@playwright/test';

test.describe('Dropdowns', () => {
  test('Search and select product suggestions', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    await expect(page).toHaveTitle('Practice Playground · Playwright Automation Practice');
    const search = page.getByPlaceholder('Search for Products');
    await search.fill('lap');
    const suggestions = page.getByTestId('autosuggest-results');
    await expect(suggestions).toBeVisible();
    await expect(suggestions).not.toBeEmpty();
    await search.fill('no-such-product-987');
    await expect(suggestions).toBeHidden();
  });
});
