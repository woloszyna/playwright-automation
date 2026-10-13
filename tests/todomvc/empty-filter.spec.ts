import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Show an empty result for a filter with no matching tasks', async ({ todoPage }) => {
    await todoPage.goto();
    // Add one active task and view Completed
    await todoPage.addTodo('Only active');
    await todoPage.filterBy('Completed');
    await expect(todoPage.titles).toHaveCount(0);
    // Complete the task from All, then return to Active where no tasks match
    await todoPage.filterBy('All');
    await todoPage.todoToggle('Only active').check();
    await todoPage.filterBy('Active');
    await expect(todoPage.titles).toHaveCount(0);
    await expect(todoPage.itemCount).toHaveText('0 items left');
  });
});
