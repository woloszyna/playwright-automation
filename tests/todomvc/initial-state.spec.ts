import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Render the blank initial state', async ({ page, todoPage }) => {
    // Open the app from a fresh browser context
    await todoPage.goto();
    await expect(page).toHaveURL(/#\/$/);
    await expect(todoPage.todosHeading).toBeVisible();
    await expect(todoPage.newTodoInput).toBeVisible();
    // Verify empty state does not show task-only controls
    await expect(todoPage.titles).toHaveCount(0);
    await expect(todoPage.toggleAll).toHaveCount(0);
    await expect(todoPage.allLink).toHaveCount(0);
    await expect(todoPage.clearCompletedButton).toHaveCount(0);
  });
});
