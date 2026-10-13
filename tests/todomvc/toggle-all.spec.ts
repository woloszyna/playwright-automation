import { expect, test } from '../../fixtures/test';

test.describe('TodoMVC Functional Test Plan', () => {
  test('Mark all tasks complete and active', async ({ todoPage }) => {
    await todoPage.goto();
    // Create three tasks and individually complete one
    for (const title of ['One', 'Two', 'Three']) {
      await todoPage.addTodo(title);
    }
    const toggles = todoPage.toggles;
    await toggles.nth(0).check();
    // Mark every task complete
    const master = todoPage.toggleAll;
    await master.check();
    await expect(master).toBeChecked();
    await expect(toggles).toHaveCount(3);
    for (const toggle of await toggles.all()) await expect(toggle).toBeChecked();
    await expect(todoPage.itemCount).toContainText('0');
    // Mark every task active again
    await master.uncheck();
    await expect(master).not.toBeChecked();
    for (const toggle of await toggles.all()) await expect(toggle).not.toBeChecked();
    await expect(todoPage.itemCount).toContainText('3');
  });
});
