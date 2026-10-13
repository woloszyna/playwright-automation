import { expect, test } from '../../fixtures/test';

test.describe('Form Controls', () => {
  test('Reset form values and select one radio option', async ({ practicePage }) => {
    await practicePage.goto();
    const name = practicePage.formControls.nameInput;
    await name.fill('Reset me');
    await practicePage.formControls.resetContactForm();
    await expect(name).toHaveValue('');
    const female = practicePage.formControls.female;
    await female.check();
    await expect(female).toBeChecked();
    await expect(practicePage.formControls.male).not.toBeChecked();
  });
});
