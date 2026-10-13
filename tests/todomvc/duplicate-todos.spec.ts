import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Allow duplicate titles as separate todos', async ({ todoPage }) => {
    await todoPage.goto();
    // Add the same task twice
    await todoPage.addTodo('Duplicate task');
    await todoPage.addTodo('Duplicate task');
    // Verify both task rows remain independent
    const titles = todoPage.titles;
    await expect(titles).toHaveCount(2);
    await expect(titles).toHaveText(['Duplicate task', 'Duplicate task']);
    await expect(todoPage.itemCount).toContainText('2');
    await todoPage.deleteFirstTodo();
    await expect(titles).toHaveCount(1);
  });
});
