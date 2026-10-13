import { expect, test } from '../../fixtures/test';

test.describe('Tables', () => {
  test('Choose distinct flight departure and destination cities', async ({ practicePage }) => {
    await practicePage.goto();
    const heading = practicePage.tables.tableAssignmentFlightBookingPortalHeading;
    await heading.scrollIntoViewIfNeeded();
    const departure = practicePage.tables.departure;
    const destination = practicePage.tables.destination;
    await departure.selectOption({ label: 'New York' });
    await destination.selectOption({ label: 'London' });
    await expect(departure).toHaveValue(/.+/);
    await expect(destination).toHaveValue(/.+/);
    expect(await departure.inputValue()).not.toBe(await destination.inputValue());
  });
});
