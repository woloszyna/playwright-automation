import { expect, test } from '../../fixtures/test';

test.describe('Dropdowns', () => {
  test('Search and select product suggestions', async ({ page, practicePage }) => {
    await practicePage.goto();
    await expect(page).toHaveTitle('Practice Playground · Playwright Automation Practice');
    const search = practicePage.dropdowns.searchForProducts;
    await search.fill('lap');
    const suggestions = practicePage.dropdowns.autosuggestResults;
    await expect(suggestions).toBeVisible();
    await expect(suggestions).not.toBeEmpty();
    await search.fill('no-such-product-987');
    await expect(suggestions).toBeHidden();
  });
});
