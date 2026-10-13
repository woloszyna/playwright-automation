import { expect, test } from '../../fixtures/test';

test.describe('Form Controls', () => {
  test('Operate toggle switches independently', async ({ practicePage }) => {
    await practicePage.goto();
    const notifications = practicePage.formControls.enableNotifications;
    const emailAlerts = practicePage.formControls.emailAlerts;
    const autoSave = practicePage.formControls.autoSave;
    await notifications.check();
    await expect(notifications).toBeChecked();
    await expect(emailAlerts).toBeChecked();
    await emailAlerts.uncheck();
    await expect(emailAlerts).not.toBeChecked();
    await expect(notifications).toBeChecked();
    await emailAlerts.check();
    await autoSave.check();
    await expect(notifications).toBeChecked();
    await expect(emailAlerts).toBeChecked();
    await expect(autoSave).toBeChecked();
    await notifications.uncheck();
    await expect(notifications).not.toBeChecked();
    await expect(emailAlerts).toBeChecked();
  });
});
