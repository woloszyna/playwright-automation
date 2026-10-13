import { test, expect } from '../fixtures/test';

test('has title', async ({ page, docsPage }) => {
  await docsPage.goto();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ docsPage }) => {
  await docsPage.goto();

  // Click the get started link.
  await docsPage.getStarted();

  // Expects page to have a heading with the name of Installation.
  await expect(docsPage.installationHeading).toBeVisible();
});
