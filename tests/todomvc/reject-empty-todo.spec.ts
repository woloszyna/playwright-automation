import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Ignore blank and whitespace-only submissions', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Submit a blank value
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    await input.press('Enter');
    await expect(page.getByTestId('todo-title')).toHaveCount(0);
    // Submit whitespace-only text
    await input.fill('   ');
    await input.press('Enter');
    await expect(page.getByTestId('todo-title')).toHaveCount(0);
    await expect(input).toHaveValue('   ');
  });
});
