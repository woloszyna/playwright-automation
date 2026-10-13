import { expect, test } from '../../fixtures/test';

test.describe('Dialogs & Interactions', () => {
  test('Open the infinite scroll playground', async ({ page, practicePage }) => {
    await practicePage.goto();
    const open = practicePage.interactions.openInfiniteScroll;
    await open.scrollIntoViewIfNeeded();
    await expect(open).toBeVisible();
    const popupPromise = page.waitForEvent('popup');
    await open.click();
    const popup = await popupPromise;
    await expect(popup).toHaveURL(/infinite-scroll\.html/);
  });
});
