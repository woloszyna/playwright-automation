import { expect, test } from '@playwright/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Add one todo with Enter', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    // Verify the new-todo field is present in the initial blank state
    const newTodo = page.getByRole('textbox', { name: 'What needs to be done?' });
    await expect(newTodo).toBeVisible();
    // Type a valid todo title in the input
    await newTodo.fill('Buy groceries');
    // Submit valid todo title and verify the created task
    await newTodo.press('Enter');
    // Assert the submitted task appears in the visible task list
    await expect(page.getByTestId('todo-title')).toHaveText('Buy groceries');
    await expect(page.getByText('1 item left')).toBeVisible();
    await expect(newTodo).toHaveValue('');
  });
});
