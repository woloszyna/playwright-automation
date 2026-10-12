import { expect, test } from '@playwright/test';

test.describe('Calendars and Date Pickers', () => {
  test('Navigate the jQuery UI datepicker and clear selection', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const heading = page.getByRole('heading', { name: 'jQuery UI Datepicker' });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    const input = page.getByTestId('dp-arrow-input');
    await input.click();
    const next = page.getByTestId('dp-arrow-next');
    await next.click();
    await page.getByTestId('dp-arrow-today').click();
    await expect(input).not.toHaveValue('');
    await input.click();
    await page.getByTestId('dp-arrow-clear').click();
    await expect(input).toHaveValue('');
  });
});
