import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Persist todos across reloads', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Create tasks in distinct completion states
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    await input.fill('Persist active');
    await input.press('Enter');
    await input.fill('Persist completed');
    await input.press('Enter');
    await page.getByRole('listitem').filter({ hasText: 'Persist completed' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
    // Reload and verify the task data and state survived
    await page.reload();
    await expect(page.getByTestId('todo-title')).toHaveText(['Persist active', 'Persist completed']);
    await expect(page.getByRole('listitem').filter({ hasText: 'Persist active' }).getByRole('checkbox', { name: 'Toggle Todo' })).not.toBeChecked();
    await expect(page.getByRole('listitem').filter({ hasText: 'Persist completed' }).getByRole('checkbox', { name: 'Toggle Todo' })).toBeChecked();
    await expect(page.locator('.todo-count')).toHaveText('1 item left');
  });
});
