import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Mark all tasks complete and active', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Create three tasks and individually complete one
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    for (const title of ['One', 'Two', 'Three']) {
      await input.fill(title);
      await input.press('Enter');
    }
    const toggles = page.getByRole('checkbox', { name: 'Toggle Todo' });
    await toggles.nth(0).check();
    // Mark every task complete
    const master = page.getByRole('checkbox', { name: /Mark all as complete/ });
    await master.check();
    await expect(master).toBeChecked();
    await expect(toggles).toHaveCount(3);
    for (const toggle of await toggles.all()) await expect(toggle).toBeChecked();
    await expect(page.locator('.todo-count')).toContainText('0');
    // Mark every task active again
    await master.uncheck();
    await expect(master).not.toBeChecked();
    for (const toggle of await toggles.all()) await expect(toggle).not.toBeChecked();
    await expect(page.locator('.todo-count')).toContainText('3');
  });
});
