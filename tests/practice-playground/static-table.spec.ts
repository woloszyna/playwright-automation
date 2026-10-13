import { expect, test } from '../../fixtures/test';

test.describe('Tables', () => {
  test('Read static web table values', async ({ practicePage }) => {
    await practicePage.goto();
    const heading = practicePage.tables.staticWebTableHeading;
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    const table = practicePage.tables.allTables.first();
    await expect(table).toBeVisible();
    await expect(practicePage.tables.staticRows).toHaveCount(7);
    await expect(practicePage.tables.staticRows.first()).toBeVisible();
  });
});
