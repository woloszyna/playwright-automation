import { test as base } from '@playwright/test';
import { PracticePage } from '../pages/practice/PracticePage';
import { TodoPage } from '../pages/TodoPage';
import { PlaywrightDocsPage } from '../pages/PlaywrightDocsPage';

type PageObjects = {
  practicePage: PracticePage;
  todoPage: TodoPage;
  docsPage: PlaywrightDocsPage;
};

// Test-scoped objects share Playwright's isolated page and browser context.
export const test = base.extend<PageObjects>({
  practicePage: async ({ page }, use) => { await use(new PracticePage(page)); },
  todoPage: async ({ page }, use) => { await use(new TodoPage(page)); },
  docsPage: async ({ page }, use) => { await use(new PlaywrightDocsPage(page)); },
});

export { expect } from '@playwright/test';
