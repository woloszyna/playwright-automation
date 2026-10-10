import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Add a task while a filter is active', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Add and complete an existing task, then filter to Active
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    await input.fill('Already completed');
    await input.press('Enter');
    await page.getByRole('listitem').filter({ hasText: 'Already completed' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
    await page.getByRole('link', { name: 'Active', exact: true }).click();
    await expect(page.getByTestId('todo-title')).toHaveCount(0);
    // Add an active task while the Active filter is selected
    await input.fill('New active task');
    await input.press('Enter');
    await expect(page).toHaveURL(/#\/active$/);
    await expect(page.getByTestId('todo-title')).toHaveText(['New active task']);
    await expect(page.locator('.todo-count')).toHaveText('1 item left');
    await page.getByRole('link', { name: 'Completed', exact: true }).click();
    await expect(page.getByTestId('todo-title')).toHaveText(['Already completed']);
  });
});
