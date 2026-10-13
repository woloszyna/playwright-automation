import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Ignore blank and whitespace-only submissions', async ({ todoPage }) => {
    await todoPage.goto();
    // Submit a blank value
    const input = todoPage.newTodoInput;
    await input.press('Enter');
    await expect(todoPage.titles).toHaveCount(0);
    // Submit whitespace-only text
    await todoPage.addTodo('   ');
    await expect(todoPage.titles).toHaveCount(0);
    await expect(input).toHaveValue('   ');
  });
});
