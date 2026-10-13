import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Clear completed tasks without deleting active tasks', async ({ todoPage }) => {
    await todoPage.goto();
    // Add an active task and a task that will be completed
    await todoPage.addTodo('Keep active');
    await todoPage.addTodo('Remove completed');
    await todoPage.todoToggle('Remove completed').check();
    // Clear completed tasks, leaving active data intact
    await todoPage.clearCompleted();
    await expect(todoPage.titles).toHaveText(['Keep active']);
    await expect(todoPage.itemCount).toContainText('1');
    await expect(todoPage.clearCompletedButton).toHaveCount(0);
  });
});
