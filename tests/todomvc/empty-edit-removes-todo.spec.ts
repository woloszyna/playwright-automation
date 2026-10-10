import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Remove a todo by saving an empty edit', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Create a task and enter edit mode
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    await input.fill('Remove me');
    await input.press('Enter');
    await page.getByTestId('todo-title').dblclick();
    // Save an empty title
    const editor = page.getByRole('textbox', { name: 'Edit' });
    await editor.fill('');
    await editor.press('Enter');
    await expect(page.getByTestId('todo-title')).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'All', exact: true })).toHaveCount(0);
  });
});
