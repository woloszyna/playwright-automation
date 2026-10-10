import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Commit an edit when focus leaves the editor', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Create a task and enter edit mode
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    await input.fill('Review code');
    await input.press('Enter');
    await page.getByTestId('todo-title').dblclick();
    // Change the title and move focus outside the editor
    const editor = page.getByRole('textbox', { name: 'Edit' });
    await editor.fill('Review pull request');
    await input.click();
    await expect(page.getByTestId('todo-title')).toHaveText('Review pull request');
    await expect(page.getByRole('textbox', { name: 'Edit' })).toHaveCount(0);
  });
});
