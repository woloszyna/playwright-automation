import { expect, test } from '../../fixtures/test';

test.describe('Form Controls', () => {
  test('Reveal the delivery estimate tooltip', async ({ practicePage }) => {
    await practicePage.goto();
    const trigger = practicePage.formControls.deliveryEstimateButton;
    await trigger.hover();
    await expect(trigger).toBeVisible();
    await expect(practicePage.formControls.deliveryEstimateText.first()).toBeVisible();
  });
});
