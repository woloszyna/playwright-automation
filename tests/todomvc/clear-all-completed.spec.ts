import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Clear all completed tasks to the empty state', async ({ todoPage }) => {
    await todoPage.goto();
    // Add two tasks and complete both
    for (const title of ['Completed one', 'Completed two']) {
      await todoPage.addTodo(title);
    }
    for (const toggle of await todoPage.toggles.all()) await toggle.check();
    // Clear all completed rows
    await todoPage.clearCompleted();
    await expect(todoPage.titles).toHaveCount(0);
    await expect(todoPage.allLink).toHaveCount(0);
    await expect(todoPage.toggleAll).toHaveCount(0);
  });
});
