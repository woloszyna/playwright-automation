import { expect, test } from '../../fixtures/test';

test.describe('Form Controls', () => {
  test('Show and hide the target field', async ({ practicePage }) => {
    await practicePage.goto();
    const target = practicePage.formControls.targetField;
    await expect(target).toBeVisible();
    await practicePage.formControls.hideTargetField();
    await expect(target).toBeHidden();
    await practicePage.formControls.showTargetField();
    await expect(target).toBeVisible();
  });
});
