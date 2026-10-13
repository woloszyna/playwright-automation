import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Commit an edit when focus leaves the editor', async ({ todoPage }) => {
    await todoPage.goto();
    // Create a task and enter edit mode
    const input = todoPage.newTodoInput;
    await todoPage.addTodo('Review code');
    await todoPage.startEditing();
    // Change the title and move focus outside the editor
    const editor = todoPage.editInput;
    await editor.fill('Review pull request');
    await input.click();
    await expect(todoPage.titles).toHaveText('Review pull request');
    await expect(todoPage.editInput).toHaveCount(0);
  });
});
