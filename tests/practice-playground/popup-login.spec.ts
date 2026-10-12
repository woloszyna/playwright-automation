import { expect, test } from '@playwright/test';

test.describe('Browser Contexts, Tabs, Windows, and Frames', () => {
  test('Open the login window', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const popupPromise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Open Login Window' }).click();
    const popup = await popupPromise;
    await expect(page).toHaveURL(/practice\.html/);
    await expect(page.getByTestId('btn-open-login-window')).toBeVisible();
    expect(popup.isClosed()).toBe(false);
    await popup.close();
  });
});
