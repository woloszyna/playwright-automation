import { expect, test } from '../../fixtures/test';

test.describe('Form Controls', () => {
  test('Validate required and malformed text input values', async ({ practicePage }) => {
    await practicePage.goto();
    const name = practicePage.formControls.nameInput;
    const email = practicePage.formControls.emailInput;
    await practicePage.formControls.submitContactForm();
    await expect(name).toBeVisible();
    await email.fill('not-an-email');
    await expect(email).toHaveAttribute('type', 'email');
    await expect.poll(() => email.evaluate(input => (input as HTMLInputElement).validity.typeMismatch)).toBe(true);
  });
});
