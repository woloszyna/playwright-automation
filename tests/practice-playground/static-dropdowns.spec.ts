import { expect, test } from '../../fixtures/test';

test.describe('Dropdowns', () => {
  test('Select country and sorted animal options', async ({ practicePage }) => {
    await practicePage.goto();
    const country = practicePage.dropdowns.selectCountry;
    await country.selectOption({ label: 'Canada' });
    await expect(country).toHaveValue(/.+/);
    const animals = practicePage.dropdowns.sortedAnimals;
    await expect(practicePage.dropdowns.animalOptions).toHaveText(['Cat','Cheetah','Deer','Dog','Elephant','Fox','Giraffe','Lion','Rabbit','Zebra']);
    await animals.selectOption({ label: 'Fox' });
    await expect(animals).toHaveValue(/.+/);
  });
});
