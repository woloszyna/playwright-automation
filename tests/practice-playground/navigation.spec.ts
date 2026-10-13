import { expect, test } from '../../fixtures/test';

test.describe('Form Controls', () => {
  test('Initial page and module navigation', async ({ page, practicePage }) => {
    // Open the practice page directly so the test is independently runnable
    await practicePage.goto();
    await expect(page).toHaveTitle('Practice Playground · Playwright Automation Practice');

    // Verify the first module is present
    const formControls = practicePage.formControls.formControlsHeading;
    await expect(formControls).toBeVisible();
    await expect(practicePage.formControls.textInputsHeading).toBeVisible();
    await expect(practicePage.formControls.homeLink).toBeVisible();
  });
});
