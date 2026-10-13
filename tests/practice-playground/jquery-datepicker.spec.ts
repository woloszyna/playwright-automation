import { expect, test } from '../../fixtures/test';

test.describe('Calendars and Date Pickers', () => {
  test('Navigate the jQuery UI datepicker and clear selection', async ({ practicePage }) => {
    await practicePage.goto();
    const heading = practicePage.calendars.jqueryUIDatepickerHeading;
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    const input = practicePage.calendars.input;
    await input.click();
    const next = practicePage.calendars.next;
    await next.click();
    await practicePage.calendars.today.click();
    await expect(input).not.toHaveValue('');
    await input.click();
    await practicePage.calendars.clear.click();
    await expect(input).toHaveValue('');
  });
});
