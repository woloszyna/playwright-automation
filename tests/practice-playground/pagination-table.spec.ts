import { expect, test } from '@playwright/test';

test.describe('Tables', () => {
  test('Search and paginate table rows', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const heading = page.getByRole('heading', { name: 'Pagination Table' });
    await heading.scrollIntoViewIfNeeded();
    const search = page.getByTestId('pagination-search');
    await search.fill('no-match-value-987');
    await expect(search).toHaveValue('no-match-value-987');
    const pageSize = page.getByLabel('Rows per page', { exact: true });
    await pageSize.selectOption({ label: '25' });
    await expect(pageSize).toHaveValue('25');
    await search.clear();
    await expect(search).toHaveValue('');
  });
});
