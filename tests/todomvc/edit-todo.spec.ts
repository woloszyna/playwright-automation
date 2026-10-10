import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Edit a todo and save with Enter', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Create a task and open inline editing
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    await input.fill('Prepare draft');
    await input.press('Enter');
    await page.getByTestId('todo-title').dblclick();
    // Replace the title and commit with Enter
    const editor = page.getByRole('textbox', { name: 'Edit' });
    await expect(editor).toHaveValue('Prepare draft');
    await editor.fill('Prepare final draft');
    await editor.press('Enter');
    await expect(page.getByTestId('todo-title')).toHaveText('Prepare final draft');
    await expect(page.getByRole('textbox', { name: 'Edit' })).toHaveCount(0);
    await expect(page.locator('.todo-count')).toContainText('1');
  });
});
