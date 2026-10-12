import { expect, test } from '@playwright/test';

test.describe('Browser Contexts, Tabs, Windows, and Frames', () => {
  test('Open a random window and close the last page', async ({ page, context }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const pagesBefore = context.pages().length;
    await page.getByRole('button', { name: 'Open One Random Window' }).click();
    await expect.poll(() => context.pages().length).toBeGreaterThan(pagesBefore);
    const openedPages = context.pages().filter(openedPage => openedPage !== page);
    await Promise.all(openedPages.map(openedPage => openedPage.close()));
    await expect.poll(() => context.pages().length).toBe(pagesBefore);
    await expect(page).toHaveURL(/practice\.html/);
  });
});
