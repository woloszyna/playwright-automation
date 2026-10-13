import { expect, test } from '../../fixtures/test';

test.describe('Tables', () => {
  test('Regenerate the dynamic table', async ({ practicePage }) => {
    await practicePage.goto();
    const heading = practicePage.tables.dynamicTableHeading;
    await heading.scrollIntoViewIfNeeded();
    const table = practicePage.tables.allTables.nth(1);
    await expect(table).toBeVisible();
    const initialRows = await practicePage.tables.dynamicRows.count();
    expect(initialRows).toBeGreaterThan(1);
    await practicePage.tables.regenerate();
    await expect(practicePage.tables.dynamicRows).toHaveCount(initialRows);
    await expect(practicePage.tables.dynamicRows.first()).toBeVisible();
  });
});
