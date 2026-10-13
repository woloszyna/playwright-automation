import { expect, test } from '../../fixtures/test';

test.describe('Dialogs & Interactions', () => {
  test('Type into the keyboard interaction field', async ({ practicePage }) => {
    await practicePage.goto();
    const input = practicePage.interactions.typeCharacterByCharacter;
    await input.fill('Keyboard test');
    await expect(input).toHaveValue('Keyboard test');
    await input.clear();
    await expect(input).toHaveValue('');
  });
});
