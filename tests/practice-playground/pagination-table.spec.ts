import { expect, test } from '../../fixtures/test';

test.describe('Tables', () => {
  test('Search and paginate table rows', async ({ practicePage }) => {
    await practicePage.goto();
    const heading = practicePage.tables.paginationTableHeading;
    await heading.scrollIntoViewIfNeeded();
    const search = practicePage.tables.paginationSearch;
    await search.fill('no-match-value-987');
    await expect(search).toHaveValue('no-match-value-987');
    const pageSize = practicePage.tables.rowsPerPage;
    await pageSize.selectOption({ label: '25' });
    await expect(pageSize).toHaveValue('25');
    await search.clear();
    await expect(search).toHaveValue('');
  });
});
