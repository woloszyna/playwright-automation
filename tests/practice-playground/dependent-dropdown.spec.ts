import { expect, test } from '../../fixtures/test';

test.describe('Dropdowns', () => {
  test('Reset dependent state and city options when country changes', async ({ practicePage }) => {
    await practicePage.goto();
    const country = practicePage.dropdowns.country;
    const state = practicePage.dropdowns.state;
    const city = practicePage.dropdowns.city;
    await expect(state).toBeDisabled();
    await expect(city).toBeDisabled();
    await country.selectOption({ label: 'India' });
    await expect(state).toBeEnabled();
    await expect(practicePage.dropdowns.stateOptions).not.toHaveCount(1);
    await state.selectOption({ index: 1 });
    await expect(city).toBeEnabled();
    await city.selectOption({ index: 1 });
    await country.selectOption({ label: 'USA' });
    await expect(state).toBeEnabled();
    await expect(state).toHaveValue('');
  });
});
