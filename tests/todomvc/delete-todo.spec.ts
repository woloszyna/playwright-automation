import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Delete individual and final todos', async ({ todoPage }) => {
    await todoPage.goto();
    // Add two tasks
    for (const title of ['First', 'Second']) {
      await todoPage.addTodo(title);
    }
    // Delete the first task and preserve the second
    const titles = todoPage.titles;
    await todoPage.deleteFirstTodo();
    await expect(titles).toHaveText(['Second']);
    await expect(todoPage.itemCount).toContainText('1');
    // Delete the final task and verify the empty state
    await todoPage.deleteFirstTodo();
    await expect(titles).toHaveCount(0);
    await expect(todoPage.allLink).toHaveCount(0);
  });
});
