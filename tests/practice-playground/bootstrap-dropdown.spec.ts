import { expect, test } from '../../fixtures/test';

test.describe('Dropdowns', () => {
  test('Open and dismiss the Bootstrap dropdown', async ({ practicePage }) => {
    await practicePage.goto();
    const heading = practicePage.dropdowns.bootstrapDropdownHeading;
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    const trigger = practicePage.dropdowns.bootstrapTrigger;
    await trigger.click();
    const option = practicePage.dropdowns.bootstrapOption('QA Engineer');
    await expect(option).toBeVisible();
    await option.click();
    await expect(practicePage.dropdowns.bootstrapSelectedValue).toHaveText('QA Engineer');
    await expect(practicePage.dropdowns.bootstrapDropdownMenu).toBeHidden();
  });
});
