import { expect, test } from '../../fixtures/test';

test.describe('Advanced UI Elements and linked labs', () => {
  test('Render the interactive seat booking map', async ({ practicePage }) => {
    await practicePage.goto();
    const heading = practicePage.advanced.interactiveSeatBookingMapHeading;
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    const section = practicePage.advanced.seatMapSection;
    await expect(section).toBeVisible();
    expect(await practicePage.advanced.seatMapControls.count()).toBeGreaterThan(0);
  });
});
