import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Add a task while a filter is active', async ({ page, todoPage }) => {
    await todoPage.goto();
    // Add and complete an existing task, then filter to Active
    await todoPage.addTodo('Already completed');
    await todoPage.todoToggle('Already completed').check();
    await todoPage.filterBy('Active');
    await expect(todoPage.titles).toHaveCount(0);
    // Add an active task while the Active filter is selected
    await todoPage.addTodo('New active task');
    await expect(page).toHaveURL(/#\/active$/);
    await expect(todoPage.titles).toHaveText(['New active task']);
    await expect(todoPage.itemCount).toHaveText('1 item left');
    await todoPage.filterBy('Completed');
    await expect(todoPage.titles).toHaveText(['Already completed']);
  });
});
