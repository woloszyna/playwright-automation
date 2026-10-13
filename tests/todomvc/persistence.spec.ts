import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Persist todos across reloads', async ({ page, todoPage }) => {
    await todoPage.goto();
    // Create tasks in distinct completion states
    await todoPage.addTodo('Persist active');
    await todoPage.addTodo('Persist completed');
    await todoPage.todoToggle('Persist completed').check();
    // Reload and verify the task data and state survived
    await page.reload();
    await expect(todoPage.titles).toHaveText(['Persist active', 'Persist completed']);
    await expect(todoPage.todoToggle('Persist active')).not.toBeChecked();
    await expect(todoPage.todoToggle('Persist completed')).toBeChecked();
    await expect(todoPage.itemCount).toHaveText('1 item left');
  });
});
