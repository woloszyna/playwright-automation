import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Render the blank initial state', async ({ page }) => {
    // Open the app from a fresh browser context
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await expect(page).toHaveURL(/#\/$/);
    await expect(page.getByRole('heading', { name: 'todos' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'What needs to be done?' })).toBeVisible();
    // Verify empty state does not show task-only controls
    await expect(page.getByTestId('todo-title')).toHaveCount(0);
    await expect(page.getByRole('checkbox', { name: /Mark all as complete/ })).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'All', exact: true })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Clear completed' })).toHaveCount(0);
  });
});
