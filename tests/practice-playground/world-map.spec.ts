import { expect, test } from '../../fixtures/test';

test.describe('Advanced UI Elements and linked labs', () => {
  test('Render the interactive SVG world map', async ({ practicePage }) => {
    await practicePage.goto();
    const heading = practicePage.advanced.interactiveSVGWorldMapHeading;
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    const section = practicePage.advanced.worldMapSection;
    await expect(section).toBeVisible();
    expect(await practicePage.advanced.worldMapGraphic.count()).toBeGreaterThan(0);
  });
});
