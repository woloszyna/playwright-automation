import { expect, test } from '@playwright/test';

test.describe('Dialogs & Interactions', () => {
  test('Type into the keyboard interaction field', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const input = page.getByPlaceholder('Type character by character…');
    await input.fill('Keyboard test');
    await expect(input).toHaveValue('Keyboard test');
    await input.clear();
    await expect(input).toHaveValue('');
  });
});
