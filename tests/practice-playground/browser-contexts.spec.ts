import { expect, test } from '@playwright/test';

test.describe('Browser Contexts, Tabs, Windows, and Frames', () => {
  test('Open documentation in a new page and close it', async ({ page, context }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const popupPromise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Open Playwright Docs' }).click();
    const popup = await popupPromise;
    await expect(popup).toHaveURL(/playwright\.dev/);
    await expect(page).toHaveURL(/practice\.html/);
    await popup.close();
    await expect(page.getByRole('button', { name: 'Open Mobilewright Window' })).toBeVisible();
    expect(context.pages()).toContain(page);
  });
});
