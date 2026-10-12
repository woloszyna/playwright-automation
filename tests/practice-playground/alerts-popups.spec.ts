import { expect, test } from '@playwright/test';

test.describe('Dialogs & Interactions', () => {
  test('Handle simple, confirmation, and prompt alerts', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');

    // The public demo can temporarily replace the playground with a reCAPTCHA 403 page.
    const blockedPage = /^(Bot Verification|403 Forbidden)$/.test(await page.title());
    test.fixme(blockedPage, 'The demo is blocked by its upstream bot-verification or 403 page.');

    const simpleDialogPromise = page.waitForEvent('dialog');
    const simpleClickPromise = page.getByTestId('btn-simple-alert').click();
    const simpleDialog = await simpleDialogPromise;
    expect(simpleDialog.type()).toBe('alert');
    await simpleDialog.accept();
    await simpleClickPromise;

    const confirmDialogPromise = page.waitForEvent('dialog');
    const confirmClickPromise = page.getByTestId('btn-confirm-alert').click();
    const confirmDialog = await confirmDialogPromise;
    expect(confirmDialog.type()).toBe('confirm');
    await confirmDialog.dismiss();
    await confirmClickPromise;

    const promptDialogPromise = page.waitForEvent('dialog');
    const promptClickPromise = page.getByTestId('btn-prompt-alert').click();
    const promptDialog = await promptDialogPromise;
    expect(promptDialog.type()).toBe('prompt');
    await promptDialog.accept('Playwright test');
    await promptClickPromise;
  });
});
