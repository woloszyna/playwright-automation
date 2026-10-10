import { test, expect } from '@playwright/test';

test('practice page has the expected title', async ({ page }) => {
  await page.goto('https://www.playwrightautomation.com/practice.html');

  await expect(page).toHaveTitle(
    'Practice Playground · Playwright Automation Practice',
  );
});

test('Login button has the expected background color', async ({ page }) => {
  await page.goto('https://www.playwrightautomation.com/practice.html');

  const popupPromise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Open Login Window' }).click();
  const popup = await popupPromise;
  const loginButton = popup.getByRole('button', { name: 'Login', exact: true });
  const backgroundColor = await loginButton.evaluate((button) => {
    const rgb = getComputedStyle(button).backgroundColor.match(/\d+/g);

    return rgb
      ? `#${rgb
          .slice(0, 3)
          .map((channel) => Number(channel).toString(16).padStart(2, '0'))
          .join('')}`
      : getComputedStyle(button).backgroundColor;
  });

  expect(backgroundColor).toBe('#2e8b57');
});
