import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Cancel an edit with Escape', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Create a task and start editing it
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    await input.fill('Keep original');
    await input.press('Enter');
    await page.getByTestId('todo-title').dblclick();
    // Change the draft and cancel the edit
    const editor = page.getByRole('textbox', { name: 'Edit' });
    await editor.fill('Temporary value');
    await editor.press('Escape');
    await expect(page.getByTestId('todo-title')).toHaveText('Keep original');
    await expect(page.getByRole('textbox', { name: 'Edit' })).toHaveCount(0);
  });
});
