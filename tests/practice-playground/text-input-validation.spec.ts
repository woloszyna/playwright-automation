import { expect, test } from '@playwright/test';

test.describe('Form Controls', () => {
  test('Validate required and malformed text input values', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const name = page.getByLabel('Name', { exact: true });
    const email = page.getByLabel('Email', { exact: true });
    await page.getByRole('button', { name: 'Submit', exact: true }).first().click();
    await expect(name).toBeVisible();
    await email.fill('not-an-email');
    await expect(email).toHaveAttribute('type', 'email');
    await expect.poll(() => email.evaluate(input => (input as HTMLInputElement).validity.typeMismatch)).toBe(true);
  });
});
