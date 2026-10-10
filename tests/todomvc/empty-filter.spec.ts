import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Show an empty result for a filter with no matching tasks', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Add one active task and view Completed
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    await input.fill('Only active');
    await input.press('Enter');
    await page.getByRole('link', { name: 'Completed', exact: true }).click();
    await expect(page.getByTestId('todo-title')).toHaveCount(0);
    // Complete the task from All, then return to Active where no tasks match
    await page.getByRole('link', { name: 'All', exact: true }).click();
    await page.getByRole('listitem').filter({ hasText: 'Only active' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
    await page.getByRole('link', { name: 'Active', exact: true }).click();
    await expect(page.getByTestId('todo-title')).toHaveCount(0);
    await expect(page.locator('.todo-count')).toHaveText('0 items left');
  });
});
