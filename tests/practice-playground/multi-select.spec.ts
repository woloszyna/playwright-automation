import { expect, test } from '../../fixtures/test';

test.describe('Form Controls', () => {
  test('Select multiple clothing brands', async ({ practicePage }) => {
    await practicePage.goto();
    const brands = practicePage.formControls.clothingBrands;
    await brands.selectOption([{ label: 'Nike' }, { label: 'Adidas' }]);
    await expect(brands).toHaveValues(['nike', 'adidas']);
    await brands.selectOption([]);
    await expect(brands).toHaveValues([]);
  });
});
