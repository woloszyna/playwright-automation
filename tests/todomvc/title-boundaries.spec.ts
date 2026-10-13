import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Preserve long and special-character titles safely', async ({ todoPage }) => {
    await todoPage.goto();
    // Submit a long title containing punctuation and markup-like text
    const title = `${'Long task '.repeat(50)} & <b>not markup</b> "quoted" café`;
    await todoPage.addTodo(title);
    // Ensure the title is rendered as literal text and remains a single task
    const todoTitle = todoPage.titles;
    await expect(todoTitle).toHaveCount(1);
    await expect(todoTitle).toHaveText(title);
    await expect(todoPage.titleMarkup).toHaveCount(0);
    await expect(todoPage.itemCount).toContainText('1');
  });
});
