import { expect, test } from '../../fixtures/test';

test.describe('Calendars and Date Pickers', () => {
  test('Inspect enterprise date fields', async ({ practicePage }) => {
    await practicePage.goto();
    const heading = practicePage.calendars.enterpriseDateInputsHeading;
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    const section = practicePage.calendars.enterpriseSection;
    await expect(section).toBeVisible();
    expect(await practicePage.calendars.enterpriseInputs.count()).toBeGreaterThan(0);
  });
});
