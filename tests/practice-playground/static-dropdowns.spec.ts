import { expect, test } from '@playwright/test';

test.describe('Dropdowns', () => {
  test('Select country and sorted animal options', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const country = page.getByLabel('Select Country', { exact: true });
    await country.selectOption({ label: 'Canada' });
    await expect(country).toHaveValue(/.+/);
    const animals = page.getByLabel('Sorted Animals', { exact: true });
    await expect(animals.locator('option')).toHaveText(['Cat','Cheetah','Deer','Dog','Elephant','Fox','Giraffe','Lion','Rabbit','Zebra']);
    await animals.selectOption({ label: 'Fox' });
    await expect(animals).toHaveValue(/.+/);
  });
});
