import { expect, test } from '../../fixtures/test';

test.describe('Calendars and Date Pickers', () => {
  test('Choose month and year for a dropdown datepicker', async ({ practicePage }) => {
    await practicePage.goto();
    const heading = practicePage.calendars.dropdownBasedDatepickerHeading;
    await heading.scrollIntoViewIfNeeded();
    const selects = practicePage.calendars.selects;
    const month = selects.nth(await selects.count() - 2);
    const year = selects.nth(await selects.count() - 1);
    await expect(month).toBeVisible();
    await expect(year).toBeVisible();
    await month.selectOption({ label: 'February' });
    await expect(month).toHaveValue('1');
    await expect(heading).toBeVisible();
  });
});
