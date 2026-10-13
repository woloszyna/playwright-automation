import { expect, test } from '../../fixtures/test';

test.describe('Dropdowns', () => {
  test('Search choices in the custom dropdown', async ({ practicePage }) => {
    await practicePage.goto();
    const search = practicePage.dropdowns.typeToSearchSkills;
    await search.fill('playwright');
    await expect(search).toHaveValue('playwright');
    await expect(practicePage.dropdowns.playwrightSkillMatches.last()).toBeVisible();
    await search.fill('no-match-987');
    await expect(search).toHaveValue('no-match-987');
    await search.press('Escape');
  });
});
