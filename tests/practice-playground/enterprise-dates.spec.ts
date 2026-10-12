import { expect, test } from '@playwright/test';

test.describe('Calendars and Date Pickers', () => {
  test('Inspect enterprise date fields', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const heading = page.getByRole('heading', { name: 'Enterprise Date Inputs' });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    const section = page.locator('section').filter({ has: heading }).first();
    await expect(section).toBeVisible();
    expect(await section.locator('input').count()).toBeGreaterThan(0);
  });
});
