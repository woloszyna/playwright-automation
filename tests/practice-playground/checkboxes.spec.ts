import { expect, test } from '../../fixtures/test';

test.describe('Form Controls', () => {
  test('Select weekdays and toggle Select All', async ({ practicePage }) => {
    await practicePage.goto();
    const sunday = practicePage.formControls.sunday;
    const monday = practicePage.formControls.monday;
    await sunday.check();
    await monday.check();
    await expect(sunday).toBeChecked();
    await practicePage.formControls.selectAllDays.check();
    for (const day of ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']) {
      await expect(practicePage.formControls.dayCheckbox(day)).toBeChecked();
    }
    await monday.uncheck();
    await expect(monday).not.toBeChecked();
    await expect(sunday).toBeChecked();
  });
});
