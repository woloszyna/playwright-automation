import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Preserve long and special-character titles safely', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Submit a long title containing punctuation and markup-like text
    const title = `${'Long task '.repeat(50)} & <b>not markup</b> "quoted" café`;
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    await input.fill(title);
    await input.press('Enter');
    // Ensure the title is rendered as literal text and remains a single task
    const todoTitle = page.getByTestId('todo-title');
    await expect(todoTitle).toHaveCount(1);
    await expect(todoTitle).toHaveText(title);
    await expect(todoTitle.locator('b')).toHaveCount(0);
    await expect(page.locator('.todo-count')).toContainText('1');
  });
});
