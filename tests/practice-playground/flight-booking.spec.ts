import { expect, test } from '@playwright/test';

test.describe('Tables', () => {
  test('Choose distinct flight departure and destination cities', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const heading = page.getByRole('heading', { name: 'Table Assignment — Flight Booking Portal' });
    await heading.scrollIntoViewIfNeeded();
    const departure = page.getByLabel('Departure', { exact: true });
    const destination = page.getByLabel('Destination', { exact: true });
    await departure.selectOption({ label: 'New York' });
    await destination.selectOption({ label: 'London' });
    await expect(departure).toHaveValue(/.+/);
    await expect(destination).toHaveValue(/.+/);
    expect(await departure.inputValue()).not.toBe(await destination.inputValue());
  });
});
