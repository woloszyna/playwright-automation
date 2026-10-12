import { expect, test } from '@playwright/test';

test.describe('Form Controls', () => {
  test('Reveal the delivery estimate tooltip', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const trigger = page.getByRole('button', { name: 'Delivery estimate' });
    await trigger.hover();
    await expect(trigger).toBeVisible();
    await expect(page.getByText(/delivery estimate/i).first()).toBeVisible();
  });
});
