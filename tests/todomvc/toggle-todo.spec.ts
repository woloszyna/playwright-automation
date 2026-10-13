import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Toggle an individual task and update the active count', async ({ todoPage }) => {
    await todoPage.goto();
    // Add one task and verify its active status
    await todoPage.addTodo('Call the dentist');
    const toggle = todoPage.todoToggle('Call the dentist');
    await expect(toggle).not.toBeChecked();
    await expect(todoPage.itemCount).toContainText('1');
    // Complete and reactivate the task
    await toggle.check();
    await expect(toggle).toBeChecked();
    await expect(todoPage.itemCount).toContainText('0');
    await expect(todoPage.clearCompletedButton).toBeVisible();
    await toggle.uncheck();
    await expect(toggle).not.toBeChecked();
    await expect(todoPage.itemCount).toContainText('1');
    await expect(todoPage.clearCompletedButton).toHaveCount(0);
  });
});
