import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Edit a todo and save with Enter', async ({ todoPage }) => {
    await todoPage.goto();
    // Create a task and open inline editing
    await todoPage.addTodo('Prepare draft');
    await todoPage.startEditing();
    // Replace the title and commit with Enter
    const editor = todoPage.editInput;
    await expect(editor).toHaveValue('Prepare draft');
    await editor.fill('Prepare final draft');
    await editor.press('Enter');
    await expect(todoPage.titles).toHaveText('Prepare final draft');
    await expect(todoPage.editInput).toHaveCount(0);
    await expect(todoPage.itemCount).toContainText('1');
  });
});
