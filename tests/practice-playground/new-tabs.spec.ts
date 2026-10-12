import { expect, test } from '@playwright/test';

test.describe('Browser Contexts, Tabs, Windows, and Frames', () => {
  test('Open and close multiple tabs', async ({ page, context }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    await page.getByRole('button', { name: 'Open Three Tabs at Once' }).click();
    await expect.poll(() => context.pages().length).toBe(4);
    const openedPages = context.pages().filter(openedPage => openedPage !== page);
    await Promise.all(openedPages.map(openedPage => openedPage.close()));
    await expect.poll(() => context.pages().length).toBe(1);
    await expect(page).toHaveURL(/practice\.html/);
  });
});
