import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Allow duplicate titles as separate todos', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Add the same task twice
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    await input.fill('Duplicate task');
    await input.press('Enter');
    await input.fill('Duplicate task');
    await input.press('Enter');
    // Verify both task rows remain independent
    const titles = page.getByTestId('todo-title');
    await expect(titles).toHaveCount(2);
    await expect(titles).toHaveText(['Duplicate task', 'Duplicate task']);
    await expect(page.locator('.todo-count')).toContainText('2');
    await titles.first().hover();
    await page.getByRole('listitem').filter({ has: titles.first() }).getByRole('button', { name: 'Delete' }).click();
    await expect(titles).toHaveCount(1);
  });
});
