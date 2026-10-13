import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Add one todo with Enter', async ({ todoPage }) => {
    await todoPage.goto();
    // Verify the new-todo field is present in the initial blank state
    const newTodo = todoPage.newTodoInput;
    await expect(newTodo).toBeVisible();
    // Type a valid todo title in the input
    await todoPage.addTodo('Buy groceries');
    // Assert the submitted task appears in the visible task list
    await expect(todoPage.titles).toHaveText('Buy groceries');
    await expect(todoPage.singleItemCount).toBeVisible();
    await expect(newTodo).toHaveValue('');
  });
});
