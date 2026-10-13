import { expect, test } from '../../fixtures/test';

test.describe('Browser Contexts, Tabs, Windows, and Frames', () => {
  test('Render payment gateway iframe', async ({ practicePage }) => {
    await practicePage.goto();
    const heading = practicePage.windowsAndFrames.paymentGatewayFrameHeading;
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    expect(await practicePage.windowsAndFrames.iframes.count()).toBeGreaterThan(0);
  });
});
