import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Filter tasks by All, Active, and Completed', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Create a mixed list
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    for (const title of ['Active one', 'Completed one', 'Active two']) {
      await input.fill(title);
      await input.press('Enter');
    }
    await page.getByRole('listitem').filter({ hasText: 'Completed one' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
    // Verify Active and Completed filters
    await page.getByRole('link', { name: 'Active', exact: true }).click();
    await expect(page).toHaveURL(/#\/active$/);
    await expect(page.getByTestId('todo-title')).toHaveText(['Active one', 'Active two']);
    await page.getByRole('link', { name: 'Completed', exact: true }).click();
    await expect(page).toHaveURL(/#\/completed$/);
    await expect(page.getByTestId('todo-title')).toHaveText(['Completed one']);
    // Verify All restores the complete list
    await page.getByRole('link', { name: 'All', exact: true }).click();
    await expect(page).toHaveURL(/#\/$/);
    await expect(page.getByTestId('todo-title')).toHaveText(['Active one', 'Completed one', 'Active two']);
    await expect(page.locator('.todo-count')).toHaveText('2 items left');
  });
});
