import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Keep the item count accurate and grammatically correct', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Add two tasks and verify plural count
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    for (const title of ['First task', 'Second task']) {
      await input.fill(title);
      await input.press('Enter');
    }
    const count = page.locator('.todo-count');
    await expect(count).toHaveText('2 items left');
    // Verify singular, then zero active tasks
    await page.getByRole('listitem').filter({ hasText: 'First task' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
    await expect(count).toHaveText('1 item left');
    await page.getByRole('listitem').filter({ hasText: 'Second task' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
    await expect(count).toHaveText('0 items left');
  });
});
