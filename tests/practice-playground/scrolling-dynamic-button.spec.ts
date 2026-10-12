import { expect, test } from '@playwright/test';

test.describe('Dialogs & Interactions', () => {
  test('Operate the dynamic button', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const start = page.getByRole('button', { name: 'Start', exact: true });
    await start.scrollIntoViewIfNeeded();
    await expect(start).toBeVisible();
    await start.click();
    const startUpper = page.getByRole('button', { name: 'START', exact: true });
    await expect(startUpper).toBeVisible();
    await expect(startUpper).toBeEnabled();
  });
});
