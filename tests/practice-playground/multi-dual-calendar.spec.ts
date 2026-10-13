import { expect, test } from '../../fixtures/test';

test.describe('Calendars and Date Pickers', () => {
  test('Interact with multi-calendar and dual-calendar controls', async ({ practicePage }) => {
    await practicePage.goto();
    const multi = practicePage.calendars.multiCalendarHeading;
    const dual = practicePage.calendars.dualCalendarHeading;
    await multi.scrollIntoViewIfNeeded();
    await expect(multi).toBeVisible();
    await expect(dual).toBeVisible();
    const clearSelection = practicePage.calendars.clearSelectionButton;
    await clearSelection.click();
    await expect(clearSelection).toBeVisible();
  });
});
