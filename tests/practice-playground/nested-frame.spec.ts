import { expect, test } from '../../fixtures/test';

test.describe('Browser Contexts, Tabs, Windows, and Frames', () => {
  test('Load the complaint form in its frame', async ({ practicePage }) => {
    await practicePage.goto();
    const frame = practicePage.windowsAndFrames.frameSupport;
    await expect(frame).toBeHidden();
    await practicePage.windowsAndFrames.loadSupport.click();
    await expect(frame).toBeVisible();
  });
});
