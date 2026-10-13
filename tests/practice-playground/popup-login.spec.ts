import { expect, test } from '../../fixtures/test';

test.describe('Browser Contexts, Tabs, Windows, and Frames', () => {
  test('Open the login window', async ({ page, practicePage }) => {
    await practicePage.goto();
    const popupPromise = page.waitForEvent('popup');
    await practicePage.windowsAndFrames.openLoginWindowButton.click();
    const popup = await popupPromise;
    await expect(page).toHaveURL(/practice\.html/);
    await expect(practicePage.windowsAndFrames.openLoginWindow).toBeVisible();
    expect(popup.isClosed()).toBe(false);
    await popup.close();
  });
});
