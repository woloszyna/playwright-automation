import { expect, test } from '../../fixtures/test';

test.describe('Advanced UI Elements and linked labs', () => {
  test('Open a linked lab and return to Practice Playground', async ({ page, practicePage }) => {
    await practicePage.goto();
    const link = practicePage.advanced.openAuthStateLab;
    await link.scrollIntoViewIfNeeded();
    const destination = await link.getAttribute('href');
    expect(destination).toBeTruthy();
    const popupPromise = page.waitForEvent('popup');
    await link.click();
    const popup = await popupPromise;
    await expect(popup).toHaveURL(/authentication-state-lab\.html$/);
    await expect(page).toHaveURL(/practice\.html/);
    await popup.close();
  });
});
