import type { Locator, Page } from '@playwright/test';

export class TodoPage {
  constructor(readonly page: Page) {}

  get activeLink(): Locator { return this.page.getByRole('link', { name: 'Active', exact: true }); }

  get allLink(): Locator { return this.page.getByRole('link', { name: 'All', exact: true }); }

  get clearCompletedButton(): Locator { return this.page.getByRole('button', { name: 'Clear completed' }); }

  get completedLink(): Locator { return this.page.getByRole('link', { name: 'Completed', exact: true }); }

  get editInput(): Locator { return this.page.getByRole('textbox', { name: 'Edit' }); }

  get itemCount(): Locator { return this.page.locator('.todo-count'); }

  get newTodoInput(): Locator { return this.page.getByRole('textbox', { name: 'What needs to be done?' }); }

  get rows(): Locator { return this.page.getByRole('listitem'); }

  get singleItemCount(): Locator { return this.page.getByText('1 item left'); }

  get titles(): Locator { return this.page.getByTestId('todo-title'); }

  get todosHeading(): Locator { return this.page.getByRole('heading', { name: 'todos' }); }

  get toggleAll(): Locator { return this.page.getByRole('checkbox', { name: /Mark all as complete/ }); }

  get toggles(): Locator { return this.page.getByRole('checkbox', { name: 'Toggle Todo' }); }

  async goto() { await this.page.goto('https://demo.playwright.dev/todomvc/#/'); }

  async addTodo(title: string) {
    await this.newTodoInput.fill(title);
    await this.newTodoInput.press('Enter');
  }

  todoRow(title: string): Locator { return this.rows.filter({ hasText: title }); }
  todoToggle(title: string): Locator {
    return this.todoRow(title).getByRole('checkbox', { name: 'Toggle Todo' });
  }

  async completeTodo(title: string) { await this.todoToggle(title).check(); }
  async filterBy(filter: 'All' | 'Active' | 'Completed') {
    await this.page.getByRole('link', { name: filter, exact: true }).click();
  }

  async deleteFirstTodo() {
    const title = this.titles.first();
    await title.hover();
    await this.rows.filter({ has: title }).getByRole('button', { name: 'Delete' }).click();
  }

  async clearCompleted() { await this.clearCompletedButton.click(); }
  async startEditing() { await this.titles.dblclick(); }
  async saveEdit(title: string) {
    await this.editInput.fill(title);
    await this.editInput.press('Enter');
  }
  async cancelEdit() { await this.editInput.press('Escape'); }
  get titleMarkup(): Locator { return this.titles.locator('b'); }
}
