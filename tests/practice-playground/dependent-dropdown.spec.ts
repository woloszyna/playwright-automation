import { expect, test } from '@playwright/test';

test.describe('Dropdowns', () => {
  test('Reset dependent state and city options when country changes', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const country = page.getByLabel('Country', { exact: true });
    const state = page.getByLabel('State', { exact: true });
    const city = page.getByLabel('City', { exact: true });
    await expect(state).toBeDisabled();
    await expect(city).toBeDisabled();
    await country.selectOption({ label: 'India' });
    await expect(state).toBeEnabled();
    await expect(state.locator('option')).not.toHaveCount(1);
    await state.selectOption({ index: 1 });
    await expect(city).toBeEnabled();
    await city.selectOption({ index: 1 });
    await country.selectOption({ label: 'USA' });
    await expect(state).toBeEnabled();
    await expect(state).toHaveValue('');
  });
});
