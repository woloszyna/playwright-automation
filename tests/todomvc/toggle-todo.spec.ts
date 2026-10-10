import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Toggle an individual task and update the active count', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Add one task and verify its active status
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    await input.fill('Call the dentist');
    await input.press('Enter');
    const row = page.getByRole('listitem').filter({ hasText: 'Call the dentist' });
    const toggle = row.getByRole('checkbox', { name: 'Toggle Todo' });
    await expect(toggle).not.toBeChecked();
    await expect(page.locator('.todo-count')).toContainText('1');
    // Complete and reactivate the task
    await toggle.check();
    await expect(toggle).toBeChecked();
    await expect(page.locator('.todo-count')).toContainText('0');
    await expect(page.getByRole('button', { name: 'Clear completed' })).toBeVisible();
    await toggle.uncheck();
    await expect(toggle).not.toBeChecked();
    await expect(page.locator('.todo-count')).toContainText('1');
    await expect(page.getByRole('button', { name: 'Clear completed' })).toHaveCount(0);
  });
});
