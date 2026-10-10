import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Clear all completed tasks to the empty state', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Add two tasks and complete both
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    for (const title of ['Completed one', 'Completed two']) {
      await input.fill(title);
      await input.press('Enter');
    }
    for (const toggle of await page.getByRole('checkbox', { name: 'Toggle Todo' }).all()) await toggle.check();
    // Clear all completed rows
    await page.getByRole('button', { name: 'Clear completed' }).click();
    await expect(page.getByTestId('todo-title')).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'All', exact: true })).toHaveCount(0);
    await expect(page.getByRole('checkbox', { name: /Mark all as complete/ })).toHaveCount(0);
  });
});
