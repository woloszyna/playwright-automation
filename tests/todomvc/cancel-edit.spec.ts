import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Cancel an edit with Escape', async ({ todoPage }) => {
    await todoPage.goto();
    // Create a task and start editing it
    await todoPage.addTodo('Keep original');
    await todoPage.startEditing();
    // Change the draft and cancel the edit
    const editor = todoPage.editInput;
    await editor.fill('Temporary value');
    await editor.press('Escape');
    await expect(todoPage.titles).toHaveText('Keep original');
    await expect(todoPage.editInput).toHaveCount(0);
  });
});
