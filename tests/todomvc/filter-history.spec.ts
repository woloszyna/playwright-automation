import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Navigate filters with browser history', async ({ page, todoPage }) => {
    await todoPage.goto();
    // Create mixed task states
    await todoPage.addTodo('Active task');
    await todoPage.addTodo('Completed task');
    await todoPage.todoToggle('Completed task').check();
    // Visit routes and navigate back and forward
    await todoPage.filterBy('Active');
    await todoPage.filterBy('Completed');
    await page.goBack();
    await expect(page).toHaveURL(/#\/active$/);
    await expect(todoPage.titles).toHaveText(['Active task']);
    await page.goForward();
    await expect(page).toHaveURL(/#\/completed$/);
    await expect(todoPage.titles).toHaveText(['Completed task']);
  });
});
