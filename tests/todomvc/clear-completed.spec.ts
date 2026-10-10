import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Clear completed tasks without deleting active tasks', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Add an active task and a task that will be completed
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    await input.fill('Keep active');
    await input.press('Enter');
    await input.fill('Remove completed');
    await input.press('Enter');
    await page.getByRole('listitem').filter({ hasText: 'Remove completed' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
    // Clear completed tasks, leaving active data intact
    await page.getByRole('button', { name: 'Clear completed' }).click();
    await expect(page.getByTestId('todo-title')).toHaveText(['Keep active']);
    await expect(page.locator('.todo-count')).toContainText('1');
    await expect(page.getByRole('button', { name: 'Clear completed' })).toHaveCount(0);
  });
});
