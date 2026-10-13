import { expect, test } from '../../fixtures/test';

test.describe('Form Controls', () => {
  test('Submit valid text input values', async ({ practicePage }) => {
    await practicePage.goto();
    await practicePage.formControls.fillContactDetails(
      'Taylor Example', 'taylor@example.com', '42 Example Street',
    );
    await practicePage.formControls.submitContactForm();
    await expect(practicePage.formControls.nameInput).toHaveValue('Taylor Example');
    await expect(practicePage.formControls.emailInput).toHaveValue('taylor@example.com');
  });
});
