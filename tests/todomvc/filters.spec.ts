import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Filter tasks by All, Active, and Completed', async ({ page, todoPage }) => {
    await todoPage.goto();
    // Create a mixed list
    for (const title of ['Active one', 'Completed one', 'Active two']) {
      await todoPage.addTodo(title);
    }
    await todoPage.todoToggle('Completed one').check();
    // Verify Active and Completed filters
    await todoPage.filterBy('Active');
    await expect(page).toHaveURL(/#\/active$/);
    await expect(todoPage.titles).toHaveText(['Active one', 'Active two']);
    await todoPage.filterBy('Completed');
    await expect(page).toHaveURL(/#\/completed$/);
    await expect(todoPage.titles).toHaveText(['Completed one']);
    // Verify All restores the complete list
    await todoPage.filterBy('All');
    await expect(page).toHaveURL(/#\/$/);
    await expect(todoPage.titles).toHaveText(['Active one', 'Completed one', 'Active two']);
    await expect(todoPage.itemCount).toHaveText('2 items left');
  });
});
