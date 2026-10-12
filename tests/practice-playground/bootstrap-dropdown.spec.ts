import { expect, test } from '@playwright/test';

test.describe('Dropdowns', () => {
  test('Open and dismiss the Bootstrap dropdown', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    const heading = page.getByRole('heading', { name: 'Bootstrap Dropdown' });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
    const section = page.locator('#section-bootstrap-dropdown');
    const trigger = section.getByText('-- Select --', { exact: true });
    await trigger.click();
    const option = section.getByRole('option', { name: 'QA Engineer', exact: true });
    await expect(option).toBeVisible();
    await option.click();
    await expect(page.getByTestId('bootstrap-selected-value')).toHaveText('QA Engineer');
    await expect(page.getByTestId('bootstrap-dropdown-menu')).toBeHidden();
  });
});
