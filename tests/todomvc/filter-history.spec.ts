import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Navigate filters with browser history', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Create mixed task states
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    await input.fill('Active task');
    await input.press('Enter');
    await input.fill('Completed task');
    await input.press('Enter');
    await page.getByRole('listitem').filter({ hasText: 'Completed task' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
    // Visit routes and navigate back and forward
    await page.getByRole('link', { name: 'Active', exact: true }).click();
    await page.getByRole('link', { name: 'Completed', exact: true }).click();
    await page.goBack();
    await expect(page).toHaveURL(/#\/active$/);
    await expect(page.getByTestId('todo-title')).toHaveText(['Active task']);
    await page.goForward();
    await expect(page).toHaveURL(/#\/completed$/);
    await expect(page.getByTestId('todo-title')).toHaveText(['Completed task']);
  });
});
