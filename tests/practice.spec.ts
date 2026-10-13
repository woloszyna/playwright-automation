import { test, expect } from '../fixtures/test';

test('practice page has the expected title', async ({ page, practicePage }) => {
  await practicePage.goto();
  await expect(page).toHaveTitle(
    'Practice Playground · Playwright Automation Practice',
  );
});

test('Login button has the expected background color', async ({ practicePage }) => {
  await practicePage.goto();
  const loginPage = await practicePage.openLoginWindow();
  expect(await loginPage.loginButtonBackgroundColor()).toBe('#2e8b57');
});
