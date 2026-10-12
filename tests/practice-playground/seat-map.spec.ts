import { expect, test } from '@playwright/test';

test.describe('Advanced UI Elements and linked labs', () => {
  test('Render the interactive seat booking map', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const heading = page.getByRole('heading', { name: 'Interactive Seat Booking Map' });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    const section = page.locator('section').filter({ has: heading }).first();
    await expect(section).toBeVisible();
    expect(await section.locator('svg,button,[role="button"]').count()).toBeGreaterThan(0);
  });
});
