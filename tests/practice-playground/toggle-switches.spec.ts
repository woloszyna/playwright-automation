import { expect, test } from '@playwright/test';

test.describe('Form Controls', () => {
  test('Operate toggle switches independently', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const notifications = page.getByLabel('Enable Notifications', { exact: true });
    const emailAlerts = page.getByLabel('Email Alerts', { exact: true });
    const autoSave = page.getByLabel('Auto Save', { exact: true });
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
