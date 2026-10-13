import { expect, test } from '../../fixtures/test';

test.describe('Browser Contexts, Tabs, Windows, and Frames', () => {
  test('Inspect embedded frames', async ({ practicePage }) => {
    await practicePage.goto();
    const heading = practicePage.windowsAndFrames.frameCountingHeading;
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    await expect(practicePage.windowsAndFrames.iframes.first()).toBeAttached();
    expect(await practicePage.windowsAndFrames.iframes.count()).toBeGreaterThan(0);
  });
});
