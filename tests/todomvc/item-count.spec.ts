import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Keep the item count accurate and grammatically correct', async ({ todoPage }) => {
    await todoPage.goto();
    // Add two tasks and verify plural count
    for (const title of ['First task', 'Second task']) {
      await todoPage.addTodo(title);
    }
    const count = todoPage.itemCount;
    await expect(count).toHaveText('2 items left');
    // Verify singular, then zero active tasks
    await todoPage.todoToggle('First task').check();
    await expect(count).toHaveText('1 item left');
    await todoPage.todoToggle('Second task').check();
    await expect(count).toHaveText('0 items left');
  });
});
