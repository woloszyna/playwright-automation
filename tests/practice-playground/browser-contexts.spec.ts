import { expect, test } from '../../fixtures/test';

test.describe('Browser Contexts, Tabs, Windows, and Frames', () => {
  test('Open documentation in a new page and close it', async ({ page, context, practicePage }) => {
    await practicePage.goto();
    const popupPromise = page.waitForEvent('popup');
    await practicePage.windowsAndFrames.openPlaywrightDocsButton.click();
    const popup = await popupPromise;
    await expect(popup).toHaveURL(/playwright\.dev/);
    await expect(page).toHaveURL(/practice\.html/);
    await popup.close();
    await expect(practicePage.windowsAndFrames.openMobilewrightWindowButton).toBeVisible();
    expect(context.pages()).toContain(page);
  });
});
