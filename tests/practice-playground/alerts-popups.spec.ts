import { expect, test } from '../../fixtures/test';

test.describe('Dialogs & Interactions', () => {
  test('Handle simple, confirmation, and prompt alerts', async ({ page, practicePage }) => {
    await practicePage.goto();

    // The public demo can temporarily replace the playground with a reCAPTCHA 403 page.
    const blockedPage = /^(Bot Verification|403 Forbidden)$/.test(await page.title());
    test.fixme(blockedPage, 'The demo is blocked by its upstream bot-verification or 403 page.');

    const simpleDialogPromise = page.waitForEvent('dialog');
    const simpleClickPromise = practicePage.interactions.simpleAlert.click();
    const simpleDialog = await simpleDialogPromise;
    expect(simpleDialog.type()).toBe('alert');
    await simpleDialog.accept();
    await simpleClickPromise;

    const confirmDialogPromise = page.waitForEvent('dialog');
    const confirmClickPromise = practicePage.interactions.confirmAlert.click();
    const confirmDialog = await confirmDialogPromise;
    expect(confirmDialog.type()).toBe('confirm');
    await confirmDialog.dismiss();
    await confirmClickPromise;

    const promptDialogPromise = page.waitForEvent('dialog');
    const promptClickPromise = practicePage.interactions.promptAlert.click();
    const promptDialog = await promptDialogPromise;
    expect(promptDialog.type()).toBe('prompt');
    await promptDialog.accept('Playwright test');
    await promptClickPromise;
  });
});
