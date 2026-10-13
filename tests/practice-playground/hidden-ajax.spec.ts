import { expect, test } from '../../fixtures/test';

test.describe('Form Controls', () => {
  test('Toggle hidden controls and load asynchronous content', async ({ practicePage }) => {
    await practicePage.goto();
    await practicePage.formControls.toggleSecondInput();
    await expect(practicePage.formControls.inputBox2).toBeVisible();
    await practicePage.formControls.toggleSecondCheckbox();
    await expect(practicePage.formControls.checkbox2).toBeVisible();
    await practicePage.formControls.loadAjaxContent();
    await expect(practicePage.formControls.loadAJAXContentButton).toBeEnabled();
    await expect(practicePage.formControls.hiddenElementsAJAXHeading).toBeVisible();
  });
});
