import { expect, test } from '@playwright/test';

test.describe('Form Controls', () => {
  test('Initial page and module navigation', async ({ page }) => {
    // Open the practice page directly so the test is independently runnable
    await page.goto('https://www.playwrightautomation.com/practice.html');
    await expect(page).toHaveTitle('Practice Playground · Playwright Automation Practice');

    // Verify the first module is present
    const formControls = page.getByRole('heading', { name: 'Form Controls' });
    await expect(formControls).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Text Inputs' })).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Home' })).toBeVisible();
  });
});
