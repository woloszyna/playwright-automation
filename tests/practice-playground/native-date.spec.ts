import { expect, test } from '../../fixtures/test';

test.describe('Calendars and Date Pickers', () => {
  test('Enter a valid native date', async ({ practicePage }) => {
    await practicePage.goto();
    const date = practicePage.calendars.nativeDates.first();
    await date.scrollIntoViewIfNeeded();
    await date.fill('2025-06-15');
    await expect(date).toHaveValue('2025-06-15');
    await date.fill('');
    await expect(date).toHaveValue('');
  });
});
