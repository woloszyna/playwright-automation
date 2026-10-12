import { expect, test } from '@playwright/test';

test.describe('Form Controls', () => {
  test('Select multiple clothing brands', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const brands = page.getByLabel('Clothing brands', { exact: true });
    await brands.selectOption([{ label: 'Nike' }, { label: 'Adidas' }]);
    await expect(brands).toHaveValues(['nike', 'adidas']);
    await brands.selectOption([]);
    await expect(brands).toHaveValues([]);
  });
});
