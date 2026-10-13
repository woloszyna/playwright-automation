import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Remove a todo by saving an empty edit', async ({ todoPage }) => {
    await todoPage.goto();
    // Create a task and enter edit mode
    await todoPage.addTodo('Remove me');
    await todoPage.startEditing();
    // Save an empty title
    const editor = todoPage.editInput;
    await editor.fill('');
    await editor.press('Enter');
    await expect(todoPage.titles).toHaveCount(0);
    await expect(todoPage.allLink).toHaveCount(0);
  });
});
