import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Delete individual and final todos', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Add two tasks
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    for (const title of ['First', 'Second']) {
      await input.fill(title);
      await input.press('Enter');
    }
    // Delete the first task and preserve the second
    const titles = page.getByTestId('todo-title');
    await titles.first().hover();
    await page.getByRole('listitem').filter({ has: titles.first() }).getByRole('button', { name: 'Delete' }).click();
    await expect(titles).toHaveText(['Second']);
    await expect(page.locator('.todo-count')).toContainText('1');
    // Delete the final task and verify the empty state
    await titles.first().hover();
    await page.getByRole('listitem').filter({ has: titles.first() }).getByRole('button', { name: 'Delete' }).click();
    await expect(titles).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'All', exact: true })).toHaveCount(0);
  });
});
